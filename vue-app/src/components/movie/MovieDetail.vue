<template>
    <div class="detail" @click="handler">
        <div class="detail-info">
            <img :src="movieDetail.img" alt="" class="detail-background">
            <div class="detail-img">
                <img :src="movieDetail.img" alt="">
            </div>
            <div class="detail-star">
                <p class="detail-name">{{movieDetail.nm}}</p>
                <p>{{movieDetail.scm}}</p>
                <div v-html="movieDetail.ver"></div>
            </div>
        </div>
        <div class="detail-stars">
            <p class="detail-name" v-text="'主演'"></p>
            <p>{{movieDetail.star}}</p>
        </div>
        <div class="detail-content">
            <p class="detail-name" v-text="'简介'"></p>
            <div v-html="movieDetail.dra"></div>
        </div>
        <div class="detail-comment">
            <p class="detail-name" v-text="'高分短评'"></p>
            <div>
                <div v-for="obj in CommentResponseModel" :key="obj.id">
                    <span v-text="obj.nickName+'：'"></span>
                    <p class="comment">&nbsp;&nbsp;&nbsp;&nbsp;{{obj.content}}</p>
                </div>
            </div>
        </div>
        <div class="loading" v-show="isLoading">
            <img src="../../assets/img/loading.gif" alt="">
        </div>
    </div>
    
</template>

<script>
import axios from 'axios';
export default {
  data(){
      return {
          movieDetail: {},
          CommentResponseModel: [],
          isLoading: true
      }
  },
  created(){
    axios.get(`${API_PROXY}http://m.maoyan.com/movie/${
        this.$route.params.movieId
      }.json`).then(res=>{
        // console.log(res);
        this.movieDetail = res.data.data.MovieDetailModel;
        this.CommentResponseModel = res.data.data.CommentResponseModel.hcmts;
        this.isLoading = false;
    })
  },
  methods:{
      handler(){
          this.$router.go(-1);
      }
  }
}
</script>

<style scoped>
.loading{
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    background-color: #fff;

}
.loading img{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 100%;
}
.detail{
    padding: 0.1rem;
    margin: 1rem 0;
}
.detail-info{
    display: flex;
    border-bottom: 1px solid #aaa;
    padding-bottom: 0.1rem;
    position: relative;
}
.detail-background{
    position: absolute;
    width: 100%;
    height: 100%;
    filter: blur(0.6rem);
    z-index: -1;
}
.detail-img{
    width: 0;
    flex-grow: 1;
    margin-right: 0.1rem;
    /* height: 1.28rem; */
}
.detail-info .detail-star{
    width: 0;
    flex-grow: 2;
}
.detail-name{
    font-weight: bolder;
    text-align: center;
    font-size: 0.4rem;
}
.detail-stars,.detail-content{
    border-bottom: 1px solid #aaa;
    padding: 0.1rem 0;
}
.detail-comment span{
    font-weight: bold;
    color:#ff6700;
    font-size: 0.3rem;
}
.comment{
    color: #666;
}
</style>
