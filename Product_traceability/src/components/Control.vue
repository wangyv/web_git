<template>
    <div class="control">
        <!-- 导航栏 -->
        <header class="navbar-wrapper"> 
            <div class="navbar navbar-fixed-top">
                <div class="container-fluid cl"> 
                    <router-link class="logo navbar-logo f-l mr-10 hidden-xs" to="/" id="control-logo"><img src="/static/img/control_logo.jpg" alt=""></router-link> 
                    <div class="left-list-icon"><span class="Hui-iconfont  Hui-iconfont-fenlei" @click="leftList = !leftList"></span></div>
                    <ul class="right-list">
                        <li><router-link :to="{name:'control',params:{username:'lfny'}}">大庆市良丰农业科技有限公司</router-link></li>
                        <li><router-link to="/">去前台</router-link></li>
                        <li><router-link :to="{name:'control',params:{username:'lfny'}}">欢迎你，{{username}}</router-link></li>
                        <li><router-link to="/"><span class="Hui-iconfont Hui-iconfont-zhongzuo"></span>退出</router-link></li>
                    </ul>
                </div>
            </div>
        </header>
        <!--/_header 作为公共模版分离出去-->

        <!--_menu 作为公共模版分离出去-->
        <aside class="Hui-aside" :style="leftList ? 'width:1.5rem' : 'width:0'">
            <div class="left-list">
                <dl id="business-management">
                    <dt @click="clickHandler(0)"><i class="Hui-iconfont Hui-iconfont-gongsi"></i>&nbsp;&nbsp;&nbsp;企业基础管理<i class="Hui-iconfont menu_dropdown-arrow">{{nowIndex == 0?'&#xe6d6;':'&#xe6d5;'}}</i></dt>
                    <dd :style="nowIndex == 0?'height:0.9rem':'height:0'">
                        <ul>
                            <li><router-link to="article-list.html" title="企业基础信息"><span class="Hui-iconfont Hui-iconfont-arrow2-right"></span>&nbsp;&nbsp;&nbsp;企业基础信息</router-link></li>
                            <li><router-link to="article-list.html" title="企业证照信息"><span class="Hui-iconfont Hui-iconfont-arrow2-right"></span>&nbsp;&nbsp;&nbsp;企业证照信息</router-link></li>
                            <li><router-link to="article-list.html" title="企业认证信息"><span class="Hui-iconfont Hui-iconfont-arrow2-right"></span>&nbsp;&nbsp;&nbsp;企业认证信息</router-link></li>
                            <li><router-link to="article-list.html" title="电子地图"><span class="Hui-iconfont Hui-iconfont-arrow2-right"></span>&nbsp;&nbsp;&nbsp;电子地图</router-link></li>
                        </ul>
                    </dd>
                </dl>
                <dl id="product-management">
                    <dt @click="clickHandler(1)"><i class="Hui-iconfont Hui-iconfont-goods"></i>&nbsp;&nbsp;&nbsp;产品管理<i class="Hui-iconfont menu_dropdown-arrow">{{nowIndex == 1?'&#xe6d6;':'&#xe6d5;'}}</i></dt>
                    <dd :style="nowIndex == 1?'height:0.7rem':'height:0'">
                        <ul>
                            <li><router-link to="picture-list.html" title="工作环节列表"><span class="Hui-iconfont Hui-iconfont-arrow2-right"></span>&nbsp;&nbsp;&nbsp;工作环节列表</router-link></li>
                            <li><router-link to="picture-list.html" title="产品类别列表"><span class="Hui-iconfont Hui-iconfont-arrow2-right"></span>&nbsp;&nbsp;&nbsp;产品类别列表</router-link></li>
                            <li><router-link to="picture-list.html" title="产品列表"><span class="Hui-iconfont Hui-iconfont-arrow2-right"></span>&nbsp;&nbsp;&nbsp;产品列表</router-link></li>
                        </ul>
                    </dd>
                </dl>
                <dl id="personnel-management">
                    <dt @click="clickHandler(2)"><i class="Hui-iconfont Hui-iconfont-usergroup2"></i>&nbsp;&nbsp;&nbsp;工作场所及人员管理<i class="Hui-iconfont menu_dropdown-arrow">{{nowIndex == 2?'&#xe6d6;':'&#xe6d5;'}}</i></dt>
                    <dd  :style="nowIndex == 2?'height:0.7rem':'height:0'">
                        <ul>
                            <li><router-link to="product-brand.html" title="厂区管理"><span class="Hui-iconfont Hui-iconfont-arrow2-right"></span>&nbsp;&nbsp;&nbsp;厂区管理</router-link></li>
                            <li><router-link to="product-category.html" title="工作组管理"><span class="Hui-iconfont Hui-iconfont-arrow2-right"></span>&nbsp;&nbsp;&nbsp;工作组管理</router-link></li>
                            <li><router-link to="product-list.html" title="工作人员管理"><span class="Hui-iconfont Hui-iconfont-arrow2-right"></span>&nbsp;&nbsp;&nbsp;工作人员管理</router-link></li>
                        </ul>
                    </dd>
                </dl>
                <dl id="input-management">
                    <dt @click="clickHandler(3)"><i class="Hui-iconfont Hui-iconfont-wuliu"></i>&nbsp;&nbsp;&nbsp;投入品管理<i class="Hui-iconfont menu_dropdown-arrow">{{nowIndex == 3?'&#xe6d6;':'&#xe6d5;'}}</i></dt>
                    <dd  :style="nowIndex == 3?'height:1.1rem':'height:0'">
                        <ul>
                            <li><router-link to="/control" title="供应商管理"><span class="Hui-iconfont Hui-iconfont-arrow2-right"></span>&nbsp;&nbsp;&nbsp;供应商管理</router-link></li>
                            <li><router-link to="feedback-list.html" title="投入品信息列表"><span class="Hui-iconfont Hui-iconfont-arrow2-right"></span>&nbsp;&nbsp;&nbsp;投入品信息列表</router-link></li>
                            <li><router-link to="feedback-list.html" title="投入品采购信息"><span class="Hui-iconfont Hui-iconfont-arrow2-right"></span>&nbsp;&nbsp;&nbsp;投入品采购信息</router-link></li>
                            <li><router-link to="feedback-list.html" title="投入品使用信息"><span class="Hui-iconfont Hui-iconfont-arrow2-right"></span>&nbsp;&nbsp;&nbsp;投入品使用信息</router-link></li>
                            <li><router-link to="feedback-list.html" title="投入品库存信息"><span class="Hui-iconfont Hui-iconfont-arrow2-right"></span>&nbsp;&nbsp;&nbsp;投入品库存信息</router-link></li>
                        </ul>
                    </dd>
                </dl>
                <dl id="harvest-management">
                    <dt @click="clickHandler(4)"><i class="Hui-iconfont Hui-iconfont-order"></i>&nbsp;&nbsp;&nbsp;采收管理<i class="Hui-iconfont menu_dropdown-arrow">{{nowIndex == 4?'&#xe6d6;':'&#xe6d5;'}}</i></dt>
                    <dd :style="nowIndex == 4?'height:0.23rem':'height:0'">
                        <ul>
                            <li><router-link to="member-list.html" title="收获信息"><span class="Hui-iconfont Hui-iconfont-arrow2-right"></span>&nbsp;&nbsp;&nbsp;收获信息</router-link></li>
                        </ul>
                    </dd>
                </dl>
                <dl id="processing-management">
                    <dt @click="clickHandler(5)"><i class="Hui-iconfont Hui-iconfont-cut"></i>&nbsp;&nbsp;&nbsp;加工管理<i class="Hui-iconfont menu_dropdown-arrow">{{nowIndex == 5?'&#xe6d6;':'&#xe6d5;'}}</i></dt>
                    <dd  :style="nowIndex == 5?'height:0.5rem':'height:0'">
                        <ul>
                            <li><router-link to="admin-role.html" title="加工批次"><span class="Hui-iconfont Hui-iconfont-arrow2-right"></span>&nbsp;&nbsp;&nbsp;加工批次</router-link></li>
                            <li><router-link to="admin-permission.html" title="包装记录"><span class="Hui-iconfont Hui-iconfont-arrow2-right"></span>&nbsp;&nbsp;&nbsp;包装记录</router-link></li>
                        </ul>
                    </dd>
                </dl>
                <dl id="environmental-monitoring">
                    <dt @click="clickHandler(6)"><i class="Hui-iconfont Hui-iconfont-tianqi-qing"></i>&nbsp;&nbsp;&nbsp;环境监测<i class="Hui-iconfont menu_dropdown-arrow">{{nowIndex == 6?'&#xe6d6;':'&#xe6d5;'}}</i></dt>
                    <dd  :style="nowIndex == 6?'height:0.23rem':'height:0'">
                        <ul>
                            <li><router-link to="charts-1.html" title="环境监测数据"><span class="Hui-iconfont Hui-iconfont-arrow2-right"></span>&nbsp;&nbsp;&nbsp;环境监测数据</router-link></li>
                        </ul>
                    </dd>
                </dl>
                <dl id="information-collection">
                    <dt @click="clickHandler(7)"><i class="Hui-iconfont Hui-iconfont-renwu"></i>&nbsp;&nbsp;&nbsp;实施影像溯源信息采集<i class="Hui-iconfont menu_dropdown-arrow">{{nowIndex == 7?'&#xe6d6;':'&#xe6d5;'}}</i></dt>
                    <dd  :style="nowIndex == 7?'height:0.23rem':'height:0'">
                        <ul>
                            <li><router-link to="system-base.html" title="摄像头列表"><span class="Hui-iconfont Hui-iconfont-arrow2-right"></span>&nbsp;&nbsp;&nbsp;摄像头列表</router-link></li>
                        </ul>
                    </dd>
                </dl>
                <dl id="menu-system">
                    <dt @click="clickHandler(8)"><i class="Hui-iconfont Hui-iconfont-user-zhanzhang"></i>&nbsp;&nbsp;&nbsp;工作环节溯源信息采集<i class="Hui-iconfont menu_dropdown-arrow">{{nowIndex == 8?'&#xe6d6;':'&#xe6d5;'}}</i></dt>
                    <dd  :style="nowIndex == 8?'height:0.23rem':'height:0'">
                        <ul>
                            <li><router-link to="system-base.html" title="信息列表"><span class="Hui-iconfont Hui-iconfont-arrow2-right"></span>&nbsp;&nbsp;&nbsp;信息列表</router-link></li>
                        </ul>
                    </dd>
                </dl>
            </div>
        </aside>
        <div class="dislpayArrow hidden-xs"><a class="pngfix" href="javascript:void(0);" onClick="displaynavbar(this)"></a></div>
        <!--/_menu 作为公共模版分离出去-->

  </div>
