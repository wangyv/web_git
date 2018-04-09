requirejs.config({
    paths:{
        jquery:'jquery.1'
    }
})

require(['jquery','carousel'],function ($,Carousel) {
    var c1 = new Carousel();
    var settings ={
        imgArr:['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg'],
        navStyle:'circle',
        speed:800,
        selector:'#div1'
    };
    c1.init(settings);

    var c2 = new Carousel();
    var settings1 ={
        imgArr:['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg'],
        speed:5000,
        selector:'#div2'
    };
    c2.init(settings1);
});