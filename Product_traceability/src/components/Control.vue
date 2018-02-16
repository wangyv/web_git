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
                        <li><router-link :to="{name:'editInfo',params:{username:'lfny',show:false}}">欢迎你，{{username}}</router-link></li>
                        <li><router-link to="/"><span class="Hui-iconfont Hui-iconfont-zhongzuo"></span>退出</router-link></li>

                    </ul>
                </div>
            </div>
        </header>

        <!--左侧导航栏 -->
        <aside class="aside" :style="leftList ? 'width:1.5rem' : 'width:0'">
            <div class="left-list">
                <dl v-for="(obj, index) in managementList" :key="index">
                    <dt @click="clickHandler(index)"><i :class="obj.icon"></i>&nbsp;&nbsp;&nbsp;{{obj.title}}<i class="Hui-iconfont dropdown-arrow">{{obj.nowIndex?'&#xe6d6;':'&#xe6d5;'}}</i></dt>
                    <dd :style="obj.nowIndex?'height:'+ obj.children.length*0.25 + 'rem':'height:0'">
                        <ul>
                            <li v-for="(content, childIndex) in obj.children" :key="childIndex"><router-link :to="{name:content.path,params:{username:$route.params.username,show:false}}" :title="content.name" @click="isShow = false"><span class="Hui-iconfont Hui-iconfont-arrow2-right"></span>&nbsp;&nbsp;&nbsp;{{content.name}}</router-link></li>
                        </ul>
                    </dd>
                </dl>
            </div>
        </aside>
        
        <!-- 控制台首页显示内容 -->
        <div :style="leftList ? 'margin-left:1.5rem' : 'margin-left:0'" class="child-content">
            <div class="child-title">
                <div class="content-title">
                    <div><span class="Hui-iconfont Hui-iconfont-home"></span> 春雨溯源 <small>chunyu suyuan</small></div>
                </div>
            </div>
            <router-view></router-view>
              <div  v-if="isShow">
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
              
        </div>
        
        

  </div>
</template>

<script>
export default {
    data(){
        return {
            leftList: true,
            managementList:[
                {
                    icon:'Hui-iconfont Hui-iconfont-gongsi',
                    title: '企业基础管理',
                    nowIndex: false,
                    children: [
                        {
                            name: '企业基础信息',
                            path: 'baseInfo'
                        }, {
                            name: '企业证照信息',
                            path: 'certificateInfo'
                        }, {
                            name: '企业认证信息',
                            path: 'certificationInfo'
                        }, {
                            name: '电子地图',
                            path: 'digitalMap'
                        }]
                },{
                    icon:'Hui-iconfont Hui-iconfont-goods',
                    title: '产品管理',
                    nowIndex: false,
                    children: [
                        {
                            name: '工作环节列表',
                            path: 'workLinkList'
                        },{
                            name: '产品类别列表',
                            path: 'productCategoryList'
                        },{
                            name: '产品列表',
                            path: 'productList'
                        }]
                },{
                    icon:'Hui-iconfont Hui-iconfont-usergroup2',
                    title: '工作场所及人员管理',
                    nowIndex: false,
                    children: [
                        {
                            name: '厂区管理',
                            path: 'factoryManagement',
                        }, {
                            name: '工作组管理',
                            path: 'workingGroupManagement',
                        }, {
                            name: '工作人员管理',
                            path: 'staffManagement',
                        }]
                },{
                    icon:'Hui-iconfont Hui-iconfont-wuliu',
                    title: '投入品管理',
                    nowIndex: false,
                    children: [
                        {
                            name: '供应商管理',
                            path: 'supplierManagement'
                        }, {
                            name: '投入品信息列表',
                            path: 'inputInformationList',
                        }, {
                            name: '投入品采购信息',
                            path: 'inputPurchaseInformation',
                        }, {
                            name: '投入品使用信息',
                            path: 'inputUsageInformation',
                        }, {
                            name: '投入品库存信息',
                            path: 'inputInventoryInformation',
                        }]
                },{
                    icon:'Hui-iconfont Hui-iconfont-order',
                    title: '采收管理',
                    nowIndex: false,
                    children: [
                        {
                            name: '收获信息',
                            path: 'harvestInfo'
                        }]
                },{
                    icon:'Hui-iconfont Hui-iconfont-cut',
                    title: '加工管理',
                    nowIndex: false,
                    children: [
                        {
                            name: '加工批次',
                            path: 'processingBatch'
                        }, {
                            name: '包装记录',
                            path: 'packagingRecords'
                        }]
                },{
                    icon:'Hui-iconfont Hui-iconfont-tianqi-qing',
                    title: '环境监测',
                    nowIndex: false,
                    children: [
                        {
                            name: '环境监测数据',
                            path: 'environmentalMonitoringData'
                        }]
                },{
                    icon:'Hui-iconfont Hui-iconfont-renwu',
                    title: '实施影像溯源信息采集',
                    nowIndex: false,
                    children: [
                        {
                            name: '摄像头列表',
                            path: 'cameraList'
                        }]
                },{
                    icon:'Hui-iconfont Hui-iconfont-user-zhanzhang',
                    title: '工作环节溯源信息采集',
                    nowIndex: false,
                    children: [
                        {
                            name: '信息列表',
                            path: 'informationList'
                        }]
                }
            ],
        }
    },
    computed:{
        username(){
            return this.$route.params.username
        },
        isShow(){
            return this.$route.params.show == false ? this.$route.params.show:true;
        }

    },
    methods:{
        clickHandler(index){
            this.managementList[index].nowIndex = !this.managementList[index].nowIndex;
            // console.log(this.managementList[index].nowIndex);
        }
    }
};
</script>

