(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{653:function(e,t,o){"use strict";o.r(t);var a=o(0),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"submitting-a-cryptographic-code-review"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#submitting-a-cryptographic-code-review"}},[e._v("#")]),e._v(" Submitting a Cryptographic Code Review")]),e._v(" "),o("p",[e._v("As mentioned in "),o("a",{attrs:{href:"./verify"}},[e._v("the last section")]),e._v(", an essential component to creating secure,\ntrustable smart contracts are audits and code reviews. We described how to install\n"),o("code",[e._v("cargo-crev")]),e._v(", create your own ID, bootstrap your web of trust, and verify dependencies\non your contract. All of this makes use of the work of others. Once you have seen\nthe utility of such an approach, we invite you to add your own review on some crate,\nideally one used by your contract.")]),e._v(" "),o("p",[e._v("There is a good description of how to "),o("a",{attrs:{href:"https://github.com/crev-dev/cargo-crev/blob/master/cargo-crev/src/doc/getting_started.md#reviewing-code",target:"_blank",rel:"noopener noreferrer"}},[e._v("submit a review in the official docs"),o("OutboundLink")],1),e._v(",\nbut here we will lead you through an example relevant to CosmWasm. In this example,\nwe will do a review of the "),o("code",[e._v("cw-erc20")]),e._v(" crate.")]),e._v(" "),o("h2",{attrs:{id:"select-your-editor"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#select-your-editor"}},[e._v("#")]),e._v(" Select your editor")]),e._v(" "),o("p",[e._v("I "),o("a",{attrs:{href:"../getting-started/rust-basics#setting-up-your-ide"}},[e._v("recommended two free editors with good Rust support")]),e._v(", VSCode and IntelliJ.\nAssuming you are using one of those, you can load up the code to review with one\nof the following commands. Not that the "),o("code",[e._v("--cmd")]),e._v(" and "),o("code",[e._v("--cmd-save")]),e._v(" flags are only\nneeded once, after that you can omit all flags and it will remember your preference.\nYou only need to include them again if you want to open with a different editor.")]),e._v(" "),o("p",[e._v("VSCode:")]),e._v(" "),o("code-block",{staticClass:"codeblock",attrs:{language:"sh ",base64:"Y2FyZ28gY3JldiBjcmF0ZSBvcGVuIC11IGN3LWVyYzIwIDAuMS4wIC0tY21kICZxdW90O2NvZGUgLS13YWl0IC1uJnF1b3Q7IC0tY21kLXNhdmUK"}}),e._v(" "),o("p",[e._v("IntelliJ: (only works when no IntelliJ window is currently open)")]),e._v(" "),o("code-block",{staticClass:"codeblock",attrs:{language:"sh ",base64:"Y2FyZ28gY3JldiBjcmF0ZSBvcGVuIC11IGN3LWVyYzIwIDAuMS4wIC0tY21kICZxdW90O2lkZWEuc2gmcXVvdDsgLS1jbWQtc2F2ZQo="}}),e._v(" "),o("p",[o("em",[e._v("Note:")]),e._v(" you must be in the directory of some rust project to use "),o("code",[e._v("cargo crev crate")]),e._v('\n(it needs a "current crate" for context). If the crate you are reviewing is not a\ndependency of your current crate, then you must include the '),o("code",[e._v("-u")]),e._v(" flag.")]),e._v(" "),o("h2",{attrs:{id:"go-through-the-code"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#go-through-the-code"}},[e._v("#")]),e._v(" Go through the code")]),e._v(" "),o("p",[e._v("If you are reviewing a smart contract, the first step is to check that the boilerplate\nlooks reasonable. Check "),o("code",[e._v("Cargo.toml")]),e._v(" for dependencies. If you see a "),o("code",[e._v("build.rs")]),e._v(" file\n(or other script mentioned in "),o("code",[e._v("Cargo.toml")]),e._v(") do a close inspection. Ensure "),o("code",[e._v("lib.rs")]),e._v("\nlooks standard (there is no real need to change it, but we need to make sure that\neg. the "),o("code",[e._v("extern handle")]),e._v(" calls "),o("code",[e._v("contract::handle")]),e._v("). Ensure the "),o("code",[e._v("examples/schema.rs")]),e._v("\nfile imports types from this same contract. If you see any issues here,\nplease flag them.")]),e._v(" "),o("p",[e._v("As a second step, you can review the submitted artifacts are correct, using the\n"),o("a",{attrs:{href:"https://github.com/CosmWasm/cosmwasm-opt",target:"_blank",rel:"noopener noreferrer"}},[e._v("standard build process"),o("OutboundLink")],1),e._v(":")]),e._v(" "),o("code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"IyB0aGVzZSBzaG91bGQgYmUgdGhlIHNhbWUKc2hhMjU2c3VtIGNvbnRyYWN0Lndhc20KY2F0IGhhc2gudHh0CgojIGVuc3VyZSB3ZSBnZW5lcmF0ZSB0aGUgc2FtZSB3YXNtIGhhc2ggd2l0aCBhIGZyZXNoIGJ1aWxkCm12IGhhc2gudHh0IGhhc2hfb2xkLnR4dApybSBjb250cmFjdC53YXNtCmRvY2tlciBydW4gLS1ybSAtdiAkKHB3ZCk6L2NvZGUgXAogIC0tbW91bnQgdHlwZT12b2x1bWUsc291cmNlPSQoYmFzZW5hbWUgJChwd2QpKV9jYWNoZSx0YXJnZXQ9L2NvZGUvdGFyZ2V0IFwKICAtLW1vdW50IHR5cGU9dm9sdW1lLHNvdXJjZT1yZWdpc3RyeV9jYWNoZSx0YXJnZXQ9L3Vzci9sb2NhbC9jYXJnby9yZWdpc3RyeSBcCiAgY29uZmlvL2Nvc213YXNtLW9wdDowLjYuMApkaWZmIGhhc2gudHh0IGhhc2hfb2xkLnR4dAo="}}),e._v(" "),o("p",[e._v("If there is a mismatch, please file an issue on the crate you are reviewing\nand/or "),o("a",{attrs:{href:"https://github.com/CosmWasm/cosmwasm-opt",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("cosmwasm-opt")]),o("OutboundLink")],1),e._v(" if you suspect\na non-determinism in their output. It may be a simple oversight and the "),o("code",[e._v("contract.wasm")]),e._v("\nfrom an older version, so give the author a chance to fix it before flagging a\nnegative review.")]),e._v(" "),o("p",[e._v("Once you have done the basic sanity-checks, you can focus on the "),o("code",[e._v("src/contract.rs")]),e._v("\nfile (or directory) and go through, with a special eye for logic errors, and test\ncoverage. Run the tests yourself as well to make sure they all pass.\n(Note: if you have a permission issue with the "),o("code",[e._v("target")]),e._v(" dir, just "),o("code",[e._v("rm -rf target")]),e._v("\nand try running the tests again).")]),e._v(" "),o("code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"IyBDaGFuZ2UgdGhlIHRhcmdldCBmb3IgaW50ZWdyYXRpb24gdGVzdHMgdG8gdXNlIHRoZSBwcm9kdWN0aW9uIGJ1aWxkCiMgc3RhdGljIFdBU006ICZhbXA7W3U4XSA9IGluY2x1ZGVfYnl0ZXMhKCZxdW90Oy4uL2NvbnRyYWN0Lndhc20mcXVvdDspOwp2aSB0ZXN0cy9pbnRlZ3JhdGlvbi5ycwoKIyBUaGVuIHJ1biB0aGUgdW5pdCBhbmQgaW50ZWdyYXRpb24gdGVzdHMKY2FyZ28gdGVzdAo="}}),e._v(" "),o("p",[e._v("One issue I came across in some contracts (it is subtle) is the order of load and\nsave. If I do "),o("code",[e._v("load A, B, update A, B, save A, B")]),e._v(", this is usually\ncorrect. But what if "),o("code",[e._v("A")]),e._v(" and "),o("code",[e._v("B")]),e._v(" are the same? In the case of a token transfer,\nthis may mean sending to myself will decrease and increment the same account, but\nonly the last save will count (just the increment). To be more secure, make sure\nyou save one object before loading the next one if there is any chance of them being\nthe same: "),o("code",[e._v("load, update, save A. load, update, save B")]),e._v(". Note that the\n"),o("a",{attrs:{href:"https://github.com/CosmWasm/cw-storage",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("cw-storage")]),o("OutboundLink")],1),e._v(" crate provides a helper\nfor just this case to help avoid such bugs:\n"),o("a",{attrs:{href:"https://github.com/CosmWasm/cw-storage/blob/master/src/typed.rs#L72-L81",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("TypedStorage.update")]),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("Please make sure to file issues on the crates github account for any issue you discover,\nand link them to the review. If the crate owner responds with a new version fixing the filed bugs,\nplease review the changes, and submit a new review for the next published version. This may, for example,\nsignal to other users than "),o("code",[e._v("0.1.0")]),e._v(" has some security warnings, but "),o("code",[e._v("0.1.1")]),e._v(" is safe to use - valuable\ninformation for everyone.")]),e._v(" "),o("h2",{attrs:{id:"write-your-review"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#write-your-review"}},[e._v("#")]),e._v(" Write your review")]),e._v(" "),o("p",[e._v("Once you have finished reviewing the code above and lodged any issues on the official repo,\nyou can write up a code review to share with the world. Close the editor and go back to the\nterminal where you ran "),o("code",[e._v("cargo crev crate open ...")]),e._v(". Now, let's go write our review:")]),e._v(" "),o("code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"IyBDbGVhbiB1cCBhbnkgZWRpdHMgeW91IG1hZGUgd2hpbGUgdGVzdGluZwpjYXJnbyBjcmV2IGNyYXRlIGNsZWFuIC11IGN3LWVyYzIwCgojIFdyaXRlIGEgcmV2aWV3CmNhcmdvIGNyZXYgY3JhdGUgcmV2aWV3IC11IGN3LWVyYzIwCg=="}}),e._v(" "),o("p",[e._v("In particular, make sure to correctly note your "),o("code",[e._v("thoroughness")]),e._v(" and "),o("code",[e._v("understanding")]),e._v("\nas "),o("code",[e._v("high")]),e._v(", "),o("code",[e._v("medium")]),e._v(", "),o("code",[e._v("low")]),e._v(" or "),o("code",[e._v("none")]),e._v(". And your "),o("code",[e._v("rating")]),e._v(" as "),o("code",[e._v("strong")]),e._v(", "),o("code",[e._v("positive")]),e._v(",\n"),o("code",[e._v("neutral")]),e._v(", "),o("code",[e._v("negative")]),e._v(", or "),o("code",[e._v("dangerous")]),e._v(". There is a description of the meaning at\nthe bottom of the document in your editor. Please add a decent comment explaining\nyour results, and you can also add a section to link to any issues you registered on github.")]),e._v(" "),o("p",[e._v("Please be honest. If you just did a brief check, please mark thoroughness as "),o("code",[e._v("low")]),e._v(".\nThis is better than no review, but if you claim a detailed review, it can be misleading.\nHonesty counts and bad reviews can get you removed or isolated on the web of trust.")]),e._v(" "),o("p",[e._v("Here is my submission for "),o("code",[e._v("cw-erc20")]),e._v(", please note you must indent every line in the comment block:")]),e._v(" "),o("code-block",{staticClass:"codeblock",attrs:{language:"toml",base64:"IyBQYWNrYWdlIFJldmlldyBvZiBjdy1lcmMyMCAwLjEuMApyZXZpZXc6CiAgdGhvcm91Z2huZXNzOiBtZWRpdW0KICB1bmRlcnN0YW5kaW5nOiBoaWdoCiAgcmF0aW5nOiBzdHJvbmcKZmxhZ3M6CiAgdW5tYWludGFpbmVkOiBmYWxzZQpjb21tZW50OiB8LQogIEdvb2QgdGVzdCBjb3ZlcmFnZSBhbmQgc2ltcGxlLCBzdHJhaWdodC1mb3J3YXJkIGNvZGUuIFRoaXMgbWFrZXMgYSBzb2xpZCBiYXNlIGZvciBvdGhlciBjb250cmFjdHMgdG8gYnVpbGQgb24uCiAgU29tZSB3b3JrIG1heSBiZSBuZWVkZWQgdG8gZW5hYmxlIGVhc2llciByZXVzZSBpbiBvdGhlciBjb250cmFjdHMsIGJ1dCBpdCBpcyB2ZXJ5IHNvbGlkIHRvIHJ1biBpdCBhcy1pcy4K"}}),e._v(" "),o("p",[e._v("Verify this was saved properly with "),o("code",[e._v("cargo crev repo query review cw-erc20")]),e._v(" and if it looks good,\nmake sure to publish it.")]),e._v(" "),o("h2",{attrs:{id:"publishing"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#publishing"}},[e._v("#")]),e._v(" Publishing")]),e._v(" "),o("p",[e._v("Once you have created a review, you will want to share it with the world.\nYou can see which updates you have not yet published, but reviewing your local\ngit history:")]),e._v(" "),o("code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"Y2FyZ28gY3JldiByZXBvIGdpdCBsb2cK"}}),e._v(" "),o("p",[e._v("Once you are sure these updates are ready to share, you need to publish it to your personal "),o("code",[e._v("crev-proofs")]),e._v(" repo:")]),e._v(" "),o("code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"Y2FyZ28gY3JldiByZXBvIHB1Ymxpc2gK"}}),e._v(" "),o("p",[e._v("Then, make sure other developers can find your review, by publishing your repo and ID\non the "),o("a",{attrs:{href:"./verify#cosmwasm-developers"}},[e._v("list of CosmWasm developers")]),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"visibility-of-contract-reviews"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#visibility-of-contract-reviews"}},[e._v("#")]),e._v(" Visibility of contract reviews")]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("crev")]),e._v(" tool is largely designed to validate dependencies. That is, crates\nthat are imported by the current crate. You will notice that the current crate\nalways shows up as "),o("code",[e._v("local")]),e._v(", even if there are reviews. Thus, if you check out\na contract you wish to review and run the "),o("code",[e._v("crate verify")]),e._v(" command on it,\nyou will not see info on the contract itself.")]),e._v(" "),o("p",[e._v("You can see info on any contract you wish to reuse (not import),\nby querying the reviews directly:")]),e._v(" "),o("code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"Y2FyZ28gY3JldiByZXBvIHF1ZXJ5IHJldmlldyBjdy1lcmMyMAo="}}),e._v(" "),o("p",[e._v("(Interestingly, these reviews do not show up via "),o("code",[e._v("cargo crev crate info -u cw-erc20")]),e._v(").")]),e._v(" "),o("p",[e._v("One take-away of this, is that the most essential crates to review (besides anything\nyou immediately intend to put on a production blockchain), are those crates which\nare imported by others. This includes libraries, such as\n"),o("a",{attrs:{href:"https://github.com/CosmWasm/cw-storage",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("cw-storage")]),o("OutboundLink")],1),e._v(", as well as contracts designed\nto be imported by others and extended (which will likely be true of a future version\nof "),o("code",[e._v("cw-erc20")]),e._v("). Doing so leverages the value of the review not just for one contract,\nbut for many contracts that depend on that code.")]),e._v(" "),o("h2",{attrs:{id:"updating-your-review"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#updating-your-review"}},[e._v("#")]),e._v(" Updating your review")]),e._v(" "),o("p",[e._v("There are two reasons to update a review. Either you found more time and did a deeper, more thorough review\nof the same version, or a new version was published, possibly in response to issues you logged in the first version.\nIn either case, you can just run the same commands as above, especially "),o("code",[e._v("cargo crev crate review -u cw-erc20")]),e._v(" to submit a review.")]),e._v(" "),o("p",[e._v("If there is a new version out there, this will submit a second review for the new version.\nThis preserves important information, such as "),o("code",[e._v("0.2.0")]),e._v(" fixed some important security issues that were\npresent in "),o("code",[e._v("0.1.0")]),e._v(". The combination of a negative and positive review on different versions is very helpful\nfor anyone looking to reuse this code. When making the second review, you should notice that the "),o("code",[e._v("package.version")]),e._v("\nin the review file is updated.")]),e._v(" "),o("p",[e._v("If there is no new version published to "),o("a",{attrs:{href:"https://crates.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("crates.io"),o("OutboundLink")],1),e._v(", you will see a notice in the header:")]),e._v(" "),o("code-block",{staticClass:"codeblock",attrs:{language:"toml",base64:"IyBPdmVyd3JpdGluZyBleGlzdGluZyBwcm9vZiBjcmVhdGVkIG9uIDIwMjAtMDEtMDlUMTI6NDc6MzkuOTI0NjI1Mzg4KzAxOjAwCiMgUGFja2FnZSBSZXZpZXcgb2YgY3ctZXJjMjAgMC4xLjAK"}}),e._v(" "),o("p",[e._v("This warns you that you are about to overwrite an existing proof, rather than review a new version.\nIf this is not what you expect, make sure that the crate owner has published the new version of their\ncrate to "),o("a",{attrs:{href:"https://crates.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("crates.io"),o("OutboundLink")],1),e._v(". Maybe the fixes are just in "),o("code",[e._v("master")]),e._v(" and you will have to\nwait for an official release to add a new review on that.")])],1)}),[],!1,null,null,null);t.default=r.exports}}]);