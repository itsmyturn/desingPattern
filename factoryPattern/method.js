class Plant{
  constructor(name){
    this.name=name
  }
}
class Apple extends Plant{
  constructor(name,flavour){
    super(name)
    this.flavour=flavour
  }
}
class Orange extends Plant{
  constructor(name,flavour){
    super(name)
    this.flavour=flavour
  }
}
/**
 * 工厂一般是接口，规定子类必须实现的方法
 * 依赖抽象而不依赖实现
 * 只有方法定义，没有具体实现，如果一个类要实现该接口，就必须实现该接口中的所有方法
 * */ 
class Factory{
  create(){
    
  }
}
class AppleFactory extends Factory{
  static create(){
    return new Apple('苹果','甜')
  }
}
class OrangeFactory extends Factory{
  static create(){
    return new Orange('橘子','酸')
  }
}

// let apple=AppleFactory.create()
// console.log(apple)
// let orange=OrangeFactory.create()
// console.log(orange)
//新建西瓜类
class WaterMelon extends Plant{
  constructor(name,flavour){
    super(name)
    this.flavour=flavour
  }
}
class WaterMelonFactory extends Factory{
  static create(){
    return new WaterMelon('西瓜','甜甜的')
  }
}
// let watermelon=WaterMelonFactory.create()
// console.log(watermelon)
// 一般会跟配置对象配合,将不同的类分别放到不同的文件里面实现低偶合，有新需求就创建新工厂，所有工厂继承工厂类去
// 泛化工厂基本信息，只需添加新工厂特有信息，这样避免修改其他工厂，达到扩展目的
let settings={
  'apple':AppleFactory,
  'orange':OrangeFactory,
  'watermelon':WaterMelonFactory
}
let apple=settings['apple'].create()
console.log(apple)
