(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{258:function(t,e,n){var r=n(6),l=n(162)(!1);r(r.S,"Object",{values:function(t){return l(t)}})},263:function(t,e,n){"use strict";n.r(e);var r={layout:"no-header",middleware:"auth",props:["group","text"],computed:{urlQuest:function(){return this.$props.text?"/new/quest?text=".concat(this.$props.text):"/new/quest"}}},l=n(11),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-full p-2"},[n("div",{class:t.$store.state.topMenu?"":"hidden"},[n("nuxt-link",{staticClass:"bg-theme_primary_dark text-primary p-3 right-0 rounded-full fixed bottom-0 mr-5 z-30 mb-16 lg:mr-20 flex lg:px-5 ",attrs:{to:t.localePath(t.group?"/new/quest?group_id="+t.group.id+"&group_username="+t.group.username:t.urlQuest)}},[n("svg",{staticClass:"bi bi-cursor",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103zM2.25 8.184l3.897 1.67a.5.5 0 0 1 .262.263l1.67 3.897L12.743 3.52 2.25 8.184z"}})]),t._v(" "),n("span",{staticClass:"hidden lg:block px-2 text-xs"},[t._v(" Buat ")])])],1)])}),[],!1,null,null,null);e.default=component.exports},270:function(t,e,n){"use strict";n.r(e);var r={props:["name"],data:function(){return{activeClass:"mx-1 px-5 py-2  text-primary rounded-full font-bold",nonActiveClass:"px-5 mx-1 py-2  border-primary  font-bold"}}},l=n(11),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mb-10 w-full"},[n("div",{staticClass:"text-sm flex fixed top-0 z-10 bg-theme_primary w-full mx-auto pt-2 ",staticStyle:{"max-width":"600px"}},[n("nuxt-link",{class:t.$route.path.includes(t.name)&&!t.$route.path.includes(t.name+"-explore")?t.activeClass:t.nonActiveClass,attrs:{to:t.localePath("/"+t.name)}},[t._v("\r\n            "+t._s(t.$t("Followed"))+"\r\n            ")]),t._v(" "),n("nuxt-link",{class:t.$route.path.includes(t.name+"-explore")?t.activeClass:t.nonActiveClass,attrs:{to:t.localePath("/"+t.name+"-explore")}},[t._v("\r\n            "+t._s(t.$t("Explore"))+"\r\n            ")]),t._v(" "),n("nuxt-link",{staticClass:"px-5 mx-1 ml-auto py-2 font-bold mt-1",attrs:{to:t.localePath("/search")}},[n("svg",{staticClass:"bi bi-search",attrs:{width:"1.2em",height:"1.2em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"}}),t._v(" "),n("path",{attrs:{"fill-rule":"evenodd",d:"M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"}})])])],1)])}),[],!1,null,null,null);e.default=component.exports},713:function(t,e,n){"use strict";n.r(e);n(22),n(12),n(258),n(160),n(15);var r=n(3),l=n(256),o={transition:"slide-fade",components:{InfiniteLoading:n.n(l).a},scrollToTop:!0,layout:"no-header",middleware:"auth",data:function(){return{quest:"",search:"",balas_quest:"",page:1}},mounted:function(){var t=this;this.$store.state.data_quest_following.data?0==this.$store.state.data_quest_following.data.length?this.getData():(this.quest=this.$store.state.data_quest_following.data,this.page=this.$store.state.data_quest_following.page,this.$nextTick((function(){t.scrollToLast()}))):this.getData()},methods:{swipeHandler:function(t){"left"==t&&this.$router.push("/feed-explore")},scrollToLast:function(){var t=this.quest[this.quest.length-5];t&&this.$scrollTo("#feed"+t.id)},loadMoregetData:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.page=e.page+1,n.next=3,e.$axios.$get("/quest/home?search="+e.search+"&page="+e.page).then((function(n){n.total>0?(e.lastPage=!1,e.quest=e.quest.concat(Object.values(n.data)),e.$store.commit("setDataQuestFollowing",{data:e.quest,page:e.page}),t.loaded()):t.complete()}));case 3:case"end":return n.stop()}}),n)})))()},balasQuest:function(data){this.balas_quest=data},getData:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.lastPage=!1,t.page=1,e.next=4,t.$axios.$get("/quest/home?search="+t.search+"&page="+t.page).then((function(e){t.quest=Object.values(e.data),t.$store.commit("setDataQuestFollowing",{data:t.quest,page:t.page}),0==t.quest.length&&t.$router.push(t.localePath("/feed-explore"))}));case 4:case"end":return e.stop()}}),e)})))()}}},c=n(11),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"touch",rawName:"v-touch:swipe",value:t.swipeHandler,expression:"swipeHandler",arg:"swipe"}],staticClass:"w-full min-h-screen"},[n("subheader",{attrs:{name:"feed"}}),t._v(" "),n("section",{staticClass:"w-full rounded-xl pb-20 flex flex-wrap"},[t._l(t.$store.state.data_quest_following.data,(function(e){return n("card-post",{key:e.id,attrs:{id:"feed"+e.id,data:e},on:{balas:t.balasQuest}})})),t._v(" "),n("new-quest"),t._v(" "),t.balas_quest?n("balas-quest",{attrs:{quest:t.balas_quest},on:{batal:function(e){t.balas_quest=!1}}}):t._e(),t._v(" "),n("infinite-loading",{on:{infinite:t.loadMoregetData}},[n("div",{attrs:{slot:"no-more"},slot:"no-more"}),t._v(" "),n("div",{attrs:{slot:"no-results"},slot:"no-results"})])],2)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Subheader:n(270).default,CardPost:n(271).default,NewQuest:n(263).default,BalasQuest:n(262).default})}}]);