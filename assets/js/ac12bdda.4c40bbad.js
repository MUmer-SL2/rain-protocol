"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[704],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},d=Object.keys(e);for(r=0;r<d.length;r++)n=d[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(r=0;r<d.length;r++)n=d[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,d=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,v=p["".concat(c,".").concat(m)]||p[m]||l[m]||d;return n?r.createElement(v,i(i({ref:t},u),{},{components:n})):r.createElement(v,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var d=n.length,i=new Array(d);i[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<d;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8765:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var r=n(7462),a=n(3366),d=(n(7294),n(3905)),i=["components"],o={},c=void 0,s={unversionedId:"api/verify/Verify",id:"version-v0.0.11/api/verify/Verify",isDocsHomePage:!1,title:"Verify",description:"Variables",source:"@site/versioned_docs/version-v0.0.11/api/verify/Verify.md",sourceDirName:"api/verify",slug:"/api/verify/Verify",permalink:"/rain-protocol/v0.0.11/api/verify/Verify",tags:[],version:"v0.0.11",frontMatter:{},sidebar:"version-v0.0.11/tutorialSidebar",previous:{title:"TrustFactory",permalink:"/rain-protocol/v0.0.11/api/trust/TrustFactory"},next:{title:"VerifyFactory",permalink:"/rain-protocol/v0.0.11/api/verify/VerifyFactory"}},u=[{value:"Variables",id:"variables",children:[{value:"<code>uint32</code> <code>UNINITIALIZED</code>",id:"uint32-uninitialized",children:[]},{value:"<code>bytes32</code> <code>APPROVER_ADMIN</code>",id:"bytes32-approver_admin",children:[]},{value:"<code>bytes32</code> <code>APPROVER</code>",id:"bytes32-approver",children:[]},{value:"<code>bytes32</code> <code>REMOVER_ADMIN</code>",id:"bytes32-remover_admin",children:[]},{value:"<code>bytes32</code> <code>REMOVER</code>",id:"bytes32-remover",children:[]},{value:"<code>bytes32</code> <code>BANNER_ADMIN</code>",id:"bytes32-banner_admin",children:[]},{value:"<code>bytes32</code> <code>BANNER</code>",id:"bytes32-banner",children:[]},{value:"<code>mapping(address =&gt; struct State)</code> <code>states</code>",id:"mappingaddress--struct-state-states",children:[]}]},{value:"Events",id:"events",children:[{value:"<code>Add(address account, uint256 id)</code>",id:"addaddress-account-uint256-id",children:[]},{value:"<code>Approve(address account)</code>",id:"approveaddress-account",children:[]},{value:"<code>Ban(address account)</code>",id:"banaddress-account",children:[]},{value:"<code>Remove(address account)</code>",id:"removeaddress-account",children:[]}]},{value:"Functions",id:"functions",children:[{value:"<code>constructor(address admin_)</code> (public)",id:"constructoraddress-admin_-public",children:[]},{value:"<code>state(address account_) \u2192 struct State</code> (external)",id:"stateaddress-account_--struct-state-external",children:[]},{value:"<code>statusAtBlock(struct State state_, uint32 blockNumber) \u2192 enum Status</code> (external)",id:"statusatblockstruct-state-state_-uint32-blocknumber--enum-status-external",children:[]},{value:"<code>add(uint256 id_)</code> (external)",id:"adduint256-id_-external",children:[]},{value:"<code>remove(address account_)</code> (external)",id:"removeaddress-account_-external",children:[]},{value:"<code>approve(address account_)</code> (external)",id:"approveaddress-account_-external",children:[]},{value:"<code>ban(address account_)</code> (external)",id:"banaddress-account_-external",children:[]}]}],l={toc:u};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,d.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,d.kt)("h2",{id:"variables"},"Variables"),(0,d.kt)("h3",{id:"uint32-uninitialized"},(0,d.kt)("inlineCode",{parentName:"h3"},"uint32")," ",(0,d.kt)("inlineCode",{parentName:"h3"},"UNINITIALIZED")),(0,d.kt)("h3",{id:"bytes32-approver_admin"},(0,d.kt)("inlineCode",{parentName:"h3"},"bytes32")," ",(0,d.kt)("inlineCode",{parentName:"h3"},"APPROVER_ADMIN")),(0,d.kt)("h3",{id:"bytes32-approver"},(0,d.kt)("inlineCode",{parentName:"h3"},"bytes32")," ",(0,d.kt)("inlineCode",{parentName:"h3"},"APPROVER")),(0,d.kt)("h3",{id:"bytes32-remover_admin"},(0,d.kt)("inlineCode",{parentName:"h3"},"bytes32")," ",(0,d.kt)("inlineCode",{parentName:"h3"},"REMOVER_ADMIN")),(0,d.kt)("h3",{id:"bytes32-remover"},(0,d.kt)("inlineCode",{parentName:"h3"},"bytes32")," ",(0,d.kt)("inlineCode",{parentName:"h3"},"REMOVER")),(0,d.kt)("h3",{id:"bytes32-banner_admin"},(0,d.kt)("inlineCode",{parentName:"h3"},"bytes32")," ",(0,d.kt)("inlineCode",{parentName:"h3"},"BANNER_ADMIN")),(0,d.kt)("h3",{id:"bytes32-banner"},(0,d.kt)("inlineCode",{parentName:"h3"},"bytes32")," ",(0,d.kt)("inlineCode",{parentName:"h3"},"BANNER")),(0,d.kt)("h3",{id:"mappingaddress--struct-state-states"},(0,d.kt)("inlineCode",{parentName:"h3"},"mapping(address => struct State)")," ",(0,d.kt)("inlineCode",{parentName:"h3"},"states")),(0,d.kt)("h2",{id:"events"},"Events"),(0,d.kt)("h3",{id:"addaddress-account-uint256-id"},(0,d.kt)("inlineCode",{parentName:"h3"},"Add(address account, uint256 id)")),(0,d.kt)("p",null,"Emitted when a session ID is first associated with an account."),(0,d.kt)("h3",{id:"approveaddress-account"},(0,d.kt)("inlineCode",{parentName:"h3"},"Approve(address account)")),(0,d.kt)("p",null,"Emitted when a previously added account is approved."),(0,d.kt)("h3",{id:"banaddress-account"},(0,d.kt)("inlineCode",{parentName:"h3"},"Ban(address account)")),(0,d.kt)("p",null,"Emitted when an added or approved account is banned."),(0,d.kt)("h3",{id:"removeaddress-account"},(0,d.kt)("inlineCode",{parentName:"h3"},"Remove(address account)")),(0,d.kt)("p",null,"Emitted when an account is scrubbed from blockchain state."),(0,d.kt)("h2",{id:"functions"},"Functions"),(0,d.kt)("h3",{id:"constructoraddress-admin_-public"},(0,d.kt)("inlineCode",{parentName:"h3"},"constructor(address admin_)")," (public)"),(0,d.kt)("p",null,"Defines RBAC logic for each role under Open Zeppelin."),(0,d.kt)("h3",{id:"stateaddress-account_--struct-state-external"},(0,d.kt)("inlineCode",{parentName:"h3"},"state(address account_) \u2192 struct State")," (external)"),(0,d.kt)("p",null,"/ Typed accessor into states."),(0,d.kt)("h3",{id:"statusatblockstruct-state-state_-uint32-blocknumber--enum-status-external"},(0,d.kt)("inlineCode",{parentName:"h3"},"statusAtBlock(struct State state_, uint32 blockNumber) \u2192 enum Status")," (external)"),(0,d.kt)("p",null,"/ Derives a single ",(0,d.kt)("inlineCode",{parentName:"p"},"Status")," from a ",(0,d.kt)("inlineCode",{parentName:"p"},"State")," and a reference block number."),(0,d.kt)("h3",{id:"adduint256-id_-external"},(0,d.kt)("inlineCode",{parentName:"h3"},"add(uint256 id_)")," (external)"),(0,d.kt)("h3",{id:"removeaddress-account_-external"},(0,d.kt)("inlineCode",{parentName:"h3"},"remove(address account_)")," (external)"),(0,d.kt)("h3",{id:"approveaddress-account_-external"},(0,d.kt)("inlineCode",{parentName:"h3"},"approve(address account_)")," (external)"),(0,d.kt)("h3",{id:"banaddress-account_-external"},(0,d.kt)("inlineCode",{parentName:"h3"},"ban(address account_)")," (external)"))}p.isMDXComponent=!0}}]);