"use strict";(self.webpackChunktracetest_docs=self.webpackChunktracetest_docs||[]).push([[9200],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,k=d["".concat(i,".").concat(u)]||d[u]||m[u]||o;return n?a.createElement(k,s(s({ref:t},c),{},{components:n})):a.createElement(k,s({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:r,s[1]=l;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},89719:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={id:"testing-cloudflare-workers-with-opentelemetry-tracetest",title:"Testing Cloudflare Workers with OpenTelemetry and Tracetest",description:"Quick start on how to configure Cloudflare Workers with OpenTelemetry and Tracetest for enhancing your integration tests with trace-based testing.",hide_table_of_contents:!1,keywords:["tracetest","trace-based testing","observability","distributed tracing","testing","cloudflare","clodflare workers","end to end testing","end-to-end testing","integration testing"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1698686403/docs/Blog_Thumbnail_14_rsvkmo.jpg"},s=void 0,l={unversionedId:"examples-tutorials/recipes/testing-cloudflare-workers-with-opentelemetry-tracetest",id:"examples-tutorials/recipes/testing-cloudflare-workers-with-opentelemetry-tracetest",title:"Testing Cloudflare Workers with OpenTelemetry and Tracetest",description:"Quick start on how to configure Cloudflare Workers with OpenTelemetry and Tracetest for enhancing your integration tests with trace-based testing.",source:"@site/docs/examples-tutorials/recipes/testing-cloudflare-workers-with-opentelemetry-tracetest.mdx",sourceDirName:"examples-tutorials/recipes",slug:"/examples-tutorials/recipes/testing-cloudflare-workers-with-opentelemetry-tracetest",permalink:"/examples-tutorials/recipes/testing-cloudflare-workers-with-opentelemetry-tracetest",draft:!1,editUrl:"https://github.com/kubeshop/tracetest/blob/main/docs/docs/examples-tutorials/recipes/testing-cloudflare-workers-with-opentelemetry-tracetest.mdx",tags:[],version:"current",frontMatter:{id:"testing-cloudflare-workers-with-opentelemetry-tracetest",title:"Testing Cloudflare Workers with OpenTelemetry and Tracetest",description:"Quick start on how to configure Cloudflare Workers with OpenTelemetry and Tracetest for enhancing your integration tests with trace-based testing.",hide_table_of_contents:!1,keywords:["tracetest","trace-based testing","observability","distributed tracing","testing","cloudflare","clodflare workers","end to end testing","end-to-end testing","integration testing"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1698686403/docs/Blog_Thumbnail_14_rsvkmo.jpg"},sidebar:"examplesTutorialsSidebar",previous:{title:"Testing AWS Lambda Functions (Serverless Framework) with OpenTelemetry and Tracetest",permalink:"/examples-tutorials/recipes/testing-lambda-functions-with-opentelemetry-tracetest"},next:{title:"Node.js and OpenTelemetry",permalink:"/examples-tutorials/recipes/running-tracetest-without-a-trace-data-store"}},i={},p=[{value:"Why is this important?",id:"why-is-this-important",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Tracetest Account",id:"tracetest-account",level:3},{value:"Cloudflare Account",id:"cloudflare-account",level:3},{value:"Cloudflare Workers Example",id:"cloudflare-workers-example",level:3},{value:"Docker",id:"docker",level:3},{value:"Project Structure",id:"project-structure",level:2},{value:"1. Cloudflare Worker",id:"1-cloudflare-worker",level:3},{value:"2. Tracetest",id:"2-tracetest",level:3},{value:"Docker Compose Network",id:"docker-compose-network",level:3},{value:"Cloudflare Worker",id:"cloudflare-worker",level:2},{value:"Set up Environment Variables",id:"set-up-environment-variables",level:3},{value:"Start the Cloudflare Worker",id:"start-the-cloudflare-worker",level:3},{value:"Testing the Cloudflare Worker Locally",id:"testing-the-cloudflare-worker-locally",level:2},{value:"Testing the Clodflare Worker in Staging and Production",id:"testing-the-clodflare-worker-in-staging-and-production",level:2},{value:"Integration Testing the Cloudflare Worker",id:"integration-testing-the-cloudflare-worker",level:2},{value:"Learn More",id:"learn-more",level:2}],c={toc:p},d="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubeshop/tracetest/tree/main/examples/testing-cloudflare-workers"},"Check out the source code on GitHub here."))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://tracetest.io/"},"Tracetest")," is a testing tool based on ",(0,r.kt)("a",{parentName:"p",href:"https://opentelemetry.io/"},"OpenTelemetry")," that allows you to test your distributed application. It allows you to use data from distributed traces generated by OpenTelemetry to validate and assert if your application has the desired behavior defined by your test definitions."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://workers.cloudflare.com/"},"Cloudflare Workers")," are ",(0,r.kt)("a",{parentName:"p",href:"https://www.cloudflare.com/"},"Cloudflare's")," answer to AWS Lambda. They let you deploy serverless code instantly across the globe and are blazing fast. You write code and deploy it to cloud environments without the need for traditional infrastructure."),(0,r.kt)("h2",{id:"why-is-this-important"},"Why is this important?"),(0,r.kt)("p",null,"Serverless architectural patterns are notoriously difficult to troubleshoot in production and complex to test across development and staging environments including integration tests."),(0,r.kt)("p",null,"Using OpenTelemetry in Cloudflare Workers exposes telemetry that you can use for both production visibility and trace-based testing."),(0,r.kt)("p",null,"This sample shows how to run tests against Cloudflare Workers using ",(0,r.kt)("a",{parentName:"p",href:"https://opentelemetry.io/"},"OpenTelemetry")," and Tracetest by:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#testing-the-cloudflare-worker-locally"},"Testing Cloudflare Workers in your local development environment.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#testing-the-clodflare-worker-in-staging-and-production"},"Testing Cloudflare Workers in live staging and production deployments.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#integration-testing-the-cloudflare-worker"},"Integration testing Cloudflare Workers for CI pipelines."))),(0,r.kt)("p",null,"The Cloudflare Worker will fetch data from an external API, transform the data and insert it into a D1 database. This particular flow has two failure points that are difficult to test."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Validating that an external API request from a Cloudflare Worker is successful."),(0,r.kt)("li",{parentName:"ol"},"Validating that a D1 database insert request is successful.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1707484941/Blogposts/testing-cloudflare-workers/cf-work-tt-2_zcwwjd.png",alt:null})),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("h3",{id:"tracetest-account"},"Tracetest Account"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sign up to ",(0,r.kt)("a",{parentName:"li",href:"https://app.tracetest.io"},(0,r.kt)("inlineCode",{parentName:"a"},"app.tracetest.io"))," or follow the ",(0,r.kt)("a",{parentName:"li",href:"/getting-started/installation"},"get started")," docs."),(0,r.kt)("li",{parentName:"ul"},"Create an ",(0,r.kt)("a",{parentName:"li",href:"/concepts/environments"},"environment"),"."),(0,r.kt)("li",{parentName:"ul"},"Create an ",(0,r.kt)("a",{parentName:"li",href:"/concepts/environment-tokens"},"environment token"),"."),(0,r.kt)("li",{parentName:"ul"},"Have access to the environment's ",(0,r.kt)("a",{parentName:"li",href:"/configuration/agent"},"agent API key"),".")),(0,r.kt)("h3",{id:"cloudflare-account"},"Cloudflare Account"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://workers.cloudflare.com/"},"Cloudflare Workers Account")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.cloudflare.com/d1/get-started/"},"Cloudflare D1 Database"))),(0,r.kt)("h3",{id:"cloudflare-workers-example"},"Cloudflare Workers Example"),(0,r.kt)("p",null,"Clone the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubeshop/pokeshop"},"Tracetest GitHub Repo")," to your local machine, and open the Vercel example app."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=Terminal",title:"Terminal"},"git clone https://github.com/kubeshop/tracetest.git\ncd tracetest/examples/testing-cloudflare-workers\n")),(0,r.kt)("p",null,"Before moving forward, run ",(0,r.kt)("inlineCode",{parentName:"p"},"npm i")," in the root folder to install the dependencies."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=Terminal",title:"Terminal"},"npm i\n")),(0,r.kt)("p",null,"If you do not have ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/npx"},(0,r.kt)("inlineCode",{parentName:"a"},"npx"))," installed, install it first."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=Terminal",title:"Terminal"},"npm i npx -g\n")),(0,r.kt)("p",null,"Run the command to login to your Cloudflare Workers account."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=Terminal",title:"Terminal"},"npx wrangler login\n")),(0,r.kt)("p",null,"Run the command to create a D1 database both locally and in your Cloudflare Workers account."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=Terminal",title:"Terminal"},"npx wrangler d1 create testing-cloudflare-workers\n")),(0,r.kt)("p",null,"This will output the ",(0,r.kt)("inlineCode",{parentName:"p"},"database_id")," credentials. Set them in ",(0,r.kt)("a",{parentName:"p",href:"#set-up-environment-variables"},"your ",(0,r.kt)("inlineCode",{parentName:"a"},"wrangler.toml")," as explained in this section below"),"."),(0,r.kt)("p",null,"Run the command to create a schema in your D1 database with a ",(0,r.kt)("inlineCode",{parentName:"p"},"schema.sql")," file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:"title=schema.sql",title:"schema.sql"},"DROP TABLE IF EXISTS Pokemon;\nCREATE TABLE IF NOT EXISTS Pokemon (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  createdAt TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP\n);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=Terminal",title:"Terminal"},"npx wrangler d1 execute testing-cloudflare-workers --local --file=./schema.sql\nnpx wrangler d1 execute testing-cloudflare-workers --file=./schema.sql\n")),(0,r.kt)("h3",{id:"docker"},"Docker"),(0,r.kt)("p",null,"Have ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"Docker")," and ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/install/"},"Docker Compose")," installed on your machine."),(0,r.kt)("h2",{id:"project-structure"},"Project Structure"),(0,r.kt)("p",null,"This is a project bootstrapped with ",(0,r.kt)("a",{parentName:"p",href:"https://developers.cloudflare.com/workers/get-started/guide/#1-create-a-new-worker-project"},(0,r.kt)("inlineCode",{parentName:"a"},"C3 (create-cloudflare-cli)")),"."),(0,r.kt)("p",null,"It's using Cloudflare Workers with ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/evanderkoogh/otel-cf-workers"},"OpenTelemetry configured with otel-cf-workers"),"."),(0,r.kt)("h3",{id:"1-cloudflare-worker"},"1. Cloudflare Worker"),(0,r.kt)("p",null,"The Cloudflare Worker code is in ",(0,r.kt)("inlineCode",{parentName:"p"},"src/index.ts"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yaml")," file references the Cloudflare Worker with ",(0,r.kt)("inlineCode",{parentName:"p"},"cloudflare-worker"),"."),(0,r.kt)("h3",{id:"2-tracetest"},"2. Tracetest"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yaml")," file also has a Tracetest Agent service and an integration tests service."),(0,r.kt)("h3",{id:"docker-compose-network"},"Docker Compose Network"),(0,r.kt)("p",null,"All ",(0,r.kt)("inlineCode",{parentName:"p"},"services")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yaml")," are on the same network and will be reachable by hostname from within other services. E.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"cloudflare-worker:8787")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"test/test-api.docker.yaml")," will map to the ",(0,r.kt)("inlineCode",{parentName:"p"},"cloudflare-worker")," service."),(0,r.kt)("h2",{id:"cloudflare-worker"},"Cloudflare Worker"),(0,r.kt)("p",null,"The Cloudflare Worker is a simple API, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubeshop/tracetest/blob/main/examples/testing-cloudflare-workers/src/index.ts"},"contained in the ",(0,r.kt)("inlineCode",{parentName:"a"},"src/index.ts")," file"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"title=src/index.ts",title:"src/index.ts"},"import { trace, SpanStatusCode, diag, DiagConsoleLogger, DiagLogLevel } from '@opentelemetry/api'\nimport { instrument, ResolveConfigFn } from '@microlabs/otel-cf-workers'\nconst tracer = trace.getTracer('pokemon-api')\n\ndiag.setLogger(new DiagConsoleLogger(), DiagLogLevel.DEBUG)\n\nexport interface Env {\n  DB: D1Database\n    TRACETEST_URL: string\n}\n\nexport async function addPokemon(pokemon: any, env: Env) {\n  return await env.DB.prepare(\n    \"INSERT INTO Pokemon (name) VALUES (?) RETURNING *\"\n  ).bind(pokemon.name).all()\n}\n\nexport async function getPokemon(pokemon: any, env: Env) {\n  return await env.DB.prepare(\n    \"SELECT * FROM Pokemon WHERE id = ?;\"\n  ).bind(pokemon.id).all();\n}\n\nasync function formatPokeApiResponse(response: any) {\n  const { headers } = response\n  const contentType = headers.get(\"content-type\") || \"\"\n  if (contentType.includes(\"application/json\")) {\n    const data = await response.json()\n    const { name, id } = data\n\n    // Add manual instrumentation\n    const span = trace.getActiveSpan()\n    if(span) {\n      span.setStatus({ code: SpanStatusCode.OK, message: String(\"Pokemon fetched successfully!\") })\n      span.setAttribute('pokemon.name', name)\n      span.setAttribute('pokemon.id', id)\n    }\n\n    return { name, id }\n  }\n  return response.text()\n}\n\nconst handler = {\n    async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {\n    try {\n      const { pathname, searchParams } = new URL(request.url)\n\n      // Import a Pokemon\n      if (pathname === \"/api/pokemon\" && request.method === \"POST\") {\n        const queryId = searchParams.get('id')\n        const requestUrl = `https://pokeapi.co/api/v2/pokemon/${queryId || '6'}`\n        const response = await fetch(requestUrl)\n        const resPokemon = await formatPokeApiResponse(response)\n\n        // Add manual instrumentation\n        return tracer.startActiveSpan('D1: Add Pokemon', async (span) => {\n          const addedPokemon = await addPokemon(resPokemon, env)\n\n          span.setStatus({ code: SpanStatusCode.OK, message: String(\"Pokemon added successfully!\") })\n          span.setAttribute('pokemon.name', String(addedPokemon?.results[0].name))\n          span.end()\n          \n          return Response.json(addedPokemon)\n        })\n      }\n\n      return new Response(\"Hello Worker!\")\n    } catch (err) {\n      return new Response(String(err))\n    }\n    },\n}\n\nconst config: ResolveConfigFn = (env: Env, _trigger) => {\n  return {\n    exporter: {\n      url: env.TRACETEST_URL,\n      headers: { },\n    },\n        service: { name: 'pokemon-api' },\n    }\n}\n\nexport default instrument(handler, config)\n")),(0,r.kt)("p",null,"The OpenTelemetry tracing is included with the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/evanderkoogh/otel-cf-workers"},"otel-cf-workers")," module. Traces will be sent to the Tracetest Agent as configured in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubeshop/tracetest/blob/main/examples/testing-cloudflare-workers/wrangler.toml"},(0,r.kt)("inlineCode",{parentName:"a"},"wrangler.toml")),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml",metastring:"title=wrangler.toml",title:"wrangler.toml"},'name = "pokemon-api"\nmain = "src/index.ts"\ncompatibility_date = "2023-12-18"\ncompatibility_flags = [ "nodejs_compat" ]\n\n# Set the IP to make the Cloudflare Worker available in Docker containers\n[dev]\nip = "0.0.0.0"\nport = 8787\nlocal_protocol = "http"\n\n# Development\n[env.dev]\nname = "pokemon-api-dev"\nmain = "src/index.ts"\ncompatibility_date = "2023-12-18"\ncompatibility_flags = [ "nodejs_compat" ]\nd1_databases = [\n  { binding = "DB", database_name = "testing-cloudflare-workers", database_id = "<YOUR_DATABASE_ID>" },\n]\n[env.dev.vars]\nTRACETEST_URL = "http://localhost:4318/v1/traces"\n\n# Prod\n[env.prod]\nname = "pokemon-api"\nmain = "src/index.ts"\ncompatibility_date = "2023-12-18"\ncompatibility_flags = [ "nodejs_compat" ]\nworkers_dev = true\nd1_databases = [\n  { binding = "DB", database_name = "testing-cloudflare-workers", database_id = "<YOUR_DATABASE_ID>" },\n]\n[env.prod.vars]\nTRACETEST_URL = "https://<YOUR_TRACETEST_AGENT_URL>.tracetest.io:443/v1/traces"\n\n# Docker\n[env.docker]\nname = "pokemon-api-docker"\nmain = "src/index.ts"\ncompatibility_date = "2023-12-18"\ncompatibility_flags = [ "nodejs_compat" ]\nd1_databases = [\n  { binding = "DB", database_name = "testing-cloudflare-workers", database_id = "<YOUR_DATABASE_ID>" },\n]\n[env.docker.vars]\nTRACETEST_URL = "http://tracetest-agent:4318/v1/traces"\n\n# D1\n[[d1_databases]]\nbinding = "DB" # i.e. available in your Worker on env.DB\ndatabase_name = "testing-cloudflare-workers"\ndatabase_id = "<YOUR_DATABASE_ID>"\n')),(0,r.kt)("h3",{id:"set-up-environment-variables"},"Set up Environment Variables"),(0,r.kt)("p",null,"Edit the ",(0,r.kt)("inlineCode",{parentName:"p"},"wrangler.toml")," file. Add your D1 and Tracetest env vars."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml",metastring:"title=wrangler.toml",title:"wrangler.toml"},'[env.prod.vars]\nTRACETEST_URL = "https://<YOUR_TRACETEST_AGENT_URL>.tracetest.io:443/v1/traces"\n\n[[d1_databases]]\nbinding = "DB" # i.e. available in your Worker on env.DB\ndatabase_name = "testing-cloudflare-workers"\ndatabase_id = "<YOUR_DATABASE_ID>"\n')),(0,r.kt)("h3",{id:"start-the-cloudflare-worker"},"Start the Cloudflare Worker"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=Terminal",title:"Terminal"},"npx wrangler dev --env dev\n\n# or:\n# npm run dev\n")),(0,r.kt)("p",null,"This starts the worker on ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:8787/")," and it will listen for ",(0,r.kt)("inlineCode",{parentName:"p"},"POST")," requests on path ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/pokemon"),"."),(0,r.kt)("h2",{id:"testing-the-cloudflare-worker-locally"},"Testing the Cloudflare Worker Locally"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/getting-started/installation#install-the-tracetest-cli"},"Download the CLI")," for your operating system."),(0,r.kt)("p",null,"The CLI is bundled with ",(0,r.kt)("a",{parentName:"p",href:"/concepts/agent/"},"Tracetest Agent")," that runs in your infrastructure to collect responses and traces for tests."),(0,r.kt)("p",null,"To start Tracetest Agent add the ",(0,r.kt)("inlineCode",{parentName:"p"},"--api-key")," from your environment."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=Terminal",title:"Terminal"},"tracetest start --api-key YOUR_AGENT_API_KEY\n")),(0,r.kt)("p",null,"Run a test with the test definition ",(0,r.kt)("inlineCode",{parentName:"p"},"test/test-api.development.yaml"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"title=test/test-api.development.yaml",title:"test/test-api.development.yaml"},'type: Test\nspec:\n  id: WMGTfM2Sg\n  name: Test API\n  trigger:\n    type: http\n    httpRequest:\n      method: POST\n      url: http://localhost:8787/api/pokemon?id=13\n      headers:\n      - key: Content-Type\n        value: application/json\n  specs:\n  - selector: span[tracetest.span.type="faas" name="POST" faas.trigger="http"]\n    name: Validate cold start\n    assertions:\n    - attr:faas.coldstart = "false"\n  - selector: "span[tracetest.span.type=\\"http\\" name=\\"GET: pokeapi.co\\"]"\n    name: Validate external API.\n    assertions:\n    - attr:http.response.status_code = 200\n  - selector: "span[tracetest.span.type=\\"general\\" name=\\"D1: Add Pokemon\\"]"\n    name: Validate Pokemon name.\n    assertions:\n    - attr:pokemon.name = "weedle"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=Terminal",title:"Terminal"},'tracetest run test -f ./test/test-api.development.yaml --required-gates test-specs --output pretty\n\n[Output]\n\u2718 Test API Prod (https://app.tracetest.io/organizations/<YOUR_ORG>/environments/<YOUR_ENV>/test/WMGTfM2Sg/run/1/test) - trace id: 59775e06cd96ee0a3973fa924fcf587a\n    \u2718 Validate cold start\n        \u2718 #2cff773d8ea49f9c\n            \u2718 attr:faas.coldstart = "false" (true) (https://app.tracetest.io/organizations/<YOUR_ORG>/environments/<YOUR_ENV>/test/WMGTfM2Sg/run/1/test?selectedAssertion=0&selectedSpan=2cff773d8ea49f9c)\n    \u2714 Validate external API.\n        \u2714 #d01b92c183b45433\n            \u2714 attr:http.response.status_code = 200 (200)\n    \u2714 Validate Pokemon name.\n        \u2714 #12443dd73de11a68\n            \u2714 attr:pokemon.name = "weedle" (weedle)\n\n    \u2718 Required gates\n        \u2718 test-specs\n')),(0,r.kt)("h2",{id:"testing-the-clodflare-worker-in-staging-and-production"},"Testing the Clodflare Worker in Staging and Production"),(0,r.kt)("p",null,"Select to ",(0,r.kt)("a",{parentName:"p",href:"/concepts/cloud-agent"},"run the Tracetest Agent in the Cloud"),". OpenTelemetry will be selected as the default tracing backend. You'll find the OTLP endpoint to send traces to."),(0,r.kt)("p",null,"Copy the HTTP URL and paste it in the ",(0,r.kt)("inlineCode",{parentName:"p"},"wrangler.toml")," and append ",(0,r.kt)("inlineCode",{parentName:"p"},"v1/traces")," to the end of the Tracetest URL."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml",metastring:"title=wrangler.toml",title:"wrangler.toml"},'# Production\n[env.prod]\nname = "pokemon-api"\nmain = "src/index.ts"\ncompatibility_date = "2023-12-18"\ncompatibility_flags = [ "nodejs_compat" ]\nworkers_dev = true\nd1_databases = [\n  { binding = "DB", database_name = "testing-cloudflare-workers", database_id = "<YOUR_DATABASE_ID>" },\n]\n[env.prod.vars]\nTRACETEST_URL = "https://<YOUR_TRACETEST_AGENT_URL>.tracetest.io:443/v1/traces"\n')),(0,r.kt)("p",null,"Deploy the Cloudflare Worker."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=Terminal",title:"Terminal"},"npx wrangler deploy --env prod\n\n# or\n# npm run deploy\n")),(0,r.kt)("p",null,"Run a test with the test definition ",(0,r.kt)("inlineCode",{parentName:"p"},"test/test-api.prod.yaml"),". Replace the Cloudflare Worker URL with your endpoint."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"title=test/test-api.prod.yaml",title:"test/test-api.prod.yaml"},'type: Test\nspec:\n  id: WMGTfM2Sg\n  name: Test API Prod\n  trigger:\n    type: http\n    httpRequest:\n      method: POST\n      url: https://pokemon-api.<YOUR_URL>.workers.dev/api/pokemon?id=13\n      headers:\n      - key: Content-Type\n        value: application/json\n  specs:\n  - selector: span[tracetest.span.type="faas" name="POST" faas.trigger="http"]\n    name: Validate cold start\n    assertions:\n    - attr:faas.coldstart = "false"\n  - selector: "span[tracetest.span.type=\\"http\\" name=\\"GET: pokeapi.co\\"]"\n    name: Validate external API.\n    assertions:\n    - attr:http.response.status_code = 200\n  - selector: "span[tracetest.span.type=\\"general\\" name=\\"D1: Add Pokemon\\"]"\n    name: Validate Pokemon name.\n    assertions:\n    - attr:pokemon.name = "weedle"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=Terminal",title:"Terminal"},'tracetest run test -f ./test/test-api.prod.yaml --required-gates test-specs --output pretty\n\n[Output]\n\u2718 Test API Prod (https://app.tracetest.io/organizations/<YOUR_ORG>/environments/<YOUR_ENV>/test/WMGTfM2Sg/run/1/test) - trace id: 59775e06cd96ee0a3973fa924fcf587a\n    \u2718 Validate cold start\n        \u2718 #2cff773d8ea49f9c\n            \u2718 attr:faas.coldstart = "false" (true) (https://app.tracetest.io/organizations/<YOUR_ORG>/environments/<YOUR_ENV>/test/WMGTfM2Sg/run/1/test?selectedAssertion=0&selectedSpan=2cff773d8ea49f9c)\n    \u2714 Validate external API.\n        \u2714 #d01b92c183b45433\n            \u2714 attr:http.response.status_code = 200 (200)\n    \u2714 Validate Pokemon name.\n        \u2714 #12443dd73de11a68\n            \u2714 attr:pokemon.name = "weedle" (weedle)\n\n    \u2718 Required gates\n        \u2718 test-specs\n')),(0,r.kt)("h2",{id:"integration-testing-the-cloudflare-worker"},"Integration Testing the Cloudflare Worker"),(0,r.kt)("p",null,"Edit the ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yaml")," in the root directory. Add your ",(0,r.kt)("inlineCode",{parentName:"p"},"TRACETEST_API_KEY"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"title=docker-compose.yaml",title:"docker-compose.yaml"},'  # [...]\n  tracetest-agent:\n    image: kubeshop/tracetest-agent:latest\n    environment:\n      - TRACETEST_API_KEY=ttagent_<api_key> # Find the Agent API Key here: https://docs.tracetest.io/configuration/agent\n    ports:\n      - 4317:4317\n      - 4318:4318\n    command: ["--mode", "verbose"]\n    networks:\n      - tracetest\n')),(0,r.kt)("p",null,"Edit the ",(0,r.kt)("inlineCode",{parentName:"p"},"run.bash"),". Add your ",(0,r.kt)("inlineCode",{parentName:"p"},"TRACETEST_API_TOKEN"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=run.bash",title:"run.bash"},"#/bin/bash\n\n# Find the API Token here: https://docs.tracetest.io/concepts/environment-tokens\ntracetest configure -t <YOUR_TRACETEST_API_TOKEN> # add your token here\ntracetest run test -f ./test-api.docker.yaml --required-gates test-specs --output pretty\n# Add more tests here! :D\n")),(0,r.kt)("p",null,"Now you can run the Vercel function and Tracetest Agent!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=Terminal",title:"Terminal"},"docker compose up -d --build\n")),(0,r.kt)("p",null,"And, trigger the integration tests."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=Terminal",title:"Terminal"},'docker compose run integration-tests\n\n[Ouput]\n[+] Creating 1/0\n \u2714 Container integration-testing-vercel-functions-tracetest-agent-1  Running                                                                                             0.0s\n SUCCESS  Successfully configured Tracetest CLI\n\u2714 Test API Docker (https://app.tracetest.io/organizations/ttorg_e66318ba6544b856/environments/ttenv_82af376d61da80a0/test/p00W82OIR/run/8/test) - trace id: d64ab3a6f52a98141d26679fff3373b6\n  \u2718 Validate cold start\n      \u2718 #2cff773d8ea49f9c\n        \u2718 attr:faas.coldstart = "false" (true) (https://app.tracetest.io/organizations/<YOUR_ORG>/environments/<YOUR_ENV>/test/WMGTfM2Sg/run/1/test?selectedAssertion=0&selectedSpan=2cff773d8ea49f9c)\n    \u2714 Validate external API.\n      \u2714 #d01b92c183b45433\n        \u2714 attr:http.response.status_code = 200 (200)\n    \u2714 Validate Pokemon name.\n      \u2714 #12443dd73de11a68\n        \u2714 attr:pokemon.name = "weedle" (weedle)\n\n    \u2718 Required gates\n      \u2718 test-specs\n')),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1707328781/Blogposts/testing-cloudflare-workers/screely-1707328776280_uo8b3t.png",alt:null})),(0,r.kt)("h2",{id:"learn-more"},"Learn More"),(0,r.kt)("p",null,"Feel free to check out our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubeshop/tracetest/tree/main/examples"},"examples in GitHub")," and join our ",(0,r.kt)("a",{parentName:"p",href:"https://dub.sh/tracetest-community"},"Slack Community")," for more info!"))}m.isMDXComponent=!0}}]);