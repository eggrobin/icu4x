// This file is part of ICU4X. For terms of use, please see the file
// called LICENSE at the top level of the ICU4X source tree
// (online at: https://github.com/unicode-org/icu4x/blob/main/LICENSE ).

/// A specification for a set of parts of a date that specifies a single day (as
/// opposed to a whole month, week, or quarter).
/// Only sets that yield “sensible” dates are allowed: this type cannot
/// describe a date such as “some Tuesday in 2023”.
#[derive(Debug, Clone)]
#[non_exhaustive]
pub enum DayComponents {
    /// The day of the month, as in “on the 1st”.
    Day,
    /// The month and day of the month, as in “January 1st”.
    MonthDay,
    /// The year, month, and day of the month, as in “January 1st, 2000”.
    YearMonthDay,
    /// The era, year, month, and day of the month, as in “January 1st, 2000 A.D.”.
    EraYearMonthDay,
    /// The day of the month and day of the week, as in “Saturday 1st”.
    DayWeekday,
    /// The month, day of the month, and day of the week, as in “Saturday, January 1st”.
    MonthDayWeekday,
    /// The year, month, day of the month, and day of the week, as in
    /// “Saturday, January 1st, 2000”.
    YearMonthDayWeekday,
    /// The era, year, month, day of the month, and day of the week, as in
    /// “Saturday, January 1st, 2000 A.D.”.
    EraYearMonthDayWeekday,
    /// The day of the week alone, as in “Saturday”.
    Weekday,
}

impl DayComponents {
    pub fn matches_symbols<I>(&self, symbols: I) -> bool
    where
        I: IntoIterator<Item = crate::fields::FieldSymbol>,
    {
        symbols
            .into_iter()
            .zip(self.symbol_matchers())
            .all(|(symbol, component_matches)| component_matches(symbol))
    }

    fn symbol_matchers(&self) -> &'static [fn(crate::fields::symbols::FieldSymbol) -> bool] {
        use crate::fields::FieldSymbol::*;
        match self {
            DayComponents::Day => &[|s| matches!(s, Day(_))],
            DayComponents::MonthDay => &[|s| matches!(s, Month(_)), |s| matches!(s, Day(_))],
            DayComponents::YearMonthDay => &[
                |s| matches!(s, Year(_)),
                |s| matches!(s, Month(_)),
                |s| matches!(s, Day(_)),
            ],
            DayComponents::EraYearMonthDay => &[
                |s| matches!(s, Era),
                |s| matches!(s, Year(_)),
                |s| matches!(s, Month(_)),
                |s| matches!(s, Day(_)),
            ],
            DayComponents::DayWeekday => &[|s| matches!(s, Day(_)), |s| matches!(s, Weekday(_))],
            DayComponents::MonthDayWeekday => &[
                |s| matches!(s, Month(_)),
                |s| matches!(s, Day(_)),
                |s| matches!(s, Weekday(_)),
            ],
            DayComponents::YearMonthDayWeekday => &[
                |s| matches!(s, Year(_)),
                |s| matches!(s, Month(_)),
                |s| matches!(s, Day(_)),
                |s| matches!(s, Weekday(_)),
            ],
            DayComponents::EraYearMonthDayWeekday => &[
                |s| matches!(s, Era),
                |s| matches!(s, Year(_)),
                |s| matches!(s, Month(_)),
                |s| matches!(s, Day(_)),
                |s| matches!(s, Weekday(_)),
            ],
            DayComponents::Weekday => &[|s| matches!(s, Weekday(_))],
        }
    }
}

