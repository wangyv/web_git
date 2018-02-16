<template>
  <!-- 查看工作环节 -->
      <div class="check-session">
        <div class="check-session-title">草莓产品类别工作环节</div>
        <hr>
        <div class="check-session-content">
            <div class="check-session-content-title">待选择列表</div>
            <hr>
            <div v-for="(obj, index) in waitSelect" :key="index" class="content" @click="clickHandler('waitSelect','selected',index)">
                <div class="content-img"><img :src="obj.img" alt=""></div>
                <div class="content-name"><span>{{obj.name}}</span></div>
            </div>
        </div>
        <div class="check-session-content">
            <div class="check-session-content-title">已选择列表</div>
            <hr>
            <div v-for="(obj, index) in selected" :key="index" class="content" @click="clickHandler('selected','waitSelect',index)">
                <div class="content-img"><img :src="obj.img" alt=""></div>
                <div class="content-name"><span>{{obj.name}}</span></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data(){
      return {
          waitSelect:[],
          selected:[
            {
                img: '/static/img/1.jpg',
                name: '施肥'
            },{
                img: '/static/img/4.jpg',
                name: '采摘'
            }
          ]
      }
  },
  methods:{
      clickHandler(arrFrom, arrTo, index){
          this[arrTo].push(this[arrFrom][index]);
          this[arrFrom].splice(index, 1);
      }
  }
}
</script>

<style scoped>
.check-session{
    width: 94%;
    margin-left: 3%;
    background: #fff;
    padding: 0.2rem;
}
.check-session-title{
    font-size: 0.1rem;
    padding-bottom: 0.1rem;
}
.check-session-content{
    min-height: 300px;
    width: 90%;
    margin: 0 5%;
}
.check-session-content-title{
    font-size: 0.1rem;
    text-align: center;
    padding: 0.05rem 0;
}
.check-session-content .content{
    float: left;
    margin: 0.2rem 0 0 0.2rem;
}
.check-session-content .content img{
    width: 100px;
    height: 60px;
}
.check-session-content .content .content-name{
    text-align: center;
}
</style>
