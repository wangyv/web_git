<template>
<!-- 完善企业基础信息 -->
    <div class="add-info">
        <div class="info-title">完善企业基础信息</div>
        <hr>
        <div class="info-content">
            <form action="#">
                <div><label for="username">企业名称 <small>name</small></label><input type="text" id="username" value="大庆市良丰农业科技有限公司"></div>
                <div><label for="addr">企业地址 <small>addr</small></label><input id="addr" type="text" value="黑龙江省大庆市大同区八井子乡民强村"></div>
                <div><label for="code">企业编码 <small>code</small></label><input id="code" type="text" value="91230606MA18W9FY9T"></div>
                <div>
                    <label for="logo">企业logo <small>logo</small></label><input type="file" id="logo">
                </div>
                <div>
                    <label for="license">营业执照 <small>license</small></label><input type="file" id="license">
                </div>
                <div>
                    <label for="brand">注册商标 <small>brand</small></label><input type="file" id="brand">
                </div>
                <div><label for="stuff">员工人数 <small>stuff</small></label><input id="stuff" type="text"  value="12"></div>
                <div><label for="principle">负责人 <small>principle</small></label><input id="principle" type="text"  value="宋良"></div>
                <div>
                    <label for="phpto">负责人照片 <small>phpto</small></label><input type="file" id="phpto">
                </div>
                <div><label for="fax">传真 <small>fax</small></label><input id="fax" type="text"  placeholder="请填写公司传真"></div>
                <div><label for="contact">联系人 <small>contact</small></label><input id="contact" type="text"  value="宋良"></div>
                <div><label for="teil">联系电话 <small>teil</small></label><input type="text" id="teil"  value="18245950001"></div>
                <div><label for="email">企业邮箱 <small>email</small></label><input type="text" id="email"  value="329856012@qq.com"></div>
                <div><label for="industry">行业 <small>industry</small></label><input type="text" id="industry"  value="科学研究和应用服务业"></div>
                <div><label for="link">门户网站网址 <small>link</small></label><input type="text" id="link" placeholder="请输入公司门户网址"></div>
                <div class="info-content-desc"><label for="dsec">企业简介 <small>dsec</small></label>
                    <textarea id="desc">公司主要经营业务有：农业技术推广服务，种植并销售谷物、蔬菜、水果，农产品初加工，养殖猪、家禽，销售食品、不再分装的包装种子、化肥、计算机、软件及辅助设备、电子产品、服装鞋帽、五金、机械设备、电动自行车、化工产品（不含危险品、易燃易爆品及剧毒品）、家用电器、饲料，装卸搬运，仓储（不含危险品、易燃易爆品及剧毒品），餐饮服务，住宿服务，粮食收购。</textarea>
                </div>
                <div class="info-submit">
                    <button type="submit" class="btn btn-danger">提交</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.add-info{
    width: 94%;
    margin-left: 3%;
    background: #fff;
    padding: 0.2rem;
}
.info-title{
    font-size: 0.1rem;
    padding-bottom: 0.1rem;
}
.info-content{
    padding: 0.1rem;
}
.info-content div{
    padding: 0.1rem 0;
    font-size: 0.09rem;
}
.info-content div label{
    text-align: right;
    font-size: 0.09rem;
    font-weight: 200;
    width: 25%;
    padding-right: 0.09rem;
    cursor: default;
}
.info-content div input{
    width: 75%;
    border: 0;
    border-bottom: 1px #aaa solid;
    overflow: hidden;
    word-break: break-all;
    font-size: 0.08rem;
    padding: 5px 0;
    color: #555;
}
.info-content .category input{
    width: auto;
}
.info-content .category label{
    text-align: left;
}
.info-content .approve-category::after{
    content: '';
    display: block;
    clear: both;
}
.info-content .category{
    width: 75%;
    float: right;
    padding-top: 0; 
}
input[type=file]{
    display: inline-block;
}
.info-submit{
    text-align: center;
}
.info-submit .btn{
    height: 0.25rem;
    width: 0.5rem;
    border-radius: 0;
}
.info-content-desc{
    vertical-align: top;
}
.info-content-desc textarea{
    width: 74%;
    min-height: 0.8rem;
    vertical-align: top;
    font-size: 0.07rem;
}

</style>