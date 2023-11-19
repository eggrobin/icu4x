// generated by diplomat-tool

// https://github.com/dart-lang/sdk/issues/53946
// ignore_for_file: non_native_function_type_argument_to_pointer

part of 'lib.g.dart';

/// See the [Rust documentation for `FixedDecimal`](https://docs.rs/fixed_decimal/latest/fixed_decimal/struct.FixedDecimal.html) for more information.
class FixedDecimal implements ffi.Finalizable {
  final ffi.Pointer<ffi.Opaque> _underlying;

  FixedDecimal._(this._underlying) {
    _finalizer.attach(this, _underlying.cast());
  }

  static final _finalizer =
      ffi.NativeFinalizer(_capi('ICU4XFixedDecimal_destroy'));

  /// Construct an [`FixedDecimal`] from an integer.
  ///
  /// See the [Rust documentation for `FixedDecimal`](https://docs.rs/fixed_decimal/latest/fixed_decimal/struct.FixedDecimal.html) for more information.
  factory FixedDecimal.fromInt(int v) {
    final result = _ICU4XFixedDecimal_create_from_i64(v);
    return FixedDecimal._(result);
  }
  // ignore: non_constant_identifier_names
  static final _ICU4XFixedDecimal_create_from_i64 =
      _capi<ffi.NativeFunction<ffi.Pointer<ffi.Opaque> Function(ffi.Int64)>>(
              'ICU4XFixedDecimal_create_from_i64')
          .asFunction<ffi.Pointer<ffi.Opaque> Function(int)>(isLeaf: true);

  /// Construct an [`FixedDecimal`] from an float, with a given power of 10 for the lower magnitude
  ///
  /// See the [Rust documentation for `try_from_f64`](https://docs.rs/fixed_decimal/latest/fixed_decimal/struct.FixedDecimal.html#method.try_from_f64) for more information.
  ///
  /// See the [Rust documentation for `FloatPrecision`](https://docs.rs/fixed_decimal/latest/fixed_decimal/enum.FloatPrecision.html) for more information.
  ///
  /// Throws [Error] on failure.
  factory FixedDecimal.fromDoubleWithLowerMagnitude(double f, int magnitude) {
    final result =
        _ICU4XFixedDecimal_create_from_f64_with_lower_magnitude(f, magnitude);
    if (!result.isOk) {
      throw Error.values.firstWhere((v) => v._underlying == result.union.err);
    }
    return FixedDecimal._(result.union.ok);
  }
  // ignore: non_constant_identifier_names
  static final _ICU4XFixedDecimal_create_from_f64_with_lower_magnitude = _capi<
              ffi.NativeFunction<
                  _ResultOpaqueInt32 Function(ffi.Double, ffi.Int16)>>(
          'ICU4XFixedDecimal_create_from_f64_with_lower_magnitude')
      .asFunction<_ResultOpaqueInt32 Function(double, int)>(isLeaf: true);

  /// Construct an [`FixedDecimal`] from an float, for a given number of significant digits
  ///
  /// See the [Rust documentation for `try_from_f64`](https://docs.rs/fixed_decimal/latest/fixed_decimal/struct.FixedDecimal.html#method.try_from_f64) for more information.
  ///
  /// See the [Rust documentation for `FloatPrecision`](https://docs.rs/fixed_decimal/latest/fixed_decimal/enum.FloatPrecision.html) for more information.
  ///
  /// Throws [Error] on failure.
  factory FixedDecimal.fromDoubleWithSignificantDigits(double f, int digits) {
    final result =
        _ICU4XFixedDecimal_create_from_f64_with_significant_digits(f, digits);
    if (!result.isOk) {
      throw Error.values.firstWhere((v) => v._underlying == result.union.err);
    }
    return FixedDecimal._(result.union.ok);
  }
  // ignore: non_constant_identifier_names
  static final _ICU4XFixedDecimal_create_from_f64_with_significant_digits =
      _capi<
                  ffi.NativeFunction<
                      _ResultOpaqueInt32 Function(ffi.Double, ffi.Uint8)>>(
              'ICU4XFixedDecimal_create_from_f64_with_significant_digits')
          .asFunction<_ResultOpaqueInt32 Function(double, int)>(isLeaf: true);

