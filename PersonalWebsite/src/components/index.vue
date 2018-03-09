<template>
  <div>
      <div class="container">
          <div class="row main">
              <div class="bg-img">
                  <img v-for="content in bgImgs" :key="content.index" :src="content.url" alt="" :class="{selected:content.index == nowIndex}">
              </div>
              <div class="col-md-6 col-xs-6 col-sm-6 intro-aside">
                  <div :class="{selected:introNav}">
                        <div class="intro-nav" >
                            <ul >
                                <li><router-link to="#">About</router-link></li>
                                <li><router-link to="#">Skills</router-link></li>
                                <li><router-link to="#">Project experience</router-link></li>
                                <li><router-link to="#">Hobby</router-link></li>
                                <li><router-link to="#">Contact information</router-link></li>
                            </ul>
                        </div>
                  </div>
                  
              </div>
              <div class="col-md-6 col-xs-6 col-sm-6 intro-info">
                  <div class="intro-content">
                      <div class="self-introduction">
                          <div v-text="selfIntroduction"></div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
      return {
          bgImgs: [],
          nowIndex: null,
          introNav: false,
          selfIntroductions:["Hi ! I am WangYv.","I am a front-end developer.","I come from HeBei."],
          selfIntroduction: null
      }
  },
  created(){
      axios.get('/static/data/bg.json').then(
          res=>{
              this.bgImgs = res.data.bgImg;
              this.nowIndex = 0;
              let index = 0;
              let bgTimer = setInterval(()=>{
                  index++;
                  if(index == this.bgImgs.length){
                      index = 0;
                  }
                  this.nowIndex = index;
              },5000);
              setTimeout(() => {
                  this.introNav = true;
              }, 300);
          }
      )
  },
  mounted(){
      let textIndex = 0;
      this.selfIntroduction = this.selfIntroductions[textIndex];    
      let changeTimer = setInterval(()=>{
          textIndex++;
          if(textIndex == this.selfIntroductions.length){
              textIndex = 0;
          }
          this.selfIntroduction = this.selfIntroductions[textIndex];
      },5000)
  }
}
</script>

<style scoped>
.main,.main .bg-img{
    position: absolute;
    left: 0;
    top: 0;
    right: 0;    
    bottom: 0;
    margin: 0;
    overflow: hidden;
}
.main .bg-img img{
    position: absolute;
    bottom: -3.5%;
    right: -3%;
    width: 70%;
    height: 107%;
    opacity: 0;
    transform: rotate(0);
    transition: opacity 2s linear,transform 5s linear;
}
.main .bg-img .selected{
    opacity: 1;
    transform: rotate(-3deg);
}
.intro-aside{
    height: 100%;
    background: #54BABB;
    color: #fff;
}
.intro-aside>div{
    opacity: 0;
    transition: all 2s linear;
}
.main .intro-nav{
    position: absolute;
    top:5%;
    bottom: 5%;
    left: 5%;
    right: 5%;
    border: 1px solid white;
}
.main .intro-aside>.selected{
    opacity: 1;
}
.intro-nav ul{
    max-width: 220px;
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.intro-nav ul li{
    width: 100%;
    float: left;
    margin-bottom: 8px;
}
.intro-nav ul li a{
    border: 1px solid #fff;
    width: 100%;
    float: left;
    padding: 6px;
    display: block;
    color: #fff;
    font-size: 18px;
    transition: all 0.5s linear;
}
.intro-nav ul li a:hover{
    text-decoration: none;
    background: #fff;
    color: #54BABB;
}
.intro-info{
    /* position: relative; */
    background: rgba(50, 50, 50, 0.5);
    height: 100%;
    vertical-align: middle;
}
@keyframes changeText {
    0%{
        width: 0;
    }
    50%{
        width: 100%;
    }
    100%{
        width: 0;
    }
}
.intro-info .intro-content{
    width: 92%;
    margin: 0 auto;
    position: absolute;
    top: 30%;
}
.intro-info .intro-content .self-introduction{
    font-size: 0.2rem;
    color: white;
    animation: changeText 5s linear infinite;
    text-align: left;
    overflow: hidden;
}
.intro-info .intro-content .self-introduction div{
    width: 3rem;
    padding-left: 0.5rem;
}
</style>
