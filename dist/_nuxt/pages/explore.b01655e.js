(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{206:function(t,e,r){var content=r(211);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(74).default)("32abb0ec",content,!0,{sourceMap:!1})},207:function(t,e,r){"use strict";r.r(e);r(100),r(59),r(24),r(25),r(13);var l={parseQuestDate:function(t){var e=new Date(t),r=new Date,l=Math.round((r-e)/6e4);if(0==l)if((o=Math.round((r-e)/1e3))<10)var n="baru saja";else if(o<20)n="20 detik";else n="30 detik";else if(1==l){var o;if(30==(o=Math.round((r-e)/1e3)))n="30 detik";else if(o<60)n="< 1 menit";else n="1 menit"}else if(l<45)n=l+" menit";else if(l>44&&l<60)n="< 1 jam";else if(l<1440){var d=Math.round(l/60);if(1==d)n=" 1 jam";else n=d+" jam"}else if(l>1439&&l<2880)n="1 hari";else n=Math.round(l/1440)+" hari";return n}},n={props:["data","bigtext","active","hideBalasan"],data:function(){return{btnFollow:"flex relative ml-auto py-1 px-3 rounded-tl-xl rounded-br-xl bg-theme_primary_light text-xs text-primary",btnFollowed:"flex relative ml-auto py-1 px-3 rounded-tl-xl rounded-br-xl bg-primary text-xs text-secondary",followTemp:!1}},methods:{followQuest:function(t){var e=this;this.$axios.get("/quest/follow/"+t).then((function(t){e.followTemp=!0}))},parseQuestDate:function(data){return l.parseQuestDate(data)},textToArray:function(text){return text.toString().split(" ")},cekSumber:function(t){return t.search("spotify")>0?"spotify":t.search("youtube")>0?"youtube":void 0},imgPreview:function(t){if(t){if("spotify"==this.cekSumber(t))var e=t.split("/"),r="https://open.spotify.com/embed-podcast/"+e[3]+"/"+e[4].split("?")[0];else if("youtube"==this.cekSumber(t)){var l=t.split("/");r="https://img.youtube.com/vi/".concat(l[4],"/mqdefault.jpg")}else r="";return r}return""}}},o=(r(210),r(9)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-full p-2 relative cursor-pointer border-b border-theme_primary_light overflow-hidden"},[r("div",{staticClass:"shadow-sm rounded-xl bg-theme_primary hover:bg-theme_primary_dark p-3 ",class:t.active?"bg-theme_primary_dark":""},[t.hideBalasan?t._e():r("div",{staticClass:"w-full"},[t.data.quest_id?r("nuxt-link",{staticClass:"p-1 text-xs w-full",attrs:{to:t.data.group.username}},[t._v("\n                             \n                                     Membalas :\n                                     \n                                     "),r("nuxt-link",{staticClass:"bg-theme_primary_dark text-primary rounded-xl p-1 px-2",attrs:{to:"/quest/"+t.data.quest_id}},[r("b",[t._v(" @"+t._s(t.data.membalas_user))]),t._v("\n                                         : "+t._s(t.data.quest.text.substring(0,20))+" ..\n                                         \n                                      ")])],1):t._e()],1),t._v(" "),t.data.group.user_id==t.data.user.id?r("span",{staticClass:"bg-primary px-2 rounded-xl  text-xs text-secondary "},[t._v("admin")]):t._e(),t._v(" "),t.data.group_id?r("nuxt-link",{staticClass:"text-primary p-1 px-4 bg-theme_primary_dark rounded-tl-xl rounded-br-xl text-xs",attrs:{to:"/"+t.data.group.username}},[t._v("\n                                          \n                                      #"+t._s(t.data.group.username)+" \n\n                                      ")]):t._e(),t._v(" "),r("div",{staticClass:"flex pt-2"},[r("img",{staticClass:"w-10 h-10 rounded-full",attrs:{src:t.data.user.avatar,alt:"Event 1"}}),t._v(" "),r("nuxt-link",{staticClass:"p-2",attrs:{to:"/@"+t.data.user.username}},[r("span",{staticClass:"font-bold text-lg"},[t._v(t._s(t.data.user.name)+"\n                                          ")]),t._v(" "),r("span",{staticClass:"text-primary text-xs"},[t._v("@"+t._s(t.data.user.username))])]),t._v(" "),r("span",{staticClass:"text-xs ml-auto text-primary_light"},[t._v("\n                                      "+t._s(t.parseQuestDate(t.data.created_at))+"\n                                      ")])],1),t._v(" "),r("div",{staticClass:"w-auto flex "},[r("div",{staticClass:"flex flex-wrap items-start pl-8"},[t.data.audio?r("div",{staticClass:"py-2 w-full media-preview",on:{click:function(e){return t.$store.commit("setMediaPlayer",t.data.audio)}}},["youtube"==t.cekSumber(t.data.audio)?r("div",[r("img",{staticClass:"absolute play-button-youtube",attrs:{src:"/youtube.png",alt:"logo"}}),t._v(" "),r("img",{staticClass:"w-full rounded-xl",attrs:{src:t.imgPreview(t.data.audio),alt:"Preview"}})]):t._e(),t._v(" "),"spotify"==t.cekSumber(t.data.audio)?r("div",{staticClass:"bg-primary justify-beetween text-secondary w-full flex rounded-xl p-3 px-4 h-auto"},[r("svg",{staticClass:"bi bi-play",attrs:{width:"2em",height:"2em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M10.804 8L5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"}})]),t._v(" "),r("span",{staticClass:"p-1 px-2 font-bold"},[t._v("Play Podcast")])]):t._e()]):t._e(),t._v(" "),r("nuxt-link",{staticClass:"w-full pb-4 text-xl",class:t.bigtext?"text-2xl":"",attrs:{to:"/quest/"+t.data.id}},t._l(t.textToArray(t.data.text),(function(e,i){return r("span",{key:i},["@"==e.slice(0,1)?r("nuxt-link",{staticClass:"text-primary",attrs:{to:"/"+e}},[t._v(" "+t._s(e)+" ")]):"#"==e.slice(0,1)?r("nuxt-link",{staticClass:"text-primary",attrs:{to:"/"+e.substring(1)}},[t._v(" "+t._s(e)+" ")]):r("span",[t._v(" "+t._s(e)+" ")])],1)})),0),t._v(" "),r("div",{staticClass:"flex text-right "},[r("nuxt-link",{staticClass:"text-xs lg:text-lg text-primary ",attrs:{to:"/quest/"+t.data.id}},[t._v("\n                                      "+t._s(t.data.total_qna)+" Balasan\n                                      ")]),t._v(" "),r("div",{staticClass:"flex mx-3"},[r("button",{staticClass:"flex relative ml-auto py-1 px-5 mx-2 rounded-tl-xl rounded-br-xl bg-theme_primary_light text-xs text-primary",on:{click:function(e){return t.$emit("balas",t.data)}}},[r("svg",{staticClass:"bi bi-plus-circle mt-1 mr-1",attrs:{width:"12px",height:"12px",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"}}),t._v(" "),r("path",{attrs:{"fill-rule":"evenodd",d:"M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"}}),t._v(" "),r("path",{attrs:{"fill-rule":"evenodd",d:"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}})]),t._v("\n                                                  Balas\n                                              ")]),t._v(" "),r("div",{class:t.data.followed||t.followTemp?t.btnFollowed:t.btnFollow,on:{click:function(e){return t.followQuest(t.data.id)}}},[r("svg",{staticClass:"bi bi-heart-fill mr-1 mt-1",attrs:{width:"12px",height:"12px",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"}})]),t._v(" "),t.data.followed?r("span",[t._v("\n                                                          "+t._s(t.data.total_follower)+"\n                                                      ")]):r("span",[t._v("\n                                                          "+t._s(t.followTemp?parseInt(t.data.total_follower)+1:t.data.total_follower)+"\n                                                      ")]),t._v(" "),t.data.followed?r("span",{staticClass:"px-1"},[t._v("Disukai")]):r("span",[t.followTemp?r("span",{staticClass:"px-1"},[t._v("Disukai")]):r("span",{staticClass:"px-1"},[t._v("Suka")])])])])],1)],1)])],1)])}),[],!1,null,null,null);e.default=component.exports},208:function(t,e,r){"use strict";r.r(e);r(59),r(24),r(25),r(13),r(100);var l={scrollToTop:!0,layout:"app",middleware:"auth",props:["quest"],data:function(){return{media:"",text:""}},methods:{cekSumber:function(t){if(t){if(t.search("spotify")>0)return"spotify";if(t.search("youtube")>0)return"youtube"}},textToArray:function(text){return text.toString().split(" ")},getUrl:function(t){if(t){if("spotify"==this.cekSumber(t))var e=t.split("/"),r="https://open.spotify.com/embed-podcast/"+e[3]+"/"+e[4].split("?")[0];else if("youtube"==this.cekSumber(t))r="https://www.youtube.com/embed/"+t.split("/")[3];else r="";return r}return""},kirim:function(){var t=this;this.$axios.$post("/quest",{group_id:this.quest.group_id,quest_id:this.quest.id,text:this.text,audio:this.getUrl(this.media)}).then((function(e){t.text="",t.media="",t.$emit("kirim")}))}}},n=r(9),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-full p-2"},[r("section",{staticClass:"w-full bg-transparent flex flex-wrap justify-center content-center z-30 fixed top-0 right-0 h-screen"},[r("div",{staticClass:"w-full  flex flex-wrap justify-center content-center bg-theme_primary_dark opacity-50 z-40 fixed top-0 right-0 h-screen ",on:{click:function(e){return t.$emit("batal")}}}),t._v(" "),r("div",{staticClass:"w-full p-4 lg:w-3/4 flex flex-wrap justify-center z-50 content-center bg-theme_primary rounded-xl"},[r("div",{staticClass:"w-full lg:w-1/2 p-4 shadow-sm bg-theme_primary_dark rounded-lg"},[r("div",{staticClass:"pl-5 flex flex-wrap items-start"},[r("div",{staticClass:"flex"},[r("img",{staticClass:"w-10 h-10 rounded-full",attrs:{src:t.$store.state.user.avatar,alt:"Event 1"}}),t._v(" "),r("nuxt-link",{staticClass:"p-2",attrs:{to:"/@"+t.quest.user.username}},[r("span",{staticClass:"font-bold"},[t._v(t._s(t.quest.user.name))]),t._v(" "),r("span",{staticClass:"text-primary text-xs"},[t._v("@"+t._s(t.quest.user.username))])])],1),t._v(" "),r("span",{staticClass:"w-full  mb-4 mt-2"},t._l(t.textToArray(t.quest.text),(function(e,i){return r("span",{key:i},["@"==e.slice(0,1)?r("nuxt-link",{staticClass:"text-primary",attrs:{to:"/"+e}},[t._v(" "+t._s(e)+" ")]):"#"==e.slice(0,1)?r("nuxt-link",{staticClass:"text-primary",attrs:{to:"/"+e.substring(1)}},[t._v(" "+t._s(e)+" ")]):r("span",[t._v(" "+t._s(e)+" ")])],1)})),0)]),t._v(" "),r("b",{staticClass:"px-4 font-bold"},[t._v("Membalas :")]),t._v(" "),t.media||t.text?r("div",{staticClass:"px-4"},t._l(t.textToArray(t.text),(function(e,i){return r("span",{key:i},["@"==e.slice(0,1)?r("nuxt-link",{staticClass:"text-primary",attrs:{to:"/"+e}},[t._v(" "+t._s(e)+" ")]):"#"==e.slice(0,1)?r("nuxt-link",{staticClass:"text-primary",attrs:{to:"/"+e.substring(1)}},[t._v(" "+t._s(e)+" ")]):r("span",[t._v(" "+t._s(e)+" ")])],1)})),0):t._e()]),t._v(" "),r("div",{staticClass:"w-full lg:w-1/2 p-4 shadow-sm rounded-lg"},[r("label",{staticClass:"mx-2 text-xs"},[t._v("Opsional*")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.media,expression:"media"}],staticClass:"mx-2  p-3 bg-theme_primary_dark w-full rounded-lg",attrs:{placeholder:"Link Podcast -  Spotify / Youtube",type:"text"},domProps:{value:t.media},on:{input:function(e){e.target.composing||(t.media=e.target.value)}}}),t._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"mx-2 mt-5 p-3 bg-theme_primary_dark w-full rounded-lg",attrs:{maxlength:"255",placeholder:"Katakan sesuatu ..."},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),t._v(" "),r("button",{staticClass:"mx-2 py-2 w-full rounded-lg mt-2 bg-primary hover:bg-primary_dark text-white shadow-sm",on:{click:t.kirim}},[t._v("\n                  Kirim\n                ")]),t._v(" "),r("button",{staticClass:"mx-2 py-2 w-full rounded-lg mt-2 shadow-sm hover:bg-theme_primary_dark",on:{click:function(e){return t.$emit("batal")}}},[t._v("\n                  Batalkan\n                ")])])])])])}),[],!1,null,null,null);e.default=component.exports},209:function(t,e,r){var l=r(6),n=r(140)(!1);l(l.S,"Object",{values:function(t){return n(t)}})},210:function(t,e,r){"use strict";var l=r(206);r.n(l).a},211:function(t,e,r){(e=r(73)(!1)).push([t.i,".videoWrapper iframe{width:100%;min-height:100px;border-radius:10px}.play-button-youtube{width:14%;top:40%;left:43%;opacity:.8}.media-preview{position:relative}.media-preview:hover .play-button-youtube{opacity:1}",""]),t.exports=e},226:function(t,e,r){"use strict";r.r(e);r(19),r(13),r(209),r(100);var l={layout:"no-header",middleware:"auth",data:function(){return{quest:"",search:"",balas_quest:"",page:1,loadMore:!1,last_page:!1}},fetch:function(){this.getData()},mounted:function(){var t=this;window.addEventListener("scroll",(function(){document.documentElement.scrollTop+window.innerHeight===document.documentElement.offsetHeight&&(t.last_page?this.loadMore=!1:t.loadMoregetData())}))},methods:{loadMoregetData:function(){var t=this;this.loadMore=!0,this.page=this.page+1,this.$axios.$get("/quest/home/explore?search="+this.search+"&page="+this.page).then((function(e){if(e.data=Object.values(e.data),e.data.length>0){var r=Object.values(t.quest.data);t.quest.data=r.concat(e.data)}else t.last_page=!0;t.loadMore=!1}))},newQuest:function(){this.balas_quest="",this.getData()},balasQuest:function(data){this.balas_quest=data},getData:function(){var t=this;this.last_page=!1,this.page=1,this.$axios.$get("/quest/home/explore?search="+this.search+"&page="+this.page).then((function(e){t.quest=e}))},to:function(t){"right"==t&&this.$router.push("/")}}},n=r(9),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{directives:[{name:"touch",rawName:"v-touch:swipe",value:t.to,expression:"to",arg:"swipe"}],staticClass:"w-full"},[r("div",{staticClass:"mx-auto text-sm flex content-center justify-center text-center p-2"},[r("nuxt-link",{staticClass:"bg-theme_primary_dark text-primary hover:bg-primary hover:text-white hover:border-0 mx-1 w-1/2 px-10 py-2  rounded-full font-bold",attrs:{to:"/"}},[t._v(" "+t._s(t.$t("Home"))+" ")]),t._v(" "),r("nuxt-link",{staticClass:"mx-1 w-1/2 px-10 py-2  bg-primary text-white rounded-full font-bold",attrs:{to:"/explore"}},[t._v("\n      "+t._s(t.$t("Explore"))+" \n      ")])],1),t._v(" "),t.balas_quest?r("balas-quest",{attrs:{quest:t.balas_quest},on:{kirim:t.newQuest,batal:function(e){t.balas_quest=!1}}}):t._e(),t._v(" "),r("section",{staticClass:"w-full rounded-xl pb-20 flex flex-wrap"},[t._l(t.quest.data,(function(e){return r("card-post",{key:e.id,attrs:{data:e},on:{balas:t.balasQuest}})})),t._v(" "),t.loadMore?r("span",{staticClass:"p-4 text-center w-full"},[t._v("\n          Memuat ...\n        ")]):t._e()],2)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BalasQuest:r(208).default,CardPost:r(207).default})}}]);