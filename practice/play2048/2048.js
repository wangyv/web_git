$(function () {
   //初始生成两个数字2
    function G2048() {
        this.addEvent();
    }
    G2048.prototype={
        constructor:G2048,
        start:function () {
            this.score=0;
            this.arr=[];
            this.moveAble=false;
            $('#score').html('分数：0');
            $('.number_cell').remove();
            this.createArr();
        },
        //建立初始的格子
        createArr:function () {
            var i,j;
            for(i=0;i<4;i++){
                this.arr[i]=[];
                for(j=0;j<4;j++){
                    this.arr[i][j]={};
                    this.arr[i][j].value=0;
                }
            }
            var i1,i2,j1,j2;
            do{
                i1=getRandom(3);
                i2=getRandom(3);
                j1=getRandom(3);
                j2=getRandom(3);
            }while(i1==i2&&j1==j2);

            this.arrValueUpDate(2,i1,j1);
            this.arrValueUpDate(2,i2,j2);
            this.drawCell(i1,j1);
            this.drawCell(i2,j2);
        },
        //画一个新格子
        drawCell:function (i,j) {
            var item = '<div class="number_cell p'+i+j+'" ><div class="number_cell_con n2"><span>'
                +this.arr[i][j].value+'</span></div> </div>';
            $('.g2048').append(item);
        },
        //添加事件
        addEvent:function () {
            var that=this;
            document.onkeydown=function (event) {
                var e=event||window.event;
                var direction=that.direction;
                var keyCode=e.keyCode;
                switch (keyCode){
                    case 39://右
                        that.moveAble=false;
                        that.moveRight();
                        setTimeout(function () {
                            that.checkLose();
                        },400);
                        break;
                    case 40://下
                        that.moveAble=false;
                        that.moveDown();
                        setTimeout(function () {
                            that.checkLose();
                        },400);
                        break;
                    case 37://左
                        that.moveAble=false;
                        that.moveLeft();
                        setTimeout(function () {
                            that.checkLose();
                        },400);
                        break;
                    case 38://上
                        that.moveAble=false;
                        that.moveUp();
                        setTimeout(function () {
                            that.checkLose();
                        },400);
                        break;

                }
            };
        },
        //更新一个数组的值
        arrValueUpDate:function (num,i,j) {
            this.arr[i][j].oldValue=this.arr[i][j].value;
            this.arr[i][j].value=num;
        },
        //在空白的地方产生一个新格子
        newCell:function () {
            var i,j,index,len;
            var ableArr=[];
            if(this.moveAble != true){
                console.log('不能增加新格子，请尝试其他方向移动！');
                return;
            }
            for(i=0;i<4;i++){
                for(j=0;j<4;j++){
                    if(this.arr[i][j].value==0){
                        ableArr.push([i,j]);
                    }
                }
            }
            len=ableArr.length;
            if(len>0){
                index=getRandom(len);
                i=ableArr[index][0];
                j=ableArr[index][1];
                this.arrValueUpDate(2*getRandom1(),i,j);
                this.drawCell(i,j);
            }else{
                console.log('没有空闲的格子了');
                return;
            }
        },
        //向下移动
        moveDown:function () {
            var i,j,n,k;
            for (i=0;i<4;i++){
                n=3;
                for(j=3;j>=0;j--){
                    if(this.arr[i][j].value==0){
                        continue;
                    }
                    k=j+1;
                    move:
                        while(k<=n){
                            if(this.arr[i][k].value==0){
                                if(k==n||(this.arr[i][k+1].value!=0&&this.arr[i][k+1].value!=this.arr[i][j].value)){
                                    this.moveCell(i,j,i,k);
                                }
                                k++;
                            }else{
                                if(this.arr[i][k].value == this.arr[i][j].value){
                                    this.mergeCell(i,j,i,k);
                                    n--;
                                }
                                break move;
                            }
                        }
                }
            }
            this.newCell();
        },
        //向上移动
        moveUp:function () {
            var i,j,n,k;
            for (i=0;i<4;i++){
                n=0;
                for(j=0;j<=3;j++){
                    if(this.arr[i][j].value==0){
                        continue;
                    }
                    k=j-1;
                    move:
                        while(k>=n){
                            if(this.arr[i][k].value==0){
                                if(k==n||(this.arr[i][k-1].value!=0&&this.arr[i][k-1].value!=this.arr[i][j].value)){
                                    this.moveCell(i,j,i,k);
                                }
                                k--;
                            }else{
                                if(this.arr[i][k].value == this.arr[i][j].value){
                                    this.mergeCell(i,j,i,k);
                                    n++;
                                }
                                break move;
                            }
                        }
                }
            }
            this.newCell();
        },
        //向左移动
        moveLeft:function () {
            var i,j,n,k;
            for (j=0;j<4;j++){
                n=0;
                for(i=0;i<=3;i++){
                    if(this.arr[i][j].value==0){
                        continue;
                    }
                    k=i-1;
                    move:
                        while(k>=n){
                            if(this.arr[k][j].value==0){
                                if(k==n||(this.arr[k-1][j].value!=0&&this.arr[k-1][j].value!=this.arr[i][j].value)){
                                    this.moveCell(i,j,k,j);
                                }
                                k--;
                            }else{
                                if(this.arr[k][j].value == this.arr[i][j].value){
                                    this.mergeCell(i,j,k,j);
                                    n++;
                                }
                                break move;
                            }
                        }
                }
            }
            this.newCell();
        },
        //向右移动
        moveRight:function () {
            var i,j,n,k;
            for (j=0;j<4;j++){
                n=3;
                for(i=3;i>=0;i--){
                    if(this.arr[i][j].value==0){
                        continue;
                    }
                    k=i+1;
                    move:
                        while(k<=n){
                            if(this.arr[k][j].value==0){
                                if(k==n||(this.arr[k+1][j].value!=0&&this.arr[k+1][j].value!=this.arr[i][j].value)){
                                    this.moveCell(i,j,k,j);
                                }
                                k++;
                            }else{
                                if(this.arr[k][j].value == this.arr[i][j].value){
                                    this.mergeCell(i,j,k,j);
                                    n--;
                                }
                                break move;
                            }
                        }
                }
            }
            this.newCell();
        },
        //格子合并
        mergeCell:function (i1,j1,i2,j2) {
            var temp = this.arr[i2][j2].value;
            var temp1 = temp*2;
            this.moveAble=true;
            this.arr[i2][j2].value=temp1;
            this.arr[i1][j1].value=0;
            $(".p"+i2+j2).addClass('toRemove');
            var $theDom = $(".p"+i1+j1).removeClass("p"+i1+j1).addClass("p"+i2+j2).find('.number_cell_con');
            setTimeout(function () {
                $(".toRemove").remove();
                $theDom.addClass('n'+temp1).removeClass('n'+temp).find('span').html(temp1);
            },200);
            this.score+=temp1;
            $("#score").html("分数："+this.score);
            var that=this;
            setTimeout(function () {
                if(temp1==16384){
                    alert('you win!');
                    that.start();
                }
            },300);

        },
        //移动格子
        moveCell:function (i1,j1,i2,j2) {
            this.arr[i2][j2].value=this.arr[i1][j1].value;
            this.arr[i1][j1].value=0;
            this.moveAble=true;
            $('.p'+i1+j1).removeClass('p'+i1+j1).addClass('p'+i2+j2);
        },
        //判输
        checkLose:function (){
            var i,j,temp;
            for (i = 0; i < 4; i++) {
                for (j = 0; j < 4; j++) {
                    temp = this.arr[i][j].value;
                    if(temp == 0){
                        return false;
                    }
                    if(this.arr[i+1] && (this.arr[i+1][j].value==temp)){
                        return false;
                    }
                    if((this.arr[i][j+1]!=undefined) && (this.arr[i][j+1].value==temp)){
                        return false;
                    }
                }
            }
            alert('you lose!');
            this.start();
            return true;
        }
    };
    //生成随机数0-n
    function getRandom(n){
        return Math.floor(Math.random()*n)
    }
    //随机生成1或2
    function getRandom1() {
        return Math.floor(Math.random()*2 + 1);
    }
    g = new G2048();
    g.start();
});