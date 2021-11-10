"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2967],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=c(r),m=i,v=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(v,o(o({ref:t},s),{},{components:r})):n.createElement(v,o({ref:t},s))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:i,o[1]=u;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},484:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),o=["components"],u={},l=void 0,c={unversionedId:"api/tier/ValueTier",id:"version-v0.0.13/api/tier/ValueTier",isDocsHomePage:!1,title:"ValueTier",description:"Details",source:"@site/versioned_docs/version-v0.0.13/api/tier/ValueTier.md",sourceDirName:"api/tier",slug:"/api/tier/ValueTier",permalink:"/rain-protocol/v0.0.13/api/tier/ValueTier",tags:[],version:"v0.0.13",frontMatter:{},sidebar:"version-v0.0.13/tutorialSidebar",previous:{title:"TierByConstruction",permalink:"/rain-protocol/v0.0.13/api/tier/TierByConstruction"},next:{title:"VerifyTier",permalink:"/rain-protocol/v0.0.13/api/tier/VerifyTier"}},s=[{value:"Details",id:"details",children:[]},{value:"Functions",id:"functions",children:[{value:"<code>constructor(uint256[8] tierValues_)</code> (public)",id:"constructoruint2568-tiervalues_-public",children:[]},{value:"<code>tierValues() \u2192 uint256[8] tierValues_</code> (public)",id:"tiervalues--uint2568-tiervalues_-public",children:[]},{value:"<code>tierToValue(enum ITier.Tier tier_) \u2192 uint256</code> (internal)",id:"tiertovalueenum-itiertier-tier_--uint256-internal",children:[]},{value:"<code>valueToTier(uint256 value_) \u2192 enum ITier.Tier</code> (internal)",id:"valuetotieruint256-value_--enum-itiertier-internal",children:[]}]}],p={toc:s};function d(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"details"},"Details"),(0,a.kt)("p",null,"A contract that is ",(0,a.kt)("inlineCode",{parentName:"p"},"ValueTier")," expects to derive tiers from explicit\nvalues. For example an address must send or hold an amount of something to\nreach a given tier.\nAnything with predefined values that map to tiers can be a ",(0,a.kt)("inlineCode",{parentName:"p"},"ValueTier"),"."),(0,a.kt)("p",null,"Note that ",(0,a.kt)("inlineCode",{parentName:"p"},"ValueTier")," does NOT implement ",(0,a.kt)("inlineCode",{parentName:"p"},"ITier"),".\n",(0,a.kt)("inlineCode",{parentName:"p"},"ValueTier")," does include state however, to track the ",(0,a.kt)("inlineCode",{parentName:"p"},"tierValues")," so is not\na library."),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"constructoruint2568-tiervalues_-public"},(0,a.kt)("inlineCode",{parentName:"h3"},"constructor(uint256[8] tierValues_)")," (public)"),(0,a.kt)("p",null,"Set the ",(0,a.kt)("inlineCode",{parentName:"p"},"tierValues")," on construction to be referenced immutably."),(0,a.kt)("h3",{id:"tiervalues--uint2568-tiervalues_-public"},(0,a.kt)("inlineCode",{parentName:"h3"},"tierValues() \u2192 uint256[8] tierValues_")," (public)"),(0,a.kt)("p",null,"Complements the default solidity accessor for ",(0,a.kt)("inlineCode",{parentName:"p"},"tierValues"),".\nReturns all the values in a list rather than requiring an index be\nspecified."),(0,a.kt)("h3",{id:"tiertovalueenum-itiertier-tier_--uint256-internal"},(0,a.kt)("inlineCode",{parentName:"h3"},"tierToValue(enum ITier.Tier tier_) \u2192 uint256")," (internal)"),(0,a.kt)("p",null,"Converts a Tier to the minimum value it requires.\n",(0,a.kt)("inlineCode",{parentName:"p"},"Tier.ZERO")," is always value 0 as it is the fallback."),(0,a.kt)("h3",{id:"valuetotieruint256-value_--enum-itiertier-internal"},(0,a.kt)("inlineCode",{parentName:"h3"},"valueToTier(uint256 value_) \u2192 enum ITier.Tier")," (internal)"),(0,a.kt)("p",null,"Converts a value to the maximum Tier it qualifies for."))}d.isMDXComponent=!0}}]);