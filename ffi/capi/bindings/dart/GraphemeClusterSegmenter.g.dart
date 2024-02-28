// generated by diplomat-tool

// https://github.com/dart-lang/sdk/issues/53946
// ignore_for_file: non_native_function_type_argument_to_pointer

part of 'lib.g.dart';

/// An ICU4X grapheme-cluster-break segmenter, capable of finding grapheme cluster breakpoints
/// in strings.
///
/// See the [Rust documentation for `GraphemeClusterSegmenter`](https://docs.rs/icu/latest/icu/segmenter/struct.GraphemeClusterSegmenter.html) for more information.
final class GraphemeClusterSegmenter implements ffi.Finalizable {
  final ffi.Pointer<ffi.Opaque> _underlying;

  final core.List<Object> _edge_self;

  // Internal constructor from FFI.
  // isOwned is whether this is owned (has finalizer) or not
  // This also takes in a list of lifetime edges (including for &self borrows)
  // corresponding to data this may borrow from. These should be flat arrays containing
  // references to objects, and this object will hold on to them to keep them alive and
  // maintain borrow validity.
  GraphemeClusterSegmenter._(this._underlying, bool isOwned, this._edge_self) {
    if (isOwned) {
      _finalizer.attach(this, _underlying.cast());
    }
  }

  static final _finalizer = ffi.NativeFinalizer(ffi.Native.addressOf(_ICU4XGraphemeClusterSegmenter_destroy));

  /// Construct an [`GraphemeClusterSegmenter`].
  ///
  /// See the [Rust documentation for `new`](https://docs.rs/icu/latest/icu/segmenter/struct.GraphemeClusterSegmenter.html#method.new) for more information.
  ///
  /// Throws [Error] on failure.
  factory GraphemeClusterSegmenter(DataProvider provider) {
    final result = _ICU4XGraphemeClusterSegmenter_create(provider._underlying);
    if (!result.isOk) {
      throw Error.values.firstWhere((v) => v._underlying == result.union.err);
    }
    return GraphemeClusterSegmenter._(result.union.ok, true, []);
  }

  /// Segments a string.
  ///
  /// Ill-formed input is treated as if errors had been replaced with REPLACEMENT CHARACTERs according
  /// to the WHATWG Encoding Standard.
  ///
  /// See the [Rust documentation for `segment_utf16`](https://docs.rs/icu/latest/icu/segmenter/struct.GraphemeClusterSegmenter.html#method.segment_utf16) for more information.
  GraphemeClusterBreakIteratorUtf16 segment(String input) {
    final inputView = input.utf16View;
    final inputArena = _FinalizedArena();
    // This lifetime edge depends on lifetimes: 'a
    core.List<Object> edge_a = [this, inputArena];
    final result = _ICU4XGraphemeClusterSegmenter_segment_utf16(_underlying, inputView.pointer(inputArena.arena), inputView.length);
    return GraphemeClusterBreakIteratorUtf16._(result, true, [], edge_a);
  }
}

@ffi.Native<ffi.Void Function(ffi.Pointer<ffi.Void>)>(isLeaf: true, symbol: 'ICU4XGraphemeClusterSegmenter_destroy')
// ignore: non_constant_identifier_names
external void _ICU4XGraphemeClusterSegmenter_destroy(ffi.Pointer<ffi.Void> self);

@ffi.Native<_ResultOpaqueInt32 Function(ffi.Pointer<ffi.Opaque>)>(isLeaf: true, symbol: 'ICU4XGraphemeClusterSegmenter_create')
// ignore: non_constant_identifier_names
external _ResultOpaqueInt32 _ICU4XGraphemeClusterSegmenter_create(ffi.Pointer<ffi.Opaque> provider);

@ffi.Native<ffi.Pointer<ffi.Opaque> Function(ffi.Pointer<ffi.Opaque>, ffi.Pointer<ffi.Uint16>, ffi.Size)>(isLeaf: true, symbol: 'ICU4XGraphemeClusterSegmenter_segment_utf16')
// ignore: non_constant_identifier_names
external ffi.Pointer<ffi.Opaque> _ICU4XGraphemeClusterSegmenter_segment_utf16(ffi.Pointer<ffi.Opaque> self, ffi.Pointer<ffi.Uint16> inputData, int inputLength);
