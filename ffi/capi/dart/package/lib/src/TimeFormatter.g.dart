// generated by diplomat-tool

// https://github.com/dart-lang/sdk/issues/53946
// ignore_for_file: non_native_function_type_argument_to_pointer

part of 'lib.g.dart';

/// An ICU4X TimeFormatter object capable of formatting an [`Time`] type (and others) as a string
///
/// See the [Rust documentation for `TimeFormatter`](https://docs.rs/icu/latest/icu/datetime/struct.TimeFormatter.html) for more information.
class TimeFormatter implements ffi.Finalizable {
  final ffi.Pointer<ffi.Opaque> _underlying;

  TimeFormatter._(this._underlying) {
    _finalizer.attach(this, _underlying.cast());
  }

  static final _finalizer =
      ffi.NativeFinalizer(_capi('ICU4XTimeFormatter_destroy'));

  /// Creates a new [`TimeFormatter`] from locale data.
  ///
  /// See the [Rust documentation for `try_new_with_length`](https://docs.rs/icu/latest/icu/datetime/struct.TimeFormatter.html#method.try_new_with_length) for more information.
  ///
  /// Throws [Error] on failure.
  factory TimeFormatter.withLength(
      DataProvider provider, Locale locale, TimeLength length) {
    final result = _ICU4XTimeFormatter_create_with_length(
        provider._underlying, locale._underlying, length.index);
    if (!result.isOk) {
      throw Error.values.firstWhere((v) => v._underlying == result.union.err);
    }
    return TimeFormatter._(result.union.ok);
  }
  // ignore: non_constant_identifier_names
  static final _ICU4XTimeFormatter_create_with_length = _capi<
          ffi.NativeFunction<
              _ResultOpaqueInt32 Function(
                  ffi.Pointer<ffi.Opaque>,
                  ffi.Pointer<ffi.Opaque>,
                  ffi.Int32)>>('ICU4XTimeFormatter_create_with_length')
      .asFunction<
          _ResultOpaqueInt32 Function(ffi.Pointer<ffi.Opaque>,
              ffi.Pointer<ffi.Opaque>, int)>(isLeaf: true);

  /// Formats a [`Time`] to a string.
  ///
  /// See the [Rust documentation for `format`](https://docs.rs/icu/latest/icu/datetime/struct.TimeFormatter.html#method.format) for more information.
  ///
  /// Throws [Error] on failure.
  String formatTime(Time value) {
    final writeable = _Writeable();
    final result = _ICU4XTimeFormatter_format_time(
        _underlying, value._underlying, writeable._underlying);
    if (!result.isOk) {
      throw Error.values.firstWhere((v) => v._underlying == result.union.err);
    }
    return writeable.finalize();
  }

  // ignore: non_constant_identifier_names
  static final _ICU4XTimeFormatter_format_time = _capi<
          ffi.NativeFunction<
              _ResultVoidInt32 Function(
                  ffi.Pointer<ffi.Opaque>,
                  ffi.Pointer<ffi.Opaque>,
                  ffi.Pointer<ffi.Opaque>)>>('ICU4XTimeFormatter_format_time')
      .asFunction<
          _ResultVoidInt32 Function(ffi.Pointer<ffi.Opaque>,
              ffi.Pointer<ffi.Opaque>, ffi.Pointer<ffi.Opaque>)>(isLeaf: true);

  /// Formats a [`DateTime`] to a string.
  ///
  /// See the [Rust documentation for `format`](https://docs.rs/icu/latest/icu/datetime/struct.TimeFormatter.html#method.format) for more information.
  ///
  /// Throws [Error] on failure.
  String formatDatetime(DateTime value) {
    final writeable = _Writeable();
    final result = _ICU4XTimeFormatter_format_datetime(
        _underlying, value._underlying, writeable._underlying);
    if (!result.isOk) {
      throw Error.values.firstWhere((v) => v._underlying == result.union.err);
    }
    return writeable.finalize();
  }

  // ignore: non_constant_identifier_names
  static final _ICU4XTimeFormatter_format_datetime = _capi<
              ffi.NativeFunction<
                  _ResultVoidInt32 Function(ffi.Pointer<ffi.Opaque>,
                      ffi.Pointer<ffi.Opaque>, ffi.Pointer<ffi.Opaque>)>>(
          'ICU4XTimeFormatter_format_datetime')
      .asFunction<
          _ResultVoidInt32 Function(ffi.Pointer<ffi.Opaque>,
              ffi.Pointer<ffi.Opaque>, ffi.Pointer<ffi.Opaque>)>(isLeaf: true);

  /// Formats a [`IsoDateTime`] to a string.
  ///
  /// See the [Rust documentation for `format`](https://docs.rs/icu/latest/icu/datetime/struct.TimeFormatter.html#method.format) for more information.
  ///
  /// Throws [Error] on failure.
  String formatIsoDatetime(IsoDateTime value) {
    final writeable = _Writeable();
    final result = _ICU4XTimeFormatter_format_iso_datetime(
        _underlying, value._underlying, writeable._underlying);
    if (!result.isOk) {
      throw Error.values.firstWhere((v) => v._underlying == result.union.err);
    }
    return writeable.finalize();
  }

  // ignore: non_constant_identifier_names
  static final _ICU4XTimeFormatter_format_iso_datetime = _capi<
              ffi.NativeFunction<
                  _ResultVoidInt32 Function(ffi.Pointer<ffi.Opaque>,
                      ffi.Pointer<ffi.Opaque>, ffi.Pointer<ffi.Opaque>)>>(
          'ICU4XTimeFormatter_format_iso_datetime')
      .asFunction<
          _ResultVoidInt32 Function(ffi.Pointer<ffi.Opaque>,
              ffi.Pointer<ffi.Opaque>, ffi.Pointer<ffi.Opaque>)>(isLeaf: true);
}
