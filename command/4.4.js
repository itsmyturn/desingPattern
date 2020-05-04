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
class NoCommand extends Command{
  constructor(){
    super()
  }
  excute(){
    console.log('不执行任何操作')
  }
}
class NoReceiver{
  
}
module.exports={
  NoCommand,
  NoReceiver
}