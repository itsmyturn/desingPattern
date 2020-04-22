class Plant{
  constructor(name){
    this.name=name
  }
  grow(){
    console.log('我正在成长。。。。。')
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
//直接new的缺点
//1 耦合，2依赖具体的实现
// new Apple()
// new Orange()
class Factory{
  static create(type){
    switch(type){
      case 'apple':
        return new Apple('苹果','甜')
      case 'orange':
        return new Apple('橘子','酸')
      default:
        throw new Error('你要的东西不存在')
    }
  }
}
let apple=Factory.create('apple')
console.log(apple.flavour)
let orange=Factory.create('orange')
console.log(orange.flavour)
