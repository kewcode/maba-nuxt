(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{208:function(t,e,r){var content=r(213);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(74).default)("32abb0ec",content,!0,{sourceMap:!1})},212:function(t,e,r){"use strict";var l=r(208);r.n(l).a},213:function(t,e,r){(e=r(73)(!1)).push([t.i,".videoWrapper iframe{width:100%;min-height:1-0px;border-radius:10px}",""]),t.exports=e},214:function(t,e,r){"use strict";r.r(e);r(137),r(59),r(24),r(25),r(13);var l={parseQuestDate:function(t){var e=new Date(t),r=new Date,l=Math.round((r-e)/6e4);if(0==l)if((n=Math.round((r-e)/1e3))<10)var o="baru saja";else if(n<20)o="20 detik";else o="30 detik";else if(1==l){var n;if(30==(n=Math.round((r-e)/1e3)))o="30 detik";else if(n<60)o="< 1 menit";else o="1 menit"}else if(l<45)o=l+" menit";else if(l>44&&l<60)o="< 1 jam";else if(l<1440){var d=Math.round(l/60);if(1==d)o=" 1 jam";else o=d+" jam"}else if(l>1439&&l<2880)o="1 hari";else o=Math.round(l/1440)+" hari";return o}},o={props:["data"],data:function(){return{btnFollow:"flex relative ml-auto py-1 px-3 rounded-tl-xl rounded-br-xl bg-theme_primary_light text-xs text-primary",btnFollowed:"flex relative ml-auto py-1 px-3 rounded-tl-xl rounded-br-xl bg-primary text-xs text-secondary"}},methods:{parseQuestDate:function(data){return l.parseQuestDate(data)},textToArray:function(text){return text.toString().split(" ")},cekSumber:function(t){return t.search("spotify")>0?"spotify":t.search("youtube")>0?"youtube":void 0}}},n=(r(212),r(9)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-full p-2 relative cursor-pointer border-b border-theme_primary_light overflow-hidden"},[r("div",{staticClass:"shadow-sm rounded-xl bg-theme_primary hover:bg-theme_primary_dark p-3 "},[t.data.group_id&&!t.data.quest_id?r("router-link",{staticClass:"text-primary p-1 px-4 bg-theme_primary_dark rounded-xl text-xs",attrs:{to:"/"+t.data.group.username}},[t._v("\n                                      \n                                     #"+t._s(t.data.group.username)+"\n\n                                  ")]):t._e(),t._v(" "),t.data.quest_id?r("router-link",{staticClass:"p-1 px-4 text-xs",attrs:{to:t.data.group.username}},[t._v("\n                             \n                                     Membalas "),r("router-link",{staticClass:"bg-theme_primary_dark rounded-xl p-1 px-2",attrs:{to:t.data.quest.id}},[t._v("\n                                         \n                                      @"+t._s(t.data.membalas_user)+"\n                                         : "+t._s(t.data.quest.text)+"\n                                         \n                                      ")])],1):t._e(),t._v(" "),r("span",{staticClass:"text-xs float-right"},[t._v("\n                                    "+t._s(t.parseQuestDate(t.data.created_at))+"\n                                  ")]),t._v(" "),r("div",{staticClass:"w-auto flex p-2 "},[r("img",{staticClass:"w-10 h-10 rounded-full",attrs:{src:"/icon.png",alt:"Event 1"}}),t._v(" "),r("div",{staticClass:"pl-5 flex flex-wrap items-start"},[r("router-link",{attrs:{to:"/@"+t.data.user.username}},[r("span",{staticClass:"font-bold"},[t._v(t._s(t.data.user.name))]),t._v(" "),r("span",{staticClass:"text-primary text-xs"},[t._v("@"+t._s(t.data.user.username))])]),t._v(" "),t.data.audio?r("div",{staticClass:"w-full py-2 videoWrapper"},["spotify"==t.cekSumber(t.data.audio)?r("iframe",{attrs:{src:t.data.audio,width:"100%",height:"232",frameborder:"0",allowtransparency:"true",allow:"encrypted-media"}}):t._e(),t._v(" "),"youtube"==t.cekSumber(t.data.audio)?r("iframe",{attrs:{width:"560",height:"315",src:t.data.audio,frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}):t._e()]):t._e(),t._v(" "),r("span",{staticClass:"w-full  mb-4 mt-2"},t._l(t.textToArray(t.data.text),(function(e,i){return r("span",{key:i},["@"==e.slice(0,1)?r("router-link",{staticClass:"text-primary",attrs:{to:"/"+e}},[t._v(" "+t._s(e)+" ")]):"#"==e.slice(0,1)?r("router-link",{staticClass:"text-primary",attrs:{to:"/"+e.substring(1)}},[t._v(" "+t._s(e)+" ")]):r("span",[t._v(" "+t._s(e)+" ")])],1)})),0),t._v(" "),r("div",{staticClass:"text-xs lg:text-lg text-primary "},[t._v("\n                                  "+t._s(t.data.qna_total)+" Balasan\n                                  ")]),t._v(" "),r("div",{staticClass:"flex mx-3"},[r("button",{staticClass:"flex relative ml-auto py-1 px-5 mx-2 rounded-tl-xl rounded-br-xl bg-theme_primary_light text-xs text-primary",on:{click:function(e){return t.$emit("balas",t.data)}}},[r("svg",{staticClass:"bi bi-plus-circle mt-1 mr-1",attrs:{width:"12px",height:"12px",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"}}),t._v(" "),r("path",{attrs:{"fill-rule":"evenodd",d:"M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"}}),t._v(" "),r("path",{attrs:{"fill-rule":"evenodd",d:"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}})]),t._v("\n                                          Balas\n                                      ")]),t._v(" "),r("div",{class:t.data.followed?t.btnFollowed:t.btnFollow},[r("svg",{staticClass:"bi bi-heart-fill mr-1 mt-1",attrs:{width:"12px",height:"12px",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"}})]),t._v("\n                                              "+t._s(t.data.total_follower)+"\n                                              "),t.data.followed?r("span",{staticClass:"px-1"},[t._v("Disukai")]):r("span",{staticClass:"px-1"},[t._v("Suka")])])])],1)])],1)])}),[],!1,null,null,null);e.default=component.exports},216:function(t,e,r){"use strict";r.r(e);r(59),r(24),r(25),r(13),r(137);var l={scrollToTop:!0,layout:"app",middleware:"auth",props:["group"],data:function(){return{modal_quest:!1,media:"",text:""}},methods:{createNew:function(){this.modal_quest=!0},cekSumber:function(t){if(t){if(t.search("spotify")>0)return"spotify";if(t.search("youtu.be")>0)return"youtube"}},textToArray:function(text){return text.toString().split(" ")},getUrl:function(t){if(t){if("spotify"==this.cekSumber(t))var e=t.split("/"),r="https://open.spotify.com/embed-podcast/"+e[3]+"/"+e[4].split("?")[0];else if("youtube"==this.cekSumber(t))r="https://www.youtube.com/embed/"+t.split("/")[3];else r="";return r}return""},kirim:function(){var t=this;this.$axios.$post("/quest",{group_id:this.group.id,text:this.text,audio:this.getUrl(this.media),quest_id:""}).then((function(e){t.modal_quest=!1,t.text="",t.media="",t.$emit("kirim")}))}}},o=r(9),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-full p-2"},[r("div",{class:t.$store.state.topMenu?"":"hidden"},[r("button",{staticClass:" bg-primary text-secondary p-3 right-0 rounded-full fixed bottom-0 mr-5 z-50 mb-16 lg:mr-20 flex  ",on:{click:t.createNew}},[r("svg",{staticClass:"bi bi-plus-circle",attrs:{width:"1.5em",height:"1.5em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"}}),t._v(" "),r("path",{attrs:{"fill-rule":"evenodd",d:"M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"}}),t._v(" "),r("path",{attrs:{"fill-rule":"evenodd",d:"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}})]),t._v(" "),r("span",{staticClass:"hidden lg:block px-2"},[t._v(" Buat Quest")])])]),t._v(" "),t.modal_quest?r("section",{staticClass:"w-full bg-transparent flex flex-wrap justify-center content-center z-30 fixed top-0 right-0 h-screen overflow-scroll"},[t.modal_quest?r("div",{staticClass:"w-full  flex flex-wrap justify-center content-center bg-theme_primary_dark opacity-50 z-40 fixed top-0 right-0 h-screen ",on:{click:function(e){t.modal_quest=!1}}}):t._e(),t._v(" "),r("div",{staticClass:"w-full p-4 lg:w-3/4 flex flex-wrap justify-center z-50 content-center bg-theme_primary rounded-xl"},[r("div",{staticClass:"w-full lg:w-1/2 p-4 shadow-sm bg-theme_primary_dark rounded-lg"},[r("div",{staticClass:"flex"},[r("img",{staticClass:"w-10 h-10 rounded-full",attrs:{src:t.$store.state.user.avatar,alt:"Event 1"}}),t._v(" "),r("router-link",{staticClass:"p-2",attrs:{to:"/@"+t.$store.state.user.username}},[r("span",{staticClass:"font-bold"},[t._v(t._s(t.$store.state.user.name))]),t._v(" "),r("span",{staticClass:"text-primary text-xs"},[t._v("@"+t._s(t.$store.state.user.username))])])],1),t._v(" "),r("br"),t._v(" "),t.media?r("div",{staticClass:"w-full pb-4 videoWrapper"},["spotify"==t.cekSumber(t.media)?r("iframe",{attrs:{src:t.getUrl(t.media),width:"100%",height:"232",frameborder:"0",allowtransparency:"true",allow:"encrypted-media"}}):t._e(),t._v(" "),"youtube"==t.cekSumber(t.media)?r("iframe",{attrs:{width:"560",height:"315",src:t.getUrl(t.media),frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}):t._e()]):t._e(),t._v(" "),t._l(t.textToArray(t.text),(function(e,i){return r("span",{key:i},["@"==e.slice(0,1)?r("router-link",{staticClass:"text-primary",attrs:{to:"/"+e}},[t._v(" "+t._s(e)+" ")]):"#"==e.slice(0,1)?r("router-link",{staticClass:"text-primary",attrs:{to:"/"+e.substring(1)}},[t._v(" "+t._s(e)+" ")]):r("span",[t._v(" "+t._s(e)+" ")])],1)}))],2),t._v(" "),r("div",{staticClass:"w-full lg:w-1/2 p-4 shadow-sm rounded-lg"},[r("label",{staticClass:"mx-2 text-xs"},[t._v("Opsional*")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.media,expression:"media"}],staticClass:"mx-2  p-3 bg-theme_primary_dark w-full rounded-lg",attrs:{placeholder:"Link Podcast -  Spotify / Youtube",type:"text"},domProps:{value:t.media},on:{input:function(e){e.target.composing||(t.media=e.target.value)}}}),t._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"mx-2 mt-5 p-3 bg-theme_primary_dark w-full rounded-lg",attrs:{placeholder:"Katakan sesuatu ..."},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),t._v(" "),r("button",{staticClass:"mx-2 py-2 w-full rounded-lg mt-2 bg-primary hover:bg-primary_dark text-white shadow-sm",on:{click:t.kirim}},[t._v("\n                  Kirim\n                ")]),t._v(" "),r("button",{staticClass:"mx-2 py-2 w-full rounded-lg mt-2 shadow-sm hover:bg-theme_primary_dark",on:{click:function(e){t.modal_quest=!1}}},[t._v("\n                  Batalkan\n                ")])])])]):t._e()])}),[],!1,null,null,null);e.default=component.exports},217:function(t,e,r){"use strict";r.r(e);r(59),r(24),r(25),r(13),r(137);var l={scrollToTop:!0,layout:"app",middleware:"auth",props:["quest"],data:function(){return{media:"",text:""}},methods:{cekSumber:function(t){if(t){if(t.search("spotify")>0)return"spotify";if(t.search("youtu.be")>0)return"youtube"}},textToArray:function(text){return text.toString().split(" ")},getUrl:function(t){if(t){if("spotify"==this.cekSumber(t))var e=t.split("/"),r="https://open.spotify.com/embed-podcast/"+e[3]+"/"+e[4].split("?")[0];else if("youtube"==this.cekSumber(t))r="https://www.youtube.com/embed/"+t.split("/")[3];else r="";return r}return""},kirim:function(){var t=this;this.$axios.$post("/quest",{group_id:this.quest.group_id,quest_id:this.quest.id,text:this.text,audio:this.getUrl(this.media)}).then((function(e){t.text="",t.media="",t.$emit("kirim")}))}}},o=r(9),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-full p-2"},[r("section",{staticClass:"w-full bg-transparent flex flex-wrap justify-center content-center z-30 fixed top-0 right-0 h-screen"},[r("div",{staticClass:"w-full  flex flex-wrap justify-center content-center bg-theme_primary_dark opacity-50 z-40 fixed top-0 right-0 h-screen ",on:{click:function(e){return t.$emit("batal")}}}),t._v(" "),r("div",{staticClass:"w-full p-4 lg:w-3/4 flex flex-wrap justify-center z-50 content-center bg-theme_primary rounded-xl"},[r("div",{staticClass:"w-full lg:w-1/2 p-4 shadow-sm bg-theme_primary_dark rounded-lg"},[r("div",{staticClass:"pl-5 flex flex-wrap items-start"},[r("div",{staticClass:"flex"},[r("img",{staticClass:"w-10 h-10 rounded-full",attrs:{src:t.$store.state.user.avatar,alt:"Event 1"}}),t._v(" "),r("router-link",{staticClass:"p-2",attrs:{to:"/@"+t.quest.user.username}},[r("span",{staticClass:"font-bold"},[t._v(t._s(t.quest.user.name))]),t._v(" "),r("span",{staticClass:"text-primary text-xs"},[t._v("@"+t._s(t.quest.user.username))])])],1),t._v(" "),r("br"),t._v(" "),t.quest.audio?r("div",{staticClass:"w-full py-2 videoWrapper"},["spotify"==t.cekSumber(t.quest.audio)?r("iframe",{attrs:{src:t.quest.audio,width:"100%",height:"232",frameborder:"0",allowtransparency:"true",allow:"encrypted-media"}}):t._e(),t._v(" "),"youtube"==t.cekSumber(t.quest.audio)?r("iframe",{attrs:{width:"560",height:"315",src:t.quest.audio,frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}):t._e()]):t._e(),t._v(" "),r("span",{staticClass:"w-full  mb-4 mt-2"},t._l(t.textToArray(t.quest.text),(function(e,i){return r("span",{key:i},["@"==e.slice(0,1)?r("router-link",{staticClass:"text-primary",attrs:{to:"/"+e}},[t._v(" "+t._s(e)+" ")]):"#"==e.slice(0,1)?r("router-link",{staticClass:"text-primary",attrs:{to:"/"+e.substring(1)}},[t._v(" "+t._s(e)+" ")]):r("span",[t._v(" "+t._s(e)+" ")])],1)})),0)]),t._v(" "),t.media||t.text?r("div",[r("b",{staticClass:"font-bold"},[t._v("Membalas :")]),t._v(" "),t.media?r("div",{staticClass:"w-full py-2 videoWrapper"},["spotify"==t.cekSumber(t.media)?r("iframe",{attrs:{src:t.getUrl(t.media),width:"100%",height:"232",frameborder:"0",allowtransparency:"true",allow:"encrypted-media"}}):t._e(),t._v(" "),"youtube"==t.cekSumber(t.media)?r("iframe",{attrs:{width:"560",height:"315",src:t.getUrl(t.media),frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}):t._e()]):t._e(),t._v(" "),t._l(t.textToArray(t.text),(function(e,i){return r("span",{key:i},["@"==e.slice(0,1)?r("router-link",{staticClass:"text-primary",attrs:{to:"/"+e}},[t._v(" "+t._s(e)+" ")]):"#"==e.slice(0,1)?r("router-link",{staticClass:"text-primary",attrs:{to:"/"+e.substring(1)}},[t._v(" "+t._s(e)+" ")]):r("span",[t._v(" "+t._s(e)+" ")])],1)}))],2):t._e()]),t._v(" "),r("div",{staticClass:"w-full lg:w-1/2 p-4 shadow-sm rounded-lg"},[r("label",{staticClass:"mx-2 text-xs"},[t._v("Opsional*")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.media,expression:"media"}],staticClass:"mx-2  p-3 bg-theme_primary_dark w-full rounded-lg",attrs:{placeholder:"Link Podcast -  Spotify / Youtube",type:"text"},domProps:{value:t.media},on:{input:function(e){e.target.composing||(t.media=e.target.value)}}}),t._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"mx-2 mt-5 p-3 bg-theme_primary_dark w-full rounded-lg",attrs:{placeholder:"Katakan sesuatu ..."},domProps:{value:t.text},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.kirim(e)},input:function(e){e.target.composing||(t.text=e.target.value)}}}),t._v(" "),r("button",{staticClass:"mx-2 py-2 w-full rounded-lg mt-2 bg-primary hover:bg-primary_dark text-white shadow-sm",on:{click:t.kirim}},[t._v("\n                  Kirim\n                ")]),t._v(" "),r("button",{staticClass:"mx-2 py-2 w-full rounded-lg mt-2 shadow-sm hover:bg-theme_primary_dark",on:{click:function(e){return t.$emit("batal")}}},[t._v("\n                  Batalkan\n                ")])])])])])}),[],!1,null,null,null);e.default=component.exports},229:function(t,e,r){"use strict";r.r(e);var l={layout:"no-header",middleware:"auth",data:function(){return{filterClassActive:"cursor-pointer relative mx-1 px-6 bg-primary text-secondary rounded-xl flex text-sm items-center justify-center p-2",filterClass:"cursor-pointer relative mx-1 px-6 bg-theme_primary_dark rounded-xl flex text-sm items-center justify-center p-2",group:"",quest:"",search:"",filter:"Quest Only",balas_quest:""}},fetch:function(){var t=this;this.$axios.$get("/group/"+this.$route.params.username).then((function(data){t.group=data,t.getData()}))},methods:{newQuest:function(){this.balas_quest="",this.getData()},balasQuest:function(data){this.balas_quest=data},getData:function(){var t=this;this.$axios.$get("/quest/"+this.group.id+"?filter="+this.filter).then((function(data){console.log(data),t.quest=data}))}}},o=r(9),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.group?r("div",{staticClass:"w-full"},[r("section",[r("div",{staticClass:"w-full flex flex-wrap bg-theme_primary p-2 pt-6 rounded-xl "},[r("div",{staticClass:"w-full font-bold flex px-2 "},[r("img",{staticClass:"w-16 h-16  rounded-full",attrs:{src:t.group.avatar,alt:t.group.name}}),t._v(" "),r("div",{staticClass:"w-full pl-5 mt-1 flex flex-wrap items-start "},[r("div",{staticClass:"w-full text-xl lg:text-2xl mb-2"},[t._v("\n            "+t._s(t.group.name)+"\n            "),r("br"),t._v(" "),r("small",[t._v("#"+t._s(t.group.username))])])])])])]),t._v(" "),r("new-quest",{attrs:{group:t.group},on:{kirim:t.newQuest}}),t._v(" "),t.balas_quest?r("balas-quest",{attrs:{quest:t.balas_quest},on:{kirim:t.newQuest,batal:function(e){t.balas_quest=!1}}}):t._e(),t._v(" "),r("div",{staticClass:"p-2 flex flex-row mt-2",staticStyle:{"overflow-x":"scroll"}},[r("div",{class:"Quest Only"==t.filter?t.filterClassActive:t.filterClass,on:{click:function(e){t.filter="Quest Only",t.getData()}}},[r("div",{staticClass:"-mt-1 -ml-1 h-6 w-6 absolute top-0 left-0 rounded-full shadow-lg bg-primary mr-3"}),t._v("\n        Quest Saja\n    ")]),t._v(" "),r("div",{class:"Quest & Balasan"==t.filter?t.filterClassActive:t.filterClass,on:{click:function(e){t.filter="Quest & Balasan",t.getData()}}},[r("div",{staticClass:"-mt-1 -ml-1 h-6 w-6 absolute top-0 left-0 rounded-full shadow-lg bg-primary mr-3"}),t._v("\n        Quest & Balasan\n    ")]),t._v(" "),r("div",{class:"Media"==t.filter?t.filterClassActive:t.filterClass,on:{click:function(e){t.filter="Media",t.getData()}}},[r("div",{staticClass:"-mt-1 -ml-1 h-6 w-6 absolute top-0 left-0 rounded-full shadow-lg bg-primary mr-3"}),t._v("\n        Media\n    ")])]),t._v(" "),r("section",{staticClass:"w-full rounded-xl pb-20 "},t._l(t.quest.data,(function(e){return r("card-post",{key:e.id,attrs:{data:e},on:{balas:t.balasQuest}})})),1)],1):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{NewQuest:r(216).default,BalasQuest:r(217).default,CardPost:r(214).default})}}]);