"use strict";(self.webpackChunktracetest_docs=self.webpackChunktracetest_docs||[]).push([[9628],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),f=o,m=u["".concat(i,".").concat(f)]||u[f]||d[f]||a;return r?n.createElement(m,c(c({ref:t},p),{},{components:r})):n.createElement(m,c({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:o,c[1]=l;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},93387:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={},c="CLI Reference",l={unversionedId:"cli/reference/tracetest_delete",id:"cli/reference/tracetest_delete",title:"CLI Reference",description:"tracetest delete",source:"@site/docs/cli/reference/tracetest_delete.md",sourceDirName:"cli/reference",slug:"/cli/reference/tracetest_delete",permalink:"/cli/reference/tracetest_delete",draft:!1,editUrl:"https://github.com/kubeshop/tracetest/blob/main/docs/docs/cli/reference/tracetest_delete.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CLI Reference",permalink:"/cli/reference/tracetest_dashboard"},next:{title:"CLI Reference",permalink:"/cli/reference/tracetest_export"}},i={},s=[{value:"tracetest delete",id:"tracetest-delete",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Auto generated by spf13/cobra on 13-Feb-2024",id:"auto-generated-by-spf13cobra-on-13-feb-2024",level:6}],p={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cli-reference"},"CLI Reference"),(0,o.kt)("h2",{id:"tracetest-delete"},"tracetest delete"),(0,o.kt)("p",null,"Delete resources"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"Delete resources from your Tracetest server"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"tracetest delete analyzer|config|datastore|demo|env|organization|pollingprofile|test|testrunner|testsuite|variableset [flags]\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -h, --help        help for delete\n      --id string   id of the resource to delete\n")),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  -c, --config string       config file will be used by the CLI (default "config.yml")\n  -o, --output string       output format [pretty|json|yaml]\n  -s, --server-url string   server url\n  -v, --verbose             display debug information\n')),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/cli/reference/tracetest"},"tracetest"),"\t - CLI to configure, install and execute tests on a Tracetest server")),(0,o.kt)("h6",{id:"auto-generated-by-spf13cobra-on-13-feb-2024"},"Auto generated by spf13/cobra on 13-Feb-2024"))}d.isMDXComponent=!0}}]);