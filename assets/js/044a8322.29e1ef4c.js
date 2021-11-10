"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9034],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6125:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return s},default:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={},l=void 0,d={unversionedId:"api/redeemableERC20/RedeemableERC20Factory",id:"api/redeemableERC20/RedeemableERC20Factory",isDocsHomePage:!1,title:"RedeemableERC20Factory",description:"Factory for deploying and registering RedeemableERC20 contracts.",source:"@site/../docs/api/redeemableERC20/RedeemableERC20Factory.md",sourceDirName:"api/redeemableERC20",slug:"/api/redeemableERC20/RedeemableERC20Factory",permalink:"/rain-protocol/next/api/redeemableERC20/RedeemableERC20Factory",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"RedeemableERC20",permalink:"/rain-protocol/next/api/redeemableERC20/RedeemableERC20"},next:{title:"SeedERC20",permalink:"/rain-protocol/next/api/seed/SeedERC20"}},s=[{value:"Functions",id:"functions",children:[{value:"<code>_createChild(bytes data_) \u2192 address</code> (internal)",id:"_createchildbytes-data_--address-internal",children:[]},{value:"<code>createChild(struct RedeemableERC20Config config_) \u2192 address</code> (external)",id:"createchildstruct-redeemableerc20config-config_--address-external",children:[]}]}],p={toc:s};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Factory for deploying and registering ",(0,o.kt)("inlineCode",{parentName:"p"},"RedeemableERC20")," contracts."),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("h3",{id:"_createchildbytes-data_--address-internal"},(0,o.kt)("inlineCode",{parentName:"h3"},"_createChild(bytes data_) \u2192 address")," (internal)"),(0,o.kt)("p",null,"Implements ",(0,o.kt)("inlineCode",{parentName:"p"},"IFactory"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"_createChild")," hook must be overridden to actually create child\ncontract."),(0,o.kt)("p",null,"Implementers may want to overload this function with a typed equivalent\nto expose domain specific structs etc. to the compiled ABI consumed by\ntooling and other scripts. To minimise gas costs for deployment it is\nexpected that the tooling will consume the typed ABI, then encode the\narguments and pass them to this function directly."),(0,o.kt)("h3",{id:"createchildstruct-redeemableerc20config-config_--address-external"},(0,o.kt)("inlineCode",{parentName:"h3"},"createChild(struct RedeemableERC20Config config_) \u2192 address")," (external)"),(0,o.kt)("p",null,"Allows calling ",(0,o.kt)("inlineCode",{parentName:"p"},"createChild")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"RedeemableERC20Config")," struct.\nUse original ",(0,o.kt)("inlineCode",{parentName:"p"},"Factory")," ",(0,o.kt)("inlineCode",{parentName:"p"},"createChild")," function signature if function\nparameters are already encoded."))}u.isMDXComponent=!0}}]);