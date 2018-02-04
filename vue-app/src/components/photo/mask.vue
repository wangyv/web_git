<template>
    <v-touch  class="mask"  @tap="tapHandler" :style="styleObj"  @swipeleft="swipeLeftHandler" @swiperight="swipeRightHandler"></v-touch>
</template>

<script>
import FastClick from 'fastclick'
export default {
  data() {
    return {
      nowIndex: 0
    };
  },
  computed: {
    styleObj() {
      return `background: #000 url(${
        this.$store.state.photoList[this.nowIndex].src
      }) no-repeat center/contain`;
    }
  },
  created() {
    this.nowIndex = this.$route.params.index;
    window.addEventListener(
      "tap",
      function() {
        FastClick.attach(document.body);
      },
      false
    );
  },
  methods: {
    tapHandler() {
      this.$router.push("/photo");
    },
    swipeLeftHandler() {
      this.nowIndex++;
      if (this.nowIndex == this.$store.state.photoList.length) {
        this.nowIndex = 0;
      }
    },
    swipeRightHandler() {
      this.nowIndex--;
      if (this.nowIndex == -1) {
        this.nowIndex = this.$store.state.photoList.length - 1;
      }
    }
  }
};
</script>

<style scoped>
.mask {
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  z-index: 1;
  margin: 1rem 0;
  transition: all 0.5s linear;
}
</style>
