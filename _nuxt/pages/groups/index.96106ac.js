(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{206:function(t,e,r){"use strict";r.r(e);var l={props:["name"],data:function(){return{activeClass:"mx-1 w-1/2 px-10 py-2  bg-primary text-white rounded-full font-bold",nonActiveClass:"border border-primary text-primary hover:bg-primary hover:text-white hover:border-0 mx-1 w-1/2 px-10 py-2  rounded-full font-bold"}}},n=r(12),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-full text-center p-2"},[r("div",{staticClass:"mx-auto text-sm flex content-center justify-center "},[r("router-link",{class:t.$route.path=="/"+t.name?t.activeClass:t.nonActiveClass,attrs:{to:"/"+t.name}},[t._v(" Followed ")]),t._v(" "),r("router-link",{class:t.$route.path=="/"+t.name+"/explore"?t.activeClass:t.nonActiveClass,attrs:{to:"/"+t.name+"/explore"}},[t._v("Explore")])],1)])}),[],!1,null,null,null);e.default=component.exports},214:function(t,e,r){"use strict";r.r(e);var l={layout:"app",middleware:"auth",methods:{to:function(t){"left"==t&&this.$router.push("/groups/explore")}}},n=r(12),component=Object(n.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{directives:[{name:"touch",rawName:"v-touch:swipe",value:this.to,expression:"to",arg:"swipe"}],staticClass:"w-full"},[e("subheader",{attrs:{name:"groups"}}),this._v(" "),e("section",{staticClass:"w-full rounded-xl pb-20"})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Subheader:r(206).default})}}]);