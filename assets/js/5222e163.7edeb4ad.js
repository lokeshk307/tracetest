"use strict";(self.webpackChunktracetest_docs=self.webpackChunktracetest_docs||[]).push([[5068],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>h});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(r),m=s,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(h,a(a({ref:t},l),{},{components:r})):n.createElement(h,a({ref:t},l))}));function h(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=r.length,a=new Array(o);a[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:s,a[1]=i;for(var p=2;p<o;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},74070:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(87462),s=(r(67294),r(3905));const o={id:"get-recommended-products",title:"OpenTelemetry Store - Get recommended products",description:"The OpenTelemetry Demo is an example application published by the OpenTelemtry CNCF project. This use case covers viewing recommended products before adding them to the shopping cart.",hide_table_of_contents:!1,keywords:["tracetest","trace-based testing","observability","distributed tracing","testing"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1698686403/docs/Blog_Thumbnail_14_rsvkmo.jpg"},a=void 0,i={unversionedId:"live-examples/opentelemetry-store/use-cases/get-recommended-products",id:"live-examples/opentelemetry-store/use-cases/get-recommended-products",title:"OpenTelemetry Store - Get recommended products",description:"The OpenTelemetry Demo is an example application published by the OpenTelemtry CNCF project. This use case covers viewing recommended products before adding them to the shopping cart.",source:"@site/docs/live-examples/opentelemetry-store/use-cases/get-recommended-products.mdx",sourceDirName:"live-examples/opentelemetry-store/use-cases",slug:"/live-examples/opentelemetry-store/use-cases/get-recommended-products",permalink:"/live-examples/opentelemetry-store/use-cases/get-recommended-products",draft:!1,editUrl:"https://github.com/kubeshop/tracetest/blob/main/docs/docs/live-examples/opentelemetry-store/use-cases/get-recommended-products.mdx",tags:[],version:"current",frontMatter:{id:"get-recommended-products",title:"OpenTelemetry Store - Get recommended products",description:"The OpenTelemetry Demo is an example application published by the OpenTelemtry CNCF project. This use case covers viewing recommended products before adding them to the shopping cart.",hide_table_of_contents:!1,keywords:["tracetest","trace-based testing","observability","distributed tracing","testing"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1698686403/docs/Blog_Thumbnail_14_rsvkmo.jpg"},sidebar:"liveExamplesSidebar",previous:{title:"OpenTelemetry Store - Checkout",permalink:"/live-examples/opentelemetry-store/use-cases/checkout"},next:{title:"OpenTelemetry Store - User Purchasing Products",permalink:"/live-examples/opentelemetry-store/use-cases/user-purchasing-products"}},c={},p=[{value:"Building a Test for This Scenario",id:"building-a-test-for-this-scenario",level:2},{value:"Traces",id:"traces",level:3},{value:"Assertions",id:"assertions",level:3},{value:"Test Definition",id:"test-definition",level:3}],l={toc:p},d="wrapper";function u(e){let{components:t,...o}=e;return(0,s.kt)(d,(0,n.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"In this use case, we want to validate the following story:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"As a consumer, after landing at home page\nI want to see what are the recommended products\nSo I can add them into my shopping cart.\n")),(0,s.kt)("p",null,"You can trigger this use case by calling the endpoint ",(0,s.kt)("inlineCode",{parentName:"p"},"GET /api/recommendations?productIds=&sessionId={some-uuid}&currencyCode=")," from the Frontend service. It should return a payload similar to this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "id": "0PUK6V6EV0",\n        "name": "Solar System Color Imager",\n        "description": "You have your new telescope and have observed Saturn and Jupiter. Now you\'re ready to take the next step and start imaging them. But where do you begin? The NexImage 10 Solar System Imager is the perfect solution.",\n        "picture": "/images/products/SolarSystemColorImager.jpg",\n        "priceUsd": {\n            "currencyCode": "USD",\n            "units": 175,\n            "nanos": 0\n        },\n        "categories": [\n            "accessories",\n            "telescopes"\n        ]\n    },\n    // ...\n]\n')),(0,s.kt)("h2",{id:"building-a-test-for-this-scenario"},"Building a Test for This Scenario"),(0,s.kt)("p",null,"Using Tracetest, we can ",(0,s.kt)("a",{parentName:"p",href:"/web-ui/creating-tests"},"create a test")," that will execute an API call on ",(0,s.kt)("inlineCode",{parentName:"p"},"GET /api/recommendations?productIds=&sessionId={some-uuid}&currencyCode=")," and validate the following properties:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"It should have 4 products on this list."),(0,s.kt)("li",{parentName:"ul"},"The feature flagger should be called for one product.")),(0,s.kt)("h3",{id:"traces"},"Traces"),(0,s.kt)("p",null,"Running these tests for the first time will create an Observability trace like the image below, where you can see spans for the API calls (HTTP and gRPC) and database calls:\n",(0,s.kt)("img",{src:r(18142).Z,width:"2228",height:"2000"})),(0,s.kt)("h3",{id:"assertions"},"Assertions"),(0,s.kt)("p",null,"With this trace, now we can build ",(0,s.kt)("a",{parentName:"p",href:"/concepts/assertions"},"assertions")," on Tracetest and validate the properties:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"It should have 4 products on this list."),"\n",(0,s.kt)("img",{src:r(93942).Z,width:"3164",height:"850"}))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"The feature flagger should be called for one product."),"\n",(0,s.kt)("img",{src:r(35804).Z,width:"3152",height:"750"})))),(0,s.kt)("p",null,"Now you can validate this entire use case."),(0,s.kt)("h3",{id:"test-definition"},"Test Definition"),(0,s.kt)("p",null,"To replicate this entire test on Tracetest, you can replicate these steps on our Web UI or using our CLI by saving the following test definition as the file ",(0,s.kt)("inlineCode",{parentName:"p"},"test-definition.yml")," and later running:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"tracetest run test -f test-definition.yml\n")),(0,s.kt)("p",null,"We are assuming that the Frontend service is exposed on ",(0,s.kt)("inlineCode",{parentName:"p"},"http://otel-demo-frontend:8080"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'type: Test\nspec:\n  name: OpenTelemetry Store - Get recommended products\n  trigger:\n    type: http\n    httpRequest:\n      url: http://otel-demo-frontend:8080/api/recommendations?productIds=&sessionId=8c0465e2-32bb-4ecb-a9c8-5a2861629ff1&currencyCode=\n      method: GET\n      headers:\n      - key: Content-Type\n        value: application/json\n  specs:\n  - selector: span[tracetest.span.type="rpc" name="grpc.hipstershop.ProductCatalogService/GetProduct"\n      rpc.system="grpc" rpc.method="GetProduct" rpc.service="hipstershop.ProductCatalogService"]\n    assertions:\n    - attr:tracetest.selected_spans.count  =  4\n  - selector: span[tracetest.span.type="rpc" name="/hipstershop.FeatureFlagService/GetFlag"\n      rpc.system="grpc" rpc.method="GetFlag" rpc.service="hipstershop.FeatureFlagService"]\n    assertions:\n    - attr:tracetest.selected_spans.count  =  1\n')))}u.isMDXComponent=!0},35804:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/get-recommended-products-feature-flagger-test-spec-c858e453dc7cd2e78f813c6a66d94570.png"},93942:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/get-recommended-products-get-product-test-spec-53951fd0269678842ffd35394f162598.png"},18142:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/get-recommended-products-trace-d068772054e457b60ab936c103b15392.png"}}]);