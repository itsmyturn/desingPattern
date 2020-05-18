class Drink{
  //抽象类abstract
  getPrice(){}
}
class CocaCola extends Drink{
  getPrice(){
    return '我是一瓶可口可乐' //子类违反了父类的功能和规定
  }
}
class Sprite extends Drink{
  getPrice(){
    return 3
  }
}
class Fanta extends Drink{
  getPrice(){
    return 5
  }
}

class Customer{
  drink(AbstrackDrink){
    console.log(`花费${AbstrackDrink.getPrice()}`)
  }
}
let c1=new Customer()
c1.drink(new CocaCola())