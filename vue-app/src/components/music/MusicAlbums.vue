<template>
    <div class="music-content">

        <div class="music-play clearfix">
            <img :src="playBackground" alt="" class="play-background">
            <div class="play-img">
                <img :src="playMusicImg" alt="">
            </div>
            <div class="play-info">
                <p class="music-title">{{playMusicName}}</p>
                <p>{{playMusicSinger}}</p>
                <audio :src="musicUrl" controls="controls" autoplay></audio>
            </div>
        </div>
        
        <ul>
            <li v-for="music in musicList" :key="music.song_id" class="clearfix music-list" @click="changeMusic(music)">
                <div class="music-pic">
                    <img :src="music.pic_small" alt="">
                </div>
                <div class="music-info">
                    <p class="music-title">{{music.title}}</p>
                    <p>{{music.author}}</p>
                    <p class="music-album">专辑：{{music.album_title}}</p>
                </div>
                
            </li>
        </ul>
    <!-- <div class="loading" v-show="isLoading">
        <img src="../../assets/img/loading.gif" alt="">
    </div> -->
    
    </div>
    
</template>

<script>
import axios from 'axios'
export default{
    data(){
        return{
            musicList: [],
            playMusicImg:'',
            playMusicName:'',
            playMusicSinger:'',
            playBackground:'',
            musicUrl:'',
            // isLoading:true,
        }
    },
    methods:{
        getMusicInfo(){
            axios
                .get(`${API_PROXY}http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.billboard.billList&type=2&size=10&offset=${this.musicList.length+1}`)
                .then(res=>{
                    console.log(res);
                    this.musicList = this.musicList.concat(res.data.song_list);
                    this.playBackground = this.playMusicImg = this.musicList[0].pic_small;
                    this.playMusicSinger = this.musicList[0].author;
                    this.playMusicName = this.musicList[0].title;
                })
        },
        changeMusic(obj){
            // console.log(obj);
            this.playBackground = this.playMusicImg = obj.pic_small;
            this.playMusicSinger = obj.author;
            this.playMusicName = obj.title;
            this.musicUrl = require(`@/assets/music/${obj.song_id}.mp3`);
        }
    },
    created(){
        this.getMusicInfo();
    },
    mounted(){
        // window.onscroll = () => {
        //     let scrollTop = Math.floor(document.body.scrollTop || document.documentElement.scrollTop);
        //     let scrollHeight = document.documentElement.scrollHeight;
        //     let clientHeight = document.documentElement.clientHeight;
        //     // console.log(scrollTop , clientHeight , scrollHeight);
        //     if( scrollTop + clientHeight  == scrollHeight){
        //         this.getMusicInfo();
        //     }
        // };
    }
}
</script>

<style scoped>
.music-content{
    margin: 1rem 0;
}
.music-content ul{
    padding: 0 0.1rem;
}
.clearfix::after{
    content: '';
    display: block;
    clear: both;
}
.music-list{
    padding: 0.1rem 0;
    border-bottom: 1px solid #aaa;
}
.music-title{
    font-weight: bold;
    overflow: hidden;    
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 5rem;
}
.music-pic{
    float: left;
    margin-right: 0.1rem;
}
.music-info{
    float: left;
}
.music-album{
    overflow: hidden;    
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 5rem;
}

.music-play{
    padding: 0.3rem 0.1rem;
    position: relative; 
    border-bottom: 1px solid #aaa;
}
.play-background{
    position: absolute;
    height: 70%;
    width: 95%;    
    filter: blur(0.6rem);
    z-index: -1;
} 
 .play-img{
    margin-right: 0.1rem;
    float: left;
    margin-top: 0.1rem;
}
.play-info{
    float: left;    
    
} 
audio{
    width: 5rem;
    /* height: auto; */
}
ul{
    background-color: rgba(0, 0, 0, 0.1);
}
</style>
