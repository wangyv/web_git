<template>
    <!-- <div></div> -->
    <div class="book-content clearfix">
    <!-- <common-header bgColor="rgb(121, 85, 72)"> -->
        <!-- <span slot="title">Book</span> -->
    <!-- </common-header> -->
    <!-- <common-footer bgColor="rgb(121, 85, 72)"></common-footer> -->
    <!-- <transition tag="li" name="slide"> -->
        <!-- <ul class="book-img">
            <li  v-for="obj in imgArr">
                <img :src="obj.src">
            </li>
        </ul> -->
    <!-- </transition> -->    
    </div>

</template>

<script>
// import CommonHeader from "@/components/common/Header.vue";
// import CommonFooter from "@/components/common/Footer.vue";
// export default {
//   components: {
//     CommonHeader,
//     CommonFooter
//   }
// };
export default {
  data: () => {
    return {
      imgArr: [
        {
          src: require(`@/assets/img/1.jpg`),
          id:1,
          isShow:true
        },
        {
          src: require(`@/assets/img/2.jpg`),
          id:2,
          isShow:true          
        },
        {
          src: require(`@/assets/img/3.jpg`),
          id:3,
          isShow:true          
        },
        {
          src: require(`@/assets/img/4.jpg`),
          id:4,
          isShow:true
        },
        {
          src: require(`@/assets/img/5.jpg`),
          id:5,
          isShow:true          
        }
      ],
      positionX: ""
    };
  },
  mounted() {
    // this.change();
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
  }
};
</script>

<style scoped>
.book-content {
  margin-top: 1rem;
  margin-bottom: 1rem;
  /* width: 100%; */
}
.book-img {
  overflow: hidden;
  width: 500%;
  position: absolute;
  height: 250px;
  left: 0;
  transition: all 1s linear;
}
/* .clearfix::after{
    content: '';
    display: block;
    clear: both;
} */
.book-img li {
  float: left;
  width: 20%;
  height: auto;
  position: relative;
}
.book-img img {
  width: 100%;
  height: 100%;
}
/* .slide-enter{
    left:0;
}
.slide-enter-active,.slide-leave-active{
    transition: all 1s linear;
}
.slide-enter-to,.slide-leave{
    left: -50%;
}
.slide-leave-to{
    left:-100%;
} */
</style>