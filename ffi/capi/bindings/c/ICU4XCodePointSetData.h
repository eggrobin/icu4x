#ifndef ICU4XCodePointSetData_H
#define ICU4XCodePointSetData_H

#include <stdio.h>
#include <stdint.h>
#include <stddef.h>
#include <stdbool.h>
#include "diplomat_runtime.h"

#include "ICU4XCodePointRangeIterator.d.h"
#include "ICU4XDataError.d.h"
#include "ICU4XDataProvider.d.h"
#include "ICU4XError.d.h"

#include "ICU4XCodePointSetData.d.h"






bool ICU4XCodePointSetData_contains(const ICU4XCodePointSetData* self, char32_t cp);

bool ICU4XCodePointSetData_contains32(const ICU4XCodePointSetData* self, uint32_t cp);

ICU4XCodePointRangeIterator* ICU4XCodePointSetData_iter_ranges(const ICU4XCodePointSetData* self);

ICU4XCodePointRangeIterator* ICU4XCodePointSetData_iter_ranges_complemented(const ICU4XCodePointSetData* self);

typedef struct ICU4XCodePointSetData_load_for_general_category_group_result {union {ICU4XCodePointSetData* ok; ICU4XDataError err;}; bool is_ok;} ICU4XCodePointSetData_load_for_general_category_group_result;
ICU4XCodePointSetData_load_for_general_category_group_result ICU4XCodePointSetData_load_for_general_category_group(const ICU4XDataProvider* provider, uint32_t group);

typedef struct ICU4XCodePointSetData_load_ascii_hex_digit_result {union {ICU4XCodePointSetData* ok; ICU4XDataError err;}; bool is_ok;} ICU4XCodePointSetData_load_ascii_hex_digit_result;
ICU4XCodePointSetData_load_ascii_hex_digit_result ICU4XCodePointSetData_load_ascii_hex_digit(const ICU4XDataProvider* provider);

typedef struct ICU4XCodePointSetData_load_alnum_result {union {ICU4XCodePointSetData* ok; ICU4XDataError err;}; bool is_ok;} ICU4XCodePointSetData_load_alnum_result;
ICU4XCodePointSetData_load_alnum_result ICU4XCodePointSetData_load_alnum(const ICU4XDataProvider* provider);

typedef struct ICU4XCodePointSetData_load_alphabetic_result {union {ICU4XCodePointSetData* ok; ICU4XDataError err;}; bool is_ok;} ICU4XCodePointSetData_load_alphabetic_result;
ICU4XCodePointSetData_load_alphabetic_result ICU4XCodePointSetData_load_alphabetic(const ICU4XDataProvider* provider);

typedef struct ICU4XCodePointSetData_load_bidi_control_result {union {ICU4XCodePointSetData* ok; ICU4XDataError err;}; bool is_ok;} ICU4XCodePointSetData_load_bidi_control_result;
ICU4XCodePointSetData_load_bidi_control_result ICU4XCodePointSetData_load_bidi_control(const ICU4XDataProvider* provider);

typedef struct ICU4XCodePointSetData_load_bidi_mirrored_result {union {ICU4XCodePointSetData* ok; ICU4XDataError err;}; bool is_ok;} ICU4XCodePointSetData_load_bidi_mirrored_result;
ICU4XCodePointSetData_load_bidi_mirrored_result ICU4XCodePointSetData_load_bidi_mirrored(const ICU4XDataProvider* provider);

typedef struct ICU4XCodePointSetData_load_blank_result {union {ICU4XCodePointSetData* ok; ICU4XDataError err;}; bool is_ok;} ICU4XCodePointSetData_load_blank_result;
ICU4XCodePointSetData_load_blank_result ICU4XCodePointSetData_load_blank(const ICU4XDataProvider* provider);

typedef struct ICU4XCodePointSetData_load_cased_result {union {ICU4XCodePointSetData* ok; ICU4XDataError err;}; bool is_ok;} ICU4XCodePointSetData_load_cased_result;
ICU4XCodePointSetData_load_cased_result ICU4XCodePointSetData_load_cased(const ICU4XDataProvider* provider);

typedef struct ICU4XCodePointSetData_load_case_ignorable_result {union {ICU4XCodePointSetData* ok; ICU4XDataError err;}; bool is_ok;} ICU4XCodePointSetData_load_case_ignorable_result;
ICU4XCodePointSetData_load_case_ignorable_result ICU4XCodePointSetData_load_case_ignorable(const ICU4XDataProvider* provider);