  /// Construct an [`FixedDecimal`] from an float, with enough digits to recover
  /// the original floating point in IEEE 754 without needing trailing zeros
  ///
  /// See the [Rust documentation for `try_from_f64`](https://docs.rs/fixed_decimal/latest/fixed_decimal/struct.FixedDecimal.html#method.try_from_f64) for more information.
  ///
  /// See the [Rust documentation for `FloatPrecision`](https://docs.rs/fixed_decimal/latest/fixed_decimal/enum.FloatPrecision.html) for more information.
  ///
  /// Throws [Error] on failure.
  factory FixedDecimal.fromDoubleWithDoublePrecision(double f) {
    final result =
        _ICU4XFixedDecimal_create_from_f64_with_floating_precision(f);
    if (!result.isOk) {
      throw Error.values.firstWhere((v) => v._underlying == result.union.err);
    }
    return FixedDecimal._(result.union.ok);
  }
  // ignore: non_constant_identifier_names
  static final _ICU4XFixedDecimal_create_from_f64_with_floating_precision =
      _capi<ffi.NativeFunction<_ResultOpaqueInt32 Function(ffi.Double)>>(
              'ICU4XFixedDecimal_create_from_f64_with_floating_precision')
          .asFunction<_ResultOpaqueInt32 Function(double)>(isLeaf: true);

  /// Construct an [`FixedDecimal`] from a string.
  ///
  /// See the [Rust documentation for `from_str`](https://docs.rs/fixed_decimal/latest/fixed_decimal/struct.FixedDecimal.html#method.from_str) for more information.
  ///
  /// Throws [Error] on failure.
  factory FixedDecimal.fromString(String v) {
    final alloc = ffi2.Arena();
    final vSlice = _SliceFfi2Utf8._fromDart(v, alloc);

    final result =
        _ICU4XFixedDecimal_create_from_string(vSlice._bytes, vSlice._length);
    alloc.releaseAll();
    if (!result.isOk) {
      throw Error.values.firstWhere((v) => v._underlying == result.union.err);
    }
    return FixedDecimal._(result.union.ok);
  }
  // ignore: non_constant_identifier_names
  static final _ICU4XFixedDecimal_create_from_string = _capi<
          ffi.NativeFunction<
              _ResultOpaqueInt32 Function(ffi.Pointer<ffi2.Utf8>,
                  ffi.Size)>>('ICU4XFixedDecimal_create_from_string')
      .asFunction<_ResultOpaqueInt32 Function(ffi.Pointer<ffi2.Utf8>, int)>(
          isLeaf: true);

  /// See the [Rust documentation for `digit_at`](https://docs.rs/fixed_decimal/latest/fixed_decimal/struct.FixedDecimal.html#method.digit_at) for more information.
  int digitAt(int magnitude) {
    final result = _ICU4XFixedDecimal_digit_at(_underlying, magnitude);
    return result;
  }

  // ignore: non_constant_identifier_names
  static final _ICU4XFixedDecimal_digit_at = _capi<
          ffi.NativeFunction<
              ffi.Uint8 Function(ffi.Pointer<ffi.Opaque>,
                  ffi.Int16)>>('ICU4XFixedDecimal_digit_at')
      .asFunction<int Function(ffi.Pointer<ffi.Opaque>, int)>(isLeaf: true);

  /// See the [Rust documentation for `magnitude_range`](https://docs.rs/fixed_decimal/latest/fixed_decimal/struct.FixedDecimal.html#method.magnitude_range) for more information.
  int get magnitudeStart {
    final result = _ICU4XFixedDecimal_magnitude_start(_underlying);
    return result;
  }

  // ignore: non_constant_identifier_names
  static final _ICU4XFixedDecimal_magnitude_start =
      _capi<ffi.NativeFunction<ffi.Int16 Function(ffi.Pointer<ffi.Opaque>)>>(
              'ICU4XFixedDecimal_magnitude_start')
          .asFunction<int Function(ffi.Pointer<ffi.Opaque>)>(isLeaf: true);

  /// See the [Rust documentation for `magnitude_range`](https://docs.rs/fixed_decimal/latest/fixed_decimal/struct.FixedDecimal.html#method.magnitude_range) for more information.
  int get magnitudeEnd {
    final result = _ICU4XFixedDecimal_magnitude_end(_underlying);
    return result;
  }

  // ignore: non_constant_identifier_names
  static final _ICU4XFixedDecimal_magnitude_end =
      _capi<ffi.NativeFunction<ffi.Int16 Function(ffi.Pointer<ffi.Opaque>)>>(
              'ICU4XFixedDecimal_magnitude_end')
          .asFunction<int Function(ffi.Pointer<ffi.Opaque>)>(isLeaf: true);

