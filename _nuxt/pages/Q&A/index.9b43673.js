(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{206:function(t,e,r){"use strict";r.r(e);var l={props:["name"],data:function(){return{activeClass:"mx-1 w-1/2 px-10 py-2  bg-primary text-white rounded-full font-bold",nonActiveClass:"border border-primary text-primary hover:bg-primary hover:text-white hover:border-0 mx-1 w-1/2 px-10 py-2  rounded-full font-bold"}}},n=r(12),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-full text-center p-2"},[r("div",{staticClass:"mx-auto text-sm flex content-center justify-center "},[r("router-link",{class:t.$route.path=="/"+t.name?t.activeClass:t.nonActiveClass,attrs:{to:"/"+t.name}},[t._v(" Followed ")]),t._v(" "),r("router-link",{class:t.$route.path=="/"+t.name+"/explore"?t.activeClass:t.nonActiveClass,attrs:{to:"/"+t.name+"/explore"}},[t._v("Explore")])],1)])}),[],!1,null,null,null);e.default=component.exports},218:function(t,e,r){"use strict";r.r(e);var l={layout:"app",middleware:"auth",methods:{to:function(t){"left"==t&&this.$router.push("/Q&A/explore")}}},n=r(12),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{directives:[{name:"touch",rawName:"v-touch:swipe",value:t.to,expression:"to",arg:"swipe"}],staticClass:"w-full"},[r("subheader",{attrs:{name:"Q&A"}}),t._v(" "),r("section",{staticClass:"w-full rounded-xl pb-20"},t._l(10,(function(i){return r("div",{key:i,staticClass:"w-full p-2 relative cursor-default"},[r("div",{staticClass:"border-b rounded-lg border-theme_primary_light bg-theme_primary hover:bg-theme_primary_dark px-2 pb-5 "},[r("div",{staticClass:"w-full py-2 flex items-start "},[r("router-link",{staticClass:"p-1 px-4 bg-theme_primary_light rounded-tl-xl rounded-br-xl text-xs",attrs:{to:"#ombus2020"}},[t._v("#ombus2020")]),t._v(" "),t._m(0,!0)],1),t._v(" "),r("div",{staticClass:"w-auto flex p-2 "},[r("img",{staticClass:"w-8 h-8 rounded-full",attrs:{src:"/icon.png",alt:"Event 1"}}),t._v(" "),r("div",{staticClass:"pl-5 flex flex-wrap items-start"},[r("span",{staticClass:"w-full  mb-2"},[t._v("\r\n                                            Kenapa kita bayar UKT Full tapi kuliah Online, Apakah itu bla bla bla.. diskusikan disini ya :)\r\n                                        ")]),t._v(" "),r("div",{staticClass:"text-xs lg:text-lg text-primary "},[t._v("\r\n                                        100 Answer\r\n                                        ")]),t._v(" "),r("div",{staticClass:"flex relative ml-auto py-1 px-3 rounded-tl-xl rounded-br-xl bg-theme_primary_light text-xs text-primary -mr-4 -mb-3"},[r("svg",{staticClass:"bi bi-heart-fill mr-1 mt-1",attrs:{width:"12px",height:"12px",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"}})]),t._v("\r\n                                           10\r\n                                        ")]),t._v(" "),r("router-link",{staticClass:"flex relative ml-auto py-1 px-5 rounded-tl-xl rounded-br-xl bg-theme_primary_light text-xs text-default -mr-4 -mb-3",attrs:{to:"/explore?event"}},[r("svg",{staticClass:"bi bi-plus-circle mt-1 mr-1",attrs:{width:"12px",height:"12px",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"}}),t._v(" "),r("path",{attrs:{"fill-rule":"evenodd",d:"M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"}}),t._v(" "),r("path",{attrs:{"fill-rule":"evenodd",d:"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}})]),t._v("\r\n                                            Answer\r\n                                        "),r("div",{staticClass:"h-5 w-5  lg:h-6 lg:w-6  rounded-xl  bg-primary border-4 border-theme_primary top-0 right-0 absolute -mt-1 -mr-1"})])],1)])])])})),0)],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ml-auto flex p-2"},[e("img",{staticClass:"w-4 h-4 rounded-full",attrs:{src:"/icon.png",alt:"Event 1"}}),this._v(" "),e("span",{staticClass:"ml-2 text-xs"},[this._v(" Group Name Long Example")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Subheader:r(206).default})}}]);