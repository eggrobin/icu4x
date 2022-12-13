// This file is part of ICU4X. For terms of use, please see the file
// called LICENSE at the top level of the ICU4X source tree
// (online at: https://github.com/unicode-org/icu4x/blob/main/LICENSE ).

use crate::transform::cldr::cldr_serde;
#[cfg(feature = "experimental")]
use icu_compactdecimal::provider::*;
use icu_decimal::provider::*;
use icu_locid::extensions::unicode::Value;
use icu_locid::extensions_unicode_key as key;
use icu_locid::LanguageIdentifier;
use icu_provider::datagen::IterableDataProvider;
use icu_provider::prelude::*;
use icu_provider::zerofrom::ZeroFrom;
use itertools::Itertools;
use std::borrow::Cow;
use std::collections::BTreeMap;
use std::collections::BTreeSet;
use std::convert::TryFrom;
use std::iter::once;
use std::iter::Once;
use tinystr::TinyAsciiStr;
use zerovec::ule::encode_varule_to_box;
use zerovec::ule::AsULE;
use zerovec::ule::EncodeAsVarULE;

use super::cldr_serde::numbers::CompactDecimalPattern;
use super::cldr_serde::numbers::DecimalFormat;

#[cfg(feature = "experimental")]
mod compact_decimal_pattern;
mod decimal_pattern;

impl crate::DatagenProvider {
    /// Returns the digits for the given numbering system name.
    fn get_digits_for_numbering_system(
        &self,
        nsname: TinyAsciiStr<8>,
    ) -> Result<[char; 10], DataError> {
        let resource: &cldr_serde::numbering_systems::Resource = self
            .source
            .cldr()?
            .core()
            .read_and_parse("supplemental/numberingSystems.json")?;

        fn digits_str_to_chars(digits_str: &str) -> Option<[char; 10]> {
            let mut chars = digits_str.chars();
            Some([
                chars.next()?,
                chars.next()?,
                chars.next()?,
                chars.next()?,
                chars.next()?,
                chars.next()?,
                chars.next()?,
                chars.next()?,
                chars.next()?,
                chars.next()?,
            ])
        }

        match resource.supplemental.numbering_systems.get(&nsname) {
            Some(ns) => ns.digits.as_deref().and_then(digits_str_to_chars),
            None => None,
        }
        .ok_or_else(|| {
            DataError::custom("Could not process numbering system").with_display_context(&nsname)
        })
    }

    fn get_supported_numsys_for_langid_without_default(
        &self,
        langid: &LanguageIdentifier,
    ) -> Result<Vec<TinyAsciiStr<8>>, DataError> {
        let resource: &cldr_serde::numbers::Resource = self
            .source
            .cldr()?
            .numbers()
            .read_and_parse(langid, "numbers.json")?;

        let numbers = &resource
            .main
            .0
            .get(langid)
            .expect("CLDR file contains the expected language")
            .numbers;

        Ok(numbers
            .numsys_data
            .symbols
            .keys()
            .filter(|nsname| **nsname != numbers.default_numbering_system)
            .copied()
            .collect())
    }
}

impl DataProvider<DecimalSymbolsV1Marker> for crate::DatagenProvider {
    fn load(&self, req: DataRequest) -> Result<DataResponse<DecimalSymbolsV1Marker>, DataError> {
        let langid = req.locale.get_langid();

        let resource: &cldr_serde::numbers::Resource = self
            .source
            .cldr()?
            .numbers()
            .read_and_parse(&langid, "numbers.json")?;

        let numbers = &resource
            .main
            .0
            .get(&langid)
            .expect("CLDR file contains the expected language")
            .numbers;

        let nsname = match req.locale.get_unicode_ext(&key!("nu")) {
            Some(v) => *v
                .as_tinystr_slice()
                .first()
                .expect("expecting subtag if key is present"),
            None => numbers.default_numbering_system,
        };

        let mut result =
            DecimalSymbolsV1::try_from(NumbersWithNumsys(numbers, nsname)).map_err(|s| {
                DataError::custom("Could not create decimal symbols")
                    .with_display_context(&s)
                    .with_display_context(&nsname)
            })?;

        result.digits = self.get_digits_for_numbering_system(nsname)?;

        Ok(DataResponse {
            metadata: Default::default(),
            payload: Some(DataPayload::from_owned(result)),
        })
    }
}

impl IterableDataProvider<DecimalSymbolsV1Marker> for crate::DatagenProvider {
    fn supported_locales(&self) -> Result<Vec<DataLocale>, DataError> {
        Ok(self
            .source
            .cldr()?
            .numbers()
            .list_langs()?
            .flat_map(|langid| {
                let last = DataLocale::from(&langid);
                self.get_supported_numsys_for_langid_without_default(&langid)
                    .expect("All languages from list_langs should be present")
                    .into_iter()
                    .map(move |nsname| {
                        let mut data_locale = DataLocale::from(&langid);
                        data_locale.set_unicode_ext(
                            key!("nu"),
                            Value::try_from_single_subtag(nsname.as_bytes())
                                .expect("CLDR should have valid numbering system names"),
                        );
                        data_locale
                    })
                    .chain(core::iter::once(last))
            })
            .collect())
    }
}

