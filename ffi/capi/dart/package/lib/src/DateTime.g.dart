// generated by diplomat-tool

// https://github.com/dart-lang/sdk/issues/53946
// ignore_for_file: non_native_function_type_argument_to_pointer

part of 'lib.g.dart';

/// An ICU4X DateTime object capable of containing a date and time for any calendar.
///
/// See the [Rust documentation for `DateTime`](https://docs.rs/icu/latest/icu/calendar/struct.DateTime.html) for more information.
class DateTime implements ffi.Finalizable {
  final ffi.Pointer<ffi.Opaque> _underlying;

  DateTime._(this._underlying) {
    _finalizer.attach(this, _underlying.cast());
  }

  static final _finalizer = ffi.NativeFinalizer(_capi('ICU4XDateTime_destroy'));

  /// Creates a new [`DateTime`] representing the ISO date and time
  /// given but in a given calendar
  ///
  /// See the [Rust documentation for `new_from_iso`](https://docs.rs/icu/latest/icu/struct.DateTime.html#method.new_from_iso) for more information.
  ///
  /// Throws [Error] on failure.
  factory DateTime.fromIsoInCalendar(int year, int month, int day, int hour,
      int minute, int second, int nanosecond, Calendar calendar) {
    final result = _ICU4XDateTime_create_from_iso_in_calendar(year, month, day,
        hour, minute, second, nanosecond, calendar._underlying);
    if (!result.isOk) {
      throw Error.values.firstWhere((v) => v._underlying == result.union.err);
    }
    return DateTime._(result.union.ok);
  }
  // ignore: non_constant_identifier_names
  static final _ICU4XDateTime_create_from_iso_in_calendar = _capi<
              ffi.NativeFunction<
                  _ResultOpaqueInt32 Function(
                      ffi.Int32,
                      ffi.Uint8,
                      ffi.Uint8,
                      ffi.Uint8,
                      ffi.Uint8,
                      ffi.Uint8,
                      ffi.Uint32,
                      ffi.Pointer<ffi.Opaque>)>>(
          'ICU4XDateTime_create_from_iso_in_calendar')
      .asFunction<
          _ResultOpaqueInt32 Function(int, int, int, int, int, int, int,
              ffi.Pointer<ffi.Opaque>)>(isLeaf: true);

  /// Creates a new [`DateTime`] from the given codes, which are interpreted in the given calendar system
  ///
  /// See the [Rust documentation for `try_new_from_codes`](https://docs.rs/icu/latest/icu/calendar/struct.DateTime.html#method.try_new_from_codes) for more information.
  ///
  /// Throws [Error] on failure.
  factory DateTime.fromCodesInCalendar(
      String eraCode,
      int year,
      String monthCode,
      int day,
      int hour,
      int minute,
      int second,
      int nanosecond,
      Calendar calendar) {
    final alloc = ffi2.Arena();
    final eraCodeSlice = _SliceFfi2Utf8._fromDart(eraCode, alloc);
    final monthCodeSlice = _SliceFfi2Utf8._fromDart(monthCode, alloc);

    final result = _ICU4XDateTime_create_from_codes_in_calendar(
        eraCodeSlice._bytes,
        eraCodeSlice._length,
        year,
        monthCodeSlice._bytes,
        monthCodeSlice._length,
        day,
        hour,
        minute,
        second,
        nanosecond,
        calendar._underlying);
    alloc.releaseAll();
    if (!result.isOk) {
      throw Error.values.firstWhere((v) => v._underlying == result.union.err);
    }
    return DateTime._(result.union.ok);
  }
  // ignore: non_constant_identifier_names
  static final _ICU4XDateTime_create_from_codes_in_calendar = _capi<
              ffi.NativeFunction<
                  _ResultOpaqueInt32 Function(
                      ffi.Pointer<ffi2.Utf8>,
                      ffi.Size,
                      ffi.Int32,
                      ffi.Pointer<ffi2.Utf8>,
                      ffi.Size,
                      ffi.Uint8,
                      ffi.Uint8,
                      ffi.Uint8,
                      ffi.Uint8,
                      ffi.Uint32,
                      ffi.Pointer<ffi.Opaque>)>>(
          'ICU4XDateTime_create_from_codes_in_calendar')
      .asFunction<
          _ResultOpaqueInt32 Function(
              ffi.Pointer<ffi2.Utf8>,
              int,
              int,
              ffi.Pointer<ffi2.Utf8>,
              int,
              int,
              int,
              int,
              int,
              int,
              ffi.Pointer<ffi.Opaque>)>(isLeaf: true);

