<template>
    <div class="category-list">
        <div class="category-list-title">产品类别列表</div>
        <hr>
        <div class="category-list-content">
            
            <div class="add-category-list">
                <router-link to="#" class="btn btn-success add"><span class="glyphicon glyphicon-plus"></span> 新增</router-link>
                <form action="#">
                    <input type="text">
                    <button type="submit" class="btn btn-success"><span class="glyphicon glyphicon-search"></span></button>
                </form>
            </div>


            <div class="category-list-table">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>产品类别名称</th>
                            <th>产品类别描述</th>
                            <th>关联区块</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(obj, index) in work" :key="index">
                            <td class="category-name">{{obj.name}}</td>
                            <td class="category-block">{{obj.desc}}</td>
                            <td>
                                <select class="form-control">
                                    <option v-for="(content, contentIndex) in obj.option" :key="contentIndex">{{content}}</option>
                                </select>
                            </td>
                            <td class="operation">
                                <router-link to="#" class="btn btn-secondary-outline"><span class="glyphicon glyphicon-pencil"></span> 编辑</router-link>
                                <span class="btn btn-danger-outline" @click="delateHandler(index)"><span class="glyphicon glyphicon-trash"></span> 删除</span>
                                <router-link :to="{name:'checkSession',params:{username:$route.params.username,show:false}}" class="btn btn-secondary-outline" @click="delateHandler(index)"><span class="glyphicon glyphicon-new-window"></span> 查看工作环节</router-link>
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
              name: '草莓',
              desc: '采用先进的种植技术',
              option: ['1号种植区']
          },{
              name: '葡萄',
              desc: '巨丰品质',
              option: ['2号种植区']
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
.category-list{
    width: 94%;
    margin-left: 3%;
    background: #fff;
    padding: 0.2rem;
}
.category-list-title{
    font-size: 0.1rem;
    padding-bottom: 0.1rem;
}
.category-list-content{
    padding: 0.1rem;
}
.add-category-list{
    padding-bottom: 0.1rem;
}
.add-category-list form{
    float: right;
}
.add-category-list form input{
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
.add-category-list .add{
    border-radius: 0;
    height: 0.2rem;
    line-height: 0.2rem;
    padding-top: 0;
    padding-bottom: 0;
    width: 0.4rem;
}


.category-list-table table{
    border-bottom: 1px #aaa solid;
}
.category-list-table th{
    border: 0;
    font-size: 0.09rem;
    color: #aaa;
}
.category-list-table table td{
    border: 0;
    border-bottom: 1px solid #aaa;
    vertical-align: middle;
    font-size: 0.08rem;
}

.operation button{
    margin-bottom: 10px;
}
</style>