struct NumbersWithNumsys<'a>(pub &'a cldr_serde::numbers::Numbers, pub TinyAsciiStr<8>);

impl TryFrom<NumbersWithNumsys<'_>> for DecimalSymbolsV1<'static> {
    type Error = Cow<'static, str>;

    fn try_from(other: NumbersWithNumsys<'_>) -> Result<Self, Self::Error> {
        let NumbersWithNumsys(numbers, nsname) = other;
        let symbols = numbers
            .numsys_data
            .symbols
            .get(&nsname)
            .ok_or("Could not find symbols for numbering system")?;
        let formats = numbers
            .numsys_data
            .formats
            .get(&nsname)
            .ok_or("Could not find formats for numbering system")?;
        let parsed_pattern: decimal_pattern::DecimalPattern = formats
            .standard
            .parse()
            .map_err(|s: decimal_pattern::Error| s.to_string())?;

        Ok(Self {
            minus_sign_affixes: parsed_pattern.localize_sign(&symbols.minus_sign),
            plus_sign_affixes: parsed_pattern.localize_sign(&symbols.plus_sign),
            decimal_separator: Cow::Owned(symbols.decimal.clone()),
            grouping_separator: Cow::Owned(symbols.group.clone()),
            grouping_sizes: GroupingSizesV1 {
                primary: parsed_pattern.positive.primary_grouping,
                secondary: parsed_pattern.positive.secondary_grouping,
                min_grouping: numbers.minimum_grouping_digits,
            },
            digits: Default::default(), // to be filled in
        })
    }
}

#[cfg(feature = "experimental")]
impl DataProvider<ShortCompactDecimalFormatDataV1Marker> for crate::DatagenProvider {
    fn load(
        &self,
        req: DataRequest,
    ) -> Result<DataResponse<ShortCompactDecimalFormatDataV1Marker>, DataError> {
        let langid = req.locale.get_langid();

        let resource: &cldr_serde::numbers::Resource = self
            .source
            .cldr()?
            .numbers()
            .read_and_parse(&langid, "numbers.json")?;

        let numbers = &resource
            .main
            .0
            .get(&langid)
            .expect("CLDR file contains the expected language")
            .numbers;

        let nsname = match req.locale.get_unicode_ext(&key!("nu")) {
            Some(v) => *v
                .as_tinystr_slice()
                .first()
                .expect("expecting subtag if key is present"),
            None => numbers.default_numbering_system,
        };

        let result = CompactDecimalPatternDataV1::try_from(
            &numbers
                .numsys_data
                .formats
                .get(&nsname)
                .ok_or_else(|| {
                    DataError::custom("Could not find formats for numbering system")
                        .with_display_context(&nsname)
                })?
                .short
                .decimal_format,
        )
        .map_err(|s| {
            DataError::custom("Could not create compact decimal patterns")
                .with_display_context(&s)
                .with_display_context(&nsname)
        })?;

        Ok(DataResponse {
            metadata: Default::default(),
            payload: Some(DataPayload::from_owned(result)),
        })
    }
}

#[cfg(feature = "experimental")]
impl DataProvider<LongCompactDecimalFormatDataV1Marker> for crate::DatagenProvider {
    fn load(
        &self,
        req: DataRequest,
    ) -> Result<DataResponse<LongCompactDecimalFormatDataV1Marker>, DataError> {
        let langid = req.locale.get_langid();

        let resource: &cldr_serde::numbers::Resource = self
            .source
            .cldr()?
            .numbers()
            .read_and_parse(&langid, "numbers.json")?;

        let numbers = &resource
            .main
            .0
            .get(&langid)
            .expect("CLDR file contains the expected language")
            .numbers;

        let nsname = match req.locale.get_unicode_ext(&key!("nu")) {
            Some(v) => *v
                .as_tinystr_slice()
                .first()
                .expect("expecting subtag if key is present"),
            None => numbers.default_numbering_system,
        };

        let result = CompactDecimalPatternDataV1::try_from(
            &numbers
                .numsys_data
                .formats
                .get(&nsname)
                .ok_or_else(|| {
                    DataError::custom("Could not find formats for numbering system")
                        .with_display_context(&nsname)
                })?
                .long
                .decimal_format,
        )
        .map_err(|s| {
            DataError::custom("Could not create compact decimal patterns")
                .with_display_context(&s)
                .with_display_context(&nsname)
        })?;

        Ok(DataResponse {
            metadata: Default::default(),
            payload: Some(DataPayload::from_owned(result)),
        })
    }
}

