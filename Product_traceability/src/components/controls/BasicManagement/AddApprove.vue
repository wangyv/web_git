<template>
<!-- 完善企业认证材料 -->
    <div class="add-approve">
        <div class="approve-title">完善企业认证材料</div>
        <hr>
        <div class="approve-content">
            <form action="#">
                <div><label for="username">证书名称 <small>name</small></label><input type="text" id="username" placeholder="请填写证书名称"></div>
                <div>
                    <label for="brand">证书图片 <small>brand</small></label><input type="file" id="brand">
                    <!-- <span class="btn-upload form-group">
                        <input class="input-text upload-url radius" type="text" name="uploadfile-1" id="brand" readonly><a href="javascript:void();" class="btn btn-primary radius"><i class="iconfont">&#xf0020;</i> 浏览文件</a>
                        <input type="file" multiple name="file-1" class="input-file">
                    </span> -->

                </div>
                <div><label for="office">发证机构  <small>office</small></label><input id="office" type="text" placeholder="请填写发证机关"></div>
                <div><label for="post_date">发证日期  <small>post_date</small></label><input id="post_date" type="date" placeholder="发布时间"></div>
                <div><label for="last_date">证书有效期  <small>last_date</small></label><input id="last_date" type="text" placeholder="请填写证书有效期（带时间单位）"></div>
                <div><label for="level">证书级别  <small>level</small></label><input id="level" type="text" placeholder="请填写证书级别"></div>
                <div class="approve-category">
                    <label>证书关联产品类别  <small>category</small></label>
                    <div class="category">
                        <div><input id="category1" type="checkbox" name="category" value=1><label for="category1">草莓</label></div>
                        <div><input id="category2" type="checkbox" name="category" value=2><label for="category2">葡萄</label></div>
                        <div><input id="category3" type="checkbox" name="category" value=3><label for="category3">柿子</label></div>
                        <div><input id="category4" type="checkbox" name="category" value=4><label for="category4">黄瓜</label></div>
                        <div><input id="category5" type="checkbox" name="category" value=5><label for="category5">香瓜</label></div>
                        <div><input id="category6" type="checkbox" name="category" value=6><label for="category6">土豆</label></div>
                        <div><input id="category7" type="checkbox" name="category" value=7><label for="category7">洋葱</label></div>
                    </div>
                </div>
                <div class="approve-submit">
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
.add-approve{
    width: 94%;
    margin-left: 3%;
    background: #fff;
    padding: 0.2rem;
}
.approve-title{
    font-size: 0.1rem;
    padding-bottom: 0.1rem;
}
.approve-content{
    padding: 0.1rem;
}
.approve-content div{
    padding: 0.1rem 0;
    font-size: 0.09rem;
}
.approve-content div label{
    text-align: right;
    font-size: 0.09rem;
    font-weight: 200;
    width: 25%;
    padding-right: 0.09rem;
    cursor: default;
}
.approve-content div input{
    width: 75%;
    border: 0;
    border-bottom: 1px #aaa solid;
    overflow: hidden;
    word-break: break-all;
    font-size: 0.08rem;
    padding: 5px 0;
    color: #555;
}
.approve-content .category input{
    width: auto;
}
.approve-content .category label{
    text-align: left;
}
.approve-content .approve-category::after{
    content: '';
    display: block;
    clear: both;
}
.approve-content .category{
    width: 75%;
    float: right;
    padding-top: 0; 
}
input[type=file]{
    display: inline-block;
}
.approve-submit{
    text-align: center;
}
.approve-submit .btn{
    height: 0.25rem;
    width: 0.5rem;
    border-radius: 0;
}


</style>