typedef struct ICU4XCodePointSetData_load_full_composition_exclusion_result {union {ICU4XCodePointSetData* ok; ICU4XDataError err;}; bool is_ok;} ICU4XCodePointSetData_load_full_composition_exclusion_result;
ICU4XCodePointSetData_load_full_composition_exclusion_result ICU4XCodePointSetData_load_full_composition_exclusion(const ICU4XDataProvider* provider);

typedef struct ICU4XCodePointSetData_load_changes_when_casefolded_result {union {ICU4XCodePointSetData* ok; ICU4XDataError err;}; bool is_ok;} ICU4XCodePointSetData_load_changes_when_casefolded_result;
ICU4XCodePointSetData_load_changes_when_casefolded_result ICU4XCodePointSetData_load_changes_when_casefolded(const ICU4XDataProvider* provider);

typedef struct ICU4XCodePointSetData_load_changes_when_casemapped_result {union {ICU4XCodePointSetData* ok; ICU4XDataError err;}; bool is_ok;} ICU4XCodePointSetData_load_changes_when_casemapped_result;
ICU4XCodePointSetData_load_changes_when_casemapped_result ICU4XCodePointSetData_load_changes_when_casemapped(const ICU4XDataProvider* provider);

typedef struct ICU4XCodePointSetData_load_changes_when_nfkc_casefolded_result {union {ICU4XCodePointSetData* ok; ICU4XDataError err;}; bool is_ok;} ICU4XCodePointSetData_load_changes_when_nfkc_casefolded_result;
ICU4XCodePointSetData_load_changes_when_nfkc_casefolded_result ICU4XCodePointSetData_load_changes_when_nfkc_casefolded(const ICU4XDataProvider* provider);

typedef struct ICU4XCodePointSetData_load_changes_when_lowercased_result {union {ICU4XCodePointSetData* ok; ICU4XDataError err;}; bool is_ok;} ICU4XCodePointSetData_load_changes_when_lowercased_result;
ICU4XCodePointSetData_load_changes_when_lowercased_result ICU4XCodePointSetData_load_changes_when_lowercased(const ICU4XDataProvider* provider);

typedef struct ICU4XCodePointSetData_load_changes_when_titlecased_result {union {ICU4XCodePointSetData* ok; ICU4XDataError err;}; bool is_ok;} ICU4XCodePointSetData_load_changes_when_titlecased_result;
ICU4XCodePointSetData_load_changes_when_titlecased_result ICU4XCodePointSetData_load_changes_when_titlecased(const ICU4XDataProvider* provider);

typedef struct ICU4XCodePointSetData_load_changes_when_uppercased_result {union {ICU4XCodePointSetData* ok; ICU4XDataError err;}; bool is_ok;} ICU4XCodePointSetData_load_changes_when_uppercased_result;
ICU4XCodePointSetData_load_changes_when_uppercased_result ICU4XCodePointSetData_load_changes_when_uppercased(const ICU4XDataProvider* provider);

typedef struct ICU4XCodePointSetData_load_dash_result {union {ICU4XCodePointSetData* ok; ICU4XDataError err;}; bool is_ok;} ICU4XCodePointSetData_load_dash_result;
ICU4XCodePointSetData_load_dash_result ICU4XCodePointSetData_load_dash(const ICU4XDataProvider* provider);

typedef struct ICU4XCodePointSetData_load_deprecated_result {union {ICU4XCodePointSetData* ok; ICU4XDataError err;}; bool is_ok;} ICU4XCodePointSetData_load_deprecated_result;
ICU4XCodePointSetData_load_deprecated_result ICU4XCodePointSetData_load_deprecated(const ICU4XDataProvider* provider);

typedef struct ICU4XCodePointSetData_load_default_ignorable_code_point_result {union {ICU4XCodePointSetData* ok; ICU4XDataError err;}; bool is_ok;} ICU4XCodePointSetData_load_default_ignorable_code_point_result;
ICU4XCodePointSetData_load_default_ignorable_code_point_result ICU4XCodePointSetData_load_default_ignorable_code_point(const ICU4XDataProvider* provider);

typedef struct ICU4XCodePointSetData_load_diacritic_result {union {ICU4XCodePointSetData* ok; ICU4XDataError err;}; bool is_ok;} ICU4XCodePointSetData_load_diacritic_result;
ICU4XCodePointSetData_load_diacritic_result ICU4XCodePointSetData_load_diacritic(const ICU4XDataProvider* provider);

