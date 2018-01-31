<template>
    <div>
        <ul>
            <li v-for="movie in movieList" :key="movie.id" class="movie" @click="getDetail(movie.id)">
                <div class="movie-img">
                    <img :src="movie.img" :alt="movie.nm">
                </div>
                <div class="movie-info">
                    <p class="movie-name">{{movie.nm}}</p>
                    <p>主演：{{movie.star}}</p>
                    <p>类型：{{movie.cat}}</p>
                    <p>{{movie.showInfo}}</p>
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
            isEnd:false
        }
    },
    methods:{
        getInfo(){
            axios
            .get(`${API_PROXY}http://m.maoyan.com/movie/list.json?type=hot&offset=${this.movieList.length}&limit=10`)
            .then(res=>{
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
            let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
            let scrollHeight = document.documentElement.scrollHeight;
            let clientHeight = document.documentElement.clientHeight;
            console.log(scrollTop , clientHeight , scrollHeight);
            if( scrollTop + clientHeight  >= scrollHeight && !this.isEnd){
                this.isLoading = true;
                this.getInfo();
            }
        }
    }
}
</script>

<style scoped>
ul{
    margin: 1rem 0;
}
.movie{
    display: flex;
    padding: 0.1rem;
    border-bottom: 1px solid #aaa; 
}
.movie-img{
    flex-grow: 1;
    width: 0;
    margin-right: 0.1rem;
}
.movie-info{
    flex-grow: 2;
    width: 0;
}
.movie-name{
    font-weight: bolder;
    text-align: center;
}
.loading{
    position: fixed;
    bottom: 1rem;
    text-align: center;
}

.end{
    position: absolute;
    bottom: 1rem;
    text-align: center;
}


</style>
