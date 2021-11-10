"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4523],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return f}});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=n.createContext({}),u=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},s=function(e){var r=u(e.components);return n.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(t),f=i,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||o;return t?n.createElement(m,a(a({ref:r},s),{},{components:t})):n.createElement(m,a({ref:r},s))}));function f(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=t[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3688:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var n=t(7462),i=t(3366),o=(t(7294),t(3905)),a=["components"],l={},c=void 0,u={unversionedId:"api/tier/NeverTier",id:"version-v0.0.14/api/tier/NeverTier",isDocsHomePage:!1,title:"NeverTier",description:"NeverTier inherits from ReadOnlyTier.",source:"@site/versioned_docs/version-v0.0.14/api/tier/NeverTier.md",sourceDirName:"api/tier",slug:"/api/tier/NeverTier",permalink:"/rain-protocol/api/tier/NeverTier",tags:[],version:"v0.0.14",frontMatter:{},sidebar:"version-v0.0.14/tutorialSidebar",previous:{title:"ITier",permalink:"/rain-protocol/api/tier/ITier"},next:{title:"ReadOnlyTier",permalink:"/rain-protocol/api/tier/ReadOnlyTier"}},s=[{value:"Details",id:"details",children:[]},{value:"Functions",id:"functions",children:[{value:"<code>report(address) \u2192 uint256</code> (public)",id:"reportaddress--uint256-public",children:[]}]}],p={toc:s};function d(e){var r=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"NeverTier")," inherits from ",(0,o.kt)("inlineCode",{parentName:"p"},"ReadOnlyTier"),"."),(0,o.kt)("p",null,"Never returns any tier, i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"0xFFFFFFFF")," for every address and tier."),(0,o.kt)("h2",{id:"details"},"Details"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"NeverTier")," is intended as a primitive for combining tier contracts."),(0,o.kt)("p",null,"As the name implies:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"NeverTier")," is ",(0,o.kt)("inlineCode",{parentName:"li"},"ReadOnlyTier")," and so can never call ",(0,o.kt)("inlineCode",{parentName:"li"},"setTier"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"report")," is always ",(0,o.kt)("inlineCode",{parentName:"li"},"uint256(-1)")," as every tier is unobtainable.")),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("h3",{id:"reportaddress--uint256-public"},(0,o.kt)("inlineCode",{parentName:"h3"},"report(address) \u2192 uint256")," (public)"),(0,o.kt)("p",null,"Every tier in the report is unobtainable."),(0,o.kt)("p",null,"Returns the earliest block the account has held each tier for\ncontinuously.\nThis is encoded as a uint256 with blocks represented as 8x\nconcatenated uint32.\nI.e. Each 4 bytes of the uint256 represents a u32 tier start time.\nThe low bits represent low tiers and high bits the high tiers.\nImplementing contracts should return 0xFFFFFFFF for lost &\nnever-held tiers."))}d.isMDXComponent=!0}}]);