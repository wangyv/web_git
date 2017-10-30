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
function tabRecommend(aDiv1) {
    var aLi;
    var aDiv ;
    var aDivSpanLast=new Array();
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


