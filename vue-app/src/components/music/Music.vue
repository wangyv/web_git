<template>
  <ul>
      <li v-for="item in musicAlbums" :key="item.id">
        <router-link :to="'/musiclist/' + item.id">
          <img :src="item.bg">
        </router-link>
      </li>
  </ul>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return {
      musicAlbums:[]
    }
  },
  created(){
    axios.get('/static/data/musiclist.json')
    .then(res => {
      // console.log(res);
      this.musicAlbums = res.data.albums;
    })
  }
}
</script>

<style scoped>
ul{
  margin: 1rem 0;
}
li{
  width: 50%;
  float: left;
}
li img{
  width: 100%;
}
</style>
