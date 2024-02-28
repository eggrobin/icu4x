// generated by diplomat-tool

// https://github.com/dart-lang/sdk/issues/53946
// ignore_for_file: non_native_function_type_argument_to_pointer

part of 'lib.g.dart';

/// A locale expander.
///
/// See the [Rust documentation for `LocaleExpander`](https://docs.rs/icu/latest/icu/locid_transform/struct.LocaleExpander.html) for more information.
final class LocaleExpander implements ffi.Finalizable {
  final ffi.Pointer<ffi.Opaque> _underlying;

  final core.List<Object> _edge_self;

  // Internal constructor from FFI.
  // isOwned is whether this is owned (has finalizer) or not
  // This also takes in a list of lifetime edges (including for &self borrows)
  // corresponding to data this may borrow from. These should be flat arrays containing
  // references to objects, and this object will hold on to them to keep them alive and
  // maintain borrow validity.
  LocaleExpander._(this._underlying, bool isOwned, this._edge_self) {
    if (isOwned) {
      _finalizer.attach(this, _underlying.cast());
    }
  }

  static final _finalizer = ffi.NativeFinalizer(ffi.Native.addressOf(_ICU4XLocaleExpander_destroy));

  /// Create a new [`LocaleExpander`].
  ///
  /// See the [Rust documentation for `new`](https://docs.rs/icu/latest/icu/locid_transform/struct.LocaleExpander.html#method.new) for more information.
  ///
  /// Throws [Error] on failure.
  factory LocaleExpander(DataProvider provider) {
    final result = _ICU4XLocaleExpander_create(provider._underlying);
    if (!result.isOk) {
      throw Error.values.firstWhere((v) => v._underlying == result.union.err);
    }
    return LocaleExpander._(result.union.ok, true, []);
  }

  /// Create a new [`LocaleExpander`] with extended data.
  ///
  /// See the [Rust documentation for `new_extended`](https://docs.rs/icu/latest/icu/locid_transform/struct.LocaleExpander.html#method.new_extended) for more information.
  ///
  /// Throws [Error] on failure.
  factory LocaleExpander.extended(DataProvider provider) {
    final result = _ICU4XLocaleExpander_create_extended(provider._underlying);
    if (!result.isOk) {
      throw Error.values.firstWhere((v) => v._underlying == result.union.err);
    }
    return LocaleExpander._(result.union.ok, true, []);
  }

  /// See the [Rust documentation for `maximize`](https://docs.rs/icu/latest/icu/locid_transform/struct.LocaleExpander.html#method.maximize) for more information.
  TransformResult maximize(Locale locale) {
    final result = _ICU4XLocaleExpander_maximize(_underlying, locale._underlying);
    return TransformResult.values[result];
  }

  /// See the [Rust documentation for `minimize`](https://docs.rs/icu/latest/icu/locid_transform/struct.LocaleExpander.html#method.minimize) for more information.
  TransformResult minimize(Locale locale) {
    final result = _ICU4XLocaleExpander_minimize(_underlying, locale._underlying);
    return TransformResult.values[result];
  }
}

@ffi.Native<ffi.Void Function(ffi.Pointer<ffi.Void>)>(isLeaf: true, symbol: 'ICU4XLocaleExpander_destroy')
// ignore: non_constant_identifier_names
external void _ICU4XLocaleExpander_destroy(ffi.Pointer<ffi.Void> self);

@ffi.Native<_ResultOpaqueInt32 Function(ffi.Pointer<ffi.Opaque>)>(isLeaf: true, symbol: 'ICU4XLocaleExpander_create')
// ignore: non_constant_identifier_names
external _ResultOpaqueInt32 _ICU4XLocaleExpander_create(ffi.Pointer<ffi.Opaque> provider);

@ffi.Native<_ResultOpaqueInt32 Function(ffi.Pointer<ffi.Opaque>)>(isLeaf: true, symbol: 'ICU4XLocaleExpander_create_extended')
// ignore: non_constant_identifier_names
external _ResultOpaqueInt32 _ICU4XLocaleExpander_create_extended(ffi.Pointer<ffi.Opaque> provider);

@ffi.Native<ffi.Int32 Function(ffi.Pointer<ffi.Opaque>, ffi.Pointer<ffi.Opaque>)>(isLeaf: true, symbol: 'ICU4XLocaleExpander_maximize')
// ignore: non_constant_identifier_names
external int _ICU4XLocaleExpander_maximize(ffi.Pointer<ffi.Opaque> self, ffi.Pointer<ffi.Opaque> locale);

@ffi.Native<ffi.Int32 Function(ffi.Pointer<ffi.Opaque>, ffi.Pointer<ffi.Opaque>)>(isLeaf: true, symbol: 'ICU4XLocaleExpander_minimize')
// ignore: non_constant_identifier_names
external int _ICU4XLocaleExpander_minimize(ffi.Pointer<ffi.Opaque> self, ffi.Pointer<ffi.Opaque> locale);
