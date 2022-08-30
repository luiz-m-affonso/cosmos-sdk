(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{587:function(e,t,a){"use strict";a.r(t);var n=a(1),o=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"adr-020-protocol-buffer-transaction-encoding"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adr-020-protocol-buffer-transaction-encoding"}},[e._v("#")]),e._v(" ADR 020: Protocol Buffer Transaction Encoding")]),e._v(" "),a("h2",{attrs:{id:"changelog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),a("ul",[a("li",[e._v("2020 March 06: Initial Draft")]),e._v(" "),a("li",[e._v("2020 March 12: API Updates")]),e._v(" "),a("li",[e._v("2020 April 13: Added details on interface "),a("code",[e._v("oneof")]),e._v(" handling")]),e._v(" "),a("li",[e._v("2020 April 30: Switch to "),a("code",[e._v("Any")])]),e._v(" "),a("li",[e._v("2020 May 14: Describe public key encoding")]),e._v(" "),a("li",[e._v("2020 June 08: Store "),a("code",[e._v("TxBody")]),e._v(" and "),a("code",[e._v("AuthInfo")]),e._v(" as bytes in "),a("code",[e._v("SignDoc")]),e._v("; Document "),a("code",[e._v("TxRaw")]),e._v(" as broadcast and storage type.")]),e._v(" "),a("li",[e._v("2020 August 07: Use ADR 027 for serializing "),a("code",[e._v("SignDoc")]),e._v(".")]),e._v(" "),a("li",[e._v("2020 August 19: Move sequence field from "),a("code",[e._v("SignDoc")]),e._v(" to "),a("code",[e._v("SignerInfo")]),e._v(", as discussed in "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/issues/6966",target:"_blank",rel:"noopener noreferrer"}},[e._v("#6966"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("li",[e._v("2020 September 25: Remove "),a("code",[e._v("PublicKey")]),e._v(" type in favor of "),a("code",[e._v("secp256k1.PubKey")]),e._v(", "),a("code",[e._v("ed25519.PubKey")]),e._v(" and "),a("code",[e._v("multisig.LegacyAminoPubKey")]),e._v(".")]),e._v(" "),a("li",[e._v("2020 October 15: Add "),a("code",[e._v("GetAccount")]),e._v(" and "),a("code",[e._v("GetAccountWithHeight")]),e._v(" methods to the "),a("code",[e._v("AccountRetriever")]),e._v(" interface.")]),e._v(" "),a("li",[e._v("2021 Feb 24: The Cosmos SDK does not use Tendermint's "),a("code",[e._v("PubKey")]),e._v(" interface anymore, but its own "),a("code",[e._v("cryptotypes.PubKey")]),e._v(". Updates to reflect this.")]),e._v(" "),a("li",[e._v("2021 May 3: Rename "),a("code",[e._v("clientCtx.JSONMarshaler")]),e._v(" to "),a("code",[e._v("clientCtx.JSONCodec")]),e._v(".")]),e._v(" "),a("li",[e._v("2021 June 10: Add "),a("code",[e._v("clientCtx.Codec: codec.Codec")]),e._v(".")])]),e._v(" "),a("h2",{attrs:{id:"status"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),a("p",[e._v("Accepted")]),e._v(" "),a("h2",{attrs:{id:"context"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),a("p",[e._v("This ADR is a continuation of the motivation, design, and context established in\n"),a("RouterLink",{attrs:{to:"/architecture/adr-019-protobuf-state-encoding.html"}},[e._v("ADR 019")]),e._v(", namely, we aim to design the\nProtocol Buffer migration path for the client-side of the Cosmos SDK.")],1),e._v(" "),a("p",[e._v("Specifically, the client-side migration path primarily includes tx generation and\nsigning, message construction and routing, in addition to CLI & REST handlers and\nbusiness logic (i.e. queriers).")]),e._v(" "),a("p",[e._v("With this in mind, we will tackle the migration path via two main areas, txs and\nquerying. However, this ADR solely focuses on transactions. Querying should be\naddressed in a future ADR, but it should build off of these proposals.")]),e._v(" "),a("p",[e._v("Based on detailed discussions ("),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/issues/6030",target:"_blank",rel:"noopener noreferrer"}},[e._v("#6030"),a("OutboundLink")],1),e._v("\nand "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/issues/6078",target:"_blank",rel:"noopener noreferrer"}},[e._v("#6078"),a("OutboundLink")],1),e._v("), the original\ndesign for transactions was changed substantially from an "),a("code",[e._v("oneof")]),e._v(" /JSON-signing\napproach to the approach described below.")]),e._v(" "),a("h2",{attrs:{id:"decision"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[e._v("#")]),e._v(" Decision")]),e._v(" "),a("h3",{attrs:{id:"transactions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transactions"}},[e._v("#")]),e._v(" Transactions")]),e._v(" "),a("p",[e._v("Since interface values are encoded with "),a("code",[e._v("google.protobuf.Any")]),e._v(" in state (see "),a("RouterLink",{attrs:{to:"/architecture/adr-019-protobuf-state-encoding.html"}},[e._v("ADR 019")]),e._v("),\n"),a("code",[e._v("sdk.Msg")]),e._v("s are encoding with "),a("code",[e._v("Any")]),e._v(" in transactions.")],1),e._v(" "),a("p",[e._v("One of the main goals of using "),a("code",[e._v("Any")]),e._v(" to encode interface values is to have a\ncore set of types which is reused by apps so that\nclients can safely be compatible with as many chains as possible.")]),e._v(" "),a("p",[e._v("It is one of the goals of this specification to provide a flexible cross-chain transaction\nformat that can serve a wide variety of use cases without breaking client\ncompatibility.")]),e._v(" "),a("p",[e._v("In order to facilitate signing, transactions are separated into "),a("code",[e._v("TxBody")]),e._v(",\nwhich will be re-used by "),a("code",[e._v("SignDoc")]),e._v(" below, and "),a("code",[e._v("signatures")]),e._v(":")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"proto",base64:"Ly8gdHlwZXMvdHlwZXMucHJvdG8KcGFja2FnZSBjb3Ntb3Nfc2RrLnYxOwoKbWVzc2FnZSBUeCB7CiAgICBUeEJvZHkgYm9keSA9IDE7CiAgICBBdXRoSW5mbyBhdXRoX2luZm8gPSAyOwogICAgLy8gQSBsaXN0IG9mIHNpZ25hdHVyZXMgdGhhdCBtYXRjaGVzIHRoZSBsZW5ndGggYW5kIG9yZGVyIG9mIEF1dGhJbmZvJ3Mgc2lnbmVyX2luZm9zIHRvCiAgICAvLyBhbGxvdyBjb25uZWN0aW5nIHNpZ25hdHVyZSBtZXRhIGluZm9ybWF0aW9uIGxpa2UgcHVibGljIGtleSBhbmQgc2lnbmluZyBtb2RlIGJ5IHBvc2l0aW9uLgogICAgcmVwZWF0ZWQgYnl0ZXMgc2lnbmF0dXJlcyA9IDM7Cn0KCi8vIEEgdmFyaWFudCBvZiBUeCB0aGF0IHBpbnMgdGhlIHNpZ25lcidzIGV4YWN0IGJpbmFyeSByZXByZXNlbmF0aW9uIG9mIGJvZHkgYW5kCi8vIGF1dGhfaW5mby4gVGhpcyBpcyB1c2VkIGZvciBzaWduaW5nLCBicm9hZGNhc3RpbmcgYW5kIHZlcmlmaWNhdGlvbi4gVGhlIGJpbmFyeQovLyBgc2VyaWFsaXplKHR4OiBUeFJhdylgIGlzIHN0b3JlZCBpbiBUZW5kZXJtaW50IGFuZCB0aGUgaGFzaCBgc2hhMjU2KHNlcmlhbGl6ZSh0eDogVHhSYXcpKWAKLy8gYmVjb21lcyB0aGUgJnF1b3Q7dHhoYXNoJnF1b3Q7LCBjb21tb25seSB1c2VkIGFzIHRoZSB0cmFuc2FjdGlvbiBJRC4KbWVzc2FnZSBUeFJhdyB7CiAgICAvLyBBIHByb3RvYnVmIHNlcmlhbGl6YXRpb24gb2YgYSBUeEJvZHkgdGhhdCBtYXRjaGVzIHRoZSByZXByZXNlbnRhdGlvbiBpbiBTaWduRG9jLgogICAgYnl0ZXMgYm9keSA9IDE7CiAgICAvLyBBIHByb3RvYnVmIHNlcmlhbGl6YXRpb24gb2YgYW4gQXV0aEluZm8gdGhhdCBtYXRjaGVzIHRoZSByZXByZXNlbnRhdGlvbiBpbiBTaWduRG9jLgogICAgYnl0ZXMgYXV0aF9pbmZvID0gMjsKICAgIC8vIEEgbGlzdCBvZiBzaWduYXR1cmVzIHRoYXQgbWF0Y2hlcyB0aGUgbGVuZ3RoIGFuZCBvcmRlciBvZiBBdXRoSW5mbydzIHNpZ25lcl9pbmZvcyB0bwogICAgLy8gYWxsb3cgY29ubmVjdGluZyBzaWduYXR1cmUgbWV0YSBpbmZvcm1hdGlvbiBsaWtlIHB1YmxpYyBrZXkgYW5kIHNpZ25pbmcgbW9kZSBieSBwb3NpdGlvbi4KICAgIHJlcGVhdGVkIGJ5dGVzIHNpZ25hdHVyZXMgPSAzOwp9CgptZXNzYWdlIFR4Qm9keSB7CiAgICAvLyBBIGxpc3Qgb2YgbWVzc2FnZXMgdG8gYmUgZXhlY3V0ZWQuIFRoZSByZXF1aXJlZCBzaWduZXJzIG9mIHRob3NlIG1lc3NhZ2VzIGRlZmluZQogICAgLy8gdGhlIG51bWJlciBhbmQgb3JkZXIgb2YgZWxlbWVudHMgaW4gQXV0aEluZm8ncyBzaWduZXJfaW5mb3MgYW5kIFR4J3Mgc2lnbmF0dXJlcy4KICAgIC8vIEVhY2ggcmVxdWlyZWQgc2lnbmVyIGFkZHJlc3MgaXMgYWRkZWQgdG8gdGhlIGxpc3Qgb25seSB0aGUgZmlyc3QgdGltZSBpdCBvY2N1cnMuCiAgICAvLwogICAgLy8gQnkgY29udmVudGlvbiwgdGhlIGZpcnN0IHJlcXVpcmVkIHNpZ25lciAodXN1YWxseSBmcm9tIHRoZSBmaXJzdCBtZXNzYWdlKSBpcyByZWZlcnJlZAogICAgLy8gdG8gYXMgdGhlIHByaW1hcnkgc2lnbmVyIGFuZCBwYXlzIHRoZSBmZWUgZm9yIHRoZSB3aG9sZSB0cmFuc2FjdGlvbi4KICAgIHJlcGVhdGVkIGdvb2dsZS5wcm90b2J1Zi5BbnkgbWVzc2FnZXMgPSAxOwogICAgc3RyaW5nIG1lbW8gPSAyOwogICAgaW50NjQgdGltZW91dF9oZWlnaHQgPSAzOwogICAgcmVwZWF0ZWQgZ29vZ2xlLnByb3RvYnVmLkFueSBleHRlbnNpb25fb3B0aW9ucyA9IDEwMjM7Cn0KCm1lc3NhZ2UgQXV0aEluZm8gewogICAgLy8gVGhpcyBsaXN0IGRlZmluZXMgdGhlIHNpZ25pbmcgbW9kZXMgZm9yIHRoZSByZXF1aXJlZCBzaWduZXJzLiBUaGUgbnVtYmVyCiAgICAvLyBhbmQgb3JkZXIgb2YgZWxlbWVudHMgbXVzdCBtYXRjaCB0aGUgcmVxdWlyZWQgc2lnbmVycyBmcm9tIFR4Qm9keSdzIG1lc3NhZ2VzLgogICAgLy8gVGhlIGZpcnN0IGVsZW1lbnQgaXMgdGhlIHByaW1hcnkgc2lnbmVyIGFuZCB0aGUgb25lIHdoaWNoIHBheXMgdGhlIGZlZS4KICAgIHJlcGVhdGVkIFNpZ25lckluZm8gc2lnbmVyX2luZm9zID0gMTsKICAgIC8vIFRoZSBmZWUgY2FuIGJlIGNhbGN1bGF0ZWQgYmFzZWQgb24gdGhlIGNvc3Qgb2YgZXZhbHVhdGluZyB0aGUgYm9keSBhbmQgZG9pbmcgc2lnbmF0dXJlIHZlcmlmaWNhdGlvbiBvZiB0aGUgc2lnbmVycy4gVGhpcyBjYW4gYmUgZXN0aW1hdGVkIHZpYSBzaW11bGF0aW9uLgogICAgRmVlIGZlZSA9IDI7Cn0KCm1lc3NhZ2UgU2lnbmVySW5mbyB7CiAgICAvLyBUaGUgcHVibGljIGtleSBpcyBvcHRpb25hbCBmb3IgYWNjb3VudHMgdGhhdCBhbHJlYWR5IGV4aXN0IGluIHN0YXRlLiBJZiB1bnNldCwgdGhlCiAgICAvLyB2ZXJpZmllciBjYW4gdXNlIHRoZSByZXF1aXJlZCBzaWduZXIgYWRkcmVzcyBmb3IgdGhpcyBwb3NpdGlvbiBhbmQgbG9va3VwIHRoZSBwdWJsaWMga2V5LgogICAgZ29vZ2xlLnByb3RvYnVmLkFueSBwdWJsaWNfa2V5ID0gMTsKICAgIC8vIE1vZGVJbmZvIGRlc2NyaWJlcyB0aGUgc2lnbmluZyBtb2RlIG9mIHRoZSBzaWduZXIgYW5kIGlzIGEgbmVzdGVkCiAgICAvLyBzdHJ1Y3R1cmUgdG8gc3VwcG9ydCBuZXN0ZWQgbXVsdGlzaWcgcHVia2V5J3MKICAgIE1vZGVJbmZvIG1vZGVfaW5mbyA9IDI7CiAgICAvLyBzZXF1ZW5jZSBpcyB0aGUgc2VxdWVuY2Ugb2YgdGhlIGFjY291bnQsIHdoaWNoIGRlc2NyaWJlcyB0aGUKICAgIC8vIG51bWJlciBvZiBjb21taXR0ZWQgdHJhbnNhY3Rpb25zIHNpZ25lZCBieSBhIGdpdmVuIGFkZHJlc3MuIEl0IGlzIHVzZWQgdG8gcHJldmVudAogICAgLy8gcmVwbGF5IGF0dGFja3MuCiAgICB1aW50NjQgc2VxdWVuY2UgPSAzOwp9CgptZXNzYWdlIE1vZGVJbmZvIHsKICAgIG9uZW9mIHN1bSB7CiAgICAgICAgU2luZ2xlIHNpbmdsZSA9IDE7CiAgICAgICAgTXVsdGkgbXVsdGkgPSAyOwogICAgfQoKICAgIC8vIFNpbmdsZSBpcyB0aGUgbW9kZSBpbmZvIGZvciBhIHNpbmdsZSBzaWduZXIuIEl0IGlzIHN0cnVjdHVyZWQgYXMgYSBtZXNzYWdlCiAgICAvLyB0byBhbGxvdyBmb3IgYWRkaXRpb25hbCBmaWVsZHMgc3VjaCBhcyBsb2NhbGUgZm9yIFNJR05fTU9ERV9URVhUVUFMIGluIHRoZSBmdXR1cmUKICAgIG1lc3NhZ2UgU2luZ2xlIHsKICAgICAgICBTaWduTW9kZSBtb2RlID0gMTsKICAgIH0KCiAgICAvLyBNdWx0aSBpcyB0aGUgbW9kZSBpbmZvIGZvciBhIG11bHRpc2lnIHB1YmxpYyBrZXkKICAgIG1lc3NhZ2UgTXVsdGkgewogICAgICAgIC8vIGJpdGFycmF5IHNwZWNpZmllcyB3aGljaCBrZXlzIHdpdGhpbiB0aGUgbXVsdGlzaWcgYXJlIHNpZ25pbmcKICAgICAgICBDb21wYWN0Qml0QXJyYXkgYml0YXJyYXkgPSAxOwogICAgICAgIC8vIG1vZGVfaW5mb3MgaXMgdGhlIGNvcnJlc3BvbmRpbmcgbW9kZXMgb2YgdGhlIHNpZ25lcnMgb2YgdGhlIG11bHRpc2lnCiAgICAgICAgLy8gd2hpY2ggY291bGQgaW5jbHVkZSBuZXN0ZWQgbXVsdGlzaWcgcHVibGljIGtleXMKICAgICAgICByZXBlYXRlZCBNb2RlSW5mbyBtb2RlX2luZm9zID0gMjsKICAgIH0KfQoKZW51bSBTaWduTW9kZSB7CiAgICBTSUdOX01PREVfVU5TUEVDSUZJRUQgPSAwOwoKICAgIFNJR05fTU9ERV9ESVJFQ1QgPSAxOwoKICAgIFNJR05fTU9ERV9URVhUVUFMID0gMjsKCiAgICBTSUdOX01PREVfTEVHQUNZX0FNSU5PX0pTT04gPSAxMjc7Cn0K"}}),e._v(" "),a("p",[e._v("As will be discussed below, in order to include as much of the "),a("code",[e._v("Tx")]),e._v(" as possible\nin the "),a("code",[e._v("SignDoc")]),e._v(", "),a("code",[e._v("SignerInfo")]),e._v(" is separated from signatures so that only the\nraw signatures themselves live outside of what is signed over.")]),e._v(" "),a("p",[e._v("Because we are aiming for a flexible, extensible cross-chain transaction\nformat, new transaction processing options should be added to "),a("code",[e._v("TxBody")]),e._v(" as soon\nthose use cases are discovered, even if they can't be implemented yet.")]),e._v(" "),a("p",[e._v("Because there is coordination overhead in this, "),a("code",[e._v("TxBody")]),e._v(" includes an\n"),a("code",[e._v("extension_options")]),e._v(" field which can be used for any transaction processing\noptions that are not already covered. App developers should, nevertheless,\nattempt to upstream important improvements to "),a("code",[e._v("Tx")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"signing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#signing"}},[e._v("#")]),e._v(" Signing")]),e._v(" "),a("p",[e._v("All of the signing modes below aim to provide the following guarantees:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("No Malleability")]),e._v(": "),a("code",[e._v("TxBody")]),e._v(" and "),a("code",[e._v("AuthInfo")]),e._v(" cannot change once the transaction\nis signed")]),e._v(" "),a("li",[a("strong",[e._v("Predictable Gas")]),e._v(": if I am signing a transaction where I am paying a fee,\nthe final gas is fully dependent on what I am signing")])]),e._v(" "),a("p",[e._v("These guarantees give the maximum amount confidence to message signers that\nmanipulation of "),a("code",[e._v("Tx")]),e._v("s by intermediaries can't result in any meaningful changes.")]),e._v(" "),a("h4",{attrs:{id:"sign-mode-direct"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sign-mode-direct"}},[e._v("#")]),e._v(" "),a("code",[e._v("SIGN_MODE_DIRECT")])]),e._v(" "),a("p",[e._v('The "direct" signing behavior is to sign the raw '),a("code",[e._v("TxBody")]),e._v(" bytes as broadcast over\nthe wire. This has the advantages of:")]),e._v(" "),a("ul",[a("li",[e._v("requiring the minimum additional client capabilities beyond a standard protocol\nbuffers implementation")]),e._v(" "),a("li",[e._v("leaving effectively zero holes for transaction malleability (i.e. there are no\nsubtle differences between the signing and encoding formats which could\npotentially be exploited by an attacker)")])]),e._v(" "),a("p",[e._v("Signatures are structured using the "),a("code",[e._v("SignDoc")]),e._v(" below which reuses the serialization of\n"),a("code",[e._v("TxBody")]),e._v(" and "),a("code",[e._v("AuthInfo")]),e._v(" and only adds the fields which are needed for signatures:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"proto",base64:"Ly8gdHlwZXMvdHlwZXMucHJvdG8KbWVzc2FnZSBTaWduRG9jIHsKICAgIC8vIEEgcHJvdG9idWYgc2VyaWFsaXphdGlvbiBvZiBhIFR4Qm9keSB0aGF0IG1hdGNoZXMgdGhlIHJlcHJlc2VudGF0aW9uIGluIFR4UmF3LgogICAgYnl0ZXMgYm9keSA9IDE7CiAgICAvLyBBIHByb3RvYnVmIHNlcmlhbGl6YXRpb24gb2YgYW4gQXV0aEluZm8gdGhhdCBtYXRjaGVzIHRoZSByZXByZXNlbnRhdGlvbiBpbiBUeFJhdy4KICAgIGJ5dGVzIGF1dGhfaW5mbyA9IDI7CiAgICBzdHJpbmcgY2hhaW5faWQgPSAzOwogICAgdWludDY0IGFjY291bnRfbnVtYmVyID0gNDsKfQo="}}),e._v(" "),a("p",[e._v("In order to sign in the default mode, clients take the following steps:")]),e._v(" "),a("ol",[a("li",[e._v("Serialize "),a("code",[e._v("TxBody")]),e._v(" and "),a("code",[e._v("AuthInfo")]),e._v(" using any valid protobuf implementation.")]),e._v(" "),a("li",[e._v("Create a "),a("code",[e._v("SignDoc")]),e._v(" and serialize it using "),a("RouterLink",{attrs:{to:"/architecture/adr-027-deterministic-protobuf-serialization.html"}},[e._v("ADR 027")]),e._v(".")],1),e._v(" "),a("li",[e._v("Sign the encoded "),a("code",[e._v("SignDoc")]),e._v(" bytes.")]),e._v(" "),a("li",[e._v("Build a "),a("code",[e._v("TxRaw")]),e._v(" and serialize it for broadcasting.")])]),e._v(" "),a("p",[e._v("Signature verification is based on comparing the raw "),a("code",[e._v("TxBody")]),e._v(" and "),a("code",[e._v("AuthInfo")]),e._v("\nbytes encoded in "),a("code",[e._v("TxRaw")]),e._v(" not based on any "),a("a",{attrs:{href:"https://github.com/regen-network/canonical-proto3",target:"_blank",rel:"noopener noreferrer"}},[e._v('"canonicalization"'),a("OutboundLink")],1),e._v("\nalgorithm which creates added complexity for clients in addition to preventing\nsome forms of upgradeability (to be addressed later in this document).")]),e._v(" "),a("p",[e._v("Signature verifiers do:")]),e._v(" "),a("ol",[a("li",[e._v("Deserialize a "),a("code",[e._v("TxRaw")]),e._v(" and pull out "),a("code",[e._v("body")]),e._v(" and "),a("code",[e._v("auth_info")]),e._v(".")]),e._v(" "),a("li",[e._v("Create a list of required signer addresses from the messages.")]),e._v(" "),a("li",[e._v("For each required signer:\n"),a("ul",[a("li",[e._v("Pull account number and sequence from the state.")]),e._v(" "),a("li",[e._v("Obtain the public key either from state or "),a("code",[e._v("AuthInfo")]),e._v("'s "),a("code",[e._v("signer_infos")]),e._v(".")]),e._v(" "),a("li",[e._v("Create a "),a("code",[e._v("SignDoc")]),e._v(" and serialize it using "),a("RouterLink",{attrs:{to:"/architecture/adr-027-deterministic-protobuf-serialization.html"}},[e._v("ADR 027")]),e._v(".")],1),e._v(" "),a("li",[e._v("Verify the signature at the same list position against the serialized "),a("code",[e._v("SignDoc")]),e._v(".")])])])]),e._v(" "),a("h4",{attrs:{id:"sign-mode-legacy-amino"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sign-mode-legacy-amino"}},[e._v("#")]),e._v(" "),a("code",[e._v("SIGN_MODE_LEGACY_AMINO")])]),e._v(" "),a("p",[e._v("In order to support legacy wallets and exchanges, Amino JSON will be temporarily\nsupported transaction signing. Once wallets and exchanges have had a\nchance to upgrade to protobuf based signing, this option will be disabled. In\nthe meantime, it is foreseen that disabling the current Amino signing would cause\ntoo much breakage to be feasible. Note that this is mainly a requirement of the\nCosmos Hub and other chains may choose to disable Amino signing immediately.")]),e._v(" "),a("p",[e._v("Legacy clients will be able to sign a transaction using the current Amino\nJSON format and have it encoded to protobuf using the REST "),a("code",[e._v("/tx/encode")]),e._v("\nendpoint before broadcasting.")]),e._v(" "),a("h4",{attrs:{id:"sign-mode-textual"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sign-mode-textual"}},[e._v("#")]),e._v(" "),a("code",[e._v("SIGN_MODE_TEXTUAL")])]),e._v(" "),a("p",[e._v("As was discussed extensively in "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/issues/6078",target:"_blank",rel:"noopener noreferrer"}},[e._v("#6078"),a("OutboundLink")],1),e._v(",\nthere is a desire for a human-readable signing encoding, especially for hardware\nwallets like the "),a("a",{attrs:{href:"https://www.ledger.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ledger"),a("OutboundLink")],1),e._v(" which display\ntransaction contents to users before signing. JSON was an attempt at this but\nfalls short of the ideal.")]),e._v(" "),a("p",[a("code",[e._v("SIGN_MODE_TEXTUAL")]),e._v(" is intended as a placeholder for a human-readable\nencoding which will replace Amino JSON. This new encoding should be even more\nfocused on readability than JSON, possibly based on formatting strings like\n"),a("a",{attrs:{href:"http://userguide.icu-project.org/formatparse/messages",target:"_blank",rel:"noopener noreferrer"}},[e._v("MessageFormat"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("In order to ensure that the new human-readable format does not suffer from\ntransaction malleability issues, "),a("code",[e._v("SIGN_MODE_TEXTUAL")]),e._v("\nrequires that the "),a("em",[e._v("human-readable bytes are concatenated with the raw "),a("code",[e._v("SignDoc")])]),e._v("\nto generate sign bytes.")]),e._v(" "),a("p",[e._v("Multiple human-readable formats (maybe even localized messages) may be supported\nby "),a("code",[e._v("SIGN_MODE_TEXTUAL")]),e._v(" when it is implemented.")]),e._v(" "),a("h3",{attrs:{id:"unknown-field-filtering"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unknown-field-filtering"}},[e._v("#")]),e._v(" Unknown Field Filtering")]),e._v(" "),a("p",[e._v("Unknown fields in protobuf messages should generally be rejected by transaction\nprocessors because:")]),e._v(" "),a("ul",[a("li",[e._v("important data may be present in the unknown fields, that if ignored, will\ncause unexpected behavior for clients")]),e._v(" "),a("li",[e._v("they present a malleability vulnerability where attackers can bloat tx size\nby adding random uninterpreted data to unsigned content (i.e. the master "),a("code",[e._v("Tx")]),e._v(",\nnot "),a("code",[e._v("TxBody")]),e._v(")")])]),e._v(" "),a("p",[e._v("There are also scenarios where we may choose to safely ignore unknown fields\n(https://github.com/cosmos/cosmos-sdk/issues/6078#issuecomment-624400188) to\nprovide graceful forwards compatibility with newer clients.")]),e._v(" "),a("p",[e._v("We propose that field numbers with bit 11 set (for most use cases this is\nthe range of 1024-2047) be considered non-critical fields that can safely be\nignored if unknown.")]),e._v(" "),a("p",[e._v("To handle this we will need a unknown field filter that:")]),e._v(" "),a("ul",[a("li",[e._v("always rejects unknown fields in unsigned content (i.e. top-level "),a("code",[e._v("Tx")]),e._v(" and\nunsigned parts of "),a("code",[e._v("AuthInfo")]),e._v(" if present based on the signing mode)")]),e._v(" "),a("li",[e._v("rejects unknown fields in all messages (including nested "),a("code",[e._v("Any")]),e._v("s) other than\nfields with bit 11 set")])]),e._v(" "),a("p",[e._v("This will likely need to be a custom protobuf parser pass that takes message bytes\nand "),a("code",[e._v("FileDescriptor")]),e._v("s and returns a boolean result.")]),e._v(" "),a("h3",{attrs:{id:"public-key-encoding"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#public-key-encoding"}},[e._v("#")]),e._v(" Public Key Encoding")]),e._v(" "),a("p",[e._v("Public keys in the Cosmos SDK implement the "),a("code",[e._v("cryptotypes.PubKey")]),e._v(" interface.\nWe propose to use "),a("code",[e._v("Any")]),e._v(" for protobuf encoding as we are doing with other interfaces (for example, in "),a("code",[e._v("BaseAccount.PubKey")]),e._v(" and "),a("code",[e._v("SignerInfo.PublicKey")]),e._v(").\nThe following public keys are implemented: secp256k1, secp256r1, ed25519 and legacy-multisignature.")]),e._v(" "),a("p",[e._v("Ex:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"proto",base64:"bWVzc2FnZSBQdWJLZXkgewogICAgYnl0ZXMga2V5ID0gMTsKfQo="}}),e._v(" "),a("p",[a("code",[e._v("multisig.LegacyAminoPubKey")]),e._v(" has an array of "),a("code",[e._v("Any")]),e._v("'s member to support any\nprotobuf public key type.")]),e._v(" "),a("p",[e._v("Apps should only attempt to handle a registered set of public keys that they\nhave tested. The provided signature verification ante handler decorators will\nenforce this.")]),e._v(" "),a("h3",{attrs:{id:"cli-rest"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cli-rest"}},[e._v("#")]),e._v(" CLI & REST")]),e._v(" "),a("p",[e._v("Currently, the REST and CLI handlers encode and decode types and txs via Amino\nJSON encoding using a concrete Amino codec. Being that some of the types dealt with\nin the client can be interfaces, similar to how we described in "),a("RouterLink",{attrs:{to:"/architecture/adr-019-protobuf-state-encoding.html"}},[e._v("ADR 019")]),e._v(",\nthe client logic will now need to take a codec interface that knows not only how\nto handle all the types, but also knows how to generate transactions, signatures,\nand messages.")],1),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBBY2NvdW50UmV0cmlldmVyIGludGVyZmFjZSB7CiAgR2V0QWNjb3VudChjbGllbnRDdHggQ29udGV4dCwgYWRkciBzZGsuQWNjQWRkcmVzcykgKGNsaWVudC5BY2NvdW50LCBlcnJvcikKICBHZXRBY2NvdW50V2l0aEhlaWdodChjbGllbnRDdHggQ29udGV4dCwgYWRkciBzZGsuQWNjQWRkcmVzcykgKGNsaWVudC5BY2NvdW50LCBpbnQ2NCwgZXJyb3IpCiAgRW5zdXJlRXhpc3RzKGNsaWVudEN0eCBjbGllbnQuQ29udGV4dCwgYWRkciBzZGsuQWNjQWRkcmVzcykgZXJyb3IKICBHZXRBY2NvdW50TnVtYmVyU2VxdWVuY2UoY2xpZW50Q3R4IGNsaWVudC5Db250ZXh0LCBhZGRyIHNkay5BY2NBZGRyZXNzKSAodWludDY0LCB1aW50NjQsIGVycm9yKQp9Cgp0eXBlIEdlbmVyYXRvciBpbnRlcmZhY2UgewogIE5ld1R4KCkgVHhCdWlsZGVyCiAgTmV3RmVlKCkgQ2xpZW50RmVlCiAgTmV3U2lnbmF0dXJlKCkgQ2xpZW50U2lnbmF0dXJlCiAgTWFyc2hhbFR4KHR4IHR5cGVzLlR4KSAoW11ieXRlLCBlcnJvcikKfQoKdHlwZSBUeEJ1aWxkZXIgaW50ZXJmYWNlIHsKICBHZXRUeCgpIHNkay5UeAoKICBTZXRNc2dzKC4uLnNkay5Nc2cpIGVycm9yCiAgR2V0U2lnbmF0dXJlcygpIFtdc2RrLlNpZ25hdHVyZQogIFNldFNpZ25hdHVyZXMoLi4uc2RrLlNpZ25hdHVyZSkKICBHZXRGZWUoKSBzZGsuRmVlCiAgU2V0RmVlKHNkay5GZWUpCiAgR2V0TWVtbygpIHN0cmluZwogIFNldE1lbW8oc3RyaW5nKQp9Cg=="}}),e._v(" "),a("p",[e._v("We then update "),a("code",[e._v("Context")]),e._v(" to have new fields: "),a("code",[e._v("Codec")]),e._v(", "),a("code",[e._v("TxGenerator")]),e._v(",\nand "),a("code",[e._v("AccountRetriever")]),e._v(", and we update "),a("code",[e._v("AppModuleBasic.GetTxCmd")]),e._v(" to take\na "),a("code",[e._v("Context")]),e._v(" which should have all of these fields pre-populated.")]),e._v(" "),a("p",[e._v("Each client method should then use one of the "),a("code",[e._v("Init")]),e._v(" methods to re-initialize\nthe pre-populated "),a("code",[e._v("Context")]),e._v(". "),a("code",[e._v("tx.GenerateOrBroadcastTx")]),e._v(" can be used to\ngenerate or broadcast a transaction. For example:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"aW1wb3J0ICZxdW90O2dpdGh1Yi5jb20vc3BmMTMvY29icmEmcXVvdDsKaW1wb3J0ICZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvY2xpZW50JnF1b3Q7CmltcG9ydCAmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL2NsaWVudC90eCZxdW90OwoKZnVuYyBOZXdDbWREb1NvbWV0aGluZyhjbGllbnRDdHggY2xpZW50LkNvbnRleHQpICpjb2JyYS5Db21tYW5kIHsKCXJldHVybiAmYW1wO2NvYnJhLkNvbW1hbmR7CgkJUnVuRTogZnVuYyhjbWQgKmNvYnJhLkNvbW1hbmQsIGFyZ3MgW11zdHJpbmcpIGVycm9yIHsKCQkJY2xpZW50Q3R4IDo9IGN0eC5Jbml0V2l0aElucHV0KGNtZC5Jbk9yU3RkaW4oKSkKCQkJbXNnIDo9IE5ld1NvbWVNc2d7Li4ufQoJCQl0eC5HZW5lcmF0ZU9yQnJvYWRjYXN0VHgoY2xpZW50Q3R4LCBtc2cpCgkJfSwKCX0KfQo="}}),e._v(" "),a("h2",{attrs:{id:"future-improvements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#future-improvements"}},[e._v("#")]),e._v(" Future Improvements")]),e._v(" "),a("h3",{attrs:{id:"sign-mode-textual-specification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sign-mode-textual-specification"}},[e._v("#")]),e._v(" "),a("code",[e._v("SIGN_MODE_TEXTUAL")]),e._v(" specification")]),e._v(" "),a("p",[e._v("A concrete specification and implementation of "),a("code",[e._v("SIGN_MODE_TEXTUAL")]),e._v(" is intended\nas a near-term future improvement so that the ledger app and other wallets\ncan gracefully transition away from Amino JSON.")]),e._v(" "),a("h3",{attrs:{id:"sign-mode-direct-aux"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sign-mode-direct-aux"}},[e._v("#")]),e._v(" "),a("code",[e._v("SIGN_MODE_DIRECT_AUX")])]),e._v(" "),a("p",[e._v("(*Documented as option (3) in https://github.com/cosmos/cosmos-sdk/issues/6078#issuecomment-628026933)")]),e._v(" "),a("p",[e._v("We could add a mode "),a("code",[e._v("SIGN_MODE_DIRECT_AUX")]),e._v("\nto support scenarios where multiple signatures\nare being gathered into a single transaction but the message composer does not\nyet know which signatures will be included in the final transaction. For instance,\nI may have a 3/5 multisig wallet and want to send a "),a("code",[e._v("TxBody")]),e._v(" to all 5\nsigners to see who signs first. As soon as I have 3 signatures then I will go\nahead and build the full transaction.")]),e._v(" "),a("p",[e._v("With "),a("code",[e._v("SIGN_MODE_DIRECT")]),e._v(", each signer needs\nto sign the full "),a("code",[e._v("AuthInfo")]),e._v(" which includes the full list of all signers and\ntheir signing modes, making the above scenario very hard.")]),e._v(" "),a("p",[a("code",[e._v("SIGN_MODE_DIRECT_AUX")]),e._v(' would allow "auxiliary" signers to create their signature\nusing only '),a("code",[e._v("TxBody")]),e._v(" and their own "),a("code",[e._v("PublicKey")]),e._v(". This allows the full list of\nsigners in "),a("code",[e._v("AuthInfo")]),e._v(" to be delayed until signatures have been collected.")]),e._v(" "),a("p",[e._v('An "auxiliary" signer is any signer besides the primary signer who is paying\nthe fee. For the primary signer, the full '),a("code",[e._v("AuthInfo")]),e._v(" is actually needed to calculate gas and fees\nbecause that is dependent on how many signers and which key types and signing\nmodes they are using. Auxiliary signers, however, do not need to worry about\nfees or gas and thus can just sign "),a("code",[e._v("TxBody")]),e._v(".")]),e._v(" "),a("p",[e._v("To generate a signature in "),a("code",[e._v("SIGN_MODE_DIRECT_AUX")]),e._v(" these steps would be followed:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Encode "),a("code",[e._v("SignDocAux")]),e._v(" (with the same requirement that fields must be serialized\nin order):")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"proto",base64:"Ly8gdHlwZXMvdHlwZXMucHJvdG8KbWVzc2FnZSBTaWduRG9jQXV4IHsKICAgIGJ5dGVzIGJvZHlfYnl0ZXMgPSAxOwogICAgLy8gUHVibGljS2V5IGlzIGluY2x1ZGVkIGluIFNpZ25Eb2NBdXggOgogICAgLy8gMS4gYXMgYSBzcGVjaWFsIGNhc2UgZm9yIG11bHRpc2lnIHB1YmxpYyBrZXlzLiBGb3IgbXVsdGlzaWcgcHVibGljIGtleXMsCiAgICAvLyB0aGUgc2lnbmVyIHNob3VsZCB1c2UgdGhlIHRvcC1sZXZlbCBtdWx0aXNpZyBwdWJsaWMga2V5IHRoZXkgYXJlIHNpZ25pbmcKICAgIC8vIGFnYWluc3QsIG5vdCB0aGVpciBvd24gcHVibGljIGtleS4gVGhpcyBpcyB0byBwcmV2ZW50IGFnYWluc3QgYSBmb3JtCiAgICAvLyBvZiBtYWxsZWFiaWxpdHkgd2hlcmUgYSBzaWduYXR1cmUgY291bGQgYmUgdGFrZW4gb3V0IG9mIGNvbnRleHQgb2YgdGhlCiAgICAvLyBtdWx0aXNpZyBrZXkgdGhhdCB3YXMgaW50ZW5kZWQgdG8gYmUgc2lnbmVkIGZvcgogICAgLy8gMi4gdG8gZ3VhcmQgYWdhaW5zdCBzY2VuYXJpbyB3aGVyZSBjb25maWd1cmF0aW9uIGluZm9ybWF0aW9uIGlzIGVuY29kZWQKICAgIC8vIGluIHB1YmxpYyBrZXlzIChpdCBoYXMgYmVlbiBwcm9wb3NlZCkgc3VjaCB0aGF0IHR3byBrZXlzIGNhbiBnZW5lcmF0ZQogICAgLy8gdGhlIHNhbWUgc2lnbmF0dXJlIGJ1dCBoYXZlIGRpZmZlcmVudCBzZWN1cml0eSBwcm9wZXJ0aWVzCiAgICAvLwogICAgLy8gQnkgaW5jbHVkaW5nIGl0IGhlcmUsIHRoZSBjb21wb3NlciBvZiBBdXRoSW5mbyBjYW5ub3QgcmVmZXJlbmNlIHRoZQogICAgLy8gYSBwdWJsaWMga2V5IHZhcmlhbnQgdGhlIHNpZ25lciBkaWQgbm90IGludGVuZCB0byB1c2UKICAgIFB1YmxpY0tleSBwdWJsaWNfa2V5ID0gMjsKICAgIHN0cmluZyBjaGFpbl9pZCA9IDM7CiAgICB1aW50NjQgYWNjb3VudF9udW1iZXIgPSA0Owp9Cg=="}})],1),e._v(" "),a("li",[a("p",[e._v("Sign the encoded "),a("code",[e._v("SignDocAux")]),e._v(" bytes")])]),e._v(" "),a("li",[a("p",[e._v("Send their signature and "),a("code",[e._v("SignerInfo")]),e._v(" to primary signer who will then\nsign and broadcast the final transaction (with "),a("code",[e._v("SIGN_MODE_DIRECT")]),e._v(" and "),a("code",[e._v("AuthInfo")]),e._v("\nadded) once enough signatures have been collected")])])]),e._v(" "),a("h3",{attrs:{id:"sign-mode-direct-relaxed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sign-mode-direct-relaxed"}},[e._v("#")]),e._v(" "),a("code",[e._v("SIGN_MODE_DIRECT_RELAXED")])]),e._v(" "),a("p",[e._v("("),a("em",[e._v("Documented as option (1)(a) in https://github.com/cosmos/cosmos-sdk/issues/6078#issuecomment-628026933")]),e._v(")")]),e._v(" "),a("p",[e._v("This is a variation of "),a("code",[e._v("SIGN_MODE_DIRECT")]),e._v(" where multiple signers wouldn't need to\ncoordinate public keys and signing modes in advance. It would involve an alternate\n"),a("code",[e._v("SignDoc")]),e._v(" similar to "),a("code",[e._v("SignDocAux")]),e._v(" above with fee. This could be added in the future\nif client developers found the burden of collecting public keys and modes in advance\ntoo burdensome.")]),e._v(" "),a("h2",{attrs:{id:"consequences"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),a("h3",{attrs:{id:"positive"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),a("ul",[a("li",[e._v("Significant performance gains.")]),e._v(" "),a("li",[e._v("Supports backward and forward type compatibility.")]),e._v(" "),a("li",[e._v("Better support for cross-language clients.")]),e._v(" "),a("li",[e._v("Multiple signing modes allow for greater protocol evolution")])]),e._v(" "),a("h3",{attrs:{id:"negative"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("google.protobuf.Any")]),e._v(" type URLs increase transaction size although the effect\nmay be negligible or compression may be able to mitigate it.")])]),e._v(" "),a("h3",{attrs:{id:"neutral"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[e._v("#")]),e._v(" Neutral")]),e._v(" "),a("h2",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")])],1)}),[],!1,null,null,null);t.default=o.exports}}]);