<template>
  <div class="header" :style="{background:bgColor}">
    <span class="btn" :style="{background:bgColor}" @click="$emit('tapped',0)"><router-link to="/">首页</router-link></span>
    
    <h2 class="title">
      <slot name="title"></slot>
    </h2>
  </div>
</template>

<script>

export default {
  props:['bgColor']
}
</script>

<style scoped>
.header{
  position: fixed;
  top:0;
  width: 100%;
  height: 1rem;
  line-height: 1rem;
}
.btn{
  float: left;
  margin-left: 0.1rem;
  font-size: 0.3rem;
}
.btn a{
  color:#fff;
  outline: none;
}
.title{
  color:#fff;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}
</style>
