$(function () {
    var $li = $('#content li');
    var $scores = $('#scores');
    var $rate = $('#rate');
    var $timer = $('#timer');
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
            this.arise();//初始出现的地鼠

            // var $hit=$('<img src="img/hiter.png" class="hit"/>');
            // console.log($hit);
            // $('body').append($hit);
            // $('#content').hover(function (e) {
            //     e=e||window.event;
            //     $('.hit').css({
            //         left:e.clientX-($('.hit').width()/2),
            //         top:e.clientY-($('.hit').height()/2)
            //     });
            // },function () {
            //
            // });


            var that=this;
            $li.on('click',function () {
                var i=$(this).prop('row');
                var j=$(this).prop('cow');
                if(that.arr[i][j].value==1){
                    clearTimeout($(this).children('img').timer);
                    $(this).children('img').remove();
                    that.arr[i][j].value=0;
                    that.hit++;
                    $scores.val(parseInt($scores.val())+5);
                    $rate.val(Math.floor((that.hit*100)/that.account)+'%');
                }
            }).on('selectstart',function () {
                return false;
            });
            this.time = setInterval(function () {
                that.arise();
            },1000);
            this.timer1=setInterval(function () {
                $timer.val($timer.val()-1);
                if(parseInt($timer.val())<=0){
                    that.end();
                }
            },1000);

        },
        //画一个新格子
        drawCell:function (i,j) {
            var $img = $('<img src="img/hamster.png" class="hamster"/>');
            $img.timer=null;
            $img.appendTo('.p'+i+j);
        },
        //出现地鼠
        appear:function () {
            this.account++;
            var i=getRandom(5);
            var j=getRandom(5);
            if(this.arr[i][j].value!=1){
                this.drawCell(i,j);
                this.arr[i][j].value=1;
            }
            var that=this;
            $('.p'+i+j+' img').timer=setTimeout(function () {
                $('.p'+i+j+' img').remove();
                that.arr[i][j].value=0;
            },2000);
        },
        //随机出现地鼠
        arise:function () {
            var num=getRandom1();
            for(var i=0;i<num;i++){
                this.appear();
            }
        },





        //游戏结束
        end:function () {
            clearTimeout($('img').timer);
            $('img').remove();
            clearInterval(this.time);
            clearInterval(this.timer1);
            alert('游戏结束！\n 总分：'+$scores.val()+'\n 命中率：'+$rate.val());
            $rate.val(0);
            $scores.val(0);
            $timer.val(60);

        }
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
    $('#title .start').on('click',function () {
        if($timer.val()==60){
            game.start();
        }
    });
    $('#title .end').on('click',function () {
        if($timer.val()!=60){
            game.end();
        }
    });

});