  /// See the [Rust documentation for `nonzero_magnitude_start`](https://docs.rs/fixed_decimal/latest/fixed_decimal/struct.FixedDecimal.html#method.nonzero_magnitude_start) for more information.
  int get nonzeroMagnitudeStart {
    final result = _ICU4XFixedDecimal_nonzero_magnitude_start(_underlying);
    return result;
  }

  // ignore: non_constant_identifier_names
  static final _ICU4XFixedDecimal_nonzero_magnitude_start =
      _capi<ffi.NativeFunction<ffi.Int16 Function(ffi.Pointer<ffi.Opaque>)>>(
              'ICU4XFixedDecimal_nonzero_magnitude_start')
          .asFunction<int Function(ffi.Pointer<ffi.Opaque>)>(isLeaf: true);

  /// See the [Rust documentation for `nonzero_magnitude_end`](https://docs.rs/fixed_decimal/latest/fixed_decimal/struct.FixedDecimal.html#method.nonzero_magnitude_end) for more information.
  int get nonzeroMagnitudeEnd {
    final result = _ICU4XFixedDecimal_nonzero_magnitude_end(_underlying);
    return result;
  }

  // ignore: non_constant_identifier_names
  static final _ICU4XFixedDecimal_nonzero_magnitude_end =
      _capi<ffi.NativeFunction<ffi.Int16 Function(ffi.Pointer<ffi.Opaque>)>>(
              'ICU4XFixedDecimal_nonzero_magnitude_end')
          .asFunction<int Function(ffi.Pointer<ffi.Opaque>)>(isLeaf: true);

  /// See the [Rust documentation for `is_zero`](https://docs.rs/fixed_decimal/latest/fixed_decimal/struct.FixedDecimal.html#method.is_zero) for more information.
  bool get isZero {
    final result = _ICU4XFixedDecimal_is_zero(_underlying);
    return result;
  }

  // ignore: non_constant_identifier_names
  static final _ICU4XFixedDecimal_is_zero =
      _capi<ffi.NativeFunction<ffi.Bool Function(ffi.Pointer<ffi.Opaque>)>>(
              'ICU4XFixedDecimal_is_zero')
          .asFunction<bool Function(ffi.Pointer<ffi.Opaque>)>(isLeaf: true);

  /// Multiply the [`FixedDecimal`] by a given power of ten.
  ///
  /// See the [Rust documentation for `multiply_pow10`](https://docs.rs/fixed_decimal/latest/fixed_decimal/struct.FixedDecimal.html#method.multiply_pow10) for more information.
  void multiplyPow10(int power) {
    _ICU4XFixedDecimal_multiply_pow10(_underlying, power);
  }

  // ignore: non_constant_identifier_names
  static final _ICU4XFixedDecimal_multiply_pow10 = _capi<
          ffi.NativeFunction<
              ffi.Void Function(ffi.Pointer<ffi.Opaque>,
                  ffi.Int16)>>('ICU4XFixedDecimal_multiply_pow10')
      .asFunction<void Function(ffi.Pointer<ffi.Opaque>, int)>(isLeaf: true);

  /// See the [Rust documentation for `sign`](https://docs.rs/fixed_decimal/latest/fixed_decimal/struct.FixedDecimal.html#method.sign) for more information.
  FixedDecimalSign get sign {
    final result = _ICU4XFixedDecimal_sign(_underlying);
    return FixedDecimalSign.values[result];
  }

  // ignore: non_constant_identifier_names
  static final _ICU4XFixedDecimal_sign =
      _capi<ffi.NativeFunction<ffi.Int32 Function(ffi.Pointer<ffi.Opaque>)>>(
              'ICU4XFixedDecimal_sign')
          .asFunction<int Function(ffi.Pointer<ffi.Opaque>)>(isLeaf: true);

  /// Set the sign of the [`FixedDecimal`].
  ///
  /// See the [Rust documentation for `set_sign`](https://docs.rs/fixed_decimal/latest/fixed_decimal/struct.FixedDecimal.html#method.set_sign) for more information.
  set sign(FixedDecimalSign sign) {
    _ICU4XFixedDecimal_set_sign(_underlying, sign.index);
  }

