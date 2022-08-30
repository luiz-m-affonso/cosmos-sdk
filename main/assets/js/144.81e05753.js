(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{614:function(e,t,s){"use strict";s.r(t);var o=s(1),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"grpc-rest-and-tendermint-endpoints"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#grpc-rest-and-tendermint-endpoints"}},[e._v("#")]),e._v(" gRPC, REST, and Tendermint Endpoints")]),e._v(" "),s("p",{attrs:{synopsis:""}},[e._v("This document presents an overview of all the endpoints a node exposes: gRPC, REST as well as some other endpoints.")]),e._v(" "),s("h2",{attrs:{id:"an-overview-of-all-endpoints"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#an-overview-of-all-endpoints"}},[e._v("#")]),e._v(" An Overview of All Endpoints")]),e._v(" "),s("p",[e._v("Each node exposes the following endpoints for users to interact with a node, each endpoint is served on a different port. Details on how to configure each endpoint is provided in the endpoint's own section.")]),e._v(" "),s("ul",[s("li",[e._v("the gRPC server (default port: "),s("code",[e._v("9090")]),e._v("),")]),e._v(" "),s("li",[e._v("the REST server (default port: "),s("code",[e._v("1317")]),e._v("),")]),e._v(" "),s("li",[e._v("the Tendermint RPC endpoint (default port: "),s("code",[e._v("26657")]),e._v(").")])]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",[e._v("The node also exposes some other endpoints, such as the Tendermint P2P endpoint, or the "),s("a",{attrs:{href:"https://docs.tendermint.com/master/nodes/metrics.html#metrics",target:"_blank",rel:"noopener noreferrer"}},[e._v("Prometheus endpoint"),s("OutboundLink")],1),e._v(", which are not directly related to the Cosmos SDK. Please refer to the "),s("a",{attrs:{href:"https://docs.tendermint.com/master/tendermint-core/using-tendermint.html#configuration",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tendermint documentation"),s("OutboundLink")],1),e._v(" for more information about these endpoints.")])]),e._v(" "),s("h2",{attrs:{id:"grpc-server"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#grpc-server"}},[e._v("#")]),e._v(" gRPC Server")]),e._v(" "),s("p",[e._v("In the Cosmos SDK, Protobuf is the main "),s("a",{attrs:{href:"./encoding"}},[e._v("encoding")]),e._v(" library. This brings a wide range of Protobuf-based tools that can be plugged into the Cosmos SDK. One such tool is "),s("a",{attrs:{href:"https://grpc.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("gRPC"),s("OutboundLink")],1),e._v(", a modern open-source high performance RPC framework that has decent client support in several languages.")]),e._v(" "),s("p",[e._v("Each module exposes a "),s("RouterLink",{attrs:{to:"/building-modules/messages-and-queries.html#queries"}},[e._v("Protobuf "),s("code",[e._v("Query")]),e._v(" service")]),e._v(" that defines state queries. The "),s("code",[e._v("Query")]),e._v(" services and a transaction service used to broadcast transactions are hooked up to the gRPC server via the following function inside the application:")],1),e._v(" "),s("p",[s("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"CQkvLyBzZXJ2ZXIuCgkJUmVnaXN0ZXJHUlBDU2VydmVyKGdycGMuU2VydmVyKQo="}})],1),e._v(" "),s("p",[e._v("Note: It is not possible to expose any "),s("RouterLink",{attrs:{to:"/building-modules/messages-and-queries.html#messages"}},[e._v("Protobuf "),s("code",[e._v("Msg")]),e._v(" service")]),e._v(" endpoints via gRPC. Transactions must be generated and signed using the CLI or programmatically before they can be broadcasted using gRPC. See "),s("RouterLink",{attrs:{to:"/run-node/txs.html"}},[e._v("Generating, Signing, and Broadcasting Transactions")]),e._v(" for more information.")],1),e._v(" "),s("p",[e._v("The "),s("code",[e._v("grpc.Server")]),e._v(" is a concrete gRPC server, which spawns and serves all gRPC query requests and a broadcast transaction request. This server can be configured inside "),s("code",[e._v("~/.simapp/config/app.toml")]),e._v(":")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("grpc.enable = true|false")]),e._v(" field defines if the gRPC server should be enabled. Defaults to "),s("code",[e._v("true")]),e._v(".")]),e._v(" "),s("li",[s("code",[e._v("grpc.address = {string}")]),e._v(" field defines the address (really, the port, since the host should be kept at "),s("code",[e._v("0.0.0.0")]),e._v(") the server should bind to. Defaults to "),s("code",[e._v("0.0.0.0:9090")]),e._v(".")])]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",[s("code",[e._v("~/.simapp")]),e._v(" is the directory where the node's configuration and databases are stored. By default, it's set to "),s("code",[e._v("~/.{app_name}")]),e._v(".")])]),e._v(" "),s("p",[e._v("Once the gRPC server is started, you can send requests to it using a gRPC client. Some examples are given in our "),s("RouterLink",{attrs:{to:"/run-node/interact-node.html#using-grpc"}},[e._v("Interact with the Node")]),e._v(" tutorial.")],1),e._v(" "),s("p",[e._v("An overview of all available gRPC endpoints shipped with the Cosmos SDK is "),s("a",{attrs:{href:"https://buf.build/cosmos/cosmos-sdk",target:"_blank",rel:"noopener noreferrer"}},[e._v("Protobuf documentation"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("h2",{attrs:{id:"rest-server"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rest-server"}},[e._v("#")]),e._v(" REST Server")]),e._v(" "),s("p",[e._v("Cosmos SDK supports REST routes via gRPC-gateway.")]),e._v(" "),s("p",[e._v("All routes are configured under the following fields in "),s("code",[e._v("~/.simapp/config/app.toml")]),e._v(":")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("api.enable = true|false")]),e._v(" field defines if the REST server should be enabled. Defaults to "),s("code",[e._v("false")]),e._v(".")]),e._v(" "),s("li",[s("code",[e._v("api.address = {string}")]),e._v(" field defines the address (really, the port, since the host should be kept at "),s("code",[e._v("0.0.0.0")]),e._v(") the server should bind to. Defaults to "),s("code",[e._v("tcp://0.0.0.0:1317")]),e._v(".")]),e._v(" "),s("li",[e._v("some additional API configuration options are defined in "),s("code",[e._v("~/.simapp/config/app.toml")]),e._v(", along with comments, please refer to that file directly.")])]),e._v(" "),s("h3",{attrs:{id:"grpc-gateway-rest-routes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#grpc-gateway-rest-routes"}},[e._v("#")]),e._v(" gRPC-gateway REST Routes")]),e._v(" "),s("p",[e._v("If, for various reasons, you cannot use gRPC (for example, you are building a web application, and browsers don't support HTTP2 on which gRPC is built), then the Cosmos SDK offers REST routes via gRPC-gateway.")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://grpc-ecosystem.github.io/grpc-gateway/",target:"_blank",rel:"noopener noreferrer"}},[e._v("gRPC-gateway"),s("OutboundLink")],1),e._v(" is a tool to expose gRPC endpoints as REST endpoints. For each gRPC endpoint defined in a Protobuf "),s("code",[e._v("Query")]),e._v(" service, the Cosmos SDK offers a REST equivalent. For instance, querying a balance could be done via the "),s("code",[e._v("/cosmos.bank.v1beta1.QueryAllBalances")]),e._v(" gRPC endpoint, or alternatively via the gRPC-gateway "),s("code",[e._v('"/cosmos/bank/v1beta1/balances/{address}"')]),e._v(" REST endpoint: both will return the same result. For each RPC method defined in a Protobuf "),s("code",[e._v("Query")]),e._v(" service, the corresponding REST endpoint is defined as an option:")]),e._v(" "),s("p",[s("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"CiAgLy8gQWxsQmFsYW5jZXMgcXVlcmllcyB0aGUgYmFsYW5jZSBvZiBhbGwgY29pbnMgZm9yIGEgc2luZ2xlIGFjY291bnQuCiAgcnBjIEFsbEJhbGFuY2VzKFF1ZXJ5QWxsQmFsYW5jZXNSZXF1ZXN0KSByZXR1cm5zIChRdWVyeUFsbEJhbGFuY2VzUmVzcG9uc2UpIHsKICAgIG9wdGlvbiAoZ29vZ2xlLmFwaS5odHRwKS5nZXQgPSAmcXVvdDsvY29zbW9zL2JhbmsvdjFiZXRhMS9iYWxhbmNlcy97YWRkcmVzc30mcXVvdDs7"}})],1),e._v(" "),s("p",[e._v("For application developers, gRPC-gateway REST routes needs to be wired up to the REST server, this is done by calling the "),s("code",[e._v("RegisterGRPCGatewayRoutes")]),e._v(" function on the ModuleManager.")]),e._v(" "),s("h3",{attrs:{id:"swagger"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#swagger"}},[e._v("#")]),e._v(" Swagger")]),e._v(" "),s("p",[e._v("A "),s("a",{attrs:{href:"https://swagger.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Swagger"),s("OutboundLink")],1),e._v(" (or OpenAPIv2) specification file is exposed under the "),s("code",[e._v("/swagger")]),e._v(" route on the API server. Swagger is an open specification describing the API endpoints a server serves, including description, input arguments, return types and much more about each endpoint.")]),e._v(" "),s("p",[e._v("Enabling the "),s("code",[e._v("/swagger")]),e._v(" endpoint is configurable inside "),s("code",[e._v("~/.simapp/config/app.toml")]),e._v(" via the "),s("code",[e._v("api.swagger")]),e._v(" field, which is set to true by default.")]),e._v(" "),s("p",[e._v("For application developers, you may want to generate your own Swagger definitions based on your custom modules.\nThe Cosmos SDK's "),s("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/v0.46.0/scripts/protoc-swagger-gen.sh",target:"_blank",rel:"noopener noreferrer"}},[e._v("Swagger generation script"),s("OutboundLink")],1),e._v(" is a good place to start.")]),e._v(" "),s("h2",{attrs:{id:"tendermint-rpc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tendermint-rpc"}},[e._v("#")]),e._v(" Tendermint RPC")]),e._v(" "),s("p",[e._v("Independently from the Cosmos SDK, Tendermint also exposes a RPC server. This RPC server can be configured by tuning parameters under the "),s("code",[e._v("rpc")]),e._v(" table in the "),s("code",[e._v("~/.simapp/config/config.toml")]),e._v(", the default listening address is "),s("code",[e._v("tcp://0.0.0.0:26657")]),e._v(". An OpenAPI specification of all Tendermint RPC endpoints is available "),s("a",{attrs:{href:"https://docs.tendermint.com/master/rpc/",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("p",[e._v("Some Tendermint RPC endpoints are directly related to the Cosmos SDK:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("/abci_query")]),e._v(": this endpoint will query the application for state. As the "),s("code",[e._v("path")]),e._v(" parameter, you can send the following strings:\n"),s("ul",[s("li",[e._v("any Protobuf fully-qualified service method, such as "),s("code",[e._v("/cosmos.bank.v1beta1.Query/AllBalances")]),e._v(". The "),s("code",[e._v("data")]),e._v(" field should then include the method's request parameter(s) encoded as bytes using Protobuf.")]),e._v(" "),s("li",[s("code",[e._v("/app/simulate")]),e._v(": this will simulate a transaction, and return some information such as gas used.")]),e._v(" "),s("li",[s("code",[e._v("/app/version")]),e._v(": this will return the application's version.")]),e._v(" "),s("li",[s("code",[e._v("/store/{path}")]),e._v(": this will query the store directly.")]),e._v(" "),s("li",[s("code",[e._v("/p2p/filter/addr/{port}")]),e._v(": this will return a filtered list of the node's P2P peers by address port.")]),e._v(" "),s("li",[s("code",[e._v("/p2p/filter/id/{id}")]),e._v(": this will return a filtered list of the node's P2P peers by ID.")])])]),e._v(" "),s("li",[s("code",[e._v("/broadcast_tx_{aync,async,commit}")]),e._v(": these 3 endpoint will broadcast a transaction to other peers. CLI, gRPC and REST expose "),s("RouterLink",{attrs:{to:"/core/transactions.html#broadcasting-the-transaction"}},[e._v("a way to broadcast transations")]),e._v(", but they all use these 3 Tendermint RPCs under the hood.")],1)]),e._v(" "),s("h2",{attrs:{id:"comparison-table"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#comparison-table"}},[e._v("#")]),e._v(" Comparison Table")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("Name")]),e._v(" "),s("th",[e._v("Advantages")]),e._v(" "),s("th",[e._v("Disadvantages")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("gRPC")]),e._v(" "),s("td",[e._v("- can use code-generated stubs in various languages"),s("br"),e._v("- supports streaming and bidirectional communication (HTTP2)"),s("br"),e._v("- small wire binary sizes, faster transmission")]),e._v(" "),s("td",[e._v("- based on HTTP2, not available in browsers"),s("br"),e._v("- learning curve (mostly due to Protobuf)")])]),e._v(" "),s("tr",[s("td",[e._v("REST")]),e._v(" "),s("td",[e._v("- ubiquitous"),s("br"),e._v("- client libraries in all languages, faster implementation"),s("br")]),e._v(" "),s("td",[e._v("- only supports unary request-response communication (HTTP1.1)"),s("br"),e._v("- bigger over-the-wire message sizes (JSON)")])]),e._v(" "),s("tr",[s("td",[e._v("Tendermint RPC")]),e._v(" "),s("td",[e._v("- easy to use")]),e._v(" "),s("td",[e._v("- bigger over-the-wire message sizes (JSON)")])])])]),e._v(" "),s("h2",{attrs:{hide:"",id:"next"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#next"}},[e._v("#")]),e._v(" Next")]),e._v(" "),s("p",{attrs:{hide:""}},[e._v("Learn about "),s("RouterLink",{attrs:{to:"/core/cli.html"}},[e._v("the CLI")])],1)])}),[],!1,null,null,null);t.default=r.exports}}]);