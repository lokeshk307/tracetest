"use strict";(self.webpackChunktracetest_docs=self.webpackChunktracetest_docs||[]).push([[6188],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(r),k=a,h=p["".concat(l,".").concat(k)]||p[k]||d[k]||s;return r?n.createElement(h,o(o({ref:t},c),{},{components:r})):n.createElement(h,o({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=k;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<s;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},12066:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const s={id:"testkube",title:"Running Tracetest with Testkube",description:"Tracetest can be integrated and used with Testkube. This guide shows running Tracetest tests from Testkube.",keywords:["tracetest","trace-based testing","observability","distributed tracing","testing"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1698686403/docs/Blog_Thumbnail_14_rsvkmo.jpg"},o=void 0,i={unversionedId:"tools-and-integrations/testkube",id:"tools-and-integrations/testkube",title:"Running Tracetest with Testkube",description:"Tracetest can be integrated and used with Testkube. This guide shows running Tracetest tests from Testkube.",source:"@site/docs/tools-and-integrations/testkube.mdx",sourceDirName:"tools-and-integrations",slug:"/tools-and-integrations/testkube",permalink:"/tools-and-integrations/testkube",draft:!1,editUrl:"https://github.com/kubeshop/tracetest/blob/main/docs/docs/tools-and-integrations/testkube.mdx",tags:[],version:"current",frontMatter:{id:"testkube",title:"Running Tracetest with Testkube",description:"Tracetest can be integrated and used with Testkube. This guide shows running Tracetest tests from Testkube.",keywords:["tracetest","trace-based testing","observability","distributed tracing","testing"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1698686403/docs/Blog_Thumbnail_14_rsvkmo.jpg"},sidebar:"examplesTutorialsSidebar",previous:{title:"Running Tracetest Core with k6",permalink:"/tools-and-integrations/k6-core"},next:{title:"\ud83c\udf99\ufe0f Webinars",permalink:"/examples-tutorials/webinars"}},l={},u=[{value:"How does it work?",id:"how-does-it-work",level:2},{value:"Quickstart",id:"quickstart",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"1. Deploy the Tracetest Executor",id:"1-deploy-the-tracetest-executor",level:3},{value:"2. Create a Test",id:"2-create-a-test",level:3},{value:"3. Run the Test",id:"3-run-the-test",level:3}],c={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://tracetest.io/"},"Tracetest")," is a testing tool based on ",(0,a.kt)("a",{parentName:"p",href:"https://opentelemetry.io/"},"OpenTelemetry")," that permits you to test your distributed application. It allows you to use the trace data generated by your OpenTelemetry tools to check and assert if your application has the desired behavior defined by your test definitions."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://testkube.io/"},"Testkube")," is a Kubernetes-native testing framework for Testers and Developers that allows you to automate the executions of your existing testing tools inside your Kubernetes cluster, removing all the complexity from your CI/CD/GitOps pipelines."),(0,a.kt)("p",null,"For Testkube, tests are meant to be part of a cluster's state and can be executed as needed:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Manually via kubectl CLI."),(0,a.kt)("li",{parentName:"ul"},"Externally triggered via API (CI, external tooling, etc)."),(0,a.kt)("li",{parentName:"ul"},"Automatically on deployment of annotated/labeled services/pods/etc.")),(0,a.kt)("p",null,"By using the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubeshop/testkube-executor-tracetest"},"Testkube Tracetest Executor")," you can unlock Testkube's capacity in conjunction with Tracetest, and leverage the work you have already done to instrument your services."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If you are using the latest version of Testkube, the Tracetest Executor will be bundled in Testkube by default. Read more in the Testkube docs, ",(0,a.kt)("a",{parentName:"p",href:"https://docs.testkube.io/test-types/executor-tracetest/"},"here"),"."),(0,a.kt)("p",{parentName:"admonition"},"Or, check out the hands-on workshop on YouTube!"),(0,a.kt)("iframe",{width:"100%",height:"250",src:"https://www.youtube.com/embed/nAp3zYgykok",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})),(0,a.kt)("h2",{id:"how-does-it-work"},"How does it work?"),(0,a.kt)("p",null,"The following is high level sequence diagram on how Testkube and Tracetest interact with the different pieces of the system:"),(0,a.kt)("mermaid",{value:"sequenceDiagram\n    testkube client->>+testkube: Trigger Testkube test run\n    testkube->>+executor CRDs: Get executor details\n    executor CRDs--\x3e>-testkube: Send details\n    testkube->>+tracetest executor job: Schedules execution\n    tracetest executor job->>+tracetest executor job: Configure Tracetest CLI\n    tracetest executor job->>+tracetest server: Executes the Tracetest test run\n    tracetest server->>+instrumented service: Trigger request\n    instrumented service--\x3e>-tracetest server: Get response\n    instrumented service->>+data store: Send telemetry data\n    tracetest server->>+data store: Fetch trace\n    data store--\x3e>-tracetest server: Get trace\n    tracetest server->>+tracetest server: Run assertions\n    tracetest server--\x3e>-tracetest executor job: Return test run results\n    tracetest executor job--\x3e>-testkube: Return test run results\n    testkube--\x3e>-testkube client: Send details"}),(0,a.kt)("h2",{id:"quickstart"},"Quickstart"),(0,a.kt)("p",null,"This guide will show how to use Testkube alongside Tracetest to run your tests in a Kubernetes cluster."),(0,a.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"In your Kubernetes cluster you should have:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Testkube"),": Use HELM or the Testkube CLI to ",(0,a.kt)("a",{parentName:"li",href:"https://kubeshop.github.io/testkube/installing"},"install")," Testkube Server components in your cluster."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Tracetest"),": You need a running instance of ",(0,a.kt)("a",{parentName:"li",href:"https://docs.tracetest.io/getting-started/installation/"},"Tracetest")," or ",(0,a.kt)("a",{parentName:"li",href:"https://docs.tracetest.io/core/getting-started/installation/"},"Tracetest Core")," which is going to be executing your assertions. To do so, you can follow the instructions defined in the Tracetest ",(0,a.kt)("a",{parentName:"li",href:"https://docs.tracetest.io/getting-started/overview"},"documentation"),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"OpenTelemetry Instrumented Service"),": In order to generate traces and spans, the service under test must support the basics for ",(0,a.kt)("a",{parentName:"li",href:"https://opentelemetry.io/docs/reference/specification/context/api-propagators/"},"propagation")," through HTTP requests, and also store traces and spans into a Data Store Backend (Jaeger, Grafana Tempo, OpenSearch, etc) or use the ",(0,a.kt)("a",{parentName:"li",href:"https://docs.tracetest.io/configuration/overview#using-tracetest-without-a-trace-data-store"},"OpenTelemetry Collector"),".")),(0,a.kt)("p",null,"On your machine you should have:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Kubectl")," ",(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/"},"installed"),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Testkube CLI")," ",(0,a.kt)("a",{parentName:"li",href:"https://kubeshop.github.io/testkube/installing#1-installing-the-testkube-cli"},"installed"),".")),(0,a.kt)("p",null,"With everything set up, we will start configuring Testkube and Tracetest."),(0,a.kt)("h3",{id:"1-deploy-the-tracetest-executor"},"1. Deploy the Tracetest Executor"),(0,a.kt)("p",null,"Testkube works with the concept of ",(0,a.kt)("a",{parentName:"p",href:"https://kubeshop.github.io/testkube/test-types/executor-custom"},"Executors"),". An Executor is a wrapper around a testing framework (Tracetest in this case) in the form of a Docker container and runs as a Kubernetes job. To start, you need to register and deploy the Tracetest executor in your cluster using the Testkube CLI:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl testkube create executor --image kubeshop/testkube-executor-tracetest:latest --types "tracetest/test" --name tracetest-executor --icon-uri icon --content-type string --content-type file-uri\n')),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If you are using the latest version of Testkube, the Tracetest Executor will be bundled in Testkube by default. Read more in the Testkube docs, ",(0,a.kt)("a",{parentName:"p",href:"https://docs.testkube.io/test-types/executor-tracetest/"},"here"),".")),(0,a.kt)("h3",{id:"2-create-a-test"},"2. Create a Test"),(0,a.kt)("p",null,"Now you need a Tracetest test. Have a look at the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.tracetest.io/cli/creating-tests"},"Tracetest documentation")," for details on writing tests. Here is a simple test definition example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'type: Test\nspec:\n  id: R5NITR14g\n  name: Pokeshop - List\n  description: Get a Pokemon\n  trigger:\n    type: http\n    httpRequest:\n      url: http://demo-pokemon-api.demo/pokemon?take=20&skip=0\n      method: GET\n      headers:\n        - key: Content-Type\n          value: application/json\n  specs:\n    - selector: span[tracetest.span.type="http"]\n      assertions:\n        - attr:http.method = "GET"\n    - selector: span[tracetest.span.type="database"]\n      assertions:\n        - attr:db.name = "pokeshop"\n')),(0,a.kt)("p",null,"Execute the following command to create the test executor object in Testkube. Do not forget to provide the path to your Tracetest definition file using the ",(0,a.kt)("inlineCode",{parentName:"p"},"--file")," argument, and also the follow variables:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"If you are using ",(0,a.kt)("a",{parentName:"strong",href:"https://docs.tracetest.io/core/getting-started/installation/"},"Tracetest Core")),": Define the Tracetest Server endpoint using the ",(0,a.kt)("inlineCode",{parentName:"li"},"TRACETEST_ENDPOINT")," ",(0,a.kt)("inlineCode",{parentName:"li"},"--variable")," (remember that the TRACETEST_ENDPOINT should be reachable from the Testkube instance).")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl testkube create test --file my/file/location.yaml --type "tracetest/test" --name pokeshop-tracetest-test --variable TRACETEST_ENDPOINT=http://tracetest\n')),(0,a.kt)("p",null,"Note: In case you are doing a port forward to your Tracetest instance and you want to have the correct Tracetest URL in your results printed by the Testkube output, you can also provide an optional ",(0,a.kt)("inlineCode",{parentName:"p"},"TRACETEST_OUTPUT_ENDPOINT")," variable (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"--variable TRACETEST_OUTPUT_ENDPOINT=http://localhost:11633"),")."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"If you are using ",(0,a.kt)("a",{parentName:"strong",href:"https://docs.tracetest.io/getting-started/installation/"},"Tracetest")," on ",(0,a.kt)("inlineCode",{parentName:"strong"},"app.tracetest.io")," "),": Define your ",(0,a.kt)("a",{parentName:"li",href:"/concepts/environment-tokens"},"token"),", ",(0,a.kt)("a",{parentName:"li",href:"/concepts/environments"},"environment")," and ",(0,a.kt)("a",{parentName:"li",href:"/concepts/organizations"},"organization")," using the ",(0,a.kt)("inlineCode",{parentName:"li"},"TRACETEST_TOKEN"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"TRACETEST_ENVIRONMENT")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"TRACETEST_ORGANIZATION")," variables")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl testkube create test --file my/file/location.yaml --type "tracetest/test" --name pokeshop-tracetest-test --variable TRACETEST_TOKEN=your-token --variable TRACETEST_ENVIRONMENT=your-environment-id --variable TRACETEST_ORGANIZATION=your-organization-id\n')),(0,a.kt)("h3",{id:"3-run-the-test"},"3. Run the Test"),(0,a.kt)("p",null,"Finally, to see the integration working, run the test by executing the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl testkube run test --watch pokeshop-tracetest-test\n")))}d.isMDXComponent=!0}}]);