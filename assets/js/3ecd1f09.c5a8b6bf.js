"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6968],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return h}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=a.createContext({}),d=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=d(e.components);return a.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(t),h=i,m=p["".concat(c,".").concat(h)]||p[h]||s[h]||o;return t?a.createElement(m,r(r({ref:n},u),{},{components:t})):a.createElement(m,r({ref:n},u))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=p;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var d=2;d<o;d++)r[d]=t[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5226:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return u},default:function(){return p}});var a=t(7462),i=t(3366),o=(t(7294),t(3905)),r=["components"],l={},c=void 0,d={unversionedId:"api/pool/RedeemableERC20Pool",id:"version-v0.0.12/api/pool/RedeemableERC20Pool",isDocsHomePage:!1,title:"RedeemableERC20Pool",description:"The Balancer functionality is wrapped by the",source:"@site/versioned_docs/version-v0.0.12/api/pool/RedeemableERC20Pool.md",sourceDirName:"api/pool",slug:"/api/pool/RedeemableERC20Pool",permalink:"/rain-protocol/v0.0.12/api/pool/RedeemableERC20Pool",tags:[],version:"v0.0.12",frontMatter:{},sidebar:"version-v0.0.12/tutorialSidebar",previous:{title:"IConfigurableRightsPool",permalink:"/rain-protocol/v0.0.12/api/pool/IConfigurableRightsPool"},next:{title:"RedeemableERC20PoolFactory",permalink:"/rain-protocol/v0.0.12/api/pool/RedeemableERC20PoolFactory"}},u=[{value:"Details",id:"details",children:[]},{value:"Variables",id:"variables",children:[{value:"<code>uint256</code> <code>MIN_BALANCER_POOL_BALANCE</code>",id:"uint256-min_balancer_pool_balance",children:[]},{value:"<code>uint256</code> <code>MIN_RESERVE_INIT</code>",id:"uint256-min_reserve_init",children:[]},{value:"<code>contract RedeemableERC20</code> <code>token</code>",id:"contract-redeemableerc20-token",children:[]},{value:"<code>uint256</code> <code>minimumTradingDuration</code>",id:"uint256-minimumtradingduration",children:[]},{value:"<code>contract IERC20</code> <code>reserve</code>",id:"contract-ierc20-reserve",children:[]},{value:"<code>uint256</code> <code>reserveInit</code>",id:"uint256-reserveinit",children:[]},{value:"<code>contract IConfigurableRightsPool</code> <code>crp</code>",id:"contract-iconfigurablerightspool-crp",children:[]},{value:"<code>uint256</code> <code>finalWeight</code>",id:"uint256-finalweight",children:[]},{value:"<code>uint256</code> <code>finalValuation</code>",id:"uint256-finalvaluation",children:[]}]},{value:"Functions",id:"functions",children:[{value:"<code>constructor(struct RedeemableERC20PoolConfig config_)</code> (public)",id:"constructorstruct-redeemableerc20poolconfig-config_-public",children:[]},{value:"<code>startDutchAuction()</code> (external)",id:"startdutchauction-external",children:[]},{value:"<code>ownerEndDutchAuction()</code> (external)",id:"ownerenddutchauction-external",children:[]},{value:"<code>_beforeScheduleNextPhase(uint32 nextPhaseBlock_)</code> (internal)",id:"_beforeschedulenextphaseuint32-nextphaseblock_-internal",children:[]}]}],s={toc:u};function p(e){var n=e.components,t=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Balancer functionality is wrapped by the\n",(0,o.kt)("inlineCode",{parentName:"p"},"RedeemableERC20Pool")," contract."),(0,o.kt)("p",null,"Balancer pools require significant configuration so this contract helps\ndecouple the implementation from the ",(0,o.kt)("inlineCode",{parentName:"p"},"Trust"),"."),(0,o.kt)("p",null,"It also ensures the pool tokens created during the initialization of the\nBalancer LBP are owned by the ",(0,o.kt)("inlineCode",{parentName:"p"},"RedeemableERC20Pool")," and never touch either\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"Trust")," nor an externally owned account (EOA)."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"RedeemableERC20Pool")," has several phases:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Phase.ZERO"),": Deployed not trading but can be by owner calling\n",(0,o.kt)("inlineCode",{parentName:"li"},"ownerStartDutchAuction")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Phase.ONE"),": Trading open"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Phase.TWO"),": Trading open but can be closed by owner calling\n",(0,o.kt)("inlineCode",{parentName:"li"},"ownerEndDutchAuction")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Phase.THREE"),": Trading closed")),(0,o.kt)("h2",{id:"details"},"Details"),(0,o.kt)("p",null,"Deployer and controller for a Balancer ConfigurableRightsPool.\nThis contract is intended in turn to be owned by a ",(0,o.kt)("inlineCode",{parentName:"p"},"Trust"),"."),(0,o.kt)("p",null,"Responsibilities of ",(0,o.kt)("inlineCode",{parentName:"p"},"RedeemableERC20Pool"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Configure and deploy Balancer contracts with correct weights, rights and\nbalances"),(0,o.kt)("li",{parentName:"ul"},'Allowing the owner to start and end a dutch auction raise modelled as\nBalancer\'s "gradual weights" functionality'),(0,o.kt)("li",{parentName:"ul"},"Tracking and enforcing 3 phases: unstarted, started, ended"),(0,o.kt)("li",{parentName:"ul"},"Burning unsold tokens after the raise and forwarding all raised and\ninitial reserve back to the owner")),(0,o.kt)("p",null,"Responsibilities of the owner:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Providing all token and reserve balances"),(0,o.kt)("li",{parentName:"ul"},"Calling start and end raise functions"),(0,o.kt)("li",{parentName:"ul"},"Handling the reserve proceeds of the raise")),(0,o.kt)("h2",{id:"variables"},"Variables"),(0,o.kt)("h3",{id:"uint256-min_balancer_pool_balance"},(0,o.kt)("inlineCode",{parentName:"h3"},"uint256")," ",(0,o.kt)("inlineCode",{parentName:"h3"},"MIN_BALANCER_POOL_BALANCE")),(0,o.kt)("h3",{id:"uint256-min_reserve_init"},(0,o.kt)("inlineCode",{parentName:"h3"},"uint256")," ",(0,o.kt)("inlineCode",{parentName:"h3"},"MIN_RESERVE_INIT")),(0,o.kt)("h3",{id:"contract-redeemableerc20-token"},(0,o.kt)("inlineCode",{parentName:"h3"},"contract RedeemableERC20")," ",(0,o.kt)("inlineCode",{parentName:"h3"},"token")),(0,o.kt)("h3",{id:"uint256-minimumtradingduration"},(0,o.kt)("inlineCode",{parentName:"h3"},"uint256")," ",(0,o.kt)("inlineCode",{parentName:"h3"},"minimumTradingDuration")),(0,o.kt)("h3",{id:"contract-ierc20-reserve"},(0,o.kt)("inlineCode",{parentName:"h3"},"contract IERC20")," ",(0,o.kt)("inlineCode",{parentName:"h3"},"reserve")),(0,o.kt)("h3",{id:"uint256-reserveinit"},(0,o.kt)("inlineCode",{parentName:"h3"},"uint256")," ",(0,o.kt)("inlineCode",{parentName:"h3"},"reserveInit")),(0,o.kt)("h3",{id:"contract-iconfigurablerightspool-crp"},(0,o.kt)("inlineCode",{parentName:"h3"},"contract IConfigurableRightsPool")," ",(0,o.kt)("inlineCode",{parentName:"h3"},"crp")),(0,o.kt)("h3",{id:"uint256-finalweight"},(0,o.kt)("inlineCode",{parentName:"h3"},"uint256")," ",(0,o.kt)("inlineCode",{parentName:"h3"},"finalWeight")),(0,o.kt)("h3",{id:"uint256-finalvaluation"},(0,o.kt)("inlineCode",{parentName:"h3"},"uint256")," ",(0,o.kt)("inlineCode",{parentName:"h3"},"finalValuation")),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("h3",{id:"constructorstruct-redeemableerc20poolconfig-config_-public"},(0,o.kt)("inlineCode",{parentName:"h3"},"constructor(struct RedeemableERC20PoolConfig config_)")," (public)"),(0,o.kt)("h3",{id:"startdutchauction-external"},(0,o.kt)("inlineCode",{parentName:"h3"},"startDutchAuction()")," (external)"),(0,o.kt)("p",null,"Allow anyone to start the Balancer style dutch auction.\nThe auction won't start unless this contract owns enough of both the\ntokens for the pool, so it is safe for anon to call.\n",(0,o.kt)("inlineCode",{parentName:"p"},"Phase.ZERO")," indicates the auction can start.\n",(0,o.kt)("inlineCode",{parentName:"p"},"Phase.ONE")," indicates the auction has started.\n",(0,o.kt)("inlineCode",{parentName:"p"},"Phase.TWO")," indicates the auction can be ended.\n",(0,o.kt)("inlineCode",{parentName:"p"},"Phase.THREE")," indicates the auction has ended.\nCreates the pool via. the CRP contract and configures the weight change\ncurve."),(0,o.kt)("h3",{id:"ownerenddutchauction-external"},(0,o.kt)("inlineCode",{parentName:"h3"},"ownerEndDutchAuction()")," (external)"),(0,o.kt)("p",null,"Allow the owner to end the Balancer style dutch auction.\nMoves from ",(0,o.kt)("inlineCode",{parentName:"p"},"Phase.TWO")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"Phase.THREE")," to indicate the auction has\nended.\n",(0,o.kt)("inlineCode",{parentName:"p"},"Phase.TWO")," is scheduled by ",(0,o.kt)("inlineCode",{parentName:"p"},"startDutchAuction"),".\nRemoves all LP tokens from the Balancer pool.\nBurns all unsold redeemable tokens.\nForwards the reserve balance to the owner."),(0,o.kt)("h3",{id:"_beforeschedulenextphaseuint32-nextphaseblock_-internal"},(0,o.kt)("inlineCode",{parentName:"h3"},"_beforeScheduleNextPhase(uint32 nextPhaseBlock_)")," (internal)"),(0,o.kt)("p",null,"Enforce ",(0,o.kt)("inlineCode",{parentName:"p"},"Phase.THREE")," as the last phase."))}p.isMDXComponent=!0}}]);