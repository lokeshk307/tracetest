"use strict";(self.webpackChunktracetest_docs=self.webpackChunktracetest_docs||[]).push([[5071],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(n),h=a,u=d["".concat(i,".").concat(h)]||d[h]||m[h]||o;return n?r.createElement(u,s(s({ref:t},c),{},{components:n})):r.createElement(u,s({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=h;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[d]="string"==typeof e?e:a,s[1]=p;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},77692:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={id:"running-tracetest-with-opensearch",title:"Node.js and OpenSearch",description:"Quick start on how to configure a Node.js app with OpenTelemetry traces, OpenSearch as a trace data store, and Tracetest for enhancing your E2E and integration tests with trace-based testing.",hide_table_of_contents:!1,keywords:["tracetest","trace-based testing","observability","distributed tracing","testing"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1698686403/docs/Blog_Thumbnail_14_rsvkmo.jpg"},s=void 0,p={unversionedId:"examples-tutorials/recipes/running-tracetest-with-opensearch",id:"examples-tutorials/recipes/running-tracetest-with-opensearch",title:"Node.js and OpenSearch",description:"Quick start on how to configure a Node.js app with OpenTelemetry traces, OpenSearch as a trace data store, and Tracetest for enhancing your E2E and integration tests with trace-based testing.",source:"@site/docs/examples-tutorials/recipes/running-tracetest-with-opensearch.mdx",sourceDirName:"examples-tutorials/recipes",slug:"/examples-tutorials/recipes/running-tracetest-with-opensearch",permalink:"/examples-tutorials/recipes/running-tracetest-with-opensearch",draft:!1,editUrl:"https://github.com/kubeshop/tracetest/blob/main/docs/docs/examples-tutorials/recipes/running-tracetest-with-opensearch.mdx",tags:[],version:"current",frontMatter:{id:"running-tracetest-with-opensearch",title:"Node.js and OpenSearch",description:"Quick start on how to configure a Node.js app with OpenTelemetry traces, OpenSearch as a trace data store, and Tracetest for enhancing your E2E and integration tests with trace-based testing.",hide_table_of_contents:!1,keywords:["tracetest","trace-based testing","observability","distributed tracing","testing"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1698686403/docs/Blog_Thumbnail_14_rsvkmo.jpg"},sidebar:"examplesTutorialsSidebar",previous:{title:"Serverless Node.js and Jaeger with Terraform",permalink:"/examples-tutorials/recipes/running-tracetest-with-aws-terraform"},next:{title:"Node.js and Sumo Logic",permalink:"/examples-tutorials/recipes/running-tracetest-with-sumologic"}},i={},l=[{value:"Sample Node.js App with OpenSearch, OpenTelemetry and Tracetest",id:"sample-nodejs-app-with-opensearch-opentelemetry-and-tracetest",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Project Structure",id:"project-structure",level:2},{value:"1. Node.js App",id:"1-nodejs-app",level:3},{value:"2. Tracetest",id:"2-tracetest",level:3},{value:"Docker Compose Network",id:"docker-compose-network",level:3},{value:"Node.js App",id:"nodejs-app",level:2},{value:"Tracetest",id:"tracetest",level:2},{value:"Run Both the Node.js App and Tracetest",id:"run-both-the-nodejs-app-and-tracetest",level:2},{value:"Learn More",id:"learn-more",level:2}],c={toc:l},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubeshop/tracetest/tree/main/examples/quick-start-opensearch-nodejs"},"Check out the source code on GitHub here."))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://tracetest.io/"},"Tracetest")," is a testing tool based on ",(0,a.kt)("a",{parentName:"p",href:"https://opentelemetry.io/"},"OpenTelemetry")," that allows you to test your distributed application. It allows you to use data from distributed traces generated by OpenTelemetry to validate and assert if your application has the desired behavior defined by your test definitions."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://opensearch.org/"},"OpenSearch")," is a scalable, flexible, and extensible open-source software suite for search, analytics, and observability applications licensed under Apache 2.0. OpenSearch started in 2021 as a fork of Elasticsearch and Kibana, with development led by AWS."),(0,a.kt)("h2",{id:"sample-nodejs-app-with-opensearch-opentelemetry-and-tracetest"},"Sample Node.js App with OpenSearch, OpenTelemetry and Tracetest"),(0,a.kt)("p",null,"This is a simple quick start on how to configure a Node.js app to use OpenTelemetry instrumentation with traces, and Tracetest for enhancing your E2E and integration tests with trace-based testing. The infrastructure will use OpenSearch as the trace data store and OpenTelemetry Collector to receive traces from the Node.js app and send them to OpenSearch."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"You will need ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"Docker")," and ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/install/"},"Docker Compose")," installed on your machine to run this quick start app!"),(0,a.kt)("h2",{id:"project-structure"},"Project Structure"),(0,a.kt)("p",null,"The project is built with Docker Compose. It contains two distinct ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yaml")," files."),(0,a.kt)("h3",{id:"1-nodejs-app"},"1. Node.js App"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yaml")," file and ",(0,a.kt)("inlineCode",{parentName:"p"},"Dockerfile")," in the root directory are for the Node.js app."),(0,a.kt)("h3",{id:"2-tracetest"},"2. Tracetest"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yaml")," file, ",(0,a.kt)("inlineCode",{parentName:"p"},"collector.config.yaml"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"tracetest-provision.yaml"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"tracetest-config.yaml")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"tracetest")," directory are for the setting up Tracetest, OpenSearch and the OpenTelemetry Collector."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"tracetest")," directory is self-contained and will run all the prerequisites for enabling OpenTelemetry traces and trace-based testing with Tracetest."),(0,a.kt)("h3",{id:"docker-compose-network"},"Docker Compose Network"),(0,a.kt)("p",null,"All ",(0,a.kt)("inlineCode",{parentName:"p"},"services")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yaml")," are on the same network and will be reachable by hostname from within other services. E.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"data-prepper:21890")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"collector.config.yaml")," will map to the ",(0,a.kt)("inlineCode",{parentName:"p"},"data-prepper")," service, where the port ",(0,a.kt)("inlineCode",{parentName:"p"},"21890")," is the port where the Data Prepper accepts traces. And, ",(0,a.kt)("inlineCode",{parentName:"p"},"http://opensearch:9200")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"tracetest-provision.yaml")," will map to the ",(0,a.kt)("inlineCode",{parentName:"p"},"opensearch")," service and port ",(0,a.kt)("inlineCode",{parentName:"p"},"9200")," where Tracetest will fetch trace data from OpenSearch."),(0,a.kt)("h2",{id:"nodejs-app"},"Node.js App"),(0,a.kt)("p",null,"The Node.js app is a simple Express app, contained in the ",(0,a.kt)("inlineCode",{parentName:"p"},"app.js")," file."),(0,a.kt)("p",null,"The OpenTelemetry tracing is contained in the ",(0,a.kt)("inlineCode",{parentName:"p"},"tracing.otel.grpc.js")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"tracing.otel.http.js")," files, respectively.\nTraces will be sent to the OpenTelemetry Collector."),(0,a.kt)("p",null,"Here's the content of the ",(0,a.kt)("inlineCode",{parentName:"p"},"tracing.otel.grpc.js")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const opentelemetry = require('@opentelemetry/sdk-node')\nconst { getNodeAutoInstrumentations } = require('@opentelemetry/auto-instrumentations-node')\nconst { OTLPTraceExporter } = require('@opentelemetry/exporter-trace-otlp-grpc');\n\nconst sdk = new opentelemetry.NodeSDK({\n  traceExporter: new OTLPTraceExporter({ url: 'http://otel-collector:4317' }),\n  instrumentations: [getNodeAutoInstrumentations()],\n})\nsdk.start()\n")),(0,a.kt)("p",null,"Depending on which of these you choose, traces will be sent to either the ",(0,a.kt)("inlineCode",{parentName:"p"},"grpc")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"http")," endpoint."),(0,a.kt)("p",null,"The hostnames and ports for these are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"GRPC: ",(0,a.kt)("inlineCode",{parentName:"li"},"http://otel-collector:4317")),(0,a.kt)("li",{parentName:"ul"},"HTTP: ",(0,a.kt)("inlineCode",{parentName:"li"},"http://otel-collector:4318/v1/traces"))),(0,a.kt)("p",null,"Enabling the tracer is done by preloading the trace file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"node -r ./tracing.otel.grpc.js app.js\n")),(0,a.kt)("p",null,"In the ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," you will see two npm scripts for running the respective tracers alongside the ",(0,a.kt)("inlineCode",{parentName:"p"},"app.js"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n  "with-grpc-tracer":"node -r ./tracing.otel.grpc.js app.js",\n  "with-http-tracer":"node -r ./tracing.otel.http.js app.js"\n},\n')),(0,a.kt)("p",null,"To start the server, run this command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm run with-grpc-tracer\n# or\nnpm run with-http-tracer\n")),(0,a.kt)("p",null,"As you can see the ",(0,a.kt)("inlineCode",{parentName:"p"},"Dockerfile")," uses the command above."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'FROM node:slim\nWORKDIR /usr/src/app\nCOPY package*.json ./\nRUN npm install\nCOPY . .\nEXPOSE 8080\nCMD [ "npm", "run", "with-grpc-tracer" ]\n')),(0,a.kt)("p",null,"And, the ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yaml")," contains just one service for the Node.js app."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"version: '3'\nservices:\n  app:\n    image: quick-start-nodejs\n    build: .\n    ports:\n      - \"8080:8080\"\n")),(0,a.kt)("p",null,"To start it, run this command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker compose build # optional if you haven't already built the image\ndocker compose up\n")),(0,a.kt)("p",null,"This will start the Node.js app. But, you're not sending the traces anywhere."),(0,a.kt)("p",null,"Let's fix this by configuring Tracetest and OpenTelemetry Collector."),(0,a.kt)("h2",{id:"tracetest"},"Tracetest"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yaml")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"tracetest")," directory is configured with four services."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Postgres")," - Postgres is a prerequisite for Tracetest to work. It stores trace data when running the trace-based tests."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://opentelemetry.io/docs/collector/"},(0,a.kt)("strong",{parentName:"a"},"OpenTelemetry Collector"))," - A vendor-agnostic implementation of how to receive, process and export telemetry data."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://opensearch.org/"},(0,a.kt)("strong",{parentName:"a"},"OpenSearch"))," - Data store and search engine."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://tracetest.io/"},(0,a.kt)("strong",{parentName:"a"},"Tracetest"))," - Trace-based testing that generates end-to-end tests automatically from traces.")),(0,a.kt)("p",null,"They will start in this order:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Postgres"),(0,a.kt)("li",{parentName:"ol"},"OpenSearch"),(0,a.kt)("li",{parentName:"ol"},"Data Prepper"),(0,a.kt)("li",{parentName:"ol"},"OpenTelemetry Collector"),(0,a.kt)("li",{parentName:"ol"},"Tracetest")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "3"\nservices:\n  tracetest:\n    image: kubeshop/tracetest\n    platform: linux/amd64\n    volumes:\n      - type: bind\n        source: ./tracetest/tracetest-config.yaml\n        target: /app/tracetest.yaml\n      - type: bind\n        source: ./tracetest/tracetest-provision.yaml\n        target: /app/provisioning.yaml\n    ports:\n      - 11633:11633\n    command: --provisioning-file /app/provisioning.yaml\n    depends_on:\n      postgres:\n        condition: service_healthy\n      otel-collector:\n        condition: service_started\n    healthcheck:\n      test: ["CMD", "wget", "--spider", "localhost:11633"]\n      interval: 1s\n      timeout: 3s\n      retries: 60\n    environment:\n      TRACETEST_DEV: ${TRACETEST_DEV}\n\n  postgres:\n    image: postgres:14\n    environment:\n      POSTGRES_PASSWORD: postgres\n      POSTGRES_USER: postgres\n    healthcheck:\n      test: pg_isready -U "$$POSTGRES_USER" -d "$$POSTGRES_DB"\n      interval: 1s\n      timeout: 5s\n      retries: 60\n\n  otel-collector:\n    image: otel/opentelemetry-collector-contrib:0.59.0\n    command:\n      - "--config"\n      - "/otel-local-config.yaml"\n    volumes:\n      - ./tracetest/collector.config.yaml:/otel-local-config.yaml\n    depends_on:\n      data-prepper:\n        condition: service_started\n\n  data-prepper:\n    restart: unless-stopped\n    image: opensearchproject/data-prepper:1.5.1\n    volumes:\n      - ./tracetest/opensearch/opensearch-analytics.yaml:/usr/share/data-prepper/pipelines.yaml\n      - ./tracetest/opensearch/opensearch-data-prepper-config.yaml:/usr/share/data-prepper/data-prepper-config.yaml\n    depends_on:\n      opensearch:\n        condition: service_healthy\n\n  opensearch:\n    image: opensearchproject/opensearch:2.3.0\n    environment:\n      - discovery.type=single-node\n      - bootstrap.memory_lock=true # along with the memlock settings below, disables swapping\n      - "OPENSEARCH_JAVA_OPTS=-Xms512m -Xmx512m" # minimum and maximum Java heap size, recommend setting both to 50% of system RAM\n    volumes:\n      - ./tracetest/opensearch/opensearch.yaml:/usr/share/opensearch/config/opensearch.yml\n    ulimits:\n      memlock:\n        soft: -1\n        hard: -1\n      nofile:\n        soft: 65536 # maximum number of open files for the OpenSearch user, set to at least 65536 on modern systems\n        hard: 65536\n    healthcheck:\n      test: curl -s http://localhost:9200 >/dev/null || exit 1\n      interval: 5s\n      timeout: 10s\n      retries: 5\n\n')),(0,a.kt)("p",null,"Tracetest depends on Postgres and the OpenTelemetry Collector. The OpenTelemetry Collector depends on the Data Prepper that then depends on OpenSearch."),(0,a.kt)("p",null,"Both Tracetest and the OpenTelemetry Collector require config files to be loaded via a volume. The volumes are mapped from the root directory into the ",(0,a.kt)("inlineCode",{parentName:"p"},"tracetest")," directory and the respective config files."),(0,a.kt)("p",null,"OpenSearch and Data Prepper require config files to be loaded via a volume as well. The volumes are mapped from the root directory into the ",(0,a.kt)("inlineCode",{parentName:"p"},"tracetest/opensearch")," directory and the respective config files. Data Prepper will receive trace data from OpenTelemetry Collector and send them along to OpenSearch."),(0,a.kt)("p",null,"To start both the Node.js app and Tracetest, run this command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose -f docker-compose.yaml -f tracetest/docker-compose.yaml up # add --build if the images are not built already\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"tracetest.config.yaml")," file contains the basic setup of connecting Tracetest to the Postgres instance."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"postgres:\n  host: postgres\n  user: postgres\n  password: postgres\n  port: 5432\n  dbname: postgres\n  params: sslmode=disable\n\n")),(0,a.kt)("p",null,"How does Tracetest fetch traces?"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"tracetest-provision.yaml")," file contains the data store setup, which is set to OpenSearch, meaning the traces will be stored in OpenSearch and Tracetest will fetch them from OpenSearch when running tests."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"---\ntype: PollingProfile\nspec:\n  name: Default\n  strategy: periodic\n  default: true\n  periodic:\n    retryDelay: 5s\n    timeout: 10m\n\n---\ntype: DataStore\nspec:\n  name: OpenSearch\n  type: opensearch\n  opensearch:\n    addresses:\n      - http://opensearch:9200\n    index: traces\n\n")),(0,a.kt)("p",null,"How do traces reach OpenSearch?"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"collector.config.yaml")," explains that. It receives traces via either ",(0,a.kt)("inlineCode",{parentName:"p"},"grpc")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"http"),". Then it exports them to the Data Prepper that will parse the trace data and send it to OpenSearch. Data Prepper uses the endpoint ",(0,a.kt)("inlineCode",{parentName:"p"},"data-prepper:21890"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"receivers:\n  otlp:\n    protocols:\n      grpc:\n      http:\n\nprocessors:\n  batch:\n    timeout: 100ms\n\nexporters:\n  logging:\n    loglevel: debug\n  otlp/2:\n    endpoint: data-prepper:21890\n    tls:\n      insecure: true\n      insecure_skip_verify: true\n\nservice:\n  pipelines:\n    traces:\n      receivers: [otlp]\n      processors: [batch]\n      exporters: [otlp/2]\n\n")),(0,a.kt)("h2",{id:"run-both-the-nodejs-app-and-tracetest"},"Run Both the Node.js App and Tracetest"),(0,a.kt)("p",null,"To start both the Node.js app and Tracetest, run this command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose -f docker-compose.yaml -f tracetest/docker-compose.yaml up # add --build if the images are not built already\n")),(0,a.kt)("p",null,"This will start your Tracetest instance on ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:11633/"),"."),(0,a.kt)("p",null,"Open the URL and start creating tests! Make sure to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"http://app:8080/")," URL in your test creation, because your Node.js app and Tracetest are in the same network."),(0,a.kt)("h2",{id:"learn-more"},"Learn More"),(0,a.kt)("p",null,"Feel free to check out our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubeshop/tracetest/tree/main/examples"},"examples in GitHub")," and join our ",(0,a.kt)("a",{parentName:"p",href:"https://dub.sh/tracetest-community"},"Slack Community")," for more info!"))}m.isMDXComponent=!0}}]);