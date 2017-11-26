function Parent(name,age) {
    this.name=name;
    this.age=age;
}
Parent.prototype.showName=function () {
    console.log(this.name);
};
function Children(name,age) {
    Parent.call(this,name,age);
}
Children.prototype=new Parent();
Children.prototype.constructor=Children;