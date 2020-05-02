class Customer{
  constructor(){
    this.kinds={
      normal:function(amount){
        return amount
      },
      member:function(amount){
        return amount*0.9
      },
      VIP:function(amount){
        return amount*0.8
      }
    }
  }
  pay(kind,amount){
    return this.kinds[kind](amount)
  }
}
let c1=new Customer()
console.log(c1.pay('normal',100))
console.log(c1.pay('member',100))
console.log(c1.pay('VIP',100))