  // ignore: non_constant_identifier_names
  static final _ICU4XFixedDecimal_set_sign = _capi<
          ffi.NativeFunction<
              ffi.Void Function(ffi.Pointer<ffi.Opaque>,
                  ffi.Int32)>>('ICU4XFixedDecimal_set_sign')
      .asFunction<void Function(ffi.Pointer<ffi.Opaque>, int)>(isLeaf: true);

  /// See the [Rust documentation for `apply_sign_display`](https://docs.rs/fixed_decimal/latest/fixed_decimal/struct.FixedDecimal.html#method.apply_sign_display) for more information.
  void applySignDisplay(FixedDecimalSignDisplay signDisplay) {
    _ICU4XFixedDecimal_apply_sign_display(_underlying, signDisplay.index);
  }

  // ignore: non_constant_identifier_names
  static final _ICU4XFixedDecimal_apply_sign_display = _capi<
          ffi.NativeFunction<
              ffi.Void Function(ffi.Pointer<ffi.Opaque>,
                  ffi.Int32)>>('ICU4XFixedDecimal_apply_sign_display')
      .asFunction<void Function(ffi.Pointer<ffi.Opaque>, int)>(isLeaf: true);

  /// See the [Rust documentation for `trim_start`](https://docs.rs/fixed_decimal/latest/fixed_decimal/struct.FixedDecimal.html#method.trim_start) for more information.
  void trimStart() {
    _ICU4XFixedDecimal_trim_start(_underlying);
  }

  // ignore: non_constant_identifier_names
  static final _ICU4XFixedDecimal_trim_start =
      _capi<ffi.NativeFunction<ffi.Void Function(ffi.Pointer<ffi.Opaque>)>>(
              'ICU4XFixedDecimal_trim_start')
          .asFunction<void Function(ffi.Pointer<ffi.Opaque>)>(isLeaf: true);

  /// See the [Rust documentation for `trim_end`](https://docs.rs/fixed_decimal/latest/fixed_decimal/struct.FixedDecimal.html#method.trim_end) for more information.
  void trimEnd() {
    _ICU4XFixedDecimal_trim_end(_underlying);
  }

  // ignore: non_constant_identifier_names
  static final _ICU4XFixedDecimal_trim_end =
      _capi<ffi.NativeFunction<ffi.Void Function(ffi.Pointer<ffi.Opaque>)>>(
              'ICU4XFixedDecimal_trim_end')
          .asFunction<void Function(ffi.Pointer<ffi.Opaque>)>(isLeaf: true);

  /// Zero-pad the [`FixedDecimal`] on the left to a particular position
  ///
  /// See the [Rust documentation for `pad_start`](https://docs.rs/fixed_decimal/latest/fixed_decimal/struct.FixedDecimal.html#method.pad_start) for more information.
  void padStart(int position) {
    _ICU4XFixedDecimal_pad_start(_underlying, position);
  }

  // ignore: non_constant_identifier_names
  static final _ICU4XFixedDecimal_pad_start = _capi<
          ffi.NativeFunction<
              ffi.Void Function(ffi.Pointer<ffi.Opaque>,
                  ffi.Int16)>>('ICU4XFixedDecimal_pad_start')
      .asFunction<void Function(ffi.Pointer<ffi.Opaque>, int)>(isLeaf: true);

  /// Zero-pad the [`FixedDecimal`] on the right to a particular position
  ///
  /// See the [Rust documentation for `pad_end`](https://docs.rs/fixed_decimal/latest/fixed_decimal/struct.FixedDecimal.html#method.pad_end) for more information.
  void padEnd(int position) {
    _ICU4XFixedDecimal_pad_end(_underlying, position);
  }

  // ignore: non_constant_identifier_names
  static final _ICU4XFixedDecimal_pad_end = _capi<
          ffi.NativeFunction<
              ffi.Void Function(ffi.Pointer<ffi.Opaque>,
                  ffi.Int16)>>('ICU4XFixedDecimal_pad_end')
      .asFunction<void Function(ffi.Pointer<ffi.Opaque>, int)>(isLeaf: true);

  /// Truncate the [`FixedDecimal`] on the left to a particular position, deleting digits if necessary. This is useful for, e.g. abbreviating years
  /// ("2022" -> "22")
  ///
  /// See the [Rust documentation for `set_max_position`](https://docs.rs/fixed_decimal/latest/fixed_decimal/struct.FixedDecimal.html#method.set_max_position) for more information.
  void setMaxPosition(int position) {
    _ICU4XFixedDecimal_set_max_position(_underlying, position);
  }

