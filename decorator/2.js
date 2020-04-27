// 装饰器有时候会优于继承
// 美式咖啡，加糖，加奶
class Coffee{
  make(water){
    return `${water}+咖啡`
  }
  cost(){
    return 10
  }
}
class MilkCoffee{
  constructor(parent){
    this.parent=parent
  }
  make(water){
    return `${this.parent.make(water)}+奶`
  }
  cost(){
    return this.parent.cost()+2
  }
}
class SugarCoffee{
  constructor(parent){
    this.parent=parent
  }
  make(water){
    return `${this.parent.make(water)}+糖`
  }
  cost(){
    return this.parent.cost()+3
  }
}
let coffee=new Coffee()
let milkCoffee=new MilkCoffee(coffee)
let sugarCoffee=new SugarCoffee(milkCoffee)
// let ret=sugarCoffee.make('水')
let cost=sugarCoffee.cost('水')
console.log(cost)