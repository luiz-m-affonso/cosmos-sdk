(window.webpackJsonp=window.webpackJsonp||[]).push([[274],{624:function(e,o,a){"use strict";a.r(o);var t=a(1),i=Object(t.a)({},(function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"cosmovisor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cosmovisor"}},[e._v("#")]),e._v(" Cosmovisor")]),e._v(" "),a("p",[a("code",[e._v("cosmovisor")]),e._v(" is a small process manager for Cosmos SDK application binaries that monitors the governance module for incoming chain upgrade proposals. If it sees a proposal that gets approved, "),a("code",[e._v("cosmovisor")]),e._v(" can automatically download the new binary, stop the current binary, switch from the old binary to the new one, and finally restart the node with the new binary.")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#design"}},[e._v("Design")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#contributing"}},[e._v("Contributing")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#setup"}},[e._v("Setup")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#installation"}},[e._v("Installation")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#command-line-arguments-and-environment-variables"}},[e._v("Command Line Arguments And Environment Variables")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#folder-layout"}},[e._v("Folder Layout")])])])]),e._v(" "),a("li",[a("a",{attrs:{href:"#usage"}},[e._v("Usage")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#initialization"}},[e._v("Initialization")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#detecting-upgrades"}},[e._v("Detecting Upgrades")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#auto-download"}},[e._v("Auto-Download")])])])]),e._v(" "),a("li",[a("a",{attrs:{href:"#example-simapp-upgrade"}},[e._v("Example: SimApp Upgrade")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#chain-setup"}},[e._v("Chain Setup")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#prepare-cosmovisor-and-start-the-chain"}},[e._v("Prepare Cosmovisor and Start the Chain")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#update-app"}},[e._v("Update App")])])])])])])]),e._v(" "),a("h2",{attrs:{id:"design"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#design"}},[e._v("#")]),e._v(" Design")]),e._v(" "),a("p",[e._v("Cosmovisor is designed to be used as a wrapper for a "),a("code",[e._v("Cosmos SDK")]),e._v(" app:")]),e._v(" "),a("ul",[a("li",[e._v("it will pass arguments to the associated app (configured by "),a("code",[e._v("DAEMON_NAME")]),e._v(" env variable).\nRunning "),a("code",[e._v("cosmovisor run arg1 arg2 ....")]),e._v(" will run "),a("code",[e._v("app arg1 arg2 ...")]),e._v(";")]),e._v(" "),a("li",[e._v("it will manage an app by restarting and upgrading if needed;")]),e._v(" "),a("li",[e._v("it is configured using environment variables, not positional arguments.")])]),e._v(" "),a("p",[a("em",[e._v("Note: If new versions of the application are not set up to run in-place store migrations, migrations will need to be run manually before restarting "),a("code",[e._v("cosmovisor")]),e._v(" with the new binary. For this reason, we recommend applications adopt in-place store migrations.")])]),e._v(" "),a("p",[a("em",[e._v("Note: If validators would like to enable the auto-download option (which "),a("a",{attrs:{href:"#auto-download"}},[e._v("we don't recommend")]),e._v("), and they are currently running an application using Cosmos SDK "),a("code",[e._v("v0.42")]),e._v(", they will need to use Cosmovisor "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/releases/tag/cosmovisor%2Fv0.1.0",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("v0.1")]),a("OutboundLink")],1),e._v(". Later versions of Cosmovisor do not support Cosmos SDK "),a("code",[e._v("v0.44.3")]),e._v(" or earlier if the auto-download option is enabled.")])]),e._v(" "),a("h2",{attrs:{id:"contributing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contributing"}},[e._v("#")]),e._v(" Contributing")]),e._v(" "),a("p",[e._v("Cosmovisor is part of the Cosmos SDK monorepo, but it's a separate module with it's own release schedule.")]),e._v(" "),a("p",[e._v("Release branches have the following format "),a("code",[e._v("release/cosmovisor/vA.B.x")]),e._v(", where A and B are a number (e.g. "),a("code",[e._v("release/cosmovisor/v1.2.x")]),e._v("). Releases are tagged using the following format: "),a("code",[e._v("cosmovisor/vA.B.C")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setup"}},[e._v("#")]),e._v(" Setup")]),e._v(" "),a("h3",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),a("p",[e._v("You can download Cosmovisor from the "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/releases/tag/cosmovisor%2Fv1.2.1",target:"_blank",rel:"noopener noreferrer"}},[e._v("Github releases"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("To install the latest version of "),a("code",[e._v("cosmovisor")]),e._v(", run the following command:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"Z28gaW5zdGFsbCBnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL2Nvc21vdmlzb3IvY21kL2Nvc21vdmlzb3JAbGF0ZXN0Cg=="}}),e._v(" "),a("p",[e._v("To install a previous version, you can specify the version. IMPORTANT: Chains that use Cosmos-SDK v0.44.3 or earlier (eg v0.44.2) and want to use auto-download feature MUST use "),a("code",[e._v("cosmovisor v0.1.0")])]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"Z28gaW5zdGFsbCBnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL2Nvc21vdmlzb3IvY21kL2Nvc21vdmlzb3JAdjAuMS4wCg=="}}),e._v(" "),a("p",[e._v("Run "),a("code",[e._v("cosmovisor version")]),e._v(" to check the cosmovisor version.")]),e._v(" "),a("p",[e._v("You can also install from source by pulling the cosmos-sdk repository and switching to the correct version and building as follows:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"Z2l0IGNsb25lIGdpdEBnaXRodWIuY29tOmNvc21vcy9jb3Ntb3Mtc2RrCmNkIGNvc21vcy1zZGsKZ2l0IGNoZWNrb3V0IGNvc21vdmlzb3IvdngueC54Cm1ha2UgY29zbW92aXNvcgo="}}),e._v(" "),a("p",[e._v("This will build cosmovisor in "),a("code",[e._v("/cosmovisor")]),e._v(" directory. Afterwards you may want to put it into your machine's PATH like as follows:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"Y3AgY29zbW92aXNvci9jb3Ntb3Zpc29yIH4vZ28vYmluL2Nvc21vdmlzb3IK"}}),e._v(" "),a("p",[a("em",[e._v("Note: If you are using go "),a("code",[e._v("v1.15")]),e._v(" or earlier, you will need to use "),a("code",[e._v("go get")]),e._v(", and you may want to run the command outside a project directory.")])]),e._v(" "),a("h3",{attrs:{id:"command-line-arguments-and-environment-variables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#command-line-arguments-and-environment-variables"}},[e._v("#")]),e._v(" Command Line Arguments And Environment Variables")]),e._v(" "),a("p",[e._v("The first argument passed to "),a("code",[e._v("cosmovisor")]),e._v(" is the action for "),a("code",[e._v("cosmovisor")]),e._v(" to take. Options are:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("help")]),e._v(", "),a("code",[e._v("--help")]),e._v(", or "),a("code",[e._v("-h")]),e._v(" - Output "),a("code",[e._v("cosmovisor")]),e._v(" help information and check your "),a("code",[e._v("cosmovisor")]),e._v(" configuration.")]),e._v(" "),a("li",[a("code",[e._v("run")]),e._v(" - Run the configured binary using the rest of the provided arguments.")]),e._v(" "),a("li",[a("code",[e._v("version")]),e._v(" - Output the "),a("code",[e._v("cosmovisor")]),e._v(" version and also run the binary with the "),a("code",[e._v("version")]),e._v(" argument.")])]),e._v(" "),a("p",[e._v("All arguments passed to "),a("code",[e._v("cosmovisor run")]),e._v(" will be passed to the application binary (as a subprocess). "),a("code",[e._v("cosmovisor")]),e._v(" will return "),a("code",[e._v("/dev/stdout")]),e._v(" and "),a("code",[e._v("/dev/stderr")]),e._v(" of the subprocess as its own. For this reason, "),a("code",[e._v("cosmovisor run")]),e._v(" cannot accept any command-line arguments other than those available to the application binary.")]),e._v(" "),a("p",[e._v("*Note: Use of "),a("code",[e._v("cosmovisor")]),e._v(" without one of the action arguments is deprecated. For backwards compatibility, if the first argument is not an action argument, "),a("code",[e._v("run")]),e._v(" is assumed. However, this fallback might be removed in future versions, so it is recommended that you always provide "),a("code",[e._v("run")]),e._v(".")]),e._v(" "),a("p",[a("code",[e._v("cosmovisor")]),e._v(" reads its configuration from environment variables:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("DAEMON_HOME")]),e._v(" is the location where the "),a("code",[e._v("cosmovisor/")]),e._v(" directory is kept that contains the genesis binary, the upgrade binaries, and any additional auxiliary files associated with each binary (e.g. "),a("code",[e._v("$HOME/.gaiad")]),e._v(", "),a("code",[e._v("$HOME/.regend")]),e._v(", "),a("code",[e._v("$HOME/.simd")]),e._v(", etc.).")]),e._v(" "),a("li",[a("code",[e._v("DAEMON_NAME")]),e._v(" is the name of the binary itself (e.g. "),a("code",[e._v("gaiad")]),e._v(", "),a("code",[e._v("regend")]),e._v(", "),a("code",[e._v("simd")]),e._v(", etc.).")]),e._v(" "),a("li",[a("code",[e._v("DAEMON_ALLOW_DOWNLOAD_BINARIES")]),e._v(" ("),a("em",[e._v("optional")]),e._v("), if set to "),a("code",[e._v("true")]),e._v(", will enable auto-downloading of new binaries (for security reasons, this is intended for full nodes rather than validators). By default, "),a("code",[e._v("cosmovisor")]),e._v(" will not auto-download new binaries.")]),e._v(" "),a("li",[a("code",[e._v("DAEMON_RESTART_AFTER_UPGRADE")]),e._v(" ("),a("em",[e._v("optional")]),e._v(", default = "),a("code",[e._v("true")]),e._v("), if "),a("code",[e._v("true")]),e._v(", restarts the subprocess with the same command-line arguments and flags (but with the new binary) after a successful upgrade. Otherwise ("),a("code",[e._v("false")]),e._v("), "),a("code",[e._v("cosmovisor")]),e._v(" stops running after an upgrade and requires the system administrator to manually restart it. Note restart is only after the upgrade and does not auto-restart the subprocess after an error occurs.")]),e._v(" "),a("li",[a("code",[e._v("DAEMON_RESTART_DELAY")]),e._v(" ("),a("em",[e._v("optional")]),e._v(", default none), allow a node operator to define a delay between the node halt (for upgrade) and backup by the specified time. The value must be a duration (e.g. "),a("code",[e._v("1s")]),e._v(").")]),e._v(" "),a("li",[a("code",[e._v("DAEMON_POLL_INTERVAL")]),e._v(" ("),a("em",[e._v("optional")]),e._v(", default 300 milliseconds), is the interval length for polling the upgrade plan file. The value must be a duration (e.g. "),a("code",[e._v("1s")]),e._v(").")]),e._v(" "),a("li",[a("code",[e._v("DAEMON_DATA_BACKUP_DIR")]),e._v(" option to set a custom backup directory. If not set, "),a("code",[e._v("DAEMON_HOME")]),e._v(" is used.")]),e._v(" "),a("li",[a("code",[e._v("UNSAFE_SKIP_BACKUP")]),e._v(" (defaults to "),a("code",[e._v("false")]),e._v("), if set to "),a("code",[e._v("true")]),e._v(", upgrades directly without performing a backup. Otherwise ("),a("code",[e._v("false")]),e._v(", default) backs up the data before trying the upgrade. The default value of false is useful and recommended in case of failures and when a backup needed to rollback. We recommend using the default backup option "),a("code",[e._v("UNSAFE_SKIP_BACKUP=false")]),e._v(".")]),e._v(" "),a("li",[a("code",[e._v("DAEMON_PREUPGRADE_MAX_RETRIES")]),e._v(" (defaults to "),a("code",[e._v("0")]),e._v("). The maximum number of times to call "),a("code",[e._v("pre-upgrade")]),e._v(" in the application after exit status of "),a("code",[e._v("31")]),e._v(". After the maximum number of retries, cosmovisor fails the upgrade.")])]),e._v(" "),a("h3",{attrs:{id:"folder-layout"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#folder-layout"}},[e._v("#")]),e._v(" Folder Layout")]),e._v(" "),a("p",[a("code",[e._v("$DAEMON_HOME/cosmovisor")]),e._v(" is expected to belong completely to "),a("code",[e._v("cosmovisor")]),e._v(" and the subprocesses that are controlled by it. The folder content is organized as follows:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"text",base64:"LgrilJzilIDilIAgY3VycmVudCAtJmd0OyBnZW5lc2lzIG9yIHVwZ3JhZGVzLyZsdDtuYW1lJmd0OwrilJzilIDilIAgZ2VuZXNpcwrilILCoMKgIOKUlOKUgOKUgCBiaW4K4pSCwqDCoCAgICAg4pSU4pSA4pSAICREQUVNT05fTkFNRQrilJTilIDilIAgdXBncmFkZXMKICAgIOKUlOKUgOKUgCAmbHQ7bmFtZSZndDsKICAgICAgICDilJzilIDilIAgYmluCiAgICAgICAg4pSCwqDCoCDilJTilIDilIAgJERBRU1PTl9OQU1FCiAgICAgICAg4pSU4pSA4pSAIHVwZ3JhZGUtaW5mby5qc29uCg=="}}),e._v(" "),a("p",[e._v("The "),a("code",[e._v("cosmovisor/")]),e._v(" directory incudes a subdirectory for each version of the application (i.e. "),a("code",[e._v("genesis")]),e._v(" or "),a("code",[e._v("upgrades/<name>")]),e._v("). Within each subdirectory is the application binary (i.e. "),a("code",[e._v("bin/$DAEMON_NAME")]),e._v(") and any additional auxiliary files associated with each binary. "),a("code",[e._v("current")]),e._v(" is a symbolic link to the currently active directory (i.e. "),a("code",[e._v("genesis")]),e._v(" or "),a("code",[e._v("upgrades/<name>")]),e._v("). The "),a("code",[e._v("name")]),e._v(" variable in "),a("code",[e._v("upgrades/<name>")]),e._v(" is the lowercased URI-encoded name of the upgrade as specified in the upgrade module plan. Note that the upgrade name path are normalized to be lowercased: for instance, "),a("code",[e._v("MyUpgrade")]),e._v(" is normalized to "),a("code",[e._v("myupgrade")]),e._v(", and its path is "),a("code",[e._v("upgrades/myupgrade")]),e._v(".")]),e._v(" "),a("p",[e._v("Please note that "),a("code",[e._v("$DAEMON_HOME/cosmovisor")]),e._v(" only stores the "),a("em",[e._v("application binaries")]),e._v(". The "),a("code",[e._v("cosmovisor")]),e._v(" binary itself can be stored in any typical location (e.g. "),a("code",[e._v("/usr/local/bin")]),e._v("). The application will continue to store its data in the default data directory (e.g. "),a("code",[e._v("$HOME/.gaiad")]),e._v(") or the data directory specified with the "),a("code",[e._v("--home")]),e._v(" flag. "),a("code",[e._v("$DAEMON_HOME")]),e._v(" is independent of the data directory and can be set to any location. If you set "),a("code",[e._v("$DAEMON_HOME")]),e._v(" to the same directory as the data directory, you will end up with a configuation like the following:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"text",base64:"LmdhaWFkCuKUnOKUgOKUgCBjb25maWcK4pSc4pSA4pSAIGRhdGEK4pSU4pSA4pSAIGNvc21vdmlzb3IK"}}),e._v(" "),a("h2",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("p",[e._v("The system administrator is responsible for:")]),e._v(" "),a("ul",[a("li",[e._v("installing the "),a("code",[e._v("cosmovisor")]),e._v(" binary")]),e._v(" "),a("li",[e._v("configuring the host's init system (e.g. "),a("code",[e._v("systemd")]),e._v(", "),a("code",[e._v("launchd")]),e._v(", etc.)")]),e._v(" "),a("li",[e._v("appropriately setting the environmental variables")]),e._v(" "),a("li",[e._v("creating the "),a("code",[e._v("<DAEMON_HOME>/cosmovisor")]),e._v(" directory")]),e._v(" "),a("li",[e._v("creating the "),a("code",[e._v("<DAEMON_HOME>/cosmovisor/genesis/bin")]),e._v(" folder")]),e._v(" "),a("li",[e._v("creating the "),a("code",[e._v("<DAEMON_HOME>/cosmovisor/upgrades/<name>/bin")]),e._v(" folders")]),e._v(" "),a("li",[e._v("placing the different versions of the "),a("code",[e._v("<DAEMON_NAME>")]),e._v(" executable in the appropriate "),a("code",[e._v("bin")]),e._v(" folders.")])]),e._v(" "),a("p",[a("code",[e._v("cosmovisor")]),e._v(" will set the "),a("code",[e._v("current")]),e._v(" link to point to "),a("code",[e._v("genesis")]),e._v(" at first start (i.e. when no "),a("code",[e._v("current")]),e._v(" link exists) and then handle switching binaries at the correct points in time so that the system administrator can prepare days in advance and relax at upgrade time.")]),e._v(" "),a("p",[e._v("In order to support downloadable binaries, a tarball for each upgrade binary will need to be packaged up and made available through a canonical URL. Additionally, a tarball that includes the genesis binary and all available upgrade binaries can be packaged up and made available so that all the necessary binaries required to sync a fullnode from start can be easily downloaded.")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("DAEMON")]),e._v(" specific code and operations (e.g. tendermint config, the application db, syncing blocks, etc.) all work as expected. The application binaries' directives such as command-line flags and environment variables also work as expected.")]),e._v(" "),a("h3",{attrs:{id:"initialization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#initialization"}},[e._v("#")]),e._v(" Initialization")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("cosmovisor init <path to executable>")]),e._v(" command creates the folder structure required for using cosmovisor.")]),e._v(" "),a("p",[e._v("It does the following:")]),e._v(" "),a("ul",[a("li",[e._v("creates the "),a("code",[e._v("<DAEMON_HOME>/cosmovisor")]),e._v(" folder if it doesn't yet exist")]),e._v(" "),a("li",[e._v("creates the "),a("code",[e._v("<DAEMON_HOME>/cosmovisor/genesis/bin")]),e._v(" folder if it doesn't yet exist")]),e._v(" "),a("li",[e._v("copies the provided executable file to "),a("code",[e._v("<DAEMON_HOME>/cosmovisor/genesis/bin/<DAEMON_NAME>")])]),e._v(" "),a("li",[e._v("creates the "),a("code",[e._v("current")]),e._v(" link, pointing to the "),a("code",[e._v("genesis")]),e._v(" folder")])]),e._v(" "),a("p",[e._v("It uses the "),a("code",[e._v("DAEMON_HOME")]),e._v(" and "),a("code",[e._v("DAEMON_NAME")]),e._v(" environment variables for folder location and executable name.")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("cosmovisor init")]),e._v(" command is specifically for initializing cosmovisor, and should not be confused with a chain's "),a("code",[e._v("init")]),e._v(" command (e.g. "),a("code",[e._v("cosmovisor run init")]),e._v(").")]),e._v(" "),a("h3",{attrs:{id:"detecting-upgrades"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#detecting-upgrades"}},[e._v("#")]),e._v(" Detecting Upgrades")]),e._v(" "),a("p",[a("code",[e._v("cosmovisor")]),e._v(" is polling the "),a("code",[e._v("$DAEMON_HOME/data/upgrade-info.json")]),e._v(" file for new upgrade instructions. The file is created by the x/upgrade module in "),a("code",[e._v("BeginBlocker")]),e._v(" when an upgrade is detected and the blockchain reaches the upgrade height.\nThe following heuristic is applied to detect the upgrade:")]),e._v(" "),a("ul",[a("li",[e._v("When starting, "),a("code",[e._v("cosmovisor")]),e._v(" doesn't know much about currently running upgrade, except the binary which is "),a("code",[e._v("current/bin/")]),e._v(". It tries to read the "),a("code",[e._v("current/update-info.json")]),e._v(" file to get information about the current upgrade name.")]),e._v(" "),a("li",[e._v("If neither "),a("code",[e._v("cosmovisor/current/upgrade-info.json")]),e._v(" nor "),a("code",[e._v("data/upgrade-info.json")]),e._v(" exist, then "),a("code",[e._v("cosmovisor")]),e._v(" will wait for "),a("code",[e._v("data/upgrade-info.json")]),e._v(" file to trigger an upgrade.")]),e._v(" "),a("li",[e._v("If "),a("code",[e._v("cosmovisor/current/upgrade-info.json")]),e._v(" doesn't exist but "),a("code",[e._v("data/upgrade-info.json")]),e._v(" exists, then "),a("code",[e._v("cosmovisor")]),e._v(" assumes that whatever is in "),a("code",[e._v("data/upgrade-info.json")]),e._v(" is a valid upgrade request. In this case "),a("code",[e._v("cosmovisor")]),e._v(" tries immediately to make an upgrade according to the "),a("code",[e._v("name")]),e._v(" attribute in "),a("code",[e._v("data/upgrade-info.json")]),e._v(".")]),e._v(" "),a("li",[e._v("Otherwise, "),a("code",[e._v("cosmovisor")]),e._v(" waits for changes in "),a("code",[e._v("upgrade-info.json")]),e._v(". As soon as a new upgrade name is recorded in the file, "),a("code",[e._v("cosmovisor")]),e._v(" will trigger an upgrade mechanism.")])]),e._v(" "),a("p",[e._v("When the upgrade mechanism is triggered, "),a("code",[e._v("cosmovisor")]),e._v(" will:")]),e._v(" "),a("ol",[a("li",[e._v("if "),a("code",[e._v("DAEMON_ALLOW_DOWNLOAD_BINARIES")]),e._v(" is enabled, start by auto-downloading a new binary into "),a("code",[e._v("cosmovisor/<name>/bin")]),e._v(" (where "),a("code",[e._v("<name>")]),e._v(" is the "),a("code",[e._v("upgrade-info.json:name")]),e._v(" attribute);")]),e._v(" "),a("li",[e._v("update the "),a("code",[e._v("current")]),e._v(" symbolic link to point to the new directory and save "),a("code",[e._v("data/upgrade-info.json")]),e._v(" to "),a("code",[e._v("cosmovisor/current/upgrade-info.json")]),e._v(".")])]),e._v(" "),a("h3",{attrs:{id:"auto-download"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#auto-download"}},[e._v("#")]),e._v(" Auto-Download")]),e._v(" "),a("p",[e._v("Generally, "),a("code",[e._v("cosmovisor")]),e._v(" requires that the system administrator place all relevant binaries on disk before the upgrade happens. However, for people who don't need such control and want an automated setup (maybe they are syncing a non-validating fullnode and want to do little maintenance), there is another option.")]),e._v(" "),a("p",[a("strong",[e._v("NOTE: we don't recommend using auto-download")]),e._v(" because it doesn't verify in advance if a binary is available. If there will be any issue with downloading a binary, the cosmovisor will stop and won't restart an App (which could lead to a chain halt).")]),e._v(" "),a("p",[e._v("If "),a("code",[e._v("DAEMON_ALLOW_DOWNLOAD_BINARIES")]),e._v(" is set to "),a("code",[e._v("true")]),e._v(", and no local binary can be found when an upgrade is triggered, "),a("code",[e._v("cosmovisor")]),e._v(" will attempt to download and install the binary itself based on the instructions in the "),a("code",[e._v("info")]),e._v(" attribute in the "),a("code",[e._v("data/upgrade-info.json")]),e._v(" file. The files is constructed by the x/upgrade module and contains data from the upgrade "),a("code",[e._v("Plan")]),e._v(" object. The "),a("code",[e._v("Plan")]),e._v(" has an info field that is expected to have one of the following two valid formats to specify a download:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Store an os/architecture -> binary URI map in the upgrade plan info field as JSON under the "),a("code",[e._v('"binaries"')]),e._v(" key. For example:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewogICZxdW90O2JpbmFyaWVzJnF1b3Q7OiB7CiAgICAmcXVvdDtsaW51eC9hbWQ2NCZxdW90OzomcXVvdDtodHRwczovL2V4YW1wbGUuY29tL2dhaWEuemlwP2NoZWNrc3VtPXNoYTI1NjphZWMwNzA2NDVmZTUzZWUzYjM3NjMwNTkzNzYxMzRmMDU4Y2MzMzcyNDdjOTc4YWRkMTc4YjZjY2RmYjAwMTlmJnF1b3Q7CiAgfQp9Cg=="}}),e._v(" "),a("p",[e._v("You can include multiple binaries at once to ensure more than one environment will receive the correct binaries:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewogICZxdW90O2JpbmFyaWVzJnF1b3Q7OiB7CiAgICAmcXVvdDtsaW51eC9hbWQ2NCZxdW90OzomcXVvdDtodHRwczovL2V4YW1wbGUuY29tL2dhaWEuemlwP2NoZWNrc3VtPXNoYTI1NjphZWMwNzA2NDVmZTUzZWUzYjM3NjMwNTkzNzYxMzRmMDU4Y2MzMzcyNDdjOTc4YWRkMTc4YjZjY2RmYjAwMTlmJnF1b3Q7LAogICAgJnF1b3Q7bGludXgvYXJtNjQmcXVvdDs6JnF1b3Q7aHR0cHM6Ly9leGFtcGxlLmNvbS9nYWlhLnppcD9jaGVja3N1bT1zaGEyNTY6YWVjMDcwNjQ1ZmU1M2VlM2IzNzYzMDU5Mzc2MTM0ZjA1OGNjMzM3MjQ3Yzk3OGFkZDE3OGI2Y2NkZmIwMDE5ZiZxdW90OywKICAgICZxdW90O2Rhcndpbi9hbWQ2NCZxdW90OzomcXVvdDtodHRwczovL2V4YW1wbGUuY29tL2dhaWEuemlwP2NoZWNrc3VtPXNoYTI1NjphZWMwNzA2NDVmZTUzZWUzYjM3NjMwNTkzNzYxMzRmMDU4Y2MzMzcyNDdjOTc4YWRkMTc4YjZjY2RmYjAwMTlmJnF1b3Q7CiAgICB9Cn0K"}}),e._v(" "),a("p",[e._v("When submitting this as a proposal ensure there are no spaces. An example command using "),a("code",[e._v("gaiad")]),e._v(" could look like:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"Jmd0OyBnYWlhZCB0eCBnb3Ygc3VibWl0LXByb3Bvc2FsIHNvZnR3YXJlLXVwZ3JhZGUgVmVnYSBcCi0tdGl0bGUgVmVnYSBcCi0tZGVwb3NpdCAxMDB1YXRvbSBcCi0tdXBncmFkZS1oZWlnaHQgNzM2ODQyMCBcCi0tdXBncmFkZS1pbmZvICd7JnF1b3Q7YmluYXJpZXMmcXVvdDs6eyZxdW90O2xpbnV4L2FtZDY0JnF1b3Q7OiZxdW90O2h0dHBzOi8vZ2l0aHViLmNvbS9jb3Ntb3MvZ2FpYS9yZWxlYXNlcy9kb3dubG9hZC92Ni4wLjAtcmMxL2dhaWFkLXY2LjAuMC1yYzEtbGludXgtYW1kNjQmcXVvdDssJnF1b3Q7bGludXgvYXJtNjQmcXVvdDs6JnF1b3Q7aHR0cHM6Ly9naXRodWIuY29tL2Nvc21vcy9nYWlhL3JlbGVhc2VzL2Rvd25sb2FkL3Y2LjAuMC1yYzEvZ2FpYWQtdjYuMC4wLXJjMS1saW51eC1hcm02NCZxdW90OywmcXVvdDtkYXJ3aW4vYW1kNjQmcXVvdDs6JnF1b3Q7aHR0cHM6Ly9naXRodWIuY29tL2Nvc21vcy9nYWlhL3JlbGVhc2VzL2Rvd25sb2FkL3Y2LjAuMC1yYzEvZ2FpYWQtdjYuMC4wLXJjMS1kYXJ3aW4tYW1kNjQmcXVvdDt9fScgXAotLWRlc2NyaXB0aW9uICZxdW90O3VwZ3JhZGUgdG8gVmVnYSZxdW90OyBcCi0tZ2FzIDQwMDAwMCBcCi0tZnJvbSB1c2VyIFwKLS1jaGFpbi1pZCB0ZXN0IFwKLS1ob21lIHRlc3QvdmFsMiBcCi0tbm9kZSB0Y3A6Ly9sb2NhbGhvc3Q6MzY2NTcgXAotLXllcwo="}})],1),e._v(" "),a("li",[a("p",[e._v("Store a link to a file that contains all information in the above format (e.g. if you want to specify lots of binaries, changelog info, etc. without filling up the blockchain). For example:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"text",base64:"aHR0cHM6Ly9leGFtcGxlLmNvbS90ZXN0bmV0LTEwMDEtaW5mby5qc29uP2NoZWNrc3VtPXNoYTI1NjpkZWFhYTk5ZmRhOTQwN2M0ZGJlMWQwNGJkNDliYWIwY2MzYzFkZDc2ZmEzOTJjZDU1YTk0MjViZTA3NGFmMDFlCg=="}})],1)]),e._v(" "),a("p",[e._v("When "),a("code",[e._v("cosmovisor")]),e._v(" is triggered to download the new binary, "),a("code",[e._v("cosmovisor")]),e._v(" will parse the "),a("code",[e._v('"binaries"')]),e._v(" field, download the new binary with "),a("a",{attrs:{href:"https://github.com/hashicorp/go-getter",target:"_blank",rel:"noopener noreferrer"}},[e._v("go-getter"),a("OutboundLink")],1),e._v(", and unpack the new binary in the "),a("code",[e._v("upgrades/<name>")]),e._v(" folder so that it can be run as if it was installed manually.")]),e._v(" "),a("p",[e._v("Note that for this mechanism to provide strong security guarantees, all URLs should include a SHA 256/512 checksum. This ensures that no false binary is run, even if someone hacks the server or hijacks the DNS. "),a("code",[e._v("go-getter")]),e._v(" will always ensure the downloaded file matches the checksum if it is provided. "),a("code",[e._v("go-getter")]),e._v(" will also handle unpacking archives into directories (in this case the download link should point to a "),a("code",[e._v("zip")]),e._v(" file of all data in the "),a("code",[e._v("bin")]),e._v(" directory).")]),e._v(" "),a("p",[e._v("To properly create a sha256 checksum on linux, you can use the "),a("code",[e._v("sha256sum")]),e._v(" utility. For example:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"c2hhMjU2c3VtIC4vdGVzdGRhdGEvcmVwby96aXBfZGlyZWN0b3J5L2F1dG9kLnppcAo="}}),e._v(" "),a("p",[e._v("The result will look something like the following: "),a("code",[e._v("29139e1381b8177aec909fab9a75d11381cab5adf7d3af0c05ff1c9c117743a7")]),e._v(".")]),e._v(" "),a("p",[e._v("You can also use "),a("code",[e._v("sha512sum")]),e._v(" if you would prefer to use longer hashes, or "),a("code",[e._v("md5sum")]),e._v(" if you would prefer to use broken hashes. Whichever you choose, make sure to set the hash algorithm properly in the checksum argument to the URL.")]),e._v(" "),a("h2",{attrs:{id:"example-simapp-upgrade"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-simapp-upgrade"}},[e._v("#")]),e._v(" Example: SimApp Upgrade")]),e._v(" "),a("p",[e._v("The following instructions provide a demonstration of "),a("code",[e._v("cosmovisor")]),e._v(" using the simulation application ("),a("code",[e._v("simapp")]),e._v(") shipped with the Cosmos SDK's source code. The following commands are to be run from within the "),a("code",[e._v("cosmos-sdk")]),e._v(" repository.")]),e._v(" "),a("h3",{attrs:{id:"chain-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chain-setup"}},[e._v("#")]),e._v(" Chain Setup")]),e._v(" "),a("p",[e._v("Let's create a new chain using the "),a("code",[e._v("v0.44")]),e._v(" version of simapp (the Cosmos SDK demo app):")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"Z2l0IGNoZWNrb3V0IHYwLjQ0LjYKbWFrZSBidWlsZAo="}}),e._v(" "),a("p",[e._v("Clean "),a("code",[e._v("~/.simapp")]),e._v(" (never do this in a production environment):")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"Li9idWlsZC9zaW1kIHVuc2FmZS1yZXNldC1hbGwK"}}),e._v(" "),a("p",[e._v("Set up app config:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"Li9idWlsZC9zaW1kIGNvbmZpZyBjaGFpbi1pZCB0ZXN0Ci4vYnVpbGQvc2ltZCBjb25maWcga2V5cmluZy1iYWNrZW5kIHRlc3QKLi9idWlsZC9zaW1kIGNvbmZpZyBicm9hZGNhc3QtbW9kZSBibG9jawo="}}),e._v(" "),a("p",[e._v("Initialize the node and overwrite any previous genesis file (never do this in a production environment):")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"Li9idWlsZC9zaW1kIGluaXQgdGVzdCAtLWNoYWluLWlkIHRlc3QgLS1vdmVyd3JpdGUK"}}),e._v(" "),a("p",[e._v("Set the minimum gas price to "),a("code",[e._v("0stake")]),e._v(" in "),a("code",[e._v("~/.simapp/config/app.toml")]),e._v(":")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"bWluaW11bS1nYXMtcHJpY2VzID0gJnF1b3Q7MHN0YWtlJnF1b3Q7Cg=="}}),e._v(" "),a("p",[e._v("For the sake of this demonstration, amend "),a("code",[e._v("voting_period")]),e._v(" in "),a("code",[e._v("genesis.json")]),e._v(" to a reduced time of 20 seconds ("),a("code",[e._v("20s")]),e._v("):")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"Y2F0ICZsdDsmbHQ7Jmx0OyAkKGpxICcuYXBwX3N0YXRlLmdvdi52b3RpbmdfcGFyYW1zLnZvdGluZ19wZXJpb2QgPSAmcXVvdDsyMHMmcXVvdDsnICRIT01FLy5zaW1hcHAvY29uZmlnL2dlbmVzaXMuanNvbikgJmd0OyAkSE9NRS8uc2ltYXBwL2NvbmZpZy9nZW5lc2lzLmpzb24K"}}),e._v(" "),a("p",[e._v("Create a validator, and setup genesis transaction:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"Li9idWlsZC9zaW1kIGtleXMgYWRkIHZhbGlkYXRvcgouL2J1aWxkL3NpbWQgYWRkLWdlbmVzaXMtYWNjb3VudCB2YWxpZGF0b3IgMTAwMDAwMDAwMHN0YWtlIC0ta2V5cmluZy1iYWNrZW5kIHRlc3QKLi9idWlsZC9zaW1kIGdlbnR4IHZhbGlkYXRvciAxMDAwMDAwc3Rha2UgLS1jaGFpbi1pZCB0ZXN0Ci4vYnVpbGQvc2ltZCBjb2xsZWN0LWdlbnR4cwo="}}),e._v(" "),a("h4",{attrs:{id:"prepare-cosmovisor-and-start-the-chain"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prepare-cosmovisor-and-start-the-chain"}},[e._v("#")]),e._v(" Prepare Cosmovisor and Start the Chain")]),e._v(" "),a("p",[e._v("Set the required environment variables:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"ZXhwb3J0IERBRU1PTl9OQU1FPXNpbWQKZXhwb3J0IERBRU1PTl9IT01FPSRIT01FLy5zaW1hcHAK"}}),e._v(" "),a("p",[e._v("Set the optional environment variable to trigger an automatic app restart:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"ZXhwb3J0IERBRU1PTl9SRVNUQVJUX0FGVEVSX1VQR1JBREU9dHJ1ZQo="}}),e._v(" "),a("p",[e._v("Create the folder for the genesis binary and copy the "),a("code",[e._v("simd")]),e._v(" binary:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"bWtkaXIgLXAgJERBRU1PTl9IT01FL2Nvc21vdmlzb3IvZ2VuZXNpcy9iaW4KY3AgLi9idWlsZC9zaW1kICREQUVNT05fSE9NRS9jb3Ntb3Zpc29yL2dlbmVzaXMvYmluCg=="}}),e._v(" "),a("p",[e._v("Now you can run cosmovisor with simapp v0.44:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"Y29zbW92aXNvciBydW4gc3RhcnQK"}}),e._v(" "),a("h4",{attrs:{id:"update-app"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-app"}},[e._v("#")]),e._v(" Update App")]),e._v(" "),a("p",[e._v("Update app to the latest version (e.g. v0.45).")]),e._v(" "),a("p",[e._v("Next, we can add a migration - which is defined using "),a("code",[e._v("x/upgrade")]),e._v(" "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/main/docs/core/upgrade.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("upgrade plan"),a("OutboundLink")],1),e._v(" (you may refer to a past version if you are using an older Cosmos SDK release). In a migration we can do any deterministic state change.")]),e._v(" "),a("p",[e._v("Build the new version "),a("code",[e._v("simd")]),e._v(" binary:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"bWFrZSBidWlsZAo="}}),e._v(" "),a("p",[e._v("Create the folder for the upgrade binary and copy the "),a("code",[e._v("simd")]),e._v(" binary:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"bWtkaXIgLXAgJERBRU1PTl9IT01FL2Nvc21vdmlzb3IvdXBncmFkZXMvdGVzdDEvYmluCmNwIC4vYnVpbGQvc2ltZCAkREFFTU9OX0hPTUUvY29zbW92aXNvci91cGdyYWRlcy90ZXN0MS9iaW4K"}}),e._v(" "),a("p",[e._v("Open a new terminal window and submit an upgrade proposal along with a deposit and a vote (these commands must be run within 20 seconds of each other):\nNote, when using a "),a("code",[e._v("v0.46+")]),e._v(" chain, replace "),a("code",[e._v("submit-proposal")]),e._v(" by "),a("code",[e._v("submit-legacy-proposal")]),e._v(".")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"Li9idWlsZC9zaW1kIHR4IGdvdiBzdWJtaXQtcHJvcG9zYWwgc29mdHdhcmUtdXBncmFkZSB0ZXN0MSAtLXRpdGxlIHVwZ3JhZGUgLS1kZXNjcmlwdGlvbiB1cGdyYWRlIC0tdXBncmFkZS1oZWlnaHQgMjAwIC0tZnJvbSB2YWxpZGF0b3IgLS15ZXMKLi9idWlsZC9zaW1kIHR4IGdvdiBkZXBvc2l0IDEgMTAwMDAwMDBzdGFrZSAtLWZyb20gdmFsaWRhdG9yIC0teWVzCi4vYnVpbGQvc2ltZCB0eCBnb3Ygdm90ZSAxIHllcyAtLWZyb20gdmFsaWRhdG9yIC0teWVzCg=="}}),e._v(" "),a("p",[e._v("The upgrade will occur automatically at height 200. Note: you may need to change the upgrade height in the snippet above if your test play takes more time.")])],1)}),[],!1,null,null,null);o.default=i.exports}}]);