typedef struct ICU4XCodePointSetData_load_emoji_modifier_base_result {union {ICU4XCodePointSetData* ok; ICU4XDataError err;}; bool is_ok;} ICU4XCodePointSetData_load_emoji_modifier_base_result;
ICU4XCodePointSetData_load_emoji_modifier_base_result ICU4XCodePointSetData_load_emoji_modifier_base(const ICU4XDataProvider* provider);

typedef struct ICU4XCodePointSetData_load_emoji_component_result {union {ICU4XCodePointSetData* ok; ICU4XDataError err;}; bool is_ok;} ICU4XCodePointSetData_load_emoji_component_result;
ICU4XCodePointSetData_load_emoji_component_result ICU4XCodePointSetData_load_emoji_component(const ICU4XDataProvider* provider);

typedef struct ICU4XCodePointSetData_load_emoji_modifier_result {union {ICU4XCodePointSetData* ok; ICU4XDataError err;}; bool is_ok;} ICU4XCodePointSetData_load_emoji_modifier_result;
ICU4XCodePointSetData_load_emoji_modifier_result ICU4XCodePointSetData_load_emoji_modifier(const ICU4XDataProvider* provider);

typedef struct ICU4XCodePointSetData_load_emoji_result {union {ICU4XCodePointSetData* ok; ICU4XDataError err;}; bool is_ok;} ICU4XCodePointSetData_load_emoji_result;
ICU4XCodePointSetData_load_emoji_result ICU4XCodePointSetData_load_emoji(const ICU4XDataProvider* provider);

typedef struct ICU4XCodePointSetData_load_emoji_presentation_result {union {ICU4XCodePointSetData* ok; ICU4XDataError err;}; bool is_ok;} ICU4XCodePointSetData_load_emoji_presentation_result;
ICU4XCodePointSetData_load_emoji_presentation_result ICU4XCodePointSetData_load_emoji_presentation(const ICU4XDataProvider* provider);

typedef struct ICU4XCodePointSetData_load_extender_result {union {ICU4XCodePointSetData* ok; ICU4XDataError err;}; bool is_ok;} ICU4XCodePointSetData_load_extender_result;
ICU4XCodePointSetData_load_extender_result ICU4XCodePointSetData_load_extender(const ICU4XDataProvider* provider);

typedef struct ICU4XCodePointSetData_load_extended_pictographic_result {union {ICU4XCodePointSetData* ok; ICU4XDataError err;}; bool is_ok;} ICU4XCodePointSetData_load_extended_pictographic_result;
ICU4XCodePointSetData_load_extended_pictographic_result ICU4XCodePointSetData_load_extended_pictographic(const ICU4XDataProvider* provider);

typedef struct ICU4XCodePointSetData_load_graph_result {union {ICU4XCodePointSetData* ok; ICU4XDataError err;}; bool is_ok;} ICU4XCodePointSetData_load_graph_result;
ICU4XCodePointSetData_load_graph_result ICU4XCodePointSetData_load_graph(const ICU4XDataProvider* provider);

typedef struct ICU4XCodePointSetData_load_grapheme_base_result {union {ICU4XCodePointSetData* ok; ICU4XDataError err;}; bool is_ok;} ICU4XCodePointSetData_load_grapheme_base_result;
ICU4XCodePointSetData_load_grapheme_base_result ICU4XCodePointSetData_load_grapheme_base(const ICU4XDataProvider* provider);

typedef struct ICU4XCodePointSetData_load_grapheme_extend_result {union {ICU4XCodePointSetData* ok; ICU4XDataError err;}; bool is_ok;} ICU4XCodePointSetData_load_grapheme_extend_result;
ICU4XCodePointSetData_load_grapheme_extend_result ICU4XCodePointSetData_load_grapheme_extend(const ICU4XDataProvider* provider);

typedef struct ICU4XCodePointSetData_load_grapheme_link_result {union {ICU4XCodePointSetData* ok; ICU4XDataError err;}; bool is_ok;} ICU4XCodePointSetData_load_grapheme_link_result;
ICU4XCodePointSetData_load_grapheme_link_result ICU4XCodePointSetData_load_grapheme_link(const ICU4XDataProvider* provider);

typedef struct ICU4XCodePointSetData_load_hex_digit_result {union {ICU4XCodePointSetData* ok; ICU4XDataError err;}; bool is_ok;} ICU4XCodePointSetData_load_hex_digit_result;
ICU4XCodePointSetData_load_hex_digit_result ICU4XCodePointSetData_load_hex_digit(const ICU4XDataProvider* provider);

