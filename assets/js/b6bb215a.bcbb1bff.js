"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4424],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(r),m=i,h=p["".concat(c,".").concat(m)]||p[m]||u[m]||a;return r?n.createElement(h,o(o({ref:t},l),{},{components:r})):n.createElement(h,o({ref:t},l))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var d=2;d<a;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},1272:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return l},default:function(){return p}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),o=["components"],s={},c=void 0,d={unversionedId:"api/tier/ReadWriteTier",id:"version-v0.0.12/api/tier/ReadWriteTier",isDocsHomePage:!1,title:"ReadWriteTier",description:"ReadWriteTier is a base contract that other contracts are",source:"@site/versioned_docs/version-v0.0.12/api/tier/ReadWriteTier.md",sourceDirName:"api/tier",slug:"/api/tier/ReadWriteTier",permalink:"/rain-protocol/v0.0.12/api/tier/ReadWriteTier",tags:[],version:"v0.0.12",frontMatter:{},sidebar:"version-v0.0.12/tutorialSidebar",previous:{title:"ReadOnlyTier",permalink:"/rain-protocol/v0.0.12/api/tier/ReadOnlyTier"},next:{title:"TierByConstruction",permalink:"/rain-protocol/v0.0.12/api/tier/TierByConstruction"}},l=[{value:"Details",id:"details",children:[]},{value:"Variables",id:"variables",children:[{value:"<code>mapping(address =&gt; uint256)</code> <code>reports</code>",id:"mappingaddress--uint256-reports",children:[]}]},{value:"Functions",id:"functions",children:[{value:"<code>report(address account_) \u2192 uint256</code> (public)",id:"reportaddress-account_--uint256-public",children:[]},{value:"<code>setTier(address account_, enum ITier.Tier endTier_, bytes data_)</code> (external)",id:"settieraddress-account_-enum-itiertier-endtier_-bytes-data_-external",children:[]},{value:"<code>_afterSetTier(address account_, enum ITier.Tier startTier_, enum ITier.Tier endTier_, bytes data_)</code> (internal)",id:"_aftersettieraddress-account_-enum-itiertier-starttier_-enum-itiertier-endtier_-bytes-data_-internal",children:[]}]}],u={toc:l};function p(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ReadWriteTier")," is a base contract that other contracts are\nexpected to inherit."),(0,a.kt)("p",null,"It handles all the internal accounting and state changes for ",(0,a.kt)("inlineCode",{parentName:"p"},"report"),"\nand ",(0,a.kt)("inlineCode",{parentName:"p"},"setTier"),"."),(0,a.kt)("p",null,"It calls an ",(0,a.kt)("inlineCode",{parentName:"p"},"_afterSetTier")," hook that inheriting contracts can override to\nenforce tier requirements."),(0,a.kt)("h2",{id:"details"},"Details"),(0,a.kt)("p",null,"ReadWriteTier can ",(0,a.kt)("inlineCode",{parentName:"p"},"setTier")," in addition to generating reports.\nWhen ",(0,a.kt)("inlineCode",{parentName:"p"},"setTier")," is called it automatically sets the current blocks in the\nreport for the new tiers. Lost tiers are scrubbed from the report as tiered\naddresses move down the tiers."),(0,a.kt)("h2",{id:"variables"},"Variables"),(0,a.kt)("h3",{id:"mappingaddress--uint256-reports"},(0,a.kt)("inlineCode",{parentName:"h3"},"mapping(address => uint256)")," ",(0,a.kt)("inlineCode",{parentName:"h3"},"reports")),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"reportaddress-account_--uint256-public"},(0,a.kt)("inlineCode",{parentName:"h3"},"report(address account_) \u2192 uint256")," (public)"),(0,a.kt)("p",null,"Either fetch the report from storage or return UNINITIALIZED."),(0,a.kt)("p",null,"Returns the earliest block the account has held each tier for\ncontinuously.\nThis is encoded as a uint256 with blocks represented as 8x\nconcatenated uint32.\nI.e. Each 4 bytes of the uint256 represents a u32 tier start time.\nThe low bits represent low tiers and high bits the high tiers.\nImplementing contracts should return 0xFFFFFFFF for lost &\nnever-held tiers."),(0,a.kt)("h3",{id:"settieraddress-account_-enum-itiertier-endtier_-bytes-data_-external"},(0,a.kt)("inlineCode",{parentName:"h3"},"setTier(address account_, enum ITier.Tier endTier_, bytes data_)")," (external)"),(0,a.kt)("p",null,"Errors if the user attempts to return to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Tier.ZERO")," tier.\nUpdates the report from ",(0,a.kt)("inlineCode",{parentName:"p"},"report")," using default ",(0,a.kt)("inlineCode",{parentName:"p"},"TierUtil")," logic.\nCalls ",(0,a.kt)("inlineCode",{parentName:"p"},"_afterSetTier")," that inheriting contracts SHOULD override to\nenforce status requirements.\nEmits ",(0,a.kt)("inlineCode",{parentName:"p"},"TierChange")," event."),(0,a.kt)("p",null,"Updates the tier of an account."),(0,a.kt)("p",null,"The implementing contract is responsible for all checks and state\nchanges required to set the tier. For example, taking/refunding\nfunds/NFTs etc."),(0,a.kt)("p",null,"Contracts may disallow directly setting tiers, preferring to derive\nreports from other onchain data.\nIn this case they should ",(0,a.kt)("inlineCode",{parentName:"p"},'revert("SET_TIER");'),"."),(0,a.kt)("h3",{id:"_aftersettieraddress-account_-enum-itiertier-starttier_-enum-itiertier-endtier_-bytes-data_-internal"},(0,a.kt)("inlineCode",{parentName:"h3"},"_afterSetTier(address account_, enum ITier.Tier startTier_, enum ITier.Tier endTier_, bytes data_)")," (internal)"),(0,a.kt)("p",null,"Inheriting contracts SHOULD override this to enforce requirements."),(0,a.kt)("p",null,"All the internal accounting and state changes are complete at\nthis point.\nUse ",(0,a.kt)("inlineCode",{parentName:"p"},"require")," to enforce additional requirements for tier changes."))}p.isMDXComponent=!0}}]);