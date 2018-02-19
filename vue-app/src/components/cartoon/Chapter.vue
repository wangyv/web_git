<template>
    <div class="vue-chapter">
        <!-- <ul>
            <li v-for="cartoon in cartoonList" :key="cartoon.lastUpdate" class="chapter clearfix" @click="getDetail(index)">
                <div class="chapter-img">
                    <img :src="cartoon.coverImg" :alt="cartoon.name">
                </div>
                <div class="chapter-info">
                    <span v-text="`最近更新时间：${cartoon.lastUpdate}`"></span>
                    <p class="chapter-name">{{cartoon.name}}</p>
                    <p>类型：{{cartoon.type}}</p>
                    <p class="chapter-show">{{cartoon.area}}</p>
                    <p class="chapter-show chapter-end" v-text="cartoon.finish? '已完结':'未完结'"></p>
                </div>
            </li>
        </ul> -->
        <div class="loading" v-show="isLoading">
            <img src="../../assets/img/loading.gif" alt="">
        </div>
    </div>

</template>

<script>
import axios from 'axios';
export default {
    data () {
        return {
            ChapterList:[],
            isLoading:true,
        }
    },
    methods:{
        getInfo(){
            // axios
            // .get(`${API_PROXY}http://japi.juhe.cn/comic/chapter?key=d36a7a9bbbe922fe44c39651f00c4c4b`)
            // .then(res=>{
            //     console.log(res);
            //     let list = res.data.result.bookList;
            //     this.cartoonList = list;
            //     this.isLoading = false;                
            // }).catch(()=>{
            //     alert('获取数据出错！');
            // })
            console.log(this.$route.params);
        },
        getDetail(movieId){
            // this.$router.push(`/moviedetail/${movieId}`)
        }
    },
    created(){
        this.getInfo();
        
    },
    mounted(){

    }
}
</script>

<style scoped>
.vue-chapter{
    background-color: #eee;
}
.clearfix::after{
    content: '';
    display: block;
    clear: both;
}
ul{
    margin: 1rem 0;
    padding: 0 0.1rem;
}
p{
    color: #666;
    font-size: 0.26rem;
    margin-right: 0.8rem;
}
.chapter{
    /* display: flex; */
    padding: 0.25rem 0;
    border-bottom: 1px solid #aaa; 
    position: relative;    
    
}
.chapter-img{
    /* flex-grow: 1; */
    /* width: 0; */
    margin-right: 0.1rem;
    float: left;

}
.chapter-img img{
    height: 1.8rem;
    width: 1.28rem;
}
.chapter-info{
    /* flex-grow: 2; */
    /* width: 0; */
    float: left;
}
.chapter-name{
    font-weight: bolder;
    color: #000;
    /* text-align: center; */
    font-size:0.3rem; 
    /* float: left; */
}
.chapter-star{
    /* margin-right: 1rem; */
    overflow: hidden;    
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 5rem;
}
.chapter-show{
    color:#999;
}
span{
    position: absolute;
    right: 0;
    bottom: 0.4rem;
    color: #FFB400;
    font-size: .25rem;
    line-height: 1;
}

.loading{
    position: fixed;
    bottom: 1rem;
    text-align: center;
}
.chapter-end{
    color:#FFB400;
}


</style>