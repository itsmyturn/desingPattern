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
}
//receiver
class Light{
  constructor(){
    // console.log('我是电灯receiver')
  }
  lightOn(){
    console.log('电灯已经被打开了')
  }
  lightOff(){
    console.log('电灯关闭')
  }
}
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
//client,invoker
class SimpleRemoteControl{
  constructor(){
    this.slot=null
  }
  setCommand(Command){//用户改变行为时调用，以便发出不同的命令
    this.slot=Command
    console.log('我是客户端同时也是调用者，我发出了一条命令')
  }
  buttonWasPressed(){
    this.slot.excute()
  }
}
//测试
class RemoteControTest{
  constructor(){
    //遥控器就是调用者，会传入一个命令对象，可以用来发出请求
    let remote=new SimpleRemoteControl()
    //现在创建了一个电灯对象，此对象就是请求的接受者
    let light=new Light()
    let garageDoor=new GarageDoor()
    //创建一个命令，然后将接收者传给它
    let lightOn=new LightOnCommand(light)
    let garageDoorOpen=new GarageDoorOpenCommand(garageDoor)
    //把命令传给调用者（遥控器）打开电灯
    remote.setCommand(lightOn)
    //按下按钮
    remote.buttonWasPressed()
    //把命令传给调用者（遥控器）打开车库门
    remote.setCommand(garageDoorOpen)
    //按下按钮
    remote.buttonWasPressed()
  }
}
new RemoteControTest()