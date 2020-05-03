// let EventEmitter=require('events')
class EventEmitter{
  constructor(){
    this.events={}
  }
  on(type,listener){
    let listeners=this.events[type]
    if(listeners){
      listeners.push(listener)
    }else{
      this.events[type]=[listener]
    }
  }
  emit(type){
    let listeners=this.events[type]
    let args=Array.prototype.slice.call(arguments,1)
    if(listeners){
      listeners.forEach(listener=>listener(...args))
    }
  }
}
let eve=new EventEmitter()
eve.on('click',function(name){
  console.log(1,name)
})
eve.emit('click','hello world')
