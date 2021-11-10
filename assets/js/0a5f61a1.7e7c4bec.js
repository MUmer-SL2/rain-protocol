"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5225],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return h}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(a),h=r,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||i;return a?n.createElement(m,o(o({ref:t},u),{},{components:a})):n.createElement(m,o({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},8870:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],s={id:"introduction",slug:"/",title:"Introduction"},l=void 0,c={unversionedId:"introduction",id:"version-v0.0.12/introduction",isDocsHomePage:!1,title:"Introduction",description:"Rain Protocol supports fair value capture for intangible or physical assets in a permissionless way in any decentralised environment.",source:"@site/versioned_docs/version-v0.0.12/Introduction.md",sourceDirName:".",slug:"/",permalink:"/rain-protocol/v0.0.12/",tags:[],version:"v0.0.12",frontMatter:{id:"introduction",slug:"/",title:"Introduction"},sidebar:"version-v0.0.12/tutorialSidebar",next:{title:"Glossary",permalink:"/rain-protocol/v0.0.12/glossary"}},u=[{value:"Overview",id:"overview",children:[]},{value:"A note on regulatory compliance",id:"a-note-on-regulatory-compliance",children:[]},{value:"Roadmap",id:"roadmap",children:[]}],d={toc:u};function p(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Rain Protocol supports fair value capture for intangible or physical assets in a permissionless way in any decentralised environment."),(0,i.kt)("p",null,"We use Balancer's ",(0,i.kt)("a",{parentName:"p",href:"https://docs.balancer.finance/smart-contracts/smart-pools/liquidity-bootstrapping-faq"},"Liquidity Bootstrapping Pool")," to distribute the tokens."),(0,i.kt)("p",null,"The goal is to achieve something analogous to KickStarter where specific projects and events are made possible through a one-time fundraising."),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The basic process is:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The trust and pools are established with a freshly minted project/event token and some starting capital for trading"),(0,i.kt)("li",{parentName:"ul"},"The liquidity bootstrapping pool is used to distribute the freshly minted tokens"),(0,i.kt)("li",{parentName:"ul"},"The pool is closed",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Some of the raised funds are forwarded to the minted token contract"),(0,i.kt)("li",{parentName:"ul"},"The creator receives the bulk of the raised funds"),(0,i.kt)("li",{parentName:"ul"},"Some fees are distributed to other stakeholders"))),(0,i.kt)("li",{parentName:"ul"},"Any undistributed tokens are burned and all distributed tokens are frozen"),(0,i.kt)("li",{parentName:"ul"},"The creator creates and distributes rewards over time in many ways:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Creating claimable NFTs and other perks that require claimants to hold a minimum balance of the distributed token"),(0,i.kt)("li",{parentName:"ul"},"Sending erc20 tokens to the distributed token contract that require claimants to burn their tokens to redeem"),(0,i.kt)("li",{parentName:"ul"},"Hosting real world exclusive events etc. that require claimants to hold a minimum balance of the distributed token to participate")))),(0,i.kt)("p",null,"The process requires a high degree of trust between the creator and their fans as there is no on-chain mechanism to enforce delivery of any perks."),(0,i.kt)("p",null,"The token minting, distribution, burning is all trustless as the deployed ",(0,i.kt)("inlineCode",{parentName:"p"},"Trust")," contract handles construction and ownership of the other contracts."),(0,i.kt)("p",null,"As each ",(0,i.kt)("inlineCode",{parentName:"p"},"Trust")," is dedicated to a specific project or event there are no admin or upgrade functions. Future versions of ",(0,i.kt)("inlineCode",{parentName:"p"},"Trust")," will simply be picked up by new projects and events as they arise."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Trust")," has native integration with the ",(0,i.kt)("inlineCode",{parentName:"p"},"Tier")," membership system included as a git submodule. Any account that does not have a minimum membership status cannot receive the distributed token and so cannot participate. This allows additional requirements to be placed on the participants by the deployer of the trust."),(0,i.kt)("h2",{id:"a-note-on-regulatory-compliance"},"A note on regulatory compliance"),(0,i.kt)("p",null,"Any legal or regulatory requirements such as KYC/AML or securities law are the responsibility of the stakeholders."),(0,i.kt)("p",null,"The stakeholders are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The deployer of the ",(0,i.kt)("inlineCode",{parentName:"li"},"Trust")," contract who provides all the initial configuration parameters and pays the gas for deployment"),(0,i.kt)("li",{parentName:"ul"},"The creator who is raising money to create some new value in the world"),(0,i.kt)("li",{parentName:"ul"},"The token holders who trade tokens during the distribution phase on the Balancer pool and then hold frozen tokens after the distribution finishes"),(0,i.kt)("li",{parentName:"ul"},"The seeder who provides the initial tokens on the other side of the Balancer trading pool to bootstrap trading")),(0,i.kt)("p",null,"Without offering legal advice, one hypothetical way this could look (something like KickStarter):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The creator and deployer of the ",(0,i.kt)("inlineCode",{parentName:"li"},"Trust")," creates a ",(0,i.kt)("inlineCode",{parentName:"li"},"Tier")," contract that allows only close friends and family to hold a membership status"),(0,i.kt)("li",{parentName:"ul"},'The creator, who is a crypto-enthusiast and musician, decides to hold an intimate "fans only" event, using signatures from the accounts holding a frozen token balance as tickets to her event')),(0,i.kt)("p",null,"As the creator knows all her fans, and the token balances are frozen (cannot be traded on a secondary market), and the reward for holding the tokens is a one-time in person event, it's unlikely to be considered a public sale of an investment contract (for example) or cause KYC issues."),(0,i.kt)("p",null,"Another situation could be (along the lines of Kiva):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The creator of the ",(0,i.kt)("inlineCode",{parentName:"li"},"Trust")," lives in a remote village in a poor country and needs a new roof for her house"),(0,i.kt)("li",{parentName:"ul"},"She creates a small social media campaign for her own and surrounding villages to raise the money she needs, and airdrops a cute NFT to everyone who helped")),(0,i.kt)("p",null,'As none of the participants in the system are American, the SEC has no jurisdiction, and the raised money is being used directly to fix a private individual\'s home so it is not an investment. The NFT has only sentimental value as a "thank you" note between neighbours.'),(0,i.kt)("p",null,"Of course, the same system could be used to facilitate something that is probably regulated by the SEC:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"An American creator and deployer of the ",(0,i.kt)("inlineCode",{parentName:"li"},"Trust")," actively promotes sale of the minted tokens to a global audience"),(0,i.kt)("li",{parentName:"ul"},"The creator uses the raised capital to purchase real estate and regularly airdrops the rent received to all token holders")),(0,i.kt)("p",null,"In this case it is hard to see how the fundraise is not simply a public sale of an investment contract, by an American, for Americans, but with weird extra steps by using ",(0,i.kt)("inlineCode",{parentName:"p"},"Trust"),". The creator, as an American, would need to ensure (presumably offchain somehow) that they are meeting their local regulatory requirements."),(0,i.kt)("p",null,"The nature of data in a public blockchain is no different to a public Google spreadsheet. That is to say, it has no knowledge of or control over what the numbers and balances it calculates represent in the real world. This can only be made visible and accountable through curation by humans. The ",(0,i.kt)("inlineCode",{parentName:"p"},"Trust")," contract is simply tracking the flow of existing tokens towards the creator and newly minted tokens distributed away from the creator, then frozen so the creator can reference them later."),(0,i.kt)("h2",{id:"roadmap"},"Roadmap"),(0,i.kt)("p",null,"Our goal is to build a free and open source system that makes it as easy and affordable as possible for creators to deploy ",(0,i.kt)("inlineCode",{parentName:"p"},"Trust")," contracts that are secure and can meet local laws and regulations, without positioning ourselves as the gatekeeper of every possible use-case."),(0,i.kt)("p",null,"The current roadmap towards this goal:"),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Create the basic contracts needed to facilitate each phase"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Audit and open source everything in a combined public repository"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Create factory contracts that register deployed contracts and allow for automatic verification of the authenticity of a ",(0,i.kt)("inlineCode",{parentName:"li"},"Trust")),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Create SDKs and incentives to foster global permissionless CURATION of raises across many independent GUIs, platforms and blockchains"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Facilitate Token Lists and Kleros style layers of additional CURATION to protect users and platforms from illicit activities"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","More KYC/AML tools for creators"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","More distribution mechanisms"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Data analytics and tools for better CURATION")))}p.isMDXComponent=!0}}]);