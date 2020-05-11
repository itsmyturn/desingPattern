function Window(name){
  this.name=name
}
Window.prototype.getName=function(){
  return this.name
}
//这是类上面的方法，只能通过类来访问，而不能通过实例来访问
Window.getInstance=(function(){
  let instance
  return function(name){
    if(!instance){
      instance=new Window(name)
    }
    return instance
  }
})()
let w1=Window.getInstance()
let w2=Window.getInstance()
console.log(w1===w2)//true
let w3=new Window()
let w4=new Window()
// console.log(w3.getInstance()===w4.getInstance())//w3.getInstance is not a function
/**
 * 1,客户端 就是使用这个类的使用者必须知道这是一个单例的类，必须主动调用getInstance方法
 * 2，并不能真正阻止客户端直接new Window
 * 违反了单一职责原则：函数内部做了判断，同时创建了window实例
*/