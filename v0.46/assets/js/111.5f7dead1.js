(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{632:function(g,e,t){"use strict";t.r(e);var I=t(1),C=Object(I.a)({},(function(){var g=this,e=g.$createElement,t=g._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":g.$parent.slotKey}},[t("h1",{attrs:{id:"accounts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#accounts"}},[g._v("#")]),g._v(" Accounts")]),g._v(" "),t("p",{attrs:{synopsis:""}},[g._v("This document describes the in-built account and public key system of the Cosmos SDK.")]),g._v(" "),t("h2",{attrs:{id:"pre-requisite-readings"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pre-requisite-readings"}},[g._v("#")]),g._v(" Pre-requisite Readings")]),g._v(" "),t("ul",[t("li",{attrs:{prereq:""}},[t("RouterLink",{attrs:{to:"/basics/app-anatomy.html"}},[g._v("Anatomy of a Cosmos SDK Application")])],1)]),g._v(" "),t("h2",{attrs:{id:"account-definition"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#account-definition"}},[g._v("#")]),g._v(" Account Definition")]),g._v(" "),t("p",[g._v("In the Cosmos SDK, an "),t("em",[g._v("account")]),g._v(" designates a pair of "),t("em",[g._v("public key")]),g._v(" "),t("code",[g._v("PubKey")]),g._v(" and "),t("em",[g._v("private key")]),g._v(" "),t("code",[g._v("PrivKey")]),g._v(". The "),t("code",[g._v("PubKey")]),g._v(" can be derived to generate various "),t("code",[g._v("Addresses")]),g._v(", which are used to identify users (among other parties) in the application. "),t("code",[g._v("Addresses")]),g._v(" are also associated with "),t("RouterLink",{attrs:{to:"/building-modules/messages-and-queries.html#messages"}},[t("code",[g._v("message")]),g._v("s")]),g._v(" to identify the sender of the "),t("code",[g._v("message")]),g._v(". The "),t("code",[g._v("PrivKey")]),g._v(" is used to generate "),t("a",{attrs:{href:"#signatures"}},[g._v("digital signatures")]),g._v(" to prove that an "),t("code",[g._v("Address")]),g._v(" associated with the "),t("code",[g._v("PrivKey")]),g._v(" approved of a given "),t("code",[g._v("message")]),g._v(".")],1),g._v(" "),t("p",[g._v("For HD key derivation the Cosmos SDK uses a standard called "),t("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[g._v("BIP32"),t("OutboundLink")],1),g._v(". The BIP32 allows users to create an HD wallet (as specified in "),t("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[g._v("BIP44"),t("OutboundLink")],1),g._v(") - a set of accounts derived from an initial secret seed. A seed is usually created from a 12- or 24-word mnemonic. A single seed can derive any number of "),t("code",[g._v("PrivKey")]),g._v("s using a one-way cryptographic function. Then, a "),t("code",[g._v("PubKey")]),g._v(" can be derived from the "),t("code",[g._v("PrivKey")]),g._v(". Naturally, the mnemonic is the most sensitive information, as private keys can always be re-generated if the mnemonic is preserved.")]),g._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"text",base64:"ICAgICBBY2NvdW50IDAgICAgICAgICAgICAgICAgICAgICAgICAgQWNjb3VudCAxICAgICAgICAgICAgICAgICAgICAgICAgIEFjY291bnQgMgoKKy0tLS0tLS0tLS0tLS0tLS0tLSsgICAgICAgICAgICAgICstLS0tLS0tLS0tLS0tLS0tLS0rICAgICAgICAgICAgICAgKy0tLS0tLS0tLS0tLS0tLS0tLSsKfCAgICAgICAgICAgICAgICAgIHwgICAgICAgICAgICAgIHwgICAgICAgICAgICAgICAgICB8ICAgICAgICAgICAgICAgfCAgICAgICAgICAgICAgICAgIHwKfCAgICBBZGRyZXNzIDAgICAgIHwgICAgICAgICAgICAgIHwgICAgQWRkcmVzcyAxICAgICB8ICAgICAgICAgICAgICAgfCAgICBBZGRyZXNzIDIgICAgIHwKfCAgICAgICAgXiAgICAgICAgIHwgICAgICAgICAgICAgIHwgICAgICAgIF4gICAgICAgICB8ICAgICAgICAgICAgICAgfCAgICAgICAgXiAgICAgICAgIHwKfCAgICAgICAgfCAgICAgICAgIHwgICAgICAgICAgICAgIHwgICAgICAgIHwgICAgICAgICB8ICAgICAgICAgICAgICAgfCAgICAgICAgfCAgICAgICAgIHwKfCAgICAgICAgfCAgICAgICAgIHwgICAgICAgICAgICAgIHwgICAgICAgIHwgICAgICAgICB8ICAgICAgICAgICAgICAgfCAgICAgICAgfCAgICAgICAgIHwKfCAgICAgICAgfCAgICAgICAgIHwgICAgICAgICAgICAgIHwgICAgICAgIHwgICAgICAgICB8ICAgICAgICAgICAgICAgfCAgICAgICAgfCAgICAgICAgIHwKfCAgICAgICAgKyAgICAgICAgIHwgICAgICAgICAgICAgIHwgICAgICAgICsgICAgICAgICB8ICAgICAgICAgICAgICAgfCAgICAgICAgKyAgICAgICAgIHwKfCAgUHVibGljIGtleSAwICAgIHwgICAgICAgICAgICAgIHwgIFB1YmxpYyBrZXkgMSAgICB8ICAgICAgICAgICAgICAgfCAgUHVibGljIGtleSAyICAgIHwKfCAgICAgICAgXiAgICAgICAgIHwgICAgICAgICAgICAgIHwgICAgICAgIF4gICAgICAgICB8ICAgICAgICAgICAgICAgfCAgICAgICAgXiAgICAgICAgIHwKfCAgICAgICAgfCAgICAgICAgIHwgICAgICAgICAgICAgIHwgICAgICAgIHwgICAgICAgICB8ICAgICAgICAgICAgICAgfCAgICAgICAgfCAgICAgICAgIHwKfCAgICAgICAgfCAgICAgICAgIHwgICAgICAgICAgICAgIHwgICAgICAgIHwgICAgICAgICB8ICAgICAgICAgICAgICAgfCAgICAgICAgfCAgICAgICAgIHwKfCAgICAgICAgfCAgICAgICAgIHwgICAgICAgICAgICAgIHwgICAgICAgIHwgICAgICAgICB8ICAgICAgICAgICAgICAgfCAgICAgICAgfCAgICAgICAgIHwKfCAgICAgICAgKyAgICAgICAgIHwgICAgICAgICAgICAgIHwgICAgICAgICsgICAgICAgICB8ICAgICAgICAgICAgICAgfCAgICAgICAgKyAgICAgICAgIHwKfCAgUHJpdmF0ZSBrZXkgMCAgIHwgICAgICAgICAgICAgIHwgIFByaXZhdGUga2V5IDEgICB8ICAgICAgICAgICAgICAgfCAgUHJpdmF0ZSBrZXkgMiAgIHwKfCAgICAgICAgXiAgICAgICAgIHwgICAgICAgICAgICAgIHwgICAgICAgIF4gICAgICAgICB8ICAgICAgICAgICAgICAgfCAgICAgICAgXiAgICAgICAgIHwKKy0tLS0tLS0tLS0tLS0tLS0tLSsgICAgICAgICAgICAgICstLS0tLS0tLS0tLS0tLS0tLS0rICAgICAgICAgICAgICAgKy0tLS0tLS0tLS0tLS0tLS0tLSsKICAgICAgICAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfAogICAgICAgICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8CiAgICAgICAgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwKICAgICAgICAgKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKwogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArLS0tLS0tLS0tKy0tLS0tLS0tLSsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICAgICAgICAgICAgICB8CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE1hc3RlciBQcml2S2V5ICAgfAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgICAgICAgICAgICAgIHwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKy0tLS0tLS0tLS0tLS0tLS0tLS0rCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICstLS0tLS0tLS0rLS0tLS0tLS0tKwogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgICAgICAgICAgICAgIHwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTW5lbW9uaWMgKFNlZWQpICB8CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgICAgICAgICAgICAgfAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArLS0tLS0tLS0tLS0tLS0tLS0tLSsK"}}),g._v(" "),t("p",[g._v("In the Cosmos SDK, keys are stored and managed by using an object called a "),t("a",{attrs:{href:"#keyring"}},[t("code",[g._v("Keyring")])]),g._v(".")]),g._v(" "),t("h2",{attrs:{id:"keys-accounts-addresses-and-signatures"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keys-accounts-addresses-and-signatures"}},[g._v("#")]),g._v(" Keys, accounts, addresses, and signatures")]),g._v(" "),t("p",[g._v("The principal way of authenticating a user is done using "),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Digital_signature",target:"_blank",rel:"noopener noreferrer"}},[g._v("digital signatures"),t("OutboundLink")],1),g._v(". Users sign transactions using their own private key. Signature verification is done with the associated public key. For on-chain signature verification purposes, we store the public key in an "),t("code",[g._v("Account")]),g._v(" object (alongside other data required for a proper transaction validation).")]),g._v(" "),t("p",[g._v("In the node, all data is stored using Protocol Buffers serialization.")]),g._v(" "),t("p",[g._v("The Cosmos SDK supports the following digital key schemes for creating digital signatures:")]),g._v(" "),t("ul",[t("li",[t("code",[g._v("secp256k1")]),g._v(", as implemented in the "),t("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/v0.42.1/crypto/keys/secp256k1/secp256k1.go",target:"_blank",rel:"noopener noreferrer"}},[g._v("Cosmos SDK's "),t("code",[g._v("crypto/keys/secp256k1")]),g._v(" package"),t("OutboundLink")],1),g._v(".")]),g._v(" "),t("li",[t("code",[g._v("secp256r1")]),g._v(", as implemented in the "),t("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/master/crypto/keys/secp256r1/pubkey.go",target:"_blank",rel:"noopener noreferrer"}},[g._v("Cosmos SDK's "),t("code",[g._v("crypto/keys/secp256r1")]),g._v(" package"),t("OutboundLink")],1),g._v(",")]),g._v(" "),t("li",[t("code",[g._v("tm-ed25519")]),g._v(", as implemented in the "),t("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/v0.42.1/crypto/keys/ed25519/ed25519.go",target:"_blank",rel:"noopener noreferrer"}},[g._v("Cosmos SDK "),t("code",[g._v("crypto/keys/ed25519")]),g._v(" package"),t("OutboundLink")],1),g._v(". This scheme is supported only for the consensus validation.")])]),g._v(" "),t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"center"}}),g._v(" "),t("th",{staticStyle:{"text-align":"center"}},[g._v("Address length in bytes")]),g._v(" "),t("th",{staticStyle:{"text-align":"center"}},[g._v("Public key length in bytes")]),g._v(" "),t("th",{staticStyle:{"text-align":"center"}},[g._v("Used for transaction authentication")]),g._v(" "),t("th",{staticStyle:{"text-align":"center"}},[g._v("Used for consensus (tendermint)")])])]),g._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"center"}},[t("code",[g._v("secp256k1")])]),g._v(" "),t("td",{staticStyle:{"text-align":"center"}},[g._v("20")]),g._v(" "),t("td",{staticStyle:{"text-align":"center"}},[g._v("33")]),g._v(" "),t("td",{staticStyle:{"text-align":"center"}},[g._v("yes")]),g._v(" "),t("td",{staticStyle:{"text-align":"center"}},[g._v("no")])]),g._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[t("code",[g._v("secp256r1")])]),g._v(" "),t("td",{staticStyle:{"text-align":"center"}},[g._v("32")]),g._v(" "),t("td",{staticStyle:{"text-align":"center"}},[g._v("33")]),g._v(" "),t("td",{staticStyle:{"text-align":"center"}},[g._v("yes")]),g._v(" "),t("td",{staticStyle:{"text-align":"center"}},[g._v("no")])]),g._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[t("code",[g._v("tm-ed25519")])]),g._v(" "),t("td",{staticStyle:{"text-align":"center"}},[g._v("-- not used --")]),g._v(" "),t("td",{staticStyle:{"text-align":"center"}},[g._v("32")]),g._v(" "),t("td",{staticStyle:{"text-align":"center"}},[g._v("no")]),g._v(" "),t("td",{staticStyle:{"text-align":"center"}},[g._v("yes")])])])]),g._v(" "),t("h2",{attrs:{id:"addresses"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#addresses"}},[g._v("#")]),g._v(" Addresses")]),g._v(" "),t("p",[t("code",[g._v("Addresses")]),g._v(" and "),t("code",[g._v("PubKey")]),g._v("s are both public information that identifies actors in the application. "),t("code",[g._v("Account")]),g._v(" is used to store authentication information. The basic account implementation is provided by a "),t("code",[g._v("BaseAccount")]),g._v(" object.")]),g._v(" "),t("p",[g._v("Each account is identified using "),t("code",[g._v("Address")]),g._v(" which is a sequence of bytes derived from a public key. In the Cosmos SDK, we define 3 types of addresses that specify a context where an account is used:")]),g._v(" "),t("ul",[t("li",[t("code",[g._v("AccAddress")]),g._v(" identifies users (the sender of a "),t("code",[g._v("message")]),g._v(").")]),g._v(" "),t("li",[t("code",[g._v("ValAddress")]),g._v(" identifies validator operators.")]),g._v(" "),t("li",[t("code",[g._v("ConsAddress")]),g._v(" identifies validator nodes that are participating in consensus. Validator nodes are derived using the "),t("strong",[t("code",[g._v("ed25519")])]),g._v(" curve.")])]),g._v(" "),t("p",[g._v("These types implement the "),t("code",[g._v("Address")]),g._v(" interface:")]),g._v(" "),t("p",[t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gQWRkcmVzcyBpcyBhIGNvbW1vbiBpbnRlcmZhY2UgZm9yIGRpZmZlcmVudCB0eXBlcyBvZiBhZGRyZXNzZXMgdXNlZCBieSB0aGUgU0RLCnR5cGUgQWRkcmVzcyBpbnRlcmZhY2UgewoJRXF1YWxzKEFkZHJlc3MpIGJvb2wKCUVtcHR5KCkgYm9vbAoJTWFyc2hhbCgpIChbXWJ5dGUsIGVycm9yKQoJTWFyc2hhbEpTT04oKSAoW11ieXRlLCBlcnJvcikKCUJ5dGVzKCkgW11ieXRlCglTdHJpbmcoKSBzdHJpbmcKCUZvcm1hdChzIGZtdC5TdGF0ZSwgdmVyYiBydW5lKQp9CgovLyBFbnN1cmUgdGhhdCBkaWZmZXJlbnQgYWRkcmVzcyB0eXBlcyBpbXBsZW1lbnQgdGhlIGludGVyZmFjZQp2YXIgXyBBZGRyZXNzID0gQWNjQWRkcmVzc3t9CnZhciBfIEFkZHJlc3MgPSBWYWxBZGRyZXNze30KdmFyIF8gQWRkcmVzcyA9IENvbnNBZGRyZXNze30KCnZhciBfIHlhbWwuTWFyc2hhbGVyID0gQWNjQWRkcmVzc3t9CnZhciBfIHlhbWwuTWFyc2hhbGVyID0gVmFsQWRkcmVzc3t9CnZhciBfIHlhbWwuTWFyc2hhbGVyID0gQ29uc0FkZHJlc3N7fQo="}})],1),g._v(" "),t("p",[g._v("Address construction algorithm is defined in "),t("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/master/docs/architecture/adr-028-public-key-addresses.md",target:"_blank",rel:"noopener noreferrer"}},[g._v("ADR-28"),t("OutboundLink")],1),g._v(".\nHere is the standard way to obtain an account address from a "),t("code",[g._v("pub")]),g._v(" public key:")]),g._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"c2RrLkFjY0FkZHJlc3MocHViLkFkZHJlc3MoKS5CeXRlcygpKQo="}}),g._v(" "),t("p",[g._v("Of note, the "),t("code",[g._v("Marshal()")]),g._v(" and "),t("code",[g._v("Bytes()")]),g._v(" method both return the same raw "),t("code",[g._v("[]byte")]),g._v(" form of the address. "),t("code",[g._v("Marshal()")]),g._v(" is required for Protobuf compatibility.")]),g._v(" "),t("p",[g._v("For user interaction, addresses are formatted using "),t("a",{attrs:{href:"https://en.bitcoin.it/wiki/Bech32",target:"_blank",rel:"noopener noreferrer"}},[g._v("Bech32"),t("OutboundLink")],1),g._v(" and implemented by the "),t("code",[g._v("String")]),g._v(" method. The Bech32 method is the only supported format to use when interacting with a blockchain. The Bech32 human-readable part (Bech32 prefix) is used to denote an address type. Example:")]),g._v(" "),t("p",[t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gU3RyaW5nIGltcGxlbWVudHMgdGhlIFN0cmluZ2VyIGludGVyZmFjZS4KZnVuYyAoYWEgQWNjQWRkcmVzcykgU3RyaW5nKCkgc3RyaW5nIHsKCWlmIGFhLkVtcHR5KCkgewoJCXJldHVybiAmcXVvdDsmcXVvdDsKCX0KCgliZWNoMzJQcmVmaXhBY2NBZGRyIDo9IEdldENvbmZpZygpLkdldEJlY2gzMkFjY291bnRBZGRyUHJlZml4KCkKCgliZWNoMzJBZGRyLCBlcnIgOj0gYmVjaDMyLkNvbnZlcnRBbmRFbmNvZGUoYmVjaDMyUHJlZml4QWNjQWRkciwgYWEuQnl0ZXMoKSkKCWlmIGVyciAhPSBuaWwgewoJCXBhbmljKGVycikKCX0KCglyZXR1cm4gYmVjaDMyQWRkcgp9"}})],1),g._v(" "),t("table",[t("thead",[t("tr",[t("th"),g._v(" "),t("th",[g._v("Address Bech32 Prefix")])])]),g._v(" "),t("tbody",[t("tr",[t("td",[g._v("Accounts")]),g._v(" "),t("td",[g._v("cosmos")])]),g._v(" "),t("tr",[t("td",[g._v("Validator Operator")]),g._v(" "),t("td",[g._v("cosmosvaloper")])]),g._v(" "),t("tr",[t("td",[g._v("Consensus Nodes")]),g._v(" "),t("td",[g._v("cosmosvalcons")])])])]),g._v(" "),t("h3",{attrs:{id:"public-keys"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#public-keys"}},[g._v("#")]),g._v(" Public Keys")]),g._v(" "),t("p",[g._v("Public keys in Cosmos SDK are defined by "),t("code",[g._v("cryptotypes.PubKey")]),g._v(" interface. Since public keys are saved in a store, "),t("code",[g._v("cryptotypes.PubKey")]),g._v(" extends the "),t("code",[g._v("proto.Message")]),g._v(" interface:")]),g._v(" "),t("p",[t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gUHViS2V5IGRlZmluZXMgYSBwdWJsaWMga2V5IGFuZCBleHRlbmRzIHByb3RvLk1lc3NhZ2UuCnR5cGUgUHViS2V5IGludGVyZmFjZSB7Cglwcm90by5NZXNzYWdlCgoJQWRkcmVzcygpIEFkZHJlc3MKCUJ5dGVzKCkgW11ieXRlCglWZXJpZnlTaWduYXR1cmUobXNnIFtdYnl0ZSwgc2lnIFtdYnl0ZSkgYm9vbAoJRXF1YWxzKFB1YktleSkgYm9vbAoJVHlwZSgpIHN0cmluZwp9"}})],1),g._v(" "),t("p",[g._v("A compressed format is used for "),t("code",[g._v("secp256k1")]),g._v(" and "),t("code",[g._v("secp256r1")]),g._v(" serialization.")]),g._v(" "),t("ul",[t("li",[g._v("The first byte is a "),t("code",[g._v("0x02")]),g._v(" byte if the "),t("code",[g._v("y")]),g._v("-coordinate is the lexicographically largest of the two associated with the "),t("code",[g._v("x")]),g._v("-coordinate.")]),g._v(" "),t("li",[g._v("Otherwise the first byte is a "),t("code",[g._v("0x03")]),g._v(".")])]),g._v(" "),t("p",[g._v("This prefix is followed by the "),t("code",[g._v("x")]),g._v("-coordinate.")]),g._v(" "),t("p",[g._v("Public Keys are not used to reference accounts (or users) and in general are not used when composing transaction messages (with few exceptions: "),t("code",[g._v("MsgCreateValidator")]),g._v(", "),t("code",[g._v("Validator")]),g._v(" and "),t("code",[g._v("Multisig")]),g._v(" messages).\nFor user interactions, "),t("code",[g._v("PubKey")]),g._v(" is formatted using Protobufs JSON ("),t("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/release/v0.42.x/codec/json.go#L12",target:"_blank",rel:"noopener noreferrer"}},[g._v("ProtoMarshalJSON"),t("OutboundLink")],1),g._v(" function). Example:")]),g._v(" "),t("p",[t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gTmV3S2V5T3V0cHV0IGNyZWF0ZXMgYSBkZWZhdWx0IEtleU91dHB1dCBpbnN0YW5jZSB3aXRob3V0IE1uZW1vbmljLCBUaHJlc2hvbGQgYW5kIFB1YktleXMKZnVuYyBOZXdLZXlPdXRwdXQobmFtZSBzdHJpbmcsIGtleVR5cGUgS2V5VHlwZSwgYSBzZGsuQWRkcmVzcywgcGsgY3J5cHRvdHlwZXMuUHViS2V5KSAoS2V5T3V0cHV0LCBlcnJvcikgeyAvLyBub2xpbnQ6aW50ZXJmYWNlcgoJYXBrLCBlcnIgOj0gY29kZWN0eXBlcy5OZXdBbnlXaXRoVmFsdWUocGspCglpZiBlcnIgIT0gbmlsIHsKCQlyZXR1cm4gS2V5T3V0cHV0e30sIGVycgoJfQoJYnosIGVyciA6PSBjb2RlYy5Qcm90b01hcnNoYWxKU09OKGFwaywgbmlsKQoJaWYgZXJyICE9IG5pbCB7CgkJcmV0dXJuIEtleU91dHB1dHt9LCBlcnIKCX0KCXJldHVybiBLZXlPdXRwdXR7CgkJTmFtZTogICAgbmFtZSwKCQlUeXBlOiAgICBrZXlUeXBlLlN0cmluZygpLAoJCUFkZHJlc3M6IGEuU3RyaW5nKCksCgkJUHViS2V5OiAgc3RyaW5nKGJ6KSwKCX0sIG5pbAp9"}})],1),g._v(" "),t("h2",{attrs:{id:"keyring"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keyring"}},[g._v("#")]),g._v(" Keyring")]),g._v(" "),t("p",[g._v("A "),t("code",[g._v("Keyring")]),g._v(" is an object that stores and manages accounts. In the Cosmos SDK, a "),t("code",[g._v("Keyring")]),g._v(" implementation follows the "),t("code",[g._v("Keyring")]),g._v(" interface:")]),g._v(" "),t("p",[t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gS2V5cmluZyBleHBvc2VzIG9wZXJhdGlvbnMgb3ZlciBhIGJhY2tlbmQgc3VwcG9ydGVkIGJ5IGdpdGh1Yi5jb20vOTlkZXNpZ25zL2tleXJpbmcuCnR5cGUgS2V5cmluZyBpbnRlcmZhY2UgewoJLy8gTGlzdCBhbGwga2V5cy4KCUxpc3QoKSAoW11JbmZvLCBlcnJvcikKCgkvLyBTdXBwb3J0ZWQgc2lnbmluZyBhbGdvcml0aG1zIGZvciBLZXlyaW5nIGFuZCBMZWRnZXIgcmVzcGVjdGl2ZWx5LgoJU3VwcG9ydGVkQWxnb3JpdGhtcygpIChTaWduaW5nQWxnb0xpc3QsIFNpZ25pbmdBbGdvTGlzdCkKCgkvLyBLZXkgYW5kIEtleUJ5QWRkcmVzcyByZXR1cm4ga2V5cyBieSB1aWQgYW5kIGFkZHJlc3MgcmVzcGVjdGl2ZWx5LgoJS2V5KHVpZCBzdHJpbmcpIChJbmZvLCBlcnJvcikKCUtleUJ5QWRkcmVzcyhhZGRyZXNzIHNkay5BZGRyZXNzKSAoSW5mbywgZXJyb3IpCgoJLy8gRGVsZXRlIGFuZCBEZWxldGVCeUFkZHJlc3MgcmVtb3ZlIGtleXMgZnJvbSB0aGUga2V5cmluZy4KCURlbGV0ZSh1aWQgc3RyaW5nKSBlcnJvcgoJRGVsZXRlQnlBZGRyZXNzKGFkZHJlc3Mgc2RrLkFkZHJlc3MpIGVycm9yCgoJLy8gTmV3TW5lbW9uaWMgZ2VuZXJhdGVzIGEgbmV3IG1uZW1vbmljLCBkZXJpdmVzIGEgaGllcmFyY2hpY2FsIGRldGVybWluaXN0aWMKCS8vIGtleSBmcm9tIHRoYXQsIGFuZCBwZXJzaXN0cyBpdCB0byB0aGUgc3RvcmFnZS4gUmV0dXJucyB0aGUgZ2VuZXJhdGVkIG1uZW1vbmljIGFuZCB0aGUga2V5CgkvLyBJbmZvLiBJdCByZXR1cm5zIGFuIGVycm9yIGlmIGl0IGZhaWxzIHRvIGdlbmVyYXRlIGEga2V5IGZvciB0aGUgZ2l2ZW4gYWxnbyB0eXBlLCBvciBpZgoJLy8gYW5vdGhlciBrZXkgaXMgYWxyZWFkeSBzdG9yZWQgdW5kZXIgdGhlIHNhbWUgbmFtZS4KCU5ld01uZW1vbmljKHVpZCBzdHJpbmcsIGxhbmd1YWdlIExhbmd1YWdlLCBoZFBhdGggc3RyaW5nLCBhbGdvIFNpZ25hdHVyZUFsZ28pIChJbmZvLCBzdHJpbmcsIGVycm9yKQoKCS8vIE5ld0FjY291bnQgY29udmVydHMgYSBtbmVtb25pYyB0byBhIHByaXZhdGUga2V5IGFuZCBCSVAtMzkgSEQgUGF0aCBhbmQgcGVyc2lzdHMgaXQuCglOZXdBY2NvdW50KHVpZCwgbW5lbW9uaWMsIGJpcDM5UGFzc3dkLCBoZFBhdGggc3RyaW5nLCBhbGdvIFNpZ25hdHVyZUFsZ28pIChJbmZvLCBlcnJvcikKCgkvLyBTYXZlTGVkZ2VyS2V5IHJldHJpZXZlcyBhIHB1YmxpYyBrZXkgcmVmZXJlbmNlIGZyb20gYSBMZWRnZXIgZGV2aWNlIGFuZCBwZXJzaXN0cyBpdC4KCVNhdmVMZWRnZXJLZXkodWlkIHN0cmluZywgYWxnbyBTaWduYXR1cmVBbGdvLCBocnAgc3RyaW5nLCBjb2luVHlwZSwgYWNjb3VudCwgaW5kZXggdWludDMyKSAoSW5mbywgZXJyb3IpCgoJLy8gU2F2ZVB1YktleSBzdG9yZXMgYSBwdWJsaWMga2V5IGFuZCByZXR1cm5zIHRoZSBwZXJzaXN0ZWQgSW5mbyBzdHJ1Y3R1cmUuCglTYXZlUHViS2V5KHVpZCBzdHJpbmcsIHB1YmtleSB0eXBlcy5QdWJLZXksIGFsZ28gaGQuUHViS2V5VHlwZSkgKEluZm8sIGVycm9yKQoKCS8vIFNhdmVNdWx0aXNpZyBzdG9yZXMgYW5kIHJldHVybnMgYSBuZXcgbXVsdHNpZyAob2ZmbGluZSkga2V5IHJlZmVyZW5jZS4KCVNhdmVNdWx0aXNpZyh1aWQgc3RyaW5nLCBwdWJrZXkgdHlwZXMuUHViS2V5KSAoSW5mbywgZXJyb3IpCgoJU2lnbmVyCgoJSW1wb3J0ZXIKCUV4cG9ydGVyCn0="}})],1),g._v(" "),t("p",[g._v("The default implementation of "),t("code",[g._v("Keyring")]),g._v(" comes from the third-party "),t("a",{attrs:{href:"https://github.com/99designs/keyring",target:"_blank",rel:"noopener noreferrer"}},[t("code",[g._v("99designs/keyring")]),t("OutboundLink")],1),g._v(" library.")]),g._v(" "),t("p",[g._v("A few notes on the "),t("code",[g._v("Keyring")]),g._v(" methods:")]),g._v(" "),t("ul",[t("li",[t("p",[t("code",[g._v("Sign(uid string, payload []byte) ([]byte, sdkcrypto.PubKey, error)")]),g._v(" strictly deals with the signature of the "),t("code",[g._v("payload")]),g._v(" bytes. You must prepare and encode the transaction into a canonical "),t("code",[g._v("[]byte")]),g._v(" form. Because protobuf is not deterministic, it has been decided in "),t("RouterLink",{attrs:{to:"/architecture/adr-020-protobuf-transaction-encoding.html"}},[g._v("ADR-020")]),g._v(" that the canonical "),t("code",[g._v("payload")]),g._v(" to sign is the "),t("code",[g._v("SignDoc")]),g._v(" struct, deterministically encoded using "),t("RouterLink",{attrs:{to:"/architecture/adr-027-deterministic-protobuf-serialization.html"}},[g._v("ADR-027")]),g._v(". Note that signature verification is not implemented in the Cosmos SDK by default, it is deferred to the "),t("RouterLink",{attrs:{to:"/core/baseapp.html#antehandler"}},[t("code",[g._v("anteHandler")])]),g._v(".\n"),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gU2lnbkRvYyBpcyB0aGUgdHlwZSB1c2VkIGZvciBnZW5lcmF0aW5nIHNpZ24gYnl0ZXMgZm9yIFNJR05fTU9ERV9ESVJFQ1QuCm1lc3NhZ2UgU2lnbkRvYyB7CiAgLy8gYm9keV9ieXRlcyBpcyBwcm90b2J1ZiBzZXJpYWxpemF0aW9uIG9mIGEgVHhCb2R5IHRoYXQgbWF0Y2hlcyB0aGUKICAvLyByZXByZXNlbnRhdGlvbiBpbiBUeFJhdy4KICBieXRlcyBib2R5X2J5dGVzID0gMTsKCiAgLy8gYXV0aF9pbmZvX2J5dGVzIGlzIGEgcHJvdG9idWYgc2VyaWFsaXphdGlvbiBvZiBhbiBBdXRoSW5mbyB0aGF0IG1hdGNoZXMgdGhlCiAgLy8gcmVwcmVzZW50YXRpb24gaW4gVHhSYXcuCiAgYnl0ZXMgYXV0aF9pbmZvX2J5dGVzID0gMjsKCiAgLy8gY2hhaW5faWQgaXMgdGhlIHVuaXF1ZSBpZGVudGlmaWVyIG9mIHRoZSBjaGFpbiB0aGlzIHRyYW5zYWN0aW9uIHRhcmdldHMuCiAgLy8gSXQgcHJldmVudHMgc2lnbmVkIHRyYW5zYWN0aW9ucyBmcm9tIGJlaW5nIHVzZWQgb24gYW5vdGhlciBjaGFpbiBieSBhbgogIC8vIGF0dGFja2VyCiAgc3RyaW5nIGNoYWluX2lkID0gMzsKCiAgLy8gYWNjb3VudF9udW1iZXIgaXMgdGhlIGFjY291bnQgbnVtYmVyIG9mIHRoZSBhY2NvdW50IGluIHN0YXRlCiAgdWludDY0IGFjY291bnRfbnVtYmVyID0gNDsKfQ=="}})],1)]),g._v(" "),t("li",[t("p",[t("code",[g._v("NewAccount(uid, mnemonic, bip39Passwd, hdPath string, algo SignatureAlgo) (Info, error)")]),g._v(" creates a new account based on the "),t("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[t("code",[g._v("bip44 path")]),t("OutboundLink")],1),g._v(" and persists it on disk. The "),t("code",[g._v("PrivKey")]),g._v(" is "),t("strong",[g._v("never stored unencrypted")]),g._v(", instead it is "),t("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/v0.40.0-rc3/crypto/armor.go",target:"_blank",rel:"noopener noreferrer"}},[g._v("encrypted with a passphrase"),t("OutboundLink")],1),g._v("  before being persisted. In the context of this method, the key type and sequence number refer to the segment of the BIP44 derivation path (for example, "),t("code",[g._v("0")]),g._v(", "),t("code",[g._v("1")]),g._v(", "),t("code",[g._v("2")]),g._v(", ...) that is used to derive a private and a public key from the mnemonic. Using the same mnemonic and derivation path, the same "),t("code",[g._v("PrivKey")]),g._v(", "),t("code",[g._v("PubKey")]),g._v(" and "),t("code",[g._v("Address")]),g._v(" is generated. The following keys are supported by the keyring:")])]),g._v(" "),t("li",[t("p",[t("code",[g._v("secp256k1")])])]),g._v(" "),t("li",[t("p",[t("code",[g._v("ed25519")])])]),g._v(" "),t("li",[t("p",[t("code",[g._v("ExportPrivKeyArmor(uid, encryptPassphrase string) (armor string, err error)")]),g._v(" exports a private key in ASCII-armored encrypted format using the given passphrase. You can then either import the private key again into the keyring using the "),t("code",[g._v("ImportPrivKey(uid, armor, passphrase string)")]),g._v(" function or decrypt it into a raw private key using the "),t("code",[g._v("UnarmorDecryptPrivKey(armorStr string, passphrase string)")]),g._v(" function.")])])]),g._v(" "),t("h2",{attrs:{hide:"",id:"next"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#next"}},[g._v("#")]),g._v(" Next")]),g._v(" "),t("p",{attrs:{hide:""}},[g._v("Learn about "),t("RouterLink",{attrs:{to:"/basics/gas-fees.html"}},[g._v("gas and fees")])],1)],1)}),[],!1,null,null,null);e.default=C.exports}}]);