  // ignore: non_constant_identifier_names
  static final _ICU4XFixedDecimal_set_max_position = _capi<
          ffi.NativeFunction<
              ffi.Void Function(ffi.Pointer<ffi.Opaque>,
                  ffi.Int16)>>('ICU4XFixedDecimal_set_max_position')
      .asFunction<void Function(ffi.Pointer<ffi.Opaque>, int)>(isLeaf: true);

  /// See the [Rust documentation for `trunc`](https://docs.rs/fixed_decimal/latest/fixed_decimal/struct.FixedDecimal.html#method.trunc) for more information.
  void trunc(int position) {
    _ICU4XFixedDecimal_trunc(_underlying, position);
  }

  // ignore: non_constant_identifier_names
  static final _ICU4XFixedDecimal_trunc = _capi<
          ffi.NativeFunction<
              ffi.Void Function(ffi.Pointer<ffi.Opaque>,
                  ffi.Int16)>>('ICU4XFixedDecimal_trunc')
      .asFunction<void Function(ffi.Pointer<ffi.Opaque>, int)>(isLeaf: true);

  /// See the [Rust documentation for `half_trunc`](https://docs.rs/fixed_decimal/latest/fixed_decimal/struct.FixedDecimal.html#method.half_trunc) for more information.
  void halfTrunc(int position) {
    _ICU4XFixedDecimal_half_trunc(_underlying, position);
  }

  // ignore: non_constant_identifier_names
  static final _ICU4XFixedDecimal_half_trunc = _capi<
          ffi.NativeFunction<
              ffi.Void Function(ffi.Pointer<ffi.Opaque>,
                  ffi.Int16)>>('ICU4XFixedDecimal_half_trunc')
      .asFunction<void Function(ffi.Pointer<ffi.Opaque>, int)>(isLeaf: true);

  /// See the [Rust documentation for `expand`](https://docs.rs/fixed_decimal/latest/fixed_decimal/struct.FixedDecimal.html#method.expand) for more information.
  void expand(int position) {
    _ICU4XFixedDecimal_expand(_underlying, position);
  }

  // ignore: non_constant_identifier_names
  static final _ICU4XFixedDecimal_expand = _capi<
          ffi.NativeFunction<
              ffi.Void Function(ffi.Pointer<ffi.Opaque>,
                  ffi.Int16)>>('ICU4XFixedDecimal_expand')
      .asFunction<void Function(ffi.Pointer<ffi.Opaque>, int)>(isLeaf: true);

  /// See the [Rust documentation for `half_expand`](https://docs.rs/fixed_decimal/latest/fixed_decimal/struct.FixedDecimal.html#method.half_expand) for more information.
  void halfExpand(int position) {
    _ICU4XFixedDecimal_half_expand(_underlying, position);
  }

  // ignore: non_constant_identifier_names
  static final _ICU4XFixedDecimal_half_expand = _capi<
          ffi.NativeFunction<
              ffi.Void Function(ffi.Pointer<ffi.Opaque>,
                  ffi.Int16)>>('ICU4XFixedDecimal_half_expand')
      .asFunction<void Function(ffi.Pointer<ffi.Opaque>, int)>(isLeaf: true);

  /// See the [Rust documentation for `ceil`](https://docs.rs/fixed_decimal/latest/fixed_decimal/struct.FixedDecimal.html#method.ceil) for more information.
  void ceil(int position) {
    _ICU4XFixedDecimal_ceil(_underlying, position);
  }

  // ignore: non_constant_identifier_names
  static final _ICU4XFixedDecimal_ceil = _capi<
          ffi.NativeFunction<
              ffi.Void Function(ffi.Pointer<ffi.Opaque>,
                  ffi.Int16)>>('ICU4XFixedDecimal_ceil')
      .asFunction<void Function(ffi.Pointer<ffi.Opaque>, int)>(isLeaf: true);

  /// See the [Rust documentation for `half_ceil`](https://docs.rs/fixed_decimal/latest/fixed_decimal/struct.FixedDecimal.html#method.half_ceil) for more information.
  void halfCeil(int position) {
    _ICU4XFixedDecimal_half_ceil(_underlying, position);
  }

