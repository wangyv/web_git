<template>
    <div class="vue-chapter">
        <p @click="handler">{{$route.params.cartoonName}}</p>
        <ul>
            <li v-for="chapter in ChapterList" :key="chapter.id" class="chapter clearfix" @click="getDetail($route.params.cartoonName, chapter.id)">
                <p>{{chapter.name}}</p>
            </li>
        </ul>
        <div class="loading" v-show="isLoading">
            <img src="../../assets/img/loading.gif" alt="">
        </div>
    </div>

</template>

<script>
import axios from 'axios';
export default {
    data () {
        return {
            ChapterList:[],
            isLoading:true,
        }
    },
    methods:{
        getInfo(){
            let Name = this.EncodeUtf8(this.$route.params.cartoonName);
            axios
            .get(`${API_PROXY}https://japi.juhe.cn/comic/chapter?comicName=${this.$route.params.cartoonName}&key=d36a7a9bbbe922fe44c39651f00c4c4b`)
            .then(res=>{
                console.log(res);
                let list = res.data.result.chapterList;
                this.ChapterList = list;
                this.isLoading = false;                
            }).catch(()=>{
                alert('获取数据出错！');
            })
            // console.log(Name);
            // console.log('http://japi.juhe.cn/comic/chapter?comicName=%E7%81%B5%E7%A5%9E%E8%80%83%E8%AF%95&skip=&key=d36a7a9bbbe922fe44c39651f00c4c4b')
        },
        getDetail(name, id){
            this.$router.push(`/chapterContent/${name}/${id}`);
        },
        handler(){
            this.$router.go(-1);
        },
        EncodeUtf8(s1)  
        {  
            var s = escape(s1);  
            var sa = s.split("%");  
            var retV ="";  
            if(sa[0] != "")  
            {  
                retV = sa[0];  
            }  
            for(var i = 1; i < sa.length; i ++)  
            {  
                if(sa[i].substring(0,1) == "u")  
                {  
                    retV += this.Hex2Utf8(this.Str2Hex(sa[i].substring(1,5)));  
                        
                }  
                else retV += "%" + sa[i];  
            }  
                
            return retV;  
        },
        Str2Hex(s)  
        {  
            var c = "";  
            var n;  
            var ss = "0123456789ABCDEF";  
            var digS = "";  
            for(var i = 0; i < s.length; i ++)  
            {  
                c = s.charAt(i);  
                n = ss.indexOf(c);  
                digS += this.Dec2Dig(eval(n));  
                    
            }  
            //return value;  
            return digS;  
        },
        Dec2Dig(n1)  
        {  
            var s = "";  
            var n2 = 0;  
            for(var i = 0; i < 4; i++)  
            {  
                n2 = Math.pow(2,3 - i);  
                if(n1 >= n2)  
                {  
                    s += '1';  
                    n1 = n1 - n2;  
                }  
                else  
                s += '0';  
                    
            }  
            return s;  
                
        },
        Dig2Dec(s)  
        {  
            var retV = 0;  
            if(s.length == 4)  
            {  
                for(var i = 0; i < 4; i ++)  
                {  
                    retV += eval(s.charAt(i)) * Math.pow(2, 3 - i);  
                }  
                return retV;  
            }  
            return -1;  
        },
        Hex2Utf8(s)  
        {  
            var retS = "";  
            var tempS = "";  
            var ss = "";  
            if(s.length == 16)  
            {  
                tempS = "1110" + s.substring(0, 4);  
                tempS += "10" +  s.substring(4, 10);   
                tempS += "10" + s.substring(10,16);   
                var sss = "0123456789ABCDEF";  
                for(var i = 0; i < 3; i ++)  
                {  
                    retS += "%";  
                    ss = tempS.substring(i * 8, (eval(i)+1)*8);  
                    retS += sss.charAt(this.Dig2Dec(ss.substring(0,4)));  
                    retS += sss.charAt(this.Dig2Dec(ss.substring(4,8)));  
                }  
                return retS;  
            }  
            return "";  
        }
    },
    created(){
        this.getInfo();
    },
}
</script>

<style scoped>
.vue-chapter{
    margin: 1rem 0;
}
.clearfix::after{
    content: '';
    display: block;
    clear: both;
}
.vue-chapter>p{
    font-size: 0.4rem;
    font-weight: bold;
    font-family: 'Courier New', Courier, monospace; 
    text-align: center;
}
ul{
    padding: 0 0.1rem;
}
p{
    color: #666;
    font-size: 0.26rem;
    margin-right: 0.8rem;
}
.chapter{
    /* display: flex; */
    padding: 0.25rem 0;
    border-bottom: 1px solid #aaa; 
    position: relative;    
    
}

.loading{
    position: fixed;
    bottom: 1rem;
    text-align: center;
}

</style>