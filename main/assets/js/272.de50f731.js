(window.webpackJsonp=window.webpackJsonp||[]).push([[272],{710:function(t,e,r){"use strict";r.r(e);var a=r(1),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"upgrade"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#upgrade"}},[t._v("#")]),t._v(" "),r("code",[t._v("upgrade")])]),t._v(" "),r("h2",{attrs:{id:"abstract"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[t._v("#")]),t._v(" Abstract")]),t._v(" "),r("p",[r("code",[t._v("x/upgrade")]),t._v(" is an implementation of a Cosmos SDK module that facilitates smoothly\nupgrading a live Cosmos chain to a new (breaking) software version. It accomplishes this by\nproviding a "),r("code",[t._v("BeginBlocker")]),t._v(" hook that prevents the blockchain state machine from\nproceeding once a pre-defined upgrade block height has been reached.")]),t._v(" "),r("p",[t._v("The module does not prescribe anything regarding how governance decides to do an\nupgrade, but just the mechanism for coordinating the upgrade safely. Without software\nsupport for upgrades, upgrading a live chain is risky because all of the validators\nneed to pause their state machines at exactly the same point in the process. If\nthis is not done correctly, there can be state inconsistencies which are hard to\nrecover from.")]),t._v(" "),r("ol",[r("li",[r("strong",[r("RouterLink",{attrs:{to:"/modules/upgrade/01_concepts.html"}},[t._v("Concepts")])],1)]),t._v(" "),r("li",[r("strong",[r("RouterLink",{attrs:{to:"/modules/upgrade/02_state.html"}},[t._v("State")])],1)]),t._v(" "),r("li",[r("strong",[r("RouterLink",{attrs:{to:"/modules/upgrade/03_events.html"}},[t._v("Events")])],1)]),t._v(" "),r("li",[r("strong",[r("RouterLink",{attrs:{to:"/modules/upgrade/04_client.html"}},[t._v("Client")])],1),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/modules/upgrade/04_client.html#cli"}},[t._v("CLI")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/modules/upgrade/04_client.html#rest"}},[t._v("REST")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/modules/upgrade/04_client.html#grpc"}},[t._v("gRPC")])],1)])]),t._v(" "),r("li",[r("strong",[r("RouterLink",{attrs:{to:"/modules/upgrade/05_resources.html"}},[t._v("Resources")])],1)])])])}),[],!1,null,null,null);e.default=o.exports}}]);