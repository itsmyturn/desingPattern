export {}
class Animal{
  public name:string
  protected age:number
  private weight:number
  constructor(name:string,age:number,weight:number){
    this.name=name
    this.age=age
    this.weight=weight
  }
  speak(){
    throw new Error('此方法必须由子类实现')
  }
}
class Person extends Animal{
  private money:number
  constructor(name:string,age:number,weight:number,money:number){
    super(name,age,weight)
    this.money=money
  }
  getName(){
    console.log(this.name)
  }
  getAge(){
    console.log(this.age)
  }
  getMoney(){
    console.log(this.money)
  }
  speak(){
    console.log('你好')
  }
}