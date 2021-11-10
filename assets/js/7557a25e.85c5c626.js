"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7434],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=i,y=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(y,o(o({ref:t},u),{},{components:r})):n.createElement(y,o({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},992:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),o=["components"],l={},s=void 0,c={unversionedId:"api/tier/AlwaysTier",id:"api/tier/AlwaysTier",isDocsHomePage:!1,title:"AlwaysTier",description:"AlwaysTier inherits from ReadOnlyTier.",source:"@site/../docs/api/tier/AlwaysTier.md",sourceDirName:"api/tier",slug:"/api/tier/AlwaysTier",permalink:"/rain-protocol/next/api/tier/AlwaysTier",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SeedERC20Factory",permalink:"/rain-protocol/next/api/seed/SeedERC20Factory"},next:{title:"ERC20BalanceTier",permalink:"/rain-protocol/next/api/tier/ERC20BalanceTier"}},u=[{value:"Details",id:"details",children:[]},{value:"Functions",id:"functions",children:[{value:"<code>report(address) \u2192 uint256</code> (public)",id:"reportaddress--uint256-public",children:[]}]}],p={toc:u};function d(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"AlwaysTier")," inherits from ",(0,a.kt)("inlineCode",{parentName:"p"},"ReadOnlyTier"),"."),(0,a.kt)("p",null,"Always returns every tier, i.e. ",(0,a.kt)("inlineCode",{parentName:"p"},"0x00000000")," for every address and tier."),(0,a.kt)("h2",{id:"details"},"Details"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"AlwaysTier")," is intended as a primitive for combining tier contracts."),(0,a.kt)("p",null,"As the name implies:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AlwaysTier")," is ",(0,a.kt)("inlineCode",{parentName:"li"},"ReadOnlyTier")," and so can never call ",(0,a.kt)("inlineCode",{parentName:"li"},"setTier"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"report")," is always ",(0,a.kt)("inlineCode",{parentName:"li"},"0x00000000")," for every tier and every address.")),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"reportaddress--uint256-public"},(0,a.kt)("inlineCode",{parentName:"h3"},"report(address) \u2192 uint256")," (public)"),(0,a.kt)("p",null,"Every address is always every tier."),(0,a.kt)("p",null,"Returns the earliest block the account has held each tier for\ncontinuously.\nThis is encoded as a uint256 with blocks represented as 8x\nconcatenated uint32.\nI.e. Each 4 bytes of the uint256 represents a u32 tier start time.\nThe low bits represent low tiers and high bits the high tiers.\nImplementing contracts should return 0xFFFFFFFF for lost &\nnever-held tiers."))}d.isMDXComponent=!0}}]);