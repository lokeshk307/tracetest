"use strict";(self.webpackChunktracetest_docs=self.webpackChunktracetest_docs||[]).push([[4475],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>v});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,v=p["".concat(c,".").concat(m)]||p[m]||u[m]||s;return n?r.createElement(v,a(a({ref:t},d),{},{components:n})):r.createElement(v,a({ref:t},d))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:o,a[1]=i;for(var l=2;l<s;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},73033:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const s={id:"environments",title:"Environments",description:"Environments are workspaces where you keep tests, test suites, variable sets, and all other Tracetest resources. Build integration and end-to-end tests with OpenTelemetry traces with Tracetest.",hide_table_of_contents:!1,keywords:["tracetest","trace-based testing","observability","distributed tracing","testing"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1698686403/docs/Blog_Thumbnail_14_rsvkmo.jpg"},a=void 0,i={unversionedId:"concepts/environments",id:"concepts/environments",title:"Environments",description:"Environments are workspaces where you keep tests, test suites, variable sets, and all other Tracetest resources. Build integration and end-to-end tests with OpenTelemetry traces with Tracetest.",source:"@site/docs/concepts/environments.mdx",sourceDirName:"concepts",slug:"/concepts/environments",permalink:"/concepts/environments",draft:!1,editUrl:"https://github.com/kubeshop/tracetest/blob/main/docs/docs/concepts/environments.mdx",tags:[],version:"current",frontMatter:{id:"environments",title:"Environments",description:"Environments are workspaces where you keep tests, test suites, variable sets, and all other Tracetest resources. Build integration and end-to-end tests with OpenTelemetry traces with Tracetest.",hide_table_of_contents:!1,keywords:["tracetest","trace-based testing","observability","distributed tracing","testing"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1698686403/docs/Blog_Thumbnail_14_rsvkmo.jpg"},sidebar:"tutorialSidebar",previous:{title:"Organizations",permalink:"/concepts/organizations"},next:{title:"Roles and Permissions",permalink:"/concepts/roles-and-permissions"}},c={},l=[],d={toc:l},p="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Environments are workspaces where you keep tests, test suites, variable sets, and all other Tracetest resources."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1697028288/docs/app.tracetest.io_organizations_ttorg_7e8e767d64dbdb25_environments_ttenv_a39dc7d303f25454_settings_iebfhs.png",alt:null})),(0,o.kt)("p",null,"Connect an Agent and/or Trace Data Store to an environment to start creating tests."),(0,o.kt)("p",null,"You get a ",(0,o.kt)("inlineCode",{parentName:"p"},"localMode")," environment by default. This environment is dedicated to your local development environment for you to play around with while developing your apps."),(0,o.kt)("p",null,"Create additional environments by clicking the ",(0,o.kt)("inlineCode",{parentName:"p"},"+ Create a New Environment")," button."),(0,o.kt)("p",null,"Additional environments can be shared between team members, or used as dedicated environments for QA, staging, test, production, or any other shared environment of your choosing."))}u.isMDXComponent=!0}}]);