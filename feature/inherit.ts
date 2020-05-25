class Animal{
  name:string
  constructor(name:string){
    this.name=name
  }
  eat(){
    console.log(`${this.name} eat`)
  }
}
let animal=new Animal('动物')
animal.eat()
class Dog extends Animal{
  age:number
  constructor(name:string,age:number){
    super(name)
    this.age=age
  }
  speak(){
    console.log(`${this.name} is barking`)
  }
}
let dog=new Dog('狗',5)
dog.eat()
dog.speak()