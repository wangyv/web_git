import css from './css/index.css';
import sass from './css/index.scss';
let json = require('../author.json');
let oDiv = document.querySelector('div');
oDiv.innerHTML = 'hello world !';

class People{
    constructor(name,age){
        this.name = name,
        this.age = age
    }
    showName(){
        console.log(this.name);
    }
}

let p1 = new People('zs',18);
$('#div5').html('this is jquery!');
$('#div6').html(`author:姓名:${json.name};年龄:${json.age}`);
