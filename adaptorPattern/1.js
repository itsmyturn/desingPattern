class Power{
  charge(){
    return '220v'
  }
}
class Adaptor{
  constructor(){
    this.power=new Power()
  }
  charge(){
    let v=this.power.charge()
    return `${v}=>12V`
  }
}
class Client{
  constructor(){
    this.adaptor=new Adaptor()
  }
  use(){
    console.log(this.adaptor.charge())
  }
}
let client=new Client()
client.use()