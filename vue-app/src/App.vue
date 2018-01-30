<template>
  <div id="app">
    <common-header :bgColor="cColor" @tapped="changed">
        <span slot="title">{{cTitle}}</span>
    </common-header>
    <router-view/>
    <common-footer :bgColor="cColor" @tapped="changed"></common-footer>
    
  </div>
</template>

<script>
import CommonHeader from "@/components/common/Header.vue";
import CommonFooter from "@/components/common/Footer.vue";
export default {
  name: 'App',
  data:() => {
    return {
      color:['rgb(33, 150, 243)','rgb(0, 150, 136)','rgb(121, 85, 72)','rgb(63, 81, 181)'],
      title:['Movie','Music','Book','Photo'],
      cColor:'rgb(33, 150, 243)',
      cTitle:'Movie'
    }
  },
  components: {
    CommonHeader,
    CommonFooter
  },
  methods: {
    changed(index){
      console.log(index)
      this.cColor = this.color[index];
      this.cTitle = this.title[index];
    }
  }
};

</script>

<style>

</style>
