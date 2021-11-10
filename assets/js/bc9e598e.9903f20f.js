"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6983],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return f}});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),f=i,y=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return t?n.createElement(y,o(o({ref:r},u),{},{components:t})):n.createElement(y,o({ref:r},u))}));function f(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9523:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var n=t(7462),i=t(3366),a=(t(7294),t(3905)),o=["components"],l={},s=void 0,c={unversionedId:"api/tier/AlwaysTier",id:"version-v0.0.13/api/tier/AlwaysTier",isDocsHomePage:!1,title:"AlwaysTier",description:"AlwaysTier inherits from ReadOnlyTier.",source:"@site/versioned_docs/version-v0.0.13/api/tier/AlwaysTier.md",sourceDirName:"api/tier",slug:"/api/tier/AlwaysTier",permalink:"/rain-protocol/v0.0.13/api/tier/AlwaysTier",tags:[],version:"v0.0.13",frontMatter:{},sidebar:"version-v0.0.13/tutorialSidebar",previous:{title:"SeedERC20Factory",permalink:"/rain-protocol/v0.0.13/api/seed/SeedERC20Factory"},next:{title:"ERC20BalanceTier",permalink:"/rain-protocol/v0.0.13/api/tier/ERC20BalanceTier"}},u=[{value:"Details",id:"details",children:[]},{value:"Functions",id:"functions",children:[{value:"<code>report(address) \u2192 uint256</code> (public)",id:"reportaddress--uint256-public",children:[]}]}],p={toc:u};function d(e){var r=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"AlwaysTier")," inherits from ",(0,a.kt)("inlineCode",{parentName:"p"},"ReadOnlyTier"),"."),(0,a.kt)("p",null,"Always returns every tier, i.e. ",(0,a.kt)("inlineCode",{parentName:"p"},"0x00000000")," for every address and tier."),(0,a.kt)("h2",{id:"details"},"Details"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"AlwaysTier")," is intended as a primitive for combining tier contracts."),(0,a.kt)("p",null,"As the name implies:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AlwaysTier")," is ",(0,a.kt)("inlineCode",{parentName:"li"},"ReadOnlyTier")," and so can never call ",(0,a.kt)("inlineCode",{parentName:"li"},"setTier"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"report")," is always ",(0,a.kt)("inlineCode",{parentName:"li"},"0x00000000")," for every tier and every address.")),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"reportaddress--uint256-public"},(0,a.kt)("inlineCode",{parentName:"h3"},"report(address) \u2192 uint256")," (public)"),(0,a.kt)("p",null,"Every address is always every tier."),(0,a.kt)("p",null,"Returns the earliest block the account has held each tier for\ncontinuously.\nThis is encoded as a uint256 with blocks represented as 8x\nconcatenated uint32.\nI.e. Each 4 bytes of the uint256 represents a u32 tier start time.\nThe low bits represent low tiers and high bits the high tiers.\nImplementing contracts should return 0xFFFFFFFF for lost &\nnever-held tiers."))}d.isMDXComponent=!0}}]);