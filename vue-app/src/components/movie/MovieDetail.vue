<template>
    <div class="detail">
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
            <p class="detail-name">主演</p>
            <p>{{movieDetail.star}}</p>
        </div>
        <div class="detail-content">
            <p class="detail-name">简介</p>
            <div v-html="movieDetail.dra"></div>
        </div>
        <div class="loading"></div>
    </div>
    
</template>

<script>
import axios from 'axios';
export default {
  data(){
      return {
          movieDetail: {},
          isLoading: true
      }
  },
  created(){
      axios.get(`${API_PROXY}http://m.maoyan.com/movie/${
          this.$route.params.movieId
        }.json`).then(res=>{
            // console.log(res);
            this.movieDetail = res.data.data.MovieDetailModel;
            this.isLoading = false;
        })
  }
}
</script>

<style scoped>
.detail{
    padding: 0.1rem;
    margin-top: 1rem;
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
}
.detail-stars,.detail-content{
    border-bottom: 1px solid #aaa;
    padding: 0.1rem 0;
}
</style>
