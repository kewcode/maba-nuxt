(function(e){function t(t){for(var a,r,s=t[0],u=t[1],c=t[2],l=0,p=[];l<s.length;l++)r=s[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&p.push(o[r][0]),o[r]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);m&&m(t);while(p.length)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,r=1;r<n.length;r++){var s=n[r];0!==o[s]&&(a=!1)}a&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var a={},r={app:0},o={app:0},i=[];function s(e){return u.p+"js/"+({action:"action",event:"event",explore:"explore",forum:"forum",index:"index",layout:"layout","new-action":"new-action","new-event":"new-event","new-organization~new-startup":"new-organization~new-startup","new-organization":"new-organization","new-startup":"new-startup",organization:"organization",profile:"profile",startup:"startup",users:"users"}[e]||e)+"."+{action:"cdc3085e",event:"228ab7be",explore:"132d709d",forum:"cf2b8ed2",index:"6ff28098",layout:"84b0c376","new-action":"f85ef86e","new-event":"1329ce0c","new-organization~new-startup":"9d558420","new-organization":"255c3c55","new-startup":"eb2be21a",organization:"cc37d8f6",profile:"4efff31d",startup:"c968a62f",users:"c5f05913"}[e]+".js"}function u(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={layout:1,"new-organization~new-startup":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({action:"action",event:"event",explore:"explore",forum:"forum",index:"index",layout:"layout","new-action":"new-action","new-event":"new-event","new-organization~new-startup":"new-organization~new-startup","new-organization":"new-organization","new-startup":"new-startup",organization:"organization",profile:"profile",startup:"startup",users:"users"}[e]||e)+"."+{action:"31d6cfe0",event:"31d6cfe0",explore:"31d6cfe0",forum:"31d6cfe0",index:"31d6cfe0",layout:"a11d346a","new-action":"31d6cfe0","new-event":"31d6cfe0","new-organization~new-startup":"b9470b6f","new-organization":"31d6cfe0","new-startup":"31d6cfe0",organization:"31d6cfe0",profile:"31d6cfe0",startup:"31d6cfe0",users:"31d6cfe0"}[e]+".css",o=u.p+a,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===a||l===o))return t()}var p=document.getElementsByTagName("style");for(s=0;s<p.length;s++){c=p[s],l=c.getAttribute("data-href");if(l===a||l===o)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var a=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[e],m.parentNode.removeChild(m),n(i)},m.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(m)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=i);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=s(e);var p=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(m);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",p.name="ChunkLoadError",p.type=a,p.request=r,n[1](p)}o[e]=void 0}};var m=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=a,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(n,a,function(t){return e[t]}.bind(null,a));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var p=0;p<c.length;p++)t(c[p]);var m=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0842":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],i={created(){},watch:{$route(e,t){this.$store.commit("toggleLeftMenu","")}}},s=i,u=n("2877"),c=Object(u["a"])(s,r,o,!1,null,null,null),l=c.exports,p=n("9483");Object(p["a"])("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var m=n("8c4f");const d=[{path:"/",component:function(){return n.e("layout").then(n.bind(null,"ed3a"))},children:[{path:"",name:"Home",meta:{title:"Home "},component:function(){return n.e("index").then(n.bind(null,"1e4b"))}},{path:"users",name:"Users",meta:{title:"Users ",auth:!0,admin:!0},component:function(){return n.e("users").then(n.bind(null,"b987"))}},{path:"profile",name:"Profile",meta:{title:"My Profile "},component:function(){return n.e("profile").then(n.bind(null,"fab5"))}},{path:"new/startup",name:"New Startup",meta:{title:"New Startup - Registration"},component:function(){return Promise.all([n.e("new-organization~new-startup"),n.e("new-startup")]).then(n.bind(null,"f76f"))}},{path:"startup",name:"Startup",meta:{title:"Startup - Business"},component:function(){return n.e("startup").then(n.bind(null,"7826"))}},{path:"new/organization",name:"New Organization",meta:{title:"New Organization - Registration"},component:function(){return Promise.all([n.e("new-organization~new-startup"),n.e("new-organization")]).then(n.bind(null,"144c"))}},{path:"organization",name:"Organization",meta:{title:"Organization - UKM & Ormawa"},component:function(){return n.e("organization").then(n.bind(null,"3847"))}},{path:"forum",name:"Forum",meta:{title:"Forum - Discussion"},component:function(){return n.e("forum").then(n.bind(null,"c1be"))}},{path:"explore",name:"Explore",meta:{title:"Explore"},component:function(){return n.e("explore").then(n.bind(null,"3598"))}},{path:"event",name:"Event",meta:{title:"Event - Conference"},component:function(){return n.e("event").then(n.bind(null,"9fbd"))}},{path:"new/event",name:"New Event",meta:{title:"New Event - Registration"},component:function(){return n.e("new-event").then(n.bind(null,"b565"))}},{path:"action",name:"Action",meta:{title:"Social Action"},component:function(){return n.e("action").then(n.bind(null,"a5e0"))}},{path:"new/action",name:"New Action",meta:{title:"New Social Action - Registration"},component:function(){return n.e("new-action").then(n.bind(null,"cb79"))}}]}];var f=n("2f62"),g=n("7338"),h=n.n(g);a["a"].use(f["a"]);var w=new f["a"].Store({state:{api:"https://mahasiswa.test/api/",auth:localStorage.getItem("auth")||!1,user:JSON.parse(localStorage.getItem("user"))||"",access_token:localStorage.getItem("access_token")||"",errorMessages:"",leftMenu:"",showAuth:!1,settings:!1,theme:localStorage.getItem("theme")||"theme-dark-blue",primaryColor:localStorage.getItem("primary-color")||"primary-indigo",listMenu:[{name:"Home",path:"/"},{name:"Core",path:"",admin:!0,sub:[{name:"Users",path:"/users"}]},{name:"Mahasiswa",path:"",sub:[{name:"StartUp",path:"/startup"},{name:"Organization",path:"/organization"},{name:"Forum",path:"/forum"},{name:"Explore",path:"/explore"}]},{name:"Event",path:"",sub:[{name:"New Event",path:"/new/event"},{name:"Events",path:"/event"}]},{name:"Social action",path:"",sub:[{name:"New Action",path:"/new/action"},{name:"Social Actions",path:"/action"}]}]},mutations:{setErrorMessages(e,t){e.errorMessages=t},toggleLeftMenu(e,t){e.leftMenu=t},setTheme(e,t){e.theme=t,localStorage.setItem("theme",t)},setPrimaryColor(e,t){e.primaryColor=t,localStorage.setItem("primary-color",t)},toggleSetting(e,t){e.settings?e.settings=!1:e.settings=!0},toggleShowAuth(e,t){e.showAuth?e.showAuth=!1:e.showAuth=!0},login(e,t){h.a.post(e.api+"login",t).then(t=>{console.log(t.data),t.data.user?(localStorage.setItem("auth",!0),localStorage.setItem("user",JSON.stringify(t.data.user)),localStorage.setItem("access_token",t.data.access_token),e.auth=!0,e.user=t.data.user,e.access_token=t.data.access_token,e.showAuth=!1,e.errorMessages=""):e.errorMessages=t.data.message}).catch(t=>{console.log(t.response.data.message),e.errorMessages=t.response.data.message})},register(e,t){h.a.post(e.api+"register",t).then(t=>{console.log(t.data),t.data.user?(localStorage.setItem("auth",!0),localStorage.setItem("user",JSON.stringify(t.data.user)),localStorage.setItem("access_token",t.data.access_token),e.auth=!0,e.user=t.data.user,e.access_token=t.data.access_token,e.showAuth=!1,e.errorMessages=""):e.errorMessages=t.data.message}).catch(t=>{console.log(t.response.data.message),e.errorMessages=t.response.data.message})},logout(e,t){localStorage.clear(),location.href="/"}},actions:{},modules:{}});a["a"].use(m["a"]);const v=new m["a"]({mode:"history",routes:d,scrollBehavior(e,t,n){return n||{x:0,y:0}}});v.beforeEach((e,t,n)=>{e.meta.auth&&(w.state.auth?e.meta.admin&&(w.state.user.admin?n():n("/")):n("/"));const a=e.matched.slice().reverse().find(e=>e.meta&&e.meta.title),r=e.matched.slice().reverse().find(e=>e.meta&&e.meta.metaTags);t.matched.slice().reverse().find(e=>e.meta&&e.meta.metaTags);if(a&&(document.title=a.meta.title),Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map(e=>e.parentNode.removeChild(e)),!r)return n();r.meta.metaTags.map(e=>{const t=document.createElement("meta");return Object.keys(e).forEach(n=>{t.setAttribute(n,e[n])}),t.setAttribute("data-vue-router-controlled",""),t}).forEach(e=>document.head.appendChild(e)),n()});var b=v;n("0842");a["a"].config.productionTip=!1,new a["a"]({router:b,store:w,render:function(e){return e(l)}}).$mount("#app")}});
//# sourceMappingURL=app.89824f0a.js.map