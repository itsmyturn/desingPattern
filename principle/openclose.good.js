class Product{
  constructor(name,price){
    this.name=name
    this.price=price
  }
  cost(customer){
    return this.price*customer.discount
  }
}
class Customer{
  constructor(rank,discount=1){
    this.rank=rank
    this.discount=discount
  }
}
let product=new Product('笔记本电脑',1000)
let member=new Customer('member',.8)
let vip=new Customer('vip',.6)
let guest=new Customer('guest')
let superVip=new Customer('superVip',.4)
console.log(product.cost(member))
console.log(product.cost(vip))
console.log(product.cost(guest))
console.log(product.cost(superVip))


