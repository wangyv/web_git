<template>
  <div class="index-content">
    <!-- 导航栏 -->
    <header class="index-header">
        <div class="container">
            <router-link to='/' class="product-logo">
                <img src="/static/img/logo.bmp" alt="春雨溯源系统">
            </router-link>
            <a href="#" class="product-name">
                <span>春雨溯源系统</span>
            </a>
            <ul class="registered">
                <li>
                    <router-link  :to="{name:'login',params:{manner:'login'}}">
                        登陆
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'login',params:{manner:'registered'}}">
                        注册
                    </router-link>
                </li>
            </ul>
        </div>
    </header>
    
    <!-- 轮播图 -->
    <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
        <!-- Indicators -->
        <ol class="carousel-indicators">
            <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
            <li data-target="#carousel-example-generic" data-slide-to="1"></li>
            <li data-target="#carousel-example-generic" data-slide-to="2"></li>
            <li data-target="#carousel-example-generic" data-slide-to="3"></li>
            <li data-target="#carousel-example-generic" data-slide-to="4"></li>
        </ol>

        <!-- Wrapper for slides -->
        <div class="carousel-inner" role="listbox">
            <div class="item active">
                <img src="/static/img/1.jpg" alt="...">
                <div class="carousel-caption">
                    ...
                </div>
            </div>
            <div class="item">
                <img src="/static/img/2.jpg" alt="...">
                <div class="carousel-caption">
                    ...
                </div>
            </div>
            <div class="item">
                <img src="/static/img/3.jpg" alt="...">
                <div class="carousel-caption">
                    ...
                </div>
            </div>
            <div class="item">
                <img src="/static/img/4.jpg" alt="...">
                <div class="carousel-caption">
                    ...
                </div>
            </div>
            <div class="item">
                <img src="/static/img/5.jpg" alt="...">
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


    <!-- 首页导航栏 -->
    <!-- <nav class="home-navigation">
      <div class="container">
        <span class="glyphicon glyphicon-home"></span>
        <span>首页</span>
      </div>
      <hr>
    </nav> -->

    <!-- 回溯查询 -->
    <div class="traceability-search">
        <div class="container">
            <form class="form-search">
                <label for="producted-search">追溯查询：</label>
                <input type="text" class="searched" id="producted-search" placeholder="请输入产品溯源码">
                <button type="submit" class="btn btn-primary">提交</button>
            </form>
        </div>
    </div>

    <!-- 城市切换 -->
    <div class="container city-change">
        <div class="panel panel-default">
            <!-- Default panel contents -->
            <div class="panel-heading">城市切换</div>
            <div class="panel-body">
                <ul class="city-initials">
                    <li v-for="(obj, index) in city" :key="index" :class="{selected:index == nowIndex}" @click="nowIndex = index">{{obj.initials}}</li>
                </ul>
            </div>

            <!-- List group -->
            <ul class="list-group">
                <li class="list-group-item">
                    <div  v-for="(obj, index) in city" :key="index" v-show="index == nowIndex" class="cities">
                        <span v-for="(cities, citiesIndex) in obj.cities" :key="citiesIndex" :class="{selected:index == cityIndex}" @click="cityIndex = index">
                            <a href="#" @click.prevent>{{cities}}</a>
                        </span>
                    </div>
                </li>
            </ul>
            


            <!-- List group -->
            <!-- <ul class="list-group" v-for="(obj, index) in city" :key="index" v-show="index == nowIndex">
                <li class="list-group-item" v-for="(cities, citiesIndex) in obj.cities" :key="citiesIndex"><a href="#">{{cities}}</a></li>
            </ul> -->

            
        </div>
    </div>

    <!-- 产品地图 -->
    <div class="container">
        <div class="panel panel-default">
            <div class="panel-heading">产品地图</div>
            <div class="panel-body" style="height:4rem">
                Panel content 
                <!-- 地图位置 -->
            </div>
        </div>
    </div>
    <hr>

    <!-- 脚部 -->
    <div class="container">
        <footer>
            <a href="http://www.miitbeian.gov.cn" target="_blank">
                黑ICP备16003650号-2 
            </a>
        </footer>
    </div>

    <!-- 回到顶部 -->
    <div class="go-top">
        <a href="javascript:window.scrollTo( 0, 0 );" title="返回顶部">
            <span class="Hui-iconfont Hui-iconfont-gotop"></span>
        </a>
    </div>
  </div>
