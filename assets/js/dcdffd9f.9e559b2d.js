"use strict";(self.webpackChunktracetest_docs=self.webpackChunktracetest_docs||[]).push([[1460],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=s,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||r;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,o=new Array(r);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:s,o[1]=i;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},86035:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=n(87462),s=(n(67294),n(3905));const r={id:"k6-core",title:"Running Tracetest Core with k6",description:"Tracetest can be integrated and used with k6 by using the tracetest-k6 extension. This guide shows running Tracetest tests via k6.",keywords:["tracetest","trace-based testing","observability","distributed tracing","testing","k6","xk6","load testing","performance testing"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1698686403/docs/Blog_Thumbnail_14_rsvkmo.jpg"},o=void 0,i={unversionedId:"tools-and-integrations/k6-core",id:"tools-and-integrations/k6-core",title:"Running Tracetest Core with k6",description:"Tracetest can be integrated and used with k6 by using the tracetest-k6 extension. This guide shows running Tracetest tests via k6.",source:"@site/docs/tools-and-integrations/k6-core.mdx",sourceDirName:"tools-and-integrations",slug:"/tools-and-integrations/k6-core",permalink:"/tools-and-integrations/k6-core",draft:!1,editUrl:"https://github.com/kubeshop/tracetest/blob/main/docs/docs/tools-and-integrations/k6-core.mdx",tags:[],version:"current",frontMatter:{id:"k6-core",title:"Running Tracetest Core with k6",description:"Tracetest can be integrated and used with k6 by using the tracetest-k6 extension. This guide shows running Tracetest tests via k6.",keywords:["tracetest","trace-based testing","observability","distributed tracing","testing","k6","xk6","load testing","performance testing"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1698686403/docs/Blog_Thumbnail_14_rsvkmo.jpg"},sidebar:"examplesTutorialsSidebar",previous:{title:"Performance and Trace-Based Tests with Tracetest and k6",permalink:"/tools-and-integrations/k6"},next:{title:"Running Tracetest with Testkube",permalink:"/tools-and-integrations/testkube"}},l={},c=[{value:"Why is this important?",id:"why-is-this-important",level:2},{value:"The K6 Tracetest Extension",id:"the-k6-tracetest-extension",level:2},{value:"How It Works",id:"how-it-works",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Installing the K6 Tracetest Extension",id:"installing-the-k6-tracetest-extension",level:2},{value:"Using the Tracetest Extension For Load Tests",id:"using-the-tracetest-extension-for-load-tests",level:2},{value:"Creating your Tracetest Test",id:"creating-your-tracetest-test",level:3},{value:"Extension Features",id:"extension-features",level:3},{value:"Using the Custom Output",id:"using-the-custom-output",level:3},{value:"Result Summary",id:"result-summary",level:3},{value:"Non-Zero Status",id:"non-zero-status",level:3},{value:"Configuration and Environment Variables",id:"configuration-and-environment-variables",level:3},{value:"Full Script Example",id:"full-script-example",level:2},{value:"Get Started",id:"get-started",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,s.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},(0,s.kt)("a",{parentName:"p",href:"https://github.com/kubeshop/tracetest/tree/main/examples/tracetest-core-k6"},"Check out the source code on GitHub here."))),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/kubeshop/tracetest"},"Tracetest Core")," is a testing tool based on ",(0,s.kt)("a",{parentName:"p",href:"https://opentelemetry.io/"},"OpenTelemetry")," that allows you to test your distributed application. It allows you to use data from distributed traces generated by OpenTelemetry to validate and assert if your application has the desired behavior defined by your test definitions."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://k6.io/"},"k6")," is a powerful tool to run load tests against any type of services (REST, GRPC, GraphQL, etc). It is widely used by Developers, Site Reliability Engineers and Software Engineers in Test / QA teams to find potential issues when testing real life scenarios in both controlled environments and production."),(0,s.kt)("h2",{id:"why-is-this-important"},"Why is this important?"),(0,s.kt)("p",null,"K6 is it's a great tool in its own right that allows you to replicate most of the production challenges you might encounter. But, as with all of the tools that only test the initial transaction between the client side and the server, you can only run validations against the immediate response from the service."),(0,s.kt)("div",{style:{position:"relative",paddingBottom:"62.5%",height:"0"}},(0,s.kt)("iframe",{src:"https://www.loom.com/embed/5c5e1261bb0b4fefa30081294378908c",frameborder:"0",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0,width:"100%",style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}})),(0,s.kt)("h2",{id:"the-k6-tracetest-extension"},"The K6 Tracetest Extension"),(0,s.kt)("p",null,"With the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/kubeshop/xk6-tracetest"},"K6 Tracetest extension"),", you will unlock the power of OpenTelemetry that allows you to run deeper testing based on the traces and spans generated by each of the checkpoints that you define within your services."),(0,s.kt)("p",null,"Language and Vendor agnostic, with this extension you can use your existing Tracing Data Store and Setup to leverage the work you have already done to instrument your services."),(0,s.kt)("h2",{id:"how-it-works"},"How It Works"),(0,s.kt)("p",null,"The following is high level sequence diagram on how K6 and Tracetest interact with the different pieces of the system."),(0,s.kt)("mermaid",{value:"sequenceDiagram\n    K6->>+Extension: Trigger HTTP Request\n    Extension->>+Extension: Generate Trace ID and propagation headers\n    Extension->>+Instrumented Service: Sends request with tracing metadata\n    Instrumented Service->>+Data Store: Sends Telemetry data\n    Instrumented Service--\x3e>-Extension: Returns Response\n    Extension->>+Tracetest: Executes the test run using the trace id\n    Tracetest->>+Data Store: Fetches trace using the trace id\n    Data Store--\x3e>-Tracetest: Returns trace\n    Tracetest->>+Tracetest: Runs Assertions against the resulted trace\n    Tracetest--\x3e>-Extension: Returns the run results\n    Extension--\x3e>-K6: Display summary and results"}),(0,s.kt)("h2",{id:"requirements"},"Requirements"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Trecetest Server:")," You'll need to have a running instance of Tracetest which is going to be executing your tests and assertions."),(0,s.kt)("p",null,"To do so, you can follow the instructions defined in the ",(0,s.kt)("a",{parentName:"p",href:"/getting-started/installation"},"documentation"),"."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"XK6:")," To start using the Tracetest k6 binary you need to have the xk6 builder installed on your machine.\nYou can follow the instructions defined in this ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/grafana/xk6/"},"page")," to do that."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"OpenTelemetry Instrumented Service:")," In order to generate traces and spans, the service under test must support the basics for ",(0,s.kt)("a",{parentName:"p",href:"https://opentelemetry.io/docs/reference/specification/context/api-propagators/"},"propagation")," through HTTP requests as well as store traces and spans into a Data Store Backend (Jaeger, Grafana Tempo, OpenSearch, etc)."),(0,s.kt)("h2",{id:"installing-the-k6-tracetest-extension"},"Installing the K6 Tracetest Extension"),(0,s.kt)("p",null,"Installing the K6 Tracetest extension is as easy as running the following command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"xk6 build v0.42.0 --with github.com/kubeshop/xk6-tracetest\n")),(0,s.kt)("p",null,"The instructions can be also found in the main ",(0,s.kt)("a",{parentName:"p",href:"https://k6.io/docs/extensions/get-started/bundle/"},"k6 docs")," in case you need to combine multiple extensions into one binary."),(0,s.kt)("h2",{id:"using-the-tracetest-extension-for-load-tests"},"Using the Tracetest Extension For Load Tests"),(0,s.kt)("p",null,"Once you have installed the k6 Tracetest binary, you can use the base k6 functionality to run load tests against instrumented services and Tracetest to run checks against the resulting telemetry data."),(0,s.kt)("h3",{id:"creating-your-tracetest-test"},"Creating your Tracetest Test"),(0,s.kt)("p",null,"The first step is to create the test that will be used to run the telemetry data validations. In this step, we will create the assertions that will be executed for each of the runs."),(0,s.kt)("p",null,"To do so, you can either use the UI or the CLI."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"UI:")),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Click the Create button from the Tracetest homepage (",(0,s.kt)("a",{parentName:"li",href:"https://demo.tracetest.io/"},"https://demo.tracetest.io/"),")."),(0,s.kt)("li",{parentName:"ol"},"Select ",(0,s.kt)("inlineCode",{parentName:"li"},"TraceID")," as the trigger mode."),(0,s.kt)("li",{parentName:"ol"},"Enter the basic details."),(0,s.kt)("li",{parentName:"ol"},"Choose the name of the variable you'll be using for the trace id (e.g. TRACE_ID)."),(0,s.kt)("li",{parentName:"ol"},"Create and run the test with a random value.")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"CLI:")),(0,s.kt)("p",null,"If you have the CLI configured, you can save the following test definition to a local ",(0,s.kt)("inlineCode",{parentName:"p"},".yaml")," file."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"type: Test\nspec:\n  id: kc_MgKoVR\n  name: K6\n  description: K6\n  trigger:\n    type: traceid\n    traceid:\n      id: ${var:TRACE_ID}\n")),(0,s.kt)("p",null,"And create the test using the following command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"tracetest run test -f <name-of-the-file>\n")),(0,s.kt)("h3",{id:"extension-features"},"Extension Features"),(0,s.kt)("p",null,"The extension includes a new package which includes classes for HTTP requests and the main Tracetest instance."),(0,s.kt)("p",null,"This can be imported as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'import { Http, Tracetest } from "k6/x/tracetest";\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"The HTTP Class:"),"\nThe HTTP class is the primary entry point to execute requests. It extends the default ",(0,s.kt)("inlineCode",{parentName:"p"},"http")," interface by generating parent trace ids and sending them as part of the propagation headers to the request."),(0,s.kt)("p",null,"To create an HTTP instance and use it, you can follow the next code sample."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'// Tracetest test identifier\nconst testId = "<your-test-id>;\n\n// creating the main http instance\nconst http = new Http();\n\n// adding configuration whe creating the instance\nconst http = new Http({\n  // supported propagators tracecontext, baggage, b3, ot, jaeger & xray\n  propagators: [\'b3\'],\n\n  // tracetest configuration\n  tracetest: {\n    // define the triggered test id\n    testId,\n    // used variable name to inject the trace id to the test\n    variableName: \'TRACE_ID\',\n  },\n});\n\nconst url = "http://localhost:8081/pokemon/import";\nconst pokemonId = 6; // charizad\nconst payload = JSON.stringify({\n    id: pokemonId,\n  });\n\n// using the http instance to trigger requests\nconst response = http.post(url, payload, const params = {\n  headers: {\n    "Content-Type": "application/json",\n  },\n};);\n\n// overwriting the instance level config per request\nconst response = http.post(url, payload, {\n  // same as the http instance config\n  tracetest: {\n    testId,\n  },\n  // rest of the regular http options\n  headers: {\n    "Content-Type": "application/json",\n  },\n});\n\n\n// direct access to the trace id from the response object\nconsole.log(response.trace_id)\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"The Tracetest Class:"),"\nThe Tracetest class is the main breach between the k6 load tests and the Tracetest API, used to run the tests, validate the results and generate the summary response."),(0,s.kt)("p",null,"To create a Tracetest instance and use it you can follow the next code sample."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'const tracetest = Tracetest();\n\n// adding your tracetest server configuration\nconst tracetest = Tracetest({\n  serverUrl: "http://localhost:11633",\n  serverPath: "",\n});\n\n// generating the summary\nexport function handleSummary(data) {\n  // combine the default summary with the tracetest summary\n  const tracetestSummary = tracetest.summary();\n  const defaultSummary = textSummary(data);\n  const summary = `\n    ${defaultSummary}\n    ${tracetestSummary}\n  `;\n\n  return {\n    stdout: summary,\n    // JSON summary object for CI/CD proposes\n    "tracetest.json": tracetest.json(),\n  };\n}\n\n// enable this to return a non-zero status code if a tracetest test fails\nexport function teardown() {\n  // returns a non-zero code when any of the tracetest test fails\n  tracetest.validateResult();\n}\n\nconst metadata = {\n  id: "123",\n  url,\n  method: "GET",\n};\n\n// manually running a test\ntracetest.runTest(\n  response.trace_id,\n  {\n    test_id: testId,\n    should_wait: true,\n    variable_name: "TRACE_ID",\n  },\n  metadata\n);\n')),(0,s.kt)("h3",{id:"using-the-custom-output"},"Using the Custom Output"),(0,s.kt)("p",null,"The Tracetest K6 extension includes an output you can use to automatically trigger the test using the predefined configuration.\nIn this case, you can avoid manually using:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'tracetest.runTest(\n  response.trace_id,\n  {\n    test_id: testId,\n    should_wait: true,\n    variable_name: "TRACE_ID",\n  },\n  metadata\n);\n')),(0,s.kt)("p",null,"And just focus on writing the HTTP triggers.\nTo use this feature, you can use the following command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"k6 run <your-script>.js -o xk6-tracetest\n")),(0,s.kt)("h3",{id:"result-summary"},"Result Summary"),(0,s.kt)("p",null,"The Javascript extension includes a feature that you can use to display the results from the Tracetest test runs execution."),(0,s.kt)("p",null,"You can add it to your script using the following:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'// generating the summary\nexport function handleSummary(data) {\n  // combine the default summary with the tracetest summary\n  const tracetestSummary = tracetest.summary();\n  const defaultSummary = textSummary(data);\n  const summary = `\n    ${defaultSummary}\n    ${tracetestSummary}\n  `;\n\n  return {\n    stdout: summary,\n    // JSON summary object for CI/CD proposes\n    "tracetest.json": tracetest.json(),\n  };\n}\n')),(0,s.kt)("p",null,"This will generate an output like the following:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"\n          /\\      |\u203e\u203e| /\u203e\u203e/   /\u203e\u203e/\n     /\\  /  \\     |  |/  /   /  /\n    /  \\/    \\    |     (   /   \u203e\u203e\\\n   /          \\   |  |\\  \\ |  (\u203e)  |\n  / __________ \\  |__| \\__\\ \\_____/ .io\n\n  execution: local\n     script: tracetest/examples/tracetest-k6/import-pokemon.js\n     output: xk6-tracetest-output (TestRunID: 93008)\n\n  scenarios: (100.00%) 1 scenario, 1 max VUs, 36s max duration (incl. graceful stop):\n           * default: 1 looping VUs for 6s (gracefulStop: 30s)\n\nERRO[0017] panic: Tracetest: 5 jobs failed\n\nGoja stack:\nnative\n\nrunning (17.1s), 0/1 VUs, 6 complete and 0 interrupted iterations\ndefault \u2713 [======================================] 1 VUs  6s\n\n         \u2713 is status 200\n     \u2713 body matches de id\n\n     \u2588 teardown\n\n     checks.........................: 100.00% \u2713 12       \u2717 0\n     data_received..................: 1.1 kB  67 B/s\n     data_sent......................: 3.3 kB  190 B/s\n     http_req_blocked...............: avg=89\xb5s    min=3\xb5s    med=12.5\xb5s max=476\xb5s  p(90)=249\xb5s  p(95)=362.49\xb5s\n     http_req_connecting............: avg=37\xb5s    min=0s     med=0s     max=222\xb5s  p(90)=111\xb5s  p(95)=166.49\xb5s\n     http_req_duration..............: avg=4.83ms  min=1.86ms med=5.35ms max=7.61ms p(90)=6.77ms p(95)=7.19ms\n       { expected_response:true }...: avg=4.83ms  min=1.86ms med=5.35ms max=7.61ms p(90)=6.77ms p(95)=7.19ms\n     http_req_failed................: 0.00%   \u2713 0        \u2717 6\n     http_req_receiving.............: avg=51\xb5s    min=32\xb5s   med=52.5\xb5s max=74\xb5s   p(90)=68\xb5s   p(95)=71\xb5s\n     http_req_sending...............: avg=47.83\xb5s min=17\xb5s   med=47\xb5s   max=88\xb5s   p(90)=71\xb5s   p(95)=79.49\xb5s\n     http_req_tls_handshaking.......: avg=0s      min=0s     med=0s     max=0s     p(90)=0s     p(95)=0s\n     http_req_waiting...............: avg=4.74ms  min=1.75ms med=5.23ms max=7.56ms p(90)=6.69ms p(95)=7.12ms\n     http_reqs......................: 6       0.350387/s\n     iteration_duration.............: avg=2.44s   min=1s     med=1s     max=11.08s p(90)=5.03s  p(95)=8.06s\n     iterations.....................: 6       0.350387/s\n     vus............................: 0       min=0      max=1\n     vus_max........................: 1       min=1      max=1\n    [TotalRuns=6, SuccessfulRus=1, FailedRuns=5]\n[FAILED]\n[Request=POST - http://localhost:8081/pokemon/import, TraceID=dc071893eaaca9de301f2147e2be372e, RunState=FINISHED FailingSpecs=true, TracetestURL= http://localhost:3000/test/kc_MgKoVR/run/272]\n[Request=POST - http://localhost:8081/pokemon/import, TraceID=dc0718fff1aca9de30b702c3a1bfad75, RunState=FINISHED FailingSpecs=true, TracetestURL= http://localhost:3000/test/kc_MgKoVR/run/275]\n[Request=POST - http://localhost:8081/pokemon/import, TraceID=dc0718b8daaca9de301e39889afca15b, RunState=FINISHED FailingSpecs=true, TracetestURL= http://localhost:3000/test/kc_MgKoVR/run/276]\n[Request=POST - http://localhost:8081/pokemon/import, TraceID=dc0718a7e2aca9de30955b5203b162a7, RunState=FINISHED FailingSpecs=true, TracetestURL= http://localhost:3000/test/kc_MgKoVR/run/273]\n[Request=POST - http://localhost:8081/pokemon/import, TraceID=dc0718edf9aca9de305916d7b1e7814c, RunState=FINISHED FailingSpecs=true, TracetestURL= http://localhost:3000/test/kc_MgKoVR/run/274]\n[SUCCESSFUL]\n[Request=POST - http://localhost:8081/pokemon/import, TraceID=dc0718c9d2aca9de3044a794f7248eab, RunState=FINISHED FailingSpecs=false, TracetestURL= http://localhost:3000/test/kc_MgKoVR/run/271]\n")),(0,s.kt)("p",null,"This identifies the test that failed and the status and links to look at the results directly from the UI."),(0,s.kt)("h3",{id:"non-zero-status"},"Non-Zero Status"),(0,s.kt)("p",null,"An important use case is to integrate the extension with your CI/CD tools. In this case, the Tracetest class allows you to validate the results during the k6 ",(0,s.kt)("inlineCode",{parentName:"p"},"teardown")," lifecycle event which returns a failed status if any of the test run fails. A failed test can be defined as:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The trace could not be fetched from the data store."),(0,s.kt)("li",{parentName:"ul"},"Any of the test specs failed."),(0,s.kt)("li",{parentName:"ul"},"Could not connect to the Tracetest API."),(0,s.kt)("li",{parentName:"ul"},"An execution error from the Tracetest Server side.")),(0,s.kt)("p",null,"To enable this, you can simply add the following to your test script:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"// enable this to return a non-zero status code if a tracetest test fails\nexport function teardown() {\n  tracetest.validateResult();\n}\n")),(0,s.kt)("h3",{id:"configuration-and-environment-variables"},"Configuration and Environment Variables"),(0,s.kt)("p",null,"If you want to reuse your test scripts for multiple environments and to avoid hardcoding values like the server URL and/or path, use the following configuration variables to achieve this:"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"XK6_TRACETEST_SERVER_URL:")," Allows you to set the server url for the entire test script."),(0,s.kt)("p",null,"Usage:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"XK6_TRACETEST_SERVER_URL=<your-server-url> k6 run <your-script>.js -o xk6-tracetest\n")),(0,s.kt)("p",null,"You can also define the global server url by passing it as an output parameter:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"k6 run <your-script>.js -o xk6-tracetest=<your-server-url>\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"XK6_TRACETEST_SERVER_PATH:")," Allows you to set the server path for the entire test script."),(0,s.kt)("p",null,"Usage:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"XK6_TRACETEST_SERVER_PATH=<your-server-path> k6 run <your-script>.js -o xk6-tracetest\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"XK6_TRACETEST_API_TOKEN:")," Allows you authenticate every operation against done by the scripts against the ",(0,s.kt)("a",{parentName:"p",href:"https://app.tracetest.io/"},"Tracetest Cloud"),"."),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"To find more about the API Tokens visit the ",(0,s.kt)("a",{parentName:"p",href:"../concepts/environment-tokens"},"concepts page"),".")),(0,s.kt)("p",null,"Usage:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"XK6_TRACETEST_API_TOKEN=<your-api-token> k6 run <your-script>.js -o xk6-tracetest\n")),(0,s.kt)("p",null,"Need more ways to configure it? Let us know!"),(0,s.kt)("h2",{id:"full-script-example"},"Full Script Example"),(0,s.kt)("p",null,"The following is a full script example using the k6 Tracetest extension:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'import { check } from "k6";\nimport { textSummary } from "https://jslib.k6.io/k6-summary/0.0.2/index.js";\nimport { Http, Tracetest } from "k6/x/tracetest";\nimport { sleep } from "k6";\n\nexport const options = {\n  vus: 1,\n  duration: "5s",\n  thresholds: {\n    http_req_duration: ["p(95)<1"], // 95% of requests should be below 200ms\n  },\n};\nlet pokemonId = 6; //charizard\nconst http = new Http();\nconst testId = "kc_MgKoVR";\nconst tracetest = Tracetest();\n\nexport default function () {\n  const url = "http://localhost:8081/pokemon/import";\n  const payload = JSON.stringify({\n    id: pokemonId,\n  });\n  const params = {\n    headers: {\n      "Content-Type": "application/json",\n    },\n    tracetest: {\n      testId,\n    },\n  };\n\n  const response = http.post(url, payload, params);\n\n  check(response, {\n    "is status 200": (r) => r.status === 200,\n    "body matches de id": (r) => JSON.parse(r.body).id === pokemonId,\n  });\n\n  pokemonId += 1;\n  sleep(1);\n}\n\n// enable this to return a non-zero status code if a tracetest test fails\nexport function teardown() {\n  tracetest.validateResult();\n}\n\nexport function handleSummary(data) {\n  // combine the default summary with the tracetest summary\n  const tracetestSummary = tracetest.summary();\n  const defaultSummary = textSummary(data);\n  const summary = `\n    ${defaultSummary}\n    ${tracetestSummary}\n  `;\n\n  return {\n    stderr: summary,\n    "tracetest.json": tracetest.json(),\n  };\n}\n')),(0,s.kt)("h2",{id:"get-started"},"Get Started"),(0,s.kt)("p",null,"If you want to learn more or try a full setup using k6 and Tracetest you can head out to this ",(0,s.kt)("inlineCode",{parentName:"p"},"tracetest-k6")," get-started ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/kubeshop/tracetest/tree/main/examples/tracetest-k6"},"example")," we have prepared.\nIt is a step-by-step guide using Docker and our Pokemon demo app that showcases the power of combining k6 and Tracetest."))}d.isMDXComponent=!0}}]);