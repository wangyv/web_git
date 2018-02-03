<template>
    <div class="book-content">
      <!-- <div class="container">
        <ul class="book-img" :style="'left:'+positionX">
            <li  v-for="obj in imgArr" :key="obj.id">
                <img :src="obj.src">
            </li>
        </ul>
      </div>-->
 
      <!-- <div class="container">
          <ul class="book-img">
            <transition-group tag='li' name="slide"  v-for="(obj, index) in imgArr" :key="obj.id" >
              <img :src="obj.src" :key="obj.id"  v-show="index == nowIndex">
            </transition-group>
          </ul> 
      </div> -->

      <div class="container">
        <transition-group tag='ul' name="slide"  class="book-img">
          <li v-for="(obj, index) in imgArr" :key="obj.id"  v-show="index == nowIndex">
            <img :src="obj.src" :key="obj.id">
          </li>
        </transition-group> 

        <ul class="book-ul">
          <li :class="{selected : index == nowIndex}" v-for="(obj, index) in imgArr" :key="obj.id" class="book-index">{{index + 1}}</li>
        </ul>
      </div>

    </div>

</template>

<script>
export default {
  data: () => {
    return {
      imgArr: [
        {
          src: require(`@/assets/img/1.jpg`),
          id:1,
        },
        {
          src: require(`@/assets/img/2.jpg`),
          id:2,       
        },
        {
          src: require(`@/assets/img/3.jpg`),
          id:3,
        },
        {
          src: require(`@/assets/img/4.jpg`),
          id:4,
        },
        {
          src: require(`@/assets/img/5.jpg`),
          id:5,         
        }
      ],
      positionX: "",
      nowIndex: 0
    };
  },
  mounted() {
    this.change();
  },
  methods: {
    // change(){
    //     let index = 0;
    //     setInterval(()=>{
    //         index++;
    //         if(index == 5){
    //             index = 0;
    //         }
    //         this.positionX = - index * 100 +'%';
    //     },2000);
    // }


    change(){
        setInterval(()=>{
            this.nowIndex++;
            if(this.nowIndex == 5){
                this.nowIndex = 0;
            }
        },3000);
    }
  }
};
</script>

<style scoped>
.book-content {
  margin-top: 1rem;
  height: 250px;
  position: relative;
}
.container{
  width: 100%;
  height: 276px;
  overflow: hidden;
  position: relative;
}
.book-img {
  overflow: hidden;
  width: 100%;
  position: relative;
  height: 276px;
}
.book-img li {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
}
.book-img img {
  width: 100%;
  height: 100%;
}
.book-ul{
  height: 20px;
  position: absolute;
  bottom: 5px;
  right: 5px;
}
.book-index{
  float: left;
  width: 20px;
  height: 20px;
  background-color:rgba(0, 0, 0, 0.5);
  color: #fff;
  margin-right: 5px;
  line-height: 20px;
  text-align: center;
}
.selected{
  background-color: #ff6700;
  opacity: 0.6;
}


.slide-enter{
    transform: translateX(100%);
    opacity:0.5;
}
.slide-enter-active,.slide-leave-active{
    transition: all 1.5s linear;
}
.slide-enter-active{
    transition: all 1s linear;
}
.slide-enter-to, .slide-leave{
  transform: translateX(0);
  opacity:1;
}

.slide-leave-to{
    transform: translateX(-100%);
    opacity:0;
}
</style>