<template>
    <div class="container clearfix">
        <div class="photo-list" v-for="(obj, index) in photoList" :key="index">
          <router-link :to="'/mask/'+ index">
            <img :src="obj.src" alt="">
          </router-link>
        </div>
    </div>

</template>





<script>
import axios from 'axios'
import {mapActions, mapState} from 'vuex'

export default {
  data(){
    return {
      photoList: []
    }
  },
  created(){
    axios.get('/static/data/photodata.json')
    .then(res =>{
      this.photoList = res.data.photoData;
      this.$store.dispatch('getPhoto',res.data.photoData);
    })
  }
};
</script>

<style scoped>
.container {
  margin: 1rem 0;
}
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}
.photo-list {
  float: left;
  width: 50%;
}
</style>