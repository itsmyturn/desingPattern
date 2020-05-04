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

//打开车库门
class GarageDoorOpenCommand{
  constructor(receiver){
    this.receiver=receiver
  }
  excute(){
    console.log('我执行打开车库门的操作')
    this.receiver.up()
  }
  undo(){
    this.receiver.down()
  }
}
//关闭车库门
class GarageDoorCloseCommand{
  constructor(receiver){
    this.receiver=receiver
  }
  excute(){
    console.log('我执行关闭车库门的操作')
    this.receiver.down()
  }
  undo(){
    this.receiver.up()
  }
}
//receiver

class GarageDoor{
  constructor(){

  }
  up(){
    console.log('车库门打开')
  }
  down(){
    console.log('车库门被关闭')
  }
  stop(){
    console.log('车库门停止某个操作')
  }
  lightOn(){
    console.log('车库电灯打开')
  }
  lightOff(){
    console.log('车库电灯关闭')
  }
}
module.exports={
  GarageDoor,
  GarageDoorOpenCommand,
  GarageDoorCloseCommand
}
