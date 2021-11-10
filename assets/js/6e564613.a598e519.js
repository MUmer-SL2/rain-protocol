"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4957],{3905:function(e,n,o){o.d(n,{Zo:function(){return d},kt:function(){return f}});var t=o(7294);function r(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function i(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function a(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?i(Object(o),!0).forEach((function(n){r(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function c(e,n){if(null==e)return{};var o,t,r=function(e,n){if(null==e)return{};var o,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)o=i[t],n.indexOf(o)>=0||(r[o]=e[o]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)o=i[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=t.createContext({}),s=function(e){var n=t.useContext(l),o=n;return e&&(o="function"==typeof e?e(n):a(a({},n),e)),o},d=function(e){var n=s(e.components);return t.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var o=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=s(o),f=r,m=p["".concat(l,".").concat(f)]||p[f]||u[f]||i;return o?t.createElement(m,a(a({ref:n},d),{},{components:o})):t.createElement(m,a({ref:n},d))}));function f(e,n){var o=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=p;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=o[s];return t.createElement.apply(null,a)}return t.createElement.apply(null,o)}p.displayName="MDXCreateElement"},6466:function(e,n,o){o.r(n),o.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return d},default:function(){return p}});var t=o(7462),r=o(3366),i=(o(7294),o(3905)),a=["components"],c={},l=void 0,s={unversionedId:"api/cooldown/Cooldown",id:"version-v0.0.13/api/cooldown/Cooldown",isDocsHomePage:!1,title:"Cooldown",description:"Cooldown is an abstract contract that rate limits functions on",source:"@site/versioned_docs/version-v0.0.13/api/cooldown/Cooldown.md",sourceDirName:"api/cooldown",slug:"/api/cooldown/Cooldown",permalink:"/rain-protocol/v0.0.13/api/cooldown/Cooldown",tags:[],version:"v0.0.13",frontMatter:{},sidebar:"version-v0.0.13/tutorialSidebar",previous:{title:"TierByConstructionClaim",permalink:"/rain-protocol/v0.0.13/api/claim/TierByConstructionClaim"},next:{title:"Factory",permalink:"/rain-protocol/v0.0.13/api/factory/Factory"}},d=[{value:"Details",id:"details",children:[]},{value:"Variables",id:"variables",children:[{value:"<code>uint16</code> <code>cooldownDuration</code>",id:"uint16-cooldownduration",children:[]},{value:"<code>mapping(address =&gt; uint256)</code> <code>cooldowns</code>",id:"mappingaddress--uint256-cooldowns",children:[]}]},{value:"Modifiers",id:"modifiers",children:[{value:"<code>onlyAfterCooldown()</code>",id:"onlyaftercooldown",children:[]}]},{value:"Functions",id:"functions",children:[{value:"<code>constructor(uint16 cooldownDuration_)</code> (public)",id:"constructoruint16-cooldownduration_-public",children:[]}]}],u={toc:d};function p(e){var n=e.components,o=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,t.Z)({},u,o,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Cooldown")," is an abstract contract that rate limits functions on\nthe contract per ",(0,i.kt)("inlineCode",{parentName:"p"},"msg.sender"),"."),(0,i.kt)("p",null,"Each time a function with the ",(0,i.kt)("inlineCode",{parentName:"p"},"onlyAfterCooldown")," modifier is called the\n",(0,i.kt)("inlineCode",{parentName:"p"},"msg.sender")," must wait N blocks before calling any modified function."),(0,i.kt)("p",null,"This does nothing to prevent sybils who can generate an arbitrary number of\n",(0,i.kt)("inlineCode",{parentName:"p"},"msg.sender")," values in parallel to spam a contract."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Cooldown")," is intended to prevent rapid state cycling to grief a contract,\nsuch as rapidly locking and unlocking a large amount of capital in the\n",(0,i.kt)("inlineCode",{parentName:"p"},"SeedERC20")," contract."),(0,i.kt)("p",null,"Requiring a lock/deposit of significant economic stake that sybils will not\nhave access to AND applying a cooldown IS a sybil mitigation. The economic\nstake alone is NOT sufficient if gas is cheap as sybils can cycle the same\nstake between each other. The cooldown alone is NOT sufficient as many\nsybils can be created, each as a new ",(0,i.kt)("inlineCode",{parentName:"p"},"msg.sender"),"."),(0,i.kt)("h2",{id:"details"},"Details"),(0,i.kt)("p",null,"Base for anything that enforces a cooldown delay on functions.\nCooldown requires a minimum time in blocks to elapse between actions that\ncooldown. The modifier ",(0,i.kt)("inlineCode",{parentName:"p"},"onlyAfterCooldown")," both enforces and triggers the\ncooldown. There is a single cooldown across all functions per-contract\nso any function call that requires a cooldown will also trigger it for\nall other functions."),(0,i.kt)("p",null,"Cooldown is NOT an effective sybil resistance alone, as the cooldown is\nper-address only. It is always possible for many accounts to be created\nto spam a contract with dust in parallel.\nCooldown is useful to stop a single account rapidly cycling contract\nstate in a way that can be disruptive to peers. Cooldown works best when\ncoupled with economic stake associated with each state change so that\npeers must lock capital during the cooldown. Cooldown tracks the first\n",(0,i.kt)("inlineCode",{parentName:"p"},"msg.sender")," it sees for a call stack so cooldowns are enforced across\nreentrant code."),(0,i.kt)("h2",{id:"variables"},"Variables"),(0,i.kt)("h3",{id:"uint16-cooldownduration"},(0,i.kt)("inlineCode",{parentName:"h3"},"uint16")," ",(0,i.kt)("inlineCode",{parentName:"h3"},"cooldownDuration")),(0,i.kt)("h3",{id:"mappingaddress--uint256-cooldowns"},(0,i.kt)("inlineCode",{parentName:"h3"},"mapping(address => uint256)")," ",(0,i.kt)("inlineCode",{parentName:"h3"},"cooldowns")),(0,i.kt)("h2",{id:"modifiers"},"Modifiers"),(0,i.kt)("h3",{id:"onlyaftercooldown"},(0,i.kt)("inlineCode",{parentName:"h3"},"onlyAfterCooldown()")),(0,i.kt)("p",null,"Modifies a function to enforce the cooldown for ",(0,i.kt)("inlineCode",{parentName:"p"},"msg.sender"),".\nSaves the original caller so that cooldowns are enforced across\nreentrant code."),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"constructoruint16-cooldownduration_-public"},(0,i.kt)("inlineCode",{parentName:"h3"},"constructor(uint16 cooldownDuration_)")," (public)"),(0,i.kt)("p",null,"The cooldown duration is global to the contract.\nCooldown duration must be greater than 0."))}p.isMDXComponent=!0}}]);