<template>
<!-- 工作环节 -->
    <div class="work-link">
        <div class="work-link-title">工作环节</div>
        <hr>
        <div class="work-link-content">
            <div class="add-work-link">
                <router-link to="/addApprove" class="btn btn-success add"><span class="glyphicon glyphicon-plus"></span> 新增</router-link>
                <form action="#">
                    <input type="text">
                    <button type="submit" class="btn btn-success"><span class="glyphicon glyphicon-search"></span></button>
                </form>
            </div>
            <div class="work-link-table">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>工作环节图标</th>
                            <th>工作环节名称</th>
                            <th>工作环节描述</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(obj, index) in work" :key="index">
                            <td class="work-img"><img :src="obj.img" alt=""></td>
                            <td class="work-dsec">{{obj.name}}</td>
                            <td>{{obj.desc}}</td>
                            <td class="operation">
                                <button class="btn btn-secondary-outline"><span class="glyphicon glyphicon-pencil"></span> 编辑</button>
                                <button class="btn btn-danger-outline" @click="delateHandler(index)"><span class="glyphicon glyphicon-trash"></span> 删除</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data(){
      return {
          work:[{
              img:'/static/img/1.jpg',
              name: '施肥',
              desc: '根据种植作物可以分析出土壤需要哪种肥料，以此保证土壤肥力。一般来说，土壤肥力与土壤成土母质有关，但同时还与该土地前茬种植作物有关。前茬种植禾本科作物对土壤养分消耗较大，因此需要同时增施氮、磷、钾三种肥料，尤其是氮肥。前茬种植豆科作物则消耗氮肥较少，应当增施磷、钾肥。',
          }]
      }
  },
  methods:{
      delateHandler(index){
          this.work.splice(index, 1);
      }
  }
}
</script>

<style scoped>
.work-link{
    width: 94%;
    margin-left: 3%;
    background: #fff;
    padding: 0.2rem;
}
.work-link-title{
    font-size: 0.1rem;
    padding-bottom: 0.1rem;
}
.work-link-content{
    padding: 0.1rem;
}
.add-work-link{
    padding-bottom: 0.1rem;
}
.add-work-link form{
    float: right;
}
.add-work-link form input{
    width: 1rem;
    height: 0.2rem;
    border: 1px #aaa solid;
    font-size: 0.07rem;
    padding-left: 10px; 
}
.add-work-link form .btn{
    float: right;
    border-radius: 0;
    height: 0.2rem;
    line-height: 0.2rem;
    width: 0.25rem;
}
.add-work-link .add{
    border-radius: 0;
    height: 0.2rem;
    line-height: 0.2rem;
    padding-top: 0;
    padding-bottom: 0;
    width: 0.4rem;
}


.work-link-table table{
    border-bottom: 1px #aaa solid;
}
.work-link-table th{
    border: 0;
    font-size: 0.09rem;
    color: #aaa;
}
.work-link-table table .work-img,.work-link-table table td img{
    width: 0.6rem;
    height: 0.4rem;
}
.work-link-table table td{
    border: 0;
    border-bottom: 1px solid #aaa;
    font-size: 0.08rem;
}
.work-dsec,.operation{
    width: 0.6rem;
}
.operation button{
    margin-bottom: 10px;
}
</style>