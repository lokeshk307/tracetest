"use strict";(self.webpackChunktracetest_docs=self.webpackChunktracetest_docs||[]).push([[820],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(n),u=a,h=m["".concat(p,".").concat(u)]||m[u]||d[u]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},60370:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={id:"running-python-app-with-opentelemetry-collector-and-tracetest",title:"Python with OpenTelemetry manual instrumention",description:"Quick start how to configure a Python app to use OpenTelemetry instrumentation with traces, and Tracetest for enhancing your e2e and integration tests with trace-based testing.",hide_table_of_contents:!1,keywords:["tracetest","trace-based testing","observability","distributed tracing","testing"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1698686403/docs/Blog_Thumbnail_14_rsvkmo.jpg"},i=void 0,s={unversionedId:"examples-tutorials/recipes/running-python-app-with-opentelemetry-collector-and-tracetest",id:"examples-tutorials/recipes/running-python-app-with-opentelemetry-collector-and-tracetest",title:"Python with OpenTelemetry manual instrumention",description:"Quick start how to configure a Python app to use OpenTelemetry instrumentation with traces, and Tracetest for enhancing your e2e and integration tests with trace-based testing.",source:"@site/docs/examples-tutorials/recipes/running-python-app-with-opentelemetry-collector-and-tracetest.mdx",sourceDirName:"examples-tutorials/recipes",slug:"/examples-tutorials/recipes/running-python-app-with-opentelemetry-collector-and-tracetest",permalink:"/examples-tutorials/recipes/running-python-app-with-opentelemetry-collector-and-tracetest",draft:!1,editUrl:"https://github.com/kubeshop/tracetest/blob/main/docs/docs/examples-tutorials/recipes/running-python-app-with-opentelemetry-collector-and-tracetest.mdx",tags:[],version:"current",frontMatter:{id:"running-python-app-with-opentelemetry-collector-and-tracetest",title:"Python with OpenTelemetry manual instrumention",description:"Quick start how to configure a Python app to use OpenTelemetry instrumentation with traces, and Tracetest for enhancing your e2e and integration tests with trace-based testing.",hide_table_of_contents:!1,keywords:["tracetest","trace-based testing","observability","distributed tracing","testing"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1698686403/docs/Blog_Thumbnail_14_rsvkmo.jpg"},sidebar:"examplesTutorialsSidebar",previous:{title:"Node.js and OpenTelemetry Manual Instrumentation",permalink:"/examples-tutorials/recipes/running-tracetest-without-a-trace-data-store-with-manual-instrumentation"},next:{title:"OpenTelemetry Demo and Lightstep",permalink:"/examples-tutorials/recipes/running-tracetest-with-lightstep"}},p={},l=[{value:"Sample Python app with OpenTelemetry Collector and Tracetest",id:"sample-python-app-with-opentelemetry-collector-and-tracetest",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Project structure",id:"project-structure",level:2},{value:"1. Python app",id:"1-python-app",level:3},{value:"2. Tracetest",id:"2-tracetest",level:3},{value:"Docker Compose Network",id:"docker-compose-network",level:3},{value:"Python app",id:"python-app",level:2},{value:"Tracetest",id:"tracetest",level:2},{value:"Run both the Python app and Tracetest",id:"run-both-the-python-app-and-tracetest",level:2},{value:"Learn more",id:"learn-more",level:2}],c={toc:l},m="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubeshop/tracetest/tree/main/examples/quick-start-python"},"Check out the source code on GitHub here."))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://tracetest.io/"},"Tracetest")," is a testing tool based on ",(0,a.kt)("a",{parentName:"p",href:"https://opentelemetry.io/"},"OpenTelemetry")," that allows you to test your distributed application. It allows you to use data from distributed traces generated by OpenTelemetry to validate and assert if your application has the desired behavior defined by your test definitions."),(0,a.kt)("h2",{id:"sample-python-app-with-opentelemetry-collector-and-tracetest"},"Sample Python app with OpenTelemetry Collector and Tracetest"),(0,a.kt)("p",null,"This is a simple quick start on how to configure a Python app to use OpenTelemetry instrumentation with traces, and Tracetest for enhancing your e2e and integration tests with trace-based testing."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"You will need ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"Docker")," and ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/install/"},"Docker Compose")," installed on your machine to run this quick start app!"),(0,a.kt)("h2",{id:"project-structure"},"Project structure"),(0,a.kt)("p",null,"The project is built with Docker Compose. It contains two distinct ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yaml")," files."),(0,a.kt)("h3",{id:"1-python-app"},"1. Python app"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yaml")," file and ",(0,a.kt)("inlineCode",{parentName:"p"},"Dockerfile")," in the root directory are for the Python app."),(0,a.kt)("h3",{id:"2-tracetest"},"2. Tracetest"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yaml")," file, ",(0,a.kt)("inlineCode",{parentName:"p"},"collector.config.yaml"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"tracetest-provision.yaml"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"tracetest-config.yaml")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"tracetest")," directory are for setting up Tracetest and the OpenTelemetry Collector."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"tracetest")," directory is self-contained and will run all the prerequisites for enabling OpenTelemetry traces and trace-based testing with Tracetest."),(0,a.kt)("h3",{id:"docker-compose-network"},"Docker Compose Network"),(0,a.kt)("p",null,"All ",(0,a.kt)("inlineCode",{parentName:"p"},"services")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yaml")," are on the same network and will be reachable by hostname from within other services. E.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"tracetest:4317")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"collector.config.yaml")," will map to the ",(0,a.kt)("inlineCode",{parentName:"p"},"tracetest")," service, where the port ",(0,a.kt)("inlineCode",{parentName:"p"},"4317")," is the port where Tracetest accepts traces."),(0,a.kt)("h2",{id:"python-app"},"Python app"),(0,a.kt)("p",null,"The Python app is a simple Flask app, contained in the ",(0,a.kt)("inlineCode",{parentName:"p"},"app.py")," file."),(0,a.kt)("p",null,"The code below imports all the Flask, and OpenTelemetry libraries and configures both manual and automatic OpenTelemetry instrumentation."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from flask import Flask, request\nimport json\n\nfrom opentelemetry import trace\nfrom opentelemetry.sdk.resources import Resource\nfrom opentelemetry.sdk.trace import TracerProvider\nfrom opentelemetry.sdk.trace.export import BatchSpanProcessor\nfrom opentelemetry.sdk.trace.export import ConsoleSpanExporter\n\nprovider = TracerProvider()\nprocessor = BatchSpanProcessor(ConsoleSpanExporter())\nprovider.add_span_processor(processor)\ntrace.set_tracer_provider(provider)\ntracer = trace.get_tracer(__name__)\n")),(0,a.kt)("p",null,"There are 3 endpoints in the Flask app. For seeing manual instrumentation trigger the ",(0,a.kt)("inlineCode",{parentName:"p"},'"/manual"')," endpoint. For seeing the automatic instrumentation trigger the ",(0,a.kt)("inlineCode",{parentName:"p"},'"/automatic"')," endpoint respectively. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'app = Flask(__name__)\n\n@app.route("/manual")\ndef manual():\n    with tracer.start_as_current_span(\n        "manual", \n        attributes={ "endpoint": "/manual", "foo": "bar" } \n    ):\n        return "App works with a manual instrumentation."\n\n@app.route(\'/automatic\')\ndef automatic():\n    return "App works with automatic instrumentation."\n\n@app.route("/")\ndef home():\n    return "App works."\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Dockerfile")," includes bootstrapping the needed OpenTelemetry packages. As you can see it does not have the ",(0,a.kt)("inlineCode",{parentName:"p"},"CMD")," command. Instead, it's configured in the ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yaml")," below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Dockerfile"},"FROM python:3.10.1-slim\nWORKDIR /opt/app\nCOPY . .\nRUN pip install --no-cache-dir -r requirements.txt\nRUN opentelemetry-bootstrap -a install\nEXPOSE 8080\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yaml")," contains just one service for the Python app. The service is stared with the ",(0,a.kt)("inlineCode",{parentName:"p"},"command")," parameter."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'version: \'3\'\nservices:\n  app:\n    image: quick-start-python\n    platform: linux/amd64\n    extra_hosts:\n      - "host.docker.internal:host-gateway"\n    build: .\n    ports:\n      - "8080:8080"\n    # using the command here instead of the Dockerfile\n    command: opentelemetry-instrument --traces_exporter otlp --service_name app --exporter_otlp_endpoint otel-collector:4317 --exporter_otlp_insecure true flask run --host=0.0.0.0 --port=8080\n    depends_on:\n      tracetest:\n        condition: service_started\n')),(0,a.kt)("p",null,"To start it, run this command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker compose build # optional if you haven't already built the image\ndocker compose up\n")),(0,a.kt)("p",null,"This will start the Python app. But, you're not sending the traces anywhere."),(0,a.kt)("p",null,"Let's fix this by configuring Tracetest and OpenTelemetry Collector."),(0,a.kt)("h2",{id:"tracetest"},"Tracetest"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yaml")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"tracetest")," directory is configured with three services."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Postgres")," - Postgres is a prerequisite for Tracetest to work. It stores trace data when running the trace-based tests."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://opentelemetry.io/docs/collector/"},(0,a.kt)("strong",{parentName:"a"},"OpenTelemetry Collector"))," - A vendor-agnostic implementation of how to receive, process and export telemetry data."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://tracetest.io/"},(0,a.kt)("strong",{parentName:"a"},"Tracetest"))," - Trace-based testing that generates end-to-end tests automatically from traces.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "3"\nservices:\n  tracetest:\n    image: kubeshop/tracetest:latest\n    platform: linux/amd64\n    volumes:\n      - type: bind\n        source: ./tracetest/tracetest-config.yaml\n        target: /app/tracetest.yaml\n      - type: bind\n        source: ./tracetest/tracetest-provision.yaml\n        target: /app/provisioning.yaml\n    ports:\n      - 11633:11633\n    command: --provisioning-file /app/provisioning.yaml\n    depends_on:\n      postgres:\n        condition: service_healthy\n      otel-collector:\n        condition: service_started\n    healthcheck:\n      test: ["CMD", "wget", "--spider", "localhost:11633"]\n      interval: 1s\n      timeout: 3s\n      retries: 60\n    environment:\n      TRACETEST_DEV: ${TRACETEST_DEV}\n\n  postgres:\n    image: postgres:14\n    environment:\n      POSTGRES_PASSWORD: postgres\n      POSTGRES_USER: postgres\n    healthcheck:\n      test: pg_isready -U "$$POSTGRES_USER" -d "$$POSTGRES_DB"\n      interval: 1s\n      timeout: 5s\n      retries: 60\n\n  otel-collector:\n    image: otel/opentelemetry-collector-contrib:0.59.0\n    command:\n      - "--config"\n      - "/otel-local-config.yaml"\n    volumes:\n      - ./tracetest/collector.config.yaml:/otel-local-config.yaml\n\n')),(0,a.kt)("p",null,"Tracetest depends on both Postgres and the OpenTelemetry Collector. Both Tracetest and the OpenTelemetry Collector require config files to be loaded via a volume. The volumes are mapped from the root directory into the ",(0,a.kt)("inlineCode",{parentName:"p"},"tracetest")," directory and the respective config files."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"tracetest-config.yaml")," file contains the basic setup of connecting Tracetest to the Postgres instance."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"postgres:\n  host: postgres\n  user: postgres\n  password: postgres\n  port: 5432\n  dbname: postgres\n  params: sslmode=disable\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"tracetest-provision.yaml")," file provisions the trace data store and polling to store in the Postgres database. The data store is set to OTLP meaning the traces will be stored in Tracetest itself."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"---\ntype: DataStore\nspec:\n  name: OpenTelemetry Collector\n  type: otlp\n  isdefault: true\n")),(0,a.kt)("p",null,"But how are traces sent to Tracetest?"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"collector.config.yaml")," explains that. It receives traces via either ",(0,a.kt)("inlineCode",{parentName:"p"},"grpc")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"http"),". Then, exports them to Tracetest's otlp endpoint ",(0,a.kt)("inlineCode",{parentName:"p"},"tracetest:4317"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"receivers:\n  otlp:\n    protocols:\n      grpc:\n      http:\n\nprocessors:\n  batch:\n    timeout: 100ms\n\nexporters:\n  logging:\n    loglevel: debug\n  otlp/1:\n    endpoint: tracetest:4317\n    # Send traces to Tracetest.\n    # Read more in docs here: https://docs.tracetest.io/configuration/connecting-to-data-stores/opentelemetry-collector\n    tls:\n      insecure: true\n\nservice:\n  pipelines:\n    traces/1:\n      receivers: [otlp]\n      processors: [batch]\n      exporters: [otlp/1]\n\n")),(0,a.kt)("h2",{id:"run-both-the-python-app-and-tracetest"},"Run both the Python app and Tracetest"),(0,a.kt)("p",null,"To start both the Python app and Tracetest we will run this command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose -f docker-compose.yaml -f tracetest/docker-compose.yaml up # add --build if the images are not built already\n")),(0,a.kt)("p",null,"This will start your Tracetest instance on ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:11633/"),". Go ahead and open it up."),(0,a.kt)("p",null,"Start creating tests! Make sure to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"http://app:8080/")," url in your test creation, because your Python app and Tracetest are in the same network."),(0,a.kt)("h2",{id:"learn-more"},"Learn more"),(0,a.kt)("p",null,"Feel free to check out our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubeshop/tracetest/tree/main/examples"},"examples in GitHub"),", and join our ",(0,a.kt)("a",{parentName:"p",href:"https://dub.sh/tracetest-community"},"Slack Community")," for more info!"))}d.isMDXComponent=!0}}]);