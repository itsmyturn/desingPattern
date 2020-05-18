//尽量使用组合或者聚合，而不是使用继承
class Cooker{
  cook(){

  }
}
class Person{
  private cooker:Cooker
  cook(){
    this.cooker.cook()
  }
}