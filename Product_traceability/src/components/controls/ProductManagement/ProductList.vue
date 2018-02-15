<template>
<!-- 工作环节 -->
    <div class="product-list">
        <div class="product-list-title">产品列表</div>
        <hr>
        <div class="product-list-content">
            <div class="add-product-list">
                <router-link to="/addApprove" class="btn btn-success add"><span class="glyphicon glyphicon-plus"></span> 新增</router-link>
                <form action="#">
                    <input type="text">
                    <button type="submit" class="btn btn-success"><span class="glyphicon glyphicon-search"></span></button>
                </form>
            </div>
            <div class="product-list-table">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>产品图片</th>
                            <th>产品名称</th>
                            <th>产品类别</th>
                            <th>产品规格</th>
                            <th>产品介绍</th>
                            <th>参考价格</th>
                            <th>产品溯源码</th>
                            <th>溯源二维码</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(obj, index) in work" :key="index">
                            <td class="product-img"><img :src="obj.img" alt=""></td>
                            <td class="product-name">{{obj.name}}</td>
                            <td class="product-select">
                                <select class="form-control">
                                    <option v-for="(content, contentIndex) in obj.option" :key="contentIndex">{{content}}</option>
                                </select>
                            </td>
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
.product-list{
    width: 94%;
    margin-left: 3%;
    background: #fff;
    padding: 0.2rem;
}
.product-list-title{
    font-size: 0.1rem;
    padding-bottom: 0.1rem;
}
.product-list-content{
    padding: 0.1rem;
}
.add-product-list{
    padding-bottom: 0.1rem;
}
.add-product-list form{
    float: right;
}
.add-product-list form input{
    width: 1rem;
    height: 0.2rem;
    border: 1px #aaa solid;
    font-size: 0.07rem;
    padding-left: 10px; 
}
.add-product-list form .btn{
    float: right;
    border-radius: 0;
    height: 0.2rem;
    line-height: 0.2rem;
    width: 0.25rem;
}
.add-product-list .add{
    border-radius: 0;
    height: 0.2rem;
    line-height: 0.2rem;
    padding-top: 0;
    padding-bottom: 0;
    width: 0.4rem;
}


.product-list-table table{
    border-bottom: 1px #aaa solid;
}
.product-list-table th{
    border: 0;
    font-size: 0.09rem;
    color: #aaa;
}
.product-list-table table .product-img,.product-list-table table td img{
    width: 0.6rem;
    height: 0.4rem;
}
.product-list-table table td{
    border: 0;
    border-bottom: 1px solid #aaa;
    font-size: 0.08rem;
}
.product-dsec,.operation{
    width: 0.6rem;
}
.operation button{
    margin-bottom: 10px;
}
</style>