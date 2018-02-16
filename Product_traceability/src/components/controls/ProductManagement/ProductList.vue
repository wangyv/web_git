<template>
<!-- 工作环节 -->
    <div class="product-list">
        <div class="product-list-title">产品列表</div>
        <hr>
        <div class="product-list-content">
            <div class="add-product-list">
                <router-link :to="{name:'addApprove',params:{username:'lnfy',show:false}}" class="btn btn-success add"><span class="glyphicon glyphicon-plus"></span> 新增</router-link>
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
                            <td class="specification">{{obj.specification}}</td>
                            <td class="desc">{{obj.desc}}</td>
                            <td class="price">{{obj.price}}</td>
                            <td class="trace-source">{{obj.traceSource}}</td>
                            <td class="code"><img :src="obj.code" alt=""></td>
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
              name: '盆景生菜',
              option: [''],
              specification: '45cm*30cm*17cm',
              desc: '放在家里养着吃的菜，随时可以吃到新鲜蔬菜，让人体验城市小菜园的乐趣！',
              price: 30,
              traceSource: '20171213201249',
              code: '/static/img/api.png'
          },{
              img:'/static/img/3.jpg',
              name: '洋葱',
              option: ['洋葱'],
              specification: '10',
              desc: '根据其皮色可分为白皮、黄皮和红皮三种：白皮种鳞茎小，外表白色或略带绿色，肉质柔嫩，汁多辣味淡，品质佳，适于生食。',
              price: 6,
              traceSource: '20170914092816',
              code: '/static/img/api.png'
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


.product-list-table table tr{
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
    font-size: 0.08rem;
}
.product-list-table table tr{
    border-top: 1px solid #aaa;
    
}
.product-dsec,.operation{
    width: 0.6rem;
}
.operation button{
    margin-bottom: 10px;
}

.product-select{
    width: 0.9rem;
}
.code{
    width: 0.5rem;
}
.table>tbody>tr>td,{
    vertical-align: middle;
}
.trace-source{
    width: 1rem;
}
.price{
    width: 0.2rem;
}
.trace-source,.specification{
    width: 0.8rem;
}
</style>