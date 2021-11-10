"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6464],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),m=i,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(h,a(a({ref:t},u),{},{components:n})):r.createElement(h,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7602:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],c={},s=void 0,l={unversionedId:"api/tier/TierByConstruction",id:"version-v0.0.12/api/tier/TierByConstruction",isDocsHomePage:!1,title:"TierByConstruction",description:"TierByConstruction is a base contract for other",source:"@site/versioned_docs/version-v0.0.12/api/tier/TierByConstruction.md",sourceDirName:"api/tier",slug:"/api/tier/TierByConstruction",permalink:"/rain-protocol/v0.0.12/api/tier/TierByConstruction",tags:[],version:"v0.0.12",frontMatter:{},sidebar:"version-v0.0.12/tutorialSidebar",previous:{title:"ReadWriteTier",permalink:"/rain-protocol/v0.0.12/api/tier/ReadWriteTier"},next:{title:"ValueTier",permalink:"/rain-protocol/v0.0.12/api/tier/ValueTier"}},u=[{value:"Details",id:"details",children:[]},{value:"Variables",id:"variables",children:[{value:"<code>contract ITier</code> <code>tierContract</code>",id:"contract-itier-tiercontract",children:[]},{value:"<code>uint256</code> <code>constructionBlock</code>",id:"uint256-constructionblock",children:[]}]},{value:"Modifiers",id:"modifiers",children:[{value:"<code>onlyTier(address account_, enum ITier.Tier minimumTier_)</code>",id:"onlytieraddress-account_-enum-itiertier-minimumtier_",children:[]}]},{value:"Functions",id:"functions",children:[{value:"<code>constructor(contract ITier tierContract_)</code> (public)",id:"constructorcontract-itier-tiercontract_-public",children:[]},{value:"<code>isTier(address account_, enum ITier.Tier minimumTier_) \u2192 bool</code> (public)",id:"istieraddress-account_-enum-itiertier-minimumtier_--bool-public",children:[]}]}],d={toc:u};function p(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"TierByConstruction")," is a base contract for other\ncontracts to inherit from."),(0,o.kt)("p",null,"It exposes ",(0,o.kt)("inlineCode",{parentName:"p"},"isTier")," and the corresponding modifier ",(0,o.kt)("inlineCode",{parentName:"p"},"onlyTier"),"."),(0,o.kt)("p",null,"This ensures that the address has held at least the given tier\nsince the contract was constructed."),(0,o.kt)("p",null,"We check against the construction time of the contract rather\nthan the current block to avoid various exploits."),(0,o.kt)("p",null,"Users should not be able to gain a tier for a single block, claim\nbenefits then remove the tier within the same block."),(0,o.kt)("p",null,"The construction block provides a simple and generic reference\npoint that is difficult to manipulate/predict."),(0,o.kt)("p",null,"Note that ",(0,o.kt)("inlineCode",{parentName:"p"},"ReadOnlyTier")," contracts must carefully consider use\nwith ",(0,o.kt)("inlineCode",{parentName:"p"},"TierByConstruction")," as they tend to return ",(0,o.kt)("inlineCode",{parentName:"p"},"0x00000000"),' for\nany/all tiers held. There needs to be additional safeguards to\nmitigate "flash tier" attacks.'),(0,o.kt)("p",null,"Note that an account COULD be ",(0,o.kt)("inlineCode",{parentName:"p"},"TierByConstruction")," then lower/\nremove a tier, then no longer be eligible when they regain the\ntier. Only ",(0,o.kt)("em",{parentName:"p"},"continuously held")," tiers are valid against the\nconstruction block check as this is native behaviour of the\n",(0,o.kt)("inlineCode",{parentName:"p"},"report")," function in ",(0,o.kt)("inlineCode",{parentName:"p"},"ITier"),"."),(0,o.kt)("p",null,"Technically the ",(0,o.kt)("inlineCode",{parentName:"p"},"ITier")," could re-enter the ",(0,o.kt)("inlineCode",{parentName:"p"},"TierByConstruction"),"\nso the ",(0,o.kt)("inlineCode",{parentName:"p"},"onlyTier")," modifier runs AFTER the modified function."),(0,o.kt)("h2",{id:"details"},"Details"),(0,o.kt)("p",null,"Enforces tiers held by contract contruction block.\nThe construction block is compared against the blocks returned by ",(0,o.kt)("inlineCode",{parentName:"p"},"report"),".\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"ITier")," contract is paramaterised and set during construction."),(0,o.kt)("h2",{id:"variables"},"Variables"),(0,o.kt)("h3",{id:"contract-itier-tiercontract"},(0,o.kt)("inlineCode",{parentName:"h3"},"contract ITier")," ",(0,o.kt)("inlineCode",{parentName:"h3"},"tierContract")),(0,o.kt)("h3",{id:"uint256-constructionblock"},(0,o.kt)("inlineCode",{parentName:"h3"},"uint256")," ",(0,o.kt)("inlineCode",{parentName:"h3"},"constructionBlock")),(0,o.kt)("h2",{id:"modifiers"},"Modifiers"),(0,o.kt)("h3",{id:"onlytieraddress-account_-enum-itiertier-minimumtier_"},(0,o.kt)("inlineCode",{parentName:"h3"},"onlyTier(address account_, enum ITier.Tier minimumTier_)")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://consensys.github.io/smart-contract-best-practices/recommendations/#use-modifiers-only-for-checks"},"https://consensys.github.io/smart-contract-best-practices/recommendations/#use-modifiers-only-for-checks")),(0,o.kt)("p",null,"Do NOT use this to guard setting the tier on an ",(0,o.kt)("inlineCode",{parentName:"p"},"ITier")," contract.\nThe initial tier would be checked AFTER it has already been\nmodified which is unsafe."),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("h3",{id:"constructorcontract-itier-tiercontract_-public"},(0,o.kt)("inlineCode",{parentName:"h3"},"constructor(contract ITier tierContract_)")," (public)"),(0,o.kt)("h3",{id:"istieraddress-account_-enum-itiertier-minimumtier_--bool-public"},(0,o.kt)("inlineCode",{parentName:"h3"},"isTier(address account_, enum ITier.Tier minimumTier_) \u2192 bool")," (public)"),(0,o.kt)("p",null,"Check if an account has held AT LEAST the given tier according to\n",(0,o.kt)("inlineCode",{parentName:"p"},"tierContract"),' since construction.\nThe account MUST have held the tier continuously from construction\nuntil the "current" state according to ',(0,o.kt)("inlineCode",{parentName:"p"},"report"),".\nNote that ",(0,o.kt)("inlineCode",{parentName:"p"},"report")," PROBABLY is current as at the block this function is\ncalled but MAYBE NOT.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"ITier")," contract is free to manage reports however makes sense."))}p.isMDXComponent=!0}}]);