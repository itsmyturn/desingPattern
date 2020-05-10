class Shape{
  draw(){
    console.log('子类来实现，模拟接口')
  }
}
class Circle extends Shape{
  draw(){
    console.log('绘制圆形')
  }
}
class Reactangle extends Shape{
  draw(){
    console.log('绘制矩形')
  }
}
//新增需求
class Star extends Shape{
  draw(){
    console.log('绘制五角星')
  }
}
class ColorfulShape extends Shape{
  constructor(shape){
    super()
    this.shape=shape
  }
  draw(){
    console.log('颜色的子类来实现')
  }
}
class RedColorfulShape extends ColorfulShape {
  draw(){
    this.shape.draw()
    console.log('把边框绘制成红色')
  }
}
class GreenColorfulShape extends ColorfulShape {
  draw(){
    this.shape.draw()
    console.log('把边框绘制成绿色')
  }
}
//加了新需求
class YellowColorfulShape extends ColorfulShape{
  draw(){
    this.shape.draw()
    console.log('把边框绘制成黄色')
  }
}
//画一个红色的圆形
let redColorfulShape=new RedColorfulShape(new Circle())
redColorfulShape.draw()
let greenColorfulShape=new GreenColorfulShape(new Reactangle())
greenColorfulShape.draw()
let yellowColorfulShape=new YellowColorfulShape(new Star())
yellowColorfulShape.draw()
