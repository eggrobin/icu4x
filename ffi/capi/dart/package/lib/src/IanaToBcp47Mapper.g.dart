// generated by diplomat-tool

// https://github.com/dart-lang/sdk/issues/53946
// ignore_for_file: non_native_function_type_argument_to_pointer

part of 'lib.g.dart';

/// An object capable of mapping from an IANA time zone ID to a BCP-47 ID.
///
/// This can be used via `try_set_iana_time_zone_id()` on [`CustomTimeZone`].
///
/// [`CustomTimeZone`]: crate::timezone::ffi::ICU4XCustomTimeZone
///
/// See the [Rust documentation for `IanaToBcp47Mapper`](https://docs.rs/icu/latest/icu/timezone/struct.IanaToBcp47Mapper.html) for more information.
class IanaToBcp47Mapper implements ffi.Finalizable {
  final ffi.Pointer<ffi.Opaque> _underlying;

  IanaToBcp47Mapper._(this._underlying) {
    _finalizer.attach(this, _underlying.cast());
  }

  static final _finalizer =
      ffi.NativeFinalizer(_capi('ICU4XIanaToBcp47Mapper_destroy'));

  /// See the [Rust documentation for `new`](https://docs.rs/icu/latest/icu/timezone/struct.IanaToBcp47Mapper.html#method.new) for more information.
  ///
  /// Throws [Error] on failure.
  factory IanaToBcp47Mapper(DataProvider provider) {
    final result = _ICU4XIanaToBcp47Mapper_create(provider._underlying);
    if (!result.isOk) {
      throw Error.values.firstWhere((v) => v._underlying == result.union.err);
    }
    return IanaToBcp47Mapper._(result.union.ok);
  }
  // ignore: non_constant_identifier_names
  static final _ICU4XIanaToBcp47Mapper_create = _capi<
          ffi.NativeFunction<
              _ResultOpaqueInt32 Function(
                  ffi.Pointer<ffi.Opaque>)>>('ICU4XIanaToBcp47Mapper_create')
      .asFunction<_ResultOpaqueInt32 Function(ffi.Pointer<ffi.Opaque>)>(
          isLeaf: true);
}
