(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{735:function(e,o,t){"use strict";t.r(o);var i=t(1),s=Object(i.a)({},(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"recommended-folder-structure"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#recommended-folder-structure"}},[e._v("#")]),e._v(" Recommended Folder Structure")]),e._v(" "),t("p",{attrs:{synopsis:""}},[e._v("This document outlines the recommended structure of Cosmos SDK modules. These ideas are meant to be applied as suggestions. Application developers are encouraged to improve upon and contribute to module structure and development design.")]),e._v(" "),t("h2",{attrs:{id:"structure"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#structure"}},[e._v("#")]),e._v(" Structure")]),e._v(" "),t("p",[e._v("A typical Cosmos SDK module can be structured as follows:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"cHJvdG8K4pSU4pSA4pSAIHtwcm9qZWN0X25hbWV9CiDCoMKgIOKUlOKUgOKUgCB7bW9kdWxlX25hbWV9CiDCoMKgICAgICDilJTilIDilIAge3Byb3RvX3ZlcnNpb259CiDCoMKgICDCoMKgICAgICDilJzilIDilIAge21vZHVsZV9uYW1lfS5wcm90bwogwqDCoCAgwqDCoCAgICAg4pSc4pSA4pSAIGV2ZW50LnByb3RvCiDCoMKgICDCoMKgICAgICDilJzilIDilIAgZ2VuZXNpcy5wcm90bwogwqDCoCAgwqDCoCAgICAg4pSc4pSA4pSAIHF1ZXJ5LnByb3RvCiDCoMKgICDCoMKgICAgICDilJTilIDilIAgdHgucHJvdG8K"}}),e._v(" "),t("ul",[t("li",[t("code",[e._v("{module_name}.proto")]),e._v(": The module's common message type definitions.")]),e._v(" "),t("li",[t("code",[e._v("event.proto")]),e._v(": The module's message type definitions related to events.")]),e._v(" "),t("li",[t("code",[e._v("genesis.proto")]),e._v(": The module's message type definitions related to genesis state.")]),e._v(" "),t("li",[t("code",[e._v("query.proto")]),e._v(": The module's Query service and related message type definitions.")]),e._v(" "),t("li",[t("code",[e._v("tx.proto")]),e._v(": The module's Msg service and related message type definitions.")])]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"eC97bW9kdWxlX25hbWV9CuKUnOKUgOKUgCBjbGllbnQK4pSCwqDCoCDilJzilIDilIAgY2xpCuKUgsKgwqAg4pSCICAg4pSc4pSA4pSAIHF1ZXJ5LmdvCuKUgsKgwqAg4pSCwqDCoCDilJTilIDilIAgdHguZ28K4pSCwqDCoCDilJTilIDilIAgdGVzdHV0aWwK4pSCwqDCoCAgICAg4pSc4pSA4pSAIGNsaV90ZXN0LmdvCuKUgsKgwqAgICAgIOKUlOKUgOKUgCBzdWl0ZS5nbwrilJzilIDilIAgZXhwb3J0ZWQK4pSCwqDCoCDilJTilIDilIAgZXhwb3J0ZWQuZ28K4pSc4pSA4pSAIGtlZXBlcgrilILCoMKgIOKUnOKUgOKUgCBnZW5lc2lzLmdvCuKUgsKgwqAg4pSc4pSA4pSAIGdycGNfcXVlcnkuZ28K4pSCwqDCoCDilJzilIDilIAgaG9va3MuZ28K4pSCwqDCoCDilJzilIDilIAgaW52YXJpYW50cy5nbwrilILCoMKgIOKUnOKUgOKUgCBrZWVwZXIuZ28K4pSCwqDCoCDilJzilIDilIAga2V5cy5nbwrilILCoMKgIOKUnOKUgOKUgCBtc2dfc2VydmVyLmdvCuKUgsKgwqAg4pSU4pSA4pSAIHF1ZXJpZXIuZ28K4pSc4pSA4pSAIG1vZHVsZQrilILCoMKgIOKUlOKUgOKUgCBtb2R1bGUuZ28K4pSc4pSA4pSAIHNpbXVsYXRpb24K4pSCwqDCoCDilJzilIDilIAgZGVjb2Rlci5nbwrilILCoMKgIOKUnOKUgOKUgCBnZW5lc2lzLmdvCuKUgsKgwqAg4pSc4pSA4pSAIG9wZXJhdGlvbnMuZ28K4pSCwqDCoCDilJTilIDilIAgcGFyYW1zLmdvCuKUnOKUgOKUgCBzcGVjCuKUgsKgwqAg4pSc4pSA4pSAIDAxX2NvbmNlcHRzLm1kCuKUgsKgwqAg4pSc4pSA4pSAIDAyX3N0YXRlLm1kCuKUgsKgwqAg4pSc4pSA4pSAIDAzX21lc3NhZ2VzLm1kCuKUgsKgwqAg4pSU4pSA4pSAIDA0X2V2ZW50cy5tZArilJzilIDilIAge21vZHVsZV9uYW1lfS5wYi5nbwrilJzilIDilIAgYWJjaS5nbwrilJzilIDilIAgY29kZWMuZ28K4pSc4pSA4pSAIGVycm9ycy5nbwrilJzilIDilIAgZXZlbnRzLmdvCuKUnOKUgOKUgCBldmVudHMucGIuZ28K4pSc4pSA4pSAIGV4cGVjdGVkX2tlZXBlcnMuZ28K4pSc4pSA4pSAIGdlbmVzaXMuZ28K4pSc4pSA4pSAIGdlbmVzaXMucGIuZ28K4pSc4pSA4pSAIGtleXMuZ28K4pSc4pSA4pSAIG1zZ3MuZ28K4pSc4pSA4pSAIHBhcmFtcy5nbwrilJzilIDilIAgcXVlcnkucGIuZ28K4pSU4pSA4pSAIHR4LnBiLmdvCg=="}}),e._v(" "),t("ul",[t("li",[t("code",[e._v("client/")]),e._v(": The module's CLI client functionality implementation and the module's integration testing suite.")]),e._v(" "),t("li",[t("code",[e._v("exported/")]),e._v(": The module's exported types - typically interface types. If a module relies on keepers from another module, it is expected to receive the keepers as interface contracts through the "),t("code",[e._v("expected_keepers.go")]),e._v(" file (see below) in order to avoid a direct dependency on the module implementing the keepers. However, these interface contracts can define methods that operate on and/or return types that are specific to the module that is implementing the keepers and this is where "),t("code",[e._v("exported/")]),e._v(" comes into play. The interface types that are defined in "),t("code",[e._v("exported/")]),e._v(" use canonical types, allowing for the module to receive the keepers as interface contracts through the "),t("code",[e._v("expected_keepers.go")]),e._v(" file. This pattern allows for code to remain DRY and also alleviates import cycle chaos.")]),e._v(" "),t("li",[t("code",[e._v("keeper/")]),e._v(": The module's "),t("code",[e._v("Keeper")]),e._v(" and "),t("code",[e._v("MsgServer")]),e._v(" implementation.")]),e._v(" "),t("li",[t("code",[e._v("module/")]),e._v(": The module's "),t("code",[e._v("AppModule")]),e._v(" and "),t("code",[e._v("AppModuleBasic")]),e._v(" implementation.")]),e._v(" "),t("li",[t("code",[e._v("simulation/")]),e._v(": The module's "),t("RouterLink",{attrs:{to:"/building-modules/simulator.html"}},[e._v("simulation")]),e._v(" package defines functions used by the blockchain simulator application ("),t("code",[e._v("simapp")]),e._v(").")],1),e._v(" "),t("li",[t("code",[e._v("spec/")]),e._v(": The module's specification documents outlining important concepts, state storage structure, and message and event type definitions.")]),e._v(" "),t("li",[e._v("The root directory includes type definitions for messages, events, and genesis state, including the type definitions generated by Protocol Buffers.\n"),t("ul",[t("li",[t("code",[e._v("abci.go")]),e._v(": The module's "),t("code",[e._v("BeginBlocker")]),e._v(" and "),t("code",[e._v("EndBlocker")]),e._v(" implementations (this file is only required if "),t("code",[e._v("BeginBlocker")]),e._v(" and/or "),t("code",[e._v("EndBlocker")]),e._v(" need to be defined).")]),e._v(" "),t("li",[t("code",[e._v("codec.go")]),e._v(": The module's registry methods for interface types.")]),e._v(" "),t("li",[t("code",[e._v("errors.go")]),e._v(": The module's sentinel errors.")]),e._v(" "),t("li",[t("code",[e._v("events.go")]),e._v(": The module's event types and constructors.")]),e._v(" "),t("li",[t("code",[e._v("expected_keepers.go")]),e._v(": The module's "),t("RouterLink",{attrs:{to:"/building-modules/keeper.html#type-definition"}},[e._v("expected keeper")]),e._v(" interfaces.")],1),e._v(" "),t("li",[t("code",[e._v("genesis.go")]),e._v(": The module's genesis state methods and helper functions.")]),e._v(" "),t("li",[t("code",[e._v("keys.go")]),e._v(": The module's store keys and associated helper functions.")]),e._v(" "),t("li",[t("code",[e._v("msgs.go")]),e._v(": The module's message type definitions and associated methods.")]),e._v(" "),t("li",[t("code",[e._v("params.go")]),e._v(": The module's parameter type definitions and associated methods.")]),e._v(" "),t("li",[t("code",[e._v("*.pb.go")]),e._v(": The module's type definitions generated by Protocol Buffers (as defined in the respective "),t("code",[e._v("*.proto")]),e._v(" files above).")])])])]),e._v(" "),t("h2",{attrs:{hide:"",id:"next"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#next"}},[e._v("#")]),e._v(" Next")]),e._v(" "),t("p",{attrs:{hide:""}},[e._v("Learn about "),t("RouterLink",{attrs:{to:"/building-modules/errors.html"}},[e._v("Errors")])],1)],1)}),[],!1,null,null,null);o.default=s.exports}}]);