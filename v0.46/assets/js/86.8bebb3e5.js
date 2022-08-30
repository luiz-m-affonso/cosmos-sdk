(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{699:function(e,a,t){"use strict";t.r(a);var o=t(1),n=Object(o.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"adr-024-coin-metadata"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#adr-024-coin-metadata"}},[e._v("#")]),e._v(" ADR 024: Coin Metadata")]),e._v(" "),t("h2",{attrs:{id:"changelog"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),t("ul",[t("li",[e._v("05/19/2020: Initial draft")])]),e._v(" "),t("h2",{attrs:{id:"status"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),t("p",[e._v("Proposed")]),e._v(" "),t("h2",{attrs:{id:"context"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),t("p",[e._v("Assets in the Cosmos SDK are represented via a "),t("code",[e._v("Coins")]),e._v(" type that consists of an "),t("code",[e._v("amount")]),e._v(" and a "),t("code",[e._v("denom")]),e._v(",\nwhere the "),t("code",[e._v("amount")]),e._v(" can be any arbitrarily large or small value. In addition, the Cosmos SDK uses an\naccount-based model where there are two types of primary accounts -- basic accounts and module accounts.\nAll account types have a set of balances that are composed of "),t("code",[e._v("Coins")]),e._v(". The "),t("code",[e._v("x/bank")]),e._v(" module keeps\ntrack of all balances for all accounts and also keeps track of the total supply of balances in an\napplication.")]),e._v(" "),t("p",[e._v("With regards to a balance "),t("code",[e._v("amount")]),e._v(", the Cosmos SDK assumes a static and fixed unit of denomination,\nregardless of the denomination itself. In other words, clients and apps built atop a Cosmos-SDK-based\nchain may choose to define and use arbitrary units of denomination to provide a richer UX, however, by\nthe time a tx or operation reaches the Cosmos SDK state machine, the "),t("code",[e._v("amount")]),e._v(" is treated as a single\nunit. For example, for the Cosmos Hub (Gaia), clients assume 1 ATOM = 10^6 uatom, and so all txs and\noperations in the Cosmos SDK work off of units of 10^6.")]),e._v(" "),t("p",[e._v("This clearly provides a poor and limited UX especially as interoperability of networks increases and\nas a result the total amount of asset types increases. We propose to have "),t("code",[e._v("x/bank")]),e._v(" additionally keep\ntrack of metadata per "),t("code",[e._v("denom")]),e._v(" in order to help clients, wallet providers, and explorers improve their\nUX and remove the requirement for making any assumptions on the unit of denomination.")]),e._v(" "),t("h2",{attrs:{id:"decision"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[e._v("#")]),e._v(" Decision")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("x/bank")]),e._v(" module will be updated to store and index metadata by "),t("code",[e._v("denom")]),e._v(', specifically the "base" or\nsmallest unit -- the unit the Cosmos SDK state-machine works with.')]),e._v(" "),t("p",[e._v("Metadata may also include a non-zero length list of denominations. Each entry contains the name of\nthe denomination "),t("code",[e._v("denom")]),e._v(", the exponent to the base and a list of aliases. An entry is to be\ninterpreted as "),t("code",[e._v("1 denom = 10^exponent base_denom")]),e._v(" (e.g. "),t("code",[e._v("1 ETH = 10^18 wei")]),e._v(" and "),t("code",[e._v("1 uatom = 10^0 uatom")]),e._v(").")]),e._v(" "),t("p",[e._v("There are two denominations that are of high importance for clients: the "),t("code",[e._v("base")]),e._v(", which is the smallest\npossible unit and the "),t("code",[e._v("display")]),e._v(", which is the unit that is commonly referred to in human communication\nand on exchanges. The values in those fields link to an entry in the list of denominations.")]),e._v(" "),t("p",[e._v("The list in "),t("code",[e._v("denom_units")]),e._v(" and the "),t("code",[e._v("display")]),e._v(" entry may be changed via governance.")]),e._v(" "),t("p",[e._v("As a result, we can define the type as follows:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"protobuf",base64:"bWVzc2FnZSBEZW5vbVVuaXQgewogIHN0cmluZyBkZW5vbSAgICA9IDE7CiAgdWludDMyIGV4cG9uZW50ID0gMjsgIAogIHJlcGVhdGVkIHN0cmluZyBhbGlhc2VzID0gMzsKfQoKbWVzc2FnZSBNZXRhZGF0YSB7CiAgc3RyaW5nIGRlc2NyaXB0aW9uID0gMTsKICByZXBlYXRlZCBEZW5vbVVuaXQgZGVub21fdW5pdHMgPSAyOwogIHN0cmluZyBiYXNlID0gMzsKICBzdHJpbmcgZGlzcGxheSA9IDQ7Cn0K"}}),e._v(" "),t("p",[e._v("As an example, the ATOM's metadata can be defined as follows:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewogICZxdW90O2Rlc2NyaXB0aW9uJnF1b3Q7OiAmcXVvdDtUaGUgbmF0aXZlIHN0YWtpbmcgdG9rZW4gb2YgdGhlIENvc21vcyBIdWIuJnF1b3Q7LAogICZxdW90O2Rlbm9tX3VuaXRzJnF1b3Q7OiBbCiAgICB7CiAgICAgICZxdW90O2Rlbm9tJnF1b3Q7OiAmcXVvdDt1YXRvbSZxdW90OywKICAgICAgJnF1b3Q7ZXhwb25lbnQmcXVvdDs6IDAsCiAgICAgICZxdW90O2FsaWFzZXMmcXVvdDs6IFsKICAgICAgICAmcXVvdDttaWNyb2F0b20mcXVvdDsKICAgICAgXSwKICAgIH0sCiAgICB7CiAgICAgICZxdW90O2Rlbm9tJnF1b3Q7OiAmcXVvdDttYXRvbSZxdW90OywKICAgICAgJnF1b3Q7ZXhwb25lbnQmcXVvdDs6IDMsCiAgICAgICZxdW90O2FsaWFzZXMmcXVvdDs6IFsKICAgICAgICAmcXVvdDttaWxsaWF0b20mcXVvdDsKICAgICAgXQogICAgfSwKICAgIHsKICAgICAgJnF1b3Q7ZGVub20mcXVvdDs6ICZxdW90O2F0b20mcXVvdDssCiAgICAgICZxdW90O2V4cG9uZW50JnF1b3Q7OiA2LAogICAgfQogIF0sCiAgJnF1b3Q7YmFzZSZxdW90OzogJnF1b3Q7dWF0b20mcXVvdDssCiAgJnF1b3Q7ZGlzcGxheSZxdW90OzogJnF1b3Q7YXRvbSZxdW90OywKfQo="}}),e._v(" "),t("p",[e._v("Given the above metadata, a client may infer the following things:")]),e._v(" "),t("ul",[t("li",[e._v("4.3atom = 4.3 * (10^6) = 4,300,000uatom")]),e._v(" "),t("li",[e._v('The string "atom" can be used as a display name in a list of tokens.')]),e._v(" "),t("li",[e._v("The balance 4300000 can be displayed as 4,300,000uatom or 4,300matom or 4.3atom.\nThe "),t("code",[e._v("display")]),e._v(" denomination 4.3atom is a good default if the authors of the client don't make\nan explicit decision to choose a different representation.")])]),e._v(" "),t("p",[e._v("A client should be able to query for metadata by denom both via the CLI and REST interfaces. In\naddition, we will add handlers to these interfaces to convert from any unit to another given unit,\nas the base framework for this already exists in the Cosmos SDK.")]),e._v(" "),t("p",[e._v("Finally, we need to ensure metadata exists in the "),t("code",[e._v("GenesisState")]),e._v(" of the "),t("code",[e._v("x/bank")]),e._v(" module which is also\nindexed by the base "),t("code",[e._v("denom")]),e._v(".")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBHZW5lc2lzU3RhdGUgc3RydWN0IHsKICBTZW5kRW5hYmxlZCAgIGJvb2wgICAgICAgIGBqc29uOiZxdW90O3NlbmRfZW5hYmxlZCZxdW90OyB5YW1sOiZxdW90O3NlbmRfZW5hYmxlZCZxdW90O2AKICBCYWxhbmNlcyAgICAgIFtdQmFsYW5jZSAgIGBqc29uOiZxdW90O2JhbGFuY2VzJnF1b3Q7IHlhbWw6JnF1b3Q7YmFsYW5jZXMmcXVvdDtgCiAgU3VwcGx5ICAgICAgICBzZGsuQ29pbnMgICBganNvbjomcXVvdDtzdXBwbHkmcXVvdDsgeWFtbDomcXVvdDtzdXBwbHkmcXVvdDtgCiAgRGVub21NZXRhZGF0YSBbXU1ldGFkYXRhICBganNvbjomcXVvdDtkZW5vbV9tZXRhZGF0YSZxdW90OyB5YW1sOiZxdW90O2Rlbm9tX21ldGFkYXRhJnF1b3Q7YAp9Cg=="}}),e._v(" "),t("h2",{attrs:{id:"future-work"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#future-work"}},[e._v("#")]),e._v(" Future Work")]),e._v(" "),t("p",[e._v("In order for clients to avoid having to convert assets to the base denomination -- either manually or\nvia an endpoint, we may consider supporting automatic conversion of a given unit input.")]),e._v(" "),t("h2",{attrs:{id:"consequences"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),t("h3",{attrs:{id:"positive"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),t("ul",[t("li",[e._v("Provides clients, wallet providers and block explorers with additional data on\nasset denomination to improve UX and remove any need to make assumptions on\ndenomination units.")])]),e._v(" "),t("h3",{attrs:{id:"negative"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),t("ul",[t("li",[e._v("A small amount of required additional storage in the "),t("code",[e._v("x/bank")]),e._v(" module. The amount\nof additional storage should be minimal as the amount of total assets should not\nbe large.")])]),e._v(" "),t("h3",{attrs:{id:"neutral"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[e._v("#")]),e._v(" Neutral")]),e._v(" "),t("h2",{attrs:{id:"references"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")])],1)}),[],!1,null,null,null);a.default=n.exports}}]);