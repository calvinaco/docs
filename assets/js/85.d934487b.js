(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{676:function(e,t,a){"use strict";a.r(t);var o=a(0),i=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"cosmic-dapp-logic"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cosmic-dapp-logic"}},[e._v("#")]),e._v(" Cosmic dApp logic")]),e._v(" "),a("p",[e._v("The "),a("a",{attrs:{href:"https://github.com/CosmWasm/dApps/tree/master/packages/logic",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("@cosmicdapp/logic")]),a("OutboundLink")],1),e._v(" package provides three kinds of resources that will make it easier to develop CosmJS based dApps: config, utils, and service. In order to better understand the example balance checker dApp that we'll be developing, we'll go over those utilities that will be used in the app.")]),e._v(" "),a("h2",{attrs:{id:"config"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#config"}},[e._v("#")]),e._v(" Config")]),e._v(" "),a("p",[e._v("The AppConfig definitions that configure the app to work for a given chain:")]),e._v(" "),a("code-block",{staticClass:"codeblock",attrs:{language:"typescript",base64:"ZXhwb3J0IGludGVyZmFjZSBBcHBDb25maWcgewogIHJlYWRvbmx5IGNoYWluSWQ6IHN0cmluZzsKICByZWFkb25seSBjaGFpbk5hbWU6IHN0cmluZzsKICByZWFkb25seSBhZGRyZXNzUHJlZml4OiBzdHJpbmc7CiAgcmVhZG9ubHkgcnBjVXJsOiBzdHJpbmc7CiAgcmVhZG9ubHkgaHR0cFVybDogc3RyaW5nOwogIHJlYWRvbmx5IGZhdWNldFVybDogc3RyaW5nOwogIHJlYWRvbmx5IGZlZVRva2VuOiBzdHJpbmc7CiAgcmVhZG9ubHkgc3Rha2luZ1Rva2VuOiBzdHJpbmc7CiAgcmVhZG9ubHkgZmF1Y2V0VG9rZW46IHN0cmluZzsKICByZWFkb25seSBjb2luTWFwOiBDb2luTWFwOwogIHJlYWRvbmx5IGdhc1ByaWNlOiBudW1iZXI7CiAgcmVhZG9ubHkgY29kZUlkPzogbnVtYmVyOwp9Cg=="}}),e._v(" "),a("p",[e._v("In this tutorial we'll be using configuration for Heldernet.")]),e._v(" "),a("p",[e._v("The fields are pretty self-explanatory except "),a("code",[e._v("coinMap")]),e._v(", which is a map of native coin names that will allow us to pretty print the token amounts with "),a("code",[e._v("nativeCoinToDisplay()")]),e._v(". It looks like this:")]),e._v(" "),a("code-block",{staticClass:"codeblock",attrs:{language:"typescript",base64:"ewogIHVjb3NtOiB7IGRlbm9tOiAmcXVvdDtDT1NNJnF1b3Q7LCBmcmFjdGlvbmFsRGlnaXRzOiA2IH0sCiAgdXN0YWtlOiB7IGRlbm9tOiAmcXVvdDtTVEFLRSZxdW90OywgZnJhY3Rpb25hbERpZ2l0czogNiB9LAp9Cg=="}}),e._v(" "),a("h2",{attrs:{id:"utils"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#utils"}},[e._v("#")]),e._v(" Utils")]),e._v(" "),a("p",[e._v("Here you can find the definition for a "),a("code",[e._v("CoinMap")]),e._v(" like the one above, which will come in handy when defining it in your config file.")]),e._v(" "),a("p",[e._v("There are also several utility functions for working with errors and currencies. In this tutorial we'll only be using "),a("code",[e._v("nativeCoinToDisplay()")]),e._v(", which takes two parameters: a "),a("code",[e._v("@cosmjs/launchpad")]),e._v(" "),a("code",[e._v("Coin")]),e._v(" and a "),a("code",[e._v("CoinMap")]),e._v(".")]),e._v(" "),a("p",[e._v("It makes use of those parameters and the "),a("code",[e._v("Decimal")]),e._v(" class from "),a("code",[e._v("@cosmjs/math")]),e._v(" to return a "),a("code",[e._v("Coin")]),e._v(" with a more user friendly "),a("code",[e._v("amount")]),e._v(" field, that will be used for printing native coins in the balance checker.")]),e._v(" "),a("h2",{attrs:{id:"service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#service"}},[e._v("#")]),e._v(" Service")]),e._v(" "),a("p",[e._v("This resource offers several React context providers, some utility functions, and a "),a("code",[e._v("ProtectedSwitch")]),e._v(" React component.")]),e._v(" "),a("h3",{attrs:{id:"sdk-provider"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sdk-provider"}},[e._v("#")]),e._v(" Sdk provider")]),e._v(" "),a("p",[e._v("We'll be able to interact with this React context provider with the "),a("code",[e._v("useSdk")]),e._v(" hook, which will give us access to a "),a("code",[e._v("SigningCosmWasmClient")]),e._v(" in order to query the chain.")]),e._v(" "),a("h3",{attrs:{id:"account-provider"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#account-provider"}},[e._v("#")]),e._v(" Account provider")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("useAccount")]),e._v(" hook will expose this provider's state, which will be useful for getting the user address and balance.")]),e._v(" "),a("h3",{attrs:{id:"errorprovider"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#errorprovider"}},[e._v("#")]),e._v(" ErrorProvider")]),e._v(" "),a("p",[e._v("By making use of the "),a("code",[e._v("useError")]),e._v(" hook, we will be able to query and change the value of a global error.")]),e._v(" "),a("h3",{attrs:{id:"cw20"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cw20"}},[e._v("#")]),e._v(" CW20")]),e._v(" "),a("p",[e._v("This is a utility that will provide several methods for interacting with CW20 contracts. For the balance checker, we'll be querying the balance of a given CW20 contract token.")]),e._v(" "),a("h3",{attrs:{id:"protectedswitch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#protectedswitch"}},[e._v("#")]),e._v(" ProtectedSwitch")]),e._v(" "),a("p",[e._v("A wrapper around "),a("code",[e._v("react-router-dom")]),e._v(" "),a("code",[e._v("Switch")]),e._v(", that only allows the user to visit the routes inside if the user has finished the login process.")])],1)}),[],!1,null,null,null);t.default=i.exports}}]);