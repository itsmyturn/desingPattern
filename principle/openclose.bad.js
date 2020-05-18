class Product{
  constructor(name,price){
    this.name=name
    this.price=price
  }
  cost(customer){
    switch(customer.rank){
      case 'member':
          return this.price*.8
      case 'vip':
          return this.price*.6
      default:
        return this.price
    }
  }
}
class Customer{
  constructor(rank){
    this.rank=rank
  }
}
let product=new Product('笔记本电脑',1000)
let member=new Customer('member')
let vip=new Customer('vip')
let guest=new Customer('guest')
console.log(product.cost(member))
console.log(product.cost(vip))
console.log(product.cost(guest))


