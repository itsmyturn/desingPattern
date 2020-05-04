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
class CeilingFanCommand extends Command{
  constructor(receiver){
    super(receiver)
    this.prevSpeed=null
  }
  undo(){
    console.log()
    if(this.prevSpeed===this.receiver.HIGH){
      this.receiver.high()
    }else if(this.prevSpeed===this.receiver.MEDIUM){
      this.receiver.medium()
    }else if(this.prevSpeed===this.receiver.LOW){
      this.receiver.low()
    }else if(this.prevSpeed===this.receiver.OFF){
      this.receiver.off()
    }
    console.log('撤销到'+this.receiver.getSpeed())
  }
}
class CeilingFanHighCommand extends CeilingFanCommand{
  constructor(receiver){
    super(receiver)
  }
  excute(){
    console.log('执行高档')
    this.prevSpeed=this.receiver.getSpeed()
    this.receiver.high()
  }

}
class CeilingFanMediumCommand extends CeilingFanCommand{
  constructor(receiver){
    super(receiver)
  }
  excute(){
    console.log('执行中档')
    this.prevSpeed=this.receiver.getSpeed()
    this.receiver.medium()
  }
}
class CeilingFanLowCommand extends CeilingFanCommand{
  constructor(receiver){
    super(receiver)
  }
  excute(){
    console.log('执行低档')
    this.prevSpeed=this.receiver.getSpeed()
    this.receiver.low()
  }
}
class CeilingFanOffCommand extends CeilingFanCommand{
  constructor(receiver){
    super(receiver)
  }
  excute(){
    console.log('关闭操作'+this.receiver.getSpeed())
    this.prevSpeed=this.receiver.getSpeed()
    this.receiver.off()
  }

}

//吊扇的类
class CeilingFan{
  constructor(location){
    this.HIGH=3
    this.MEDIUM=2
    this.LOW=1
    this.OFF=0
    this.location=location
    this.speed=this.OFF
  }
  high(){
    this.speed=this.HIGH
  }
  medium(){
    this.speed=this.MEDIUM
  }
  low(){
    this.speed=this.LOW
  }
  off(){
   this.speed=this.OFF
  }
  getSpeed(){
    return this.speed
  }
  
}
module.exports={CeilingFanHighCommand,CeilingFanMediumCommand,CeilingFanLowCommand,CeilingFanOffCommand,CeilingFan}