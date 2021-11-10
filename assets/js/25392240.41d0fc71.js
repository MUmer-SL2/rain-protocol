"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7984],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),c=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,b=d["".concat(u,".").concat(m)]||d[m]||s[m]||i;return n?o.createElement(b,a(a({ref:t},p),{},{components:n})):o.createElement(b,a({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8297:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],l={},u=void 0,c={unversionedId:"api/pool/IConfigurableRightsPool",id:"version-v0.0.11/api/pool/IConfigurableRightsPool",isDocsHomePage:!1,title:"IConfigurableRightsPool",description:"https://github.com/balancer-labs/configurable-rights-pool/blob/5bd63657ac71a9e5f8484ea561de572193b3317b/contracts/ConfigurableRightsPool.sol#L41",source:"@site/versioned_docs/version-v0.0.11/api/pool/IConfigurableRightsPool.md",sourceDirName:"api/pool",slug:"/api/pool/IConfigurableRightsPool",permalink:"/rain-protocol/v0.0.11/api/pool/IConfigurableRightsPool",tags:[],version:"v0.0.11",frontMatter:{},sidebar:"version-v0.0.11/tutorialSidebar",previous:{title:"ICRPFactory",permalink:"/rain-protocol/v0.0.11/api/pool/ICRPFactory"},next:{title:"RedeemableERC20Pool",permalink:"/rain-protocol/v0.0.11/api/pool/RedeemableERC20Pool"}},p=[{value:"Functions",id:"functions",children:[{value:"<code>bPool() \u2192 address</code> (external)",id:"bpool--address-external",children:[]},{value:"<code>bFactory() \u2192 address</code> (external)",id:"bfactory--address-external",children:[]},{value:"<code>createPool(uint256 initialSupply, uint256 minimumWeightChangeBlockPeriodParam, uint256 addTokenTimeLockInBlocksParam)</code> (external)",id:"createpooluint256-initialsupply-uint256-minimumweightchangeblockperiodparam-uint256-addtokentimelockinblocksparam-external",children:[]},{value:"<code>updateWeightsGradually(uint256[] newWeights, uint256 startBlock, uint256 endBlock)</code> (external)",id:"updateweightsgraduallyuint256-newweights-uint256-startblock-uint256-endblock-external",children:[]},{value:"<code>exitPool(uint256 poolAmountIn, uint256[] minAmountsOut)</code> (external)",id:"exitpooluint256-poolamountin-uint256-minamountsout-external",children:[]}]}],s={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/balancer-labs/configurable-rights-pool/blob/5bd63657ac71a9e5f8484ea561de572193b3317b/contracts/ConfigurableRightsPool.sol#L41"},"https://github.com/balancer-labs/configurable-rights-pool/blob/5bd63657ac71a9e5f8484ea561de572193b3317b/contracts/ConfigurableRightsPool.sol#L41")),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"bpool--address-external"},(0,i.kt)("inlineCode",{parentName:"h3"},"bPool() \u2192 address")," (external)"),(0,i.kt)("h3",{id:"bfactory--address-external"},(0,i.kt)("inlineCode",{parentName:"h3"},"bFactory() \u2192 address")," (external)"),(0,i.kt)("h3",{id:"createpooluint256-initialsupply-uint256-minimumweightchangeblockperiodparam-uint256-addtokentimelockinblocksparam-external"},(0,i.kt)("inlineCode",{parentName:"h3"},"createPool(uint256 initialSupply, uint256 minimumWeightChangeBlockPeriodParam, uint256 addTokenTimeLockInBlocksParam)")," (external)"),(0,i.kt)("h3",{id:"updateweightsgraduallyuint256-newweights-uint256-startblock-uint256-endblock-external"},(0,i.kt)("inlineCode",{parentName:"h3"},"updateWeightsGradually(uint256[] newWeights, uint256 startBlock, uint256 endBlock)")," (external)"),(0,i.kt)("h3",{id:"exitpooluint256-poolamountin-uint256-minamountsout-external"},(0,i.kt)("inlineCode",{parentName:"h3"},"exitPool(uint256 poolAmountIn, uint256[] minAmountsOut)")," (external)"))}d.isMDXComponent=!0}}]);