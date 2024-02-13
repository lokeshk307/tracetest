"use strict";(self.webpackChunktracetest_docs=self.webpackChunktracetest_docs||[]).push([[1133],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),l=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(a),m=n,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return a?r.createElement(h,s(s({ref:t},c),{},{components:a})):r.createElement(h,s({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:n,s[1]=i;for(var l=2;l<o;l++)s[l]=a[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},62e3:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=a(87462),n=(a(67294),a(3905));const o={id:"running-tracetest-with-aws-x-ray-adot",title:"Node.js with AWS X-Ray (Node.js SDK) and AWS Distro for OpenTelemetry",description:"Quick start on how to configure a Node.js app with OpenTelemetry traces, AWS X-Ray as a trace data store, including AWS Distro for OpenTelemetry, and Tracetest for enhancing your E2E and integration tests with trace-based testing.",hide_table_of_contents:!1,keywords:["tracetest","trace-based testing","observability","distributed tracing","testing"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1698686403/docs/Blog_Thumbnail_14_rsvkmo.jpg"},s=void 0,i={unversionedId:"examples-tutorials/recipes/running-tracetest-with-aws-x-ray-adot",id:"examples-tutorials/recipes/running-tracetest-with-aws-x-ray-adot",title:"Node.js with AWS X-Ray (Node.js SDK) and AWS Distro for OpenTelemetry",description:"Quick start on how to configure a Node.js app with OpenTelemetry traces, AWS X-Ray as a trace data store, including AWS Distro for OpenTelemetry, and Tracetest for enhancing your E2E and integration tests with trace-based testing.",source:"@site/docs/examples-tutorials/recipes/running-tracetest-with-aws-x-ray-adot.mdx",sourceDirName:"examples-tutorials/recipes",slug:"/examples-tutorials/recipes/running-tracetest-with-aws-x-ray-adot",permalink:"/examples-tutorials/recipes/running-tracetest-with-aws-x-ray-adot",draft:!1,editUrl:"https://github.com/kubeshop/tracetest/blob/main/docs/docs/examples-tutorials/recipes/running-tracetest-with-aws-x-ray-adot.mdx",tags:[],version:"current",frontMatter:{id:"running-tracetest-with-aws-x-ray-adot",title:"Node.js with AWS X-Ray (Node.js SDK) and AWS Distro for OpenTelemetry",description:"Quick start on how to configure a Node.js app with OpenTelemetry traces, AWS X-Ray as a trace data store, including AWS Distro for OpenTelemetry, and Tracetest for enhancing your E2E and integration tests with trace-based testing.",hide_table_of_contents:!1,keywords:["tracetest","trace-based testing","observability","distributed tracing","testing"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1698686403/docs/Blog_Thumbnail_14_rsvkmo.jpg"},sidebar:"examplesTutorialsSidebar",previous:{title:"Node.js and AWS X-Ray (Node.js SDK)",permalink:"/examples-tutorials/recipes/running-tracetest-with-aws-x-ray"},next:{title:"Pokeshop API with AWS X-Ray (Node.js SDK) and AWS Distro for OpenTelemetry",permalink:"/examples-tutorials/recipes/running-tracetest-with-aws-x-ray-pokeshop"}},p={},l=[{value:"Sample Node.js API with AWS X-Ray (Node.js SDK), AWS Distro for OpenTelemetry and Tracetest",id:"sample-nodejs-api-with-aws-x-ray-nodejs-sdk-aws-distro-for-opentelemetry-and-tracetest",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Project Structure",id:"project-structure",level:2},{value:"1. Node.js App",id:"1-nodejs-app",level:3},{value:"2. Tracetest",id:"2-tracetest",level:3},{value:"Docker Compose Network",id:"docker-compose-network",level:3},{value:"Node.js App",id:"nodejs-app",level:2},{value:"Tracetest",id:"tracetest",level:2},{value:"Run Both the Node.js App and Tracetest",id:"run-both-the-nodejs-app-and-tracetest",level:2},{value:"Learn More",id:"learn-more",level:2}],c={toc:l},d="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/kubeshop/tracetest/tree/main/examples/tracetest-amazon-x-ray-adot"},"Check out the source code on GitHub here."))),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://tracetest.io/"},"Tracetest")," is a testing tool based on ",(0,n.kt)("a",{parentName:"p",href:"https://opentelemetry.io/"},"OpenTelemetry")," that allows you to test your distributed application. It allows you to use data from distributed traces generated by OpenTelemetry to validate and assert if your application has the desired behavior defined by your test definitions."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://aws.amazon.com/xray/"},"AWS X-Ray")," provides a complete view of requests as they travel through your application and filters visual data across payloads, functions, traces, services, APIs and more with no-code and low-code motions."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://aws-otel.github.io/docs/getting-started/collector"},"AWS Distro for OpenTelemetry (ADOT)")," is a secure, production-ready, AWS-supported distribution of the OpenTelemetry project. Part of the Cloud Native Computing Foundation, OpenTelemetry provides open source APIs, libraries and agents to collect distributed traces and metrics for application monitoring."),(0,n.kt)("h2",{id:"sample-nodejs-api-with-aws-x-ray-nodejs-sdk-aws-distro-for-opentelemetry-and-tracetest"},"Sample Node.js API with AWS X-Ray (Node.js SDK), AWS Distro for OpenTelemetry and Tracetest"),(0,n.kt)("p",null,"This is a simple quick start guide on how to configure a Node.js app to use instrumentation with traces and Tracetest for enhancing your E2E and integration tests with trace-based testing. The infrastructure will use AWS X-Ray as the trace data store, the ADOT as a middleware and a Node.js app to generate the telemetry data."),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"You will need ",(0,n.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"Docker")," and ",(0,n.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/install/"},"Docker Compose")," installed on your machine to run this quick start app!"),(0,n.kt)("h2",{id:"project-structure"},"Project Structure"),(0,n.kt)("p",null,"The project is built with Docker Compose."),(0,n.kt)("h3",{id:"1-nodejs-app"},"1. Node.js App"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"Dockerfile")," in the root directory is for the Node.js app."),(0,n.kt)("h3",{id:"2-tracetest"},"2. Tracetest"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"docker-compose.yaml")," file, ",(0,n.kt)("inlineCode",{parentName:"p"},"tracetest.provision.yaml"),", and ",(0,n.kt)("inlineCode",{parentName:"p"},"tracetest-config.yaml")," in the ",(0,n.kt)("inlineCode",{parentName:"p"},"root")," directory are for the setting up the Node.js App, Tracetest and ADOT Collector."),(0,n.kt)("h3",{id:"docker-compose-network"},"Docker Compose Network"),(0,n.kt)("p",null,"All ",(0,n.kt)("inlineCode",{parentName:"p"},"services")," in the ",(0,n.kt)("inlineCode",{parentName:"p"},"docker-compose.yaml")," are on the same network and will be reachable by hostname from within other services. For example, ",(0,n.kt)("inlineCode",{parentName:"p"},"adot-collector:2000")," in the ",(0,n.kt)("inlineCode",{parentName:"p"},"src/index.js")," will map to the ",(0,n.kt)("inlineCode",{parentName:"p"},"adot-collector")," service, where port ",(0,n.kt)("inlineCode",{parentName:"p"},"2000")," is the port where the X-Ray Daemon accepts telemetry data."),(0,n.kt)("h2",{id:"nodejs-app"},"Node.js App"),(0,n.kt)("p",null,"The Node.js app is a simple Express app, contained in the ",(0,n.kt)("inlineCode",{parentName:"p"},"src/index.js")," file."),(0,n.kt)("p",null,"It is instrumented using ",(0,n.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/xray/latest/devguide/xray-sdk-nodejs.html"},"AWS X-Ray SDK"),", sending the data to the ADOT collector that will push the telemetry information to both the AWS service and the Tracetest OLTP endpoint."),(0,n.kt)("p",null,"The key instrumentation section from the ",(0,n.kt)("inlineCode",{parentName:"p"},"src/index.js")," file."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'const AWSXRay = require("aws-xray-sdk");\nconst XRayExpress = AWSXRay.express;\nconst express = require("express");\n\nAWSXRay.setDaemonAddress("adot-collector:2000");\n\n// Capture all AWS clients we create\nconst AWS = AWSXRay.captureAWS(require("aws-sdk"));\nAWS.config.update({\n  region: process.env.AWS_REGION || "us-west-2",\n});\n\n// Capture all outgoing https requests\nAWSXRay.captureHTTPsGlobal(require("https"));\nconst https = require("https");\n\nconst app = express();\nconst port = 3000;\n\napp.use(XRayExpress.openSegment("Tracetest"));\n')),(0,n.kt)("p",null,"To start the server run this command."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm start\n")),(0,n.kt)("p",null,"As you can see the ",(0,n.kt)("inlineCode",{parentName:"p"},"Dockerfile")," uses the command above."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'FROM node:slim\nWORKDIR /usr/src/app\n\nCOPY ./src/package*.json ./\n\nRUN npm install\nCOPY ./src .\n\nEXPOSE 3000\nCMD [ "npm", "start" ]\n')),(0,n.kt)("h2",{id:"tracetest"},"Tracetest"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"docker-compose.yaml")," includes three other services."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Postgres")," - Postgres is a prerequisite for Tracetest to work. It stores trace data when running the trace-based tests."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://aws-otel.github.io/docs/getting-started/collector"},(0,n.kt)("strong",{parentName:"a"},"AWS Distro for OpenTelemetry (ADOT)"))," - Software application that listens for traffic on UDP port 2000, gathers raw segment data and relays it to the AWS X-Ray API. The daemon works in conjunction with the AWS X-Ray SDKs and must be running so that data sent by the SDKs can reach the X-Ray service."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://tracetest.io/"},(0,n.kt)("strong",{parentName:"a"},"Tracetest"))," - Trace-based testing that generates end-to-end tests automatically from traces.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "3"\n\nservices:\n  tracetest:\n    image: kubeshop/tracetest:${TAG:-latest}\n    platform: linux/amd64\n    volumes:\n      - type: bind\n        source: ./tracetest-config.yaml\n        target: /app/tracetest.yaml\n      - type: bind\n        source: ./tracetest.provision.yaml\n        target: /app/provisioning.yaml\n    ports:\n      - 11633:11633\n    command: --provisioning-file /app/provisioning.yaml\n    extra_hosts:\n      - "host.docker.internal:host-gateway"\n    depends_on:\n      postgres:\n        condition: service_healthy\n      adot-collector:\n        condition: service_started\n    healthcheck:\n      test: ["CMD", "wget", "--spider", "localhost:11633"]\n      interval: 1s\n      timeout: 3s\n      retries: 60\n\n  postgres:\n    image: postgres:14\n    environment:\n      POSTGRES_PASSWORD: postgres\n      POSTGRES_USER: postgres\n    healthcheck:\n      test: pg_isready -U "$$POSTGRES_USER" -d "$$POSTGRES_DB"\n      interval: 1s\n      timeout: 5s\n      retries: 60\n    ports:\n      - 5432:5432\n\n  adot-collector:\n    image: amazon/aws-otel-collector:latest\n    command:\n      - "--config"\n      - "/otel-local-config.yaml"\n    volumes:\n      - ./collector.config.yaml:/otel-local-config.yaml\n    environment:\n      AWS_ACCESS_KEY_ID: ${AWS_ACCESS_KEY_ID}\n      AWS_SECRET_ACCESS_KEY: ${AWS_SECRET_ACCESS_KEY}\n      AWS_SESSION_TOKEN: ${AWS_SESSION_TOKEN}\n      AWS_REGION: ${AWS_REGION}\n    ports:\n      - 4317:4317\n      - 2000:2000\n')),(0,n.kt)("p",null,"Tracetest depends on Postgres and the ADOT collector. Tracetest requires config files to be loaded via a volume. The volumes are mapped from the root directory into the ",(0,n.kt)("inlineCode",{parentName:"p"},"root")," directory and the respective config files."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"tracetest.config.yaml")," file contains the basic setup of connecting Tracetest to the Postgres instance."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"postgres:\n  host: postgres\n  user: postgres\n  password: postgres\n  port: 5432\n  dbname: postgres\n  params: sslmode=disable\n")),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"tracetest.provision.yaml")," file defines the trace data store, set to the OTel Collector, meaning the traces will be sent to the ADOT instance where later on will be pushed to the AWX X-Ray service and the OTLP Tracetest endpoint."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"---\ntype: DataStore\nspec:\n  name: otlp\n  type: otlp\n\n")),(0,n.kt)("p",null,"But how does Tracetest fetch traces?"),(0,n.kt)("p",null,"The ADOT collector is configured with the ",(0,n.kt)("inlineCode",{parentName:"p"},"awsxray")," receiver and exporting the OpenTelemetry format directly intro Tracetest."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"receivers:\n  awsxray:\n    transport: udp\n\nprocessors:\n  batch:\n\nexporters:\n  awsxray:\n    region: ${AWS_REGION}\n  otlp/tracetest:\n    endpoint: tracetest:4317\n    tls:\n      insecure: true\n\nservice:\n  pipelines:\n    traces/tracetest:\n      receivers: [awsxray]\n      processors: [batch]\n      exporters: [otlp/tracetest]\n    traces/awsxray:\n      receivers: [awsxray]\n      exporters: [awsxray]\n")),(0,n.kt)("p",null,"How do traces reach AWS X-Ray?"),(0,n.kt)("p",null,"The application code in the ",(0,n.kt)("inlineCode",{parentName:"p"},"src/index.js")," file uses the native AWS SDK X-Ray library which sends telemetry data to the ADOT Collector to be processed and then sent to the configured AWS X-Ray SaaS and Tracetest."),(0,n.kt)("h2",{id:"run-both-the-nodejs-app-and-tracetest"},"Run Both the Node.js App and Tracetest"),(0,n.kt)("p",null,"To start both the Node.js app and Tracetest, run this command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose up\n")),(0,n.kt)("p",null,"This will start your Tracetest instance on ",(0,n.kt)("inlineCode",{parentName:"p"},"http://localhost:11633/"),". Open the instance and start creating tests!\nMake sure to use the ",(0,n.kt)("inlineCode",{parentName:"p"},"http://app:3000/")," url in your test creation, because your Node.js app and Tracetest are in the same network."),(0,n.kt)("h2",{id:"learn-more"},"Learn More"),(0,n.kt)("p",null,"Please visit our ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/kubeshop/tracetest/tree/main/examples"},"examples in GitHub")," and join our ",(0,n.kt)("a",{parentName:"p",href:"https://dub.sh/tracetest-community"},"Slack Community")," for more info!"))}u.isMDXComponent=!0}}]);