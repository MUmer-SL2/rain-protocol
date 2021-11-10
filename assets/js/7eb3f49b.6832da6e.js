"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3872],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),l=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(n),f=o,m=u["".concat(d,".").concat(f)]||u[f]||p[f]||a;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7526:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return d},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={},d=void 0,l={unversionedId:"api/seed/SeedERC20Factory",id:"version-v0.0.14/api/seed/SeedERC20Factory",isDocsHomePage:!1,title:"SeedERC20Factory",description:"Factory for creating and deploying SeedERC20 contracts.",source:"@site/versioned_docs/version-v0.0.14/api/seed/SeedERC20Factory.md",sourceDirName:"api/seed",slug:"/api/seed/SeedERC20Factory",permalink:"/rain-protocol/api/seed/SeedERC20Factory",tags:[],version:"v0.0.14",frontMatter:{},sidebar:"version-v0.0.14/tutorialSidebar",previous:{title:"SeedERC20",permalink:"/rain-protocol/api/seed/SeedERC20"},next:{title:"AlwaysTier",permalink:"/rain-protocol/api/tier/AlwaysTier"}},s=[{value:"Functions",id:"functions",children:[{value:"<code>_createChild(bytes data_) \u2192 address</code> (internal)",id:"_createchildbytes-data_--address-internal",children:[]},{value:"<code>createChild(struct SeedERC20Config config_) \u2192 address</code> (external)",id:"createchildstruct-seederc20config-config_--address-external",children:[]}]}],p={toc:s};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Factory for creating and deploying ",(0,a.kt)("inlineCode",{parentName:"p"},"SeedERC20")," contracts."),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"_createchildbytes-data_--address-internal"},(0,a.kt)("inlineCode",{parentName:"h3"},"_createChild(bytes data_) \u2192 address")," (internal)"),(0,a.kt)("p",null,"Implements ",(0,a.kt)("inlineCode",{parentName:"p"},"IFactory"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"_createChild")," hook must be overridden to actually create child\ncontract."),(0,a.kt)("p",null,"Implementers may want to overload this function with a typed equivalent\nto expose domain specific structs etc. to the compiled ABI consumed by\ntooling and other scripts. To minimise gas costs for deployment it is\nexpected that the tooling will consume the typed ABI, then encode the\narguments and pass them to this function directly."),(0,a.kt)("h3",{id:"createchildstruct-seederc20config-config_--address-external"},(0,a.kt)("inlineCode",{parentName:"h3"},"createChild(struct SeedERC20Config config_) \u2192 address")," (external)"),(0,a.kt)("p",null,"Allows calling ",(0,a.kt)("inlineCode",{parentName:"p"},"createChild")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"SeedERC20Config")," struct.\nUse original ",(0,a.kt)("inlineCode",{parentName:"p"},"Factory")," ",(0,a.kt)("inlineCode",{parentName:"p"},"createChild")," function signature if function\nparameters are already encoded."))}u.isMDXComponent=!0}}]);