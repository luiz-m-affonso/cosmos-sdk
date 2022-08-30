(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{678:function(e,t,a){"use strict";a.r(t);var i=a(1),n=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"adr-008-decentralized-computer-emergency-response-team-dcert-group"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adr-008-decentralized-computer-emergency-response-team-dcert-group"}},[e._v("#")]),e._v(" ADR 008: Decentralized Computer Emergency Response Team (dCERT) Group")]),e._v(" "),a("h2",{attrs:{id:"changelog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),a("ul",[a("li",[e._v("2019 Jul 31: Initial Draft")])]),e._v(" "),a("h2",{attrs:{id:"context"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),a("p",[e._v("In order to reduce the number of parties involved with handling sensitive\ninformation in an emergency scenario, we propose the creation of a\nspecialization group named The Decentralized Computer Emergency Response Team\n(dCERT).  Initially this group's role is intended to serve as coordinators\nbetween various actors within a blockchain community such as validators,\nbug-hunters, and developers.  During a time of crisis, the dCERT group would\naggregate and relay input from a variety of stakeholders to the developers who\nare actively devising a patch to the software, this way sensitive information\ndoes not need to be publicly disclosed while some input from the community can\nstill be gained.")]),e._v(" "),a("p",[e._v('Additionally, a special privilege is proposed for the dCERT group: the capacity\nto "circuit-break" (aka. temporarily disable)  a particular message path. Note\nthat this privilege should be enabled/disabled globally with a governance\nparameter such that this privilege could start disabled and later be enabled\nthrough a parameter change proposal, once a dCERT group has been established.')]),e._v(" "),a("p",[e._v('In the future it is foreseeable that the community may wish to expand the roles\nof dCERT with further responsibilities such as the capacity to "pre-approve" a\nsecurity update on behalf of the community prior to a full community\nwide vote whereby the sensitive information would be revealed prior to a\nvulnerability being patched on the live network.')]),e._v(" "),a("h2",{attrs:{id:"decision"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[e._v("#")]),e._v(" Decision")]),e._v(" "),a("p",[e._v("The dCERT group is proposed to include an implementation of a "),a("code",[e._v("SpecializationGroup")]),e._v("\nas defined in "),a("RouterLink",{attrs:{to:"/architecture/adr-007-specialization-groups.html"}},[e._v("ADR 007")]),e._v(". This will include the\nimplementation of:")],1),e._v(" "),a("ul",[a("li",[e._v("continuous voting")]),e._v(" "),a("li",[e._v("slashing due to breach of soft contract")]),e._v(" "),a("li",[e._v("revoking a member due to breach of soft contract")]),e._v(" "),a("li",[e._v("emergency disband of the entire dCERT group (ex. for colluding maliciously)")]),e._v(" "),a("li",[e._v("compensation stipend from the community pool or other means decided by\ngovernance")])]),e._v(" "),a("p",[e._v("This system necessitates the following new parameters:")]),e._v(" "),a("ul",[a("li",[e._v("blockly stipend allowance per dCERT member")]),e._v(" "),a("li",[e._v("maximum number of dCERT members")]),e._v(" "),a("li",[e._v("required staked slashable tokens for each dCERT member")]),e._v(" "),a("li",[e._v("quorum for suspending a particular member")]),e._v(" "),a("li",[e._v("proposal wager for disbanding the dCERT group")]),e._v(" "),a("li",[e._v("stabilization period for dCERT member transition")]),e._v(" "),a("li",[e._v("circuit break dCERT privileges enabled")])]),e._v(" "),a("p",[e._v("These parameters are expected to be implemented through the param keeper such\nthat governance may change them at any given point.")]),e._v(" "),a("h3",{attrs:{id:"continuous-voting-electionator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#continuous-voting-electionator"}},[e._v("#")]),e._v(" Continuous Voting Electionator")]),e._v(" "),a("p",[e._v("An "),a("code",[e._v("Electionator")]),e._v(" object is to be implemented as continuous voting and with the\nfollowing specifications:")]),e._v(" "),a("ul",[a("li",[e._v("All delegation addresses may submit votes at any point which updates their\npreferred representation on the dCERT group.")]),e._v(" "),a("li",[e._v("Preferred representation may be arbitrarily split between addresses (ex. 50%\nto John, 25% to Sally, 25% to Carol)")]),e._v(" "),a("li",[e._v("In order for a new member to be added to the dCERT group they must\nsend a transaction accepting their admission at which point the validity of\ntheir admission is to be confirmed.\n"),a("ul",[a("li",[e._v("A sequence number is assigned when a member is added to dCERT group.\nIf a member leaves the dCERT group and then enters back, a new sequence number\nis assigned.")])])]),e._v(" "),a("li",[e._v("Addresses which control the greatest amount of preferred-representation are\neligible to join the dCERT group (up the "),a("em",[e._v("maximum number of dCERT members")]),e._v(").\nIf the dCERT group is already full and new member is admitted, the existing\ndCERT member with the lowest amount of votes is kicked from the dCERT group.\n"),a("ul",[a("li",[e._v("In the split situation where the dCERT group is full but a vying candidate\nhas the same amount of vote as an existing dCERT member, the existing\nmember should maintain its position.")]),e._v(" "),a("li",[e._v("In the split situation where somebody must be kicked out but the two\naddresses with the smallest number of votes have the same number of votes,\nthe address with the smallest sequence number maintains its position.")])])]),e._v(" "),a("li",[e._v('A stabilization period can be optionally included to reduce the\n"flip-flopping" of the dCERT membership tail members. If a stabilization\nperiod is provided which is greater than 0, when members are kicked due to\ninsufficient support, a queue entry is created which documents which member is\nto replace which other member. While this entry is in the queue, no new entries\nto kick that same dCERT member can be made. When the entry matures at the\nduration of the  stabilization period, the new member is instantiated, and old\nmember kicked.')])]),e._v(" "),a("h3",{attrs:{id:"staking-slashing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#staking-slashing"}},[e._v("#")]),e._v(" Staking/Slashing")]),e._v(" "),a("p",[e._v("All members of the dCERT group must stake tokens "),a("em",[e._v("specifically")]),e._v(" to maintain\neligibility as a dCERT member. These tokens can be staked directly by the vying\ndCERT member or out of the good will of a 3rd party (who shall gain no on-chain\nbenefits for doing so). This staking mechanism should use the existing global\nunbonding time of tokens staked for network validator security. A dCERT member\ncan "),a("em",[e._v("only be")]),e._v(" a member if it has the required tokens staked under this\nmechanism. If those tokens are unbonded then the dCERT member must be\nautomatically kicked from the group.")]),e._v(" "),a("p",[e._v("Slashing of a particular dCERT member due to soft-contract breach should be\nperformed by governance on a per member basis based on the magnitude of the\nbreach.  The process flow is anticipated to be that a dCERT member is suspended\nby the dCERT group prior to being slashed by governance.")]),e._v(" "),a("p",[e._v("Membership suspension by the dCERT group takes place through a voting procedure\nby the dCERT group members. After this suspension has taken place, a governance\nproposal to slash the dCERT member must be submitted, if the proposal is not\napproved by the time the rescinding member has completed unbonding their\ntokens, then the tokens are no longer staked and unable to be slashed.")]),e._v(" "),a("p",[e._v("Additionally in the case of an emergency situation of a colluding and malicious\ndCERT group, the community needs the capability to disband the entire dCERT\ngroup and likely fully slash them. This could be achieved though a special new\nproposal type (implemented as a general governance proposal) which would halt\nthe functionality of the dCERT group until the proposal was concluded. This\nspecial proposal type would likely need to also have a fairly large wager which\ncould be slashed if the proposal creator was malicious. The reason a large\nwager should be required is because as soon as the proposal is made, the\ncapability of the dCERT group to halt message routes is put on temporarily\nsuspended, meaning that a malicious actor who created such a proposal could\nthen potentially exploit a bug during this period of time, with no dCERT group\ncapable of shutting down the exploitable message routes.")]),e._v(" "),a("h3",{attrs:{id:"dcert-membership-transactions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dcert-membership-transactions"}},[e._v("#")]),e._v(" dCERT membership transactions")]),e._v(" "),a("p",[e._v("Active dCERT members")]),e._v(" "),a("ul",[a("li",[e._v("change of the description of the dCERT group")]),e._v(" "),a("li",[e._v("circuit break a message route")]),e._v(" "),a("li",[e._v("vote to suspend a dCERT member.")])]),e._v(" "),a("p",[e._v('Here circuit-breaking refers to the capability to disable a groups of messages,\nThis could for instance mean: "disable all staking-delegation messages", or\n"disable all distribution messages". This could be accomplished by verifying\nthat the message route has not been "circuit-broken" at CheckTx time (in\n'),a("code",[e._v("baseapp/baseapp.go")]),e._v(").")]),e._v(" "),a("p",[e._v('"unbreaking" a circuit is anticipated only to occur during a hard fork upgrade\nmeaning that no capability to unbreak a message route on a live chain is\nrequired.')]),e._v(" "),a("p",[e._v("Note also, that if there was a problem with governance voting (for instance a\ncapability to vote many times) then governance would be broken and should be\nhalted with this mechanism, it would be then up to the validator set to\ncoordinate and hard-fork upgrade to a patched version of the software where\ngovernance is re-enabled (and fixed). If the dCERT group abuses this privilege\nthey should all be severely slashed.")]),e._v(" "),a("h2",{attrs:{id:"status"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),a("blockquote",[a("p",[e._v("Proposed")])]),e._v(" "),a("h2",{attrs:{id:"consequences"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),a("h3",{attrs:{id:"positive"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),a("ul",[a("li",[e._v("Potential to reduces the number of parties to coordinate with during an emergency")]),e._v(" "),a("li",[e._v("Reduction in possibility of disclosing sensitive information to malicious parties")])]),e._v(" "),a("h3",{attrs:{id:"negative"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),a("ul",[a("li",[e._v("Centralization risks")])]),e._v(" "),a("h3",{attrs:{id:"neutral"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[e._v("#")]),e._v(" Neutral")]),e._v(" "),a("h2",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),a("p",[a("RouterLink",{attrs:{to:"/architecture/adr-007-specialization-groups.html"}},[e._v("Specialization Groups ADR")])],1)])}),[],!1,null,null,null);t.default=n.exports}}]);