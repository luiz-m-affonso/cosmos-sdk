(window.webpackJsonp=window.webpackJsonp||[]).push([[241],{768:function(e,t,s){"use strict";s.r(t);var a=s(1),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"state"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#state"}},[e._v("#")]),e._v(" State")]),e._v(" "),s("h2",{attrs:{id:"class"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#class"}},[e._v("#")]),e._v(" Class")]),e._v(" "),s("p",[e._v("Class is mainly composed of "),s("code",[e._v("id")]),e._v(", "),s("code",[e._v("name")]),e._v(", "),s("code",[e._v("symbol")]),e._v(", "),s("code",[e._v("description")]),e._v(", "),s("code",[e._v("uri")]),e._v(", "),s("code",[e._v("uri_hash")]),e._v(","),s("code",[e._v("data")]),e._v(" where "),s("code",[e._v("id")]),e._v(" is the unique identifier of the class, similar to the Ethereum ERC721 contract address, the others are optional.")]),e._v(" "),s("ul",[s("li",[e._v("Class: "),s("code",[e._v("0x01 | classID | -> ProtocolBuffer(Class)")])])]),e._v(" "),s("h2",{attrs:{id:"nft"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nft"}},[e._v("#")]),e._v(" NFT")]),e._v(" "),s("p",[e._v("NFT is mainly composed of "),s("code",[e._v("class_id")]),e._v(", "),s("code",[e._v("id")]),e._v(", "),s("code",[e._v("uri")]),e._v(", "),s("code",[e._v("uri_hash")]),e._v(" and "),s("code",[e._v("data")]),e._v(". Among them, "),s("code",[e._v("class_id")]),e._v(" and "),s("code",[e._v("id")]),e._v(" are two-tuples that identify the uniqueness of nft, "),s("code",[e._v("uri")]),e._v(" and "),s("code",[e._v("uri_hash")]),e._v(" is optional, which identifies the off-chain storage location of the nft, and "),s("code",[e._v("data")]),e._v(" is an Any type. Use Any chain of "),s("code",[e._v("x/nft")]),e._v(" modules can be customized by extending this field")]),e._v(" "),s("ul",[s("li",[e._v("NFT: "),s("code",[e._v("0x02 | classID | 0x00 | nftID |-> ProtocolBuffer(NFT)")])])]),e._v(" "),s("h2",{attrs:{id:"nftofclassbyowner"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nftofclassbyowner"}},[e._v("#")]),e._v(" NFTOfClassByOwner")]),e._v(" "),s("p",[e._v("NFTOfClassByOwner is mainly to realize the function of querying all nfts using classID and owner, without other redundant functions.")]),e._v(" "),s("ul",[s("li",[e._v("NFTOfClassByOwner: "),s("code",[e._v("0x03 | owner | 0x00 | classID | 0x00 | nftID |-> 0x01")])])]),e._v(" "),s("h2",{attrs:{id:"owner"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#owner"}},[e._v("#")]),e._v(" Owner")]),e._v(" "),s("p",[e._v("Since there is no extra field in NFT to indicate the owner of nft, an additional key-value pair is used to save the ownership of nft. With the transfer of nft, the key-value pair is updated synchronously.")]),e._v(" "),s("ul",[s("li",[e._v("OwnerKey: "),s("code",[e._v("0x04 | classID | 0x00 | nftID |-> owner")])])]),e._v(" "),s("h2",{attrs:{id:"totalsupply"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#totalsupply"}},[e._v("#")]),e._v(" TotalSupply")]),e._v(" "),s("p",[e._v("TotalSupply is responsible for tracking the number of all nfts under a certain class. Mint operation is performed under the changed class, supply increases by one, burn operation, and supply decreases by one.")]),e._v(" "),s("ul",[s("li",[e._v("OwnerKey: "),s("code",[e._v("0x05 | classID |-> totalSupply")])])])])}),[],!1,null,null,null);t.default=o.exports}}]);