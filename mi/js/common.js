//搜索开始
var oSearch=document.getElementById('search');
var oKeywordList=document.getElementById('keyword-list');
var oSearched=oSearch.getElementsByTagName('input')[0];
var oBtn=oSearch.getElementsByTagName('button')[0];
var oHotWords=oSearch.getElementsByTagName('div')[1];
//获取焦点效果
oSearched.onfocus=function(){
    oKeywordList.style.display='block';
    oSearched.className='searched-focus searched';
    oBtn.className='searched-focus button';
    oHotWords.style.display='none';
};
oSearched.onblur=function () {
    oKeywordList.style.display='none';
    oSearched.className='searched';
    oBtn.className='button';
    oHotWords.style.display='block';
};
//搜索结束
