//创建命令对象
class  Command{
  constructor(receiver){
    this.receiver=receiver
  }
  excute(){
    this.receiver.excute()
  }
  undo(){
    console.log('撤销操作')
  }
}
// 具体命令打开电灯
class LightOnCommand extends Command{
  constructor(receiver){
    super(receiver)
  }
  excute(){
    console.log('我执行了开电灯command')
    this.receiver.lightOn() 
  }
  undo(){
    this.receiver.lightOff()
  }
}
// 具体命令打开电灯
class LightOffCommand extends Command{
  constructor(receiver){
    super(receiver)
  }
  excute(){
    console.log('我执行了关闭电灯command')
    this.receiver.lightOff() 
  }
  undo(){
    this.receiver.lightOn()
  }
}
//receiver
class Light{
  constructor(type){
    this.type=type || 'living room'
    // console.log('我是电灯receiver')
  }
  lightOn(){
    console.log(this.type+'电灯已经被打开了')
  }
  lightOff(){
    console.log(this.type+'电灯关闭')
  }
}
module.exports={
  LightOnCommand,
  LightOffCommand,
  Light
}