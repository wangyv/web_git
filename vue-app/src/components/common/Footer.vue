<template>
  <ul class="footer"  :style="{background:bgColor}">
      <li @click="$emit('tapped', 'Movie')">
          <router-link to="/">电影</router-link>
      </li>
      <li @click="$emit('tapped', 'Music')">
          <router-link to="/music">音乐</router-link>
      </li>
      <li @click="$emit('tapped', 'Book')">
          <router-link to="/book">书籍</router-link>
      </li>
      <li @click="$emit('tapped', 'Photo')">
          <router-link to="/photo">图片</router-link>
      </li>
      <li @click="$emit('tapped', 'Cartoon')">
          <router-link to="/cartoon">漫画</router-link>
      </li>
  </ul>
</template>

<script>

export default {
  props:['bgColor']
}
</script>

<style scoped>
.footer{
    position: fixed;
    bottom: 0;
    display: flex;
    width: 100%;
    height: 1rem;
    line-height: 1rem;
}
.footer li{
    flex-grow: 1;
    text-align: center;
}
.footer li a{
    color: #ccc;
    font-size: 0.3rem;
    display: block;
    width: 100%;
    height: 100%;
    outline: none;
}
.footer li a.router-link-exact-active{
    color: #fff;
    /* background-color: #c0f; */
}
</style>
