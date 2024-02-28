// generated by diplomat-tool

// https://github.com/dart-lang/sdk/issues/53946
// ignore_for_file: non_native_function_type_argument_to_pointer

part of 'lib.g.dart';

final class _LocaleFallbackConfigFfi extends ffi.Struct {
  @ffi.Int32()
  external int priority;
  external _SliceUtf8 extensionKey;
  @ffi.Int32()
  external int fallbackSupplement;
}

/// Collection of configurations for the ICU4X fallback algorithm.
///
/// See the [Rust documentation for `LocaleFallbackConfig`](https://docs.rs/icu/latest/icu/locid_transform/fallback/struct.LocaleFallbackConfig.html) for more information.
final class LocaleFallbackConfig {
  LocaleFallbackPriority priority;
  String extensionKey;
  LocaleFallbackSupplement fallbackSupplement;

  LocaleFallbackConfig({required this.priority, required this.extensionKey, required this.fallbackSupplement});

  // ignore: unused_element
  // Internal constructor from FFI.
  LocaleFallbackConfig._(_LocaleFallbackConfigFfi underlying, core.List<Object> edge_a) :
    priority = LocaleFallbackPriority.values[underlying.priority],
    extensionKey = Utf8Decoder().convert(underlying.extensionKey._pointer.asTypedList(underlying.extensionKey._length)),
    fallbackSupplement = LocaleFallbackSupplement.values[underlying.fallbackSupplement];

  // ignore: unused_element
  _LocaleFallbackConfigFfi _pointer(ffi.Allocator temp) {
    final pointer = temp<_LocaleFallbackConfigFfi>();
    pointer.ref.priority = priority.index;
    final extensionKeyView = extensionKey.utf8View;
    pointer.ref.extensionKey._pointer = extensionKeyView.pointer(temp);
    pointer.ref.extensionKey._length = extensionKeyView.length;
    pointer.ref.fallbackSupplement = fallbackSupplement.index;
    return pointer.ref;
  }

  @override
  bool operator ==(Object other) =>
      other is LocaleFallbackConfig &&
      other.priority == this.priority &&
      other.extensionKey == this.extensionKey &&
      other.fallbackSupplement == this.fallbackSupplement;

  @override
  int get hashCode => Object.hashAll([
        this.priority,
        this.extensionKey,
        this.fallbackSupplement,
      ]);

  // ignore: unused element
  // Append all fields corresponding to lifetime `'a`
  core.List<Object> _fields_for_lifetime_a() {
    return [extensionKey];
  }
}
