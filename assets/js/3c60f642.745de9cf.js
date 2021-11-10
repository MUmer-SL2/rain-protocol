"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7664],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(r),f=i,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||a;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9885:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),o=["components"],l={},c=void 0,s={unversionedId:"api/tier/ReadOnlyTier",id:"version-v0.0.14/api/tier/ReadOnlyTier",isDocsHomePage:!1,title:"ReadOnlyTier",description:"ReadOnlyTier is a base contract that other contracts",source:"@site/versioned_docs/version-v0.0.14/api/tier/ReadOnlyTier.md",sourceDirName:"api/tier",slug:"/api/tier/ReadOnlyTier",permalink:"/rain-protocol/api/tier/ReadOnlyTier",tags:[],version:"v0.0.14",frontMatter:{},sidebar:"version-v0.0.14/tutorialSidebar",previous:{title:"NeverTier",permalink:"/rain-protocol/api/tier/NeverTier"},next:{title:"ReadWriteTier",permalink:"/rain-protocol/api/tier/ReadWriteTier"}},p=[{value:"Details",id:"details",children:[]},{value:"Functions",id:"functions",children:[{value:"<code>setTier(address, enum ITier.Tier, bytes)</code> (external)",id:"settieraddress-enum-itiertier-bytes-external",children:[]}]}],u={toc:p};function d(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ReadOnlyTier")," is a base contract that other contracts\nare expected to inherit."),(0,a.kt)("p",null,"It does not allow ",(0,a.kt)("inlineCode",{parentName:"p"},"setStatus")," and expects ",(0,a.kt)("inlineCode",{parentName:"p"},"report")," to derive from\nsome existing onchain data."),(0,a.kt)("h2",{id:"details"},"Details"),(0,a.kt)("p",null,"A contract inheriting ",(0,a.kt)("inlineCode",{parentName:"p"},"ReadOnlyTier")," cannot call ",(0,a.kt)("inlineCode",{parentName:"p"},"setTier"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ReadOnlyTier")," is abstract because it does not implement ",(0,a.kt)("inlineCode",{parentName:"p"},"report"),".\nThe expectation is that ",(0,a.kt)("inlineCode",{parentName:"p"},"report")," will derive tiers from some\nexternal data source."),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"settieraddress-enum-itiertier-bytes-external"},(0,a.kt)("inlineCode",{parentName:"h3"},"setTier(address, enum ITier.Tier, bytes)")," (external)"),(0,a.kt)("p",null,"Always reverts because it is not possible to set a read only tier."),(0,a.kt)("p",null,"Updates the tier of an account."),(0,a.kt)("p",null,"The implementing contract is responsible for all checks and state\nchanges required to set the tier. For example, taking/refunding\nfunds/NFTs etc."),(0,a.kt)("p",null,"Contracts may disallow directly setting tiers, preferring to derive\nreports from other onchain data.\nIn this case they should ",(0,a.kt)("inlineCode",{parentName:"p"},'revert("SET_TIER");'),"."))}d.isMDXComponent=!0}}]);