</template>

<script>
$(window).on('scroll',() => {
    let scrollValue = $(window).scrollTop();
    if(scrollValue > 100){
        $('.go-top').css('display','inline');
    }else{
        $('.go-top').css('display','none');
    }
})
export default {
    data(){
        return {
            city:[{
                initials: 'D',
                cities: ['大庆市','大兴安岭地区']
            }, {
                initials: 'H',
                cities: ['哈尔滨市','鹤岗市','黑河市']
            }, {
                initials: 'J',
                cities: ['鸡西市','佳木斯市']
            }, {
                initials: 'M',
                cities: ['牡丹江市']
            }, {
                initials: 'Q',
                cities: ['七台河市','齐齐哈尔市']
            }, {
                initials: 'S',
                cities: ['双鸭山市','绥化市']
            }, {
                initials: 'Y',
                cities: ['伊春市']
            }],
            nowIndex: 0,
            cityIndex: 0,
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.index-content{
    /* background-color: #e6e8fa; */
    background: url('/static/img/bg.jpg') no-repeat center/cover;
}

/* 导航栏 */
a{
    outline: none;
}
a:hover{
    text-decoration: none;
}
.index-header a{
  font-size: 0.11rem;
  font-family: 'Courier New', Courier, monospace;
  color: #000;
  cursor: pointer;
}
.index-header{
  height: 0.35rem;
  line-height: 0.35rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
  background-color: #fff;
}
.container{
  margin: 0 auto;
  /* height: 100%; */
}
.product-logo{
  height: 0.35rem;
  display: block;
  float: left;
}
.product-logo img{
  width: 0.33rem;
}
.product-name{
  float: left;
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
  body .carousel-inner>.item>img{
      width: 100%;
      height: 4rem; 
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
      width: 1150px;
  }
  body .carousel-inner>.item>img{
      width: 100%;
      height: 3rem; 
  }
}

/* 轮播图 */
.carousel{
  margin-top: 0.32rem;
}
/* .home-navigation{
  text-align: left;
  height: 0.2rem;
  line-height: 0.2rem;
} */

/* 追溯查询 */
.traceability-search{
  width: 100%;
  height: 0.35rem;
  line-height: 0.35rem;
  margin-top: 0.1rem;
}
.form-search label{
    float: left;
    font-size: 0.15rem;
    font-weight: 100;
}
.form-search button{
    height: 0.2rem;
    width: 0.35rem;
    font-size: 0.08rem;
}
.searched{
    width: 40%;
    height: 0.2rem;
    border: solid 1px #ddd;
    color: #ddd;
    padding: 4px;
}
.btn-primary{
    margin-left: 4%;
}

/* 城市切换 */
.city-change{
    margin-top: 0.1rem;
}
.panel-heading{
    text-align: left;
    font-weight: bolder;
    font-size: 0.1rem;
    /* color: #c0d9d9; */
}
.panel-body .city-initials{
    display: flex;
}
.panel-body .city-initials li{
    float: left;
    flex-grow: 1;
    font-size: 0.15rem;
    cursor: pointer;
    color:#8f8f8d;
}
.panel-body .city-initials .selected{
    font-weight: bolder;
    color: #3232cd;
    /* color: #00009c; */
}
.list-group a{
    color: #333;
}
.cities{
    text-align: center;
}
.cities span{
    margin-right: 0.15rem;
}
.cities span a{
    color: #333;
    font-size: 0.12rem;
    font-weight: 100;
}

/* 脚部 */
footer{
    padding: 15px 0;
    text-align: center;
}
footer a{
    color: #999;
}
/* 回到顶部 */
.go-top{
    position: fixed;
    bottom: 0.3rem;
    right: 0.3rem;
    z-index: 1;
    display: none;
}
.go-top span{
    font-size: 0.2rem;
    color: #999;
    cursor: pointer;
}
</style>
