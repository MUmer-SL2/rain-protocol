"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7598],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(r),f=i,y=d["".concat(l,".").concat(f)]||d[f]||s[f]||o;return r?n.createElement(y,a(a({ref:t},p),{},{components:r})):n.createElement(y,a({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1585:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),a=["components"],c={},l=void 0,u={unversionedId:"api/tier/VerifyTier",id:"version-v0.0.13/api/tier/VerifyTier",isDocsHomePage:!1,title:"VerifyTier",description:"Details",source:"@site/versioned_docs/version-v0.0.13/api/tier/VerifyTier.md",sourceDirName:"api/tier",slug:"/api/tier/VerifyTier",permalink:"/rain-protocol/v0.0.13/api/tier/VerifyTier",tags:[],version:"v0.0.13",frontMatter:{},sidebar:"version-v0.0.13/tutorialSidebar",previous:{title:"ValueTier",permalink:"/rain-protocol/v0.0.13/api/tier/ValueTier"},next:{title:"Trust",permalink:"/rain-protocol/v0.0.13/api/trust/Trust"}},p=[{value:"Details",id:"details",children:[]},{value:"Variables",id:"variables",children:[{value:"<code>contract Verify</code> <code>verify</code>",id:"contract-verify-verify",children:[]}]},{value:"Functions",id:"functions",children:[{value:"<code>constructor(contract Verify verify_)</code> (public)",id:"constructorcontract-verify-verify_-public",children:[]},{value:"<code>report(address account_) \u2192 uint256</code> (public)",id:"reportaddress-account_--uint256-public",children:[]}]}],s={toc:p};function d(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"details"},"Details"),(0,o.kt)("p",null,"A contract that is ",(0,o.kt)("inlineCode",{parentName:"p"},"VerifyTier")," expects to derive tiers from the time\nthe account was approved by the underlying ",(0,o.kt)("inlineCode",{parentName:"p"},"Verify")," contract. The approval\nblock numbers defer to ",(0,o.kt)("inlineCode",{parentName:"p"},"State.since")," returned from ",(0,o.kt)("inlineCode",{parentName:"p"},"Verify.state"),"."),(0,o.kt)("h2",{id:"variables"},"Variables"),(0,o.kt)("h3",{id:"contract-verify-verify"},(0,o.kt)("inlineCode",{parentName:"h3"},"contract Verify")," ",(0,o.kt)("inlineCode",{parentName:"h3"},"verify")),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("h3",{id:"constructorcontract-verify-verify_-public"},(0,o.kt)("inlineCode",{parentName:"h3"},"constructor(contract Verify verify_)")," (public)"),(0,o.kt)("p",null,"Sets the ",(0,o.kt)("inlineCode",{parentName:"p"},"verify")," contract immutably."),(0,o.kt)("h3",{id:"reportaddress-account_--uint256-public"},(0,o.kt)("inlineCode",{parentName:"h3"},"report(address account_) \u2192 uint256")," (public)"),(0,o.kt)("p",null,"Every tier will be the ",(0,o.kt)("inlineCode",{parentName:"p"},"State.since")," block if ",(0,o.kt)("inlineCode",{parentName:"p"},"account_")," is approved\notherwise every tier will be uninitialized."),(0,o.kt)("p",null,"Returns the earliest block the account has held each tier for\ncontinuously.\nThis is encoded as a uint256 with blocks represented as 8x\nconcatenated uint32.\nI.e. Each 4 bytes of the uint256 represents a u32 tier start time.\nThe low bits represent low tiers and high bits the high tiers.\nImplementing contracts should return 0xFFFFFFFF for lost &\nnever-held tiers."))}d.isMDXComponent=!0}}]);