<style scoped>
.control{
    color: #999;
}
/* 导航栏 */ 
.navbar-wrapper,
.container-fluid {
  height: 0.4rem;
  line-height: 0.4rem;
}
.navbar-fixed-top{
    position: absolute;
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
.aside{
    top: 0.4rem;
    width: 1.5rem;
    transition: all 0.2s linear;
    background-color: #fff;
    padding-top: 0;
    overflow-x: hidden;  
    border-right: 0;
    float: left;
}
.left-list{
    margin-top: 0.1rem;
}
.aside dl{
    width: 1.5rem;
    font-size: 0.08rem;
    box-sizing: border-box;
}
.aside dl dt{
    border: 0;
    color: #999;
    padding: 0.07rem;
    font-size: 0.08rem;
    font-weight: inherit;
    border-left: 4px solid #fff;
    cursor: pointer;
    box-sizing: border-box;
}
.aside dl dt:hover,.aside dl dd li:hover{
    border-left: #3bb4f2 4px solid;
    background-color: #f2f6f9;
}
.aside dl dt .dropdown-arrow{
    font-weight: bolder;
    float: right;
}
.aside dl dd{
    padding-left: 0.15rem;
    font-size: 0.07rem;
    height: 0;
    overflow: hidden;
    transition: height 0.2s linear;
}
.aside dl dd li{
    height: 0.25rem;
}
.aside dl dd li a{
    color: #999;
    width: 100%;
    height: 0.25rem;
    padding: 0.07rem 0;    
    display: block;
}

.selected{
    border-left: #3bb4f2 4px solid;
    background-color: #f2f6f9;
}

/* 子路由 */
.child-content{
    background: url('/static/img/bg.jpg') no-repeat center/cover;
    transition: all 0.2s linear;
    border-left: 1px solid #e5e5e5;
    min-height: 5rem;
    padding-bottom: 0.5rem;
}
.child-title{
    padding: 0.2rem 0;
    font-size: 0.13rem;
}
.content-title{
    padding-left: 0.15rem;
    color: #666;
}
small{
    color: #999;
}

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