</template>

<script>
// $('dl').on('click', function(){
//     this.find('dd').slideToggle();
// });
export default {
    data(){
        return {
            leftList: true,
            nowIndex: null
        }
    },
    computed:{
        username(){
            return this.$route.params.username
        }
    },
    methods:{
        clickHandler(index){
            if(this.nowIndex != index){
                this.nowIndex = index;
            }else{
                this.nowIndex = null;
            }
        }
    }
};
</script>

<style scoped>
.control{
    color: #aaa;
}
/* 导航栏 */ 
.navbar-wrapper,
.container-fluid {
  height: 0.4rem;
  line-height: 0.4rem;
}
.container-fluid{
    padding: 0
}
#control-logo{
    float: left;
}
#control-logo img {
    height: 0.4rem;
    width: 0.8rem;
    margin-right: 0.3rem;
}
.left-list-icon{
    font-size: 0.15rem;
    font-weight: bold;
    color: #aaa;
    cursor: pointer;
    height: 0.4rem;
    width: 0.4rem;
    float: left;
}
.right-list{
    float: right;
}
.right-list li{
    float: left;
    margin-right: 0.1rem;
    font-size: 0.09rem;
}
.right-list li a{
    color: #aaa;
}
/* 左侧导航栏 */ 
.Hui-aside{
    top: 0.4rem;
    width: 1.5rem;
    transition: all 0.2s linear;
    background-color: #fff;
    padding-top: 0;
    overflow-x: hidden;  
}
.Hui-aside dl{
    width: 1.5rem;
    font-size: 0.09rem;
    box-sizing: border-box;
}
.Hui-aside dl dt{
    border: 0;
    color: #999;
    padding: 0.07rem;
    font-size: 0.09rem;
    font-weight: inherit;
    border-left: 4px solid #fff;
    cursor: pointer;
    box-sizing: border-box;
}
.Hui-aside dl dt:hover,.Hui-aside dl dd li:hover{
    border-left: #3bb4f2 4px solid;
    background-color: #f2f6f9;
}
.Hui-aside dl dt .menu_dropdown-arrow{
    font-weight: bolder;
    float: right;
}
.Hui-aside dl dd{
    padding-left: 0.15rem;
    font-size: 0.07rem;
    height: 0;
    /* height: inherit; */
    overflow: hidden;
    transition: height 0.2s linear;
}
.Hui-aside dl dd li{
    padding: 0.07rem 0;
}
.Hui-aside dl dd li a{
    color: #999;
}
</style>
