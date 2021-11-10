"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1963],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),l=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(r),f=a,y=u["".concat(d,".").concat(f)]||u[f]||p[f]||i;return r?n.createElement(y,o(o({ref:t},s),{},{components:r})):n.createElement(y,o({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3750:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return d},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],c={},d=void 0,l={unversionedId:"api/verify/VerifyFactory",id:"version-v0.0.12/api/verify/VerifyFactory",isDocsHomePage:!1,title:"VerifyFactory",description:"Factory for creating and deploying Verify contracts.",source:"@site/versioned_docs/version-v0.0.12/api/verify/VerifyFactory.md",sourceDirName:"api/verify",slug:"/api/verify/VerifyFactory",permalink:"/rain-protocol/v0.0.12/api/verify/VerifyFactory",tags:[],version:"v0.0.12",frontMatter:{},sidebar:"version-v0.0.12/tutorialSidebar",previous:{title:"Verify",permalink:"/rain-protocol/v0.0.12/api/verify/Verify"}},s=[{value:"Functions",id:"functions",children:[{value:"<code>_createChild(bytes data_) \u2192 address</code> (internal)",id:"_createchildbytes-data_--address-internal",children:[]},{value:"<code>createChild(address admin_) \u2192 address</code> (external)",id:"createchildaddress-admin_--address-external",children:[]}]}],p={toc:s};function u(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Factory for creating and deploying ",(0,i.kt)("inlineCode",{parentName:"p"},"Verify")," contracts."),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"_createchildbytes-data_--address-internal"},(0,i.kt)("inlineCode",{parentName:"h3"},"_createChild(bytes data_) \u2192 address")," (internal)"),(0,i.kt)("p",null,"Implements ",(0,i.kt)("inlineCode",{parentName:"p"},"IFactory"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"_createChild")," hook must be overridden to actually create child\ncontract."),(0,i.kt)("p",null,"Implementers may want to overload this function with a typed equivalent\nto expose domain specific structs etc. to the compiled ABI consumed by\ntooling and other scripts. To minimise gas costs for deployment it is\nexpected that the tooling will consume the typed ABI, then encode the\narguments and pass them to this function directly."),(0,i.kt)("h3",{id:"createchildaddress-admin_--address-external"},(0,i.kt)("inlineCode",{parentName:"h3"},"createChild(address admin_) \u2192 address")," (external)"),(0,i.kt)("p",null,"Typed wrapper for ",(0,i.kt)("inlineCode",{parentName:"p"},"createChild")," with admin address.\nUse original ",(0,i.kt)("inlineCode",{parentName:"p"},"Factory")," ",(0,i.kt)("inlineCode",{parentName:"p"},"createChild")," function signature if function\nparameters are already encoded."))}u.isMDXComponent=!0}}]);