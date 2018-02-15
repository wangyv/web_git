<template>
<!-- 企业认证证书 -->
    <div class="certificate">
        <div class="certificate-title">企业认证证书</div>
        <hr>
        <div class="certificate-content">
            <div class="add-certificate">
                <router-link :to="{name:'addApprove',params:{username:$route.params.username,show:false}}" class="btn btn-success add"><span class="glyphicon glyphicon-plus"></span> 新增</router-link>
                <form action="#">
                    <input type="text">
                    <button type="submit" class="btn btn-success"><span class="glyphicon glyphicon-search"></span></button>
                </form>
            </div>
            <div class="certificate-table">
                <table>
                    <thead>
                        <tr>
                            <th>证书缩略图</th>
                            <th>证书名称</th>
                            <th>发证机构</th>
                            <th>发证日期</th>
                            <th>有效期</th>
                            <th>证书级别</th>
                            <th>证书关联产品类别</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.certificate{
    width: 94%;
    margin-left: 3%;
    background: #fff;
    padding: 0.2rem;
}
.certificate-title{
    font-size: 0.1rem;
    padding-bottom: 0.1rem;
}
.certificate-content{
    padding: 0.1rem;
}
.add-certificate{
    padding-bottom: 0.1rem;
}
.add-certificate form{
    float: right;
}
.add-certificate form input{
    width: 1rem;
    height: 0.2rem;
    border: 1px #aaa solid;
    font-size: 0.07rem;
    padding-left: 10px; 
}
.add-certificate .add{
    border-radius: 0;
    height: 0.2rem;
    line-height: 0.2rem;
    padding-top: 0;
    padding-bottom: 0;
    width: 0.4rem;
}
button{
    height: 0.2rem;
    width: 0.22rem;
    float: right;
    border-radius: 0;
}

.certificate-table table{
    border-bottom: 1px #aaa solid;
}
.certificate-table th{
    border: 0;
    font-size: 0.09rem;
    color: #aaa;
}
</style>