"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5387],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=i,h=d["".concat(u,".").concat(m)]||d[m]||s[m]||a;return r?n.createElement(h,o(o({ref:t},p),{},{components:r})):n.createElement(h,o({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1802:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),o=["components"],l={},u=void 0,c={unversionedId:"api/libraries/TierUtil",id:"version-v0.0.10/api/libraries/TierUtil",isDocsHomePage:!1,title:"TierUtil",description:"TierUtil implements several pure functions that can be",source:"@site/versioned_docs/version-v0.0.10/api/libraries/TierUtil.md",sourceDirName:"api/libraries",slug:"/api/libraries/TierUtil",permalink:"/rain-protocol/v0.0.10/api/libraries/TierUtil",tags:[],version:"v0.0.10",frontMatter:{},sidebar:"version-v0.0.10/tutorialSidebar",previous:{title:"IFactory",permalink:"/rain-protocol/v0.0.10/api/factory/IFactory"},next:{title:"Phased",permalink:"/rain-protocol/v0.0.10/api/phased/Phased"}},p=[{value:"Details",id:"details",children:[]},{value:"Variables",id:"variables",children:[{value:"<code>uint256</code> <code>UNINITIALIZED</code>",id:"uint256-uninitialized",children:[]}]},{value:"Functions",id:"functions",children:[{value:"<code>tierAtBlockFromReport(uint256 report_, uint256 blockNumber_) \u2192 enum ITier.Tier</code> (internal)",id:"tieratblockfromreportuint256-report_-uint256-blocknumber_--enum-itiertier-internal",children:[]},{value:"<code>tierBlock(uint256 report_, enum ITier.Tier tier_) \u2192 uint256</code> (internal)",id:"tierblockuint256-report_-enum-itiertier-tier_--uint256-internal",children:[]},{value:"<code>truncateTiersAbove(uint256 report_, enum ITier.Tier tier_) \u2192 uint256</code> (internal)",id:"truncatetiersaboveuint256-report_-enum-itiertier-tier_--uint256-internal",children:[]},{value:"<code>updateBlocksForTierRange(uint256 report_, enum ITier.Tier startTier_, enum ITier.Tier endTier_, uint256 blockNumber_) \u2192 uint256</code> (internal)",id:"updateblocksfortierrangeuint256-report_-enum-itiertier-starttier_-enum-itiertier-endtier_-uint256-blocknumber_--uint256-internal",children:[]},{value:"<code>updateReportWithTierAtBlock(uint256 report_, enum ITier.Tier startTier_, enum ITier.Tier endTier_, uint256 blockNumber_) \u2192 uint256</code> (internal)",id:"updatereportwithtieratblockuint256-report_-enum-itiertier-starttier_-enum-itiertier-endtier_-uint256-blocknumber_--uint256-internal",children:[]}]}],s={toc:p};function d(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"TierUtil")," implements several pure functions that can be\nused to interface with reports."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"tierAtBlockFromReport"),": Returns the highest status achieved relative to\na block number and report. Statuses gained after that block are ignored."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"tierBlock"),": Returns the block that a given tier has been held\nsince according to a report."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"truncateTiersAbove"),": Resets all the tiers above the reference tier."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"updateBlocksForTierRange"),": Updates a report with a block\nnumber for every tier in a range."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"updateReportWithTierAtBlock"),": Updates a report to a new tier.")),(0,a.kt)("h2",{id:"details"},"Details"),(0,a.kt)("p",null,"Utilities to consistently read, write and manipulate tiers in reports.\nThe low-level bit shifting can be difficult to get right so this factors\nthat out."),(0,a.kt)("h2",{id:"variables"},"Variables"),(0,a.kt)("h3",{id:"uint256-uninitialized"},(0,a.kt)("inlineCode",{parentName:"h3"},"uint256")," ",(0,a.kt)("inlineCode",{parentName:"h3"},"UNINITIALIZED")),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"tieratblockfromreportuint256-report_-uint256-blocknumber_--enum-itiertier-internal"},(0,a.kt)("inlineCode",{parentName:"h3"},"tierAtBlockFromReport(uint256 report_, uint256 blockNumber_) \u2192 enum ITier.Tier")," (internal)"),(0,a.kt)("p",null,"Returns the highest tier achieved relative to a block number\nand report."),(0,a.kt)("p",null,"Note that typically the report will be from the ",(0,a.kt)("em",{parentName:"p"},"current")," contract\nstate, i.e. ",(0,a.kt)("inlineCode",{parentName:"p"},"block.number")," but not always. Tiers gained after the\nreference block are ignored."),(0,a.kt)("p",null,"When the ",(0,a.kt)("inlineCode",{parentName:"p"},"report")," comes from a later block than the ",(0,a.kt)("inlineCode",{parentName:"p"},"blockNumber")," this\nmeans the user must have held the tier continuously from ",(0,a.kt)("inlineCode",{parentName:"p"},"blockNumber"),"\n",(0,a.kt)("em",{parentName:"p"},"through")," to the report block.\nI.e. NOT a snapshot."),(0,a.kt)("h3",{id:"tierblockuint256-report_-enum-itiertier-tier_--uint256-internal"},(0,a.kt)("inlineCode",{parentName:"h3"},"tierBlock(uint256 report_, enum ITier.Tier tier_) \u2192 uint256")," (internal)"),(0,a.kt)("p",null,"Returns the block that a given tier has been held since from a report."),(0,a.kt)("p",null,'The report MUST encode "never" as 0xFFFFFFFF. This ensures\ncompatibility with ',(0,a.kt)("inlineCode",{parentName:"p"},"tierAtBlockFromReport"),"."),(0,a.kt)("h3",{id:"truncatetiersaboveuint256-report_-enum-itiertier-tier_--uint256-internal"},(0,a.kt)("inlineCode",{parentName:"h3"},"truncateTiersAbove(uint256 report_, enum ITier.Tier tier_) \u2192 uint256")," (internal)"),(0,a.kt)("p",null,"Resets all the tiers above the reference tier to 0xFFFFFFFF."),(0,a.kt)("h3",{id:"updateblocksfortierrangeuint256-report_-enum-itiertier-starttier_-enum-itiertier-endtier_-uint256-blocknumber_--uint256-internal"},(0,a.kt)("inlineCode",{parentName:"h3"},"updateBlocksForTierRange(uint256 report_, enum ITier.Tier startTier_, enum ITier.Tier endTier_, uint256 blockNumber_) \u2192 uint256")," (internal)"),(0,a.kt)("p",null,"Updates a report with a block number for every status integer in a\nrange."),(0,a.kt)("p",null,"Does nothing if the end status is equal or less than the start status."),(0,a.kt)("h3",{id:"updatereportwithtieratblockuint256-report_-enum-itiertier-starttier_-enum-itiertier-endtier_-uint256-blocknumber_--uint256-internal"},(0,a.kt)("inlineCode",{parentName:"h3"},"updateReportWithTierAtBlock(uint256 report_, enum ITier.Tier startTier_, enum ITier.Tier endTier_, uint256 blockNumber_) \u2192 uint256")," (internal)"),(0,a.kt)("p",null,"Updates a report to a new status."),(0,a.kt)("p",null,"Internally dispatches to ",(0,a.kt)("inlineCode",{parentName:"p"},"truncateTiersAbove")," and\n",(0,a.kt)("inlineCode",{parentName:"p"},"updateBlocksForTierRange"),".\nThe dispatch is based on whether the new tier is above or below the\ncurrent tier.\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},"startTier_")," MUST match the result of ",(0,a.kt)("inlineCode",{parentName:"p"},"tierAtBlockFromReport"),".\nIt is expected the caller will know the current tier when\ncalling this function and need to do other things in the calling scope\nwith it."))}d.isMDXComponent=!0}}]);