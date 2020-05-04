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
class MacroCommand extends Command{
  constructor(commands){
    super()
    this.commands=commands
  }
  excute(){
    for(let i=0;i<this.commands.length;i++){
      this.commands[i].excute()
    }
  }
  undo(){
    for(let i=0;i<this.commands.length;i++){
      this.commands[i].undo()
    }
  }
}
module.exports={MacroCommand}