<template>
    <div>
        <ul>
            <li v-for="movie in movieList" :key="movie.id" class="movie clearfix" @click="getDetail(movie.id)">
                <div class="movie-img">
                    <img :src="movie.img" :alt="movie.nm">
                </div>
                <div class="movie-info">
                    <span v-text="movie.sc?`${movie.sc}分`:`${movie.wish}人想看`"></span>
                    <p class="movie-name">{{movie.nm}}</p>
                    <p class="movie-star">主演：{{movie.star}}</p>
                    <p>类型：{{movie.cat}}</p>
                    <p class="movie-show">{{movie.showInfo}}</p>
                </div>
            </li>
        </ul>
        <div class="loading" v-show="isLoading">
            <img src="../../assets/img/loading.gif" alt="">
        </div>
        <div class="end" v-show="isEnd">
            <h3>数据到底啦！</h3>
        </div>
    </div>

</template>


<script>
import axios from 'axios';
export default {
    data () {
        return {
            movieList:[],
            isLoading:true,
            isEnd:false,
            // score:''
        }
    },
    methods:{
        getInfo(){
            axios
            .get(`${API_PROXY}http://m.maoyan.com/movie/list.json?type=hot&offset=${this.movieList.length}&limit=10`)
            .then(res=>{
                // console.log(res)
                let list = res.data.data.movies;
                console.log(list.length);
                if(list.length < 10){
                    this.isEnd = true;
                }
                this.movieList = this.movieList.concat(list);
                this.isLoading = false;                
            }).catch(()=>{
                alert('获取数据出错！');
            })
        },
        getDetail(movieId){
            this.$router.push(`/moviedetail/${movieId}`)
        }
    },
    created(){
        this.getInfo();
        
    },
    mounted(){

        window.onscroll = () => {
            let scrollTop = Math.floor(document.body.scrollTop || document.documentElement.scrollTop);
            let scrollHeight = document.documentElement.scrollHeight;
            let clientHeight = document.documentElement.clientHeight;
            // console.log(scrollTop , clientHeight , scrollHeight);
            if( scrollTop + clientHeight  == scrollHeight && !this.isEnd){
                this.isLoading = true;
                this.getInfo();
            }
        }
    }
}
</script>

<style scoped>
.clearfix::after{
    content: '';
    display: block;
    clear: both;
}
ul{
    margin-top: 1rem;
    margin-bottom:2rem;
    padding: 0 0.1rem;
}
p{
    color: #666;
    font-size: 0.26rem;
    margin-right: 0.8rem;
}
.movie{
    /* display: flex; */
    padding: 0.25rem 0;
    border-bottom: 1px solid #aaa; 
}
.movie-img{
    /* flex-grow: 1; */
    /* width: 0; */
    margin-right: 0.1rem;
    float: left;

}
.movie-img img{
    height: 1.8rem;
    width: 1.28rem;
}
.movie-info{
    /* flex-grow: 2; */
    /* width: 0; */
    float: left;
    position: relative;    
}
.movie-name{
    font-weight: bolder;
    color: #000;
    /* text-align: center; */
    font-size:0.3rem; 
    /* float: left; */
}
.movie-star{
    /* margin-right: 1rem; */
    overflow: hidden;    
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 5rem;
}
.movie-show{
    color:#999;
}
span{
    position: absolute;
    right: 0;
    color: #FFB400;
    font-size: .32rem;
    line-height: 1;
}

.loading{
    position: fixed;
    bottom: 1rem;
    text-align: center;
}

.end{
    /* position: absolute; */
    margin-bottom: 1rem;
    text-align: center;
}


</style>
