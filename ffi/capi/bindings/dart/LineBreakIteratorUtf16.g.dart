// generated by diplomat-tool

// https://github.com/dart-lang/sdk/issues/53946
// ignore_for_file: non_native_function_type_argument_to_pointer

part of 'lib.g.dart';

/// See the [Rust documentation for `LineBreakIterator`](https://docs.rs/icu/latest/icu/segmenter/struct.LineBreakIterator.html) for more information.
///
/// Additional information: [1](https://docs.rs/icu/latest/icu/segmenter/type.LineBreakIteratorUtf16.html)
final class LineBreakIteratorUtf16 implements ffi.Finalizable {
  final ffi.Pointer<ffi.Opaque> _underlying;

  final core.List<Object> _edge_self;
  final core.List<Object> _edge_a;

  // Internal constructor from FFI.
  // isOwned is whether this is owned (has finalizer) or not
  // This also takes in a list of lifetime edges (including for &self borrows)
  // corresponding to data this may borrow from. These should be flat arrays containing
  // references to objects, and this object will hold on to them to keep them alive and
  // maintain borrow validity.
  LineBreakIteratorUtf16._(this._underlying, bool isOwned, this._edge_self, this._edge_a) {
    if (isOwned) {
      _finalizer.attach(this, _underlying.cast());
    }
  }

  static final _finalizer = ffi.NativeFinalizer(ffi.Native.addressOf(_ICU4XLineBreakIteratorUtf16_destroy));

  /// Finds the next breakpoint. Returns -1 if at the end of the string or if the index is
  /// out of range of a 32-bit signed integer.
  ///
  /// See the [Rust documentation for `next`](https://docs.rs/icu/latest/icu/segmenter/struct.LineBreakIterator.html#method.next) for more information.
  int next() {
    final result = _ICU4XLineBreakIteratorUtf16_next(_underlying);
    return result;
  }
}

@ffi.Native<ffi.Void Function(ffi.Pointer<ffi.Void>)>(isLeaf: true, symbol: 'ICU4XLineBreakIteratorUtf16_destroy')
// ignore: non_constant_identifier_names
external void _ICU4XLineBreakIteratorUtf16_destroy(ffi.Pointer<ffi.Void> self);

@meta.ResourceIdentifier()
@ffi.Native<ffi.Int32 Function(ffi.Pointer<ffi.Opaque>)>(isLeaf: true, symbol: 'ICU4XLineBreakIteratorUtf16_next')
// ignore: non_constant_identifier_names
external int _ICU4XLineBreakIteratorUtf16_next(ffi.Pointer<ffi.Opaque> self);