typedef struct ICU4XCodePointSetData_load_hyphen_result {union {ICU4XCodePointSetData* ok; ICU4XDataError err;}; bool is_ok;} ICU4XCodePointSetData_load_hyphen_result;
ICU4XCodePointSetData_load_hyphen_result ICU4XCodePointSetData_load_hyphen(const ICU4XDataProvider* provider);

typedef struct ICU4XCodePointSetData_load_id_continue_result {union {ICU4XCodePointSetData* ok; ICU4XDataError err;}; bool is_ok;} ICU4XCodePointSetData_load_id_continue_result;
ICU4XCodePointSetData_load_id_continue_result ICU4XCodePointSetData_load_id_continue(const ICU4XDataProvider* provider);

typedef struct ICU4XCodePointSetData_load_ideographic_result {union {ICU4XCodePointSetData* ok; ICU4XDataError err;}; bool is_ok;} ICU4XCodePointSetData_load_ideographic_result;
ICU4XCodePointSetData_load_ideographic_result ICU4XCodePointSetData_load_ideographic(const ICU4XDataProvider* provider);

typedef struct ICU4XCodePointSetData_load_id_start_result {union {ICU4XCodePointSetData* ok; ICU4XDataError err;}; bool is_ok;} ICU4XCodePointSetData_load_id_start_result;
ICU4XCodePointSetData_load_id_start_result ICU4XCodePointSetData_load_id_start(const ICU4XDataProvider* provider);

typedef struct ICU4XCodePointSetData_load_ids_binary_operator_result {union {ICU4XCodePointSetData* ok; ICU4XDataError err;}; bool is_ok;} ICU4XCodePointSetData_load_ids_binary_operator_result;
ICU4XCodePointSetData_load_ids_binary_operator_result ICU4XCodePointSetData_load_ids_binary_operator(const ICU4XDataProvider* provider);

typedef struct ICU4XCodePointSetData_load_ids_trinary_operator_result {union {ICU4XCodePointSetData* ok; ICU4XDataError err;}; bool is_ok;} ICU4XCodePointSetData_load_ids_trinary_operator_result;
ICU4XCodePointSetData_load_ids_trinary_operator_result ICU4XCodePointSetData_load_ids_trinary_operator(const ICU4XDataProvider* provider);

typedef struct ICU4XCodePointSetData_load_join_control_result {union {ICU4XCodePointSetData* ok; ICU4XDataError err;}; bool is_ok;} ICU4XCodePointSetData_load_join_control_result;
ICU4XCodePointSetData_load_join_control_result ICU4XCodePointSetData_load_join_control(const ICU4XDataProvider* provider);

typedef struct ICU4XCodePointSetData_load_logical_order_exception_result {union {ICU4XCodePointSetData* ok; ICU4XDataError err;}; bool is_ok;} ICU4XCodePointSetData_load_logical_order_exception_result;
ICU4XCodePointSetData_load_logical_order_exception_result ICU4XCodePointSetData_load_logical_order_exception(const ICU4XDataProvider* provider);

typedef struct ICU4XCodePointSetData_load_lowercase_result {union {ICU4XCodePointSetData* ok; ICU4XDataError err;}; bool is_ok;} ICU4XCodePointSetData_load_lowercase_result;
ICU4XCodePointSetData_load_lowercase_result ICU4XCodePointSetData_load_lowercase(const ICU4XDataProvider* provider);

typedef struct ICU4XCodePointSetData_load_math_result {union {ICU4XCodePointSetData* ok; ICU4XDataError err;}; bool is_ok;} ICU4XCodePointSetData_load_math_result;
ICU4XCodePointSetData_load_math_result ICU4XCodePointSetData_load_math(const ICU4XDataProvider* provider);

typedef struct ICU4XCodePointSetData_load_noncharacter_code_point_result {union {ICU4XCodePointSetData* ok; ICU4XDataError err;}; bool is_ok;} ICU4XCodePointSetData_load_noncharacter_code_point_result;
ICU4XCodePointSetData_load_noncharacter_code_point_result ICU4XCodePointSetData_load_noncharacter_code_point(const ICU4XDataProvider* provider);

typedef struct ICU4XCodePointSetData_load_nfc_inert_result {union {ICU4XCodePointSetData* ok; ICU4XDataError err;}; bool is_ok;} ICU4XCodePointSetData_load_nfc_inert_result;
ICU4XCodePointSetData_load_nfc_inert_result ICU4XCodePointSetData_load_nfc_inert(const ICU4XDataProvider* provider);