  /// Creates a new [`DateTime`] from an [`Date`] and [`Time`] object
  ///
  /// See the [Rust documentation for `new`](https://docs.rs/icu/latest/icu/calendar/struct.DateTime.html#method.new) for more information.
  factory DateTime.fromDateAndTime(Date date, Time time) {
    final result = _ICU4XDateTime_create_from_date_and_time(
        date._underlying, time._underlying);
    return DateTime._(result);
  }
  // ignore: non_constant_identifier_names
  static final _ICU4XDateTime_create_from_date_and_time = _capi<
              ffi.NativeFunction<
                  ffi.Pointer<ffi.Opaque> Function(
                      ffi.Pointer<ffi.Opaque>, ffi.Pointer<ffi.Opaque>)>>(
          'ICU4XDateTime_create_from_date_and_time')
      .asFunction<
          ffi.Pointer<ffi.Opaque> Function(
              ffi.Pointer<ffi.Opaque>, ffi.Pointer<ffi.Opaque>)>(isLeaf: true);

  /// Gets a copy of the date contained in this object
  ///
  /// See the [Rust documentation for `date`](https://docs.rs/icu/latest/icu/calendar/struct.DateTime.html#structfield.date) for more information.
  Date get date {
    final result = _ICU4XDateTime_date(_underlying);
    return Date._(result);
  }

  // ignore: non_constant_identifier_names
  static final _ICU4XDateTime_date = _capi<
          ffi.NativeFunction<
              ffi.Pointer<ffi.Opaque> Function(
                  ffi.Pointer<ffi.Opaque>)>>('ICU4XDateTime_date')
      .asFunction<ffi.Pointer<ffi.Opaque> Function(ffi.Pointer<ffi.Opaque>)>(
          isLeaf: true);

  /// Gets the time contained in this object
  ///
  /// See the [Rust documentation for `time`](https://docs.rs/icu/latest/icu/calendar/struct.DateTime.html#structfield.time) for more information.
  Time get time {
    final result = _ICU4XDateTime_time(_underlying);
    return Time._(result);
  }

  // ignore: non_constant_identifier_names
  static final _ICU4XDateTime_time = _capi<
          ffi.NativeFunction<
              ffi.Pointer<ffi.Opaque> Function(
                  ffi.Pointer<ffi.Opaque>)>>('ICU4XDateTime_time')
      .asFunction<ffi.Pointer<ffi.Opaque> Function(ffi.Pointer<ffi.Opaque>)>(
          isLeaf: true);

  /// Converts this date to ISO
  ///
  /// See the [Rust documentation for `to_iso`](https://docs.rs/icu/latest/icu/calendar/struct.DateTime.html#method.to_iso) for more information.
  IsoDateTime toIso() {
    final result = _ICU4XDateTime_to_iso(_underlying);
    return IsoDateTime._(result);
  }

  // ignore: non_constant_identifier_names
  static final _ICU4XDateTime_to_iso = _capi<
          ffi.NativeFunction<
              ffi.Pointer<ffi.Opaque> Function(
                  ffi.Pointer<ffi.Opaque>)>>('ICU4XDateTime_to_iso')
      .asFunction<ffi.Pointer<ffi.Opaque> Function(ffi.Pointer<ffi.Opaque>)>(
          isLeaf: true);

  /// Convert this datetime to one in a different calendar
  ///
  /// See the [Rust documentation for `to_calendar`](https://docs.rs/icu/latest/icu/calendar/struct.DateTime.html#method.to_calendar) for more information.
  DateTime toCalendar(Calendar calendar) {
    final result =
        _ICU4XDateTime_to_calendar(_underlying, calendar._underlying);
    return DateTime._(result);
  }

  // ignore: non_constant_identifier_names
  static final _ICU4XDateTime_to_calendar = _capi<
          ffi.NativeFunction<
              ffi.Pointer<ffi.Opaque> Function(ffi.Pointer<ffi.Opaque>,
                  ffi.Pointer<ffi.Opaque>)>>('ICU4XDateTime_to_calendar')
      .asFunction<
          ffi.Pointer<ffi.Opaque> Function(
              ffi.Pointer<ffi.Opaque>, ffi.Pointer<ffi.Opaque>)>(isLeaf: true);

