#ifndef ICU4XLocaleParseError_D_HPP
#define ICU4XLocaleParseError_D_HPP

#include <stdio.h>
#include <stdint.h>
#include <stddef.h>
#include <stdbool.h>
#include <memory>
#include <optional>
#include "diplomat_runtime.hpp"


namespace capi {
    typedef enum ICU4XLocaleParseError {
      ICU4XLocaleParseError_Unknown = 0,
      ICU4XLocaleParseError_Language = 1,
      ICU4XLocaleParseError_Subtag = 2,
      ICU4XLocaleParseError_Extension = 3,
    } ICU4XLocaleParseError;
}

class ICU4XLocaleParseError {
public:
  enum Value {
    Unknown = 0,
    Language = 1,
    Subtag = 2,
    Extension = 3,
  };

  ICU4XLocaleParseError() = default;
  // Implicit conversions between enum and ::Value
  constexpr ICU4XLocaleParseError(Value v) : value(v) {}
  constexpr operator Value() const { return value; }
  // Prevent usage as boolean value
  explicit operator bool() const = delete;

  inline capi::ICU4XLocaleParseError AsFFI() const;
  inline static ICU4XLocaleParseError FromFFI(capi::ICU4XLocaleParseError c_enum);
private:
    Value value;
};


#endif // ICU4XLocaleParseError_D_HPP
