<template>
  <div>
      <header class="index-header">
          <div class="container">
              <router-link to='/' class="logo">
                <img src="static/img/logo.bmp" alt="春雨溯源系统">
              </router-link>
              <a href="#">
				  <span>春雨溯源系统</span>
              </a>
              <ul class="registered">
                <li>
                    <a href="#"  target="_blank">登陆</a>
                </li>
                <li>
                    <a href="#" target="_blank">注册</a>
                </li>
              </ul>
          </div>
      </header>


      <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
        <!-- Indicators -->
        <ol class="carousel-indicators">
            <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
            <li data-target="#carousel-example-generic" data-slide-to="1"></li>
            <li data-target="#carousel-example-generic" data-slide-to="2"></li>
            <li data-target="#carousel-example-generic" data-slide-to="3"></li>
            <li data-target="#carousel-example-generic" data-slide-to="4"></li>
            <li data-target="#carousel-example-generic" data-slide-to="5"></li>
        </ol>

        <!-- Wrapper for slides -->
        <div class="carousel-inner" role="listbox">
            <div class="item active">
                <img src="static/img/1.jpg" alt="...">
                <div class="carousel-caption">
                    ...
                </div>
            </div>
            <div class="item">
                <img src="static/img/2.jpg" alt="...">
                <div class="carousel-caption">
                    ...
                </div>
            </div>
            <div class="item">
                <img src="static/img/3.jpg" alt="...">
                <div class="carousel-caption">
                    ...
                </div>
            </div>
            <div class="item">
                <img src="static/img/4.jpg" alt="...">
                <div class="carousel-caption">
                    ...
                </div>
            </div>
            <div class="item">
                <img src="static/img/5.jpg" alt="...">
                <div class="carousel-caption">
                    ...
                </div>
            </div>
        </div>

        <!-- Controls -->
        <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
      </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.index-header a{
    font-size: 0.11rem;
    font-family: 'Courier New', Courier, monospace;
    color: #000;
    cursor: pointer;
    outline: none;
}
.index-header{
    height: 0.35rem;
    line-height: 0.35rem;
}
.container{
    margin: 0 auto;
}
.logo{
    height: 0.35rem;
    display: inline-block;
}
.logo img{
    width: 0.33rem;
}
.registered{
    float: right;
}
.registered li{
    float: left;
    margin-left: 0.1rem;
}
@media (max-width:765px) {
    .container{
        width: 500px;
    }
}
@media (min-width:766px) {
    .container{
        width: 690px;
    }
}
@media (min-width:992px){
    .container{
        width: 800px;
    }
}
@media (min-width:1200px){
    .container{
        width: 1000px;
    }
}
</style>
