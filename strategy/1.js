class Customer{
  constructor(kind){//将状态通过外部传递进来(不同类型的顾客)
    this.kind=kind
  }
  pay(amount){//不同顾客享受的折扣不一样
    return this.kind.pay(amount)
  }
}
//将不同状态产生的行为提取出来，解耦
class Normal{
  pay(amount){
    return amount
  }
}
class Member{
  pay(amount){
    return amount*.9
  }
}
class VIP{
  pay(amount){
    return amount*.8
  }
}
let c1=new Customer(new Normal())//普通顾客
console.log(c1.pay(100))
c1.kind=new Member()//会员
console.log(c1.pay(100))
c1.kind=new VIP()//VIP
console.log(c1.pay(100))