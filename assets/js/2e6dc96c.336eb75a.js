"use strict";(self.webpackChunktracetest_docs=self.webpackChunktracetest_docs||[]).push([[1733],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),g=a,f=p["".concat(c,".").concat(g)]||p[g]||d[g]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},6197:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={id:"creating-data-stores",title:"Configuring Data Stores",description:"Tracetest enables configuring data stores visually in the Tracetest Web UI.",hide_table_of_contents:!1,keywords:["tracetest","trace-based testing","observability","distributed tracing","testing"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1698686403/docs/Blog_Thumbnail_14_rsvkmo.jpg"},i=void 0,s={unversionedId:"web-ui/creating-data-stores",id:"web-ui/creating-data-stores",title:"Configuring Data Stores",description:"Tracetest enables configuring data stores visually in the Tracetest Web UI.",source:"@site/docs/web-ui/creating-data-stores.mdx",sourceDirName:"web-ui",slug:"/web-ui/creating-data-stores",permalink:"/web-ui/creating-data-stores",draft:!1,editUrl:"https://github.com/kubeshop/tracetest/blob/main/docs/docs/web-ui/creating-data-stores.mdx",tags:[],version:"current",frontMatter:{id:"creating-data-stores",title:"Configuring Data Stores",description:"Tracetest enables configuring data stores visually in the Tracetest Web UI.",hide_table_of_contents:!1,keywords:["tracetest","trace-based testing","observability","distributed tracing","testing"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1698686403/docs/Blog_Thumbnail_14_rsvkmo.jpg"},sidebar:"tutorialSidebar",previous:{title:"prefer-dns",permalink:"/analyzer/rules/prefer-dns"},next:{title:"Creating Tests",permalink:"/web-ui/creating-tests"}},c={},l=[{value:"Supported Trace Data Stores",id:"supported-trace-data-stores",level:2}],u={toc:l},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This page shows how to configure data stores in the Tracetest Web UI."),(0,a.kt)("p",null,"Open the ",(0,a.kt)("strong",{parentName:"p"},"settings")," and select the ",(0,a.kt)("strong",{parentName:"p"},"Configure Data Store")," tab."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1685971832/docs/Jaeger-settings-1477bdfe17b0675850681e0cfb85859a_ziy7un.png",alt:null})),(0,a.kt)("p",null,"To help you configure the connection, you can use the ",(0,a.kt)("strong",{parentName:"p"},"Test Connection")," button to validate if the connection is successful and Tracetest can fetch traces from the data store."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1685972024/docs/demo.tracetest.io_transaction_QZ3ejgl4R_run_2_3_wrwikl.png",alt:null})),(0,a.kt)("h2",{id:"supported-trace-data-stores"},"Supported Trace Data Stores"),(0,a.kt)("p",null,"Select from the ",(0,a.kt)("a",{parentName:"p",href:"/configuration/overview"},"list of available data stores")," and configure the connection."))}d.isMDXComponent=!0}}]);