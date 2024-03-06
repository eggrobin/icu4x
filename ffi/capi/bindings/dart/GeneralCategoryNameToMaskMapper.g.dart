// generated by diplomat-tool

// https://github.com/dart-lang/sdk/issues/53946
// ignore_for_file: non_native_function_type_argument_to_pointer

part of 'lib.g.dart';

/// A type capable of looking up General Category mask values from a string name.
///
/// See the [Rust documentation for `get_name_to_enum_mapper`](https://docs.rs/icu/latest/icu/properties/struct.GeneralCategoryGroup.html#method.get_name_to_enum_mapper) for more information.
///
/// See the [Rust documentation for `PropertyValueNameToEnumMapper`](https://docs.rs/icu/latest/icu/properties/names/struct.PropertyValueNameToEnumMapper.html) for more information.
final class GeneralCategoryNameToMaskMapper implements ffi.Finalizable {
  final ffi.Pointer<ffi.Opaque> _underlying;

  final core.List<Object> _edge_self;

  // Internal constructor from FFI.
  // isOwned is whether this is owned (has finalizer) or not
  // This also takes in a list of lifetime edges (including for &self borrows)
  // corresponding to data this may borrow from. These should be flat arrays containing
  // references to objects, and this object will hold on to them to keep them alive and
  // maintain borrow validity.
  GeneralCategoryNameToMaskMapper._(this._underlying, bool isOwned, this._edge_self) {
    if (isOwned) {
      _finalizer.attach(this, _underlying.cast());
    }
  }

  static final _finalizer = ffi.NativeFinalizer(ffi.Native.addressOf(_ICU4XGeneralCategoryNameToMaskMapper_destroy));

  /// Get the mask value matching the given name, using strict matching
  ///
  /// Returns 0 if the name is unknown for this property
  int getStrict(String name) {
    final temp = ffi2.Arena();
    final nameView = name.utf8View;
    final result = _ICU4XGeneralCategoryNameToMaskMapper_get_strict(_underlying, nameView.pointer(temp), nameView.length);
    temp.releaseAll();
    return result;
  }

  /// Get the mask value matching the given name, using loose matching
  ///
  /// Returns 0 if the name is unknown for this property
  int getLoose(String name) {
    final temp = ffi2.Arena();
    final nameView = name.utf8View;
    final result = _ICU4XGeneralCategoryNameToMaskMapper_get_loose(_underlying, nameView.pointer(temp), nameView.length);
    temp.releaseAll();
    return result;
  }

  /// See the [Rust documentation for `get_name_to_enum_mapper`](https://docs.rs/icu/latest/icu/properties/struct.GeneralCategoryGroup.html#method.get_name_to_enum_mapper) for more information.
  ///
  /// Throws [Error] on failure.
  factory GeneralCategoryNameToMaskMapper.load(DataProvider provider) {
    final result = _ICU4XGeneralCategoryNameToMaskMapper_load(provider._underlying);
    if (!result.isOk) {
      throw Error.values.firstWhere((v) => v._underlying == result.union.err);
    }
    return GeneralCategoryNameToMaskMapper._(result.union.ok, true, []);
  }
}

@ffi.Native<ffi.Void Function(ffi.Pointer<ffi.Void>)>(isLeaf: true, symbol: 'ICU4XGeneralCategoryNameToMaskMapper_destroy')
// ignore: non_constant_identifier_names
external void _ICU4XGeneralCategoryNameToMaskMapper_destroy(ffi.Pointer<ffi.Void> self);

@meta.ResourceIdentifier()
@ffi.Native<ffi.Uint32 Function(ffi.Pointer<ffi.Opaque>, ffi.Pointer<ffi.Uint8>, ffi.Size)>(isLeaf: true, symbol: 'ICU4XGeneralCategoryNameToMaskMapper_get_strict')
// ignore: non_constant_identifier_names
external int _ICU4XGeneralCategoryNameToMaskMapper_get_strict(ffi.Pointer<ffi.Opaque> self, ffi.Pointer<ffi.Uint8> nameData, int nameLength);

@meta.ResourceIdentifier()
@ffi.Native<ffi.Uint32 Function(ffi.Pointer<ffi.Opaque>, ffi.Pointer<ffi.Uint8>, ffi.Size)>(isLeaf: true, symbol: 'ICU4XGeneralCategoryNameToMaskMapper_get_loose')
// ignore: non_constant_identifier_names
external int _ICU4XGeneralCategoryNameToMaskMapper_get_loose(ffi.Pointer<ffi.Opaque> self, ffi.Pointer<ffi.Uint8> nameData, int nameLength);

@meta.ResourceIdentifier()
@ffi.Native<_ResultOpaqueInt32 Function(ffi.Pointer<ffi.Opaque>)>(isLeaf: true, symbol: 'ICU4XGeneralCategoryNameToMaskMapper_load')
// ignore: non_constant_identifier_names
external _ResultOpaqueInt32 _ICU4XGeneralCategoryNameToMaskMapper_load(ffi.Pointer<ffi.Opaque> provider);
