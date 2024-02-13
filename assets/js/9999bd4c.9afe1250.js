"use strict";(self.webpackChunktracetest_docs=self.webpackChunktracetest_docs||[]).push([[2708],{3905:(e,t,o)=>{o.d(t,{Zo:()=>l,kt:()=>d});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):c(c({},t),e)),o},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=u(o),g=r,d=m["".concat(s,".").concat(g)]||m[g]||p[g]||a;return o?n.createElement(d,c(c({ref:t},l),{},{components:o})):n.createElement(d,c({ref:t},l))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,c=new Array(a);c[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:r,c[1]=i;for(var u=2;u<a;u++)c[u]=o[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,o)}g.displayName="MDXCreateElement"},16989:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=o(87462),r=(o(67294),o(3905));const a={id:"sumologic",title:"Sumo Logic",description:"Use Sumo Logic as the trace data store for Tracetest. You can use the native connection from Tracetest to pull telemetry data directly from Sumo Logic.",keywords:["tracetest","trace-based testing","observability","distributed tracing","testing"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1698686403/docs/Blog_Thumbnail_14_rsvkmo.jpg"},c=void 0,i={unversionedId:"configuration/connecting-to-data-stores/sumologic",id:"configuration/connecting-to-data-stores/sumologic",title:"Sumo Logic",description:"Use Sumo Logic as the trace data store for Tracetest. You can use the native connection from Tracetest to pull telemetry data directly from Sumo Logic.",source:"@site/docs/configuration/connecting-to-data-stores/sumologic.mdx",sourceDirName:"configuration/connecting-to-data-stores",slug:"/configuration/connecting-to-data-stores/sumologic",permalink:"/configuration/connecting-to-data-stores/sumologic",draft:!1,editUrl:"https://github.com/kubeshop/tracetest/blob/main/docs/docs/configuration/connecting-to-data-stores/sumologic.mdx",tags:[],version:"current",frontMatter:{id:"sumologic",title:"Sumo Logic",description:"Use Sumo Logic as the trace data store for Tracetest. You can use the native connection from Tracetest to pull telemetry data directly from Sumo Logic.",keywords:["tracetest","trace-based testing","observability","distributed tracing","testing"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1698686403/docs/Blog_Thumbnail_14_rsvkmo.jpg"},sidebar:"tutorialSidebar",previous:{title:"SigNoz",permalink:"/configuration/connecting-to-data-stores/signoz"},next:{title:"OpenTelemetry Collector Configuration File Reference",permalink:"/configuration/opentelemetry-collector-configuration-file-reference"}},s={},u=[{value:"Configure Tracetest to Use Sumo Logic as a Trace Data Store",id:"configure-tracetest-to-use-sumo-logic-as-a-trace-data-store",level:2},{value:"Connect Tracetest to Sumo Logic with the Web UI",id:"connect-tracetest-to-sumo-logic-with-the-web-ui",level:2},{value:"Connect Tracetest to Sumo Logic with the CLI",id:"connect-tracetest-to-sumo-logic-with-the-cli",level:2}],l={toc:u},m="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Tracetest fetches traces from ",(0,r.kt)("a",{parentName:"p",href:"https://help.sumologic.com/docs/api/tracing/"},"Sumo Logic's API"),"."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Examples of configuring Tracetest can be found in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubeshop/tracetest/tree/main/examples"},(0,r.kt)("inlineCode",{parentName:"a"},"examples")," folder of the Tracetest GitHub repo"),".")),(0,r.kt)("h2",{id:"configure-tracetest-to-use-sumo-logic-as-a-trace-data-store"},"Configure Tracetest to Use Sumo Logic as a Trace Data Store"),(0,r.kt)("p",null,"Configure Tracetest to fetch trace data from Sumo Logic."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Tracetest uses Sumo Logic's ",(0,r.kt)("strong",{parentName:"p"},"API")," ",(0,r.kt)("inlineCode",{parentName:"p"},"https://api.sumologic.com/api/")," to fetch trace data. Your Sumo Logic URL will differ based on which region you are using. ",(0,r.kt)("a",{parentName:"p",href:"https://help.sumologic.com/docs/api/getting-started/#which-endpoint-should-i-should-use"},"Here's a guide which Sumo Logic API endpoint to use"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You need to know which ",(0,r.kt)("strong",{parentName:"p"},"Access ID"),", ",(0,r.kt)("strong",{parentName:"p"},"Access Key")," you are using. ",(0,r.kt)("a",{parentName:"p",href:"https://help.sumologic.com/docs/manage/security/access-keys/#create-your-access-key"},"Create your ID and Key under Administration > Security > Access Keys in your Sumo Logic account"),"."))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Need help configuring the OpenTelemetry Collector so send trace data from your application to Sumo Logic? Read more in ",(0,r.kt)("a",{parentName:"p",href:"/configuration/opentelemetry-collector-configuration-file-reference"},"the reference page here"),".")),(0,r.kt)("h2",{id:"connect-tracetest-to-sumo-logic-with-the-web-ui"},"Connect Tracetest to Sumo Logic with the Web UI"),(0,r.kt)("p",null,"In the Web UI, (1) open Settings and, on the (2) Configure Data Store tab, select (3) Sumo Logic. Add the Sumo Logic ",(0,r.kt)("strong",{parentName:"p"},"API"),", your ",(0,r.kt)("strong",{parentName:"p"},"Access ID"),", and ",(0,r.kt)("strong",{parentName:"p"},"Access Key"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"sumo logic",src:o(53930).Z,width:"2560",height:"1600"})),(0,r.kt)("h2",{id:"connect-tracetest-to-sumo-logic-with-the-cli"},"Connect Tracetest to Sumo Logic with the CLI"),(0,r.kt)("p",null,"If you prefer using the CLI, you can use this file config."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'---\ntype: DataStore\nspec:\n  name: Sumo Logic\n  type: sumologic\n  sumologic:\n    # The URL will differ based on your location. View this\n    # docs page to figure out which URL you need:\n    # https://help.sumologic.com/docs/api/getting-started/#which-endpoint-should-i-should-use\n    url: "https://api.sumologic.com/api/"\n    # Create your ID and Key under Administration > Security > Access Keys\n    # in your Sumo Logic account:\n    # https://help.sumologic.com/docs/manage/security/access-keys/#create-your-access-key\n    accessID: "your-access-id"\n    accessKey: "your-access-key"\n')),(0,r.kt)("p",null,"Proceed to run this command in the terminal, and specify the file above."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"tracetest apply datastore -f my/data-store/file/location.yaml\n")))}p.isMDXComponent=!0},53930:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/sumologic-settings-bd9dbb2c657ad555fd72f8e598e8066f.png"}}]);