/// A specification for a set of parts of a date.
/// Only sets that yield “sensible” dates are allowed: this type cannot describe
/// a date such as “fourth quarter, Anno Domini”.
#[derive(Debug, Clone)]
#[non_exhaustive]
pub enum DateComponents {
    /// A date that specifies a single day.  Prefer constructing using [`Into`].
    Day(DayComponents),
    /// A standalone month, as in “January”.
    Month,
    /// A month and year, as in “January 2000”.
    YearMonth,
    /// A month, year, and era, as in “January 2000 A.D”.
    EraYearMonth,
    /// A year, as in “2000”.
    Year,
    /// A year with era, as in “2000 A.D.”.
    EraYear,
    /// The year and week of the year, as in “52nd week of 1999”.
    YearWeek,
    /// The quarter of the year, as in “1st quarter”.
    Quarter,
    /// The year and quarter of the year, as in “1st quarter of 2000”.
    YearQuarter,
}

impl DateComponents {
    pub fn matches_symbols<I>(&self, symbols: I) -> bool
    where
        I: IntoIterator<Item = crate::fields::FieldSymbol>,
    {
        if let DateComponents::Day(components) = self {
            components.matches_symbols(symbols)
        } else {
            symbols
                .into_iter()
                .zip(self.symbol_matchers())
                .all(|(symbol, component_matches)| component_matches(symbol))
        }
    }

    fn symbol_matchers(&self) -> &'static [fn(crate::fields::symbols::FieldSymbol) -> bool] {
        use crate::fields::FieldSymbol::*;
        match self {
            DateComponents::Day(components) => unreachable!("Day handled by the caller"),
            DateComponents::Month => &[|s| matches!(s, Month(_))],
            DateComponents::YearMonth => &[|s| matches!(s, Month(_))],
            DateComponents::EraYearMonth => &[
                |s| matches!(s, Era),
                |s| matches!(s, Year(_)),
                |s| matches!(s, Month(_)),
            ],
            DateComponents::Year => &[|s| matches!(s, Year(_))],
            DateComponents::EraYear => &[|s| matches!(s, Era), |s| matches!(s, Year(_))],
            DateComponents::YearWeek => &[|s| matches!(s, Year(_)), |s| matches!(s, Week(_))],
            DateComponents::Quarter | DateComponents::YearQuarter => &[|s| false], // No quarter support, see #501.
        }
    }
}

impl From<DayComponents> for DateComponents {
    fn from(components: DayComponents) -> Self {
        DateComponents::Day(components)
    }
}

#[derive(Debug, Clone)]
#[non_exhaustive]
pub enum TimeComponents {
    Hour,
    HourMinute,
    HourMinuteSecond,
    DayPeriodHour12,
    Hour12,
    DayPeriodHour12Minute,
    Hour12Minute,
    DayPeriodHour12MinuteSecond,
    Hour12MinuteSecond,
    Hour24,
    Hour24Minute,
    Hour24MinuteSecond,
}

impl TimeComponents {
    pub fn matches_symbols<I>(&self, symbols: I) -> bool
    where
        I: IntoIterator<Item = crate::fields::FieldSymbol>,
    {
        symbols
            .into_iter()
            .zip(self.symbol_matchers())
            .all(|(symbol, component_matches)| component_matches(symbol))
    }

    fn symbol_matchers(&self) -> &'static [fn(crate::fields::symbols::FieldSymbol) -> bool] {
        use crate::fields::FieldSymbol::*;
        match self {
            TimeComponents::Hour | TimeComponents::Hour12 | TimeComponents::Hour24 => {
                &[|s| matches!(s, Hour(_))]
            }
            TimeComponents::HourMinute
            | TimeComponents::Hour12Minute
            | TimeComponents::Hour24Minute => &[|s| matches!(s, Hour(_)), |s| matches!(s, Minute)],
            TimeComponents::HourMinuteSecond
            | TimeComponents::Hour12MinuteSecond
            | TimeComponents::Hour24MinuteSecond => &[
                |s| matches!(s, Hour(_)),
                |s| matches!(s, Minute),
                |s| matches!(s, Second(_)),
            ],
            TimeComponents::DayPeriodHour12
            | TimeComponents::DayPeriodHour12Minute
            | TimeComponents::DayPeriodHour12MinuteSecond => &[|s| false], // No day period support, see #487.
        }
    }
}

