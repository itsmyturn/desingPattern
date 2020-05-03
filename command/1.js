class Cooker{
  cook(){
    console.log('做饭')
  }
}
class Cleaner{
  clean(){
    console.log('保洁')
  }
}
class CookCommand{
  constructor(receiver){
    this.receiver=receiver
  }
  excute(){
    this.receiver.cook()
  }
}
class CleanCommand{
  constructor(receiver){
    this.receiver=receiver
  }
  excute(){
    this.receiver.clean()
  }
}
class Customer{
  constructor(command){
    this.command=command
  }
  setCommand(command){
    this.command=command
  }
  clean(){
    this.command.excute()
  }
  cook(){
    this.command.excute()
  }
}
let cooker=new Cooker()
let cleaner=new Cleaner()
let cookCommand=new CookCommand(cooker)
let cleanCommand=new CleanCommand(cleaner)
let customer=new Customer(cookCommand)
customer.cook()
customer.setCommand(cleanCommand)
customer.clean()