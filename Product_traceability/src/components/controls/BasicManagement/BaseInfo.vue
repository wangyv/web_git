<template>
    <!-- 企业基础信息 -->
    <div>
        <div class="improveInfo">
            <span>您的企业信息尚不完善？</span>
            <router-link :to="{name:'addInfo',params:{username:'lnfy',show:false}}" class="btn btn-success add"><span class="glyphicon glyphicon-plus"></span> 去完善</router-link>
        </div>
        <div class="base-info">
            <div class="base-title">企业基础信息</div>
            <hr>
            <div class="base-content">
                <form>
                    <div><label for="username">企业名称 <small>name</small></label><input type="text" readonly id="username" value="大庆市良丰农业科技有限公司"></div>
                    <div><label for="addr">企业地址 <small>addr</small></label><input id="addr" type="text" readonly  value="黑龙江省大庆市大同区八井子乡民强村"></div>
                    <div><label for="code">企业编码 <small>code</small></label><input id="code" type="text" readonly  value="91230606MA18W9FY9T"></div>
                    <div><label for="stuff">员工人数 <small>stuff</small></label><input id="stuff" type="text" readonly  value="12"></div>
                    <div><label for="principle">负责人 <small>principle</small></label><input id="principle" type="text" readonly  value="宋良"></div>
                    <div><label for="fax">传真 <small>fax</small></label><input id="fax" type="text" readonly  value="##"></div>
                    <div><label for="contact">联系人 <small>contact</small></label><input id="contact" type="text" readonly  value="宋良"></div>
                    <div><label for="teil">联系电话 <small>teil</small></label><input type="text" id="teil" readonly  value="18245950001"></div>
                    <div><label for="email">企业邮箱 <small>email</small></label><input type="text" id="email" readonly  value="329856012@qq.com"></div>
                    <div><label for="industry">行业 <small>industry</small></label><input type="text" id="industry" readonly  value="科学研究和应用服务业"></div>
                    <div><label for="link">门户网站网址 <small>link</small></label><input type="text" id="link" readonly  value=""></div>
                    <div><label for="dsec">企业简介 <small>dsec</small></label><input type="text" id="desc" readonly  value="公司主要经营业务有：农业技术推广服务，种植并销售谷物、蔬菜、水果，农产品初加工，养殖猪、家禽，销售食品、不再分装的包装种子、化肥、计算机、软件及辅助设备、电子产品、服装鞋帽、五金、机械设备、电动自行车、化工产品（不含危险品、易燃易爆品及剧毒品）、家用电器、饲料，装卸搬运，仓储（不含危险品、易燃易爆品及剧毒品），餐饮服务，住宿服务，粮食收购。"></div>
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
.base-info{
    width: 94%;
    margin-left: 3%;
    background: #fff;
    padding: 0.2rem;
}
.base-title{
    font-size: 0.1rem;
    padding-bottom: 0.1rem;
}
.base-content{
    padding: 0.1rem;
}
.base-content div{
    padding: 0.1rem 0;
    font-size: 0.09rem;
}
.base-content div label{
    text-align: right;
    font-size: 0.09rem;
    font-weight: 200;
    width: 25%;
    padding-right: 0.09rem;
    cursor: default;
}
.base-content div input{
    width: 75%;
    border: 0;
    border-bottom: 1px #aaa solid;
    cursor: not-allowed;
    overflow: hidden;
    word-break: break-all;
    font-size: 0.08rem;
    padding: 5px 0;
    color: #555;
}
</style>