/// A specification for the length of a date or component of a date.
///
/// Contrary to [`crate::options::length::Time`] and
/// [`crate::options::length::Date`], this has only three levels, with no
/// `Full`; this is because `Full` corresponds to additional components,
/// rather than to making the components wider than in `Long`.
#[derive(Debug, Clone)]
pub enum Length {
    /// A long date, typically spelled-out, as in “January 1, 2000”.
    Long,
    /// A medium-sized date; typically abbreviated, as in “Jan. 1, 2000”.
    Medium,
    /// A short date; typically numeric, as in “1/1/2000”.
    Short,
}

#[derive(Debug, Clone, Default)]
#[non_exhaustive]
pub enum TimeZoneStyle {
    /// The location format, e.g., “Los Angeles time” or specific non-location
    /// format “Pacific Daylight Time”, whichever is idiomatic for the locale.
    /// > Note: for now, this is always identical to
    /// > [`TimeZoneStyle::SpecificNonLocation`] (Pacific Daylight Time), but
    /// > whether it is [`TimeZoneStyle::NonLocation`] or
    /// > [`TimeZoneStyle::SpecificNonLocation`] will be locale-dependent in the
    /// > future; see
    /// > [CLDR-15566](https://unicode-org.atlassian.net/browse/CLDR-15566).
    #[default]
    Default,
    /// The location format, e.g., “Los Angeles time”.
    Location,
    /// The generic non-location format, e.g., “Pacific Time”.
    NonLocation,
    /// The specific non-location format, e.g., “Pacific Daylight Time”.
    SpecificNonLocation,
    /// The offset from UTC format, e.g., “GMT−8”.
    Offset,
}

/// Specification of a time zone style with an optional length.
#[derive(Debug, Clone, Default)]
pub struct TimeZone {
    /// The length of the time zone format, _i.e._, with
    /// `style`=[`TimeZoneStyle::NonLocation`], whether to format as “Pacific
    /// Time” ([`Length::Long`]) or “PT” ([`Length::Short`]).
    /// If this is [`None`], the length is deduced from the [`Length`] of the
    /// enclosing [`SemanticSkeleton`] when formatting.
    pub length: Option<Length>,
    /// The style, _i.e._, with `length`=[`Length::Short`], whether to format as
    /// “GMT−8” ([`TimeZoneStyle::Offset`]) or “PT”
    /// ([`TimeZoneStyle::NonLocation`]).
    pub style: TimeZoneStyle,
}

#[derive(Debug, Clone)]
pub struct DateSkeleton {
    pub length: Length,
    pub components: DateComponents,
}

impl DateTimeSkeleton {
    pub fn matches_symbols<I>(&self, symbols: I) -> bool
    where
        I: IntoIterator<Item = crate::fields::FieldSymbol>,
    {
        use crate::fields::FieldSymbol::*;
        self.date.matches_symbols(
            symbols
                .into_iter()
                .filter(|field| !matches!(field, Hour(_) | Minute | Second(_) | TimeZone(_))),
        ) && self.time.matches_symbols(
            symbols
                .into_iter()
                .filter(|field| matches!(field, Hour(_) | Minute | Second(_) | TimeZone(_))),
        )
    }
}

#[derive(Debug, Clone)]
pub struct TimeSkeleton {
    pub length: Length,
    pub components: TimeComponents,
}

#[derive(Debug, Clone)]
pub struct DateTimeSkeleton {
    pub length: Length,
    pub date: DayComponents,
    pub time: TimeComponents,
}

#[derive(Debug, Clone)]
pub enum Skeleton {
    Date(DateSkeleton, Option<TimeZone>),
    Time(TimeSkeleton, Option<TimeZone>),
    DateTime(DateTimeSkeleton, Option<TimeZone>),
}
