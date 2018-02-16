<template>
  <div class="login-registered">
      <div class="login-content">
          <!-- 标题 注册还是登录 -->
          <div class="page-name">
              <div :class="{selected:pageType == 'login'}" @click="pageType = 'login'">账号登录</div>
              <div :class="{selected:pageType == 'registered'}" @click="pageType = 'registered'">用户注册</div>
          </div>

          <!-- 登录表单 -->
          <form v-show="pageType == 'login'">
            <input type="text" placeholder="请输入账号">
            <input type="password" placeholder="请输入密码">
            <div>
                <label class="remember-psd">
                    <input type="checkbox" class="remember">记住密码
                </label>
            </div>
            <input type="submit" class="login-submit" value="登 录">
            
            <!-- 模拟从后台查找完成，跳转到控制台 -->
            <div>
                <router-link :to="{name:'control',params:{username:'lfny'}}" style="color:#999">去后台</router-link>                
            </div>
          </form>


          <!-- 注册表单 -->
          <form v-show="pageType == 'registered'" class="registered">
                <input type="text" placeholder="用户名">
                <input type="password" placeholder="请输入密码">
                <input type="password" placeholder="请再次输入密码">
                <input type="submit" class="login-submit" value="注 册">
          </form>


          <!-- 回到首页 -->
          <div class="go-index">
                <router-link to='/' class="product-logo">
                    <img src="/static/img/logo.bmp" alt="春雨溯源系统">
                </router-link>
                <router-link to="/" class="product-name" @click.prevent>
                    <span>春雨溯源系统</span>
                </router-link>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            pageType:''
        }
    },
    mounted(){
      this.pageType = this.$route.params.manner ? this.$route.params.manner : 'login';
    }
}
</script>

<style scoped>
/* 主体 */ 
.login-registered{
    background: url('/static/img/bg1.jpg') no-repeat center/cover;
    position: absolute;
    top:0;
    left: 0;
    bottom: 0;
    right: 0;
}
.login-content{
    /* border: 1px #fa6700 solid; */
    width: 30%;
    height: 70%;
    position: absolute;
    top:50%;
    transform: translateY(-50%);
    right: 1rem;
    background-color: rgba(255, 255, 255, 0.6);
}

/* 页面类型 登录还是注册 */
.page-name{
    /* text-align: left; */
    font-size: 0.13rem;
    display: flex;
    padding: 27px 0 24px;
}
.page-name div{
    flex-grow: 1;
    cursor: pointer;
    text-align:center;
}
.page-name div:first-child{
    border-right: 3px #ddd solid;
}
.selected{
    color: #fa6700;
}

/* 登录 注册 表单 */
.remember{
    width: 0.08rem;
    height: 0.08rem;
    margin:0 5px 0 0;
}
form{
    text-align: center;
}
form div{
    width: 80%;
    margin-left:10%; 
    text-align: left;
    font-size: 0.09rem;
    color:#999;
    position: relative;
}
input{
    width: 80%;
    height: 0.23rem;
    padding: 5px;
    font-size: 0.08rem;
    margin: 0.05rem 0;
    border: 0;
    border-bottom: 1px #999 solid;
}
input::-webkit-input-placeholder{
    color:#ccc;
}
.login-submit{
    margin-top: 0.2rem;
    border: 0;
    background-color: #fa6700;
    color: #fff;
    font-size: 0.09rem;
}



/* 回到主页 */
.go-index{
    position: absolute;
    bottom: 0.1rem;
    left: 50%;
    transform: translateX(-50%);
    height: 0.2rem;
    line-height: 0.2rem;
}
.product-logo img{
    width: 0.25rem;
    height: 0.2rem;
}
.product-name{
    color: #333;
}
.product-name:hover{
    text-decoration: none;
}
</style>
