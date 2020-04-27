class Duck{
  constructor(name){
    this.name=name
  }
  eat(food){
    console.log(`吃${food}`)
  }
}
class TangDuck{
  constructor(name){
    this.duck=new Duck(name)
  }
  eat(food){
    this.duck.eat(food)
    console.log('谢谢')
  }
}
let t=new TangDuck()
t.eat('苹果')
