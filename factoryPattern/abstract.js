class AmericanoCoffee{
}
class LatteCoffee{
}
class CappucinoCoffee{
}
class StarBucksAmericanoCoffee extends AmericanoCoffee{}
class LuckinAmericanoCoffee extends AmericanoCoffee{
  constructor(){
    super()
    console.log('瑞幸美式咖啡')
  }
}
class StarBucksLatteCoffee extends LatteCoffee{}
class LuckinLatteCoffee extends LatteCoffee{}
class StarBucksCappucinoCoffee extends CappucinoCoffee{}
class LuckinCappucinoCoffee extends CappucinoCoffee{}

//和接口类似
class CafeFactory{
  createAmericanoCoffee(){}
  createLatteCoffee(){}
  createCappucinoCoffe(){}
}

class StarBucksCafeFactory extends CafeFactory{
  createAmericanoCoffee(){
    return new StarBucksAmericanoCoffee()
  }
  createLatteCoffee(){
    return new StarBucksLatteCoffee()
  }
  createCappucinoCoffe(){
    return new StarBucksCappucinoCoffee()
  }
}
class LuckinCafeFactory extends CafeFactory{
  createAmericanoCoffee(){
    return new LuckinAmericanoCoffee()
  }
  createLatteCoffee(){
    return new LuckinLatteCoffee()
  }
  createCappucinoCoffe(){
    return new LuckinCappucinoCoffee()
  }
}
//创建瑞幸的美式咖啡
let luckinCafeFactory=new LuckinCafeFactory()
luckinCafeFactory.createAmericanoCoffee()

