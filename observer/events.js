let EventEmitter=require('events')
let util=require('util')
// console.log(EventEmitter)
// -------------------演示开始------------------
// let eve=new EventEmitter()
// eve.on('click',function(name){
//   console.log(1,name)
// })
// eve.emit('click','hello world')
//---------------------演示结束-----------------------
function Bell(){

}
util.inherits(Bell,EventEmitter)
// Bell.prototype=Object.create(EventEmitter.prototype)
let bell=new Bell()
// bell.__proto__=EventEmitter.prototype
bell.on('响',function(){
  console.log('同学们进入教室上课')
})
bell.emit('响')