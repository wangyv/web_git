//主要推荐
//选项卡
var oHomeAppliances=document.getElementById('home-appliances');
var oIntelligent=document.getElementById('intelligent');
var oCollocation=document.getElementById('collocation');
var oAccessories=document.getElementById('accessories');
var oPeriphery=document.getElementById('periphery');
var aDivHa=oHomeAppliances.getElementsByTagName('div');
var aDivIn=oIntelligent.getElementsByTagName('div');
var aDivCo=oCollocation.getElementsByTagName('div');
var aDivAc=oAccessories.getElementsByTagName('div');
var aDivPe=oPeriphery.getElementsByTagName('div');
//选项卡函数
(function (){
    function tabRecommend(aDiv1) {
        var aLi;
        var aDiv ;
        var aDivSpanLast=[];
        for(var i=0;i<aDiv1.length;i++){
            if(aDiv1[i].className=='menu-right'){
                aLi=aDiv1[i].getElementsByTagName('li');
            }
            else if(aDiv1[i].className=='container') {
                aDiv = aDiv1[i].getElementsByTagName('div');
                for(var i=0;i<aDiv.length;i++){
                    if(aDiv[i].className=='span-last'||aDiv[i].className=='span-last span-last-selected'){
                        aDivSpanLast.push(aDiv[i]);
                    }
                }
                // console.log(aDivSpanLast);
            }
        }
        for(var i=0;i<aLi.length;i++){
            aLi[i].index=i;
            aLi[i].onmouseover=function () {
                for(var i=0;i<aLi.length;i++){
                    aLi[i].className='';
                    aDivSpanLast[i].className='span-last';
                }
                this.className='selected';
                aDivSpanLast[this.index].className='span-last span-last-selected';
            };
        }
    }
//选项卡函数调用
    tabRecommend(aDivHa);
    tabRecommend(aDivIn);
    tabRecommend(aDivCo);
    tabRecommend(aDivAc);
    tabRecommend(aDivPe);
})();

//淡入淡出轮播图
(function () {
    var oLunbotuContainer=document.getElementById('lunbotu-container');
    var oLunbotu=document.getElementById('lunbotu');
    var aImg=oLunbotu.getElementsByTagName('img');
    var oLunbotuTab=document.getElementById('lunbotu-tab');
    var aLi=oLunbotuTab.getElementsByTagName('li');
    var oLunbotuLeft=document.getElementById('lbt-left');
    var oLunbotuRight=document.getElementById('lbt-right');
    var iNowIndex=0;
    for(var i=0;i<aLi.length;i++){
        aLi[i].index=i;
        aLi[i].onclick=function () {
            iNowIndex=this.index;
            changeImg();
        }
    }
    function changeImg() {
        for(var i=0;i<aLi.length;i++){
            aLi[i].className='';
            aImg[i].className='';
        }
        aLi[iNowIndex].className='selected';
        aImg[iNowIndex].className='selected';
    }
    oLunbotuLeft.onclick=oLunbotuRight.onclick=function () {
        if(this===oLunbotuLeft){
            iNowIndex--;
            if(iNowIndex==-1){
                iNowIndex=aLi.length-1;
            }
        }else{
            iNowIndex++;
            if(iNowIndex==aLi.length){
                iNowIndex=0;
            }
        }
        changeImg();
    };
    oLunbotuLeft.onselectstart=oLunbotuRight.onselectstart=oLunbotuTab.onselectstart=function () {
        return false;
    };

})();
//热门推荐选项卡
(function () {
        var oMoreLeft=document.getElementById('more-left');
        var oMoreRight=document.getElementById('more-right');
        var oXmPlainBox=id('xm-plain-box');
        var oUlWidth=oXmPlainBox.getElementsByTagName('ul')[0].offsetWidth;
        var oUl=oXmPlainBox.getElementsByTagName('ul')[0];
        var lFlag=false,rFlag=true;
        oMoreRight.onclick=oMoreLeft.onclick=function () {
            if(this===oMoreRight){
                if(rFlag){
                    oUl.style.left=-oUlWidth/2+10+'px';
                    oMoreRight.className='';
                    oMoreLeft.className='selected';
                    rFlag=false;
                    lFlag=true;
                }
            }else{
                if(lFlag){
                    oUl.style.left=0;
                    oMoreRight.className='selected';
                    oMoreLeft.className='';
                    rFlag=true;
                    lFlag=false;
                }
            }
        };
})();
