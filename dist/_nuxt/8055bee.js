(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{319:function(t,e,n){var content=n(695);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(31).default)("696984a1",content,!0,{sourceMap:!1})},406:function(t,e){},408:function(t,e){},418:function(t,e){},420:function(t,e){},445:function(t,e){},447:function(t,e){},448:function(t,e){},454:function(t,e){},456:function(t,e){},474:function(t,e){},476:function(t,e){},488:function(t,e){},491:function(t,e){},694:function(t,e,n){"use strict";var o=n(319);n.n(o).a},695:function(t,e,n){(e=n(30)(!1)).push([t.i,".insert-image-container[data-v-4f8c1934]{display:none;position:absolute;left:-10000000}",""]),t.exports=e},719:function(t,e,n){"use strict";n.r(e);n(54),n(21),n(22),n(12),n(111);var o=n(2),l=n(379),r=n.n(l),d=n(286),c=n.n(d),m=(n(287),n(294)),f=n.n(m),h=(n(295),n(699));o.default.use(r.a),o.default.use(c.a),o.default.component("medium-editor",h.a);var v={layout:"no-header",middleware:"auth",components:{"v-select":f.a},data:function(){return{recordings:"",group:"",defaultValue:"",options:{uploadUrl:"https://api.imgur.com/3/image",uploadUrlHeader:{Authorization:"Client-ID 8e88bc43a6e7aa9"},file_input_name:"image",imgur:!0,placeholder:{text:"Deskripsi Lengkap"},toolbar:{buttons:["bold","italic",{name:"anchor",action:"createLink",aria:"link",tagNames:["a"],contentDefault:"<b>🔗</b>",contentFA:'<i class="fa fa-link"></i>'},"underline","quote","h5","h6","unorderedlist","orderedlist"]}},modal_quest:!1,showModal:"",d:{desc:"",type:""},img:{audio:"",width:300,height:200},imgTemp:null}},created:function(){var t=this;this.$nextTick((function(){return t.$refs.inputTextArea.focus()})),this.$route.query.group_id&&(this.group={id:this.$route.query.group_id,username:this.$route.query.username})},methods:{onStream:function(t){},onResult:function(data){var t=window.URL.createObjectURL(data);this.recordings=t;var e=this,n=new window.FileReader;n.readAsDataURL(data),n.onloadend=function(){e.d.audio=n.result}},onChange:function(){},cropImg:function(){var t=this;this.imgTemp&&(this.d.img=this.imgTemp.generateDataUrl("image/jpeg",.8),this.showModal="",this.$nextTick((function(){return t.$refs.inputTextArea.focus()})))},showModalQuest:function(source){var t=this;"img"==source?this.showModal="img":"sp"==source&&(this.showModal="sp",this.$nextTick((function(){return t.$refs.inputSP.focus()}))),"yt"==source&&(this.showModal="yt",this.$nextTick((function(){return t.$refs.inputYT.focus()})))},createNew:function(){var t=this;this.modal_quest=!0,this.$nextTick((function(){return t.$refs.inputTextArea.focus()}))},cekSumber:function(t){if(t){if(t.search("spotify")>0)return"spotify";if(t.search("youtu.be")>0)return"youtube"}},textToArray:function(text){return text.toString().split(" ")},getUrl:function(t){if(t){if("spotify"==this.cekSumber(t))var e=t.split("/"),n="https://open.spotify.com/embed-podcast/"+e[3]+"/"+e[4].split("?")[0];else if("youtube"==this.cekSumber(t))n="https://www.youtube.com/embed/"+t.split("/")[3];else n="";return n}return""},kirim:function(){var t=this;this.group&&(this.d.group_id=this.group.id),this.d.embed=this.getUrl(this.d.embed),this.d.text&&(this.$store.commit("setLoading",!0),this.$axios.$post("/quest",this.d).then((function(e){t.$store.commit("setLoading",!1),t.$router.push("/quest/"+e.id)})))}}},w=(n(694),n(8)),component=Object(w.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-full p-2"},[n("div",{staticClass:"w-full content-start max-w-xl bg-theme_primary_light flex flex-wrap justify-center z-50 overflow-y-scroll  rounded-xl p-4"},[t.d.video?n("div",{staticClass:"rounded-xl w-full"},[n("video",{attrs:{width:"100%",controls:"",autoplay:""}},[n("source",{attrs:{src:t.d.video,type:"video/mp4"}}),t._v("\n        Your browser does not support the video tag.\n      ")])]):t._e(),t._v(" "),t.d.img?n("div",{staticClass:"w-full"},[n("img",{staticClass:"w-full rounded-xl",attrs:{src:t.d.img}})]):t._e(),t._v(" "),t.d.embed?n("div",{staticClass:"w-full pb-4 videoWrapper"},["spotify"==t.cekSumber(t.d.embed)?n("iframe",{attrs:{src:t.getUrl(t.d.embed),width:"100%",height:"232",frameborder:"0",allowtransparency:"true",allow:"encrypted-media"}}):t._e(),t._v(" "),"youtube"==t.cekSumber(t.d.embed)?n("iframe",{attrs:{width:"560",height:"315",src:t.getUrl(t.d.embed),frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}):t._e()]):t._e(),t._v(" "),t.group?n("h1",{staticClass:"p-2 font-bold"},[t._v("\n      Kirim Ke Group : #"+t._s(t.group.username)+"\n    ")]):t._e(),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.d.text,expression:"d.text"}],ref:"inputTextArea",staticClass:"bg-theme_primary_dark w-full rounded-lg p-4 mt-3",staticStyle:{height:"120px"},attrs:{placeholder:"Deskripsi Singkat",maxlength:"255"},domProps:{value:t.d.text},on:{click:function(e){t.showModal=""},input:function(e){e.target.composing||t.$set(t.d,"text",e.target.value)}}}),t._v(" "),n("div",{staticClass:"w-full p-2 flex flex-wrap justify-center lg:hidden"},[n("vue-record-audio",{staticClass:"lg:mx-3",attrs:{mode:"hold"},on:{result:t.onResult}}),t._v(" "),t.recordings?n("audio",{staticClass:"mt-2",attrs:{src:t.recordings,controls:""}}):t._e()],1),t._v(" "),t.recordings?n("span",{staticClass:"text-danger text-xs",on:{click:function(e){t.d.audio="",t.recordings=""}}},[t._v("Hapus Audio")]):t._e(),t._v(" "),n("div",{staticClass:"flex w-full mt-3 "},[n("span",{staticClass:"px-2"},[t._v("Upload  :")]),t._v(" "),n("div",{staticClass:"ml-8 cursor-pointer text-primary",on:{click:function(e){return t.showModalQuest("img")}}},[n("svg",{staticClass:"w-7 h-8 bi bi-card-image",attrs:{viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M14.5 3h-13a.5.5 0 0 0-.5.5v9c0 .013 0 .027.002.04V12l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094L15 9.499V3.5a.5.5 0 0 0-.5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm4.502 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"}})])]),t._v(" "),n("img",{staticClass:"ml-8 cursor-pointer w-8 h-8",attrs:{src:"/youtube.png"},on:{click:function(e){return t.showModalQuest("yt")}}}),t._v(" "),n("img",{staticClass:"ml-8 cursor-pointer w-8 h-8",attrs:{src:"/spotify.png"},on:{click:function(e){return t.showModalQuest("sp")}}})]),t._v(" "),n("div",{staticClass:"flex w-full mt-2 bg-theme_primary_dark rounded-full"},[n("button",{staticClass:" text-xs p-2 w-full flex justify-center",class:1==t.d.type?"bg-primary text-secondary rounded-full":"",on:{click:function(e){t.d.type=1}}},[t._v("\n     \n        Story\n      ")]),t._v(" "),n("button",{staticClass:" text-xs p-2 w-full flex justify-center",class:2==t.d.type?"bg-primary text-secondary rounded-full":"",on:{click:function(e){t.d.type=2}}},[t._v("\n     \n        Channel\n      ")]),t._v(" "),t.d.type?n("button",{staticClass:"bg-danger rounded-full text-white text-xs p-2 w-full flex justify-center",class:3==t.d.type?"bg-primary text-secondary":"",on:{click:function(e){t.d.type=""}}},[t._v("\n        Batalkan\n      ")]):t._e()]),t._v(" "),t.d.type?n("div",{staticClass:"flex flex-wrap w-full mt-3"},[2==t.d.type?n("div",{staticClass:"w-full"},[n("div",{staticClass:"flex flex-wrap"},[n("div",{staticClass:"flex w-full lg:w-1/2 flex-wrap p-2"},[n("label",{staticClass:"py-2"},[t._v("Tanggal Mulai")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.d.start,expression:"d.start"}],staticClass:"w-full shadow-sm bg-theme_primary_dark py-2 px-4 rounded-lg mb-3",attrs:{type:"date",placeholder:"Tanggal Mulai "},domProps:{value:t.d.start},on:{input:function(e){e.target.composing||t.$set(t.d,"start",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"flex w-full lg:w-1/2 flex-wrap p-2"},[n("label",{staticClass:"py-2"},[t._v("Tanggal Selesai")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.d.end,expression:"d.end"}],staticClass:"w-full  shadow-sm bg-theme_primary_dark py-2 px-4 rounded-lg mb-3",attrs:{type:"date",placeholder:"Tanggal Selesai "},domProps:{value:t.d.end},on:{input:function(e){e.target.composing||t.$set(t.d,"end",e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"flex p-2 items-start flex-wrap"},[t._m(0),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.d.price,expression:"d.price"}],staticClass:"w-full lg:w-1/2 shadow-sm bg-theme_primary_dark py-2 px-4 rounded-lg mb-3",attrs:{type:"number",placeholder:"Rp.0 "},domProps:{value:t.d.price},on:{input:function(e){e.target.composing||t.$set(t.d,"price",e.target.value)}}}),t._v(" "),n("br"),t._v(" "),n("small",{staticClass:"text-xs"},[t._v('"Untuk Verifikasi pembayaran anggota dilakukan oleh admin channel / acara"')])]),t._v(" "),n("div",{staticClass:"flex w-full text-center flex-wrap p-2"},[t._v('\n            "Untuk Membuat Channel / Acara anda harus memebayar Rp.50rb kepada Kami untuk supporting system :)"\n        ')])]):t._e()]):t._e(),t._v(" "),t.d.type?n("div",{staticClass:"w-full"},[n("medium-editor",{staticClass:"bg-theme_primary_dark p-2 px-5 rounded-lg",attrs:{prefill:t.defaultValue,options:t.options,onChange:t.onChange},model:{value:t.d.desc,callback:function(e){t.$set(t.d,"desc",e)},expression:"d.desc"}}),t._v(" "),n("h1",{staticClass:"text-xs text-center w-full p-2 mb-2 lg:hidden"},[t._v("\n        Rekomendasi Menggunakan Laptop / PC *\n      ")])],1):t._e(),t._v(" "),n("button",{staticClass:" py-2 w-full rounded-full mt-2 bg-primary hover:bg-primary_dark text-white shadow-sm",on:{click:t.kirim}},[t._v("\n      Kirim\n    ")]),t._v(" "),n("button",{staticClass:" py-2 w-full rounded-full mt-2  text-primary shadow-sm",on:{click:function(e){return t.$router.back()}}},[t._v("\n      Batalkan\n    ")]),t._v(" "),t.showModal?n("section",{staticClass:"w-full bg-transparent flex flex-wrap justify-center content-end lg:content-conter z-30 right-0 "},[n("div",{staticClass:"w-full  flex flex-wrap justify-center content-end lg:content-conter bg-theme_primary_dark opacity-50 z-40 right-0  ",on:{click:function(e){t.showModal=""}}}),t._v(" "),n("div",{staticClass:"w-full  justify-center flex flex-wrap z-50 content-end lg:content-conter bg-theme_primary_dark rounded-xl p-5 mx-auto absolute bottom-0 mb-32 ",staticStyle:{"z-index":"1000000","max-width":"600px"}},["yt"==t.showModal?n("div",{staticClass:"w-full flex flex-wrap"},[n("h1",{staticClass:"font-bold p-2"},[t._v("Paste Youtube Share Link")]),t._v(" "),n("span",{staticClass:"text-danger ml-auto",on:{click:function(e){t.showModal=""}}},[t._v("Tutup")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.d.embed,expression:"d.embed"}],ref:"inputYT",staticClass:"  p-3 bg-theme_primary_dark w-full rounded-lg",attrs:{placeholder:"Link Youtube contoh: 'https://youtu.be/hH6hI5grCms'",type:"text"},domProps:{value:t.d.embed},on:{input:function(e){e.target.composing||t.$set(t.d,"embed",e.target.value)}}})]):t._e(),t._v(" "),"sp"==t.showModal?n("div",{staticClass:"w-full flex flex-wrap"},[n("h1",{staticClass:"font-bold p-2"},[t._v("Paste Spotify Podcast Link")]),t._v(" "),n("span",{staticClass:"text-danger ml-auto",on:{click:function(e){t.showModal=""}}},[t._v("Tutup")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.d.embed,expression:"d.embed"}],ref:"inputSP",staticClass:"  p-3 bg-theme_primary_dark w-full rounded-lg",attrs:{placeholder:"Spotify Podcast Link contoh: 'https://open.spotify.com/episode/1IJCl8993xjDNdIKR5EVVE?si=K4XrGBSrS12Kcjh3ZHOMZA'",type:"text"},domProps:{value:t.d.embed},on:{input:function(e){e.target.composing||t.$set(t.d,"embed",e.target.value)}}})]):t._e(),t._v(" "),"img"==t.showModal?n("div",{staticClass:"w-full flex flex-wrap"},[n("h1",{staticClass:"font-bold p-2"},[t._v("Coming Soon")]),t._v(" "),n("span",{staticClass:"text-danger ml-auto",on:{click:function(e){t.showModal=""}}},[t._v("Tutup")]),t._v(" "),n("div",{staticClass:"w-full text-center"},[n("croppa",{staticClass:"shadow-sm rounded-lg bg-primary",attrs:{"prevent-white-space":"",width:t.img.width,height:t.img.height,quality:2,placeholder:"Upload Foto"},model:{value:t.imgTemp,callback:function(e){t.imgTemp=e},expression:"imgTemp"}}),t._v(" "),n("br"),t._v(" "),t.imgTemp?n("button",{staticClass:"bg-primary px-4 py-2 rounded-lg text-secondary",on:{click:t.cropImg}},[t._v("\n              Crop & Simpan\n            ")]):t._e()],1)]):t._e()])]):t._e()])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"w-full lg:w-1/2 py-2"},[this._v("Harga :  \n            "),e("br"),this._v(" "),e("small",{staticClass:"text-xs"},[this._v('"Kosongkan jika gratis untuk siapa saja"')])])}],!1,null,"4f8c1934",null);e.default=component.exports}}]);