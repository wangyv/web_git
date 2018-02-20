<template>
  <div class="chapter-content">
        <p @click="handler">{{$route.params.cartoonName}}</p>
        <ul>
            <li v-for="content in chapterImg" :key="content.id" class="chapter clearfix">
                <img :src="content.imageUrl" alt="">
            </li>
        </ul>
        <div class="loading" v-show="isLoading">
            <img src="../../assets/img/loading.gif" alt="">
        </div>
    </div>
</template>

<script>
export default {
  data(){
      return {
          chapterImg: [],
          isLoading: true
      }
    },
    methods:{
        getInfo(){
            axios
            .get(`${API_PROXY}http://japi.juhe.cn/comic/chapterContent?comicName=${this.$route.params.cartoonName}&id=${this.params.chapterId}&key=d36a7a9bbbe922fe44c39651f00c4c4b`)
            .then(res=>{
                // console.log(res);
                let list = res.data.result.imageList;
                this.chapterImg = list;
                this.isLoading = false;                
            }).catch(()=>{
                alert('获取数据出错！');
            })
            // console.log(this.$route.params.cartoonName);
        },
        handler(){
            this.$router.go(-1);
        }
    },
    created(){
        this.getInfo();
    },
}
</script>

<style scoped>
.clearfix::after{
    content: '';
    display: block;
    clear: both;
}
.chapter-content>p{
    font-size: 0.3rem;
    text-align: center;
}
ul{
    margin: 1rem 0;
    padding: 0 0.1rem;
}
.chapter{
    /* display: flex; */
    padding: 0.25rem 0;
    border-bottom: 1px solid #aaa; 
    position: relative;    
    
}
.loading{
    position: fixed;
    bottom: 1rem;
    text-align: center;
}
</style>
