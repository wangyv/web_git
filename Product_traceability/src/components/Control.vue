<template>
  <div>
      <nav>
          <img src="/static/img/control_logo.jpg" alt="">
          <div class="menu">
              <span class="glyphicon glyphicon-menu-hamburger"></span>
          </div>
          <ul>
              <li><a href="http://">大庆市良丰农业科技有限公司</a></li>
              <li><a href="http://">去前台</a></li>
              <li><a href="http://">欢迎你</a></li>
              <li>
                <a href="http://">
                    <span class="glyphicon glyphicon-arrow-right"></span>
                    退出
                </a>
              </li>
          </ul>
      </nav>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
nav{
    height: 0.35rem;
}
nav img{
    height: 0.35rem;
    width: 0.8rem;
    float: left;
}
.menu{
    float: left;
    font-size: 0.15rem;
    height: 0.35rem;
    line-height: 0.35rem;
}
</style>
