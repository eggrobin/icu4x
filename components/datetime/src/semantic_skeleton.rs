// This file is part of ICU4X. For terms of use, please see the file
// called LICENSE at the top level of the ICU4X source tree
// (online at: https://github.com/unicode-org/icu4x/blob/main/LICENSE ).

/// A specification for a set of parts of a date that specifies a single day (as
/// opposed to a whole month, week, or quarter).
/// Only sets that yield “sensible” dates are allowed: this type cannot
/// describe a date such as “a Tuesday in 2023”.
#[derive(Debug)]
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

/// A specification for a set of parts of a date.
/// Only sets that yield “sensible” dates are allowed: this type cannot describe
/// a date such as “fourth quarter, Anno Domini”.
#[derive(Debug)]
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

impl From<DayComponents> for DateComponents {
    fn from(components: DayComponents) -> Self {
        DateComponents::Day(components)
    }
}

#[derive(Debug)]
pub enum TimeComponents {
    Hour,
    DayPeriodHour12,
    Hour12,
    Hour24,
    HourMinute,
    DayPeriodHour12Minute,
    Hour12Minute,
    Hour24Minute,
    HourMinuteSecond,
    DayPeriodHour12MinuteSecond,
    Hour12MinuteSecond,
    Hour24MinuteSecond,
}

/// A specification for the length of a date or component of a date.
#[derive(Debug)]
pub enum Length {
    /// A long date, typically spelled-out, as in “January 1, 2000”.
    Long,
    /// A medium-sized date; typically abbreviated, as in “Jan. 1, 2000”.
    Medium,
    /// A short date; typically numeric, as in “1/1/2000”.
    Short,
}

#[derive(Debug, Default)]
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
#[derive(Debug, Default)]
pub struct TimeZone {
    /// The length of the time zone format, i.e., with
    /// `style`=[`TimeZoneStyle::NonLocation`], whether to format as “Pacific
    /// Time” ([`Length::Long`]) or “PT” ([`Length::Short`]).
    /// If this is [`None`], the length is deduced from the [`Length`] of the
    /// enclosing [`SemanticSkeleton`] when formatting.
    pub length: Option<Length>,
    /// The style, i.e., with `length`=[`Length::Short`], whether to format as
    /// “GMT−8” ([`TimeZoneStyle::Offset`]) or “PT”
    /// ([`TimeZoneStyle::NonLocation`]).
    pub style: TimeZoneStyle,
}

/// A [`SemanticSkeleton`]
#[derive(Debug)]
pub enum SemanticSkeleton {
    Date(Length, DateComponents),
    Time(Length, TimeComponents),
    DateTime(Length, DayComponents, TimeComponents),
    DateTimeZone(Length, DateComponents, TimeZone),
    TimeTimeZone(Length, TimeComponents, TimeZone),
    DateTimeTimeZone(Length, DayComponents, TimeComponents, TimeZone),
}
