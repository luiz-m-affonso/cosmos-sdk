(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{614:function(t,e,a){"use strict";a.r(e);var l=a(1),i=Object(l.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"telemetry"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#telemetry"}},[t._v("#")]),t._v(" Telemetry")]),t._v(" "),a("p",{attrs:{synopsis:""}},[t._v("Gather relevant insights about your application and modules with custom metrics and telemetry.")]),t._v(" "),a("p",[t._v("The Cosmos SDK enables operators and developers to gain insight into the performance and behavior of\ntheir application through the use of the "),a("code",[t._v("telemetry")]),t._v(" package. To enable telemetrics, set "),a("code",[t._v("telemetry.enabled = true")]),t._v(" in the app.toml config file.")]),t._v(" "),a("p",[t._v("The Cosmos SDK currently supports enabling in-memory and prometheus as telemetry sinks. In-memory sink is always attached (when the telemetry is enabled) with 10 second interval and 1 minute retention. This means that metrics will be aggregated over 10 seconds, and metrics will be kept alive for 1 minute.")]),t._v(" "),a("p",[t._v("To query active metrics (see retention note above) you have to enable API server ("),a("code",[t._v("api.enabled = true")]),t._v(" in the app.toml). Single API endpoint is exposed: "),a("code",[t._v("http://localhost:1317/metrics?format={text|prometheus}")]),t._v(", the default being "),a("code",[t._v("text")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"emitting-metrics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#emitting-metrics"}},[t._v("#")]),t._v(" Emitting metrics")]),t._v(" "),a("p",[t._v("If telemetry is enabled via configuration, a single global metrics collector is registered via the\n"),a("a",{attrs:{href:"https://github.com/armon/go-metrics",target:"_blank",rel:"noopener noreferrer"}},[t._v("go-metrics"),a("OutboundLink")],1),t._v(" library. This allows emitting and collecting\nmetrics through simple "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/v0.46.0/telemetry/wrapper.go",target:"_blank",rel:"noopener noreferrer"}},[t._v("API"),a("OutboundLink")],1),t._v(". Example:")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBFbmRCbG9ja2VyKGN0eCBzZGsuQ29udGV4dCwgayBrZWVwZXIuS2VlcGVyKSB7CiAgZGVmZXIgdGVsZW1ldHJ5Lk1vZHVsZU1lYXN1cmVTaW5jZSh0eXBlcy5Nb2R1bGVOYW1lLCB0aW1lLk5vdygpLCB0ZWxlbWV0cnkuTWV0cmljS2V5RW5kQmxvY2tlcikKCiAgLy8gLi4uCn0K"}}),t._v(" "),a("p",[t._v("Developers may use the "),a("code",[t._v("telemetry")]),t._v(" package directly, which provides wrappers around metric APIs\nthat include adding useful labels, or they must use the "),a("code",[t._v("go-metrics")]),t._v(" library directly. It is preferable\nto add as much context and adequate dimensionality to metrics as possible, so the "),a("code",[t._v("telemetry")]),t._v(" package\nis advised. Regardless of the package or method used, the Cosmos SDK supports the following metrics\ntypes:")]),t._v(" "),a("ul",[a("li",[t._v("gauges")]),t._v(" "),a("li",[t._v("summaries")]),t._v(" "),a("li",[t._v("counters")])]),t._v(" "),a("h2",{attrs:{id:"labels"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#labels"}},[t._v("#")]),t._v(" Labels")]),t._v(" "),a("p",[t._v("Certain components of modules will have their name automatically added as a label (e.g. "),a("code",[t._v("BeginBlock")]),t._v(").\nOperators may also supply the application with a global set of labels that will be applied to all\nmetrics emitted using the "),a("code",[t._v("telemetry")]),t._v(" package (e.g. chain-id). Global labels are supplied as a list\nof [name, value] tuples.")]),t._v(" "),a("p",[t._v("Example:")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"toml",base64:"Z2xvYmFsLWxhYmVscyA9IFsKICBbJnF1b3Q7Y2hhaW5faWQmcXVvdDssICZxdW90O2NoYWluLU9mWG80ViZxdW90O10sCl0K"}}),t._v(" "),a("h2",{attrs:{id:"cardinality"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cardinality"}},[t._v("#")]),t._v(" Cardinality")]),t._v(" "),a("p",[t._v("Cardinality is key, specifically label and key cardinality. Cardinality is how many unique values of\nsomething there are. So there is naturally a tradeoff between granularity and how much stress is put\non the telemetry sink in terms of indexing, scrape, and query performance.")]),t._v(" "),a("p",[t._v("Developers should take care to support metrics with enough dimensionality and granularity to be\nuseful, but not increase the cardinality beyond the sink's limits. A general rule of thumb is to not\nexceed a cardinality of 10.")]),t._v(" "),a("p",[t._v("Consider the following examples with enough granularity and adequate cardinality:")]),t._v(" "),a("ul",[a("li",[t._v("begin/end blocker time")]),t._v(" "),a("li",[t._v("tx gas used")]),t._v(" "),a("li",[t._v("block gas used")]),t._v(" "),a("li",[t._v("amount of tokens minted")]),t._v(" "),a("li",[t._v("amount of accounts created")])]),t._v(" "),a("p",[t._v("The following examples expose too much cardinality and may not even prove to be useful:")]),t._v(" "),a("ul",[a("li",[t._v("transfers between accounts with amount")]),t._v(" "),a("li",[t._v("voting/deposit amount from unique addresses")])]),t._v(" "),a("h2",{attrs:{id:"supported-metrics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#supported-metrics"}},[t._v("#")]),t._v(" Supported Metrics")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Metric")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Description")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Unit")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Type")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("tx_count")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Total number of txs processed via "),a("code",[t._v("DeliverTx")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("tx")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("counter")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("tx_successful")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Total number of successful txs processed via "),a("code",[t._v("DeliverTx")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("tx")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("counter")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("tx_failed")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Total number of failed txs processed via "),a("code",[t._v("DeliverTx")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("tx")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("counter")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("tx_gas_used")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The total amount of gas used by a tx")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("gas")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("gauge")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("tx_gas_wanted")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The total amount of gas requested by a tx")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("gas")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("gauge")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("tx_msg_send")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The total amount of tokens sent in a "),a("code",[t._v("MsgSend")]),t._v(" (per denom)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("token")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("gauge")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("tx_msg_withdraw_reward")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The total amount of tokens withdrawn in a "),a("code",[t._v("MsgWithdrawDelegatorReward")]),t._v(" (per denom)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("token")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("gauge")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("tx_msg_withdraw_commission")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The total amount of tokens withdrawn in a "),a("code",[t._v("MsgWithdrawValidatorCommission")]),t._v(" (per denom)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("token")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("gauge")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("tx_msg_delegate")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The total amount of tokens delegated in a "),a("code",[t._v("MsgDelegate")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("token")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("gauge")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("tx_msg_begin_unbonding")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The total amount of tokens undelegated in a "),a("code",[t._v("MsgUndelegate")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("token")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("gauge")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("tx_msg_begin_begin_redelegate")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The total amount of tokens redelegated in a "),a("code",[t._v("MsgBeginRedelegate")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("token")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("gauge")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("tx_msg_ibc_transfer")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The total amount of tokens transferred via IBC in a "),a("code",[t._v("MsgTransfer")]),t._v(" (source or sink chain)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("token")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("gauge")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("ibc_transfer_packet_receive")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The total amount of tokens received in a "),a("code",[t._v("FungibleTokenPacketData")]),t._v(" (source or sink chain)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("token")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("gauge")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("new_account")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Total number of new accounts created")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("account")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("counter")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("gov_proposal")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Total number of governance proposals")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("proposal")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("counter")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("gov_vote")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Total number of governance votes for a proposal")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("vote")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("counter")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("gov_deposit")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Total number of governance deposits for a proposal")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("deposit")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("counter")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("staking_delegate")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Total number of delegations")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("delegation")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("counter")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("staking_undelegate")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Total number of undelegations")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("undelegation")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("counter")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("staking_redelegate")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Total number of redelegations")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("redelegation")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("counter")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("ibc_transfer_send")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Total number of IBC transfers sent from a chain (source or sink)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("transfer")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("counter")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("ibc_transfer_receive")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Total number of IBC transfers received to a chain (source or sink)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("transfer")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("counter")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("ibc_client_create")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Total number of clients created")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("create")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("counter")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("ibc_client_update")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Total number of client updates")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("update")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("counter")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("ibc_client_upgrade")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Total number of client upgrades")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("upgrade")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("counter")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("ibc_client_misbehaviour")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Total number of client misbehaviours")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("misbehaviour")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("counter")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("ibc_connection_open-init")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Total number of connection "),a("code",[t._v("OpenInit")]),t._v(" handshakes")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("handshake")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("counter")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("ibc_connection_open-try")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Total number of connection "),a("code",[t._v("OpenTry")]),t._v(" handshakes")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("handshake")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("counter")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("ibc_connection_open-ack")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Total number of connection "),a("code",[t._v("OpenAck")]),t._v(" handshakes")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("handshake")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("counter")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("ibc_connection_open-confirm")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Total number of connection "),a("code",[t._v("OpenConfirm")]),t._v(" handshakes")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("handshake")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("counter")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("ibc_channel_open-init")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Total number of channel "),a("code",[t._v("OpenInit")]),t._v(" handshakes")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("handshake")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("counter")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("ibc_channel_open-try")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Total number of channel "),a("code",[t._v("OpenTry")]),t._v(" handshakes")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("handshake")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("counter")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("ibc_channel_open-ack")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Total number of channel "),a("code",[t._v("OpenAck")]),t._v(" handshakes")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("handshake")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("counter")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("ibc_channel_open-confirm")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Total number of channel "),a("code",[t._v("OpenConfirm")]),t._v(" handshakes")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("handshake")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("counter")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("ibc_channel_close-init")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Total number of channel "),a("code",[t._v("CloseInit")]),t._v(" handshakes")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("handshake")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("counter")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("ibc_channel_close-confirm")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Total number of channel "),a("code",[t._v("CloseConfirm")]),t._v(" handshakes")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("handshake")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("counter")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("tx_msg_ibc_recv_packet")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Total number of IBC packets received")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("packet")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("counter")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("tx_msg_ibc_acknowledge_packet")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Total number of IBC packets acknowledged")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("acknowledgement")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("counter")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("ibc_timeout_packet")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Total number of IBC timeout packets")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("timeout")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("counter")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("store_iavl_get")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Duration of an IAVL "),a("code",[t._v("Store#Get")]),t._v(" call")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("ms")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("summary")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("store_iavl_set")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Duration of an IAVL "),a("code",[t._v("Store#Set")]),t._v(" call")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("ms")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("summary")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("store_iavl_has")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Duration of an IAVL "),a("code",[t._v("Store#Has")]),t._v(" call")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("ms")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("summary")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("store_iavl_delete")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Duration of an IAVL "),a("code",[t._v("Store#Delete")]),t._v(" call")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("ms")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("summary")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("store_iavl_commit")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Duration of an IAVL "),a("code",[t._v("Store#Commit")]),t._v(" call")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("ms")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("summary")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("store_iavl_query")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Duration of an IAVL "),a("code",[t._v("Store#Query")]),t._v(" call")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("ms")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("summary")])])])]),t._v(" "),a("h2",{attrs:{hide:"",id:"next"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#next"}},[t._v("#")]),t._v(" Next")]),t._v(" "),a("p",{attrs:{hide:""}},[t._v("Learn about the "),a("RouterLink",{attrs:{to:"/core/ocap.html"}},[t._v("object-capability")]),t._v(" model")],1)],1)}),[],!1,null,null,null);e.default=i.exports}}]);