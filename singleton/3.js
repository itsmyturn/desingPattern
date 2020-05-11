//透明单例
let Window=(function(){
  let window
  let Window=function(name){
    if(window){
      return window
    }else{
      this.name=name
      return (window=this)
    }
  }
  return Window
})()
/**
 * 1,创建一个this=空对象
 * new 关键字 如果返回一个对象，那。。。。。。。。
 */
let w1=new Window()
let w2=new Window()
console.log(w1===w2)//true