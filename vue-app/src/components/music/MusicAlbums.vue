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
                <audio :src="musicUrl" controls="controls" @playing="isPlaying = false;" @pause="isPlaying = true" @timeupdate="playingHandler"></audio>
            </div>
        </div>
       
        <ul v-show="isPlaying">
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


        <div class="song-lrc clearfix" v-show="!isPlaying">
            <img :src="playBackground" alt="" class="song-lrc-background">
            <div class="lrc" :style="`top:-${Top}rem`">
                <p v-for="(obj,index) in lrc" :key="index" :class="{white: index == nowIndex}">{{obj.lyric}}</p>
            </div>
        </div>
    </div>
    
</template>

<script>
import axios from 'axios'
export default{
    data(){
        return{
            musicList: [],
            playMusicImg: '',
            playMusicName: '',
            playMusicSinger: '',
            playBackground: '',
            musicUrl: '/static/music/569080829.mp3',
            isPlaying: true,
            songLrc: '',
            lrc: [],
            isTrue: false,
            nowIndex: null,
        }
    },
    methods:{
        getMusicInfo(){
            axios.get(`${API_PROXY}http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.billboard.billList&type=2&size=10&offset=${this.musicList.length}`)
            .then(res=>{
                // console.log(res);
                this.musicList = this.musicList.concat(res.data.song_list);
                this.playBackground = this.playMusicImg = this.musicList[0].pic_small;
                this.playMusicSinger = this.musicList[0].author;
                this.playMusicName = this.musicList[0].title;
                this.songLrc = `/static/lrc/${this.musicList[0].song_id}.lrc`
                this.getLrc(this.songLrc);
            })
        },
        changeMusic(obj){
            // console.log(obj);
            this.playBackground = this.playMusicImg = obj.pic_small;
            this.playMusicSinger = obj.author;
            this.playMusicName = obj.title;
            this.musicUrl = `/static/music/${obj.song_id}.mp3`;
            this.songLrc = `/static/lrc/${obj.song_id}.lrc`
            this.getLrc(this.songLrc);
        },
        getLrc(url){
            axios.get(url).then(res => {
                // 匹配歌词文本中的换行符.制表符  
                let regexTrim = new RegExp("[\\r\\n]", "g");  
                // 匹配歌词文本中的时间  例如 [00:04.11]， 这种写法比较流氓，虽然可行。但只能匹配99分钟之内的时间格式 [99.04.11]  
                let regexGetTime = new RegExp("\\[.{8}\\]", "g");   
                // 匹配歌词文本中的歌词  例如 刘瑞琦 - 晴天  
                let regexGetLyric = new RegExp("[^\\[\\]\\:\\.\\d]+", "g");  
                // 用于存放时间  
                let aTime = [];   
                // 用于存放歌词     
                let aLyric = [];      
                // 存放json对象 例如 {"time": "4.11", "lyric": "刘瑞琦 - 晴天"}  
                let jsonLyric = [];   
                let result;  
    
                // 删除歌词文本中的所有换行符.制表符  
                let lyricStr2 = res.data.replace(regexTrim, '');   
    
                // 将匹配到的时间存入数组，exec()返回的是数组，该数组只存放每一次匹配到的值。  
                while((result=regexGetTime.exec(lyricStr2)) != null) {   
                    aTime.push(result.toString());  
                }  
    
                // 将匹配到的歌词存入数组  
                while((result=regexGetLyric.exec(lyricStr2)) != null) {  
                    aLyric.push(result.toString());  
                }                     
    
                for(var i=0, j=aTime.length; i<j; i++) {  
                    var obj = {};  
                    obj.lyric = aLyric[i];  
                    obj.time = this.getTime(aTime[i]);  
                    jsonLyric.push(obj);  
                }     
    
                // 打印json数组  
                this.lrc = jsonLyric;
                console.log(jsonLyric);   
            });
        },
        getTime(time) {          
            var str = time;   
            // 删除 '['  
            str = str.substr(1);  
            // 删除 ']'  
            str = str.substr(0, str.length-1);    
            var minutes = parseInt(str.slice(0, str.indexOf(':')));  
            var seconds = parseFloat(str.substr(str.indexOf(':')+1));  
            var newTime = (minutes*60 + seconds).toFixed(2);  
            return newTime;   
        },
        playingHandler(){
            let audioPlay = document.querySelector('audio');
            let lastTime = 0;
            this.lrc.forEach((obj, index, arr) => {
                if(Number.parseFloat(obj.time) > audioPlay.currentTime && lastTime < audioPlay.currentTime){
                    this.nowIndex = index - 3;
                    lastTime = obj.time;
                    // this.Top += 0.01;
                }
            })
        }  
    },
    created(){
        this.getMusicInfo();
    },
    computed: {
        Top(){
            return this.nowIndex > 2? (this.nowIndex-2)*0.7 : 0; 
        }
    }
}
</script>

<style scoped>
.music-content{
    margin: 1rem 0;
    font-family: 'Courier New', Courier, monospace;
}
.music-content ul{
    padding: 0 0.1rem;
    margin-top: 3.5rem;
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
    position: fixed;
    top: 1rem; 
    z-index: 2;
    /* border-bottom: 1px solid #aaa; */
    background-color: #fff;
    width: 100%;
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
    background: transparent;
}
ul{
    background-color: rgba(0, 0, 0, 0.1);
}
.song-lrc{
    position: relative;
    margin-top: 3rem;
    margin-bottom: 4rem;
}
.song-lrc p{
    text-align: center;
    font-size:0.4rem;
}
.song-lrc-background{
    width: 100%;
    height: 95%;
    filter: blur(1.5rem);
    position: fixed;
    bottom: 1rem;
}
.lrc{
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    margin-bottom: 5rem;
    transition: all 0.5s linear;
}

.white{
    color:white;
}
</style>
