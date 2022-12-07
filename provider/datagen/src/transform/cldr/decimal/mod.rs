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
use itertools::Itertools;
use std::borrow::Cow;
use std::collections::BTreeMap;
use std::convert::TryFrom;
use std::iter::once;
use std::iter::Once;
use tinystr::TinyAsciiStr;

use super::cldr_serde::numbers::CompactDecimalPattern;
use super::cldr_serde::numbers::DecimalFormat;

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
impl TryFrom<DecimalFormat> for CompactDecimalPatternDataV1<'static> {
    type Error = Cow<'static, str>;

    fn try_from(other: DecimalFormat) -> Result<Self, Self::Error> {
        let mut patterns: BTreeMap<(i8, Count), Pattern>;
        for pattern in other.patterns.iter() {
            let type_bytes = pattern.compact_decimal_type.bytes();
            if !(type_bytes.next() == Some(b'1') && type_bytes.all(|b| b == b'0')) {
                return Err("Ill-formed type".into());
            }
            let log10_type = i8::try_from(pattern.compact_decimal_type.len() - 1)
                .map_err(|_| "Too many digits in type")?;
            let count = match &*pattern.compact_decimal_count {
                "zero" => Count::Zero,
                "one" => Count::One,
                "few" => Count::Few,
                "many" => Count::Many,
                "other" => Count::Other,
                "1" => Count::Explicit1,
            };
            struct PlaceholderDetails {
                index: usize,
                number_of_0s: usize,
            }
            let placeholder: Option<PlaceholderDetails> = None;
            let literal_text: String;
            for (i, chunk) in pattern.pattern.split('\'').enumerate() {
                let escaped = i % 2 == 1;
                if escaped {
                    if chunk.is_empty() {
                        // '' means '.
                        literal_text.push('\'');
                    } else {
                        // Anything else wrapped in apostrophes is literal text.
                        literal_text.push_str(chunk);
                    }
                } else {
                    // We are in unquoted text, so we need to check for the
                    // symbols defined in https://www.unicode.org/reports/tr35/tr35-numbers.html#Number_Pattern_Character_Definitions.
                    if chunk
                        .chars()
                        .any(|c| ('1'..'9').contains(&c) || "@#.-,E+%‰,¤*'".contains(c))
                    {
                        return Err(
                            "0 is the only supported symbol in compact decimal patterns".into()
                        );
                    }
                    if let Some((prefix, additional_0s_and_suffix)) = chunk.split_once('0') {
                        if placeholder.is_some() {
                            return Err("Multiple placeholders in compact decimal pattern".into());
                        }
                        literal_text.push_str(prefix);
                        if let Some((middle_0s, suffix)) = additional_0s_and_suffix.rsplit_once('0')
                        {
                            if !middle_0s.chars().all(|c| c == '0') {
                                return Err(
                                    "Multiple placeholders in compact decimal pattern".into()
                                );
                            }
                            placeholder = Some(PlaceholderDetails {
                                index: literal_text.len(),
                                number_of_0s: middle_0s.len() + 2,
                            });
                            literal_text.push_str(suffix);
                        } else {
                            placeholder = Some(PlaceholderDetails {
                                index: literal_text.len(),
                                number_of_0s: 1,
                            });
                            literal_text.push_str(additional_0s_and_suffix);
                        }
                    } else {
                        // No symbols, all literal text.
                        literal_text.push_str(chunk);
                    }
                }
            }
            patterns.insert(
                (log10_type, count),
                Pattern {
                    exponent: placeholder
                        .map_or(
                            Ok(0), // TODO(egg): no, this is the "mille" case, not the "0" case; maybe a struct with an optional exponent?
                            |p| Ok(log10_type - i8::try_from(p.number_of_0s)? + 1),
                        )
                        .map_err(|_| "Too many 0s")?,
                    index: placeholder
                        .map_or(Some(u8::MAX), |p| {
                            u8::try_from(p.index).ok().and_then(|i| {
                                if i < u8::MAX {
                                    Some(i)
                                } else {
                                    None
                                }
                            })
                        })
                        .ok_or_else(|| "Placeholder index too large")?,
                    literal_text: Cow::Owned(literal_text),
                },
            );
        }
        Err("meow".into())
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
