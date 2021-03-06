
import Vuex from 'vuex'

const createStore = () => {
    return new  Vuex.Store({
        state: {
                anonim: localStorage.getItem("anonim") || false,
                notif: [],
                playing_path: '',
                playing: '',
                media_player: '',
                show_media_player: true,
                storage: process.env.storageUrl,
                data:{
                    mygroup: []
                },
                auth: localStorage.getItem("auth") || false,
                user: JSON.parse(localStorage.getItem("user")) || '',
                access_token: localStorage.getItem("access_token") || '',
                errorMessages: '',
                settings: false,
                theme: localStorage.getItem("theme") || 'theme-light',
                primaryColor: localStorage.getItem("primary-color") || 'primary-teal',
                topMenu: true,
                loading:false,
                data_my_events: '',
                data_quest_following: '',
                data_quest_explore: '',
                scroll_home_state: ''
            },

        mutations:{
          
            setAnonim(state,to){
                localStorage.setItem("anonim", to)
                state.anonim = to
            },
            set_scroll_home(state,data){
                state.scroll_home_state = data
            },
            setDataQuestFollowing (state, data) {
                state.data_quest_following = data
            },
            setDataQuestExplore (state, data) {
                state.data_quest_explore = data
            },
            setDataMyEvents(state, data) {
                state.data_my_events = data
            },
        
            setNotif (state, data) {
                    this.$fireDb.ref('notifikasi/'+data.to).update({
                    text: data.text,
                    }).then(function(snapshot) {
                        console.log(snapshot)
                    });
              },
            loading(state,to){
                state.loading = to
            },
        
            setTopMenu(state,to){
                state.topMenu = to
            },
            setMediaPlayer(state,to){
                state.playing_path = to.path


                state.playing = to.data
                if(to.data.video){
                    console.log(to.data.video);
                    state.media_player = to.data.video
                }else{
                    state.media_player = to.data.embed
                }
               
                state.show_media_player = true
            },
            setShowMediaPlayer(state,to){
                state.show_media_player = to
            },
            resetMediaPlayer(state){
                state.media_player = ""
                state.show_media_player = true
            },
            setErrorMessages(state,to){
                state.errorMessages = to
            },
            setTheme(state, to) {
                state.theme = to
                localStorage.setItem("theme", to)
            },
            setPrimaryColor(state,to){
                state.primaryColor = to
                localStorage.setItem("primary-color", to)
            },
            toggleSetting(state,to){
                if(state.settings){
                    state.settings = false
                }else{
                    state.settings = true
                }
            },
            updateProfile(state,data){
                localStorage.setItem("user",JSON.stringify(data))
                state.user = data
            },
    
            login(state,data){
                state.loading = true
            //    Login
                 this.$axios.$post('login',data)
                    .then(res => {
        
                        if(res.user){
                            console.log("berhasil")
        
                            localStorage.setItem("auth",true)
                            localStorage.setItem("user",JSON.stringify(res.user))
                            localStorage.setItem("access_token",res.access_token)
        
                                
                            state.auth = true
                            state.user = res.user
                            state.access_token = res.access_token
        
                            state.showAuth = false
                            state.errorMessages = ''

                            this.$router.push("/")
        
        
                        }else{
                            console.log("gagal")
                            state.errorMessages = res.message
                        }
                         state.loading = false

                    })
                    .catch(err => {
                        state.errorMessages = "Akun tidak ditemukan"
                        state.loading = false
                   })
            },
            loginfb(state,data){
                //    Login
                state.loading = true
        
                this.$axios.$post('loginfb',data)
                        .then(res => {
        
                            if(res.user){
                                localStorage.setItem("auth",true)
                                localStorage.setItem("user",JSON.stringify(res.user))
                                localStorage.setItem("access_token",res.access_token)
        
                                this.$axios.setHeader('Authorization', 'Bearer '+res.access_token)
                                    
                                state.auth = true
                                state.user = res.user
                                state.access_token = res.access_token
        
                                state.showAuth = false
        
                                state.errorMessages = ''
        
        
                                this.$router.push("/")

                            }else{
                                    state.errorMessages = res.message
                                }
                             state.loading = false
                            
                        })
                        .catch(err => {
                                // console.log(err.response.data.message)
                                state.errorMessages = err.response.data.message
                                state.loading = false

                        })
            },
             logout(){
                localStorage.clear()
                location.reload()
        
            },
            createGroup(state,data){
                this.$axios.$post("/upload-image",{
                    image: data.avatar
                }).then(res => {
                        data.user_id = state.user.id
                        data.avatar = state.storage + res.url
                        this.$axios.$post("/group",data)
                            .then(res => {
                                if(res.success){
                                  
                                    if(this.$i18n.locale !== 'id'){
                                        this.$router.push("/"+this.$i18n.locale+"/groups")
                                    }else{
                                        this.$router.push("/groups")
                                    }
                                    
                                }else{
                                    this.commit("errorMessages")
                                }
                            })
                            .catch(err => {
                                console.log(err)
                            })
                })
                .catch(err => {
                    console.log(err)
                })
                
            },
            getMyGroup(state){
                this.$axios.$get("/mygroup")
                    .then(res => {
                        state.data.mygroup = res
                    })
            }
        },
        getters:{
            getNotif (state) {
                return state.notif
            }
        }
    })
}

export default createStore