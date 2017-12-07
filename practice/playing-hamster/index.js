$(function () {
    var $li=$('#content li');
    var counter=0;
    for(var i=0;i<5;i++){
        for(var j=0;j<5;j++){
            $li.eq(counter).addClass('p'+i+j).prop('row',i).prop('cow',j);
            counter++;
        }
    }
    function  Hamster() {
    }
    Hamster.prototype={
        // constructor:Hamster,
        //开始
        start:function () {
            this.arr=[];
            this.account=0;
            this.hit=0;
            for(i=0;i<5;i++){
                this.arr[i]=[];
                for(j=0;j<5;j++){
                    this.arr[i][j]={};
                    this.arr[i][j].value=0;
                }
            }
            this.arise();
            var that=this;
            $li.on('click',function () {
                var i=$(this).prop('row');
                var j=$(this).prop('cow');
                if(that.arr[i][j].value==1){
                    clearTimeout(timer);
                    $('.p'+i+j).remove('img');
                    that.arr[i][j].value=0;
                    that.hit++;

                }
            });
            var time=setInterval(function () {
                that.appear();
            },2000);

        },
        //画一个新格子
        drawCell:function (i,j) {
            var $img = $('<img src="img/hamster.png"/>');
            $img.appendTo('.p'+i+j);
        },
        //出现地鼠
        appear:function () {
            var i=getRandom(5);
            var j=getRandom(5);
            if(this.arr[i][j].value!=1){
                this.drawCell(i,j);
                this.arr[i][j].value=1;
            }
            var that=this;
            var timer=setTimeout(function () {
                $('.p'+i+j).remove('img');
                that.arr[i][j].value=0;
            },3000);
        },
        //随机出现地鼠
        arise:function () {
            var num=getRandom1();
            for(var i=0;i<num;i++){
                this.appear();
                this.account++;
            }
        }
        // //打到地鼠
        // beaten:function () {
        //
        // }
    };


    //生成随机数0-n
    function getRandom(n){
        return Math.floor(Math.random()*n)
    }
    //随机生成1、2、3
    function getRandom1() {
        return Math.floor(Math.random()*3 + 1);
    }

    var game=new Hamster;
    game.start();
});