#[cfg(feature = "experimental")]
impl IterableDataProvider<ShortCompactDecimalFormatDataV1Marker> for crate::DatagenProvider {
    fn supported_locales(&self) -> Result<Vec<DataLocale>, DataError> {
        Ok(self
            .source
            .cldr()?
            .numbers()
            .list_langs()?
            .flat_map(|langid| {
                let last = DataLocale::from(&langid);
                self.get_supported_numsys_for_langid_without_default(&langid)
                    .expect("All languages from list_langs should be present")
                    .into_iter()
                    .map(move |nsname| {
                        let mut data_locale = DataLocale::from(&langid);
                        data_locale.set_unicode_ext(
                            key!("nu"),
                            Value::try_from_single_subtag(nsname.as_bytes())
                                .expect("CLDR should have valid numbering system names"),
                        );
                        data_locale
                    })
                    .chain(core::iter::once(last))
            })
            .collect())
    }
}

#[cfg(feature = "experimental")]
impl IterableDataProvider<LongCompactDecimalFormatDataV1Marker> for crate::DatagenProvider {
    fn supported_locales(&self) -> Result<Vec<DataLocale>, DataError> {
        Ok(self
            .source
            .cldr()?
            .numbers()
            .list_langs()?
            .flat_map(|langid| {
                let last = DataLocale::from(&langid);
                self.get_supported_numsys_for_langid_without_default(&langid)
                    .expect("All languages from list_langs should be present")
                    .into_iter()
                    .map(move |nsname| {
                        let mut data_locale = DataLocale::from(&langid);
                        data_locale.set_unicode_ext(
                            key!("nu"),
                            Value::try_from_single_subtag(nsname.as_bytes())
                                .expect("CLDR should have valid numbering system names"),
                        );
                        data_locale
                    })
                    .chain(core::iter::once(last))
            })
            .collect())
    }
}

#[test]
fn test_basic() {
    use icu_locid::locale;

    let provider = crate::DatagenProvider::for_test();

    let ar_decimal: DataPayload<DecimalSymbolsV1Marker> = provider
        .load(DataRequest {
            locale: &locale!("ar-EG").into(),
            metadata: Default::default(),
        })
        .unwrap()
        .take_payload()
        .unwrap();

    assert_eq!(ar_decimal.get().decimal_separator, "٫");
    assert_eq!(ar_decimal.get().digits[0], '٠');
}

#[cfg(feature = "experimental")]
#[test]

fn test_compact_long() {
    use icu_locid::locale;

    let provider = crate::DatagenProvider::for_test();

    let fr_compact_long: DataPayload<LongCompactDecimalFormatDataV1Marker> = provider
        .load(DataRequest {
            locale: &locale!("en").into(),
            metadata: Default::default(),
        })
        .unwrap()
        .take_payload()
        .unwrap();

    let nonzero_copy: Box<[(i8, Count, Pattern)]> = fr_compact_long
        .get()
        .patterns
        .iter0()
        .flat_map(|kkv| {
            let key0 = *kkv.key0();
            kkv.into_iter1()
                .map(move |(k, v)| (key0, Count::from_unaligned(*k), Pattern::zero_from(v)))
        })
        .collect();
    assert_eq!(
        nonzero_copy.as_ref(),
        [
            (
                3,
                Count::Other,
                Pattern {
                    index: 0,
                    exponent: 3,
                    literal_text: Cow::Borrowed(" thousand")
                }
            ),
            (
                6,
                Count::Other,
                Pattern {
                    index: 0,
                    exponent: 6,
                    literal_text: Cow::Borrowed(" million")
                }
            ),
            (
                9,
                Count::Other,
                Pattern {
                    index: 0,
                    exponent: 9,
                    literal_text: Cow::Borrowed(" billion")
                }
            ),
            (
                12,
                Count::Other,
                Pattern {
                    index: 0,
                    exponent: 12,
                    literal_text: Cow::Borrowed(" trillion")
                }
            ),
        ]
    );
}

#[cfg(feature = "experimental")]
#[test]
fn test_compact_short() {
    use icu_locid::locale;

    let provider = crate::DatagenProvider::for_test();

    let ja_compact_short: DataPayload<ShortCompactDecimalFormatDataV1Marker> = provider
        .load(DataRequest {
            locale: &locale!("ja").into(),
            metadata: Default::default(),
        })
        .unwrap()
        .take_payload()
        .unwrap();

    let nonzero_copy: Box<[(i8, Count, Pattern)]> = ja_compact_short
        .get()
        .patterns
        .iter0()
        .flat_map(|kkv| {
            let key0 = *kkv.key0();
            kkv.into_iter1()
                .map(move |(k, v)| (key0, Count::from_unaligned(*k), Pattern::zero_from(v)))
        })
        .collect();
    assert_eq!(
        nonzero_copy.as_ref(),
        [
            (
                4,
                Count::Other,
                Pattern {
                    index: 0,
                    exponent: 4,
                    literal_text: Cow::Borrowed("万")
                }
            ),
            (
                8,
                Count::Other,
                Pattern {
                    index: 0,
                    exponent: 8,
                    literal_text: Cow::Borrowed("億")
                }
            ),
            (
                12,
                Count::Other,
                Pattern {
                    index: 0,
                    exponent: 12,
                    literal_text: Cow::Borrowed("兆")
                }
            )
        ]
    );
}
