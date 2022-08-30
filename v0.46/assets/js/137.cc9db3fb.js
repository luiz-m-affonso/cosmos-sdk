(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{743:function(e,t,a){"use strict";a.r(t);var o=a(1),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"node-client-daemon"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-client-daemon"}},[e._v("#")]),e._v(" Node Client (Daemon)")]),e._v(" "),a("p",{attrs:{synopsis:""}},[e._v("The main endpoint of a Cosmos SDK application is the daemon client, otherwise known as the full-node client. The full-node runs the state-machine, starting from a genesis file. It connects to peers running the same client in order to receive and relay transactions, block proposals and signatures. The full-node is constituted of the application, defined with the Cosmos SDK, and of a consensus engine connected to the application via the ABCI.")]),e._v(" "),a("h2",{attrs:{id:"pre-requisite-readings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pre-requisite-readings"}},[e._v("#")]),e._v(" Pre-requisite Readings")]),e._v(" "),a("ul",[a("li",{attrs:{prereq:""}},[a("RouterLink",{attrs:{to:"/basics/app-anatomy.html"}},[e._v("Anatomy of an SDK application")])],1)]),e._v(" "),a("h2",{attrs:{id:"main-function"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#main-function"}},[e._v("#")]),e._v(" "),a("code",[e._v("main")]),e._v(" function")]),e._v(" "),a("p",[e._v("The full-node client of any Cosmos SDK application is built by running a "),a("code",[e._v("main")]),e._v(" function. The client is generally named by appending the "),a("code",[e._v("-d")]),e._v(" suffix to the application name (e.g. "),a("code",[e._v("appd")]),e._v(" for an application named "),a("code",[e._v("app")]),e._v("), and the "),a("code",[e._v("main")]),e._v(" function is defined in a "),a("code",[e._v("./appd/cmd/main.go")]),e._v(" file. Running this function creates an executable "),a("code",[e._v("appd")]),e._v(" that comes with a set of commands. For an app named "),a("code",[e._v("app")]),e._v(", the main command is "),a("a",{attrs:{href:"#start-command"}},[a("code",[e._v("appd start")])]),e._v(", which starts the full-node.")]),e._v(" "),a("p",[e._v("In general, developers will implement the "),a("code",[e._v("main.go")]),e._v(" function with the following structure:")]),e._v(" "),a("ul",[a("li",[e._v("First, an "),a("RouterLink",{attrs:{to:"/core/encoding.html"}},[a("code",[e._v("appCodec")])]),e._v(" is instantiated for the application.")],1),e._v(" "),a("li",[e._v("Then, the "),a("code",[e._v("config")]),e._v(" is retrieved and config parameters are set. This mainly involves setting the Bech32 prefixes for "),a("RouterLink",{attrs:{to:"/basics/accounts.html#addresses"}},[e._v("addresses")]),e._v(".\n"),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gQ29uZmlnIGlzIHRoZSBzdHJ1Y3R1cmUgdGhhdCBob2xkcyB0aGUgU0RLIGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVycy4KLy8gVGhpcyBjb3VsZCBiZSB1c2VkIHRvIGluaXRpYWxpemUgY2VydGFpbiBjb25maWd1cmF0aW9uIHBhcmFtZXRlcnMgZm9yIHRoZSBTREsuCnR5cGUgQ29uZmlnIHN0cnVjdCB7CglmdWxsRnVuZHJhaXNlclBhdGggIHN0cmluZwoJYmVjaDMyQWRkcmVzc1ByZWZpeCBtYXBbc3RyaW5nXXN0cmluZwoJdHhFbmNvZGVyICAgICAgICAgICBUeEVuY29kZXIKCWFkZHJlc3NWZXJpZmllciAgICAgZnVuYyhbXWJ5dGUpIGVycm9yCgltdHggICAgICAgICAgICAgICAgIHN5bmMuUldNdXRleAoJY29pblR5cGUgICAgICAgICAgICB1aW50MzIKCXNlYWxlZCAgICAgICAgICAgICAgYm9vbAoJc2VhbGVkY2ggICAgICAgICAgICBjaGFuIHN0cnVjdHt9Cn0="}})],1),e._v(" "),a("li",[e._v("Using "),a("a",{attrs:{href:"https://github.com/spf13/cobra",target:"_blank",rel:"noopener noreferrer"}},[e._v("cobra"),a("OutboundLink")],1),e._v(", the root command of the full-node client is created. After that, all the custom commands of the application are added using the "),a("code",[e._v("AddCommand()")]),e._v(" method of "),a("code",[e._v("rootCmd")]),e._v(".")]),e._v(" "),a("li",[e._v("Add default server commands to "),a("code",[e._v("rootCmd")]),e._v(" using the "),a("code",[e._v("server.AddCommands()")]),e._v(" method. These commands are separated from the ones added above since they are standard and defined at Cosmos SDK level. They should be shared by all Cosmos SDK-based applications. They include the most important command: the "),a("a",{attrs:{href:"#start-command"}},[a("code",[e._v("start")]),e._v(" command")]),e._v(".")]),e._v(" "),a("li",[e._v("Prepare and execute the "),a("code",[e._v("executor")]),e._v(".\n"),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gRXhlY3V0b3Igd3JhcHMgdGhlIGNvYnJhIENvbW1hbmQgd2l0aCBhIG5pY2VyIEV4ZWN1dGUgbWV0aG9kCnR5cGUgRXhlY3V0b3Igc3RydWN0IHsKCSpjb2JyYS5Db21tYW5kCglFeGl0IGZ1bmMoaW50KSAvLyB0aGlzIGlzIG9zLkV4aXQgYnkgZGVmYXVsdCwgb3ZlcnJpZGUgaW4gdGVzdHMKfQ=="}})],1)]),e._v(" "),a("p",[e._v("See an example of "),a("code",[e._v("main")]),e._v(" function from the "),a("code",[e._v("simapp")]),e._v(" application, the Cosmos SDK's application for demo purposes:")]),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"cGFja2FnZSBtYWluCgppbXBvcnQgKAoJJnF1b3Q7b3MmcXVvdDsKCgkmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL3NlcnZlciZxdW90OwoJJnF1b3Q7Z2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay9zaW1hcHAvc2ltZC9jbWQmcXVvdDsKKQoKZnVuYyBtYWluKCkgewoJcm9vdENtZCwgXyA6PSBjbWQuTmV3Um9vdENtZCgpCglpZiBlcnIgOj0gY21kLkV4ZWN1dGUocm9vdENtZCk7IGVyciAhPSBuaWwgewoJCXN3aXRjaCBlIDo9IGVyci4odHlwZSkgewoJCWNhc2Ugc2VydmVyLkVycm9yQ29kZToKCQkJb3MuRXhpdChlLkNvZGUpCgkJZGVmYXVsdDoKCQkJb3MuRXhpdCgxKQoJCX0KCX0KfQo="}})],1),e._v(" "),a("h2",{attrs:{id:"start-command"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#start-command"}},[e._v("#")]),e._v(" "),a("code",[e._v("start")]),e._v(" command")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("start")]),e._v(" command is defined in the "),a("code",[e._v("/server")]),e._v(" folder of the Cosmos SDK. It is added to the root command of the full-node client in the "),a("a",{attrs:{href:"#main-function"}},[a("code",[e._v("main")]),e._v(" function")]),e._v(" and called by the end-user to start their node:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"IyBGb3IgYW4gZXhhbXBsZSBhcHAgbmFtZWQgJnF1b3Q7YXBwJnF1b3Q7LCB0aGUgZm9sbG93aW5nIGNvbW1hbmQgc3RhcnRzIHRoZSBmdWxsLW5vZGUuCmFwcGQgc3RhcnQKCiMgVXNpbmcgdGhlIENvc21vcyBTREsncyBvd24gc2ltYXBwLCB0aGUgZm9sbG93aW5nIGNvbW1hbmRzIHN0YXJ0IHRoZSBzaW1hcHAgbm9kZS4Kc2ltZCBzdGFydAo="}}),e._v(" "),a("p",[e._v("As a reminder, the full-node is composed of three conceptual layers: the networking layer, the consensus layer and the application layer. The first two are generally bundled together in an entity called the consensus engine (Tendermint Core by default), while the third is the state-machine defined with the help of the Cosmos SDK. Currently, the Cosmos SDK uses Tendermint as the default consensus engine, meaning the start command is implemented to boot up a Tendermint node.")]),e._v(" "),a("p",[e._v("The flow of the "),a("code",[e._v("start")]),e._v(" command is pretty straightforward. First, it retrieves the "),a("code",[e._v("config")]),e._v(" from the "),a("code",[e._v("context")]),e._v(" in order to open the "),a("code",[e._v("db")]),e._v(" (a "),a("a",{attrs:{href:"https://github.com/syndtr/goleveldb",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("leveldb")]),a("OutboundLink")],1),e._v(" instance by default). This "),a("code",[e._v("db")]),e._v(" contains the latest known state of the application (empty if the application is started from the first time.")]),e._v(" "),a("p",[e._v("With the "),a("code",[e._v("db")]),e._v(", the "),a("code",[e._v("start")]),e._v(" command creates a new instance of the application using an "),a("code",[e._v("appCreator")]),e._v(" function:")]),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"CWFwcCA6PSBhcHBDcmVhdG9yKGN0eC5Mb2dnZXIsIGRiLCB0cmFjZVdyaXRlciwgY3R4LlZpcGVyKQo="}})],1),e._v(" "),a("p",[e._v("Note that an "),a("code",[e._v("appCreator")]),e._v(" is a function that fulfills the "),a("code",[e._v("AppCreator")]),e._v(" signature:\n"),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"CS8vIEFwcENyZWF0b3IgaXMgYSBmdW5jdGlvbiB0aGF0IGFsbG93cyB1cyB0byBsYXppbHkgaW5pdGlhbGl6ZSBhbgoJLy8gYXBwbGljYXRpb24gdXNpbmcgdmFyaW91cyBjb25maWd1cmF0aW9ucy4KCUFwcENyZWF0b3IgZnVuYyhsb2cuTG9nZ2VyLCBkYm0uREIsIGlvLldyaXRlciwgQXBwT3B0aW9ucykgQXBwbGljYXRpb24="}})],1),e._v(" "),a("p",[e._v("In practice, the "),a("RouterLink",{attrs:{to:"/basics/app-anatomy.html#constructor-function"}},[e._v("constructor of the application")]),e._v(" is passed as the "),a("code",[e._v("appCreator")]),e._v(".")],1),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBuZXdBcHAobG9nZ2VyIGxvZy5Mb2dnZXIsIGRiIGRibS5EQiwgdHJhY2VTdG9yZSBpby5Xcml0ZXIsIGFwcE9wdHMgc2VydmVydHlwZXMuQXBwT3B0aW9ucykgc2VydmVydHlwZXMuQXBwbGljYXRpb24gewoJdmFyIGNhY2hlIHNkay5NdWx0aVN0b3JlUGVyc2lzdGVudENhY2hlCgoJaWYgY2FzdC5Ub0Jvb2woYXBwT3B0cy5HZXQoc2VydmVyLkZsYWdJbnRlckJsb2NrQ2FjaGUpKSB7CgkJY2FjaGUgPSBzdG9yZS5OZXdDb21taXRLVlN0b3JlQ2FjaGVNYW5hZ2VyKCkKCX0KCglza2lwVXBncmFkZUhlaWdodHMgOj0gbWFrZShtYXBbaW50NjRdYm9vbCkKCWZvciBfLCBoIDo9IHJhbmdlIGNhc3QuVG9JbnRTbGljZShhcHBPcHRzLkdldChzZXJ2ZXIuRmxhZ1Vuc2FmZVNraXBVcGdyYWRlcykpIHsKCQlza2lwVXBncmFkZUhlaWdodHNbaW50NjQoaCldID0gdHJ1ZQoJfQoKCXBydW5pbmdPcHRzLCBlcnIgOj0gc2VydmVyLkdldFBydW5pbmdPcHRpb25zRnJvbUZsYWdzKGFwcE9wdHMpCglpZiBlcnIgIT0gbmlsIHsKCQlwYW5pYyhlcnIpCgl9CgoJc25hcHNob3REaXIgOj0gZmlsZXBhdGguSm9pbihjYXN0LlRvU3RyaW5nKGFwcE9wdHMuR2V0KGZsYWdzLkZsYWdIb21lKSksICZxdW90O2RhdGEmcXVvdDssICZxdW90O3NuYXBzaG90cyZxdW90OykKCXNuYXBzaG90REIsIGVyciA6PSBzZGsuTmV3TGV2ZWxEQigmcXVvdDttZXRhZGF0YSZxdW90Oywgc25hcHNob3REaXIpCglpZiBlcnIgIT0gbmlsIHsKCQlwYW5pYyhlcnIpCgl9CglzbmFwc2hvdFN0b3JlLCBlcnIgOj0gc25hcHNob3RzLk5ld1N0b3JlKHNuYXBzaG90REIsIHNuYXBzaG90RGlyKQoJaWYgZXJyICE9IG5pbCB7CgkJcGFuaWMoZXJyKQoJfQoKCXJldHVybiBzaW1hcHAuTmV3U2ltQXBwKAoJCWxvZ2dlciwgZGIsIHRyYWNlU3RvcmUsIHRydWUsIHNraXBVcGdyYWRlSGVpZ2h0cywKCQljYXN0LlRvU3RyaW5nKGFwcE9wdHMuR2V0KGZsYWdzLkZsYWdIb21lKSksCgkJY2FzdC5Ub1VpbnQoYXBwT3B0cy5HZXQoc2VydmVyLkZsYWdJbnZDaGVja1BlcmlvZCkpLAoJCXNpbWFwcC5NYWtlVGVzdEVuY29kaW5nQ29uZmlnKCksIC8vIElkZWFsbHksIHdlIHdvdWxkIHJldXNlIHRoZSBvbmUgY3JlYXRlZCBieSBOZXdSb290Q21kLgoJCWFwcE9wdHMsCgkJYmFzZWFwcC5TZXRQcnVuaW5nKHBydW5pbmdPcHRzKSwKCQliYXNlYXBwLlNldE1pbkdhc1ByaWNlcyhjYXN0LlRvU3RyaW5nKGFwcE9wdHMuR2V0KHNlcnZlci5GbGFnTWluR2FzUHJpY2VzKSkpLAoJCWJhc2VhcHAuU2V0SGFsdEhlaWdodChjYXN0LlRvVWludDY0KGFwcE9wdHMuR2V0KHNlcnZlci5GbGFnSGFsdEhlaWdodCkpKSwKCQliYXNlYXBwLlNldEhhbHRUaW1lKGNhc3QuVG9VaW50NjQoYXBwT3B0cy5HZXQoc2VydmVyLkZsYWdIYWx0VGltZSkpKSwKCQliYXNlYXBwLlNldE1pblJldGFpbkJsb2NrcyhjYXN0LlRvVWludDY0KGFwcE9wdHMuR2V0KHNlcnZlci5GbGFnTWluUmV0YWluQmxvY2tzKSkpLAoJCWJhc2VhcHAuU2V0SW50ZXJCbG9ja0NhY2hlKGNhY2hlKSwKCQliYXNlYXBwLlNldFRyYWNlKGNhc3QuVG9Cb29sKGFwcE9wdHMuR2V0KHNlcnZlci5GbGFnVHJhY2UpKSksCgkJYmFzZWFwcC5TZXRJbmRleEV2ZW50cyhjYXN0LlRvU3RyaW5nU2xpY2UoYXBwT3B0cy5HZXQoc2VydmVyLkZsYWdJbmRleEV2ZW50cykpKSwKCQliYXNlYXBwLlNldFNuYXBzaG90U3RvcmUoc25hcHNob3RTdG9yZSksCgkJYmFzZWFwcC5TZXRTbmFwc2hvdEludGVydmFsKGNhc3QuVG9VaW50NjQoYXBwT3B0cy5HZXQoc2VydmVyLkZsYWdTdGF0ZVN5bmNTbmFwc2hvdEludGVydmFsKSkpLAoJCWJhc2VhcHAuU2V0U25hcHNob3RLZWVwUmVjZW50KGNhc3QuVG9VaW50MzIoYXBwT3B0cy5HZXQoc2VydmVyLkZsYWdTdGF0ZVN5bmNTbmFwc2hvdEtlZXBSZWNlbnQpKSksCgkpCn0="}})],1),e._v(" "),a("p",[e._v("Then, the instance of "),a("code",[e._v("app")]),e._v(" is used to instanciate a new Tendermint node:")]),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"CXRtTm9kZSwgZXJyIDo9IG5vZGUuTmV3Tm9kZSgKCQljZmcsCgkJcHZtLkxvYWRPckdlbkZpbGVQVihjZmcuUHJpdlZhbGlkYXRvcktleUZpbGUoKSwgY2ZnLlByaXZWYWxpZGF0b3JTdGF0ZUZpbGUoKSksCgkJbm9kZUtleSwKCQlwcm94eS5OZXdMb2NhbENsaWVudENyZWF0b3IoYXBwKSwKCQlnZW5Eb2NQcm92aWRlciwKCQlub2RlLkRlZmF1bHREQlByb3ZpZGVyLAoJCW5vZGUuRGVmYXVsdE1ldHJpY3NQcm92aWRlcihjZmcuSW5zdHJ1bWVudGF0aW9uKSwKCQljdHguTG9nZ2VyLldpdGgoJnF1b3Q7bW9kdWxlJnF1b3Q7LCAmcXVvdDtub2RlJnF1b3Q7KSwKCSk="}})],1),e._v(" "),a("p",[e._v("The Tendermint node can be created with "),a("code",[e._v("app")]),e._v(" because the latter satisfies the "),a("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/v0.34.0/abci/types/application.go#L7-L32",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("abci.Application")]),e._v(" interface"),a("OutboundLink")],1),e._v(" (given that "),a("code",[e._v("app")]),e._v(" extends "),a("RouterLink",{attrs:{to:"/core/baseapp.html"}},[a("code",[e._v("baseapp")])]),e._v("). As part of the "),a("code",[e._v("NewNode")]),e._v(" method, Tendermint makes sure that the height of the application (i.e. number of blocks since genesis) is equal to the height of the Tendermint node. The difference between these two heights should always be negative or null. If it is strictly negative, "),a("code",[e._v("NewNode")]),e._v(" will replay blocks until the height of the application reaches the height of the Tendermint node. Finally, if the height of the application is "),a("code",[e._v("0")]),e._v(", the Tendermint node will call "),a("RouterLink",{attrs:{to:"/core/baseapp.html#initchain"}},[a("code",[e._v("InitChain")])]),e._v(" on the application to initialize the state from the genesis file.")],1),e._v(" "),a("p",[e._v("Once the Tendermint node is instanciated and in sync with the application, the node can be started:")]),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"CWlmIGVyciA6PSB0bU5vZGUuU3RhcnQoKTsgZXJyICE9IG5pbCB7CgkJcmV0dXJuIGVycgoJfQ=="}})],1),e._v(" "),a("p",[e._v("Upon starting, the node will bootstrap its RPC and P2P server and start dialing peers. During handshake with its peers, if the node realizes they are ahead, it will query all the blocks sequentially in order to catch up. Then, it will wait for new block proposals and block signatures from validators in order to make progress.")]),e._v(" "),a("h2",{attrs:{id:"other-commands"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#other-commands"}},[e._v("#")]),e._v(" Other commands")]),e._v(" "),a("p",[e._v("To discover how to concretely run a node and interact with it, please refer to our "),a("RouterLink",{attrs:{to:"/run-node/"}},[e._v("Running a Node, API and CLI")]),e._v(" guide.")],1),e._v(" "),a("h2",{attrs:{hide:"",id:"next"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#next"}},[e._v("#")]),e._v(" Next")]),e._v(" "),a("p",{attrs:{hide:""}},[e._v("Learn about the "),a("RouterLink",{attrs:{to:"/core/store.html"}},[e._v("store")])],1)],1)}),[],!1,null,null,null);t.default=n.exports}}]);