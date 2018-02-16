<template>
<!-- 企业证照信息 -->
    <div>
        <div class="improveInfo">
            <span>您的企业信息尚不完善？</span>
            <router-link :to="{name:'addInfo',params:{username:'lnfy',show:false}}" class="btn btn-success add"><span class="glyphicon glyphicon-plus"></span> 去完善</router-link>
        </div>
        <div class="license-info">
            <div class="license-title">企业证照信息</div>
            <hr>
            <div class="license-content">
                <form>
                    <div><label>企业logo图片 <small>logo</small></label><img src="/static/img/1.jpg" alt=""></div>
                    <div><label>注册商标 <small>brand</small></label><img src="/static/img/2.jpg" alt=""></div>
                    <div><label>负责人照片 <small>principle</small></label><img src="/static/img/3.jpg" alt=""></div>
                    <div><label>营业执照 <small>license</small></label><img src="/static/img/4.jpg" alt=""></div>
                </form>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
  
}
</script>

<style scoped>
.improveInfo{
    text-align: right;
    margin-right: 3%;
    color: #ccc;
    font-size: 0.07rem;
}
.improveInfo .btn{
    border-radius: 0;
}
.license-info{
    width: 94%;
    margin-left: 3%;
    background: #fff;
    padding: 0.2rem;
}
.license-title{
    font-size: 0.1rem;
    padding-bottom: 0.1rem;
}
.license-content{
    padding: 0.1rem;
}
.license-content div{
    padding: 0.1rem 0;
    font-size: 0.09rem;
}
.license-content div label{
    text-align: right;
    font-size: 0.09rem;
    font-weight: 200;
    width: 25%;
    padding-right: 0.09rem;
    padding-top: 0.1rem;
    cursor: default;

}
.license-content div img{
    width: 75%;
    padding: 5px 0;
    vertical-align: top;
}
</style>
