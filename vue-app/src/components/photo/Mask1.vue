<template id="mask">
        <v-touch  class="mask"  @tap="tapHandler" @swipeleft="swipeLeftHandler" @swiperight="swipeRightHandler">
            <transition name="slide" class="change">
                <img :src="styleObj" alt="" class="photo">
            </transition>
        </v-touch>
</template>

<script>
import FastClick from 'fastclick'
export default {
    data(){
        return {
            nowIndex: 0
        }
    },
    computed: {
        styleObj(){
            return this.$store.state.photoList[this.nowIndex].src
        }
    },
    created(){
        this.nowIndex = this.$route.params.index;
        FastClick.attach(document.body);   
    },
    methods:{
        tapHandler(){
            this.$router.push('/photo');
        },
        swipeLeftHandler(){
            this.nowIndex++;
            if(this.nowIndex == this.$store.state.photoList.length){
                this.nowIndex = 0;
            }
        },
        swipeRightHandler(){
            this.nowIndex--;
            if(this.nowIndex == -1){
                this.nowIndex = this.$store.state.photoList.length-1;
            }
        }
    }
}
</script>

<style scoped>
.mask{
    position: absolute;
    left: 0;
    bottom: 0;
    top: 0;
    right: 0;
    z-index: 1;
    margin: 1rem 0;
    background-color: #000;
}
.change{
    width: 100%;
    height: 100%;
    display: block;
}
.photo{
    position: absolute;
    top:50%;
    width: 100%;
    transform: translateY(-50%);
}
.slide-enter{
    opacity: 0;
}
.slide-enter-to,.slide-leave{
    opacity: 1;
}
.slide-leave-to{
    opacity: 0;
}
.slide-leave-active,.slide-enter-active{
    transition: all 0.5s linear;
}
</style>