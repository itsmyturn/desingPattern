//把类的实例的创建逻辑和单例逻辑分开
function Window(name){
  this.name=name
}
Window.prototype.getName=function(){
  console.log(this.name)
}
let CreateSingle=(function(){
  let instance
  return function(name){
    if(!instance){
      instance=new Window(name)
    }
    return instance
  }
})()
let w1=new CreateSingle('hello world1')
let w2=new CreateSingle('hello world2')
console.log(w1===w2)//true
w1.getName()//hello world1
w2.getName()//hello world1 //只能new一次