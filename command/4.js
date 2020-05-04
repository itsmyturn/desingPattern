let {LightOnCommand,LightOffCommand,Light}=require('./4.1.js')
let {GarageDoor,GarageDoorOpenCommand,GarageDoorCloseCommand}=require('./4.2.js')
let {Stere,StereOnWidthCDCommand,StereOffWidthCDCommand} =require('./4.3.js')
let {NoCommand,NoReceiver}=require('./4.4.js')
let initOnCommands=[LightOnCommand,GarageDoorOpenCommand,StereOnWidthCDCommand]
let initOffCommands=[LightOffCommand,GarageDoorCloseCommand,StereOffWidthCDCommand]
let initReceiveres=[Light,GarageDoor,Stere]
let noCommand=new NoCommand()
let onCommands=[...initOnCommands]
let offCommands=[...initOffCommands]
let receiveres=[...initReceiveres]
// for(var i=0;i<7;i++){//这段代码做了初始操作，默认都是没有命令，需要在setCommand中赋予命令
//   onCommands[i]=NoCommand
//   offCommands[i]=NoCommand
//   receiveres[i]=NoReceiver
// }
class RemoteControl{
  constructor(){
    // this.onCommands=[]
    // this.offCommands=[]
    // this.receiveres=[]
    // let noCommand=new NoCommand()
    // for(var i=0;i<7;i++){
    //   this.onCommands[i]=noCommand
    //   this.offCommands[i]=noCommand
    //   this.receiveres[i]=NoReceiver
    // }
  }
  setCommand(index,onCommand,offCommand){
    onCommands[index]=onCommand
    offCommands[index]=offCommand
  }
  onButtonWasPushed(index){
    
    onCommands[index].excute()
  }
  offButtonWasPushed(index){
   offCommands[index].excute()
  }
}
//遥控器就是调用者，会传入一个命令对象，可以用来发出请求
let remote=new RemoteControl()
//现在创建了一个电灯对象，此对象就是请求的接受者
// let light=new Light()

//创建一个命令，然后将接收者传给它
let index=3//0灯开关 1车库门开关 2 cd开关 3无命令执行
function show(index){
  if(!onCommands[index]){//可以在这里做个判断，如果当前index不存在命令，就执行空命令
    new NoCommand().excute()
    return false
  }
  let receiver=new receiveres[index]()//开灯需要传参，厨房还是起居室
  //let receiver=new receiveres[index]()
  let on=new onCommands[index](receiver)
  let off=new offCommands[index](receiver)
  //把命令传给调用者（遥控器）
  remote.setCommand(index,on,off)
  //按下按钮
  remote.onButtonWasPushed(index) 
  remote.offButtonWasPushed(index)
}
// show(index)

for(let i=0;i<4;i++){
  show(i)
}
