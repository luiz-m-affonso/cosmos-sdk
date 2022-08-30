(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{664:function(e,t,a){"use strict";a.r(t);var o=a(1),c=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"adr-030-authorization-module"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adr-030-authorization-module"}},[e._v("#")]),e._v(" ADR 030: Authorization Module")]),e._v(" "),a("h2",{attrs:{id:"changelog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),a("ul",[a("li",[e._v("2019-11-06: Initial Draft")]),e._v(" "),a("li",[e._v("2020-10-12: Updated Draft")]),e._v(" "),a("li",[e._v("2020-11-13: Accepted")]),e._v(" "),a("li",[e._v("2020-05-06: proto API updates, use "),a("code",[e._v("sdk.Msg")]),e._v(" instead of "),a("code",[e._v("sdk.ServiceMsg")]),e._v(" (the latter concept was removed from Cosmos SDK)")]),e._v(" "),a("li",[e._v("2022-04-20: Updated the "),a("code",[e._v("SendAuthorization")]),e._v(" proto docs to clarify the "),a("code",[e._v("SpendLimit")]),e._v(" is a required field. (Generic authorization can be used with bank msg type url to create limit less bank authorization)")])]),e._v(" "),a("h2",{attrs:{id:"status"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),a("p",[e._v("Accepted")]),e._v(" "),a("h2",{attrs:{id:"abstract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),a("p",[e._v("This ADR defines the "),a("code",[e._v("x/authz")]),e._v(" module which allows accounts to grant authorizations to perform actions\non behalf of that account to other accounts.")]),e._v(" "),a("h2",{attrs:{id:"context"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),a("p",[e._v("The concrete use cases which motivated this module include:")]),e._v(" "),a("ul",[a("li",[e._v("the desire to delegate the ability to vote on proposals to other accounts besides the account which one has\ndelegated stake")]),e._v(" "),a("li",[e._v('"sub-keys" functionality, as originally proposed in '),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/issues/4480",target:"_blank",rel:"noopener noreferrer"}},[e._v("#4480"),a("OutboundLink")],1),e._v(" which\nis a term used to describe the functionality provided by this module together with\nthe "),a("code",[e._v("fee_grant")]),e._v(" module from "),a("RouterLink",{attrs:{to:"/architecture/adr-029-fee-grant-module.html"}},[e._v("ADR 029")]),e._v(" and the "),a("a",{attrs:{href:"https://github.com/regen-network/cosmos-modules/tree/master/incubator/group",target:"_blank",rel:"noopener noreferrer"}},[e._v("group module"),a("OutboundLink")],1),e._v(".")],1)]),e._v(" "),a("p",[e._v('The "sub-keys" functionality roughly refers to the ability for one account to grant some subset of its capabilities to\nother accounts with possibly less robust, but easier to use security measures. For instance, a master account representing\nan organization could grant the ability to spend small amounts of the organization\'s funds to individual employee accounts.\nOr an individual (or group) with a multisig wallet could grant the ability to vote on proposals to any one of the member\nkeys.')]),e._v(" "),a("p",[e._v("The current\nimplementation is based on work done by the "),a("a",{attrs:{href:"https://github.com/cosmos-gaians/cosmos-sdk/tree/hackatom/x/delegation",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gaian's team at Hackatom Berlin 2019"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"decision"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[e._v("#")]),e._v(" Decision")]),e._v(" "),a("p",[e._v("We will create a module named "),a("code",[e._v("authz")]),e._v(" which provides functionality for\ngranting arbitrary privileges from one account (the "),a("em",[e._v("granter")]),e._v(") to another account (the "),a("em",[e._v("grantee")]),e._v("). Authorizations\nmust be granted for a particular "),a("code",[e._v("Msg")]),e._v(" service methods one by one using an implementation\nof "),a("code",[e._v("Authorization")]),e._v(" interface.")]),e._v(" "),a("h3",{attrs:{id:"types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#types"}},[e._v("#")]),e._v(" Types")]),e._v(" "),a("p",[e._v("Authorizations determine exactly what privileges are granted. They are extensible\nand can be defined for any "),a("code",[e._v("Msg")]),e._v(" service method even outside of the module where\nthe "),a("code",[e._v("Msg")]),e._v(" method is defined. "),a("code",[e._v("Authorization")]),e._v("s reference "),a("code",[e._v("Msg")]),e._v("s using their TypeURL.")]),e._v(" "),a("h4",{attrs:{id:"authorization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#authorization"}},[e._v("#")]),e._v(" Authorization")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBBdXRob3JpemF0aW9uIGludGVyZmFjZSB7Cglwcm90by5NZXNzYWdlCgoJLy8gTXNnVHlwZVVSTCByZXR1cm5zIHRoZSBmdWxseS1xdWFsaWZpZWQgTXNnIFR5cGVVUkwgKGFzIGRlc2NyaWJlZCBpbiBBRFIgMDIwKSwKCS8vIHdoaWNoIHdpbGwgcHJvY2VzcyBhbmQgYWNjZXB0IG9yIHJlamVjdCBhIHJlcXVlc3QuCglNc2dUeXBlVVJMKCkgc3RyaW5nCgoJLy8gQWNjZXB0IGRldGVybWluZXMgd2hldGhlciB0aGlzIGdyYW50IHBlcm1pdHMgdGhlIHByb3ZpZGVkIHNkay5Nc2cgdG8gYmUgcGVyZm9ybWVkLCBhbmQgaWYKCS8vIHNvIHByb3ZpZGVzIGFuIHVwZ3JhZGVkIGF1dGhvcml6YXRpb24gaW5zdGFuY2UuCglBY2NlcHQoY3R4IHNkay5Db250ZXh0LCBtc2cgc2RrLk1zZykgKEFjY2VwdFJlc3BvbnNlLCBlcnJvcikKCgkvLyBWYWxpZGF0ZUJhc2ljIGRvZXMgYSBzaW1wbGUgdmFsaWRhdGlvbiBjaGVjayB0aGF0CgkvLyBkb2Vzbid0IHJlcXVpcmUgYWNjZXNzIHRvIGFueSBvdGhlciBpbmZvcm1hdGlvbi4KCVZhbGlkYXRlQmFzaWMoKSBlcnJvcgp9CgovLyBBY2NlcHRSZXNwb25zZSBpbnN0cnVtZW50cyB0aGUgY29udHJvbGxlciBvZiBhbiBhdXRoeiBtZXNzYWdlIGlmIHRoZSByZXF1ZXN0IGlzIGFjY2VwdGVkCi8vIGFuZCBpZiBpdCBzaG91bGQgYmUgdXBkYXRlZCBvciBkZWxldGVkLgp0eXBlIEFjY2VwdFJlc3BvbnNlIHN0cnVjdCB7CgkvLyBJZiBBY2NlcHQ9dHJ1ZSwgdGhlIGNvbnRyb2xsZXIgY2FuIGFjY2VwdCBhbmQgYXV0aG9yaXphdGlvbiBhbmQgaGFuZGxlIHRoZSB1cGRhdGUuCglBY2NlcHQgYm9vbAoJLy8gSWYgRGVsZXRlPXRydWUsIHRoZSBjb250cm9sbGVyIG11c3QgZGVsZXRlIHRoZSBhdXRob3JpemF0aW9uIG9iamVjdCBhbmQgcmVsZWFzZQoJLy8gc3RvcmFnZSByZXNvdXJjZXMuCglEZWxldGUgYm9vbAoJLy8gQ29udHJvbGxlciwgd2hvIGlzIGNhbGxpbmcgQXV0aG9yaXphdGlvbi5BY2NlcHQgbXVzdCBjaGVjayBpZiBgVXBkYXRlZCAhPSBuaWxgLiBJZiB5ZXMsCgkvLyBpdCBtdXN0IHVzZSB0aGUgdXBkYXRlZCB2ZXJzaW9uIGFuZCBoYW5kbGUgdGhlIHVwZGF0ZSBvbiB0aGUgc3RvcmFnZSBsZXZlbC4KCVVwZGF0ZWQgQXV0aG9yaXphdGlvbgp9Cg=="}}),e._v(" "),a("p",[e._v("For example a "),a("code",[e._v("SendAuthorization")]),e._v(" like this is defined for "),a("code",[e._v("MsgSend")]),e._v(" that takes\na "),a("code",[e._v("SpendLimit")]),e._v(" and updates it down to zero:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBTZW5kQXV0aG9yaXphdGlvbiBzdHJ1Y3QgewoJLy8gU3BlbmRMaW1pdCBzcGVjaWZpZXMgdGhlIG1heGltdW0gYW1vdW50IG9mIHRva2VucyB0aGF0IGNhbiBiZSBzcGVudAoJLy8gYnkgdGhpcyBhdXRob3JpemF0aW9uIGFuZCB3aWxsIGJlIHVwZGF0ZWQgYXMgdG9rZW5zIGFyZSBzcGVudC4gVGhpcyBmaWVsZCBpcyByZXF1aXJlZC4gKEdlbmVyaWMgYXV0aG9yaXphdGlvbiAKCS8vIGNhbiBiZSB1c2VkIHdpdGggYmFuayBtc2cgdHlwZSB1cmwgdG8gY3JlYXRlIGxpbWl0IGxlc3MgYmFuayBhdXRob3JpemF0aW9uKS4KCVNwZW5kTGltaXQgc2RrLkNvaW5zCn0KCmZ1bmMgKGEgU2VuZEF1dGhvcml6YXRpb24pIE1zZ1R5cGVVUkwoKSBzdHJpbmcgewoJcmV0dXJuIHNkay5Nc2dUeXBlVVJMKCZhbXA7TXNnU2VuZHt9KQp9CgpmdW5jIChhIFNlbmRBdXRob3JpemF0aW9uKSBBY2NlcHQoY3R4IHNkay5Db250ZXh0LCBtc2cgc2RrLk1zZykgKGF1dGh6LkFjY2VwdFJlc3BvbnNlLCBlcnJvcikgewoJbVNlbmQsIG9rIDo9IG1zZy4oKk1zZ1NlbmQpCglpZiAhb2sgewoJCXJldHVybiBhdXRoei5BY2NlcHRSZXNwb25zZXt9LCBzZGtlcnJvcnMuRXJySW52YWxpZFR5cGUuV3JhcCgmcXVvdDt0eXBlIG1pc21hdGNoJnF1b3Q7KQoJfQoJbGltaXRMZWZ0LCBpc05lZ2F0aXZlIDo9IGEuU3BlbmRMaW1pdC5TYWZlU3ViKG1TZW5kLkFtb3VudCkKCWlmIGlzTmVnYXRpdmUgewoJCXJldHVybiBhdXRoei5BY2NlcHRSZXNwb25zZXt9LCBzZGtlcnJvcnMuRXJySW5zdWZmaWNpZW50RnVuZHMuV3JhcGYoJnF1b3Q7cmVxdWVzdGVkIGFtb3VudCBpcyBtb3JlIHRoYW4gc3BlbmQgbGltaXQmcXVvdDspCgl9CglpZiBsaW1pdExlZnQuSXNaZXJvKCkgewoJCXJldHVybiBhdXRoei5BY2NlcHRSZXNwb25zZXtBY2NlcHQ6IHRydWUsIERlbGV0ZTogdHJ1ZX0sIG5pbAoJfQoKCXJldHVybiBhdXRoei5BY2NlcHRSZXNwb25zZXtBY2NlcHQ6IHRydWUsIERlbGV0ZTogZmFsc2UsIFVwZGF0ZWQ6ICZhbXA7U2VuZEF1dGhvcml6YXRpb257U3BlbmRMaW1pdDogbGltaXRMZWZ0fX0sIG5pbAp9Cg=="}}),e._v(" "),a("p",[e._v("A different type of capability for "),a("code",[e._v("MsgSend")]),e._v(" could be implemented\nusing the "),a("code",[e._v("Authorization")]),e._v(" interface with no need to change the underlying\n"),a("code",[e._v("bank")]),e._v(" module.")]),e._v(" "),a("h5",{attrs:{id:"small-notes-on-acceptresponse"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#small-notes-on-acceptresponse"}},[e._v("#")]),e._v(" Small notes on "),a("code",[e._v("AcceptResponse")])]),e._v(" "),a("ul",[a("li",[a("p",[e._v("The "),a("code",[e._v("AcceptResponse.Accept")]),e._v(" field will be set to "),a("code",[e._v("true")]),e._v(" if the authorization is accepted.\nHowever, if it is rejected, the function "),a("code",[e._v("Accept")]),e._v(" will raise an error (without setting "),a("code",[e._v("AcceptResponse.Accept")]),e._v(" to "),a("code",[e._v("false")]),e._v(").")])]),e._v(" "),a("li",[a("p",[e._v("The "),a("code",[e._v("AcceptResponse.Updated")]),e._v(" field will be set to a non-nil value only if there is a real change to the authorization.\nIf authorization remains the same (as is, for instance, always the case for a "),a("a",{attrs:{href:"#genericauthorization"}},[a("code",[e._v("GenericAuthorization")])]),e._v("),\nthe field will be "),a("code",[e._v("nil")]),e._v(".")])])]),e._v(" "),a("h3",{attrs:{id:"msg-service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#msg-service"}},[e._v("#")]),e._v(" "),a("code",[e._v("Msg")]),e._v(" Service")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"proto",base64:"c2VydmljZSBNc2cgewogIC8vIEdyYW50IGdyYW50cyB0aGUgcHJvdmlkZWQgYXV0aG9yaXphdGlvbiB0byB0aGUgZ3JhbnRlZSBvbiB0aGUgZ3JhbnRlcidzCiAgLy8gYWNjb3VudCB3aXRoIHRoZSBwcm92aWRlZCBleHBpcmF0aW9uIHRpbWUuCiAgcnBjIEdyYW50KE1zZ0dyYW50KSByZXR1cm5zIChNc2dHcmFudFJlc3BvbnNlKTsKCiAgLy8gRXhlYyBhdHRlbXB0cyB0byBleGVjdXRlIHRoZSBwcm92aWRlZCBtZXNzYWdlcyB1c2luZwogIC8vIGF1dGhvcml6YXRpb25zIGdyYW50ZWQgdG8gdGhlIGdyYW50ZWUuIEVhY2ggbWVzc2FnZSBzaG91bGQgaGF2ZSBvbmx5CiAgLy8gb25lIHNpZ25lciBjb3JyZXNwb25kaW5nIHRvIHRoZSBncmFudGVyIG9mIHRoZSBhdXRob3JpemF0aW9uLgogIHJwYyBFeGVjKE1zZ0V4ZWMpIHJldHVybnMgKE1zZ0V4ZWNSZXNwb25zZSk7CgogIC8vIFJldm9rZSByZXZva2VzIGFueSBhdXRob3JpemF0aW9uIGNvcnJlc3BvbmRpbmcgdG8gdGhlIHByb3ZpZGVkIG1ldGhvZCBuYW1lIG9uIHRoZQogIC8vIGdyYW50ZXIncyBhY2NvdW50IHRoYXQgaGFzIGJlZW4gZ3JhbnRlZCB0byB0aGUgZ3JhbnRlZS4KICBycGMgUmV2b2tlKE1zZ1Jldm9rZSkgcmV0dXJucyAoTXNnUmV2b2tlUmVzcG9uc2UpOwp9CgovLyBHcmFudCBnaXZlcyBwZXJtaXNzaW9ucyB0byBleGVjdXRlCi8vIHRoZSBwcm92aWRlZCBtZXRob2Qgd2l0aCBleHBpcmF0aW9uIHRpbWUuCm1lc3NhZ2UgR3JhbnQgewogIGdvb2dsZS5wcm90b2J1Zi5BbnkgICAgICAgYXV0aG9yaXphdGlvbiA9IDEgWyhjb3Ntb3NfcHJvdG8uYWNjZXB0c19pbnRlcmZhY2UpID0gJnF1b3Q7QXV0aG9yaXphdGlvbiZxdW90O107CiAgZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcCBleHBpcmF0aW9uICAgID0gMiBbKGdvZ29wcm90by5zdGR0aW1lKSA9IHRydWUsIChnb2dvcHJvdG8ubnVsbGFibGUpID0gZmFsc2VdOwp9CgptZXNzYWdlIE1zZ0dyYW50IHsKICBzdHJpbmcgZ3JhbnRlciA9IDE7CiAgc3RyaW5nIGdyYW50ZWUgPSAyOwoKICBHcmFudCBncmFudCA9IDMgWyhnb2dvcHJvdG8ubnVsbGFibGUpID0gZmFsc2VdOwp9CgptZXNzYWdlIE1zZ0V4ZWNSZXNwb25zZSB7CiAgY29zbW9zLmJhc2UuYWJjaS52MWJldGExLlJlc3VsdCByZXN1bHQgPSAxOwp9CgptZXNzYWdlIE1zZ0V4ZWMgewogIHN0cmluZyAgIGdyYW50ZWUgICAgICAgICAgICAgICAgICA9IDE7CiAgLy8gQXV0aG9yaXphdGlvbiBNc2cgcmVxdWVzdHMgdG8gZXhlY3V0ZS4gRWFjaCBtc2cgbXVzdCBpbXBsZW1lbnQgQXV0aG9yaXphdGlvbiBpbnRlcmZhY2UKICByZXBlYXRlZCBnb29nbGUucHJvdG9idWYuQW55IG1zZ3MgPSAyIFsoY29zbW9zX3Byb3RvLmFjY2VwdHNfaW50ZXJmYWNlKSA9ICZxdW90O3Nkay5Nc2cmcXVvdDtdOzsKfQo="}}),e._v(" "),a("h3",{attrs:{id:"router-middleware"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#router-middleware"}},[e._v("#")]),e._v(" Router Middleware")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("authz")]),e._v(" "),a("code",[e._v("Keeper")]),e._v(" will expose a "),a("code",[e._v("DispatchActions")]),e._v(" method which allows other modules to send "),a("code",[e._v("Msg")]),e._v("s\nto the router based on "),a("code",[e._v("Authorization")]),e._v(" grants:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBLZWVwZXIgaW50ZXJmYWNlIHsKCS8vIERpc3BhdGNoQWN0aW9ucyByb3V0ZXMgdGhlIHByb3ZpZGVkIG1zZ3MgdG8gdGhlaXIgcmVzcGVjdGl2ZSBoYW5kbGVycyBpZiB0aGUgZ3JhbnRlZSB3YXMgZ3JhbnRlZCBhbiBhdXRob3JpemF0aW9uCgkvLyB0byBzZW5kIHRob3NlIG1lc3NhZ2VzIGJ5IHRoZSBmaXJzdCAoYW5kIG9ubHkpIHNpZ25lciBvZiBlYWNoIG1zZy4KICAgIERpc3BhdGNoQWN0aW9ucyhjdHggc2RrLkNvbnRleHQsIGdyYW50ZWUgc2RrLkFjY0FkZHJlc3MsIG1zZ3MgW11zZGsuTXNnKSBzZGsuUmVzdWx0YAp9Cg=="}}),e._v(" "),a("h3",{attrs:{id:"cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cli"}},[e._v("#")]),e._v(" CLI")]),e._v(" "),a("h4",{attrs:{id:"tx-exec-method"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tx-exec-method"}},[e._v("#")]),e._v(" "),a("code",[e._v("tx exec")]),e._v(" Method")]),e._v(" "),a("p",[e._v("When a CLI user wants to run a transaction on behalf of another account using "),a("code",[e._v("MsgExec")]),e._v(", they\ncan use the "),a("code",[e._v("exec")]),e._v(" method. For instance "),a("code",[e._v("gaiacli tx gov vote 1 yes --from <grantee> --generate-only | gaiacli tx authz exec --send-as <granter> --from <grantee>")]),e._v("\nwould send a transaction like this:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"TXNnRXhlYyB7CiAgR3JhbnRlZTogbXlrZXksCiAgTXNnczogW11zZGsuTXNnewogICAgTXNnVm90ZSB7CiAgICAgIFByb3Bvc2FsSUQ6IDEsCiAgICAgIFZvdGVyOiBjb3Ntb3MzdGhzZGdoOTgzZWdoODIzCiAgICAgIE9wdGlvbjogWWVzCiAgICB9CiAgfQp9Cg=="}}),e._v(" "),a("h4",{attrs:{id:"tx-grant-grantee-authorization-from-granter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tx-grant-grantee-authorization-from-granter"}},[e._v("#")]),e._v(" "),a("code",[e._v("tx grant <grantee> <authorization> --from <granter>")])]),e._v(" "),a("p",[e._v("This CLI command will send a "),a("code",[e._v("MsgGrant")]),e._v(" transaction. "),a("code",[e._v("authorization")]),e._v(" should be encoded as\nJSON on the CLI.")]),e._v(" "),a("h4",{attrs:{id:"tx-revoke-grantee-method-name-from-granter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tx-revoke-grantee-method-name-from-granter"}},[e._v("#")]),e._v(" "),a("code",[e._v("tx revoke <grantee> <method-name> --from <granter>")])]),e._v(" "),a("p",[e._v("This CLI command will send a "),a("code",[e._v("MsgRevoke")]),e._v(" transaction.")]),e._v(" "),a("h3",{attrs:{id:"built-in-authorizations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#built-in-authorizations"}},[e._v("#")]),e._v(" Built-in Authorizations")]),e._v(" "),a("h4",{attrs:{id:"sendauthorization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sendauthorization"}},[e._v("#")]),e._v(" "),a("code",[e._v("SendAuthorization")])]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"proto",base64:"Ly8gU2VuZEF1dGhvcml6YXRpb24gYWxsb3dzIHRoZSBncmFudGVlIHRvIHNwZW5kIHVwIHRvIHNwZW5kX2xpbWl0IGNvaW5zIGZyb20KLy8gdGhlIGdyYW50ZXIncyBhY2NvdW50LgptZXNzYWdlIFNlbmRBdXRob3JpemF0aW9uIHsKICByZXBlYXRlZCBjb3Ntb3MuYmFzZS52MWJldGExLkNvaW4gc3BlbmRfbGltaXQgPSAxOwp9Cg=="}}),e._v(" "),a("h4",{attrs:{id:"genericauthorization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#genericauthorization"}},[e._v("#")]),e._v(" "),a("code",[e._v("GenericAuthorization")])]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"proto",base64:"Ly8gR2VuZXJpY0F1dGhvcml6YXRpb24gZ2l2ZXMgdGhlIGdyYW50ZWUgdW5yZXN0cmljdGVkIHBlcm1pc3Npb25zIHRvIGV4ZWN1dGUKLy8gdGhlIHByb3ZpZGVkIG1ldGhvZCBvbiBiZWhhbGYgb2YgdGhlIGdyYW50ZXIncyBhY2NvdW50LgptZXNzYWdlIEdlbmVyaWNBdXRob3JpemF0aW9uIHsKICBvcHRpb24gKGNvc21vc19wcm90by5pbXBsZW1lbnRzX2ludGVyZmFjZSkgPSAmcXVvdDtBdXRob3JpemF0aW9uJnF1b3Q7OwoKICAvLyBNc2csIGlkZW50aWZpZWQgYnkgaXQncyB0eXBlIFVSTCwgdG8gZ3JhbnQgdW5yZXN0cmljdGVkIHBlcm1pc3Npb25zIHRvIGV4ZWN1dGUKICBzdHJpbmcgbXNnID0gMTsKfQo="}}),e._v(" "),a("h2",{attrs:{id:"consequences"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),a("h3",{attrs:{id:"positive"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),a("ul",[a("li",[e._v("Users will be able to authorize arbitrary actions on behalf of their accounts to other\nusers, improving key management for many use cases")]),e._v(" "),a("li",[e._v("The solution is more generic than previously considered approaches and the\n"),a("code",[e._v("Authorization")]),e._v(" interface approach can be extended to cover other use cases by\nSDK users")])]),e._v(" "),a("h3",{attrs:{id:"negative"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),a("h3",{attrs:{id:"neutral"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[e._v("#")]),e._v(" Neutral")]),e._v(" "),a("h2",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),a("ul",[a("li",[e._v("Initial Hackatom implementation: https://github.com/cosmos-gaians/cosmos-sdk/tree/hackatom/x/delegation")]),e._v(" "),a("li",[e._v("Post-Hackatom spec: https://gist.github.com/aaronc/b60628017352df5983791cad30babe56#delegation-module")]),e._v(" "),a("li",[e._v("B-Harvest subkeys spec: https://github.com/cosmos/cosmos-sdk/issues/4480")])])],1)}),[],!1,null,null,null);t.default=c.exports}}]);