<template>
  <div id="app">
    <common-header :bgColor="cColor" @tapped="changed('Movie')">
        <span slot="title" v-text="cTitle"></span>
    </common-header>
    <router-view class="content"/>
    <common-footer :bgColor="cColor" @tapped="changed"></common-footer>
    
  </div>
</template>

<script>
import CommonHeader from "@/components/common/Header.vue";
import CommonFooter from "@/components/common/Footer.vue";
export default {
  name: "App",
  data: () => {
    return {
      // color: [
      //   "rgb(33, 150, 243)",
      //   "rgb(0, 150, 136)",
      //   "rgb(121, 85, 72)",
      //   "rgb(63, 81, 181)"
      // ],
      // title: ["Movie", "Music", "Book", "Photo"],
      cColor: "rgb(33, 150, 243)",
      cTitle: "Movie"
    };
  },
  components: {
    CommonHeader,
    CommonFooter
  },
  methods: {
    changed(tagName) {
      this.cTitle = tagName;
      // console.log(index);
      // this.cColor = this.color[index];
      // this.cTitle = this.title[index];
      switch (tagName) {
        case "Movie":
          this.cColor = "rgb(33, 150, 243)";
          break;
        case "Music":
          this.cColor = "rgb(0, 150, 136)";
          break;
        case "Book":
          this.cColor = "rgb(121, 85, 72)";
          break;
        case "Photo":
          this.cColor = "rgb(63, 81, 181)";
          break;
        default:
          this.cColor = "rgb(33, 150, 243)";
      }
    }
  }
};
</script>

<style>
/* .content{
  margin: 1rem 0;
} */
</style>
