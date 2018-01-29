<template>
  <div id="app">
    <img src="./assets/logo.png">
    <br>
    <button @click="goHome">首页</button>
    <button @click="goForword">前进</button>
    <button @click="goBack">后退</button>
    <div>
        <router-link to="/">首页</router-link>
        <router-link to="/test">test</router-link>
        <router-link to="/test/test2/5/lisi">test2</router-link>
        <router-link :to="{name:'/test/test1',params:{username:'zhangsan',age:18}}">test1</router-link>
        <router-link to="/home/5/lisan">重定向</router-link>
        <router-link to="/acbc">alias</router-link>
        <router-link to="/error">error</router-link>
    </div>
    <transition name="fade">
      <router-view/>
    </transition>

  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    goHome () {
      this.$router.push('/')
    },
    goForword () {
      this.$router.go(1)
    },
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter{
  opacity: 1;
}
.fade-enter-to{
  opacity: 0;
}
.fade-enter-active{
  transition: opacity 1s;
}
.fade-leave{
  opacity: 1;
}
.fade-leave-to{
  opacity: 0;
}
.fade-leave-active{
  transition: opacity 1s;
}
</style>
