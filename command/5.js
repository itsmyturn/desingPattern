let {LightOnCommand,LightOffCommand,Light}=require('./4.1.js')
let {GarageDoor,GarageDoorOpenCommand,GarageDoorCloseCommand}=require('./4.2.js')
let {Stereo,StereoOnWidthCDCommand,StereoOffWidthCDCommand} =require('./4.3.js')
let {NoCommand}=require('./4.4.js')
let {CeilingFanHighCommand,CeilingFanMediumCommand,CeilingFanLowCommand,CeilingFanOffCommand,CeilingFan}=require('./4.5.js')
let {MacroCommand}=require('./4.6.js')
class RemoteControlWithUndo{
  constructor(){
    this.onCommands=[]
    this.offCommands=[]
    this.undoCommand=null
    // this.receiveres=[]
    let noCommand=new NoCommand()
    for(var i=0;i<7;i++){
      this.onCommands[i]=noCommand
      this.offCommands[i]=noCommand
    }
    this.undoCommand=noCommand
  }
  setCommand(index,onCommand,offCommand){
    this.onCommands[index]=onCommand
    this.offCommands[index]=offCommand
  }
  onButtonWasPushed(index){
    this.onCommands[index].excute()
    this.undoCommand=this.onCommands[index]
  }
  offButtonWasPushed(index){
   this.offCommands[index].excute()
   this.undoCommand=this.offCommands[index]
  }
  undoButtonWasPushed(){
    this.undoCommand.undo()
  }

}
class RemoteLoader{
  constructor(){
    let remoteControl=new RemoteControlWithUndo()
    //将所有的装置创建在合适的位置
    let livingRoomLight=new Light('Living Room')//卧室灯
    let kitchenRoomLight=new Light('Kitchen Room')//厨房灯
    let garageDoor=new GarageDoor()//车库门
    let stereo=new Stereo()//CD
    let ceilingFan=new CeilingFan()
    //创建所有的电灯对象
    let livingRoomLightOn=new LightOnCommand(livingRoomLight)
    let livingRoomLightOff=new LightOffCommand(livingRoomLight)
    let kitchenRoomLightOn=new LightOnCommand(kitchenRoomLight)
    let kitchenRoomLightOff=new LightOffCommand(kitchenRoomLight)

    //创建车库门开关的命令
    let garageDoorOpenCommand=new GarageDoorOpenCommand(garageDoor)
    let garageDoorCloseCommand=new GarageDoorCloseCommand(garageDoor)

    //创建音响的开关命令
    let stereoOnWithCDCommand=new StereoOnWidthCDCommand(stereo)
    let stereoOffWidthCDCommand=new StereoOffWidthCDCommand(stereo)
    //吊扇
    let ceilingFanHighCommand=new CeilingFanHighCommand(ceilingFan)
    let ceilingFanMediumCommand=new CeilingFanMediumCommand(ceilingFan)
    let ceilingFanLowCommand=new CeilingFanLowCommand(ceilingFan)
    let ceilingFanOffCommand=new CeilingFanOffCommand(ceilingFan)

    remoteControl.setCommand(0,livingRoomLightOn,livingRoomLightOff)
    remoteControl.setCommand(1,kitchenRoomLightOn,kitchenRoomLightOff)
    remoteControl.setCommand(2,garageDoorOpenCommand,garageDoorCloseCommand)
    remoteControl.setCommand(3,stereoOnWithCDCommand,stereoOffWidthCDCommand)
    remoteControl.setCommand(4,ceilingFanHighCommand,ceilingFanOffCommand)
    remoteControl.setCommand(5,ceilingFanMediumCommand,ceilingFanOffCommand)
    remoteControl.setCommand(6,ceilingFanLowCommand,ceilingFanOffCommand)
    
    //测试开关
    // remoteControl.onButtonWasPushed(0)
    // remoteControl.offButtonWasPushed(0)
    // remoteControl.onButtonWasPushed(1)
    // remoteControl.offButtonWasPushed(1)
    // remoteControl.onButtonWasPushed(2)
    // remoteControl.offButtonWasPushed(2)
    // remoteControl.onButtonWasPushed(3)
    // remoteControl.offButtonWasPushed(3)
    //测试撤销操作
    // remoteControl.onButtonWasPushed(5)
    // remoteControl.onButtonWasPushed(6)
    // remoteControl.offButtonWasPushed(6)
    // remoteControl.undoButtonWasPushed()
    // remoteControl.offButtonWasPushed(0)
    // remoteControl.onButtonWasPushed(0)
    // remoteControl.undoButtonWasPushed()
    //测试宏命令（同时执行多个操作）
    let onCommands=[livingRoomLightOn,kitchenRoomLightOn,stereoOnWithCDCommand]
    let offCommands=[livingRoomLightOff,kitchenRoomLightOff,stereoOffWidthCDCommand]
    let partyOnMacro=new MacroCommand(onCommands)
    let partyOffMacro=new MacroCommand(offCommands)
    remoteControl.setCommand(7,partyOnMacro,partyOffMacro)
    remoteControl.onButtonWasPushed(7)
    remoteControl.offButtonWasPushed(7)
    remoteControl.undoButtonWasPushed()
  }
}
new RemoteLoader()
