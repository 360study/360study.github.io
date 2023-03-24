"use strict";(self.webpackChunkdocusaurus_test=self.webpackChunkdocusaurus_test||[]).push([[9543],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>p});var n=r(67294);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var o=n.createContext({}),s=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,c=e.mdxType,l=e.originalType,o=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=s(r),m=c,p=d["".concat(o,".").concat(m)]||d[m]||f[m]||l;return r?n.createElement(p,i(i({ref:t},u),{},{components:r})):n.createElement(p,i({ref:t},u))}));function p(e,t){var r=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var l=r.length,i=new Array(l);i[0]=m;var a={};for(var o in t)hasOwnProperty.call(t,o)&&(a[o]=t[o]);a.originalType=e,a[d]="string"==typeof e?e:c,i[1]=a;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},17661:(e,t,r)=>{r.d(t,{Z:()=>y});var n=r(67294),c=r(86010),l=r(78259),i=r(83699),a=r(2735),o=r(97325);const s={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function u(e){let{href:t,children:r}=e;return n.createElement(i.Z,{href:t,className:(0,c.Z)("card padding--lg",s.cardContainer)},r)}function d(e){let{href:t,icon:r,title:l,description:i}=e;return n.createElement(u,{href:t},n.createElement("h2",{className:(0,c.Z)("text--truncate",s.cardTitle),title:l},r," ",l),i&&n.createElement("p",{className:(0,c.Z)("text--truncate",s.cardDescription),title:i},i))}function f(e){let{item:t}=e;const r=(0,l.Wl)(t);return r?n.createElement(d,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,o.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function m(e){let{item:t}=e;const r=(0,a.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",c=(0,l.xz)(t.docId??void 0);return n.createElement(d,{href:t.href,icon:r,title:t.label,description:c?.description})}function p(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(m,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const r=(0,l.jA)();return n.createElement(y,{items:r.items,className:t})}function y(e){const{items:t,className:r}=e;if(!t)return n.createElement(h,e);const i=(0,l.MN)(t);return n.createElement("section",{className:(0,c.Z)("row",r)},i.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(p,{item:e})))))}},81824:(e,t,r)=>{r.d(t,{AA:()=>E,AB:()=>v,AC:()=>w,AE:()=>x,CA:()=>k,CB:()=>j,CC:()=>D,CE:()=>S,DA:()=>P,FA:()=>y,FC:()=>b,HA:()=>d,HB:()=>f,HC:()=>m,HD:()=>p,HE:()=>h,Ha:()=>c,Hb:()=>l,Hc:()=>i,Hd:()=>a,He:()=>o,Hf:()=>s,Hg:()=>u});var n=r(67294);const c=e=>{let{children:t}=e;return g(t,"#fff","#990066")},l=e=>{let{children:t}=e;return g(t,"#fff","#540d6e")},i=e=>{let{children:t}=e;return g(t,"#fff","#d70427")},a=e=>{let{children:t}=e;return g(t,"#fff","#FA383E")},o=e=>{let{children:t}=e;return g(t,"#fff","#00A400")},s=e=>{let{children:t}=e;return g(t,"#fff","#26B226")},u=e=>{let{children:t}=e;return g(t,"#fff","#ff9f1a")},d=e=>{let{children:t}=e;return g(t,"#000","#f3ffbd")},f=e=>{let{children:t}=e;return g(t,"#000","#88ffcc")},m=e=>{let{children:t}=e;return g(t,"#000","#eddcc8")},p=e=>{let{children:t}=e;return g(t,"#000","#99eeff")},h=e=>{let{children:t}=e;return g(t,"#000","#f5e6de")},y=e=>{let{children:t}=e;return O(t,"large")},b=e=>{let{children:t}=e;return O(t,"xx-large")};function g(e,t,r){return n.createElement("span",{style:{backgroundColor:r,borderRadius:"5px",color:t,padding:"0.3rem"},class:"my_alert"},e)}function O(e,t){return n.createElement("span",{style:{fontSize:t}},e)}const E=e=>{let{children:t}=e;return C(t,"primary")},v=e=>{let{children:t}=e;return C(t,"secondary")},w=e=>{let{children:t}=e;return C(t,"success")},x=e=>{let{children:t}=e;return C(t,"warning")};function C(e,t){return n.createElement("div",{class:"alert alert--"+t,style:{padding:"10px",margin:"10px 0"},role:"alert"},e)}const k=e=>{let{children:t}=e;return N(t,"primary","")},j=e=>{let{children:t}=e;return N(t,"secondary","")},D=e=>{let{children:t}=e;return N(t,"success","")},S=e=>{let{children:t}=e;return N(t,"warning","")};function N(e,t,r){return n.createElement("button",{class:"button "+r+"  button--"+t},e)}const P=e=>{let{children:t}=e;return T(t,"lw")};function T(e,t){return n.createElement("div",{class:"item shadow--"+t},e)}},85754:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=r(87462),c=(r(67294),r(3905)),l=(r(81824),r(17661));const i={id:"9\u3001\u7ee9\u6548\u8bc4\u4ef7",title:"9\u3001\u7ee9\u6548\u8bc4\u4ef7",sidebar_label:"9\u3001\u7ee9\u6548\u8bc4\u4ef7"},a=void 0,o={unversionedId:"ISO9001/9\u3001\u7ee9\u6548\u8bc4\u4ef7/9\u3001\u7ee9\u6548\u8bc4\u4ef7",id:"ISO9001/9\u3001\u7ee9\u6548\u8bc4\u4ef7/9\u3001\u7ee9\u6548\u8bc4\u4ef7",title:"9\u3001\u7ee9\u6548\u8bc4\u4ef7",description:"\u4e3a\u786e\u5b9a\u662f\u5426\u8fbe\u5230\u8d28\u91cf\u7ba1\u7406\u4f53\u7cfb\u7684\u9884\u671f\u7ed3\u679c\uff0c\u7ec4\u7ec7\u9700\u8fdb\u884c\u76d1\u89c6\u548c\u6d4b\u91cf\uff0c\u786e\u5b9a\u9700\u8981\u76d1\u89c6\u548c",source:"@site/docs/ISO9001/9\u3001\u7ee9\u6548\u8bc4\u4ef7/index.mdx",sourceDirName:"ISO9001/9\u3001\u7ee9\u6548\u8bc4\u4ef7",slug:"/ISO9001/9\u3001\u7ee9\u6548\u8bc4\u4ef7/",permalink:"/en/ISO9001/9\u3001\u7ee9\u6548\u8bc4\u4ef7/",draft:!1,tags:[],version:"current",frontMatter:{id:"9\u3001\u7ee9\u6548\u8bc4\u4ef7",title:"9\u3001\u7ee9\u6548\u8bc4\u4ef7",sidebar_label:"9\u3001\u7ee9\u6548\u8bc4\u4ef7"},sidebar:"mySidebar",previous:{title:"8.5 \u751f\u4ea7\u548c\u670d\u52a1\u63d0\u4f9b",permalink:"/en/ISO9001/8\u3001\u8fd0\u884c/8.5 \u751f\u4ea7\u548c\u670d\u52a1\u63d0\u4f9b"},next:{title:"9.1 \u76d1\u89c6\u3001\u6d4b\u91cf\u3001\u5206\u6790\u548c\u8bc4\u4ef7",permalink:"/en/ISO9001/9\u3001\u7ee9\u6548\u8bc4\u4ef7/9.1 \u76d1\u89c6\u3001\u6d4b\u91cf\u3001\u5206\u6790\u548c\u8bc4\u4ef7"}},s={},u=[],d={toc:u},f="wrapper";function m(e){let{components:t,...r}=e;return(0,c.kt)(f,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null," \u4e3a\u786e\u5b9a\u662f\u5426\u8fbe\u5230\u8d28\u91cf\u7ba1\u7406\u4f53\u7cfb\u7684\u9884\u671f\u7ed3\u679c\uff0c\u7ec4\u7ec7\u9700\u8fdb\u884c\u76d1\u89c6\u548c\u6d4b\u91cf\uff0c\u786e\u5b9a\u9700\u8981\u76d1\u89c6\u548c\n\u6d4b\u91cf\u7684\u5185\u5bb9\u548c\u7528\u4e8e\u8bc4\u4ef7\u8d28\u91cf\u7ba1\u7406\u4f53\u7cfb\u7ee9\u6548\u548c\u6709\u6548\u6027\u7684\u65b9\u6cd5\u3002"),(0,c.kt)(l.Z,{mdxType:"DocCardList"}))}m.isMDXComponent=!0}}]);