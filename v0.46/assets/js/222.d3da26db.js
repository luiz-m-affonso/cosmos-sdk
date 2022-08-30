(window.webpackJsonp=window.webpackJsonp||[]).push([[222],{598:function(e,t,o){"use strict";o.r(t);var a=o(1),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"concepts"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#concepts"}},[e._v("#")]),e._v(" Concepts")]),e._v(" "),o("p",[o("em",[e._v("Disclaimer: This is work in progress. Mechanisms are susceptible to change.")])]),e._v(" "),o("p",[e._v("The governance process is divided in a few steps that are outlined below:")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("Proposal submission:")]),e._v(" Proposal is submitted to the blockchain with a\ndeposit.")]),e._v(" "),o("li",[o("strong",[e._v("Vote:")]),e._v(" Once deposit reaches a certain value ("),o("code",[e._v("MinDeposit")]),e._v("), proposal is\nconfirmed and vote opens. Bonded Atom holders can then send "),o("code",[e._v("TxGovVote")]),e._v("\ntransactions to vote on the proposal.")]),e._v(" "),o("li",[o("strong",[e._v("Execution")]),e._v(" After a period of time, the votes are tallied and depending\non the result, the messages in the proposal will be executed.")])]),e._v(" "),o("h2",{attrs:{id:"proposal-submission"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#proposal-submission"}},[e._v("#")]),e._v(" Proposal submission")]),e._v(" "),o("h3",{attrs:{id:"right-to-submit-a-proposal"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#right-to-submit-a-proposal"}},[e._v("#")]),e._v(" Right to submit a proposal")]),e._v(" "),o("p",[e._v("Every account can submit proposals by sending a "),o("code",[e._v("MsgSubmitProposal")]),e._v(" transaction.\nOnce a proposal is submitted, it is identified by its unique "),o("code",[e._v("proposalID")]),e._v(".")]),e._v(" "),o("h3",{attrs:{id:"proposal-messages"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#proposal-messages"}},[e._v("#")]),e._v(" Proposal Messages")]),e._v(" "),o("p",[e._v("A proposal includes an array of "),o("code",[e._v("sdk.Msg")]),e._v("s which are executed automatically if the\nproposal passes. The messages are executed by the governance "),o("code",[e._v("ModuleAccount")]),e._v(" itself. Modules\nsuch as "),o("code",[e._v("x/upgrade")]),e._v(", that want to allow certain messages to be executed by governance\nonly should add a whitelist within the respective msg server, granting the governance\nmodule the right to execute the message once a quorum has been reached. The governance\nmodule uses the "),o("code",[e._v("MsgServiceRouter")]),e._v(" to check that these messages are correctly constructed\nand have a respective path to execute on but do not perform a full validity check.")]),e._v(" "),o("h2",{attrs:{id:"deposit"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#deposit"}},[e._v("#")]),e._v(" Deposit")]),e._v(" "),o("p",[e._v("To prevent spam, proposals must be submitted with a deposit in the coins defined by\nthe "),o("code",[e._v("MinDeposit")]),e._v(" param.")]),e._v(" "),o("p",[e._v("When a proposal is submitted, it has to be accompanied with a deposit that must be\nstrictly positive, but can be inferior to "),o("code",[e._v("MinDeposit")]),e._v(". The submitter doesn't need\nto pay for the entire deposit on their own. The newly created proposal is stored in\nan "),o("em",[e._v("inactive proposal queue")]),e._v(" and stays there until its deposit passes the "),o("code",[e._v("MinDeposit")]),e._v(".\nOther token holders can increase the proposal's deposit by sending a "),o("code",[e._v("Deposit")]),e._v("\ntransaction. If a proposal doesn't pass the "),o("code",[e._v("MinDeposit")]),e._v(" before the deposit end time\n(the time when deposits are no longer accepted), the proposal will be destroyed: the\nproposal will be removed from state and the deposit will be burned (see x/gov "),o("code",[e._v("EndBlocker")]),e._v(").\nWhen a proposal deposit passes the "),o("code",[e._v("MinDeposit")]),e._v(" threshold (even during the proposal\nsubmission) before the deposit end time, the proposal will be moved into the\n"),o("em",[e._v("active proposal queue")]),e._v(" and the voting period will begin.")]),e._v(" "),o("p",[e._v("The deposit is kept in escrow and held by the governance "),o("code",[e._v("ModuleAccount")]),e._v(" until the\nproposal is finalized (passed or rejected).")]),e._v(" "),o("h3",{attrs:{id:"deposit-refund-and-burn"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#deposit-refund-and-burn"}},[e._v("#")]),e._v(" Deposit refund and burn")]),e._v(" "),o("p",[e._v("When a proposal is finalized, the coins from the deposit are either refunded or burned\naccording to the final tally of the proposal:")]),e._v(" "),o("ul",[o("li",[e._v("If the proposal is approved or rejected but "),o("em",[e._v("not")]),e._v(" vetoed, each deposit will be\nautomatically refunded to its respective depositor (transferred from the governance\n"),o("code",[e._v("ModuleAccount")]),e._v(").")]),e._v(" "),o("li",[e._v("When the proposal is vetoed with greater than 1/3, deposits will be burned from the\ngovernance "),o("code",[e._v("ModuleAccount")]),e._v(" and the proposal information along with its deposit\ninformation will be removed from state.")]),e._v(" "),o("li",[e._v("All refunded or burned deposits are removed from the state. Events are issued when\nburning or refunding a deposit.")])]),e._v(" "),o("h2",{attrs:{id:"voting"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#voting"}},[e._v("#")]),e._v(" Voting")]),e._v(" "),o("h3",{attrs:{id:"participants"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#participants"}},[e._v("#")]),e._v(" Participants")]),e._v(" "),o("p",[o("em",[e._v("Participants")]),e._v(" are users that have the right to vote on proposals. On the\nCosmos Hub, participants are bonded Atom holders. Unbonded Atom holders and\nother users do not get the right to participate in governance. However, they\ncan submit and deposit on proposals.")]),e._v(" "),o("p",[e._v("Note that some "),o("em",[e._v("participants")]),e._v(" can be forbidden to vote on a proposal under a\ncertain validator if:")]),e._v(" "),o("ul",[o("li",[o("em",[e._v("participant")]),e._v(" bonded or unbonded Atoms to said validator after proposal\nentered voting period.")]),e._v(" "),o("li",[o("em",[e._v("participant")]),e._v(" became validator after proposal entered voting period.")])]),e._v(" "),o("p",[e._v("This does not prevent "),o("em",[e._v("participant")]),e._v(" to vote with Atoms bonded to other\nvalidators. For example, if a "),o("em",[e._v("participant")]),e._v(" bonded some Atoms to validator A\nbefore a proposal entered voting period and other Atoms to validator B after\nproposal entered voting period, only the vote under validator B will be\nforbidden.")]),e._v(" "),o("h3",{attrs:{id:"voting-period"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#voting-period"}},[e._v("#")]),e._v(" Voting period")]),e._v(" "),o("p",[e._v("Once a proposal reaches "),o("code",[e._v("MinDeposit")]),e._v(", it immediately enters "),o("code",[e._v("Voting period")]),e._v(". We\ndefine "),o("code",[e._v("Voting period")]),e._v(" as the interval between the moment the vote opens and\nthe moment the vote closes. "),o("code",[e._v("Voting period")]),e._v(" should always be shorter than\n"),o("code",[e._v("Unbonding period")]),e._v(" to prevent double voting. The initial value of\n"),o("code",[e._v("Voting period")]),e._v(" is 2 weeks.")]),e._v(" "),o("h3",{attrs:{id:"option-set"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#option-set"}},[e._v("#")]),e._v(" Option set")]),e._v(" "),o("p",[e._v("The option set of a proposal refers to the set of choices a participant can\nchoose from when casting its vote.")]),e._v(" "),o("p",[e._v("The initial option set includes the following options:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("Yes")])]),e._v(" "),o("li",[o("code",[e._v("No")])]),e._v(" "),o("li",[o("code",[e._v("NoWithVeto")])]),e._v(" "),o("li",[o("code",[e._v("Abstain")])])]),e._v(" "),o("p",[o("code",[e._v("NoWithVeto")]),e._v(" counts as "),o("code",[e._v("No")]),e._v(" but also adds a "),o("code",[e._v("Veto")]),e._v(" vote. "),o("code",[e._v("Abstain")]),e._v(" option\nallows voters to signal that they do not intend to vote in favor or against the\nproposal but accept the result of the vote.")]),e._v(" "),o("p",[o("em",[e._v("Note: from the UI, for urgent proposals we should maybe add a ‘Not Urgent’\noption that casts a "),o("code",[e._v("NoWithVeto")]),e._v(" vote.")])]),e._v(" "),o("h3",{attrs:{id:"weighted-votes"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#weighted-votes"}},[e._v("#")]),e._v(" Weighted Votes")]),e._v(" "),o("p",[o("RouterLink",{attrs:{to:"/docs/architecture/adr-037-gov-split-vote.html"}},[e._v("ADR-037")]),e._v(" introduces the weighted vote feature which allows a staker to split their votes into several voting options. For example, it could use 70% of its voting power to vote Yes and 30% of its voting power to vote No.")],1),e._v(" "),o("p",[e._v('Often times the entity owning that address might not be a single individual. For example, a company might have different stakeholders who want to vote differently, and so it makes sense to allow them to split their voting power. Currently, it is not possible for them to do "passthrough voting" and giving their users voting rights over their tokens. However, with this system, exchanges can poll their users for voting preferences, and then vote on-chain proportionally to the results of the poll.')]),e._v(" "),o("p",[e._v("To represent weighted vote on chain, we use the following Protobuf message.")]),e._v(" "),o("p",[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gV2VpZ2h0ZWRWb3RlT3B0aW9uIGRlZmluZXMgYSB1bml0IG9mIHZvdGUgZm9yIHZvdGUgc3BsaXQuCm1lc3NhZ2UgV2VpZ2h0ZWRWb3RlT3B0aW9uIHsKICBWb3RlT3B0aW9uIG9wdGlvbiA9IDE7CiAgc3RyaW5nICAgICB3ZWlnaHQgPSAyIFsKICAgIChnb2dvcHJvdG8uY3VzdG9tdHlwZSkgPSAmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL3R5cGVzLkRlYyZxdW90OywKICAgIChnb2dvcHJvdG8ubnVsbGFibGUpICAgPSBmYWxzZSwKICAgIChnb2dvcHJvdG8ubW9yZXRhZ3MpICAgPSAmcXVvdDt5YW1sOlwmcXVvdDt3ZWlnaHRcJnF1b3Q7JnF1b3Q7CiAgXTsKfQ=="}})],1),e._v(" "),o("p",[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gVm90ZSBkZWZpbmVzIGEgdm90ZSBvbiBhIGdvdmVybmFuY2UgcHJvcG9zYWwuCi8vIEEgVm90ZSBjb25zaXN0cyBvZiBhIHByb3Bvc2FsIElELCB0aGUgdm90ZXIsIGFuZCB0aGUgdm90ZSBvcHRpb24uCm1lc3NhZ2UgVm90ZSB7CiAgb3B0aW9uIChnb2dvcHJvdG8uZ29wcm90b19zdHJpbmdlcikgPSBmYWxzZTsKICBvcHRpb24gKGdvZ29wcm90by5lcXVhbCkgICAgICAgICAgICA9IGZhbHNlOwoKICB1aW50NjQgcHJvcG9zYWxfaWQgPSAxIFsoZ29nb3Byb3RvLm1vcmV0YWdzKSA9ICZxdW90O3lhbWw6XCZxdW90O3Byb3Bvc2FsX2lkXCZxdW90OyZxdW90O107CiAgc3RyaW5nIHZvdGVyICAgICAgID0gMjsKICByZXNlcnZlZCAzOwogIHJlc2VydmVkICZxdW90O29wdGlvbiZxdW90OzsKICByZXBlYXRlZCBXZWlnaHRlZFZvdGVPcHRpb24gb3B0aW9ucyA9IDQgWyhnb2dvcHJvdG8ubnVsbGFibGUpID0gZmFsc2VdOwp9"}})],1),e._v(" "),o("p",[e._v("For a weighted vote to be valid, the "),o("code",[e._v("options")]),e._v(" field must not contain duplicate vote options, and the sum of weights of all options must be equal to 1.")]),e._v(" "),o("h3",{attrs:{id:"quorum"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#quorum"}},[e._v("#")]),e._v(" Quorum")]),e._v(" "),o("p",[e._v("Quorum is defined as the minimum percentage of voting power that needs to be\ncasted on a proposal for the result to be valid.")]),e._v(" "),o("h3",{attrs:{id:"threshold"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#threshold"}},[e._v("#")]),e._v(" Threshold")]),e._v(" "),o("p",[e._v("Threshold is defined as the minimum proportion of "),o("code",[e._v("Yes")]),e._v(" votes (excluding\n"),o("code",[e._v("Abstain")]),e._v(" votes) for the proposal to be accepted.")]),e._v(" "),o("p",[e._v("Initially, the threshold is set at 50% with a possibility to veto if more than\n1/3rd of votes (excluding "),o("code",[e._v("Abstain")]),e._v(" votes) are "),o("code",[e._v("NoWithVeto")]),e._v(" votes. This means\nthat proposals are accepted if the proportion of "),o("code",[e._v("Yes")]),e._v(" votes (excluding\n"),o("code",[e._v("Abstain")]),e._v(" votes) at the end of the voting period is superior to 50% and if the\nproportion of "),o("code",[e._v("NoWithVeto")]),e._v(" votes is inferior to 1/3 (excluding "),o("code",[e._v("Abstain")]),e._v("\nvotes).")]),e._v(" "),o("h3",{attrs:{id:"inheritance"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#inheritance"}},[e._v("#")]),e._v(" Inheritance")]),e._v(" "),o("p",[e._v("If a delegator does not vote, it will inherit its validator vote.")]),e._v(" "),o("ul",[o("li",[e._v("If the delegator votes before its validator, it will not inherit from the\nvalidator's vote.")]),e._v(" "),o("li",[e._v("If the delegator votes after its validator, it will override its validator\nvote with its own. If the proposal is urgent, it is possible\nthat the vote will close before delegators have a chance to react and\noverride their validator's vote. This is not a problem, as proposals require more than 2/3rd of the total voting power to pass before the end of the voting period. If more than 2/3rd of validators collude, they can censor the votes of delegators anyway.")])]),e._v(" "),o("h3",{attrs:{id:"validator-s-punishment-for-non-voting"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#validator-s-punishment-for-non-voting"}},[e._v("#")]),e._v(" Validator’s punishment for non-voting")]),e._v(" "),o("p",[e._v("At present, validators are not punished for failing to vote.")]),e._v(" "),o("h3",{attrs:{id:"governance-address"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#governance-address"}},[e._v("#")]),e._v(" Governance address")]),e._v(" "),o("p",[e._v("Later, we may add permissioned keys that could only sign txs from certain modules. For the MVP, the "),o("code",[e._v("Governance address")]),e._v(" will be the main validator address generated at account creation. This address corresponds to a different PrivKey than the Tendermint PrivKey which is responsible for signing consensus messages. Validators thus do not have to sign governance transactions with the sensitive Tendermint PrivKey.")]),e._v(" "),o("h2",{attrs:{id:"software-upgrade"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#software-upgrade"}},[e._v("#")]),e._v(" Software Upgrade")]),e._v(" "),o("p",[e._v("If proposals are of type "),o("code",[e._v("SoftwareUpgradeProposal")]),e._v(", then nodes need to upgrade\ntheir software to the new version that was voted. This process is divided in\ntwo steps.")]),e._v(" "),o("h3",{attrs:{id:"signal"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#signal"}},[e._v("#")]),e._v(" Signal")]),e._v(" "),o("p",[e._v("After a "),o("code",[e._v("SoftwareUpgradeProposal")]),e._v(" is accepted, validators are expected to\ndownload and install the new version of the software while continuing to run\nthe previous version. Once a validator has downloaded and installed the\nupgrade, it will start signaling to the network that it is ready to switch by\nincluding the proposal's "),o("code",[e._v("proposalID")]),e._v(" in its "),o("em",[e._v("precommits")]),e._v(".("),o("em",[e._v("Note: Confirmation\nthat we want it in the precommit?")]),e._v(")")]),e._v(" "),o("p",[e._v("Note: There is only one signal slot per "),o("em",[e._v("precommit")]),e._v(". If several\n"),o("code",[e._v("SoftwareUpgradeProposals")]),e._v(" are accepted in a short timeframe, a pipeline will\nform and they will be implemented one after the other in the order that they\nwere accepted.")]),e._v(" "),o("h3",{attrs:{id:"switch"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#switch"}},[e._v("#")]),e._v(" Switch")]),e._v(" "),o("p",[e._v("Once a block contains more than 2/3rd "),o("em",[e._v("precommits")]),e._v(" where a common\n"),o("code",[e._v("SoftwareUpgradeProposal")]),e._v(" is signaled, all the nodes (including validator\nnodes, non-validating full nodes and light-nodes) are expected to switch to the\nnew version of the software.")]),e._v(" "),o("p",[o("em",[e._v("Note: Not clear how the flip is handled programmatically.")])])])}),[],!1,null,null,null);t.default=s.exports}}]);