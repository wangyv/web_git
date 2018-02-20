<template>
  <ul>
      <li v-for="item in comicList" :key="item.id">
        <router-link :to="'/cartoon/' + item.name">
          <img :src="item.bg">
          <span>{{item.name}}</span>
        </router-link>
      </li>
  </ul>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return {
      comicList:[]
    }
  },
  created(){
    axios.get('/static/data/comiclist.json')
    .then(res => {
      // console.log(res);
      this.comicList = res.data.comicList;
    })
  }
}
</script>

<style scoped>
ul{
  /* margin: 1rem 0; */
  position: absolute;
  left: 0;
  top: 1rem;
  bottom: 1rem;
  right: 0;
}
li{
  width: 50%;
  height: 50%;
  float: left;
  position: relative;
}
li img{
  width: 100%;
  height: 100%;
  vertical-align: middle;
}
span{
    position: absolute;
    bottom: 0.05rem;
    right: 0.1rem;
    font-size: 0.4rem;
    color: rgba(0, 0, 0, 0.7);
    font-family: 'Courier New', Courier, monospace;
}
</style>