  /// Returns the hour in this time
  ///
  /// See the [Rust documentation for `hour`](https://docs.rs/icu/latest/icu/calendar/types/struct.Time.html#structfield.hour) for more information.
  int get hour {
    final result = _ICU4XDateTime_hour(_underlying);
    return result;
  }

  // ignore: non_constant_identifier_names
  static final _ICU4XDateTime_hour =
      _capi<ffi.NativeFunction<ffi.Uint8 Function(ffi.Pointer<ffi.Opaque>)>>(
              'ICU4XDateTime_hour')
          .asFunction<int Function(ffi.Pointer<ffi.Opaque>)>(isLeaf: true);

  /// Returns the minute in this time
  ///
  /// See the [Rust documentation for `minute`](https://docs.rs/icu/latest/icu/calendar/types/struct.Time.html#structfield.minute) for more information.
  int get minute {
    final result = _ICU4XDateTime_minute(_underlying);
    return result;
  }

  // ignore: non_constant_identifier_names
  static final _ICU4XDateTime_minute =
      _capi<ffi.NativeFunction<ffi.Uint8 Function(ffi.Pointer<ffi.Opaque>)>>(
              'ICU4XDateTime_minute')
          .asFunction<int Function(ffi.Pointer<ffi.Opaque>)>(isLeaf: true);

  /// Returns the second in this time
  ///
  /// See the [Rust documentation for `second`](https://docs.rs/icu/latest/icu/calendar/types/struct.Time.html#structfield.second) for more information.
  int get second {
    final result = _ICU4XDateTime_second(_underlying);
    return result;
  }

  // ignore: non_constant_identifier_names
  static final _ICU4XDateTime_second =
      _capi<ffi.NativeFunction<ffi.Uint8 Function(ffi.Pointer<ffi.Opaque>)>>(
              'ICU4XDateTime_second')
          .asFunction<int Function(ffi.Pointer<ffi.Opaque>)>(isLeaf: true);

  /// Returns the nanosecond in this time
  ///
  /// See the [Rust documentation for `nanosecond`](https://docs.rs/icu/latest/icu/calendar/types/struct.Time.html#structfield.nanosecond) for more information.
  int get nanosecond {
    final result = _ICU4XDateTime_nanosecond(_underlying);
    return result;
  }

  // ignore: non_constant_identifier_names
  static final _ICU4XDateTime_nanosecond =
      _capi<ffi.NativeFunction<ffi.Uint32 Function(ffi.Pointer<ffi.Opaque>)>>(
              'ICU4XDateTime_nanosecond')
          .asFunction<int Function(ffi.Pointer<ffi.Opaque>)>(isLeaf: true);

  /// Returns the 1-indexed day in the month for this date
  ///
  /// See the [Rust documentation for `day_of_month`](https://docs.rs/icu/latest/icu/calendar/struct.Date.html#method.day_of_month) for more information.
  int get dayOfMonth {
    final result = _ICU4XDateTime_day_of_month(_underlying);
    return result;
  }

  // ignore: non_constant_identifier_names
  static final _ICU4XDateTime_day_of_month =
      _capi<ffi.NativeFunction<ffi.Uint32 Function(ffi.Pointer<ffi.Opaque>)>>(
              'ICU4XDateTime_day_of_month')
          .asFunction<int Function(ffi.Pointer<ffi.Opaque>)>(isLeaf: true);

  /// Returns the day in the week for this day
  ///
  /// See the [Rust documentation for `day_of_week`](https://docs.rs/icu/latest/icu/calendar/struct.Date.html#method.day_of_week) for more information.
  IsoWeekday get dayOfWeek {
    final result = _ICU4XDateTime_day_of_week(_underlying);
    return IsoWeekday.values.firstWhere((v) => v._underlying == result);
  }

  // ignore: non_constant_identifier_names
  static final _ICU4XDateTime_day_of_week =
      _capi<ffi.NativeFunction<ffi.Int32 Function(ffi.Pointer<ffi.Opaque>)>>(
              'ICU4XDateTime_day_of_week')
          .asFunction<int Function(ffi.Pointer<ffi.Opaque>)>(isLeaf: true);

