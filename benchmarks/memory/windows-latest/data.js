window.BENCHMARK_DATA = {
  "lastUpdate": 1623951131153,
  "repoUrl": "https://github.com/unicode-org/icu4x",
  "entries": {
    "Heap – windows-latest": [
      {
        "commit": {
          "author": {
            "email": "gregtatum@users.noreply.github.com",
            "name": "Greg Tatum",
            "username": "gregtatum"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "71deed46c6e36a6283ed83e6af3c01cda7f642de",
          "message": "Add memory benchmarks (#446)\n\n* Add dhat as a dev dependency to instrumented components\r\n\r\n* Update .gitignore for the newly generated files\r\n\r\n/benchmarks store all of the benchmark data.\r\n\r\n* Add a tool to inject dhat instrumentation into a file\r\n\r\nThis is a partial commit of the new tool.\r\n\r\nThe following commit completes the tool by running an example with the\r\ninjected code. dhat-rs must be manually instrumented in rust, as opposed\r\nto other memory tools. The benefit with using this approach is that it\r\nworks on macOS, Windows, and Linux, while Valgrind only works on Linux.\r\n\r\nThe added code takes the strategy of parsing the Rust AST, and injecting\r\nthe proper AST for the new code. The rust analyzer project has a pattern\r\nmatching search and replace, which was a good candidate, but it wasn't\r\nwell documented, and not great for matching the first expression in the\r\nmain function.\r\n\r\n* Finish memory_bench so that it automatically runs examples\r\n\r\nThis commit completes the memory_bench tool. It can be run locally, but\r\nis intended to run in CI. The next commit will add the CI functionality.\r\n\r\n* Add a CI job to collect memory benchmarks\r\n\r\nThis uses a custom fork of the benchmarking tool to add support for\r\nndjson as a tool. This ndjson uses the same format as the internal json\r\nstructure of the benchmarking tool. This allows for fully customizing\r\nthe output of the data, and what information is collected.\r\n\r\n* Create tools directory\r\n\r\n* Add macro support for the memory instrumentation\r\n\r\n* Remove the code injection, and update the benchmark tool\r\n\r\n* Update the workflows\r\n\r\n* Update the Cargo.lock\r\n\r\n* Make the DateTime bags more explicit (#429)\r\n\r\n* Make the DateTime bags more explicit\r\n\r\nI found myself confused on the usage of the bags and the difference\r\nbetween them and the options provided to the date time. I felt that it\r\nwas better to be explicit in the examples, rather than giving more\r\nterse, but potentially misleading examples.\r\n\r\n* Address feedback on adding into() examples\r\n\r\n* Remove use icu_benchmark_macros statements\r\n\r\n* Add mention of the firefox profiler",
          "timestamp": "2021-02-01T16:12:33-06:00",
          "tree_id": "a17d3bec25466f93a0a646280468b702473aa3c1",
          "url": "https://github.com/unicode-org/icu4x/commit/71deed46c6e36a6283ed83e6af3c01cda7f642de"
        },
        "date": 1612217899288,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 16702,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 9568,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "manishsmail@gmail.com",
            "name": "Manish Goregaokar",
            "username": "Manishearth"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e9416c3fa5100f11a621f9c8bd498a7dd3a986db",
          "message": "Fix clippy warnings (#473)",
          "timestamp": "2021-02-01T22:08:40-08:00",
          "tree_id": "8940f02ba87a19483c0027b6a5904a79a40c7a8d",
          "url": "https://github.com/unicode-org/icu4x/commit/e9416c3fa5100f11a621f9c8bd498a7dd3a986db"
        },
        "date": 1612246445944,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 16702,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 9568,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "manishsmail@gmail.com",
            "name": "Manish Goregaokar",
            "username": "Manishearth"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ae89da479dfbbcfc73fbaa977cd3f4ecfd0e4fac",
          "message": "Allow some clippy lints (#474)",
          "timestamp": "2021-02-02T17:40:53-08:00",
          "tree_id": "b24a02430c995fda5f39e5982049523f7037643c",
          "url": "https://github.com/unicode-org/icu4x/commit/ae89da479dfbbcfc73fbaa977cd3f4ecfd0e4fac"
        },
        "date": 1612316859820,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 16702,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 9568,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gregtatum@users.noreply.github.com",
            "name": "Greg Tatum",
            "username": "gregtatum"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "85c3a5a933a3a5b1dd2499f916511b80164a8fc1",
          "message": "Stub out a components test, and use serde serialization for DateTime options (#461)\n\n* Stub out tests and serialization for components::Bag\r\n\r\n* Add serialization for the style::Bag\r\n\r\n* Fix preference bag attribute to use the conditional feature\r\n\r\n* Fix the attributes to properly treat serde as optional\r\n\r\n* Address feedback on freely deriving certain traits",
          "timestamp": "2021-02-08T11:59:06-06:00",
          "tree_id": "aa4dfdf479054ceece40e1ef09ddb1b5137c46a7",
          "url": "https://github.com/unicode-org/icu4x/commit/85c3a5a933a3a5b1dd2499f916511b80164a8fc1"
        },
        "date": 1612807499359,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 16702,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 9568,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gregtatum@users.noreply.github.com",
            "name": "Greg Tatum",
            "username": "gregtatum"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "01d85cc1bd793aecbd189a1826d22ed3ddaba771",
          "message": "Fix deploying memory benchmarks to GitHub pages (#472)",
          "timestamp": "2021-02-08T13:44:52-06:00",
          "tree_id": "2c56364a53a4a7ae440c17ab874dea143b804d24",
          "url": "https://github.com/unicode-org/icu4x/commit/01d85cc1bd793aecbd189a1826d22ed3ddaba771"
        },
        "date": 1612814035795,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 16702,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 9568,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sffc@google.com",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ad895a860fc83a7617a0ab604d19ac36d1380915",
          "message": "Change DateTimeFormat constructor to take Locale instead of LangID (#475)",
          "timestamp": "2021-02-08T17:19:38-06:00",
          "tree_id": "76c5cf0b9b2525cd88649614be13f54c1b8c849c",
          "url": "https://github.com/unicode-org/icu4x/commit/ad895a860fc83a7617a0ab604d19ac36d1380915"
        },
        "date": 1612826889390,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 16702,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 9568,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dminor@mozilla.com",
            "name": "Dan Minor",
            "username": "dminor"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "efba26f9e066c514a2f1bfce9a8020e7e0a2b653",
          "message": "Optimize likely subtags (#469)\n\nThis breaks up the current monolithic likely subtags data into multiple tables\r\nbased upon the subtags which are used for searching by the maximize algorithm.\r\nBecause of this change, searching can be done using references to the subtags\r\nof the input Locale rather than creating a copy of it.\r\n\r\nThe result of a search always shares data with the search key. This change\r\ntakes advantage of this fact to only store the delta between the search key\r\nand the result.",
          "timestamp": "2021-02-09T14:33:46-05:00",
          "tree_id": "31b1a7acbb99eaaa9981f887f97fca38ff479ed9",
          "url": "https://github.com/unicode-org/icu4x/commit/efba26f9e066c514a2f1bfce9a8020e7e0a2b653"
        },
        "date": 1612899765186,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 16702,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 9568,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sffc@google.com",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "324d9edd2def40e0d000646748172cce370d92db",
          "message": "Re-write DateTimeType trait with DateTimeInput (#445)",
          "timestamp": "2021-02-12T11:40:51-06:00",
          "tree_id": "5882c86bb80a06b39e3b924ddded92a7d6d33b64",
          "url": "https://github.com/unicode-org/icu4x/commit/324d9edd2def40e0d000646748172cce370d92db"
        },
        "date": 1613152175144,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 16702,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 9568,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sffc@google.com",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3be597cdf89432e493e7777bb4dec54854a47f97",
          "message": "Update string type recommendations in style_guide.md (#490)",
          "timestamp": "2021-02-12T14:07:12-06:00",
          "tree_id": "3516e2db54f25c315b8e63f51df7cb8fc3f4de38",
          "url": "https://github.com/unicode-org/icu4x/commit/3be597cdf89432e493e7777bb4dec54854a47f97"
        },
        "date": 1613160977921,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 16702,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 9568,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "manishsmail@gmail.com",
            "name": "Manish Goregaokar",
            "username": "Manishearth"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fdd3a0b4773388f2df8cdc3c6cb5bf4230ac79cf",
          "message": "Add litemap crate (TupleVecMap) (#496)\n\n* Add terrain crate\r\n\r\n* Add doctests\r\n\r\n* Add license header, Cargo manifest keys\r\n\r\n* More review fixes\r\n\r\n* Run rustfmt\r\n\r\n* Add simple readme\r\n\r\n* Rename to litemap\r\n\r\n* VecMap -> LiteMap\r\n\r\n* Add K: Borrow<Q>",
          "timestamp": "2021-02-22T16:59:24-08:00",
          "tree_id": "31fa9eb6d25b32050bf2d6b629f45179818d8261",
          "url": "https://github.com/unicode-org/icu4x/commit/fdd3a0b4773388f2df8cdc3c6cb5bf4230ac79cf"
        },
        "date": 1614042510050,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 16702,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 9568,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zibi@braniecki.net",
            "name": "Zibi Braniecki",
            "username": "zbraniecki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d1e746357f79f9fcf2a63e50db15f365ab9b063b",
          "message": "Switch locid::subtags::Language to be TinyStr4 (#506)\n\n* Switch locid::subtags::Language to be TinyStr4\r\n\r\n* Apply reviewers feedback\r\n\r\n* Fix cargo fmt linter error",
          "timestamp": "2021-02-25T15:34:57-08:00",
          "tree_id": "c40fb8c842f2cfe18053c1f7f1773a77d88017f1",
          "url": "https://github.com/unicode-org/icu4x/commit/d1e746357f79f9fcf2a63e50db15f365ab9b063b"
        },
        "date": 1614296593916,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 16702,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 9568,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sffc@google.com",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "df7b6edf44c3360d3ad4127c12ed03c5f039ff6b",
          "message": "Update data_pipeline.md to discuss caching (#497)",
          "timestamp": "2021-02-27T04:39:28-06:00",
          "tree_id": "4d625493d15543672a3f6413db21e02a8d3e0c6e",
          "url": "https://github.com/unicode-org/icu4x/commit/df7b6edf44c3360d3ad4127c12ed03c5f039ff6b"
        },
        "date": 1614422896018,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 16702,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 9568,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "manishsmail@gmail.com",
            "name": "Manish Goregaokar",
            "username": "Manishearth"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3f9e74b767a215c490007361b23f9c45cf2d1b82",
          "message": "Add serde to litemap (#514)",
          "timestamp": "2021-03-01T16:24:22-08:00",
          "tree_id": "dc24eebcd24cdd1bc8fe1b680e0d02c7d509ce7a",
          "url": "https://github.com/unicode-org/icu4x/commit/3f9e74b767a215c490007361b23f9c45cf2d1b82"
        },
        "date": 1614645257608,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 16702,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 9568,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sffc@google.com",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c308b40dbdb5018dd6c3ffec429e2dd002bb4066",
          "message": "Add CLDR JSON data to testdata and remove from provider_cldr (#513)",
          "timestamp": "2021-03-01T21:38:11-06:00",
          "tree_id": "ade81acb58382bed3e53eeaf91f1eb688b93feb7",
          "url": "https://github.com/unicode-org/icu4x/commit/c308b40dbdb5018dd6c3ffec429e2dd002bb4066"
        },
        "date": 1614656818036,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 16702,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 9568,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kpozin@google.com",
            "name": "Konstantin Pozin",
            "username": "kpozin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "64c143f402a3c2956f4aa172e903e1e159598b6d",
          "message": "Fix date pattern parsing for non-ASCII literals (#503) (#515)\n\nFixes #503",
          "timestamp": "2021-03-01T22:17:01-08:00",
          "tree_id": "b171fbf1030491ae586af21032d1c76eaffe293b",
          "url": "https://github.com/unicode-org/icu4x/commit/64c143f402a3c2956f4aa172e903e1e159598b6d"
        },
        "date": 1614666349285,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 16702,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 9568,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dminor@mozilla.com",
            "name": "Dan Minor",
            "username": "dminor"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b15c0b36901095406a67e3620a3d1d0e294b7692",
          "message": "Make LanguageIdentifier a field of Locale (#492)\n\nMake LanguageIdentifier a field of Locale.\r\n\r\nFixes #447",
          "timestamp": "2021-03-02T07:03:43-05:00",
          "tree_id": "8c6d75a7dbcdd0015e8419882389c04863145644",
          "url": "https://github.com/unicode-org/icu4x/commit/b15c0b36901095406a67e3620a3d1d0e294b7692"
        },
        "date": 1614687132974,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 16702,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 9568,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "manishsmail@gmail.com",
            "name": "Manish Goregaokar",
            "username": "Manishearth"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "40c5dd3205c8fa4beee91a9ac47b18f628a7e550",
          "message": "Update tinytemplate to fix nightly breakage (#529)",
          "timestamp": "2021-03-04T09:33:16-08:00",
          "tree_id": "a408baa9d9867ae1aafe7557813ceaa087254972",
          "url": "https://github.com/unicode-org/icu4x/commit/40c5dd3205c8fa4beee91a9ac47b18f628a7e550"
        },
        "date": 1614879755574,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 16702,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 9568,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "manishsmail@gmail.com",
            "name": "Manish Goregaokar",
            "username": "Manishearth"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9b0fa09152aea4de2f8a37628d0bebb9ebb50f3d",
          "message": "litemap: Serialize to maps, add tests (#516)",
          "timestamp": "2021-03-04T12:08:48-06:00",
          "tree_id": "fac0d611c10d52bfd9390ec23ca617338358fd7e",
          "url": "https://github.com/unicode-org/icu4x/commit/9b0fa09152aea4de2f8a37628d0bebb9ebb50f3d"
        },
        "date": 1614881934153,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 16702,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 9568,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sffc@google.com",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2d622075ee5b17ce15f22c9ef2388ea4df930710",
          "message": "Include data in icu_testdata crate (#527)",
          "timestamp": "2021-03-04T12:22:52-06:00",
          "tree_id": "c613b9f025246813565511cb22eaf08afc4a8bc6",
          "url": "https://github.com/unicode-org/icu4x/commit/2d622075ee5b17ce15f22c9ef2388ea4df930710"
        },
        "date": 1614882702539,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 16702,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 9568,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zibi@braniecki.net",
            "name": "Zibi Braniecki",
            "username": "zbraniecki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "68d6b2bdcfbf36c7d25848a71009a2159ea3d780",
          "message": "Separate Patterns and Symbols trait methods in DateTimeFormat. (#517)",
          "timestamp": "2021-03-04T10:25:02-08:00",
          "tree_id": "6b5351a233b4d758cc95b5cd352a9bca13818898",
          "url": "https://github.com/unicode-org/icu4x/commit/68d6b2bdcfbf36c7d25848a71009a2159ea3d780"
        },
        "date": 1614882892848,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 16702,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 9568,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gregtatum@users.noreply.github.com",
            "name": "Greg Tatum",
            "username": "gregtatum"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ba3ea1deb32bbd6c5d7177d68db4b6f51531baad",
          "message": "Rename master branch to main (#520)",
          "timestamp": "2021-03-04T13:19:38-06:00",
          "tree_id": "07c2754e5e1c5c81c3c8fb1545c77baa5c4d115a",
          "url": "https://github.com/unicode-org/icu4x/commit/ba3ea1deb32bbd6c5d7177d68db4b6f51531baad"
        },
        "date": 1614886123324,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 16702,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 9568,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gregtatum@users.noreply.github.com",
            "name": "Greg Tatum",
            "username": "gregtatum"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2179f6fee8764aec332b2d251514ac30970ec021",
          "message": "Add a cargo make command and a CI check for bincode (#521)",
          "timestamp": "2021-03-04T14:42:19-06:00",
          "tree_id": "e3ca34ef3a4d4f167fe1688db94643a4d44d8ed7",
          "url": "https://github.com/unicode-org/icu4x/commit/2179f6fee8764aec332b2d251514ac30970ec021"
        },
        "date": 1614891075238,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 16702,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 9568,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zibi@braniecki.net",
            "name": "Zibi Braniecki",
            "username": "zbraniecki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2d6664a376df209f86d4af47f0a686b91b8172e0",
          "message": "Move DTF to only store DateSymbols and a single pattern. (#518)",
          "timestamp": "2021-03-05T07:40:03-08:00",
          "tree_id": "c6e88347fda54bd0e73aba4c94510803800e4025",
          "url": "https://github.com/unicode-org/icu4x/commit/2d6664a376df209f86d4af47f0a686b91b8172e0"
        },
        "date": 1614959373318,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 16702,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 9568,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sffc@google.com",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c5104b3ab7cce22e11a71f9797d1dbaff9b40f2c",
          "message": "Small quality-of-life fixes (#543)",
          "timestamp": "2021-03-12T15:01:43-06:00",
          "tree_id": "01203783bcee98b2dc8dd6e86af26e01f3a2da42",
          "url": "https://github.com/unicode-org/icu4x/commit/c5104b3ab7cce22e11a71f9797d1dbaff9b40f2c"
        },
        "date": 1615583432624,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 16702,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 9568,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gregtatum@users.noreply.github.com",
            "name": "Greg Tatum",
            "username": "gregtatum"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a4a8e4a68a1e9c3b3b0517068bd46707f410bf2e",
          "message": "Pin the nightly version in CI (#526)",
          "timestamp": "2021-03-12T15:19:41-06:00",
          "tree_id": "d6e37aaaa114fcc11a47423215a3457177fa66bb",
          "url": "https://github.com/unicode-org/icu4x/commit/a4a8e4a68a1e9c3b3b0517068bd46707f410bf2e"
        },
        "date": 1615584501936,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 16702,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 9568,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "elango@google.com",
            "name": "Elango",
            "username": "echeran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ed9db541404a2cc36c0c1f813f0b365a136ac085",
          "message": "Update testing instructions on CI doc (#482)\n\n* Update testing instructions on CI doc\r\n\r\n* Respond to PR feedback\r\n\r\n* Add section on caching to help ICU",
          "timestamp": "2021-03-15T10:23:30-07:00",
          "tree_id": "8641e96858fdad8258a651439f28f8a30b188fa4",
          "url": "https://github.com/unicode-org/icu4x/commit/ed9db541404a2cc36c0c1f813f0b365a136ac085"
        },
        "date": 1615829550812,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 16702,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 9568,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sffc@google.com",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "43360de1e53004d9a56d7f29a2573de03dd145fc",
          "message": "Update Rust nightly version in CI (#554)\n\nUpdate to nightly-2021-03-15",
          "timestamp": "2021-03-16T12:19:38-05:00",
          "tree_id": "2dd2ddda3eb75c73dad705596b764977c5352b9c",
          "url": "https://github.com/unicode-org/icu4x/commit/43360de1e53004d9a56d7f29a2573de03dd145fc"
        },
        "date": 1615915749221,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 16702,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 9568,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "58569820+nordzilla@users.noreply.github.com",
            "name": "Erik Nordin",
            "username": "nordzilla"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b6ed6f058a0c3b6566eac78a58f47303bf48830f",
          "message": "Implement FromIterator for LiteMap (#544)\n\n* Implement FromIterator for LiteMap\r\n\r\n* Fix ordering of size-hint match to be more intuitive\r\n\r\n* Update comments\r\n\r\n* Clean up function names\r\n\r\n* Update comments\r\n\r\n* Rename extend_from_sorted to try_extend_from_sorted\r\n\r\n- This better self-documents its fallibility\r\n\r\n* Make new try_extend_from_sorted() match try_append()\r\n\r\n- Rather than returning a result with Self, the function now\r\n  returns `None` on success and the reamaining elements on failure.\r\n- Make the extend functions take self by mut reference.\r\n- Make the extend functions public.\r\n- Add documentation tests.\r\n\r\n* Update documentation tests\r\n\r\n* Update try_append() to fail on equal keys\r\n\r\n* Add #[must_use] to try_append and try_extend_from_sorted\r\n\r\n* Run cargo fmt\r\n\r\n* Update try_append comment\r\n\r\n* Remove extend_from methods in favor using try_append directly\r\n\r\n* Add try_append duplicate key assertion to example\r\n\r\n* Add test for FromIterator\r\n\r\n* Remove redundant \"test\" from function name\r\n\r\n* Fix typo in test\r\n\r\n* Make try_append doc test more explicit",
          "timestamp": "2021-03-16T11:00:03-07:00",
          "tree_id": "f3444d407a7ff607c187d15f4aa9a6d452dd1045",
          "url": "https://github.com/unicode-org/icu4x/commit/b6ed6f058a0c3b6566eac78a58f47303bf48830f"
        },
        "date": 1615918151061,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 16702,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 9568,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gregtatum@users.noreply.github.com",
            "name": "Greg Tatum",
            "username": "gregtatum"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4dae1fa1ce36e35ea48d41343890a311dfb7ee49",
          "message": "Re-organize the benchmark data (#546)",
          "timestamp": "2021-03-18T15:49:59-05:00",
          "tree_id": "74d02b07f4f7c8e5a8057a5200b61f4230ef4969",
          "url": "https://github.com/unicode-org/icu4x/commit/4dae1fa1ce36e35ea48d41343890a311dfb7ee49"
        },
        "date": 1616101150792,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 16702,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 9568,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "manishsmail@gmail.com",
            "name": "Manish Goregaokar",
            "username": "Manishearth"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "91dab1ccae82a03a1c49116160dac11850fd913e",
          "message": "Add basic C API for PluralRules (#552)\n\n* Add rust-side C API crate, with code for plural rules\r\n\r\n* Add headers\r\n\r\n* Add ctest\r\n\r\n* Make some things const\r\n\r\n* Rename ICU4XErasedDataProvider -> ICU4XDataProvider\r\n\r\n* Replace into with from\r\n\r\n* Add comments and docs\r\n\r\n* rename icu4x_erased_data_provider_destroy -> icu4x_data_provider_destroy\r\n\r\n* fmt\r\n\r\n* Add cargo-make target for ctest\r\n\r\n* Move pluralrules ctest to examples\r\n\r\n* goodby #pragma once :-'(",
          "timestamp": "2021-03-19T11:04:50-07:00",
          "tree_id": "f24bde84b4d5e616ff9539ed808820a7082a9fd0",
          "url": "https://github.com/unicode-org/icu4x/commit/91dab1ccae82a03a1c49116160dac11850fd913e"
        },
        "date": 1616177588009,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 16702,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 9568,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sffc@google.com",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "43ad4cd4a13fea1878dc267ac18d5c681bc9fa8e",
          "message": "Split type erasure logic from erased_serde logic in ErasedDataProvider (#564)",
          "timestamp": "2021-03-23T18:34:30-05:00",
          "tree_id": "1ffcb907aaa7c75722c21a5e3b17fe792ca72603",
          "url": "https://github.com/unicode-org/icu4x/commit/43ad4cd4a13fea1878dc267ac18d5c681bc9fa8e"
        },
        "date": 1616542965135,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 16702,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 9568,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "elango@google.com",
            "name": "Elango",
            "username": "echeran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7c82cb379cc5662e2f63a617d77d37dca631a0d5",
          "message": "Check all lines of license header (#551)",
          "timestamp": "2021-03-23T22:32:37-07:00",
          "tree_id": "4c8c7b9e06646502945f11ae2d531e983e416c5d",
          "url": "https://github.com/unicode-org/icu4x/commit/7c82cb379cc5662e2f63a617d77d37dca631a0d5"
        },
        "date": 1616564478786,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 16702,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 9568,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "elango@google.com",
            "name": "Elango",
            "username": "echeran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "30a3909542955e156a11a979f57d8c38c1dbeac5",
          "message": "Add PPUCD enumerated property parsing (#448)",
          "timestamp": "2021-03-24T19:03:27-07:00",
          "tree_id": "2bf1b3ea632a1a61377727188428b56fd2094669",
          "url": "https://github.com/unicode-org/icu4x/commit/30a3909542955e156a11a979f57d8c38c1dbeac5"
        },
        "date": 1616638334584,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 16702,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 9568,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gregtatum@users.noreply.github.com",
            "name": "Greg Tatum",
            "username": "gregtatum"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "19642c3500fe5ca50c7acbba82d33fc572ec0513",
          "message": "Add support for the Gregorian Calendar availableFormats  (#480)",
          "timestamp": "2021-03-29T09:34:25-05:00",
          "tree_id": "79f7b132ee31b7181d044f6cb7a1e84069914e10",
          "url": "https://github.com/unicode-org/icu4x/commit/19642c3500fe5ca50c7acbba82d33fc572ec0513"
        },
        "date": 1617029036720,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 28185,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 17333,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "filmil@gmail.com",
            "name": "Filip Filmar",
            "username": "filmil"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5f723c3ece94dec75f0c39166f34ff51c8d896b0",
          "message": "CLDR \"Hunkspace\" proposal (#186)\n\n* Adds the \"CLDR hunkspace\" proposal\r\n\r\nThe CLDR hunkspace proposal gives one possible way to address an\r\narbitrary localized resource in the form of a Request, which can be\r\nencoded either as a plain old data object, or a JSON object, or an URI.\r\n\r\nExample URIs are given for some potentially interesting use cases.\r\n\r\nCloses #32\r\n\r\n* Handled the code review comments\r\n\r\n* Fixing a few more review comments.\r\n\r\n* Fixed headings and hyperlinks\r\n\r\n* Fixed more review comments\r\n\r\n* Added a link for Mozilla L10N\r\n\r\n* fixup: added zibi's mozilla clarification",
          "timestamp": "2021-03-29T10:51:52-07:00",
          "tree_id": "6247d6da65d6117da0c1da4e3b75346d20e23bce",
          "url": "https://github.com/unicode-org/icu4x/commit/5f723c3ece94dec75f0c39166f34ff51c8d896b0"
        },
        "date": 1617040912107,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 28185,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 17333,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sffc@google.com",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1572a3a44792d820e3352d360696760da4300dfa",
          "message": "Add FixedDecimalFormat data provider plumbing (#541)",
          "timestamp": "2021-03-30T23:58:45-05:00",
          "tree_id": "d5c2594d279e28f6f990694b1c9d322aa5f4bedb",
          "url": "https://github.com/unicode-org/icu4x/commit/1572a3a44792d820e3352d360696760da4300dfa"
        },
        "date": 1617167314377,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 28185,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 17333,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gregtatum@users.noreply.github.com",
            "name": "Greg Tatum",
            "username": "gregtatum"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6991943a7378dadc5284d2ff487edc09f553a8ce",
          "message": "Simplify DeserializeSkeletonBincode with one less branch (#582)",
          "timestamp": "2021-03-31T15:45:52-05:00",
          "tree_id": "84ffa0d705f15e5fee280ffd3dfebc9239017f0c",
          "url": "https://github.com/unicode-org/icu4x/commit/6991943a7378dadc5284d2ff487edc09f553a8ce"
        },
        "date": 1617224088988,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 28185,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 17333,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "58569820+nordzilla@users.noreply.github.com",
            "name": "Erik Nordin",
            "username": "nordzilla"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1941b7cccae9b39913f097a39b8ea6e4b7b1d790",
          "message": "Implement ICU4X Timezones Data Provider (#512)\n\n* Make new try_extend_from_sorted() match try_append()\r\n\r\n- Rather than returning a result with Self, the function now\r\n  returns `None` on success and the reamaining elements on failure.\r\n- Make the extend functions take self by mut reference.\r\n- Make the extend functions public.\r\n- Add documentation tests.\r\n\r\n* Update documentation tests\r\n\r\n* Run cargo fmt\r\n\r\n* Add data provider for timezones\r\n\r\n* Add timezones test data\r\n\r\n* Remove old and unused file\r\n\r\n* Fix failing test due to private function generated by macro\r\n\r\n* Modularize TimeZonesProvider\r\n\r\nRather than having a single monolithic key, the TimeZonesProvider\r\nis now separated into five separate keys:\r\n\r\n- timezone formats\r\n- timezone names long\r\n- timezone names short\r\n- timezone name variants long\r\n- timezone name variants short\r\n\r\n* Re-generate test data with modular design\r\n\r\n* Redesign modular zones to match UTS-35\r\n\r\n* Remove 'static lifetimes from V1 structs\r\n\r\n* Update test to use generated test data\r\n\r\n* Run clippy\r\n\r\n* Use LiteMap instead of BTreeMap on ICU4X Side\r\n\r\n* Use the full CLDR Timezone IDs as keys, for now\r\n\r\nRegenerates the exemplar city data using the full time zone IDs as keys.\r\nWe will eventually change this to use BCP-47 identifiers.\r\n\r\n* Add license header to gregory.rs\r\n\r\n* Add license header to timezones.rs\r\n\r\n* Respond to review feedback\r\n\r\n* Fix license header in gregory.rs\r\n\r\n* Fix license haders in relevant files\r\n\r\n* Fix overlooked line from rebase\r\n\r\n- I missed one line that is causing a build error. This fixes it.\r\n\r\n* Respond to review feedback form zbraniecki",
          "timestamp": "2021-04-01T12:55:04-07:00",
          "tree_id": "ab0ea781bf21d6bb2b7af15151e27797e65ba2e2",
          "url": "https://github.com/unicode-org/icu4x/commit/1941b7cccae9b39913f097a39b8ea6e4b7b1d790"
        },
        "date": 1617307497126,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 28185,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 17333,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sffc@google.com",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "03aef69d795d104f15b46371f063a943b77b7942",
          "message": "Implementing FixedDecimalFormat (#590)",
          "timestamp": "2021-04-01T18:32:20-05:00",
          "tree_id": "7797c641efb1ff4cc2a65e6c2d2f55c8c357cc98",
          "url": "https://github.com/unicode-org/icu4x/commit/03aef69d795d104f15b46371f063a943b77b7942"
        },
        "date": 1617320539678,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 28185,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 17333,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "58569820+nordzilla@users.noreply.github.com",
            "name": "Erik Nordin",
            "username": "nordzilla"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f55040c082e977103dcc22784bd5a2d414cf2d9d",
          "message": "Fix some broken links due to the switch from master -> main (#604)",
          "timestamp": "2021-04-02T12:57:08-07:00",
          "tree_id": "75c5d3e62b85fd1be2d2c7f0e35c589a03ae4875",
          "url": "https://github.com/unicode-org/icu4x/commit/f55040c082e977103dcc22784bd5a2d414cf2d9d"
        },
        "date": 1617393965371,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 28185,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 17333,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sffc@google.com",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2d61420f6ff087594ab3e95c288d52779f5b5628",
          "message": "Update triaging.md",
          "timestamp": "2021-04-03T02:06:45-05:00",
          "tree_id": "ca916c41634d05f464a56b78f6de04de19c6de7d",
          "url": "https://github.com/unicode-org/icu4x/commit/2d61420f6ff087594ab3e95c288d52779f5b5628"
        },
        "date": 1617434200927,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 28185,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 17333,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sffc@google.com",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ad53955ad557a1cd2c4e991f5df2b8ffe7bc15c5",
          "message": "Update triaging.md",
          "timestamp": "2021-04-03T02:09:16-05:00",
          "tree_id": "a0a0cc572905030980fc3e7f9d5a8cc83c1d2511",
          "url": "https://github.com/unicode-org/icu4x/commit/ad53955ad557a1cd2c4e991f5df2b8ffe7bc15c5"
        },
        "date": 1617434362217,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 28185,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 17333,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sffc@google.com",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2c75da6e082dbe16d9ce9a5c513d30d9f92991e1",
          "message": "Update triaging.md",
          "timestamp": "2021-04-03T02:11:59-05:00",
          "tree_id": "8f9aa83edaebe1a7603dff113c09133c2eeca8d5",
          "url": "https://github.com/unicode-org/icu4x/commit/2c75da6e082dbe16d9ce9a5c513d30d9f92991e1"
        },
        "date": 1617434510722,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 28185,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 17333,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sffc@google.com",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "41419a9b5b08f1408d6b72b08d0797de49ca5e3b",
          "message": "Remove 'static requirement from CLDR transformers (#610)",
          "timestamp": "2021-04-04T15:36:59-07:00",
          "tree_id": "e86a91d176aa4a16fe82d8919bc5b2982a9972ba",
          "url": "https://github.com/unicode-org/icu4x/commit/41419a9b5b08f1408d6b72b08d0797de49ca5e3b"
        },
        "date": 1617576372082,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 28185,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 17333,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nciric@gmail.com",
            "name": "Nebojša Ćirić",
            "username": "nciric"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a3551b1eeaf742ec18555096c8b56879296b9ee3",
          "message": "Rename style -> length for DateTimeFormat everywhere (#602)\n\n* Rename style -> length for DateTimeFormat everywhere\r\n\r\n* Change the name of the field to adhere to Rust rules.\r\n\r\n* lint: sort lines fixed",
          "timestamp": "2021-04-05T11:54:33-07:00",
          "tree_id": "b03964591881bb48d9daeaf87777baf1951c589b",
          "url": "https://github.com/unicode-org/icu4x/commit/a3551b1eeaf742ec18555096c8b56879296b9ee3"
        },
        "date": 1617649409746,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 28185,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 17333,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sffc@google.com",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ee6501eca99d1f2fa0a5a920bc7c6ea3da972544",
          "message": "Add examples to LiteMap and improve WASM build tooling (#609)",
          "timestamp": "2021-04-05T14:27:04-05:00",
          "tree_id": "caddd5dcd160e1cb5c0147b32683c1df2e8c82a3",
          "url": "https://github.com/unicode-org/icu4x/commit/ee6501eca99d1f2fa0a5a920bc7c6ea3da972544"
        },
        "date": 1617651441818,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 28185,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 17333,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "manishsmail@gmail.com",
            "name": "Manish Goregaokar",
            "username": "Manishearth"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "653c3ec23b76715caf9e50bc248828fac2049ee2",
          "message": "Remove serialize_none and usages of skip_serializing_if (#613)\n\n* Remove serialize_none\r\n\r\n* Remove bincode skip_feature_sets\r\n\r\n* Regenerate testdata",
          "timestamp": "2021-04-05T15:44:12-07:00",
          "tree_id": "191c2a55d460c5aa4127c58662c7ad782d73bb2f",
          "url": "https://github.com/unicode-org/icu4x/commit/653c3ec23b76715caf9e50bc248828fac2049ee2"
        },
        "date": 1617663260354,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 28185,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 17333,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "manishsmail@gmail.com",
            "name": "Manish Goregaokar",
            "username": "Manishearth"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "03be3a1f8fc383d9cb4723ab62bae367e645c32f",
          "message": "Add lower-level data API to PluralRules (#575)\n\n* Add lower-level data API to PluralRules\r\n\r\n* Switch to using PluralRulesV1\r\n\r\n* Move code to resolver module; turn into free function",
          "timestamp": "2021-04-07T19:10:56-07:00",
          "tree_id": "b8b3ae11ef1176be9813f7712b8be164ec224a6b",
          "url": "https://github.com/unicode-org/icu4x/commit/03be3a1f8fc383d9cb4723ab62bae367e645c32f"
        },
        "date": 1617848462060,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 28185,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 17333,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gregtatum@users.noreply.github.com",
            "name": "Greg Tatum",
            "username": "gregtatum"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6db4862fc54951249c6897c4fde64eb597b17cf7",
          "message": "Components bag support with only skeleton matching (#587)",
          "timestamp": "2021-04-08T16:55:06-05:00",
          "tree_id": "86a16a67540721e83c3dfe9af01d06cc39f0378a",
          "url": "https://github.com/unicode-org/icu4x/commit/6db4862fc54951249c6897c4fde64eb597b17cf7"
        },
        "date": 1617919535163,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 28185,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 17333,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "58569820+nordzilla@users.noreply.github.com",
            "name": "Erik Nordin",
            "username": "nordzilla"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d75f52dd9ae556097d1c7c44a5e642a9cbce859e",
          "message": "Pass FieldLength by value in Field trait (#625)\n\nFieldLength is a simple numeric enum, and a copy type.\r\nWe should utilize that quality and pass it by value\r\nunless a reference is explicitly needed.",
          "timestamp": "2021-04-08T21:45:22-07:00",
          "tree_id": "0234581a2b8db3e2dd400ed8c87a48d6f8d8b5c6",
          "url": "https://github.com/unicode-org/icu4x/commit/d75f52dd9ae556097d1c7c44a5e642a9cbce859e"
        },
        "date": 1617944062545,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 28185,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 17333,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "elango@google.com",
            "name": "Elango",
            "username": "echeran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "39275619a07e8d1662ffd5f3802ab43ad0c50702",
          "message": "Design doc of code point tries for properties (#559)",
          "timestamp": "2021-04-09T14:00:04-07:00",
          "tree_id": "a4fac7a33af7fc071002ee05a9cbc8baa502d7cc",
          "url": "https://github.com/unicode-org/icu4x/commit/39275619a07e8d1662ffd5f3802ab43ad0c50702"
        },
        "date": 1618002607464,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 28185,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 17333,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "elango@google.com",
            "name": "Elango",
            "username": "echeran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ca7cd105377e9ae6ee4f2649a9867e13075125d6",
          "message": "Rename .iter() to .iter_chars() for UnicodeSet (#626)",
          "timestamp": "2021-04-09T14:01:04-07:00",
          "tree_id": "ac173cfac5564f177ec96e224ea05049976ef342",
          "url": "https://github.com/unicode-org/icu4x/commit/ca7cd105377e9ae6ee4f2649a9867e13075125d6"
        },
        "date": 1618002670748,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 28185,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 17333,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gregtatum@users.noreply.github.com",
            "name": "Greg Tatum",
            "username": "gregtatum"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5079646bf049b3fd9a9ca75aa7ae913dbac173dc",
          "message": "Pin the stable version of Rust with rust-toolchain (#618)",
          "timestamp": "2021-04-12T10:36:45-05:00",
          "tree_id": "84e47ae208c5c912eb2edf4013993ea3d9c2db0c",
          "url": "https://github.com/unicode-org/icu4x/commit/5079646bf049b3fd9a9ca75aa7ae913dbac173dc"
        },
        "date": 1618242398912,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 28185,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 17333,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "manishsmail@gmail.com",
            "name": "Manish Goregaokar",
            "username": "Manishearth"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6d861fc03ba78bfcf9da37136ef4685d590857e9",
          "message": "Make all crates use the same `include` keys (#635)\n\n* Give all crates identical include keys\r\n\r\n* Add exception for testdata",
          "timestamp": "2021-04-12T16:22:39-07:00",
          "tree_id": "31ce6a4ce292aecaa1174be265edd7e6e0173f01",
          "url": "https://github.com/unicode-org/icu4x/commit/6d861fc03ba78bfcf9da37136ef4685d590857e9"
        },
        "date": 1618270412388,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 28185,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 17333,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "58569820+nordzilla@users.noreply.github.com",
            "name": "Erik Nordin",
            "username": "nordzilla"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fbecd88af0c31538e290889c919bdc29620bc402",
          "message": "Implement Time Zone Format (#598)\n\n* Implement Time Zone Formatting\r\n\r\n- Add time-zone input functionality.\r\n- Add zoned datetime functionality.\r\n- Add zoned datetime format functionality.\r\n- Add fixtures tests for zoned datetime format.\r\n- Add benchmarks for zoned datetime format.\r\n- Update examples to use zoned datetime format.\r\n\r\n* Clean Up Localized GMT Offset Formatting\r\n\r\n- Separate the positive/negative offsets in the data provider.\r\n- Use the localized hour formats to produce GMT offset formats.\r\n\r\n* Use CLDR hour-format unconditionally\r\n\r\nThe UTS-35 spec and the CLDR-json formatting have a conflict\r\naround localized GMT formats with regard to zero-padding.\r\n\r\nRead more about our conflict-resolution decisions here:\r\nhttps://docs.google.com/document/d/16GAqaDRS6hzL8jNYjus5MglSevGBflISM-BrIS7bd4A/edit?usp=sharing\r\n\r\n* Add Test For Long/Short Specific Non-Location Formats\r\n\r\n* Refactor how time-zone resource keys are loaded into formatter\r\n\r\n- Constructing a formatter now produces an iterator of required\r\n  resource keys from the pattern, and the keys are loaded accordingly.\r\n\r\n* Refactor zone symbol length matching\r\n\r\n* Implement Exemplar City\r\n\r\n* Add time-zone pattern tests\r\n\r\n* Implement ISO-8601 Time Zone Formats\r\n\r\n* Implement Generic Non-Location Format\r\n\r\n* Implement Generic Location Format\r\n\r\n* Replace todo! with real issue\r\n\r\n* Separate the three main formats into individual files\r\n\r\n* Add test that constructing DateTimeFormat with zones is err\r\n\r\n* Remove unneeded DateTimeError::UnexpectedSymbol\r\n\r\n* Document ISO-8601 format\r\n\r\n* Fix typo in TimeZoneInput documentation\r\n\r\n* Add Underflow error type\r\n\r\n* Reduce time-zone formatting methods to pub(super)\r\n\r\n* Document time-zone formatting helpers\r\n\r\n* Add examples of ISO formats\r\n\r\n* Fix typo\r\n\r\n* Remove debug assertions in favor of const fn.\r\n\r\n- The functions are prviate, and the invariant is maintained by all\r\n  callers within the relevant file. There is no need for assertions.\r\n- We can't have bolth until panicking in const contexts is stabilized.\r\n\r\n* Remove unneeded support for U+2212 (minus sign)\r\n\r\n* Add some newlines for readability\r\n\r\n* Clarify ISO-8106 examples\r\n\r\n* Rename `style` -> `length` after rebase\r\n\r\n* Add missing line at end of file\r\n\r\n* Fix typo in documentation\r\n\r\n* Move DateTimeFormat construction test to `tests` dir\r\n\r\n- This fixes the CI error of testing without default features.\r\n\r\n* Regenerate skeleton test data with time zones\r\n\r\n* Clarify skeleton comments about generating test data\r\n\r\n* Return FieldTooLong error instead of panicking\r\n\r\n- Respond to Zibi's feedback about panicking on field to long by\r\n  returning an error instead.\r\n- Remove the invalid symbol macro.\r\n\r\n* Respond to sffc's review feedback\r\n\r\n- Add TODOs to replace strings with TinyStr\r\n- Remove `country_code()` time-zone input function\r\n- Rename IsoSeconds::None -> IsoSeconds::Never\r\n- Move GmtOffset code to `date.rs`\r\n- Have MockZonedDateTime use MockDateTime for relevant input traits.\r\n- Fix typo \"destionation\" -> \"destination\"\r\n- Load TimeZone resources in-line in `try_new()`\r\n\r\n* Make TimeZoneFormat `pub(super)`\r\n\r\nThis type will be `pub(super)` temporarily until we have a good way\r\nto publicly determine a pattern with which to construct the type.\r\nTrack this issue in #622\r\n\r\n* Move ISO8601 format to timezone.rs\r\n\r\nISO8601 formatting functions now belong to TimeZoneFormat, rather\r\nthan to GmtOffset itself.\r\n\r\n* Rename 's to 'l for `format()` functions.\r\n\r\n* Add the word \"offset\" to gmt offset formatting functions\r\n\r\n* Add documentation to ZonedDateTimeFormat\r\n\r\n* Add documentation for `MockTimeZone` and `MockZonedDateTime`\r\n\r\n* Implement Field trait for TimeZone fields\r\n\r\n* Fix typo\r\n\r\n* Fallback to TextOrNumeric::Text for default pattern matching\r\n\r\nAfter consulting with gregtatum who is implementing the skeleton\r\nmatching algorithms, we determined that Text is a reasonable\r\ndefault fallback.\r\n\r\n* Change TimeZoneFormat formatting functions to write directly\r\n\r\nTimeZoneFormat functions now write directly instaed of returning\r\na string.\r\n\r\n* Rename `FieldTooLong` to `FieldLengthInvalid`\r\n\r\n* Rename other TooLong errors to InvalidLength\r\n\r\n* Run rustfmt\r\n\r\n* Remove clone from Time Zone data structs map access\r\n\r\nThis used to be necessary when the format functions returned a string,\r\nbecause some strings were owned, and others were references,\r\nbut now that the format functions write directly to a buffer,\r\nwe can deal with references as needed and just write them.",
          "timestamp": "2021-04-12T23:13:28-07:00",
          "tree_id": "f24e9f38f06b923e07fe2fcbc39ac96046ecc395",
          "url": "https://github.com/unicode-org/icu4x/commit/fbecd88af0c31538e290889c919bdc29620bc402"
        },
        "date": 1618295018409,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 34341,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20673,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "elango@google.com",
            "name": "Elango",
            "username": "echeran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "076a9194e1d28f1cbbaad6b9ae75969404d54e59",
          "message": "Add comment discouraging use of uniset::props (#627)",
          "timestamp": "2021-04-13T01:19:59-05:00",
          "tree_id": "23a139523c994f11ba25715f8f6f4424a9868110",
          "url": "https://github.com/unicode-org/icu4x/commit/076a9194e1d28f1cbbaad6b9ae75969404d54e59"
        },
        "date": 1618295443539,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 34341,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20673,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dminor@mozilla.com",
            "name": "Dan Minor",
            "username": "dminor"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "23c599e2352a8fe8f549053ff26567008a41ed7b",
          "message": "Use cargo-readme to generate README.md files (#601)\n\nUse cargo-readme to generate README.md files",
          "timestamp": "2021-04-13T07:04:58-04:00",
          "tree_id": "bf5602ebe0b0ffd3427543e8f8ced7e64e1b0551",
          "url": "https://github.com/unicode-org/icu4x/commit/23c599e2352a8fe8f549053ff26567008a41ed7b"
        },
        "date": 1618312536228,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 34341,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20673,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gregtatum@users.noreply.github.com",
            "name": "Greg Tatum",
            "username": "gregtatum"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9fae0980aa20781a223cc0647a7d9d06cdf607b2",
          "message": "Fix the CI because of a components::Bag and Time Zone conflict (#639)",
          "timestamp": "2021-04-13T11:40:58-05:00",
          "tree_id": "98d433bad078190e2310a7d142c15366d82a060b",
          "url": "https://github.com/unicode-org/icu4x/commit/9fae0980aa20781a223cc0647a7d9d06cdf607b2"
        },
        "date": 1618332677970,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 34341,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20673,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zibi@braniecki.net",
            "name": "Zibi Braniecki",
            "username": "zbraniecki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "180d4e5a43780ab078b462c00dc8f0328b5cc00b",
          "message": "Optimize performance of LocaleCanonicalizer::maximize. (#504)\n\n* Add From<Subtag> for TinyStr.\r\n\r\n* Optimize performance of LocaleCanonicalizer by storing resources in custom data structures.",
          "timestamp": "2021-04-13T10:05:36-07:00",
          "tree_id": "a5a6b61f4fd777a23b2707a291d281b1845fba71",
          "url": "https://github.com/unicode-org/icu4x/commit/180d4e5a43780ab078b462c00dc8f0328b5cc00b"
        },
        "date": 1618334127046,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 34341,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20673,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sffc@google.com",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c6d1401e9b965cb457c74c4776ffe8c833f003a7",
          "message": "Updating to CLDR JSON 39.0.0-BETA2 (#640)",
          "timestamp": "2021-04-13T13:19:44-05:00",
          "tree_id": "c600d8d68f585239bff14ac35f1f20125449c25a",
          "url": "https://github.com/unicode-org/icu4x/commit/c6d1401e9b965cb457c74c4776ffe8c833f003a7"
        },
        "date": 1618338622901,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 34341,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20673,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zibi@braniecki.net",
            "name": "Zibi Braniecki",
            "username": "zbraniecki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6d99323dc945a09af01d1147477584b469b6fe4b",
          "message": "Mute clippy warnings in a few places, apply the suggestions in remaining cases. (#642)\n\n* Mute clippy warnings in a few places, apply the suggestions in remaining cases.\r\n\r\n* Fix clippy fmt\r\n\r\n* Separate line after license header\r\n\r\n* Remove accidentally added diffs",
          "timestamp": "2021-04-13T11:30:56-07:00",
          "tree_id": "b3ec6302e8f8bfcb8fea56433fbc548249ed7289",
          "url": "https://github.com/unicode-org/icu4x/commit/6d99323dc945a09af01d1147477584b469b6fe4b"
        },
        "date": 1618339310530,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 34341,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20673,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "58569820+nordzilla@users.noreply.github.com",
            "name": "Erik Nordin",
            "username": "nordzilla"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "496e0759cf7f6810e248544a6cf964bbbf34425d",
          "message": "Update ICU Component Documentation Examples (#616)\n\n* Update documentation for components/datetime\r\n\r\n* Update documentation for components/locid\r\n\r\n* Update documentation for components/plurals\r\n\r\n* Update documentation for components/uniset\r\n\r\n* Alphabetize Cargo.toml changes\r\n\r\n* Use cargo-readme to generate README files",
          "timestamp": "2021-04-14T12:54:13-07:00",
          "tree_id": "87ef342899e93da76627c071c21f8ad306fa5838",
          "url": "https://github.com/unicode-org/icu4x/commit/496e0759cf7f6810e248544a6cf964bbbf34425d"
        },
        "date": 1618430676198,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 34341,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20673,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zibi@braniecki.net",
            "name": "Zibi Braniecki",
            "username": "zbraniecki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a3d0a257cb7588fe912bd8a114e4ebb3fbf41280",
          "message": "Update tinystr to 0.4.5 for perf wins on locid and locale_canonicalizer. (#646)\n\n* Update tinystr to 0.4.4 for perf wins on locid and locale_canonicalizer.\r\n\r\n* Update to tinystr 0.4.5",
          "timestamp": "2021-04-14T21:32:52-07:00",
          "tree_id": "8efe3c114253eafafff86f7ed6df39ab8064ac25",
          "url": "https://github.com/unicode-org/icu4x/commit/a3d0a257cb7588fe912bd8a114e4ebb3fbf41280"
        },
        "date": 1618461854012,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 34341,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20673,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nmihai_2000@yahoo.com",
            "name": "Mihai Nita",
            "username": "mihnita"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c4abd70d98c9240cb9df99453c077b073ee8559a",
          "message": "First iteration of horizontal fallback doc (#629)",
          "timestamp": "2021-04-15T12:06:10-07:00",
          "tree_id": "cea7507f81a6033eb38767a71c6121b36e84db42",
          "url": "https://github.com/unicode-org/icu4x/commit/c4abd70d98c9240cb9df99453c077b073ee8559a"
        },
        "date": 1618514255630,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 34341,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20673,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sffc@google.com",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0b328f8a4cff123fc48416c7a03d0f96cc9c2ab0",
          "message": "Adding ZeroVec, zero-copy vector abstraction over a byte buffer (#647)",
          "timestamp": "2021-04-15T16:41:00-05:00",
          "tree_id": "f3eadaebeff876cfbe022497a6417c1756993eec",
          "url": "https://github.com/unicode-org/icu4x/commit/0b328f8a4cff123fc48416c7a03d0f96cc9c2ab0"
        },
        "date": 1618523462152,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 34341,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20673,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 7,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sffc@google.com",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d6e5e2d96bcf62d27d07f0ffe3acff8b82e44e08",
          "message": "Adding Valgrind build task (#631)",
          "timestamp": "2021-04-16T00:56:17-05:00",
          "tree_id": "3dfdb297dd2df7f83d2283f739da22a8d7eeb60d",
          "url": "https://github.com/unicode-org/icu4x/commit/d6e5e2d96bcf62d27d07f0ffe3acff8b82e44e08"
        },
        "date": 1618553205394,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 34341,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20673,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sffc@google.com",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c9590b53ef98322b903308ff5b4c57d621222e35",
          "message": "Small cleanups to prepare for data source abstraction (#649)",
          "timestamp": "2021-04-16T19:24:01-05:00",
          "tree_id": "f303e309927a4c804d80979b3bd94c308745d80d",
          "url": "https://github.com/unicode-org/icu4x/commit/c9590b53ef98322b903308ff5b4c57d621222e35"
        },
        "date": 1618619638037,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 34341,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20673,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "manishsmail@gmail.com",
            "name": "Manish Goregaokar",
            "username": "Manishearth"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1479e8caacd2004fd43c127d74a649318e7edded",
          "message": "Add VarZeroVec (#653)\n\n* Add VarZeroVec\r\n\r\n* Move varzerovec into toplevel module\r\n\r\n* Add VarULE docs, remove inline(always)\r\n\r\n* SliceComponents::new() -> SliceComponents::try_from_bytes()\r\n\r\n* Switch from u64 to u32 in VarZeroVec\r\n\r\n* Address zibi's comments\r\n\r\n* Use checked_add",
          "timestamp": "2021-04-16T18:14:42-07:00",
          "tree_id": "a2145111f0d4917468d67952cfef709ae12a18be",
          "url": "https://github.com/unicode-org/icu4x/commit/1479e8caacd2004fd43c127d74a649318e7edded"
        },
        "date": 1618622763479,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 34341,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20673,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "58569820+nordzilla@users.noreply.github.com",
            "name": "Erik Nordin",
            "username": "nordzilla"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "179438a061f04e221a2f269980fe0b0762734e66",
          "message": "Clean up terminology and documentation (#654)\n\n* Unify all # Examples section headers\r\n\r\n* Unify references to `datetime` as a single word\r\n\r\n* Unify references to `time zone` as a two words\r\n\r\n* Clean up docs in components/capi\r\n\r\n* Clean up docs in components/datetime\r\n\r\n* Clean up docs in components/decimal\r\n\r\n* Clean up docs in components/ecma402\r\n\r\n* Clean up docs in components/locale_canonicalizer\r\n\r\n* Clean up docs in components/locid\r\n\r\n* Clean up docs in components/plurals\r\n\r\n* Run rustfmt\r\n\r\n* Regenerate README files\r\n\r\n* Clean up docs in components/provider\r\n\r\n* Clean up docs in components/provider_cldr\r\n\r\n* Clean up docs in components/provider_fs\r\n\r\n* Clean up docs in comopnents/uniset\r\n\r\n* Ensure that all linked Rust types have backticks\r\n\r\n* Grep for any links that I missed\r\n\r\n* Reslove all doc warnings\r\n\r\nRuns cargo doc --document-private-items --all-features\r\nand ensures that there are no warnings.\r\n\r\n* Regenerate README files",
          "timestamp": "2021-04-16T18:40:54-07:00",
          "tree_id": "aa95cbacf03f5ad3da422f865aecf34db6a72ab5",
          "url": "https://github.com/unicode-org/icu4x/commit/179438a061f04e221a2f269980fe0b0762734e66"
        },
        "date": 1618624279376,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 34341,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20673,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "58569820+nordzilla@users.noreply.github.com",
            "name": "Erik Nordin",
            "username": "nordzilla"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a46f3336d0a2f0c9c9193fc2e0893c8834e30fcf",
          "message": "Remove .DS_Store files and add them to the .gitignore (#655)",
          "timestamp": "2021-04-16T19:03:34-07:00",
          "tree_id": "1b73a4ca319bae725e66ef371f86f6b667f77836",
          "url": "https://github.com/unicode-org/icu4x/commit/a46f3336d0a2f0c9c9193fc2e0893c8834e30fcf"
        },
        "date": 1618625646941,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 34341,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20673,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sffc@google.com",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d6612af59d103dd49c5f6e2992568edce651c239",
          "message": "Move PpucdDataProvider to experimental (#648)",
          "timestamp": "2021-04-17T00:54:08-05:00",
          "tree_id": "5e22c847305181f89ad70830703fa82f2db1385f",
          "url": "https://github.com/unicode-org/icu4x/commit/d6612af59d103dd49c5f6e2992568edce651c239"
        },
        "date": 1618639504785,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 34341,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20673,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sffc@google.com",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cbf7945f62fff01547db32baf9712810b41dd17d",
          "message": "ZeroVec: More docs and code cleanup (#658)",
          "timestamp": "2021-04-17T10:40:53-05:00",
          "tree_id": "4353bff83b35f3b60736824975689aeee2ff9aa0",
          "url": "https://github.com/unicode-org/icu4x/commit/cbf7945f62fff01547db32baf9712810b41dd17d"
        },
        "date": 1618674679636,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 34341,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20673,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zibi@braniecki.net",
            "name": "Zibi Braniecki",
            "username": "zbraniecki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ca1d3e3910adc48bdb534df94276ffc1874dcafc",
          "message": "Add icu_pattern util (#581)\n\n* Add icu_pattern util\r\n\r\n* Add PatternIterator trait\r\n\r\n* Apply initial feedback: add allow_quoted_literals, support double quotes, and Vec<E> for simple replacements\r\n\r\n* Add missing license header\r\n\r\n* Switch Interpolator key to be an associated type.\r\n\r\n* Add missing license header\r\n\r\n* Add pre-parsed bench and fix Vec<E> replacements\r\n\r\n* Switch to take &[] in Interpolator.\r\n\r\n* Add examples\r\n\r\n* Add license headers\r\n\r\n* Fix docs\r\n\r\n* Switch Literals to Cow\r\n\r\n* Add ParserOptions\r\n\r\n* Add Example prefix to the main example per Gregs feedback\r\n\r\n* Introduce InterpolatorKind and switch Interpolator to return references.\r\n\r\n* Introduce better ergonomics to wrap Parser/Interpolator under Pattern.\r\n\r\n* Slightly clean up the docs and remove the Cow<str> bound on E\r\n\r\n* Clean up docs a bit more\r\n\r\n* Apply feedback\r\n\r\n* Add docs and extend test coverage\r\n\r\n* Remove strenous manual Eq\r\n\r\n* Generate README.md",
          "timestamp": "2021-04-17T09:53:36-07:00",
          "tree_id": "23bf61670dc60d1223c88c778e833c766f5a8ef3",
          "url": "https://github.com/unicode-org/icu4x/commit/ca1d3e3910adc48bdb534df94276ffc1874dcafc"
        },
        "date": 1618679039696,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 34341,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20673,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "manishsmail@gmail.com",
            "name": "Manish Goregaokar",
            "username": "Manishearth"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6be34fd43a9ab2d068009105b3027c52c50367bc",
          "message": "Add metadata fields to icu_benchmark_macros (#656)",
          "timestamp": "2021-04-18T07:18:34-07:00",
          "tree_id": "b41c77151f2f359f92b7f05ef822865c839d5c71",
          "url": "https://github.com/unicode-org/icu4x/commit/6be34fd43a9ab2d068009105b3027c52c50367bc"
        },
        "date": 1618756155850,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 34341,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20673,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sffc@google.com",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b58ed80e99cf20e1e2bf48875462910cffadfeee",
          "message": "Cleanups to icu, icu_decimal, and zerovec (#650)\n\n- Adds FixedDecimalFormat to the icu crate\r\n- Documents cargo features used in ICU4X\r\n- Adds benchmarks for VarZeroVec\r\n- Documents benchmark results in zerovec docs",
          "timestamp": "2021-04-19T12:41:43-05:00",
          "tree_id": "9a59f644ca27f0e281b7e6def4114186379c7103",
          "url": "https://github.com/unicode-org/icu4x/commit/b58ed80e99cf20e1e2bf48875462910cffadfeee"
        },
        "date": 1618856115365,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 34341,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20673,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zibi@braniecki.net",
            "name": "Zibi Braniecki",
            "username": "zbraniecki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a502f58f0c3529d6aa4bf7fed1f43973f2b4818a",
          "message": "Run `cargo outdated` and update deps (#660)\n\n* cargo outdated\r\n\r\n* Attempt to try to fix rand in test\r\n\r\n* Try to make cargo clippy happy\r\n\r\n* Update BIES test for new rng version\r\n\r\nCo-authored-by: Shane F. Carr <shane@unicode.org>",
          "timestamp": "2021-04-19T13:54:41-07:00",
          "tree_id": "9f08a6f3173a6ad547cb00daa8ca6ed914170b7f",
          "url": "https://github.com/unicode-org/icu4x/commit/a502f58f0c3529d6aa4bf7fed1f43973f2b4818a"
        },
        "date": 1618866298388,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 34341,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20673,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zibi@braniecki.net",
            "name": "Zibi Braniecki",
            "username": "zbraniecki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "938f943154dc8574a9d6e70c130cea2ee05ed527",
          "message": "Auto and manually apply selected nursery clippies. (#661)",
          "timestamp": "2021-04-20T13:43:52-07:00",
          "tree_id": "32b06d6e7705aafb49f1e9e9a9a4b6840faf451f",
          "url": "https://github.com/unicode-org/icu4x/commit/938f943154dc8574a9d6e70c130cea2ee05ed527"
        },
        "date": 1618952009600,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 34341,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20673,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "manishsmail@gmail.com",
            "name": "Manish Goregaokar",
            "username": "Manishearth"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7d78c20bd171cbdf15fd9026bac4e6b2997baa41",
          "message": "Add VarZeroVec::into_owned() (#666)",
          "timestamp": "2021-04-20T19:44:52-07:00",
          "tree_id": "270fd9cdd7909625fe6cbd8305f20bd4df88069f",
          "url": "https://github.com/unicode-org/icu4x/commit/7d78c20bd171cbdf15fd9026bac4e6b2997baa41"
        },
        "date": 1618973712848,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 34341,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20673,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gregtatum@users.noreply.github.com",
            "name": "Greg Tatum",
            "username": "gregtatum"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6daf09323a50001967fcabd778d96aa9176f3cc5",
          "message": "Make it so that unsupported skeleton fields only emit a warning (#670)",
          "timestamp": "2021-04-22T12:38:53-05:00",
          "tree_id": "68d8c45c4df3696e814f2666ec28c859ec5aabda",
          "url": "https://github.com/unicode-org/icu4x/commit/6daf09323a50001967fcabd778d96aa9176f3cc5"
        },
        "date": 1619113667240,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 34341,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20673,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "manishsmail@gmail.com",
            "name": "Manish Goregaokar",
            "username": "Manishearth"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "74eb46d37209c0a4200826eaa0322a33bf2462cf",
          "message": "Add ZeroMap (#668)\n\n* Add scaffolding traits for ZeroMap\r\n\r\n* Add ZeroMap methods\r\n\r\n* Add remove(), try_append*)\r\n\r\n* Some basic methods\r\n\r\n* Copy over LiteMap tests\r\n\r\n* Add SerializeType\r\n\r\n* Add iterators\r\n\r\n* Add serde\r\n\r\n* Add docs\r\n\r\n* Use individual macros\r\n\r\n* Add sized-ULE helper functions\r\n\r\n* Make make_mut pub(crate)\r\n\r\n* Error on out-of-order ZeroMap deserializations\r\n\r\n* litemap -> zeromap\r\n\r\n* get_as_ser -> with_ser\r\n\r\n* Replace cmp_two_gets with is_ascending\r\n\r\n* contains_key on needletype\r\n\r\n* Fix comment\r\n\r\n* Add 'static bound to ULE\r\n\r\n* Fix fmt",
          "timestamp": "2021-04-23T10:40:15-07:00",
          "tree_id": "19623df58ab2c09cce9e08d01a97d64642f6956a",
          "url": "https://github.com/unicode-org/icu4x/commit/74eb46d37209c0a4200826eaa0322a33bf2462cf"
        },
        "date": 1619200304383,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 34341,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20673,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "manishsmail@gmail.com",
            "name": "Manish Goregaokar",
            "username": "Manishearth"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6030ec10e49651651b5145ede735e9b2a8a9b306",
          "message": "Update CONTRIBUTING.md with review dismiss rules and Conventional Comments (#678)\n\n* Update CONTRIBUTING.md with review dismiss rules and Conventional Comments\r\n\r\n* Mention manual reviewers",
          "timestamp": "2021-04-23T12:13:33-07:00",
          "tree_id": "28a2c66575130c374086e93c08064822949db5af",
          "url": "https://github.com/unicode-org/icu4x/commit/6030ec10e49651651b5145ede735e9b2a8a9b306"
        },
        "date": 1619205766450,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 34341,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20673,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zibi@braniecki.net",
            "name": "Zibi Braniecki",
            "username": "zbraniecki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "62d541647835d9c8af7cfd5110e8e3973f1105d1",
          "message": "1.0 PRD and Roadmap documents (#665)\n\n* 1.0 PRD and Roadmap documents\r\n\r\n* Apply feedback round 1\r\n\r\n* Apply feedback\r\n\r\n* Apply feedback",
          "timestamp": "2021-04-26T11:28:53-07:00",
          "tree_id": "9a53d1f021355ddb628677d07b4bfb51ded0c9dc",
          "url": "https://github.com/unicode-org/icu4x/commit/62d541647835d9c8af7cfd5110e8e3973f1105d1"
        },
        "date": 1619462339728,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 34341,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20673,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gregtatum@users.noreply.github.com",
            "name": "Greg Tatum",
            "username": "gregtatum"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "04ec2da09a759409019103e3aa7ca65337811cd1",
          "message": "Change the components bag to default to None (#675)",
          "timestamp": "2021-04-26T14:04:45-05:00",
          "tree_id": "57980f5a294511c1540dd4902a0e0a38e1a8d586",
          "url": "https://github.com/unicode-org/icu4x/commit/04ec2da09a759409019103e3aa7ca65337811cd1"
        },
        "date": 1619464504908,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 34341,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20673,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gregtatum@users.noreply.github.com",
            "name": "Greg Tatum",
            "username": "gregtatum"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9015f7820c614afd288567efb2cd80b1eccd2a2e",
          "message": "Update failing generated-readme-check error message (#641)",
          "timestamp": "2021-04-26T17:07:01-05:00",
          "tree_id": "ad42378f451284a1a1ac7b05308b91f7e8c43b5d",
          "url": "https://github.com/unicode-org/icu4x/commit/9015f7820c614afd288567efb2cd80b1eccd2a2e"
        },
        "date": 1619475465569,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 34341,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20673,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zibi@braniecki.net",
            "name": "Zibi Braniecki",
            "username": "zbraniecki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b937cfadf78a1f6f4223d6269c25629adef98144",
          "message": "Update Tutorial to 0.2. (#684)\n\n* Update Tutorial to 0.2.\r\n\r\n* Apply feedback",
          "timestamp": "2021-04-27T23:57:53-07:00",
          "tree_id": "1dd98cb6a244623c5e74c9627b1d4096267ff0e8",
          "url": "https://github.com/unicode-org/icu4x/commit/b937cfadf78a1f6f4223d6269c25629adef98144"
        },
        "date": 1619593686115,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 34341,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20673,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sffc@google.com",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fc6315e0c35b57db3fc1b35d80325d320a94a71b",
          "message": "Make docs for provider module consistent (#683)",
          "timestamp": "2021-04-28T11:07:08-05:00",
          "tree_id": "75e31b0bdd06a8a3a7d9e596f5913d1aea38e659",
          "url": "https://github.com/unicode-org/icu4x/commit/fc6315e0c35b57db3fc1b35d80325d320a94a71b"
        },
        "date": 1619626673369,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 34341,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20673,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dminor@mozilla.com",
            "name": "Dan Minor",
            "username": "dminor"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e78289331a514adbce008364653dce2fed9ddced",
          "message": "Fixes to locale canonicalizer docs (#688)\n\n* Fixes to locale canonicalizer docs\r\n\r\n* Address review feedback\r\n\r\n* More review feedback\r\n\r\n* Split expect onto following line",
          "timestamp": "2021-04-28T11:00:46-07:00",
          "tree_id": "753f6ecb603059b65471682f71256d9b01c2a5b4",
          "url": "https://github.com/unicode-org/icu4x/commit/e78289331a514adbce008364653dce2fed9ddced"
        },
        "date": 1619633456570,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 34341,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20673,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gregtatum@users.noreply.github.com",
            "name": "Greg Tatum",
            "username": "gregtatum"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "750dc07d0ee12a2f9d19aa435a4eeb42631f3a79",
          "message": "Hide skeleton docs (#689)",
          "timestamp": "2021-04-28T22:23:15-07:00",
          "tree_id": "a21d21f1f85918ed237cd61bc5c6b5864a45362a",
          "url": "https://github.com/unicode-org/icu4x/commit/750dc07d0ee12a2f9d19aa435a4eeb42631f3a79"
        },
        "date": 1619674382410,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 34341,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20673,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zibi@braniecki.net",
            "name": "Zibi Braniecki",
            "username": "zbraniecki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dc4accf2da2eed54d80ba57910cedf1de86cf2d8",
          "message": "icu4x 0.2 (#687)\n\n* icu4x 0.2\r\n\r\n* Release will be on the 28th\r\n\r\n* Update to 29th",
          "timestamp": "2021-04-29T09:12:26-07:00",
          "tree_id": "774c341513a82647d9a467863c5c1d50b0db1456",
          "url": "https://github.com/unicode-org/icu4x/commit/dc4accf2da2eed54d80ba57910cedf1de86cf2d8"
        },
        "date": 1619713357067,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 34341,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20673,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zibi@braniecki.net",
            "name": "Zibi Braniecki",
            "username": "zbraniecki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d530470ecafed49dcb41896e48e7f1d9112416b4",
          "message": "Add a 0.2 release blog post (#679)\n\n* Add a 0.2 release blog post\r\n\r\n* Update docs/posts/20210427_ICU4X_02_Release.md\r\n\r\nCo-authored-by: Dan Minor <dminor@mozilla.com>\r\n\r\n* Update docs/posts/20210427_ICU4X_02_Release.md\r\n\r\nCo-authored-by: Dan Minor <dminor@mozilla.com>\r\n\r\n* Update docs/posts/20210427_ICU4X_02_Release.md\r\n\r\nCo-authored-by: Dan Minor <dminor@mozilla.com>\r\n\r\n* Update docs/posts/20210427_ICU4X_02_Release.md\r\n\r\nCo-authored-by: Dan Minor <dminor@mozilla.com>\r\n\r\n* Update docs/posts/20210427_ICU4X_02_Release.md\r\n\r\nCo-authored-by: Dan Minor <dminor@mozilla.com>\r\n\r\n* Update docs/posts/20210427_ICU4X_02_Release.md\r\n\r\nCo-authored-by: Dan Minor <dminor@mozilla.com>\r\n\r\n* Apply feedback\r\n\r\n* Apply feedback\r\n\r\n* Add links to the release post\r\n\r\nCo-authored-by: Dan Minor <dminor@mozilla.com>",
          "timestamp": "2021-04-29T09:24:15-07:00",
          "tree_id": "8f0947c7bab7be88803a58d89a0d2df36e657fe5",
          "url": "https://github.com/unicode-org/icu4x/commit/d530470ecafed49dcb41896e48e7f1d9112416b4"
        },
        "date": 1619714115261,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 34341,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20673,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zibi@braniecki.net",
            "name": "Zibi Braniecki",
            "username": "zbraniecki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3b6d7784c2a8d7a7a3eb02878a342a1b21709ac0",
          "message": "Add ownership command for crates.io (#690)",
          "timestamp": "2021-04-29T09:39:07-07:00",
          "tree_id": "d01b120141270d38b6149b3ac18b656d83325b5b",
          "url": "https://github.com/unicode-org/icu4x/commit/3b6d7784c2a8d7a7a3eb02878a342a1b21709ac0"
        },
        "date": 1619715024671,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 34341,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20673,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zibi@braniecki.net",
            "name": "Zibi Braniecki",
            "username": "zbraniecki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "377ba0e6c90280d1dfa6973fce643c439b021c3b",
          "message": "Add benches to includes (#692)",
          "timestamp": "2021-04-29T11:13:48-07:00",
          "tree_id": "bac686a8b23c22d990facc3d850b58bfc0429962",
          "url": "https://github.com/unicode-org/icu4x/commit/377ba0e6c90280d1dfa6973fce643c439b021c3b"
        },
        "date": 1619720603765,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 34341,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20673,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zibi@braniecki.net",
            "name": "Zibi Braniecki",
            "username": "zbraniecki"
          },
          "committer": {
            "email": "zibi@braniecki.net",
            "name": "Zibi Braniecki",
            "username": "zbraniecki"
          },
          "distinct": true,
          "id": "20fc4c5a5936e8d344c67236541911b4913ef6f0",
          "message": "Add description to locale_canonicalizer",
          "timestamp": "2021-04-29T11:17:03-07:00",
          "tree_id": "1237ac82239a5a30d3e9eb81459105f8d6466119",
          "url": "https://github.com/unicode-org/icu4x/commit/20fc4c5a5936e8d344c67236541911b4913ef6f0"
        },
        "date": 1619720854368,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 34341,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20673,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zibi@braniecki.net",
            "name": "Zibi Braniecki",
            "username": "zbraniecki"
          },
          "committer": {
            "email": "zibi@braniecki.net",
            "name": "Zibi Braniecki",
            "username": "zbraniecki"
          },
          "distinct": true,
          "id": "8e93c88897cdd086c49524ef05c7f383a885d804",
          "message": "Add description to decimal",
          "timestamp": "2021-04-29T11:30:16-07:00",
          "tree_id": "a163e1859f11737ea095d198c3ad7bbc22fec00b",
          "url": "https://github.com/unicode-org/icu4x/commit/8e93c88897cdd086c49524ef05c7f383a885d804"
        },
        "date": 1619721661973,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 34341,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20673,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zibi@braniecki.net",
            "name": "Zibi Braniecki",
            "username": "zbraniecki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3a458106e62befb111b54fd62014b5b712fc2e8c",
          "message": "Update README.md to 0.2 (#691)",
          "timestamp": "2021-04-29T13:11:07-07:00",
          "tree_id": "4399d22e228d2353940543901bd575f1890e658f",
          "url": "https://github.com/unicode-org/icu4x/commit/3a458106e62befb111b54fd62014b5b712fc2e8c"
        },
        "date": 1619727679509,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 34341,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20673,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zibi@braniecki.net",
            "name": "Zibi Braniecki",
            "username": "zbraniecki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "478c4a901faca10195edce477b583ed31f8fdd1f",
          "message": "Apply feedback on 0.2 blog post from Mark",
          "timestamp": "2021-04-29T15:40:30-07:00",
          "tree_id": "7547d7a22a86db6021925770049cef13a4159efb",
          "url": "https://github.com/unicode-org/icu4x/commit/478c4a901faca10195edce477b583ed31f8fdd1f"
        },
        "date": 1619736636171,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 34341,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20673,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "manishsmail@gmail.com",
            "name": "Manish Goregaokar",
            "username": "Manishearth"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2ff1a07ff1608be5755a40abf96d076b60673195",
          "message": "Add FFI for FixedDecimalFormat (#680)\n\n* Add CAPI bindings for fixed_decimal\r\n\r\n* Add decimals, macro for c-enums\r\n\r\n* Add ICU4XCustomWriteable\r\n\r\n* Add FixedDecimalFormat::format()\r\n\r\n* Add c headers\r\n\r\n* Add fixeddecimal example\r\n\r\n* more comments on custom_writeable\r\n\r\n* Update components/capi/src/custom_writeable.rs\r\n\r\nCo-authored-by: Shane F. Carr <shane@unicode.org>\r\n\r\n* Address review comments\r\n\r\n* Update components/capi/src/custom_writeable.rs\r\n\r\nCo-authored-by: Shane F. Carr <shane@unicode.org>\r\n\r\n* Writeable docs\r\n\r\n* Improve docs\r\n\r\n* add license\r\n\r\n* more review fixes\r\n\r\n* pass ICU4XCustomWriteable to its callbacks\r\n\r\n* Add FixedDecimal::multiply_pow10()\r\n\r\n* Update components/capi/src/custom_writeable.rs\r\n\r\nCo-authored-by: Shane F. Carr <shane@unicode.org>\r\n\r\n* More review fixes\r\n\r\n* add license\r\n\r\n* Lint fixes\r\n\r\n* Use references in FFI function\r\n\r\n* ICU4XCustomWriteable -> ICU4XWriteable\r\n\r\n* Add negate()\r\n\r\n* Fix label in test\r\n\r\n* fmt\r\n\r\nCo-authored-by: Shane F. Carr <shane@unicode.org>",
          "timestamp": "2021-05-04T15:14:51-07:00",
          "tree_id": "5485b797e54f9621abb77f211d2868f3693483e5",
          "url": "https://github.com/unicode-org/icu4x/commit/2ff1a07ff1608be5755a40abf96d076b60673195"
        },
        "date": 1620167040517,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 34341,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20673,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sffc@google.com",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ee4fce450e4164456f45d1e92d8f5e6c79c91d03",
          "message": "Updating to CLDR 39.0.0 (#695)",
          "timestamp": "2021-05-04T23:06:09-05:00",
          "tree_id": "81533fc1eb0f006e6923b4f6b7c0b8b425199eae",
          "url": "https://github.com/unicode-org/icu4x/commit/ee4fce450e4164456f45d1e92d8f5e6c79c91d03"
        },
        "date": 1620188173826,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 34341,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20673,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zibi@braniecki.net",
            "name": "Zibi Braniecki",
            "username": "zbraniecki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c6582ccddf87d49a44e2d4e54604543365c76bff",
          "message": "Switch to use thiserror for errors (#697)\n\n* Switch to use thiserror for errors\r\n\r\n* Update components/datetime/src/error.rs\r\n\r\nCo-authored-by: Shane F. Carr <sffc@google.com>\r\n\r\n* Switch to from, since transparent and source are a no go together.\r\n\r\nCo-authored-by: Shane F. Carr <sffc@google.com>",
          "timestamp": "2021-05-04T22:51:18-07:00",
          "tree_id": "04cd7b21c0788e88cb41cda04f4795f74a2edc6a",
          "url": "https://github.com/unicode-org/icu4x/commit/c6582ccddf87d49a44e2d4e54604543365c76bff"
        },
        "date": 1620194485594,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 34341,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20673,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sffc@google.com",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d0f4879f5ab94dca5494925c0a9fd0c44eb30f2a",
          "message": "Discussion about correctness, performance, and style (#701)",
          "timestamp": "2021-05-05T14:37:36-05:00",
          "tree_id": "ab5169a90ccd68e8463d034a4b324f2f5ab3326c",
          "url": "https://github.com/unicode-org/icu4x/commit/d0f4879f5ab94dca5494925c0a9fd0c44eb30f2a"
        },
        "date": 1620244078527,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 34341,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20673,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sffc@google.com",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3085cc6dbe3018a4029c82f10b0f6452fde949fd",
          "message": "Add GitHub workflow for documentation preview (#694)",
          "timestamp": "2021-05-07T12:30:38-05:00",
          "tree_id": "c22f52d0d9c1e4495fb9dc3cf4a52d0205745e69",
          "url": "https://github.com/unicode-org/icu4x/commit/3085cc6dbe3018a4029c82f10b0f6452fde949fd"
        },
        "date": 1620409212931,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 34341,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20673,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "elango@google.com",
            "name": "Elango",
            "username": "echeran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1fa93b46cf574d5b61ecb9128e9a5292d3549375",
          "message": "Add PR template, including reminder for Conventional Comments (#706)",
          "timestamp": "2021-05-07T10:34:48-07:00",
          "tree_id": "77e4b32e1ab092625600987a947dc96bef105d7b",
          "url": "https://github.com/unicode-org/icu4x/commit/1fa93b46cf574d5b61ecb9128e9a5292d3549375"
        },
        "date": 1620409500279,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 34341,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20673,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sffc@google.com",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8a91a7c33f5bb56f52c198161a4a4c3a117583a9",
          "message": "Require GCP key to build docs preview (#708)",
          "timestamp": "2021-05-08T13:19:59-05:00",
          "tree_id": "0595fdc51c3a25f889e671b09e13dd8facc63db6",
          "url": "https://github.com/unicode-org/icu4x/commit/8a91a7c33f5bb56f52c198161a4a4c3a117583a9"
        },
        "date": 1620498564002,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 34341,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20673,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "manishsmail@gmail.com",
            "name": "Manish Goregaokar",
            "username": "Manishearth"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "82ace5ec626d683e1ec3a5783d2a8c9125aada2b",
          "message": "Add yoke crate (#705)\n\n* Add yoke crate\n\n* Fix lint errors\n\n* Fix lint again\n\n* Clarifications for Miguel\n\n* Address shane's comments\n\n* Swap Yokeable::new()\n\n* more fmt\n\n* mention lifetime\n\n* Add Cartable for references\n\n* Remove unwrapping Cart impl on Option, move to having more attach methods\n\n* Reorganize yoke code\n\n* Use ptr::read instead of transmute_copy\n\n* Use StableDeref instead of Cart\n\n* Update utils/yoke/src/yoke.rs\n\nCo-authored-by: Shane F. Carr <shane@unicode.org>\n\n* Add more Clone impls\n\n* Move zerovec yoke impls to zerovec\n\n* lint\n\nCo-authored-by: Shane F. Carr <shane@unicode.org>",
          "timestamp": "2021-05-10T20:42:22-07:00",
          "tree_id": "e02ecb0625f89ebddbf45f9d4c6a4dd04c56fb79",
          "url": "https://github.com/unicode-org/icu4x/commit/82ace5ec626d683e1ec3a5783d2a8c9125aada2b"
        },
        "date": 1620705114416,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 34341,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20673,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "manishsmail@gmail.com",
            "name": "Manish Goregaokar",
            "username": "Manishearth"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "51e1e72b8a6a4d2df0221e8f617e3d9a6819b815",
          "message": "Fix keyword in Cargo.toml (#714)\n\n* Fix keyword in Cargo.toml\r\n\r\n* Update zerovec crate",
          "timestamp": "2021-05-11T10:19:50-07:00",
          "tree_id": "87f47eb5a6b8194bcf66add1ca291a2fd29b58ba",
          "url": "https://github.com/unicode-org/icu4x/commit/51e1e72b8a6a4d2df0221e8f617e3d9a6819b815"
        },
        "date": 1620754216246,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 34341,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20673,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "manishsmail@gmail.com",
            "name": "Manish Goregaokar",
            "username": "Manishearth"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "edd710df243c1d7d40660600d9ba2c6cbf7d7153",
          "message": "Add docs about optional features to zerovec crate, enable on docs.rs (#715)\n\n* Add docs about optional features to zerovec crate, enable on docs.rs\r\n\r\n* Fix whitespace in yokeable docs",
          "timestamp": "2021-05-11T12:35:26-07:00",
          "tree_id": "b9138b4b6baa4fd3d7837466905243697898a07f",
          "url": "https://github.com/unicode-org/icu4x/commit/edd710df243c1d7d40660600d9ba2c6cbf7d7153"
        },
        "date": 1620762310042,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 34341,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20673,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13301,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8942,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14362,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9027,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sffc@google.com",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9f897fb14dc1ed8093e152819427b98cdeddc657",
          "message": "Re-organize ICU4X data generation tools (#704)\n\n- Adds new crate under `tools/datagen`\r\n- Moves `icu4x-cldr-export` into that crate, renamed as `icu4x-datagen`\r\n- Replaces `icu4x-gen-testdata` with a new tool `icu4x-testdata-download`\r\n- Adds commands in Makefile.toml to invoke these tools",
          "timestamp": "2021-05-12T14:55:57-05:00",
          "tree_id": "b1614a6467b59fab9c68620bae91ffd7d63d6c08",
          "url": "https://github.com/unicode-org/icu4x/commit/9f897fb14dc1ed8093e152819427b98cdeddc657"
        },
        "date": 1620849994168,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 34296,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20665,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8934,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14317,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9019,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "elango@google.com",
            "name": "Elango",
            "username": "echeran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2b8ce7ebaf43e01c473317339cbcb2dbfa0f56fe",
          "message": "Exclude CI jobs from fork runs that are intended for upstream merges (#672)",
          "timestamp": "2021-05-13T10:15:06-07:00",
          "tree_id": "ec4b73fe682ebe6198e017f608e06d2e4e26a030",
          "url": "https://github.com/unicode-org/icu4x/commit/2b8ce7ebaf43e01c473317339cbcb2dbfa0f56fe"
        },
        "date": 1620926683513,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 34296,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20665,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8934,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14317,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9019,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sffc@google.com",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "579f8253d595763908a0eb2ae63b1f18f941e844",
          "message": "Build docs previews in forks with valid key (#709)",
          "timestamp": "2021-05-13T12:17:51-05:00",
          "tree_id": "685a41233951b588f3312408c4a0bf26eb4da01b",
          "url": "https://github.com/unicode-org/icu4x/commit/579f8253d595763908a0eb2ae63b1f18f941e844"
        },
        "date": 1620926862259,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 34296,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20665,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8934,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14317,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9019,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "manishsmail@gmail.com",
            "name": "Manish Goregaokar",
            "username": "Manishearth"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0eb7f7bb9bfd6ec45e01258f44bdfdc15d6e5f6a",
          "message": "Fix clippy in zerovec (#719)",
          "timestamp": "2021-05-13T11:58:35-07:00",
          "tree_id": "95a7fef0c65da10068a00f7237da3bf750386fde",
          "url": "https://github.com/unicode-org/icu4x/commit/0eb7f7bb9bfd6ec45e01258f44bdfdc15d6e5f6a"
        },
        "date": 1620932858983,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 34296,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20665,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8934,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14317,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9019,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sffc@google.com",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a8599e4e3f972b3120887252d290ea6e750cbf60",
          "message": "Rename package directories in repo (#721)",
          "timestamp": "2021-05-13T16:00:29-07:00",
          "tree_id": "803a86066a5a41a378a5b2ec01d4968d40b75133",
          "url": "https://github.com/unicode-org/icu4x/commit/a8599e4e3f972b3120887252d290ea6e750cbf60"
        },
        "date": 1620947418496,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 34282,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20662,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13242,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8931,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9016,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sffc@google.com",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0400ad1de102a0774618859ebee214d799b65e40",
          "message": "Refactoring and generalizing impl_dyn_provider! (#723)",
          "timestamp": "2021-05-14T15:41:26-05:00",
          "tree_id": "4a428a443677c4b025c94ba58465e75ecb3865dd",
          "url": "https://github.com/unicode-org/icu4x/commit/0400ad1de102a0774618859ebee214d799b65e40"
        },
        "date": 1621025484217,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 34282,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20662,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13242,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8931,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9016,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sffc@google.com",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1f4a9505f21a6d5c9bb4833e0cf3fe969f734c54",
          "message": "Touch-ups to Cargo.toml files and features (#722)",
          "timestamp": "2021-05-14T18:45:29-05:00",
          "tree_id": "d29be99abbf6b97a6acf945ab3d3feeb0f128558",
          "url": "https://github.com/unicode-org/icu4x/commit/1f4a9505f21a6d5c9bb4833e0cf3fe969f734c54"
        },
        "date": 1621036507582,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 34282,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20662,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13242,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8931,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9016,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "manishsmail@gmail.com",
            "name": "Manish Goregaokar",
            "username": "Manishearth"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d68636ac9e319f7ee1c784e8bb83b6313f3f6ae5",
          "message": "Add rust versions policy (#726)\n\n* Add rust versions policy\r\n\r\n* +readme",
          "timestamp": "2021-05-19T14:06:04-07:00",
          "tree_id": "474950468811fce0efd1875b66b313675f033cde",
          "url": "https://github.com/unicode-org/icu4x/commit/d68636ac9e319f7ee1c784e8bb83b6313f3f6ae5"
        },
        "date": 1621458947392,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 34282,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20662,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13242,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8931,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9016,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sffc@google.com",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bacbc93be0130f80f74f1d58bab6c3316041ec14",
          "message": "Document release readiness and experimental code (#700)",
          "timestamp": "2021-05-20T19:05:05-05:00",
          "tree_id": "0ccb405934215df26681b871f5204c949b4099db",
          "url": "https://github.com/unicode-org/icu4x/commit/bacbc93be0130f80f74f1d58bab6c3316041ec14"
        },
        "date": 1621556116981,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 34282,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20662,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13242,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8931,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9016,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "elango@google.com",
            "name": "Elango",
            "username": "echeran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "48c47db44cace4a608b627f6065de1dd39aac166",
          "message": "Make clippy warnings report as errors and update clippy args (#712)",
          "timestamp": "2021-05-20T17:21:57-07:00",
          "tree_id": "e16af60d9b2284d5943f4f01b26b3a156f27aa36",
          "url": "https://github.com/unicode-org/icu4x/commit/48c47db44cace4a608b627f6065de1dd39aac166"
        },
        "date": 1621557075787,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 34282,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20662,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13242,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8931,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9016,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sffc@google.com",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5fa630f86b31880cee7000793467d5ab9fd5abc6",
          "message": "Store DataPayload instead of Cow throughout ICU4X (#729)",
          "timestamp": "2021-05-21T01:02:44-05:00",
          "tree_id": "8f998589d9317d31432f0563cfba4936addb3260",
          "url": "https://github.com/unicode-org/icu4x/commit/5fa630f86b31880cee7000793467d5ab9fd5abc6"
        },
        "date": 1621577536923,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 34282,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20662,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13242,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8931,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9016,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sffc@google.com",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ca7cf884d164da7472741e81291309f06d80b484",
          "message": "Fix cargo make wasm (#728)",
          "timestamp": "2021-05-20T23:36:22-07:00",
          "tree_id": "954421693b34500a4fa26fb746d4e34ae2977c1b",
          "url": "https://github.com/unicode-org/icu4x/commit/ca7cf884d164da7472741e81291309f06d80b484"
        },
        "date": 1621579599519,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 34282,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20662,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13242,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8931,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9016,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sffc@google.com",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "eb112c397b37a57a551f0c972b9f7220a5177738",
          "message": "Make cow field of DataPayload crate-private",
          "timestamp": "2021-05-24T11:27:59-05:00",
          "tree_id": "2d08a0ca7e40b2f2ae643a70b4eb5e5efe1b0370",
          "url": "https://github.com/unicode-org/icu4x/commit/eb112c397b37a57a551f0c972b9f7220a5177738"
        },
        "date": 1621874337760,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 34282,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20662,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13242,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8931,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9016,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aethanyc@gmail.com",
            "name": "Ting-Yu Lin",
            "username": "aethanyc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "91e2fd60b5c1bba6439a798a18758c6327df2785",
          "message": "Properly initialize ICU4XPluralOperands struct in the capi example (#733)\n\nOther fields in ICU4XPluralOperands are meant to be zero.\r\n\r\nFixed #732.",
          "timestamp": "2021-05-24T12:16:25-07:00",
          "tree_id": "e3fa3af7129e97fd067eec6a5b87c6d2bf102247",
          "url": "https://github.com/unicode-org/icu4x/commit/91e2fd60b5c1bba6439a798a18758c6327df2785"
        },
        "date": 1621884385876,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 34282,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20662,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13242,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8931,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9016,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dminor@mozilla.com",
            "name": "Dan Minor",
            "username": "dminor"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "65863887250dc86947386299ad64210f478a36b7",
          "message": "Add include to capi (#738)",
          "timestamp": "2021-05-27T09:22:29-07:00",
          "tree_id": "2be80e2fc4f62b1a15d6f52bb1a59cde322d0abf",
          "url": "https://github.com/unicode-org/icu4x/commit/65863887250dc86947386299ad64210f478a36b7"
        },
        "date": 1622133126550,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 34282,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20662,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13242,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8931,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9016,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sffc@google.com",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "958ee68fa4f88fd740bb02927674871f1565dba2",
          "message": "Replace DataPayload Deref with .get() throughout ICU4X (#739)",
          "timestamp": "2021-05-27T20:08:24-05:00",
          "tree_id": "12c3ff9d23b6122cfc28cf0d798f22b89dc01341",
          "url": "https://github.com/unicode-org/icu4x/commit/958ee68fa4f88fd740bb02927674871f1565dba2"
        },
        "date": 1622164706759,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 34282,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20662,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13242,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8931,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9016,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aethanyc@gmail.com",
            "name": "Ting-Yu Lin",
            "username": "aethanyc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "83e10131e36e5cc264f3ec800cdeff6c94b2cf71",
          "message": "Add a line breaker prototype by importing uax14_rs (#717)\n\nThis commit is adapted from uax14_rs's master branch on commit\r\nb9607c520d798effba67a3fb2a0fb0995543b59e with necessary fix to pass\r\nicu4x's CI.",
          "timestamp": "2021-06-01T14:11:47-07:00",
          "tree_id": "5faa37604d9c4d60058f6f237af10d111f75e424",
          "url": "https://github.com/unicode-org/icu4x/commit/83e10131e36e5cc264f3ec800cdeff6c94b2cf71"
        },
        "date": 1622582521808,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 34282,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20662,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13242,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8931,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9016,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shadaj@users.noreply.github.com",
            "name": "Shadaj Laddad",
            "username": "shadaj"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a7d087c9831e9135acb235e4fc46fd6c3596452d",
          "message": "Initial build infrastructure and example for WASM FFI (#748)\n\n* [WIP] Prototype using ICU4X from JS through WASM\r\n\r\n* Support converting a fixed decimal to a string in WASM\r\n\r\n* Prototype high-level API\r\n\r\n* Add example of returning struct from WASM to JS\r\n\r\n* Directly create views of WASM memory\r\n\r\n* Set up build for separate dev and release WASM modes\r\n\r\n* Clean up example\r\n\r\n* Add docs for new FFI functions\r\n\r\n* Run cargo fmt and address clippy warnings\r\n\r\n* Update ffi/capi/src/fixed_decimal.rs\r\n\r\nCo-authored-by: Manish Goregaokar <manishsmail@gmail.com>\r\n\r\n* Address feedback\r\n\r\n* Fix lint and clippy\r\n\r\n* Cleanup docs\r\n\r\nCo-authored-by: Manish Goregaokar <manishsmail@gmail.com>",
          "timestamp": "2021-06-02T15:10:32-07:00",
          "tree_id": "f7a839085ccffcf7fa439de47807025a7bae00d2",
          "url": "https://github.com/unicode-org/icu4x/commit/a7d087c9831e9135acb235e4fc46fd6c3596452d"
        },
        "date": 1622672395199,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 34282,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20662,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13242,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8931,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9016,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "58569820+nordzilla@users.noreply.github.com",
            "name": "Erik Nordin",
            "username": "nordzilla"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c9b8b626f5b8ef58448e6b695a4473ce2b172168",
          "message": "Use TinyStr8 for time-zone variant identifiers (#750)\n\n* Use TinyStr8 for time-zone variants\r\n\r\n- Update `TimeZoneFormatsV1.region_format_variants` from `str` to\r\n  `TinyStr8`.\r\n- Update `MetaZoneSpecificNamesV1` key form `str` to `TinyStr8`.\r\n- Update `map_access` macro to take key types of `str` or `TinyStr8`.\r\n\r\nThe `TinyStr8` impl seems to serialize the same as the `str` impl (for\r\nJSON), so no changes are expected in the test data.\r\n\r\nI did run `cargo make testdata` to be certain.\r\n\r\n* Fix clippy warnings\r\n\r\n* Respond to feedback from zbraniecki",
          "timestamp": "2021-06-02T15:34:58-07:00",
          "tree_id": "2f4b513adc953db1f28f22cc37878638268cdbb5",
          "url": "https://github.com/unicode-org/icu4x/commit/c9b8b626f5b8ef58448e6b695a4473ce2b172168"
        },
        "date": 1622673842651,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 34282,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20662,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13242,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8931,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9016,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "manishsmail@gmail.com",
            "name": "Manish Goregaokar",
            "username": "Manishearth"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "823c497bc9854ceae5f20d46890117d76aea9af3",
          "message": "Add quick-and-dirty static data provider for WASM testing (#759)\n\n* Add quick-and-dirty static data provider for WASM testing\r\n\r\n* small amount of docs\r\n\r\n* Review fixes\r\n\r\n* ci fixes\r\n\r\n* more ci",
          "timestamp": "2021-06-03T17:20:50-07:00",
          "tree_id": "015200164d516fabb81310fcfb970afce5188874",
          "url": "https://github.com/unicode-org/icu4x/commit/823c497bc9854ceae5f20d46890117d76aea9af3"
        },
        "date": 1622766595780,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 34282,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20662,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13242,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8931,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9016,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sffc@google.com",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dc8e5416de0febccbb9c09971bb52111c45f022e",
          "message": "Migrate DataPayload to Yoke (#745)\n\n- Adds new DataMarker trait and migrates all data structs to it",
          "timestamp": "2021-06-04T15:41:37-05:00",
          "tree_id": "e94e9f15867212d4092e72ef18064582bab92166",
          "url": "https://github.com/unicode-org/icu4x/commit/dc8e5416de0febccbb9c09971bb52111c45f022e"
        },
        "date": 1622839844524,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 34549,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20662,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13242,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8931,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9016,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "manishsmail@gmail.com",
            "name": "Manish Goregaokar",
            "username": "Manishearth"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9ec4ae2608e9095313acb56ca404c793581d7ba4",
          "message": "Add Yoke::new_always_owned (#762)\n\n* Add Yoke::new_always_owned\r\n\r\n* lint",
          "timestamp": "2021-06-04T13:46:19-07:00",
          "tree_id": "e1b00211baeb42f529189e9bb64420f16069b399",
          "url": "https://github.com/unicode-org/icu4x/commit/9ec4ae2608e9095313acb56ca404c793581d7ba4"
        },
        "date": 1622840192479,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 34549,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20662,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13242,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8931,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9016,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "manishsmail@gmail.com",
            "name": "Manish Goregaokar",
            "username": "Manishearth"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3420be93fb29c6adf7c21e17f1c2eae8beaf51aa",
          "message": "Switch DataPayload::Owned over to using Yoke::new_always_owned (#765)\n\n* Switch DataPayload::Owned over to using Yoke::new_always_owned\n\n* lint",
          "timestamp": "2021-06-04T15:54:08-07:00",
          "tree_id": "6519e2a4b76a53771d6cb784715bd2ff0164265f",
          "url": "https://github.com/unicode-org/icu4x/commit/3420be93fb29c6adf7c21e17f1c2eae8beaf51aa"
        },
        "date": 1622847813251,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 34549,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20662,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13242,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8931,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9016,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dminor@mozilla.com",
            "name": "Dan Minor",
            "username": "dminor"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ffd520f415d7cb58d88401641b9f55c421c5d845",
          "message": "Add canonicalize method to LocaleCanonicalizer (#747)\n\nAdd canonicalize method to LocaleCanonicalizer",
          "timestamp": "2021-06-07T15:13:17-04:00",
          "tree_id": "b264324a40acf3466d7a0d9d07e1c4e8f87dfe6d",
          "url": "https://github.com/unicode-org/icu4x/commit/ffd520f415d7cb58d88401641b9f55c421c5d845"
        },
        "date": 1623093843083,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 34549,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20662,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13242,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8931,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9016,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dminor@mozilla.com",
            "name": "Dan Minor",
            "username": "dminor"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6796b23271037d413a6b8706262cb68a9a7a3f76",
          "message": "Add icu4x_locale_tostring and example for locale (#764)\n\n* Fix some trailing whitespace\r\n\r\n* Add icu4x_locale_tostring and example for locale\r\n\r\nThe example will be expanded to demonstrate locale canonicalization as\r\nwell.\r\n\r\nPartial fix for #757.",
          "timestamp": "2021-06-07T23:12:03-07:00",
          "tree_id": "fce991c25e938c96f3015c3ec4fddf22d96bcfa8",
          "url": "https://github.com/unicode-org/icu4x/commit/6796b23271037d413a6b8706262cb68a9a7a3f76"
        },
        "date": 1623133336034,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 34549,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20662,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13242,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8931,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9016,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shadaj@users.noreply.github.com",
            "name": "Shadaj Laddad",
            "username": "shadaj"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "25b82a196e7f5cb77a951509e67233f48388064b",
          "message": "Add logic for parsing structs into JS values with RTTI definitions (#755)\n\n* Setup RTTI and add example\r\n\r\n* Move WASM example under FFI folder\r\n\r\n* Run cargo fmt\r\n\r\n* Set up simple WASM tests\r\n\r\n* Set up CI for WASM tests\r\n\r\n* Install the nightly toolchain\r\n\r\n* Add step to install WASM tools\r\n\r\n* Install NPM dependencies before running tests\r\n\r\n* Fix indentation in package.json\r\n\r\n* Address feedback\r\n\r\n* Run cargo fmt\r\n\r\n* Remove multiply_pow10 detailed error and backport RTTI fixes\r\n\r\n* Throw an error instead of returning a boolean",
          "timestamp": "2021-06-08T13:59:35-07:00",
          "tree_id": "1d8ebfc547bd5e35b7c44de276c3a09c8a927b48",
          "url": "https://github.com/unicode-org/icu4x/commit/25b82a196e7f5cb77a951509e67233f48388064b"
        },
        "date": 1623186547740,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 34549,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20662,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13242,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8931,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9016,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "manishsmail@gmail.com",
            "name": "Manish Goregaokar",
            "username": "Manishearth"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2a47704e5e3d8fd276de2a530feceb43e74d5a61",
          "message": "Switch static data provider to using bincode to reduce heap footprint (#775)",
          "timestamp": "2021-06-08T17:51:51-05:00",
          "tree_id": "c0f9f660e5e9b44caa1eaadcb6c7d34874d59c42",
          "url": "https://github.com/unicode-org/icu4x/commit/2a47704e5e3d8fd276de2a530feceb43e74d5a61"
        },
        "date": 1623193250181,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 34549,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20662,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13242,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8931,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9016,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zibi@braniecki.net",
            "name": "Zibi Braniecki",
            "username": "zbraniecki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "500e458fbb8d5f0295f5f2baf3b7af10f937cd21",
          "message": "Clarify `top level` in testdata README (#773)\n\n* Clarify `top level` in testdata README\r\n\r\n* Match lib.rs with README",
          "timestamp": "2021-06-08T17:24:07-07:00",
          "tree_id": "53c70b71af41aff3dba5f5dfb90519354efef8a7",
          "url": "https://github.com/unicode-org/icu4x/commit/500e458fbb8d5f0295f5f2baf3b7af10f937cd21"
        },
        "date": 1623198817696,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 34549,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20662,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13242,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8931,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9016,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "manishsmail@gmail.com",
            "name": "Manish Goregaokar",
            "username": "Manishearth"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fe95051ddc98e77147ff3d48e2fe763ee059167e",
          "message": "Add basic C++ API for PluralRules and FixedDecimal (#768)\n\n* Add basic C++ bindings for PluralRules\r\n\r\n* review comments\r\n\r\n* Add FixedDecimalFormat\r\n\r\n* + fixeddecimal test\r\n\r\n* improve organization of makefile\r\n\r\n* + const noexcept\r\n\r\n* Add Locale::ToString\r\n\r\n* include locale tests\r\n\r\n* // namespace icu4x\r\n\r\n* using\r\n\r\n* writeable_utils.h\r\n\r\n* WriteableFromString\r\n\r\n* deindent namespaces\r\n\r\n* rm inline\r\n\r\n* run clang-format\r\n\r\n* invert error checks\r\n\r\n* include utility\r\n\r\n* rename fixed decimal ctor argument\r\n\r\n* Add comments about fat pointers",
          "timestamp": "2021-06-09T10:14:34-07:00",
          "tree_id": "8c2610adf7f08b22a1b7427d5e72405e906abfd2",
          "url": "https://github.com/unicode-org/icu4x/commit/fe95051ddc98e77147ff3d48e2fe763ee059167e"
        },
        "date": 1623259466702,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 34549,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20662,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13242,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8931,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9016,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shadaj@users.noreply.github.com",
            "name": "Shadaj Laddad",
            "username": "shadaj"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "da5bfbfdfa8dc7946530ec3ec97b365e1ab627c7",
          "message": "Add support for Locale, StaticDataProvider, and FixedDecimalFormat to the WASM FFI (#770)",
          "timestamp": "2021-06-09T18:04:39-05:00",
          "tree_id": "5461df7510ffed138a424199b10721105ad8eb7c",
          "url": "https://github.com/unicode-org/icu4x/commit/da5bfbfdfa8dc7946530ec3ec97b365e1ab627c7"
        },
        "date": 1623280767464,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 34549,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20662,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13242,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8931,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9016,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "manishsmail@gmail.com",
            "name": "Manish Goregaokar",
            "username": "Manishearth"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d8af2a93578bfa44027f540b38d92b9435e52957",
          "message": "Fix links in docs (#786)\n\n* Fix links in docs\r\n\r\n* fix fixeddecimal",
          "timestamp": "2021-06-10T06:49:50-07:00",
          "tree_id": "47494dd555f1ff2454c97d4a7f0dc8f23a432ed0",
          "url": "https://github.com/unicode-org/icu4x/commit/d8af2a93578bfa44027f540b38d92b9435e52957"
        },
        "date": 1623333636372,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 34549,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20662,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13242,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8931,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9016,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aethanyc@gmail.com",
            "name": "Ting-Yu Lin",
            "username": "aethanyc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fb95cfe3d62d718fdb02e5209fd514394e6958b9",
          "message": "Simplify get_linebreak_property_utf32_with_rule() (#777)\n\n* Remove unused ja_zh parameter\r\n\r\n* Simplify get_linebreak_property_utf32_with_rule()\r\n\r\nThis shouldn't change the behavior.",
          "timestamp": "2021-06-10T07:25:00-07:00",
          "tree_id": "65781f28f016f77f32aaf2733581ad2a6f7149f0",
          "url": "https://github.com/unicode-org/icu4x/commit/fb95cfe3d62d718fdb02e5209fd514394e6958b9"
        },
        "date": 1623335823263,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 34549,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20662,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13242,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8931,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9016,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "manishsmail@gmail.com",
            "name": "Manish Goregaokar",
            "username": "Manishearth"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "17385b2bafdc5d38a91d8460415ff31914b212ff",
          "message": "Refactor Makefile.toml and use it as the source of truth for (almost) all CI (#783)\n\n* Split Makefile into smaller files\r\n\r\n* Add a tidy task for non-fmt/lint checks\r\n\r\n* Move test-ffi into tests.toml\r\n\r\n* Move all CI jobs to Makefile.toml, refactor Makefile.toml\r\n\r\n* build -> check\r\n\r\n* install cargo make in ci\r\n\r\n* Fix error\r\n\r\n* fix CONTRIBUTING\r\n\r\n* tyop\r\n\r\n* Fix makefile\r\n\r\n* fix\r\n\r\n* fix wasm, dirs\r\n\r\n* switch to duckscript\r\n\r\n* Cache cargo-make\r\n\r\n* fix duckscript\r\n\r\n* Fix syntax\r\n\r\n* cache cargo-readme too\r\n\r\n* better action name\r\n\r\n* don't double-install\r\n\r\n* improve cargo tidy\r\n\r\n* include exes\r\n\r\n* syntax\r\n\r\n* fix npm duckscript\r\n\r\n* rm tidy-minus-fmt",
          "timestamp": "2021-06-10T07:23:44-07:00",
          "tree_id": "dfcb211beda43212488ec05ae8b23eb2111dca91",
          "url": "https://github.com/unicode-org/icu4x/commit/17385b2bafdc5d38a91d8460415ff31914b212ff"
        },
        "date": 1623335850421,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 34549,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20662,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13242,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8931,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9016,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sffc@google.com",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "61b7083ff2681fc7cdc847859b63b088e23228e9",
          "message": "Add sections on zero-copy and exotic types to style guide (#699)\n\n* Add sections on zero-copy and exotic types to style guide\r\n\r\n* Review feedback",
          "timestamp": "2021-06-10T07:26:08-07:00",
          "tree_id": "a695f509967dfc58e9dc7e16568f900ac65259d7",
          "url": "https://github.com/unicode-org/icu4x/commit/61b7083ff2681fc7cdc847859b63b088e23228e9"
        },
        "date": 1623335973995,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 34549,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20662,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13242,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8931,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9016,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dminor@mozilla.com",
            "name": "Dan Minor",
            "username": "dminor"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "acf388649a30f8a2c3d39fa764a36c10996c7482",
          "message": "Add C FFI for LocaleCanonicalizer (#772)\n\n* Specify lifetimes separately for LocaleCanonicalizer\r\n\r\n* Add LocaleCanonicalizer FFI\r\n\r\n* Address review feedback",
          "timestamp": "2021-06-10T13:31:17-04:00",
          "tree_id": "e54207872ab373372038a84ad95639d46cd65abb",
          "url": "https://github.com/unicode-org/icu4x/commit/acf388649a30f8a2c3d39fa764a36c10996c7482"
        },
        "date": 1623346871642,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 34549,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20662,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13242,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8931,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9016,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zibi@braniecki.net",
            "name": "Zibi Braniecki",
            "username": "zbraniecki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "feb1add946d05c98b8e6d57c4d5bca7311ddd6bd",
          "message": "Split DateTimeFormat keys (#774)",
          "timestamp": "2021-06-11T12:28:30-07:00",
          "tree_id": "1e8c5b30d302d2132f7a3e98b935e24a1cceeae9",
          "url": "https://github.com/unicode-org/icu4x/commit/feb1add946d05c98b8e6d57c4d5bca7311ddd6bd"
        },
        "date": 1623440305774,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 43558,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20662,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13242,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8931,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9016,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "58569820+nordzilla@users.noreply.github.com",
            "name": "Erik Nordin",
            "username": "nordzilla"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "299db8ffe4b7328727a36a78630a900bc33cd3dd",
          "message": "Add PluralRules::categories() function. (#789)\n\n* Add PluralRules::categories() function.\r\n\r\nThe categories() function returns an iterator over each\r\nPluralCategory supported by a PluralRules object that\r\nhas been created with a given LanguageIdentifier and\r\nPluralRuleType.\r\n\r\nThe categories are returned in alphabetical order.\r\nThis is what is expected by browsers, and the same order\r\nthat ICU4C returns.\r\n\r\n* Satisfy clippy\r\n\r\n* Respond to feedback from zbraniecki\r\n\r\n* Small code cleanup\r\n\r\n* Make PluralRules JSON test data lowercase\r\n\r\n* Update categories() example\r\n\r\n* Update categories() doc test to use test data",
          "timestamp": "2021-06-14T11:23:31-07:00",
          "tree_id": "812995efc4ba0fdddbdc69ad93d6a24e3a5d8dd9",
          "url": "https://github.com/unicode-org/icu4x/commit/299db8ffe4b7328727a36a78630a900bc33cd3dd"
        },
        "date": 1623695860247,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 43558,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20662,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13242,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8931,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9016,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sffc@google.com",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a0d4cf41951316c7f1c8733e20e8577fcd7e3f51",
          "message": "Change link to good first issues in CONTRIBUTING.md (#793)",
          "timestamp": "2021-06-15T14:20:49-05:00",
          "tree_id": "eddac0795580cbeb18250e822aff0474ff5e7bd9",
          "url": "https://github.com/unicode-org/icu4x/commit/a0d4cf41951316c7f1c8733e20e8577fcd7e3f51"
        },
        "date": 1623785379061,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 43558,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20662,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13242,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8931,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9016,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "58569820+nordzilla@users.noreply.github.com",
            "name": "Erik Nordin",
            "username": "nordzilla"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d4afff68a0314f0ef6535460740a459fbef9f0c3",
          "message": "Expose PluralOperands::from_str() over capi FFI (#795)\n\n* Expose PluralOperands::from_str() over capi\r\n\r\n- Add new struct for ICU4XCreatePluralOperandsResult\r\n- Add new function for icu4x_plural_operands_create()\r\n\r\n* Clean up From trait impls\r\n\r\n* Remove irrelevant todo comment\r\n\r\n* Remove From impl for ICU4XCreatePluralOperandsResult\r\n\r\n* Be explicit about failure case (not using Default)\r\n\r\n* Re-add check for cat1's category",
          "timestamp": "2021-06-15T14:07:25-07:00",
          "tree_id": "1d8f261dafa39fdd3c228ca15fd4d5e2bb8f3fe9",
          "url": "https://github.com/unicode-org/icu4x/commit/d4afff68a0314f0ef6535460740a459fbef9f0c3"
        },
        "date": 1623791864950,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 43558,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20662,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13242,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8931,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9016,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "58569820+nordzilla@users.noreply.github.com",
            "name": "Erik Nordin",
            "username": "nordzilla"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1766db71feddc10e1d84b4c66ff40b8cce4c91c4",
          "message": "Expose PluralRules::categories() over capi FFI (#796)\n\n* Expose PluralRules::categories() over capi FFI\r\n\r\n- Add new struct ICU4XPluralCategories to hold whether each category has\r\n  rules or not for this PluralRules object.\r\n- Add new function icu4x_plural_rules_categories()\r\n\r\n* Remove FromIterator impl since its used only once",
          "timestamp": "2021-06-15T16:26:01-07:00",
          "tree_id": "c7813a383f94c7e03a691d7de98c64aed9e84918",
          "url": "https://github.com/unicode-org/icu4x/commit/1766db71feddc10e1d84b4c66ff40b8cce4c91c4"
        },
        "date": 1623800072531,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 43558,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20662,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13242,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8931,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9016,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "58569820+nordzilla@users.noreply.github.com",
            "name": "Erik Nordin",
            "username": "nordzilla"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6d4e81287751cc93c5155dd8304efd8b6257230f",
          "message": "Fix bug evaluating NotEq on RangeList (#808)",
          "timestamp": "2021-06-16T16:17:03-07:00",
          "tree_id": "f47c78c172c8fc58575633ab80dce753ae3b45fc",
          "url": "https://github.com/unicode-org/icu4x/commit/6d4e81287751cc93c5155dd8304efd8b6257230f"
        },
        "date": 1623885906504,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 43558,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20662,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13242,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8931,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9016,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shadaj@users.noreply.github.com",
            "name": "Shadaj Laddad",
            "username": "shadaj"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3885aae4eca500de67ba0a7887a1e1795111fe96",
          "message": "Add benchmarks for the WASM FFI layer (#784)\n\n* Add benchmarks for the WASM FFI layer\r\n\r\nAlso fixes FixedDecimalFormat to consider the options parameter\r\n\r\n* Add NPM task for running all benchmarks",
          "timestamp": "2021-06-17T10:15:07-07:00",
          "tree_id": "81c73e6ec4936f00595d9bbeaab4232fad02a3e6",
          "url": "https://github.com/unicode-org/icu4x/commit/3885aae4eca500de67ba0a7887a1e1795111fe96"
        },
        "date": 1623950629627,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 43558,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20662,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13242,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8931,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9016,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mgaudet+github@ualberta.ca",
            "name": "Matthew Gaudet",
            "username": "mgaudet"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a663155efc52965cda788be1960b28881308b3f5",
          "message": "Make FsDataProvider data generation command lines copy-paste-executable (#799)",
          "timestamp": "2021-06-17T12:16:42-05:00",
          "tree_id": "f5aa6211c98b0421632847dd47f98feab225055d",
          "url": "https://github.com/unicode-org/icu4x/commit/a663155efc52965cda788be1960b28881308b3f5"
        },
        "date": 1623950785299,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 43558,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20662,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13242,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8931,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9016,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "manishsmail@gmail.com",
            "name": "Manish Goregaokar",
            "username": "Manishearth"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7636296239e52b8573bf21a1bad2e3993fbf3f00",
          "message": "Add Sphinx docs for C++ (#806)\n\n* Set up Sphinx doc dir\r\n\r\n* Update license check for RST comments\r\n\r\n* Add basic docs for C++ FFI\r\n\r\n* Add cppdocs CI run\r\n\r\n* Address review comments\r\n\r\n* Fix `cargo make tidy`",
          "timestamp": "2021-06-17T10:22:59-07:00",
          "tree_id": "3f78b4b509bcbb51590204f7308dce1280a4861b",
          "url": "https://github.com/unicode-org/icu4x/commit/7636296239e52b8573bf21a1bad2e3993fbf3f00"
        },
        "date": 1623951121531,
        "tool": "ndjson",
        "benches": [
          {
            "name": "icu_datetime/work_log – Total Heap Allocations",
            "value": 43558,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at Global Memory Max",
            "value": 20662,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_datetime/work_log – Heap at End of Program Execution",
            "value": 1112,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Total Heap Allocations",
            "value": 590,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at Global Memory Max",
            "value": 309,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/syntatically_canonicalize_locales – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Total Heap Allocations",
            "value": 1299,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at Global Memory Max",
            "value": 706,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_locid/filter_langids – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Total Heap Allocations",
            "value": 13242,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at Global Memory Max",
            "value": 8931,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/unread_emails – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Total Heap Allocations",
            "value": 14303,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at Global Memory Max",
            "value": 9016,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_plurals/elevator_floors – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Total Heap Allocations",
            "value": 976,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at Global Memory Max",
            "value": 388,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "icu_uniset/unicode_bmp_blocks_selector – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Total Heap Allocations",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at Global Memory Max",
            "value": 15,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "fixed_decimal/permyriad – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Total Heap Allocations",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at Global Memory Max",
            "value": 11,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "writeable/writeable_message – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Total Heap Allocations",
            "value": 448,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at Global Memory Max",
            "value": 256,
            "unit": "bytes",
            "biggerIsBetter": false
          },
          {
            "name": "litemap/language_names_lite_map – Heap at End of Program Execution",
            "value": 0,
            "unit": "bytes",
            "biggerIsBetter": false
          }
        ]
      }
    ]
  }
}