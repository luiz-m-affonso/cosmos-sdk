(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{701:function(e,t,a){"use strict";a.r(t);var o=a(1),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"transaction-lifecycle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transaction-lifecycle"}},[e._v("#")]),e._v(" Transaction Lifecycle")]),e._v(" "),a("p",{attrs:{synopsis:""}},[e._v("This document describes the lifecycle of a transaction from creation to committed state changes. Transaction definition is described in a "),a("RouterLink",{attrs:{to:"/core/transactions.html"}},[e._v("different doc")]),e._v(". The transaction will be referred to as "),a("code",[e._v("Tx")]),e._v(".")],1),e._v(" "),a("h2",{attrs:{id:"pre-requisite-readings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pre-requisite-readings"}},[e._v("#")]),e._v(" Pre-requisite Readings")]),e._v(" "),a("ul",[a("li",{attrs:{prereq:""}},[a("RouterLink",{attrs:{to:"/basics/app-anatomy.html"}},[e._v("Anatomy of a Cosmos SDK Application")])],1)]),e._v(" "),a("h2",{attrs:{id:"creation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creation"}},[e._v("#")]),e._v(" Creation")]),e._v(" "),a("h3",{attrs:{id:"transaction-creation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transaction-creation"}},[e._v("#")]),e._v(" Transaction Creation")]),e._v(" "),a("p",[e._v("One of the main application interfaces is the command-line interface. The transaction "),a("code",[e._v("Tx")]),e._v(" can be created by the user inputting a command in the following format from the "),a("RouterLink",{attrs:{to:"/core/cli.html"}},[e._v("command-line")]),e._v(", providing the type of transaction in "),a("code",[e._v("[command]")]),e._v(", arguments in "),a("code",[e._v("[args]")]),e._v(", and configurations such as gas prices in "),a("code",[e._v("[flags]")]),e._v(":")],1),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"W2FwcG5hbWVdIHR4IFtjb21tYW5kXSBbYXJnc10gW2ZsYWdzXQo="}}),e._v(" "),a("p",[e._v("This command will automatically "),a("strong",[e._v("create")]),e._v(" the transaction, "),a("strong",[e._v("sign")]),e._v(" it using the account's private key, and "),a("strong",[e._v("broadcast")]),e._v(" it to the specified peer node.")]),e._v(" "),a("p",[e._v("There are several required and optional flags for transaction creation. The "),a("code",[e._v("--from")]),e._v(" flag specifies which "),a("RouterLink",{attrs:{to:"/basics/accounts.html"}},[e._v("account")]),e._v(" the transaction is originating from. For example, if the transaction is sending coins, the funds will be drawn from the specified "),a("code",[e._v("from")]),e._v(" address.")],1),e._v(" "),a("h4",{attrs:{id:"gas-and-fees"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gas-and-fees"}},[e._v("#")]),e._v(" Gas and Fees")]),e._v(" "),a("p",[e._v("Additionally, there are several "),a("RouterLink",{attrs:{to:"/core/cli.html"}},[e._v("flags")]),e._v(" users can use to indicate how much they are willing to pay in "),a("RouterLink",{attrs:{to:"/basics/gas-fees.html"}},[e._v("fees")]),e._v(":")],1),e._v(" "),a("ul",[a("li",[a("code",[e._v("--gas")]),e._v(" refers to how much "),a("RouterLink",{attrs:{to:"/basics/gas-fees.html"}},[e._v("gas")]),e._v(", which represents computational resources, "),a("code",[e._v("Tx")]),e._v(" consumes. Gas is dependent on the transaction and is not precisely calculated until execution, but can be estimated by providing "),a("code",[e._v("auto")]),e._v(" as the value for "),a("code",[e._v("--gas")]),e._v(".")],1),e._v(" "),a("li",[a("code",[e._v("--gas-adjustment")]),e._v(" (optional) can be used to scale "),a("code",[e._v("gas")]),e._v(" up in order to avoid underestimating. For example, users can specify their gas adjustment as 1.5 to use 1.5 times the estimated gas.")]),e._v(" "),a("li",[a("code",[e._v("--gas-prices")]),e._v(" specifies how much the user is willing pay per unit of gas, which can be one or multiple denominations of tokens. For example, "),a("code",[e._v("--gas-prices=0.025uatom, 0.025upho")]),e._v(" means the user is willing to pay 0.025uatom AND 0.025upho per unit of gas.")]),e._v(" "),a("li",[a("code",[e._v("--fees")]),e._v(" specifies how much in fees the user is willing to pay in total.")]),e._v(" "),a("li",[a("code",[e._v("--timeout-height")]),e._v(" specifies a block timeout height to prevent the tx from being committed past a certain height.")])]),e._v(" "),a("p",[e._v("The ultimate value of the fees paid is equal to the gas multiplied by the gas prices. In other words, "),a("code",[e._v("fees = ceil(gas * gasPrices)")]),e._v(". Thus, since fees can be calculated using gas prices and vice versa, the users specify only one of the two.")]),e._v(" "),a("p",[e._v("Later, validators decide whether or not to include the transaction in their block by comparing the given or calculated "),a("code",[e._v("gas-prices")]),e._v(" to their local "),a("code",[e._v("min-gas-prices")]),e._v(". "),a("code",[e._v("Tx")]),e._v(" will be rejected if its "),a("code",[e._v("gas-prices")]),e._v(" is not high enough, so users are incentivized to pay more.")]),e._v(" "),a("h4",{attrs:{id:"cli-example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cli-example"}},[e._v("#")]),e._v(" CLI Example")]),e._v(" "),a("p",[e._v("Users of application "),a("code",[e._v("app")]),e._v(" can enter the following command into their CLI to generate a transaction to send 1000uatom from a "),a("code",[e._v("senderAddress")]),e._v(" to a "),a("code",[e._v("recipientAddress")]),e._v(". It specifies how much gas they are willing to pay: an automatic estimate scaled up by 1.5 times, with a gas price of 0.025uatom per unit gas.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"YXBwZCB0eCBzZW5kICZsdDtyZWNpcGllbnRBZGRyZXNzJmd0OyAxMDAwdWF0b20gLS1mcm9tICZsdDtzZW5kZXJBZGRyZXNzJmd0OyAtLWdhcyBhdXRvIC0tZ2FzLWFkanVzdG1lbnQgMS41IC0tZ2FzLXByaWNlcyAwLjAyNXVhdG9tCg=="}}),e._v(" "),a("h4",{attrs:{id:"other-transaction-creation-methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#other-transaction-creation-methods"}},[e._v("#")]),e._v(" Other Transaction Creation Methods")]),e._v(" "),a("p",[e._v("The command-line is an easy way to interact with an application, but "),a("code",[e._v("Tx")]),e._v(" can also be created using a "),a("RouterLink",{attrs:{to:"/core/grpc_rest.html"}},[e._v("gRPC or REST interface")]),e._v(" or some other entrypoint defined by the application developer. From the user's perspective, the interaction depends on the web interface or wallet they are using (e.g. creating "),a("code",[e._v("Tx")]),e._v(" using "),a("a",{attrs:{href:"https://lunie.io/#/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Lunie.io"),a("OutboundLink")],1),e._v(" and signing it with a Ledger Nano S).")],1),e._v(" "),a("h2",{attrs:{id:"addition-to-mempool"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#addition-to-mempool"}},[e._v("#")]),e._v(" Addition to Mempool")]),e._v(" "),a("p",[e._v("Each full-node (running Tendermint) that receives a "),a("code",[e._v("Tx")]),e._v(" sends an "),a("a",{attrs:{href:"https://tendermint.com/docs/spec/abci/abci.html#messages",target:"_blank",rel:"noopener noreferrer"}},[e._v("ABCI message"),a("OutboundLink")],1),e._v(",\n"),a("code",[e._v("CheckTx")]),e._v(", to the application layer to check for validity, and receives an "),a("code",[e._v("abci.ResponseCheckTx")]),e._v(". If the "),a("code",[e._v("Tx")]),e._v(" passes the checks, it is held in the nodes'\n"),a("a",{attrs:{href:"https://tendermint.com/docs/tendermint-core/mempool.html#mempool",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[e._v("Mempool")]),a("OutboundLink")],1),e._v(", an in-memory pool of transactions unique to each node) pending inclusion in a block - honest nodes will discard "),a("code",[e._v("Tx")]),e._v(" if it is found to be invalid. Prior to consensus, nodes continuously check incoming transactions and gossip them to their peers.")]),e._v(" "),a("h3",{attrs:{id:"types-of-checks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#types-of-checks"}},[e._v("#")]),e._v(" Types of Checks")]),e._v(" "),a("p",[e._v("The full-nodes perform stateless, then stateful checks on "),a("code",[e._v("Tx")]),e._v(" during "),a("code",[e._v("CheckTx")]),e._v(", with the goal to\nidentify and reject an invalid transaction as early on as possible to avoid wasted computation.")]),e._v(" "),a("p",[a("strong",[a("em",[e._v("Stateless")])]),e._v(" checks do not require nodes to access state - light clients or offline nodes can do\nthem - and are thus less computationally expensive. Stateless checks include making sure addresses\nare not empty, enforcing nonnegative numbers, and other logic specified in the definitions.")]),e._v(" "),a("p",[a("strong",[a("em",[e._v("Stateful")])]),e._v(" checks validate transactions and messages based on a committed state. Examples\ninclude checking that the relevant values exist and are able to be transacted with, the address\nhas sufficient funds, and the sender is authorized or has the correct ownership to transact.\nAt any given moment, full-nodes typically have "),a("RouterLink",{attrs:{to:"/core/baseapp.html#volatile-states"}},[e._v("multiple versions")]),e._v("\nof the application's internal state for different purposes. For example, nodes will execute state\nchanges while in the process of verifying transactions, but still need a copy of the last committed\nstate in order to answer queries - they should not respond using state with uncommitted changes.")],1),e._v(" "),a("p",[e._v("In order to verify a "),a("code",[e._v("Tx")]),e._v(", full-nodes call "),a("code",[e._v("CheckTx")]),e._v(", which includes both "),a("em",[e._v("stateless")]),e._v(" and "),a("em",[e._v("stateful")]),e._v("\nchecks. Further validation happens later in the "),a("a",{attrs:{href:"#delivertx"}},[a("code",[e._v("DeliverTx")])]),e._v(" stage. "),a("code",[e._v("CheckTx")]),e._v(" goes\nthrough several steps, beginning with decoding "),a("code",[e._v("Tx")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"decoding"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#decoding"}},[e._v("#")]),e._v(" Decoding")]),e._v(" "),a("p",[e._v("When "),a("code",[e._v("Tx")]),e._v(" is received by the application from the underlying consensus engine (e.g. Tendermint), it is still in its "),a("RouterLink",{attrs:{to:"/core/encoding.html"}},[e._v("encoded")]),e._v(" "),a("code",[e._v("[]byte")]),e._v(" form and needs to be unmarshaled in order to be processed. Then, the "),a("RouterLink",{attrs:{to:"/core/baseapp.html#runtx-and-runmsgs"}},[a("code",[e._v("runTx")])]),e._v(" function is called to run in "),a("code",[e._v("runTxModeCheck")]),e._v(" mode, meaning the function will run all checks but exit before executing messages and writing state changes.")],1),e._v(" "),a("h3",{attrs:{id:"validatebasic"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#validatebasic"}},[e._v("#")]),e._v(" ValidateBasic")]),e._v(" "),a("p",[e._v("Messages ("),a("RouterLink",{attrs:{to:"/core/transactions.html#messages"}},[a("code",[e._v("sdk.Msg")])]),e._v(") are extracted from transactions ("),a("code",[e._v("Tx")]),e._v("). The "),a("code",[e._v("ValidateBasic")]),e._v(" method of the "),a("code",[e._v("sdk.Msg")]),e._v(" interface implemented by the module developer is run for each transaction.\nTo discard obviously invalid messages, the "),a("code",[e._v("BaseApp")]),e._v(" type calls the "),a("code",[e._v("ValidateBasic")]),e._v(" method very early in the processing of the message in the "),a("RouterLink",{attrs:{to:"/core/baseapp.html#checktx"}},[a("code",[e._v("CheckTx")])]),e._v(" and "),a("RouterLink",{attrs:{to:"/core/baseapp.html#delivertx"}},[a("code",[e._v("DeliverTx")])]),e._v(" transactions.\n"),a("code",[e._v("ValidateBasic")]),e._v(" can include only "),a("strong",[e._v("stateless")]),e._v(" checks (the checks that do not require access to the state).")],1),e._v(" "),a("h4",{attrs:{id:"guideline"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#guideline"}},[e._v("#")]),e._v(" Guideline")]),e._v(" "),a("p",[e._v("Gas is not charged when "),a("code",[e._v("ValidateBasic")]),e._v(" is executed so we recommend only performing all necessary stateless checks to enable middleware operations (for example, parsing the required signer accounts to validate a signature by a middleware) and stateless sanity checks not impacting performance of the CheckTx phase.\nOther validation operations must be performed when "),a("a",{attrs:{href:"../building-modules/msg-services#Validation"}},[e._v("handling a message")]),e._v(" in a module Msg Server.")]),e._v(" "),a("p",[e._v("Example, if the message is to send coins from one address to another, "),a("code",[e._v("ValidateBasic")]),e._v(" likely checks for non-empty addresses and a non-negative coin amount, but does not require knowledge of state such as the account balance of an address.")]),e._v(" "),a("p",[e._v("See also "),a("RouterLink",{attrs:{to:"/building-modules/msg-services.html#Validation"}},[e._v("Msg Service Validation")]),e._v(".")],1),e._v(" "),a("h3",{attrs:{id:"antehandler"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#antehandler"}},[e._v("#")]),e._v(" AnteHandler")]),e._v(" "),a("p",[e._v("After the ValidateBasic checks, the "),a("code",[e._v("AnteHandler")]),e._v("s are run. Technically, they are optional, but in practice, they are very often present to perform signature verification, gas calculation, fee deduction and other core operations related to blockchain transactions.")]),e._v(" "),a("p",[e._v("A copy of the cached context is provided to the "),a("code",[e._v("AnteHandler")]),e._v(", which performs limited checks specified for the transaction type. Using a copy allows the AnteHandler to do stateful checks for "),a("code",[e._v("Tx")]),e._v(" without modifying the last committed state, and revert back to the original if the execution fails.")]),e._v(" "),a("p",[e._v("For example, the "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/tree/master/x/auth/spec",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("auth")]),a("OutboundLink")],1),e._v(" module "),a("code",[e._v("AnteHandler")]),e._v(" checks and increments sequence numbers, checks signatures and account numbers, and deducts fees from the first signer of the transaction - all state changes are made using the "),a("code",[e._v("checkState")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"gas"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gas"}},[e._v("#")]),e._v(" Gas")]),e._v(" "),a("p",[e._v("The "),a("RouterLink",{attrs:{to:"/core/context.html"}},[a("code",[e._v("Context")])]),e._v(", which keeps a "),a("code",[e._v("GasMeter")]),e._v(" that will track how much gas has been used during the execution of "),a("code",[e._v("Tx")]),e._v(", is initialized. The user-provided amount of gas for "),a("code",[e._v("Tx")]),e._v(" is known as "),a("code",[e._v("GasWanted")]),e._v(". If "),a("code",[e._v("GasConsumed")]),e._v(", the amount of gas consumed so during execution, ever exceeds "),a("code",[e._v("GasWanted")]),e._v(", the execution will stop and the changes made to the cached copy of the state won't be committed. Otherwise, "),a("code",[e._v("CheckTx")]),e._v(" sets "),a("code",[e._v("GasUsed")]),e._v(" equal to "),a("code",[e._v("GasConsumed")]),e._v(" and returns it in the result. After calculating the gas and fee values, validator-nodes check that the user-specified "),a("code",[e._v("gas-prices")]),e._v(" is greater than their locally defined "),a("code",[e._v("min-gas-prices")]),e._v(".")],1),e._v(" "),a("h3",{attrs:{id:"discard-or-addition-to-mempool"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#discard-or-addition-to-mempool"}},[e._v("#")]),e._v(" Discard or Addition to Mempool")]),e._v(" "),a("p",[e._v("If at any point during "),a("code",[e._v("CheckTx")]),e._v(" the "),a("code",[e._v("Tx")]),e._v(" fails, it is discarded and the transaction lifecycle ends\nthere. Otherwise, if it passes "),a("code",[e._v("CheckTx")]),e._v(" successfully, the default protocol is to relay it to peer\nnodes and add it to the Mempool so that the "),a("code",[e._v("Tx")]),e._v(" becomes a candidate to be included in the next block.")]),e._v(" "),a("p",[e._v("The "),a("strong",[e._v("mempool")]),e._v(" serves the purpose of keeping track of transactions seen by all full-nodes.\nFull-nodes keep a "),a("strong",[e._v("mempool cache")]),e._v(" of the last "),a("code",[e._v("mempool.cache_size")]),e._v(" transactions they have seen, as a first line of\ndefense to prevent replay attacks. Ideally, "),a("code",[e._v("mempool.cache_size")]),e._v(" is large enough to encompass all\nof the transactions in the full mempool. If the the mempool cache is too small to keep track of all\nthe transactions, "),a("code",[e._v("CheckTx")]),e._v(" is responsible for identifying and rejecting replayed transactions.")]),e._v(" "),a("p",[e._v("Currently existing preventative measures include fees and a "),a("code",[e._v("sequence")]),e._v(" (nonce) counter to distinguish\nreplayed transactions from identical but valid ones. If an attacker tries to spam nodes with many\ncopies of a "),a("code",[e._v("Tx")]),e._v(", full-nodes keeping a mempool cache will reject identical copies instead of running\n"),a("code",[e._v("CheckTx")]),e._v(" on all of them. Even if the copies have incremented "),a("code",[e._v("sequence")]),e._v(" numbers, attackers are\ndisincentivized by the need to pay fees.")]),e._v(" "),a("p",[e._v("Validator nodes keep a mempool to prevent replay attacks, just as full-nodes do, but also use it as\na pool of unconfirmed transactions in preparation of block inclusion. Note that even if a "),a("code",[e._v("Tx")]),e._v("\npasses all checks at this stage, it is still possible to be found invalid later on, because\n"),a("code",[e._v("CheckTx")]),e._v(" does not fully validate the transaction (i.e. it does not actually execute the messages).")]),e._v(" "),a("h2",{attrs:{id:"inclusion-in-a-block"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inclusion-in-a-block"}},[e._v("#")]),e._v(" Inclusion in a Block")]),e._v(" "),a("p",[e._v("Consensus, the process through which validator nodes come to agreement on which transactions to\naccept, happens in "),a("strong",[e._v("rounds")]),e._v(". Each round begins with a proposer creating a block of the most\nrecent transactions and ends with "),a("strong",[e._v("validators")]),e._v(", special full-nodes with voting power responsible\nfor consensus, agreeing to accept the block or go with a "),a("code",[e._v("nil")]),e._v(" block instead. Validator nodes\nexecute the consensus algorithm, such as "),a("a",{attrs:{href:"https://tendermint.com/docs/spec/consensus/consensus.html#terms",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tendermint BFT"),a("OutboundLink")],1),e._v(",\nconfirming the transactions using ABCI requests to the application, in order to come to this agreement.")]),e._v(" "),a("p",[e._v("The first step of consensus is the "),a("strong",[e._v("block proposal")]),e._v(". One proposer amongst the validators is chosen\nby the consensus algorithm to create and propose a block - in order for a "),a("code",[e._v("Tx")]),e._v(" to be included, it\nmust be in this proposer's mempool.")]),e._v(" "),a("h2",{attrs:{id:"state-changes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#state-changes"}},[e._v("#")]),e._v(" State Changes")]),e._v(" "),a("p",[e._v("The next step of consensus is to execute the transactions to fully validate them. All full-nodes\nthat receive a block proposal from the correct proposer execute the transactions by calling the ABCI functions\n"),a("RouterLink",{attrs:{to:"/basics/app-anatomy.html#beginblocker-and-endblocker"}},[a("code",[e._v("BeginBlock")])]),e._v(", "),a("code",[e._v("DeliverTx")]),e._v(" for each transaction,\nand "),a("RouterLink",{attrs:{to:"/basics/app-anatomy.html#beginblocker-and-endblocker"}},[a("code",[e._v("EndBlock")])]),e._v(". While each full-node runs everything\nlocally, this process yields a single, unambiguous result, since the messages' state transitions are deterministic and transactions are\nexplicitly ordered in the block proposal.")],1),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"text",base64:"CQktLS0tLS0tLS0tLS0tLS0tLS0tLS0tLQoJCXxSZWNlaXZlIEJsb2NrIFByb3Bvc2FsfAoJCS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tCgkJICAgICAgICAgIHwKCQkJICB2CgkJLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0KCQl8IEJlZ2luQmxvY2sJICAgICAgfAoJCS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tCgkJICAgICAgICAgIHwKCQkJICB2CgkJLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0KCQl8IERlbGl2ZXJUeCh0eDApICAgICAgfAoJCXwgRGVsaXZlclR4KHR4MSkgICAgICB8CgkJfCBEZWxpdmVyVHgodHgyKSAgICAgIHwKCQl8IERlbGl2ZXJUeCh0eDMpICAgICAgfAoJCXwJLgkgICAgICB8CgkJfAkuCSAgICAgIHwKCQl8CS4JICAgICAgfAoJCS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tCgkJICAgICAgICAgIHwKCQkJICB2CgkJLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0KCQl8IEVuZEJsb2NrCSAgICAgIHwKCQktLS0tLS0tLS0tLS0tLS0tLS0tLS0tLQoJCSAgICAgICAgICB8CgkJCSAgdgoJCS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tCgkJfCBDb25zZW5zdXMJICAgICAgfAoJCS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tCgkJICAgICAgICAgIHwKCQkJICB2CgkJLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0KCQl8IENvbW1pdAkgICAgICB8CgkJLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0K"}}),e._v(" "),a("h3",{attrs:{id:"delivertx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#delivertx"}},[e._v("#")]),e._v(" DeliverTx")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("DeliverTx")]),e._v(" ABCI function defined in "),a("RouterLink",{attrs:{to:"/core/baseapp.html"}},[a("code",[e._v("BaseApp")])]),e._v(" does the bulk of the\nstate transitions: it is run for each transaction in the block in sequential order as committed\nto during consensus. Under the hood, "),a("code",[e._v("DeliverTx")]),e._v(" is almost identical to "),a("code",[e._v("CheckTx")]),e._v(" but calls the\n"),a("RouterLink",{attrs:{to:"/core/baseapp.html#runtx"}},[a("code",[e._v("runTx")])]),e._v(" function in deliver mode instead of check mode.\nInstead of using their "),a("code",[e._v("checkState")]),e._v(", full-nodes use "),a("code",[e._v("deliverState")]),e._v(":")],1),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("Decoding:")]),e._v(" Since "),a("code",[e._v("DeliverTx")]),e._v(" is an ABCI call, "),a("code",[e._v("Tx")]),e._v(" is received in the encoded "),a("code",[e._v("[]byte")]),e._v(" form.\nNodes first unmarshal the transaction, using the "),a("a",{attrs:{href:"./app-anatomy#register-codec"}},[a("code",[e._v("TxConfig")])]),e._v(" defined in the app, then call "),a("code",[e._v("runTx")]),e._v(" in "),a("code",[e._v("runTxModeDeliver")]),e._v(", which is very similar to "),a("code",[e._v("CheckTx")]),e._v(" but also executes and writes state changes.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Checks:")]),e._v(" Full-nodes call "),a("code",[e._v("validateBasicMsgs")]),e._v(" and the "),a("code",[e._v("AnteHandler")]),e._v(" again. This second check\nhappens because they may not have seen the same transactions during the addition to Mempool stage"),a("br"),e._v("\nand a malicious proposer may have included invalid ones. One difference here is that the\n"),a("code",[e._v("AnteHandler")]),e._v(" will not compare "),a("code",[e._v("gas-prices")]),e._v(" to the node's "),a("code",[e._v("min-gas-prices")]),e._v(" since that value is local\nto each node - differing values across nodes would yield nondeterministic results.")])]),e._v(" "),a("li",[a("p",[a("strong",[a("code",[e._v("MsgServiceRouter")]),e._v(":")]),e._v(" While "),a("code",[e._v("CheckTx")]),e._v(" would have exited, "),a("code",[e._v("DeliverTx")]),e._v(" continues to run\n"),a("RouterLink",{attrs:{to:"/core/baseapp.html#runtx-and-runmsgs"}},[a("code",[e._v("runMsgs")])]),e._v(" to fully execute each "),a("code",[e._v("Msg")]),e._v(" within the transaction.\nSince the transaction may have messages from different modules, "),a("code",[e._v("BaseApp")]),e._v(" needs to know which module\nto find the appropriate handler. This is achieved using "),a("code",[e._v("BaseApp")]),e._v("'s "),a("code",[e._v("MsgServiceRouter")]),e._v(" so that it can be processed by the module's Protobuf "),a("RouterLink",{attrs:{to:"/building-modules/msg-services.html"}},[a("code",[e._v("Msg")]),e._v(" service")]),e._v(".\nFor "),a("code",[e._v("LegacyMsg")]),e._v(" routing, the "),a("code",[e._v("Route")]),e._v(" function is called via the "),a("RouterLink",{attrs:{to:"/building-modules/module-manager.html"}},[e._v("module manager")]),e._v(" to retrieve the route name and find the legacy "),a("RouterLink",{attrs:{to:"/building-modules/msg-services.html#handler-type"}},[a("code",[e._v("Handler")])]),e._v(" within the module.")],1)]),e._v(" "),a("li",[a("p",[a("strong",[a("code",[e._v("Msg")]),e._v(" service:")]),e._v(" a Protobuf "),a("code",[e._v("Msg")]),e._v(" service, a step up from "),a("code",[e._v("AnteHandler")]),e._v(", is responsible for executing each\nmessage in the "),a("code",[e._v("Tx")]),e._v(" and causes state transitions to persist in "),a("code",[e._v("deliverTxState")]),e._v(".")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Gas:")]),e._v(" While a "),a("code",[e._v("Tx")]),e._v(" is being delivered, a "),a("code",[e._v("GasMeter")]),e._v(" is used to keep track of how much\ngas is being used; if execution completes, "),a("code",[e._v("GasUsed")]),e._v(" is set and returned in the\n"),a("code",[e._v("abci.ResponseDeliverTx")]),e._v(". If execution halts because "),a("code",[e._v("BlockGasMeter")]),e._v(" or "),a("code",[e._v("GasMeter")]),e._v(" has run out or something else goes\nwrong, a deferred function at the end appropriately errors or panics.")])])]),e._v(" "),a("p",[e._v("If there are any failed state changes resulting from a "),a("code",[e._v("Tx")]),e._v(" being invalid or "),a("code",[e._v("GasMeter")]),e._v(" running out,\nthe transaction processing terminates and any state changes are reverted. Invalid transactions in a\nblock proposal cause validator nodes to reject the block and vote for a "),a("code",[e._v("nil")]),e._v(" block instead.")]),e._v(" "),a("h3",{attrs:{id:"commit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commit"}},[e._v("#")]),e._v(" Commit")]),e._v(" "),a("p",[e._v("The final step is for nodes to commit the block and state changes. Validator nodes\nperform the previous step of executing state transitions in order to validate the transactions,\nthen sign the block to confirm it. Full nodes that are not validators do not\nparticipate in consensus - i.e. they cannot vote - but listen for votes to understand whether or\nnot they should commit the state changes.")]),e._v(" "),a("p",[e._v("When they receive enough validator votes (2/3+ "),a("em",[e._v("precommits")]),e._v(" weighted by voting power), full nodes commit to a new block to be added to the blockchain and\nfinalize the state transitions in the application layer. A new state root is generated to serve as\na merkle proof for the state transitions. Applications use the "),a("RouterLink",{attrs:{to:"/core/baseapp.html#commit"}},[a("code",[e._v("Commit")])]),e._v("\nABCI method inherited from "),a("RouterLink",{attrs:{to:"/core/baseapp.html"}},[e._v("Baseapp")]),e._v("; it syncs all the state transitions by\nwriting the "),a("code",[e._v("deliverState")]),e._v(" into the application's internal state. As soon as the state changes are\ncommitted, "),a("code",[e._v("checkState")]),e._v(" start afresh from the most recently committed state and "),a("code",[e._v("deliverState")]),e._v("\nresets to "),a("code",[e._v("nil")]),e._v(" in order to be consistent and reflect the changes.")],1),e._v(" "),a("p",[e._v("Note that not all blocks have the same number of transactions and it is possible for consensus to\nresult in a "),a("code",[e._v("nil")]),e._v(" block or one with none at all. In a public blockchain network, it is also possible\nfor validators to be "),a("strong",[e._v("byzantine")]),e._v(", or malicious, which may prevent a "),a("code",[e._v("Tx")]),e._v(" from being committed in\nthe blockchain. Possible malicious behaviors include the proposer deciding to censor a "),a("code",[e._v("Tx")]),e._v(" by\nexcluding it from the block or a validator voting against the block.")]),e._v(" "),a("p",[e._v("At this point, the transaction lifecycle of a "),a("code",[e._v("Tx")]),e._v(" is over: nodes have verified its validity,\ndelivered it by executing its state changes, and committed those changes. The "),a("code",[e._v("Tx")]),e._v(" itself,\nin "),a("code",[e._v("[]byte")]),e._v(" form, is stored in a block and appended to the blockchain.")]),e._v(" "),a("h2",{attrs:{hide:"",id:"next"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#next"}},[e._v("#")]),e._v(" Next")]),e._v(" "),a("p",{attrs:{hide:""}},[e._v("Learn about "),a("RouterLink",{attrs:{to:"/basics/accounts.html"}},[e._v("accounts")])],1)],1)}),[],!1,null,null,null);t.default=s.exports}}]);