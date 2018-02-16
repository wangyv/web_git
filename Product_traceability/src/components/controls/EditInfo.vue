<template>
<!-- 编辑个人信息 -->
    <div class="edit-info">
        <div class="edit-info-title">编辑个人信息</div>
        <hr>
        <div class="edit-info-content">
            <form action="#">
                <div><label for="username">用户名 <small>name</small></label><input type="text" id="username"></div>
                <div><label for="password">登陆密码 <small>password</small></label><input id="password" type="password"></div>
                <div>
                    <label for="logo">用户头像 <small>logo</small></label><input type="file" id="logo">
                </div>
                <div class="edit-info-submit">
                    <button type="submit" class="btn btn-danger">提交</button>
                </div>
            </form>
            
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style scoped>
.edit-info{
    width: 94%;
    margin-left: 3%;
    background: #fff;
    padding: 0.2rem;
}
.edit-info-title{
    font-size: 0.1rem;
    padding-bottom: 0.1rem;
}
.edit-info-content{
    padding: 0.1rem;
}
.edit-info-content div{
    padding: 0.1rem 0;
    font-size: 0.09rem;
}
.edit-info-content div label{
    text-align: right;
    font-size: 0.09rem;
    font-weight: 200;
    width: 25%;
    padding-right: 0.09rem;
    cursor: default;
}
.edit-info-content div input{
    width: 75%;
    border: 0;
    border-bottom: 1px #aaa solid;
    overflow: hidden;
    word-break: break-all;
    font-size: 0.08rem;
    padding: 5px 0;
    color: #555;
}
.edit-info-content .category input{
    width: auto;
}
.edit-info-content .category label{
    text-align: left;
}
.edit-info-content .edit-info-category::after{
    content: '';
    display: block;
    clear: both;
}
.edit-info-content .category{
    width: 75%;
    float: right;
    padding-top: 0; 
}
input[type=file]{
    display: inline-block;
}
.edit-info-submit{
    text-align: center;
}
.edit-info-submit .btn{
    height: 0.25rem;
    width: 0.5rem;
    border-radius: 0;
}
</style>