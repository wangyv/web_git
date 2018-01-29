<template>
<div>
    <h1>这是一个子路由1</h1>
    <h1>姓名：{{$route.params.username}}</h1>
</div>

</template>

<script>
export default {
  beforeRouteEnter (to, from, next) {
    console.log('准备进入路由模板')
    next()
  },
  beforeRouteLeave (to, from, next) {
    console.log('准备离开路由模板')
    next()
  }
}
</script>

<style scoped>

</style>
