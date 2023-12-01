// This file is part of ICU4X. For terms of use, please see the file
// called LICENSE at the top level of the ICU4X source tree
// (online at: https://github.com/unicode-org/icu4x/blob/main/LICENSE ).

// TODO(#1637): The numeric values of these symbols are generated by the old transformation code
// (aka build.rs). We should move these symbols into RuleBreakDataV1, and remove this file.

// Used by line.rs.
#[allow(dead_code)]
pub const UNKNOWN: u8 = 0;
#[allow(dead_code)]
pub const AI: u8 = 1;
#[allow(dead_code)]
pub const AL: u8 = 2;
#[allow(dead_code)]
pub const B2: u8 = 3;
#[allow(dead_code)]
pub const BA: u8 = 4;
#[allow(dead_code)]
pub const BB: u8 = 5;
#[allow(dead_code)]
pub const BK: u8 = 6;
#[allow(dead_code)]
pub const CB: u8 = 7;
#[allow(dead_code)]
pub const CJ: u8 = 8;
#[allow(dead_code)]
pub const CL: u8 = 9;
#[allow(dead_code)]
pub const CM: u8 = 10;
#[allow(dead_code)]
pub const CP: u8 = 11;
#[allow(dead_code)]
pub const CR: u8 = 12;
#[allow(dead_code)]
pub const EB: u8 = 13;
#[allow(dead_code)]
pub const EM: u8 = 14;
#[allow(dead_code)]
pub const EX: u8 = 15;
#[allow(dead_code)]
pub const GL: u8 = 16;
#[allow(dead_code)]
pub const H2: u8 = 17;
#[allow(dead_code)]
pub const H3: u8 = 18;
#[allow(dead_code)]
pub const HL: u8 = 19;
#[allow(dead_code)]
pub const HY: u8 = 20;
#[allow(dead_code)]
pub const ID: u8 = 21;
#[allow(dead_code)]
pub const ID_CN: u8 = 22;
#[allow(dead_code)]
pub const IN: u8 = 23;
#[allow(dead_code)]
pub const IS: u8 = 24;
#[allow(dead_code)]
pub const JL: u8 = 25;
#[allow(dead_code)]
pub const JT: u8 = 26;
#[allow(dead_code)]
pub const JV: u8 = 27;
#[allow(dead_code)]
pub const LF: u8 = 28;
#[allow(dead_code)]
pub const NL: u8 = 29;
#[allow(dead_code)]
pub const NS: u8 = 30;
#[allow(dead_code)]
pub const NU: u8 = 31;
#[allow(dead_code)]
pub const OP_EA: u8 = 32;
#[allow(dead_code)]
pub const OP_OP30: u8 = 33;
#[allow(dead_code)]
pub const PO: u8 = 34;
#[allow(dead_code)]
pub const PO_EAW: u8 = 35;
#[allow(dead_code)]
pub const PR: u8 = 36;
#[allow(dead_code)]
pub const PR_EAW: u8 = 37;
#[allow(dead_code)]
pub const QU: u8 = 38;
#[allow(dead_code)]
pub const RI: u8 = 39;
#[allow(dead_code)]
pub const SA: u8 = 40;
#[allow(dead_code)]
pub const SG: u8 = 41;
#[allow(dead_code)]
pub const SP: u8 = 42;
#[allow(dead_code)]
pub const SY: u8 = 43;
#[allow(dead_code)]
pub const WJ: u8 = 44;
#[allow(dead_code)]
pub const XX: u8 = 45;
#[allow(dead_code)]
pub const ZW: u8 = 46;
#[allow(dead_code)]
pub const ZWJ: u8 = 47;

// Used by all segmenters.
pub const BREAK_RULE: i8 = -128;
pub const UNKNOWN_RULE: i8 = -127;
pub const NOT_MATCH_RULE: i8 = -2;
pub const KEEP_RULE: i8 = -1;
// This is a mask bit chosen sufficiently large than all other concrete states.
// If a break state contains this bit, we have to look ahead one more character.
pub const INTERMEDIATE_MATCH_RULE: i8 = 64;
