function Window(name){
  this.name=name
}
Window.prototype.getName=function(){
  console.log(this.name)
}
function Dialog(title,content){
  this.title=title
  this.content=content
}
let CreateSingle=function(Constructor){
  let instance
  return function(){
    if(!instance){
      Constructor.apply(this,arguments)
      Object.setPrototypeOf(this,Constructor.prototype)
      instance=this
    }
    return instance
  }
}

let createWindow=CreateSingle(Window)
let w1=new createWindow('hello world')
let w2=new createWindow('hello world2')
console.log(w1===w2)
w1.getName()
// w2.getName()
let createDialog=CreateSingle(Dialog)
let d1=new createDialog('hello1')
let d2=new createDialog('hello2')
console.log(d1===d2)