//创建命令对象
class  Command{
  constructor(receiver){
    this.receiver=receiver
  }
  excute(){
    // this.receiver.excute()
  }
  undo(){
    console.log('撤销操作')
  }
}
class StereoOnWidthCDCommand extends Command{
  constructor(receiver){
    super(receiver)
  }
  excute(){
    this.receiver.on()
    this.receiver.setCD()
    this.receiver.setVolume(11)
  }
  undo(){
    this.receiver.off()
  }
}
class StereoOffWidthCDCommand extends Command{
  constructor(receiver){
    super(receiver)
  }
  excute(){
    this.receiver.off()
  }
  undo(){
    this.receiver.on()
    this.receiver.setCD()
    this.receiver.setVolume(11)
  }
}
class Stereo{
  constructor(){
    
  }
  on(){
    console.log('打开CD')
  }
  off(){
    console.log('关闭CD')
  }
  setCD(){
    console.log('播放CD')
  }
  setVolume(num){
    console.log('调节播放声音到'+num)
  }
}
module.exports={
  Stereo,
  StereoOnWidthCDCommand,
  StereoOffWidthCDCommand
}