  /// Returns the week number in this month, 1-indexed, based on what
  /// is considered the first day of the week (often a locale preference).
  ///
  /// `first_weekday` can be obtained via `first_weekday()` on [`WeekCalculator`]
  ///
  /// See the [Rust documentation for `week_of_month`](https://docs.rs/icu/latest/icu/calendar/struct.Date.html#method.week_of_month) for more information.
  int weekOfMonth(IsoWeekday firstWeekday) {
    final result =
        _ICU4XDateTime_week_of_month(_underlying, firstWeekday._underlying);
    return result;
  }

  // ignore: non_constant_identifier_names
  static final _ICU4XDateTime_week_of_month = _capi<
          ffi.NativeFunction<
              ffi.Uint32 Function(ffi.Pointer<ffi.Opaque>,
                  ffi.Int32)>>('ICU4XDateTime_week_of_month')
      .asFunction<int Function(ffi.Pointer<ffi.Opaque>, int)>(isLeaf: true);

  /// Returns the week number in this year, using week data
  ///
  /// See the [Rust documentation for `week_of_year`](https://docs.rs/icu/latest/icu/calendar/struct.Date.html#method.week_of_year) for more information.
  ///
  /// Throws [Error] on failure.
  WeekOf weekOfYear(WeekCalculator calculator) {
    final result =
        _ICU4XDateTime_week_of_year(_underlying, calculator._underlying);
    if (!result.isOk) {
      throw Error.values.firstWhere((v) => v._underlying == result.union.err);
    }
    return WeekOf._(result.union.ok);
  }

  // ignore: non_constant_identifier_names
  static final _ICU4XDateTime_week_of_year = _capi<
          ffi.NativeFunction<
              _ResultWeekOfFfiInt32 Function(ffi.Pointer<ffi.Opaque>,
                  ffi.Pointer<ffi.Opaque>)>>('ICU4XDateTime_week_of_year')
      .asFunction<
          _ResultWeekOfFfiInt32 Function(
              ffi.Pointer<ffi.Opaque>, ffi.Pointer<ffi.Opaque>)>(isLeaf: true);

  /// Returns 1-indexed number of the month of this date in its year
  ///
  /// Note that for lunar calendars this may not lead to the same month
  /// having the same ordinal month across years; use month_code if you care
  /// about month identity.
  ///
  /// See the [Rust documentation for `month`](https://docs.rs/icu/latest/icu/calendar/struct.Date.html#method.month) for more information.
  int get ordinalMonth {
    final result = _ICU4XDateTime_ordinal_month(_underlying);
    return result;
  }

  // ignore: non_constant_identifier_names
  static final _ICU4XDateTime_ordinal_month =
      _capi<ffi.NativeFunction<ffi.Uint32 Function(ffi.Pointer<ffi.Opaque>)>>(
              'ICU4XDateTime_ordinal_month')
          .asFunction<int Function(ffi.Pointer<ffi.Opaque>)>(isLeaf: true);

  /// Returns the month code for this date. Typically something
  /// like "M01", "M02", but can be more complicated for lunar calendars.
  ///
  /// See the [Rust documentation for `month`](https://docs.rs/icu/latest/icu/calendar/struct.Date.html#method.month) for more information.
  ///
  /// Throws [Error] on failure.
  String get monthCode {
    final writeable = _Writeable();
    final result =
        _ICU4XDateTime_month_code(_underlying, writeable._underlying);
    if (!result.isOk) {
      throw Error.values.firstWhere((v) => v._underlying == result.union.err);
    }
    return writeable.finalize();
  }

  // ignore: non_constant_identifier_names
  static final _ICU4XDateTime_month_code = _capi<
          ffi.NativeFunction<
              _ResultVoidInt32 Function(ffi.Pointer<ffi.Opaque>,
                  ffi.Pointer<ffi.Opaque>)>>('ICU4XDateTime_month_code')
      .asFunction<
          _ResultVoidInt32 Function(
              ffi.Pointer<ffi.Opaque>, ffi.Pointer<ffi.Opaque>)>(isLeaf: true);

  /// Returns the year number in the current era for this date
  ///
  /// See the [Rust documentation for `year`](https://docs.rs/icu/latest/icu/calendar/struct.Date.html#method.year) for more information.
  int get yearInEra {
    final result = _ICU4XDateTime_year_in_era(_underlying);
    return result;
  }

