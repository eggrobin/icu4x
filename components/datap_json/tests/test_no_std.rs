extern crate icu_datap_json;

use std::borrow::Cow;
use std::prelude::v1::*;

use icu_datap_json::JsonDataProvider;
use icu_util::datap;
use icu_util::datap::DataProvider;

const DATA: &'static str = r#"{
    "decimal": {
        "symbols_v1_a": {
            "zero_digit": "0",
            "decimal_separator": ".",
            "grouping_separator": ","
        }
    }
}"#;

fn get_provider() -> JsonDataProvider {
    JsonDataProvider::from_str(DATA).unwrap()
}

fn get_response(provider: &JsonDataProvider) -> datap::Response {
    return provider
        .load(&datap::Request {
            locale: "root".to_string(),
            category: datap::Category::Decimal,
            key: datap::Key::Decimal(datap::decimal::Key::SymbolsV1),
            payload: None,
        })
        .unwrap();
}

fn check_data(decimal_data: &datap::decimal::SymbolsV1) {
    assert_eq!(
        decimal_data,
        &datap::decimal::SymbolsV1 {
            zero_digit: '0',
            decimal_separator: ".".to_string(),
            grouping_separator: ",".to_string(),
        }
    );
}

#[test]
fn test_read_string() {
    let provider = get_provider();
    let response = get_response(&provider);
    let decimal_data: &datap::decimal::SymbolsV1 = response.borrow_payload().unwrap();
    check_data(decimal_data);
}

#[test]
fn test_borrow_payload_mut() {
    let provider = get_provider();
    let mut response = get_response(&provider);
    let decimal_data: &mut datap::decimal::SymbolsV1 = response.borrow_payload_mut().unwrap();
    check_data(decimal_data);
}

#[test]
fn test_take_payload() {
    let provider = get_provider();
    let response = get_response(&provider);
    let decimal_data: Cow<datap::decimal::SymbolsV1> = response.take_payload().unwrap();
    check_data(&decimal_data);
}

#[test]
fn test_clone_payload() {
    let final_data = {
        let provider = get_provider();
        let response = get_response(&provider);
        let decimal_data: Cow<datap::decimal::SymbolsV1> = response.take_payload().unwrap();
        decimal_data.into_owned()
    };
    check_data(&final_data);
}
