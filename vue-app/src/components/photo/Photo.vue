<template>
    <div class="container clearfix">
        <div v-for="(obj, index) in photoList" :key = "index" class="photo-list">
            <img :src="obj" alt="" @click="clickHandler(index)">
        </div>
        <div class="mask" v-show="isShow" @click="isShow = !isShow">
          <div class="display-img">
            <img :src="selectedImg" alt="" slot="img">
          </div>
        </div>
    </div>

</template>





<script>
export default {
  data() {
    return {
      photoList: [
        "/static/img/img/1.jpg",
        "/static/img/img/2.jpg",
        "/static/img/img/3.jpg",
        "/static/img/img/4.jpg",
        "/static/img/img/5.jpg",
        "/static/img/img/6.jpg",
        "/static/img/img/7.jpg",
        "/static/img/img/8.jpg",
        "/static/img/img/9.jpg",
        "/static/img/img/10.jpg",
        "/static/img/img/11.jpg",
        "/static/img/img/12.jpg"
      ],
      selectedImg: "",
      isShow: false
    };
  },
  methods: {
    clickHandler(index) {
      this.selectedImg = this.photoList[index];
      this.isShow = !this.isShow;
    }
  }
};
</script>

<style scoped>
.container {
  margin: 1rem 0;
}
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}
.photo-list {
  float: left;
  width: 50%;
}
.mask {
  position: fixed;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1;
}
.display-img {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
}
.display-img img{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
}
</style>