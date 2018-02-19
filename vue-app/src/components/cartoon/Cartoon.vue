<template>
    <div class="vue-cartoon">
        <ul>
            <li v-for="cartoon in cartoonList" :key="cartoon.lastUpdate" class="cartoon clearfix" @click="getDetail(cartoon.name)">
                <div class="cartoon-img">
                    <img :src="cartoon.coverImg" :alt="cartoon.name">
                </div>
                <div class="cartoon-info">
                    <span v-text="`最近更新时间：${cartoon.lastUpdate}`"></span>
                    <p class="cartoon-name">{{cartoon.name}}</p>
                    <p>类型：{{cartoon.type}}</p>
                    <p class="cartoon-show">{{cartoon.area}}</p>
                    <p class="cartoon-show cartoon-end" v-text="cartoon.finish? '已完结':'未完结'"></p>
                </div>
            </li>
        </ul>
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
            cartoonList:[],
            isLoading:true,
        }
    },
    methods:{
        getInfo(){
            axios
            .get(`${API_PROXY}http://japi.juhe.cn/comic/book?key=d36a7a9bbbe922fe44c39651f00c4c4b`)
            .then(res=>{
                // console.log(res);
                let list = res.data.result.bookList;
                this.cartoonList = list;
                this.isLoading = false;                
            }).catch(()=>{
                alert('获取数据出错！');
            })
        },
        getDetail(cartoonName){
            this.$router.push(`/chapter/${cartoonName}`)
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
.vue-cartoon{
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
.cartoon{
    /* display: flex; */
    padding: 0.25rem 0;
    border-bottom: 1px solid #aaa; 
    position: relative;    
    
}
.cartoon-img{
    /* flex-grow: 1; */
    /* width: 0; */
    margin-right: 0.1rem;
    float: left;

}
.cartoon-img img{
    height: 1.8rem;
    width: 1.28rem;
}
.cartoon-info{
    /* flex-grow: 2; */
    /* width: 0; */
    float: left;
}
.cartoon-name{
    font-weight: bolder;
    color: #000;
    /* text-align: center; */
    font-size:0.3rem; 
    /* float: left; */
}
.cartoon-star{
    /* margin-right: 1rem; */
    overflow: hidden;    
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 5rem;
}
.cartoon-show{
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
.cartoon-end{
    color:#FFB400;
}


</style>