typedef struct ICU4XCodePointSetData_load_nfd_inert_result {union {ICU4XCodePointSetData* ok; ICU4XDataError err;}; bool is_ok;} ICU4XCodePointSetData_load_nfd_inert_result;
ICU4XCodePointSetData_load_nfd_inert_result ICU4XCodePointSetData_load_nfd_inert(const ICU4XDataProvider* provider);

typedef struct ICU4XCodePointSetData_load_nfkc_inert_result {union {ICU4XCodePointSetData* ok; ICU4XDataError err;}; bool is_ok;} ICU4XCodePointSetData_load_nfkc_inert_result;
ICU4XCodePointSetData_load_nfkc_inert_result ICU4XCodePointSetData_load_nfkc_inert(const ICU4XDataProvider* provider);

typedef struct ICU4XCodePointSetData_load_nfkd_inert_result {union {ICU4XCodePointSetData* ok; ICU4XDataError err;}; bool is_ok;} ICU4XCodePointSetData_load_nfkd_inert_result;
ICU4XCodePointSetData_load_nfkd_inert_result ICU4XCodePointSetData_load_nfkd_inert(const ICU4XDataProvider* provider);

typedef struct ICU4XCodePointSetData_load_pattern_syntax_result {union {ICU4XCodePointSetData* ok; ICU4XDataError err;}; bool is_ok;} ICU4XCodePointSetData_load_pattern_syntax_result;
ICU4XCodePointSetData_load_pattern_syntax_result ICU4XCodePointSetData_load_pattern_syntax(const ICU4XDataProvider* provider);

typedef struct ICU4XCodePointSetData_load_pattern_white_space_result {union {ICU4XCodePointSetData* ok; ICU4XDataError err;}; bool is_ok;} ICU4XCodePointSetData_load_pattern_white_space_result;
ICU4XCodePointSetData_load_pattern_white_space_result ICU4XCodePointSetData_load_pattern_white_space(const ICU4XDataProvider* provider);

typedef struct ICU4XCodePointSetData_load_prepended_concatenation_mark_result {union {ICU4XCodePointSetData* ok; ICU4XDataError err;}; bool is_ok;} ICU4XCodePointSetData_load_prepended_concatenation_mark_result;
ICU4XCodePointSetData_load_prepended_concatenation_mark_result ICU4XCodePointSetData_load_prepended_concatenation_mark(const ICU4XDataProvider* provider);

typedef struct ICU4XCodePointSetData_load_print_result {union {ICU4XCodePointSetData* ok; ICU4XDataError err;}; bool is_ok;} ICU4XCodePointSetData_load_print_result;
ICU4XCodePointSetData_load_print_result ICU4XCodePointSetData_load_print(const ICU4XDataProvider* provider);

typedef struct ICU4XCodePointSetData_load_quotation_mark_result {union {ICU4XCodePointSetData* ok; ICU4XDataError err;}; bool is_ok;} ICU4XCodePointSetData_load_quotation_mark_result;
ICU4XCodePointSetData_load_quotation_mark_result ICU4XCodePointSetData_load_quotation_mark(const ICU4XDataProvider* provider);

typedef struct ICU4XCodePointSetData_load_radical_result {union {ICU4XCodePointSetData* ok; ICU4XDataError err;}; bool is_ok;} ICU4XCodePointSetData_load_radical_result;
ICU4XCodePointSetData_load_radical_result ICU4XCodePointSetData_load_radical(const ICU4XDataProvider* provider);

typedef struct ICU4XCodePointSetData_load_regional_indicator_result {union {ICU4XCodePointSetData* ok; ICU4XDataError err;}; bool is_ok;} ICU4XCodePointSetData_load_regional_indicator_result;
ICU4XCodePointSetData_load_regional_indicator_result ICU4XCodePointSetData_load_regional_indicator(const ICU4XDataProvider* provider);

typedef struct ICU4XCodePointSetData_load_soft_dotted_result {union {ICU4XCodePointSetData* ok; ICU4XDataError err;}; bool is_ok;} ICU4XCodePointSetData_load_soft_dotted_result;
ICU4XCodePointSetData_load_soft_dotted_result ICU4XCodePointSetData_load_soft_dotted(const ICU4XDataProvider* provider);

typedef struct ICU4XCodePointSetData_load_segment_starter_result {union {ICU4XCodePointSetData* ok; ICU4XDataError err;}; bool is_ok;} ICU4XCodePointSetData_load_segment_starter_result;
ICU4XCodePointSetData_load_segment_starter_result ICU4XCodePointSetData_load_segment_starter(const ICU4XDataProvider* provider);