  // ignore: non_constant_identifier_names
  static final _ICU4XDateTime_year_in_era =
      _capi<ffi.NativeFunction<ffi.Int32 Function(ffi.Pointer<ffi.Opaque>)>>(
              'ICU4XDateTime_year_in_era')
          .asFunction<int Function(ffi.Pointer<ffi.Opaque>)>(isLeaf: true);

  /// Returns the era for this date,
  ///
  /// See the [Rust documentation for `year`](https://docs.rs/icu/latest/icu/calendar/struct.Date.html#method.year) for more information.
  ///
  /// Throws [Error] on failure.
  String get era {
    final writeable = _Writeable();
    final result = _ICU4XDateTime_era(_underlying, writeable._underlying);
    if (!result.isOk) {
      throw Error.values.firstWhere((v) => v._underlying == result.union.err);
    }
    return writeable.finalize();
  }

  // ignore: non_constant_identifier_names
  static final _ICU4XDateTime_era = _capi<
          ffi.NativeFunction<
              _ResultVoidInt32 Function(ffi.Pointer<ffi.Opaque>,
                  ffi.Pointer<ffi.Opaque>)>>('ICU4XDateTime_era')
      .asFunction<
          _ResultVoidInt32 Function(
              ffi.Pointer<ffi.Opaque>, ffi.Pointer<ffi.Opaque>)>(isLeaf: true);

  /// Returns the number of months in the year represented by this date
  ///
  /// See the [Rust documentation for `months_in_year`](https://docs.rs/icu/latest/icu/calendar/struct.Date.html#method.months_in_year) for more information.
  int get monthsInYear {
    final result = _ICU4XDateTime_months_in_year(_underlying);
    return result;
  }

  // ignore: non_constant_identifier_names
  static final _ICU4XDateTime_months_in_year =
      _capi<ffi.NativeFunction<ffi.Uint8 Function(ffi.Pointer<ffi.Opaque>)>>(
              'ICU4XDateTime_months_in_year')
          .asFunction<int Function(ffi.Pointer<ffi.Opaque>)>(isLeaf: true);

  /// Returns the number of days in the month represented by this date
  ///
  /// See the [Rust documentation for `days_in_month`](https://docs.rs/icu/latest/icu/calendar/struct.Date.html#method.days_in_month) for more information.
  int get daysInMonth {
    final result = _ICU4XDateTime_days_in_month(_underlying);
    return result;
  }

  // ignore: non_constant_identifier_names
  static final _ICU4XDateTime_days_in_month =
      _capi<ffi.NativeFunction<ffi.Uint8 Function(ffi.Pointer<ffi.Opaque>)>>(
              'ICU4XDateTime_days_in_month')
          .asFunction<int Function(ffi.Pointer<ffi.Opaque>)>(isLeaf: true);

  /// Returns the number of days in the year represented by this date
  ///
  /// See the [Rust documentation for `days_in_year`](https://docs.rs/icu/latest/icu/calendar/struct.Date.html#method.days_in_year) for more information.
  int get daysInYear {
    final result = _ICU4XDateTime_days_in_year(_underlying);
    return result;
  }

  // ignore: non_constant_identifier_names
  static final _ICU4XDateTime_days_in_year =
      _capi<ffi.NativeFunction<ffi.Uint16 Function(ffi.Pointer<ffi.Opaque>)>>(
              'ICU4XDateTime_days_in_year')
          .asFunction<int Function(ffi.Pointer<ffi.Opaque>)>(isLeaf: true);

  /// Returns the [`Calendar`] object backing this date
  ///
  /// See the [Rust documentation for `calendar`](https://docs.rs/icu/latest/icu/calendar/struct.Date.html#method.calendar) for more information.
  Calendar get calendar {
    final result = _ICU4XDateTime_calendar(_underlying);
    return Calendar._(result);
  }

  // ignore: non_constant_identifier_names
  static final _ICU4XDateTime_calendar = _capi<
          ffi.NativeFunction<
              ffi.Pointer<ffi.Opaque> Function(
                  ffi.Pointer<ffi.Opaque>)>>('ICU4XDateTime_calendar')
      .asFunction<ffi.Pointer<ffi.Opaque> Function(ffi.Pointer<ffi.Opaque>)>(
          isLeaf: true);
}
