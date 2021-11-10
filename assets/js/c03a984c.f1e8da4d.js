"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5650],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(r),h=i,f=d["".concat(l,".").concat(h)]||d[h]||p[h]||a;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4547:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),o=["components"],c={},l=void 0,s={unversionedId:"api/tier/ERC20BalanceTier",id:"version-v0.0.10/api/tier/ERC20BalanceTier",isDocsHomePage:!1,title:"ERC20BalanceTier",description:"ERC20BalanceTier inherits from ReadOnlyTier.",source:"@site/versioned_docs/version-v0.0.10/api/tier/ERC20BalanceTier.md",sourceDirName:"api/tier",slug:"/api/tier/ERC20BalanceTier",permalink:"/rain-protocol/v0.0.10/api/tier/ERC20BalanceTier",tags:[],version:"v0.0.10",frontMatter:{},sidebar:"version-v0.0.10/tutorialSidebar",previous:{title:"AlwaysTier",permalink:"/rain-protocol/v0.0.10/api/tier/AlwaysTier"},next:{title:"ERC20TransferTier",permalink:"/rain-protocol/v0.0.10/api/tier/ERC20TransferTier"}},u=[{value:"Details",id:"details",children:[]},{value:"Variables",id:"variables",children:[{value:"<code>contract IERC20</code> <code>erc20</code>",id:"contract-ierc20-erc20",children:[]}]},{value:"Functions",id:"functions",children:[{value:"<code>constructor(contract IERC20 erc20_, uint256[8] tierValues_)</code> (public)",id:"constructorcontract-ierc20-erc20_-uint2568-tiervalues_-public",children:[]},{value:"<code>report(address account_) \u2192 uint256</code> (public)",id:"reportaddress-account_--uint256-public",children:[]}]}],p={toc:u};function d(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ERC20BalanceTier")," inherits from ",(0,a.kt)("inlineCode",{parentName:"p"},"ReadOnlyTier"),"."),(0,a.kt)("p",null,"There is no internal accounting, the balance tier simply reads the balance\nof the user whenever ",(0,a.kt)("inlineCode",{parentName:"p"},"report")," is called."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"setTier")," always fails."),(0,a.kt)("p",null,"There is no historical information so each tier will either be ",(0,a.kt)("inlineCode",{parentName:"p"},"0x00000000"),"\nor ",(0,a.kt)("inlineCode",{parentName:"p"},"0xFFFFFFFF")," for the block number."),(0,a.kt)("h2",{id:"details"},"Details"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ERC20BalanceTier")," simply checks the current balance of an erc20\nagainst tier values. As the current balance is always read from the erc20\ncontract directly there is no historical block data.\nAll tiers held at the current value will be 0x00000000 and tiers not held\nwill be 0xFFFFFFFF.\n",(0,a.kt)("inlineCode",{parentName:"p"},"setTier")," will error as this contract has no ability to write to the erc20\ncontract state."),(0,a.kt)("p",null,"Balance tiers are useful for:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Claim contracts that don't require backdated tier holding\n(be wary of griefing!)."),(0,a.kt)("li",{parentName:"ul"},"Assets that cannot be transferred, so are not eligible for\n",(0,a.kt)("inlineCode",{parentName:"li"},"ERC20TransferTier"),"."),(0,a.kt)("li",{parentName:"ul"},"Lightweight, realtime checks that encumber the tiered address\nas little as possible.")),(0,a.kt)("h2",{id:"variables"},"Variables"),(0,a.kt)("h3",{id:"contract-ierc20-erc20"},(0,a.kt)("inlineCode",{parentName:"h3"},"contract IERC20")," ",(0,a.kt)("inlineCode",{parentName:"h3"},"erc20")),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"constructorcontract-ierc20-erc20_-uint2568-tiervalues_-public"},(0,a.kt)("inlineCode",{parentName:"h3"},"constructor(contract IERC20 erc20_, uint256[8] tierValues_)")," (public)"),(0,a.kt)("h3",{id:"reportaddress-account_--uint256-public"},(0,a.kt)("inlineCode",{parentName:"h3"},"report(address account_) \u2192 uint256")," (public)"),(0,a.kt)("p",null,"Report simply truncates all tiers above the highest value held."),(0,a.kt)("p",null,"Returns the earliest block the account has held each tier for\ncontinuously.\nThis is encoded as a uint256 with blocks represented as 8x\nconcatenated uint32.\nI.e. Each 4 bytes of the uint256 represents a u32 tier start time.\nThe low bits represent low tiers and high bits the high tiers.\nImplementing contracts should return 0xFFFFFFFF for lost &\nnever-held tiers."))}d.isMDXComponent=!0}}]);