  // ignore: non_constant_identifier_names
  static final _ICU4XFixedDecimal_half_ceil = _capi<
          ffi.NativeFunction<
              ffi.Void Function(ffi.Pointer<ffi.Opaque>,
                  ffi.Int16)>>('ICU4XFixedDecimal_half_ceil')
      .asFunction<void Function(ffi.Pointer<ffi.Opaque>, int)>(isLeaf: true);

  /// See the [Rust documentation for `floor`](https://docs.rs/fixed_decimal/latest/fixed_decimal/struct.FixedDecimal.html#method.floor) for more information.
  void floor(int position) {
    _ICU4XFixedDecimal_floor(_underlying, position);
  }

  // ignore: non_constant_identifier_names
  static final _ICU4XFixedDecimal_floor = _capi<
          ffi.NativeFunction<
              ffi.Void Function(ffi.Pointer<ffi.Opaque>,
                  ffi.Int16)>>('ICU4XFixedDecimal_floor')
      .asFunction<void Function(ffi.Pointer<ffi.Opaque>, int)>(isLeaf: true);

  /// See the [Rust documentation for `half_floor`](https://docs.rs/fixed_decimal/latest/fixed_decimal/struct.FixedDecimal.html#method.half_floor) for more information.
  void halfFloor(int position) {
    _ICU4XFixedDecimal_half_floor(_underlying, position);
  }

  // ignore: non_constant_identifier_names
  static final _ICU4XFixedDecimal_half_floor = _capi<
          ffi.NativeFunction<
              ffi.Void Function(ffi.Pointer<ffi.Opaque>,
                  ffi.Int16)>>('ICU4XFixedDecimal_half_floor')
      .asFunction<void Function(ffi.Pointer<ffi.Opaque>, int)>(isLeaf: true);

  /// See the [Rust documentation for `half_even`](https://docs.rs/fixed_decimal/latest/fixed_decimal/struct.FixedDecimal.html#method.half_even) for more information.
  void halfEven(int position) {
    _ICU4XFixedDecimal_half_even(_underlying, position);
  }

  // ignore: non_constant_identifier_names
  static final _ICU4XFixedDecimal_half_even = _capi<
          ffi.NativeFunction<
              ffi.Void Function(ffi.Pointer<ffi.Opaque>,
                  ffi.Int16)>>('ICU4XFixedDecimal_half_even')
      .asFunction<void Function(ffi.Pointer<ffi.Opaque>, int)>(isLeaf: true);

  /// Concatenates `other` to the end of `self`.
  ///
  /// If successful, `other` will be set to 0 and a successful status is returned.
  ///
  /// If not successful, `other` will be unchanged and an error is returned.
  ///
  /// See the [Rust documentation for `concatenate_end`](https://docs.rs/fixed_decimal/latest/fixed_decimal/struct.FixedDecimal.html#method.concatenate_end) for more information.
  ///
  /// Throws [VoidError] on failure.
  void concatenateEnd(FixedDecimal other) {
    final result =
        _ICU4XFixedDecimal_concatenate_end(_underlying, other._underlying);
    if (!result.isOk) {
      throw VoidError();
    }
  }

  // ignore: non_constant_identifier_names
  static final _ICU4XFixedDecimal_concatenate_end = _capi<
              ffi.NativeFunction<
                  _ResultVoidVoid Function(
                      ffi.Pointer<ffi.Opaque>, ffi.Pointer<ffi.Opaque>)>>(
          'ICU4XFixedDecimal_concatenate_end')
      .asFunction<
          _ResultVoidVoid Function(
              ffi.Pointer<ffi.Opaque>, ffi.Pointer<ffi.Opaque>)>(isLeaf: true);

  /// Format the [`FixedDecimal`] as a string.
  ///
  /// See the [Rust documentation for `write_to`](https://docs.rs/fixed_decimal/latest/fixed_decimal/struct.FixedDecimal.html#method.write_to) for more information.
  @override
  String toString() {
    final writeable = _Writeable();
    _ICU4XFixedDecimal_to_string(_underlying, writeable._underlying);
    return writeable.finalize();
  }

  // ignore: non_constant_identifier_names
  static final _ICU4XFixedDecimal_to_string = _capi<
          ffi.NativeFunction<
              ffi.Void Function(ffi.Pointer<ffi.Opaque>,
                  ffi.Pointer<ffi.Opaque>)>>('ICU4XFixedDecimal_to_string')
      .asFunction<
          void Function(
              ffi.Pointer<ffi.Opaque>, ffi.Pointer<ffi.Opaque>)>(isLeaf: true);
}
