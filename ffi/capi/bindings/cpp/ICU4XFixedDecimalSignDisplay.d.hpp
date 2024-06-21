#ifndef ICU4XFixedDecimalSignDisplay_D_HPP
#define ICU4XFixedDecimalSignDisplay_D_HPP

#include <stdio.h>
#include <stdint.h>
#include <stddef.h>
#include <stdbool.h>
#include <memory>
#include <optional>
#include "diplomat_runtime.hpp"


namespace capi {
    typedef enum ICU4XFixedDecimalSignDisplay {
      ICU4XFixedDecimalSignDisplay_Auto = 0,
      ICU4XFixedDecimalSignDisplay_Never = 1,
      ICU4XFixedDecimalSignDisplay_Always = 2,
      ICU4XFixedDecimalSignDisplay_ExceptZero = 3,
      ICU4XFixedDecimalSignDisplay_Negative = 4,
    } ICU4XFixedDecimalSignDisplay;
}

class ICU4XFixedDecimalSignDisplay {
public:
  enum Value {
    Auto = 0,
    Never = 1,
    Always = 2,
    ExceptZero = 3,
    Negative = 4,
  };

  ICU4XFixedDecimalSignDisplay() = default;
  // Implicit conversions between enum and ::Value
  constexpr ICU4XFixedDecimalSignDisplay(Value v) : value(v) {}
  constexpr operator Value() const { return value; }
  // Prevent usage as boolean value
  explicit operator bool() const = delete;

  inline capi::ICU4XFixedDecimalSignDisplay AsFFI() const;
  inline static ICU4XFixedDecimalSignDisplay FromFFI(capi::ICU4XFixedDecimalSignDisplay c_enum);
private:
    Value value;
};


#endif // ICU4XFixedDecimalSignDisplay_D_HPP
