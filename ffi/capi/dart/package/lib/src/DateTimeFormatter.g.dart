// generated by diplomat-tool

// https://github.com/dart-lang/sdk/issues/53946
// ignore_for_file: non_native_function_type_argument_to_pointer

part of 'lib.g.dart';

/// An ICU4X DateFormatter object capable of formatting a [`DateTime`] as a string,
/// using some calendar specified at runtime in the locale.
///
/// See the [Rust documentation for `DateTimeFormatter`](https://docs.rs/icu/latest/icu/datetime/struct.DateTimeFormatter.html) for more information.
class DateTimeFormatter implements ffi.Finalizable {
  final ffi.Pointer<ffi.Opaque> _underlying;

  DateTimeFormatter._(this._underlying) {
    _finalizer.attach(this, _underlying.cast());
  }

  static final _finalizer =
      ffi.NativeFinalizer(_capi('ICU4XDateTimeFormatter_destroy'));

  /// Creates a new [`DateTimeFormatter`] from locale data.
  ///
  /// See the [Rust documentation for `try_new`](https://docs.rs/icu/latest/icu/datetime/struct.DateTimeFormatter.html#method.try_new) for more information.
  ///
  /// Throws [Error] on failure.
  factory DateTimeFormatter.withLengths(DataProvider provider, Locale locale,
      DateLength dateLength, TimeLength timeLength) {
    final result = _ICU4XDateTimeFormatter_create_with_lengths(
        provider._underlying,
        locale._underlying,
        dateLength.index,
        timeLength.index);
    if (!result.isOk) {
      throw Error.values.firstWhere((v) => v._underlying == result.union.err);
    }
    return DateTimeFormatter._(result.union.ok);
  }
  // ignore: non_constant_identifier_names
  static final _ICU4XDateTimeFormatter_create_with_lengths = _capi<
          ffi.NativeFunction<
              _ResultOpaqueInt32 Function(
                  ffi.Pointer<ffi.Opaque>,
                  ffi.Pointer<ffi.Opaque>,
                  ffi.Int32,
                  ffi.Int32)>>('ICU4XDateTimeFormatter_create_with_lengths')
      .asFunction<
          _ResultOpaqueInt32 Function(ffi.Pointer<ffi.Opaque>,
              ffi.Pointer<ffi.Opaque>, int, int)>(isLeaf: true);

  /// Formats a [`DateTime`] to a string.
  ///
  /// See the [Rust documentation for `format`](https://docs.rs/icu/latest/icu/datetime/struct.DateTimeFormatter.html#method.format) for more information.
  ///
  /// Throws [Error] on failure.
  String formatDatetime(DateTime value) {
    final writeable = _Writeable();
    final result = _ICU4XDateTimeFormatter_format_datetime(
        _underlying, value._underlying, writeable._underlying);
    if (!result.isOk) {
      throw Error.values.firstWhere((v) => v._underlying == result.union.err);
    }
    return writeable.finalize();
  }

  // ignore: non_constant_identifier_names
  static final _ICU4XDateTimeFormatter_format_datetime = _capi<
              ffi.NativeFunction<
                  _ResultVoidInt32 Function(ffi.Pointer<ffi.Opaque>,
                      ffi.Pointer<ffi.Opaque>, ffi.Pointer<ffi.Opaque>)>>(
          'ICU4XDateTimeFormatter_format_datetime')
      .asFunction<
          _ResultVoidInt32 Function(ffi.Pointer<ffi.Opaque>,
              ffi.Pointer<ffi.Opaque>, ffi.Pointer<ffi.Opaque>)>(isLeaf: true);

  /// Formats a [`IsoDateTime`] to a string.
  ///
  /// Will convert to this formatter's calendar first
  ///
  /// See the [Rust documentation for `format`](https://docs.rs/icu/latest/icu/datetime/struct.DateTimeFormatter.html#method.format) for more information.
  ///
  /// Throws [Error] on failure.
  String formatIsoDatetime(IsoDateTime value) {
    final writeable = _Writeable();
    final result = _ICU4XDateTimeFormatter_format_iso_datetime(
        _underlying, value._underlying, writeable._underlying);
    if (!result.isOk) {
      throw Error.values.firstWhere((v) => v._underlying == result.union.err);
    }
    return writeable.finalize();
  }

  // ignore: non_constant_identifier_names
  static final _ICU4XDateTimeFormatter_format_iso_datetime = _capi<
              ffi.NativeFunction<
                  _ResultVoidInt32 Function(ffi.Pointer<ffi.Opaque>,
                      ffi.Pointer<ffi.Opaque>, ffi.Pointer<ffi.Opaque>)>>(
          'ICU4XDateTimeFormatter_format_iso_datetime')
      .asFunction<
          _ResultVoidInt32 Function(ffi.Pointer<ffi.Opaque>,
              ffi.Pointer<ffi.Opaque>, ffi.Pointer<ffi.Opaque>)>(isLeaf: true);
}
