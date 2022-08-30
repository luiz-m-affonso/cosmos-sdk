(window.webpackJsonp=window.webpackJsonp||[]).push([[282],{698:function(e,t,s){"use strict";s.r(t);var o=s(1),i=Object(o.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"specification-of-specifications"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#specification-of-specifications"}},[e._v("#")]),e._v(" Specification of Specifications")]),e._v(" "),s("p",[e._v("This file intends to outline the common structure for specifications within\nthis directory.")]),e._v(" "),s("h2",{attrs:{id:"tense"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tense"}},[e._v("#")]),e._v(" Tense")]),e._v(" "),s("p",[e._v("For consistency, specs should be written in passive present tense.")]),e._v(" "),s("h2",{attrs:{id:"pseudo-code"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pseudo-code"}},[e._v("#")]),e._v(" Pseudo-Code")]),e._v(" "),s("p",[e._v("Generally, pseudo-code should be minimized throughout the spec. Often, simple\nbulleted-lists which describe a function's operations are sufficient and should\nbe considered preferable. In certain instances, due to the complex nature of\nthe functionality being described pseudo-code may the most suitable form of\nspecification. In these cases use of pseudo-code is permissible, but should be\npresented in a concise manner, ideally restricted to only the complex\nelement as a part of a larger description.")]),e._v(" "),s("h2",{attrs:{id:"common-layout"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#common-layout"}},[e._v("#")]),e._v(" Common Layout")]),e._v(" "),s("p",[e._v("The following generalized file structure should be used to breakdown\nspecifications for modules. With the exception of README.md, "),s("code",[e._v("XX")]),e._v(" at the\nbeginning of the file name should be replaced with a number to indicate\ndocument flow (ex. read "),s("code",[e._v("01_state.md")]),e._v(" before "),s("code",[e._v("02_state_transitions.md")]),e._v("). The\nfollowing list is nonbinding and all files are optional.")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("README.md")]),e._v(" - overview of the module")]),e._v(" "),s("li",[s("code",[e._v("XX_concepts.md")]),e._v(" - describe specialized concepts and definitions used throughout the spec")]),e._v(" "),s("li",[s("code",[e._v("XX_state.md")]),e._v(" - specify and describe structures expected to marshalled into the store, and their keys")]),e._v(" "),s("li",[s("code",[e._v("XX_state_transitions.md")]),e._v(" - standard state transition operations triggered by hooks, messages, etc.")]),e._v(" "),s("li",[s("code",[e._v("XX_messages.md")]),e._v(" - specify message structure(s) and expected state machine behaviour(s)")]),e._v(" "),s("li",[s("code",[e._v("XX_begin_block.md")]),e._v(" - specify any begin-block operations")]),e._v(" "),s("li",[s("code",[e._v("XX_end_block.md")]),e._v(" - specify any end-block operations")]),e._v(" "),s("li",[s("code",[e._v("XX_hooks.md")]),e._v(" - describe available hooks to be called by/from this module")]),e._v(" "),s("li",[s("code",[e._v("XX_events.md")]),e._v(" - list and describe event tags used")]),e._v(" "),s("li",[s("code",[e._v("XX_client.md")]),e._v(" - list and describe CLI commands and gRPC and REST endpoints")]),e._v(" "),s("li",[s("code",[e._v("XX_params.md")]),e._v(" - list all module parameters, their types (in JSON) and examples")]),e._v(" "),s("li",[s("code",[e._v("XX_future_improvements.md")]),e._v(" - describe future improvements of this module")]),e._v(" "),s("li",[s("code",[e._v("XX_tests.md")]),e._v(" - acceptance tests")]),e._v(" "),s("li",[s("code",[e._v("XX_appendix.md")]),e._v(" - supplementary details referenced elsewhere within the spec")])]),e._v(" "),s("h3",{attrs:{id:"notation-for-key-value-mapping"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#notation-for-key-value-mapping"}},[e._v("#")]),e._v(" Notation for key-value mapping")]),e._v(" "),s("p",[e._v("Within "),s("code",[e._v("state.md")]),e._v(" the following notation "),s("code",[e._v("->")]),e._v(" should be used to describe key to\nvalue mapping:")]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"text",base64:"a2V5IC0mZ3Q7IHZhbHVlCg=="}}),e._v(" "),s("p",[e._v("to represent byte concatenation the "),s("code",[e._v("|")]),e._v(" may be used. In addition, encoding\ntype may be specified, for example:")]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"text",base64:"MHgwMCB8IGFkZHJlc3NCeXRlcyB8IGFkZHJlc3MyQnl0ZXMgLSZndDsgYW1pbm8odmFsdWVfb2JqZWN0KQo="}}),e._v(" "),s("p",[e._v("Additionally, index mappings may be specified by mapping to the "),s("code",[e._v("nil")]),e._v(" value, for example:")]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"text",base64:"MHgwMSB8IGFkZHJlc3MyQnl0ZXMgfCBhZGRyZXNzQnl0ZXMgLSZndDsgbmlsCg=="}})],1)}),[],!1,null,null,null);t.default=i.exports}}]);