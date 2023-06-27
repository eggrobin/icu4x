// This file is part of ICU4X. For terms of use, please see the file
// called LICENSE at the top level of the ICU4X source tree
// (online at: https://github.com/unicode-org/icu4x/blob/main/LICENSE ).

/// A specification for a set of parts of a date that specifies a single day (as
/// opposed to a whole month, week, or quarter).
/// Only sets that yield “sensible” dates are allowed: this type cannot
/// describe a date such as “a Tuesday in 2023”.
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

///
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

pub enum Length {
    Long,
    Medium,
    Short,
}

pub enum TimeZoneStyle {
    // Los Angeles time or Pacific Daylight Time, as is appropriate for the locale.
    // Note: for now, this is always identical to [`SpecificNonLocation`] (Pacific Daylight Time),
    // but whether it is [`NonLocation`] or [`SpecificNonLocation`] will be locale-dependent in the future; see https://unicode-org.atlassian.net/browse/CLDR-15566.
    Default,
    Location,
    NonLocation,
    SpecificNonLocation,
    Offset,
}

impl Default for TimeZoneStyle {
    fn default() -> Self {
        TimeZoneStyle::Default
    }
}

#[derive(Default)]
pub struct TimeZone {
    pub length: Option<Length>,
    pub style: TimeZoneStyle,
}

/// A [`SemanticSkeleton`]
pub enum SemanticSkeleton {
    Date(Length, DateComponents),
    Time(Length, TimeComponents),
    DateTime(Length, DayComponents, TimeComponents),
    DateTimeZone(Length, DateComponents, TimeZone),
    TimeTimeZone(Length, TimeComponents, TimeZone),
    DateTimeTimeZone(Length, DayComponents, TimeComponents, TimeZone),
}