typedef struct ICU4XCodePointSetData_load_case_sensitive_result {union {ICU4XCodePointSetData* ok; ICU4XDataError err;}; bool is_ok;} ICU4XCodePointSetData_load_case_sensitive_result;
ICU4XCodePointSetData_load_case_sensitive_result ICU4XCodePointSetData_load_case_sensitive(const ICU4XDataProvider* provider);

typedef struct ICU4XCodePointSetData_load_sentence_terminal_result {union {ICU4XCodePointSetData* ok; ICU4XDataError err;}; bool is_ok;} ICU4XCodePointSetData_load_sentence_terminal_result;
ICU4XCodePointSetData_load_sentence_terminal_result ICU4XCodePointSetData_load_sentence_terminal(const ICU4XDataProvider* provider);

typedef struct ICU4XCodePointSetData_load_terminal_punctuation_result {union {ICU4XCodePointSetData* ok; ICU4XDataError err;}; bool is_ok;} ICU4XCodePointSetData_load_terminal_punctuation_result;
ICU4XCodePointSetData_load_terminal_punctuation_result ICU4XCodePointSetData_load_terminal_punctuation(const ICU4XDataProvider* provider);

typedef struct ICU4XCodePointSetData_load_unified_ideograph_result {union {ICU4XCodePointSetData* ok; ICU4XDataError err;}; bool is_ok;} ICU4XCodePointSetData_load_unified_ideograph_result;
ICU4XCodePointSetData_load_unified_ideograph_result ICU4XCodePointSetData_load_unified_ideograph(const ICU4XDataProvider* provider);

typedef struct ICU4XCodePointSetData_load_uppercase_result {union {ICU4XCodePointSetData* ok; ICU4XDataError err;}; bool is_ok;} ICU4XCodePointSetData_load_uppercase_result;
ICU4XCodePointSetData_load_uppercase_result ICU4XCodePointSetData_load_uppercase(const ICU4XDataProvider* provider);

typedef struct ICU4XCodePointSetData_load_variation_selector_result {union {ICU4XCodePointSetData* ok; ICU4XDataError err;}; bool is_ok;} ICU4XCodePointSetData_load_variation_selector_result;
ICU4XCodePointSetData_load_variation_selector_result ICU4XCodePointSetData_load_variation_selector(const ICU4XDataProvider* provider);

typedef struct ICU4XCodePointSetData_load_white_space_result {union {ICU4XCodePointSetData* ok; ICU4XDataError err;}; bool is_ok;} ICU4XCodePointSetData_load_white_space_result;
ICU4XCodePointSetData_load_white_space_result ICU4XCodePointSetData_load_white_space(const ICU4XDataProvider* provider);

typedef struct ICU4XCodePointSetData_load_xdigit_result {union {ICU4XCodePointSetData* ok; ICU4XDataError err;}; bool is_ok;} ICU4XCodePointSetData_load_xdigit_result;
ICU4XCodePointSetData_load_xdigit_result ICU4XCodePointSetData_load_xdigit(const ICU4XDataProvider* provider);

typedef struct ICU4XCodePointSetData_load_xid_continue_result {union {ICU4XCodePointSetData* ok; ICU4XDataError err;}; bool is_ok;} ICU4XCodePointSetData_load_xid_continue_result;
ICU4XCodePointSetData_load_xid_continue_result ICU4XCodePointSetData_load_xid_continue(const ICU4XDataProvider* provider);

typedef struct ICU4XCodePointSetData_load_xid_start_result {union {ICU4XCodePointSetData* ok; ICU4XDataError err;}; bool is_ok;} ICU4XCodePointSetData_load_xid_start_result;
ICU4XCodePointSetData_load_xid_start_result ICU4XCodePointSetData_load_xid_start(const ICU4XDataProvider* provider);

typedef struct ICU4XCodePointSetData_load_for_ecma262_result {union {ICU4XCodePointSetData* ok; ICU4XError err;}; bool is_ok;} ICU4XCodePointSetData_load_for_ecma262_result;
ICU4XCodePointSetData_load_for_ecma262_result ICU4XCodePointSetData_load_for_ecma262(const ICU4XDataProvider* provider, const char* property_name_data, size_t property_name_len);


void ICU4XCodePointSetData_destroy(ICU4XCodePointSetData* self);





#endif // ICU4XCodePointSetData_H
