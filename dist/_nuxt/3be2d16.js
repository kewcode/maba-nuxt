(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{262:function(t,e,n){var l=n(6),r=n(163)(!1);l(l.S,"Object",{values:function(t){return r(t)}})},270:function(t,e,n){"use strict";n.r(e);var l={props:["name"],data:function(){return{activeClass:"mx-1 pr-3 py-2  text-primary rounded-full font-bold",nonActiveClass:"pr-3 mx-1 py-2  border-primary  font-bold"}}},r=n(11),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mb-10 w-full"},[n("div",{staticClass:"text-sm flex fixed top-0 z-10 bg-theme_primary w-full mx-auto pt-2 px-3",staticStyle:{"max-width":"600px"}},[n("nuxt-link",{class:t.$route.path.includes(t.name)&&!t.$route.path.includes(t.name+"-explore")?t.activeClass:t.nonActiveClass,attrs:{to:t.localePath("/profile")}},[n("img",{staticClass:"w-6 h-6 rounded-full",attrs:{src:t.$store.state.user.avatar,alt:"Avatar"}})]),t._v(" "),n("nuxt-link",{class:t.$route.path.includes(t.name)&&!t.$route.path.includes(t.name+"-explore")?t.activeClass:t.nonActiveClass,attrs:{to:t.localePath("/"+t.name)}},[t._v("\r\n            "+t._s(t.$t("Followed"))+"\r\n            ")]),t._v(" "),n("nuxt-link",{class:t.$route.path.includes(t.name+"-explore")?t.activeClass:t.nonActiveClass,attrs:{to:t.localePath("/"+t.name+"-explore")}},[t._v("\r\n            "+t._s(t.$t("Explore"))+"\r\n            ")]),t._v(" "),n("nuxt-link",{staticClass:" mx-1 ml-auto py-2 font-bold mt-1",attrs:{to:t.localePath("/search")}},[n("svg",{staticClass:"bi bi-search",attrs:{width:"1.2em",height:"1.2em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"}}),t._v(" "),n("path",{attrs:{"fill-rule":"evenodd",d:"M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"}})])])],1)])}),[],!1,null,null,null);e.default=component.exports},714:function(t,e,n){"use strict";n.r(e);n(22),n(12),n(262),n(162),n(15);var l=n(3),r=n(257),o={scrollToTop:!0,components:{InfiniteLoading:n.n(r).a},layout:"no-header",middleware:"auth",data:function(){return{questdata:"",search:"",balas_quest:"",page:1}},mounted:function(){var t=this;this.$store.state.data_quest_explore?(this.questdata=this.$store.state.data_quest_explore.data,this.page=this.$store.state.data_quest_explore.page,this.$nextTick((function(){t.scrollToLast()}))):this.getData()},methods:{swipeHandler:function(t){"right"==t?this.$router.push("/feed"):"left"==t&&this.$router.push("/search")},scrollToLast:function(){var t=this.questdata[this.questdata.length-5];t&&this.$scrollTo("#feed"+t.id)},loadMoregetData:function(t){var e=this;return Object(l.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.page=e.page+1,n.next=3,e.$axios.$get("/quest/home/explore?search="+e.search+"&page="+e.page).then((function(n){n.total>0?(t.loaded(),e.questdata=e.questdata.concat(Object.values(n.data)),e.$store.commit("setDataQuestExplore",{data:e.questdata,page:e.page})):t.complete()}));case 3:case"end":return n.stop()}}),n)})))()},newQuest:function(){this.balas_quest="",this.getData()},balasQuest:function(data){this.balas_quest=data},getData:function(){var t=this;this.last_page=!1,this.page=1,this.$axios.$get("/quest/home/explore?search="+this.search+"&page="+this.page).then((function(e){t.questdata=Object.values(e.data),t.$store.commit("setDataQuestExplore",{data:t.questdata,page:t.page})}))}}},c=n(11),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"touch",rawName:"v-touch:swipe",value:t.swipeHandler,expression:"swipeHandler",arg:"swipe"}],staticClass:"w-full min-h-screen"},[n("subheader",{attrs:{name:"feed"}}),t._v(" "),t.balas_quest?n("balas-quest",{attrs:{quest:t.balas_quest},on:{batal:function(e){t.balas_quest=!1}}}):t._e(),t._v(" "),n("section",{staticClass:"w-full rounded-xl pb-20 flex flex-wrap"},[t._l(t.questdata,(function(e){return n("card-post",{key:e.id,attrs:{data:e,id:"feed"+e.id},on:{balas:t.balasQuest}})})),t._v(" "),n("infinite-loading",{on:{infinite:t.loadMoregetData}},[n("div",{attrs:{slot:"no-more"},slot:"no-more"}),t._v(" "),n("div",{attrs:{slot:"no-results"},slot:"no-results"})])],2)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Subheader:n(270).default,BalasQuest:n(265).default,CardPost:n(271).default})}}]);