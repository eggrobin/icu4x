// generated by diplomat-tool

// https://github.com/dart-lang/sdk/issues/53946
// ignore_for_file: non_native_function_type_argument_to_pointer

part of 'lib.g.dart';

/// An ICU4X DateFormatter object capable of formatting a [`DateTime`] as a string,
/// using some calendar specified at runtime in the locale.
///
/// See the [Rust documentation for `DateTimeFormatter`](https://docs.rs/icu/latest/icu/datetime/struct.DateTimeFormatter.html) for more information.
final class DateTimeFormatter implements ffi.Finalizable {
  final ffi.Pointer<ffi.Opaque> _underlying;

  final core.List<Object> _edge_self;

  // Internal constructor from FFI.
  // isOwned is whether this is owned (has finalizer) or not
  // This also takes in a list of lifetime edges (including for &self borrows)
  // corresponding to data this may borrow from. These should be flat arrays containing
  // references to objects, and this object will hold on to them to keep them alive and
  // maintain borrow validity.
  DateTimeFormatter._(this._underlying, bool isOwned, this._edge_self) {
    if (isOwned) {
      _finalizer.attach(this, _underlying.cast());
    }
  }

  static final _finalizer = ffi.NativeFinalizer(ffi.Native.addressOf(_ICU4XDateTimeFormatter_destroy));

  /// Creates a new [`DateTimeFormatter`] from locale data.
  ///
  /// See the [Rust documentation for `try_new`](https://docs.rs/icu/latest/icu/datetime/struct.DateTimeFormatter.html#method.try_new) for more information.
  ///
  /// Throws [Error] on failure.
  factory DateTimeFormatter.withLengths(DataProvider provider, Locale locale, DateLength dateLength, TimeLength timeLength) {
    final result = _ICU4XDateTimeFormatter_create_with_lengths(provider._underlying, locale._underlying, dateLength.index, timeLength.index);
    if (!result.isOk) {
      throw Error.values.firstWhere((v) => v._underlying == result.union.err);
    }
    return DateTimeFormatter._(result.union.ok, true, []);
  }

  /// Formats a [`DateTime`] to a string.
  ///
  /// See the [Rust documentation for `format`](https://docs.rs/icu/latest/icu/datetime/struct.DateTimeFormatter.html#method.format) for more information.
  ///
  /// Throws [Error] on failure.
  String formatDatetime(DateTime value) {
    final writeable = _Writeable();
    final result = _ICU4XDateTimeFormatter_format_datetime(_underlying, value._underlying, writeable._underlying);
    if (!result.isOk) {
      throw Error.values.firstWhere((v) => v._underlying == result.union.err);
    }
    return writeable.finalize();
  }

  /// Formats a [`IsoDateTime`] to a string.
  ///
  /// Will convert to this formatter's calendar first
  ///
  /// See the [Rust documentation for `format`](https://docs.rs/icu/latest/icu/datetime/struct.DateTimeFormatter.html#method.format) for more information.
  ///
  /// Throws [Error] on failure.
  String formatIsoDatetime(IsoDateTime value) {
    final writeable = _Writeable();
    final result = _ICU4XDateTimeFormatter_format_iso_datetime(_underlying, value._underlying, writeable._underlying);
    if (!result.isOk) {
      throw Error.values.firstWhere((v) => v._underlying == result.union.err);
    }
    return writeable.finalize();
  }
}

@ffi.Native<ffi.Void Function(ffi.Pointer<ffi.Void>)>(isLeaf: true, symbol: 'ICU4XDateTimeFormatter_destroy')
// ignore: non_constant_identifier_names
external void _ICU4XDateTimeFormatter_destroy(ffi.Pointer<ffi.Void> self);

@ffi.Native<_ResultOpaqueInt32 Function(ffi.Pointer<ffi.Opaque>, ffi.Pointer<ffi.Opaque>, ffi.Int32, ffi.Int32)>(isLeaf: true, symbol: 'ICU4XDateTimeFormatter_create_with_lengths')
// ignore: non_constant_identifier_names
external _ResultOpaqueInt32 _ICU4XDateTimeFormatter_create_with_lengths(ffi.Pointer<ffi.Opaque> provider, ffi.Pointer<ffi.Opaque> locale, int dateLength, int timeLength);

@ffi.Native<_ResultVoidInt32 Function(ffi.Pointer<ffi.Opaque>, ffi.Pointer<ffi.Opaque>, ffi.Pointer<ffi.Opaque>)>(isLeaf: true, symbol: 'ICU4XDateTimeFormatter_format_datetime')
// ignore: non_constant_identifier_names
external _ResultVoidInt32 _ICU4XDateTimeFormatter_format_datetime(ffi.Pointer<ffi.Opaque> self, ffi.Pointer<ffi.Opaque> value, ffi.Pointer<ffi.Opaque> writeable);

@ffi.Native<_ResultVoidInt32 Function(ffi.Pointer<ffi.Opaque>, ffi.Pointer<ffi.Opaque>, ffi.Pointer<ffi.Opaque>)>(isLeaf: true, symbol: 'ICU4XDateTimeFormatter_format_iso_datetime')
// ignore: non_constant_identifier_names
external _ResultVoidInt32 _ICU4XDateTimeFormatter_format_iso_datetime(ffi.Pointer<ffi.Opaque> self, ffi.Pointer<ffi.Opaque> value, ffi.Pointer<ffi.Opaque> writeable);
