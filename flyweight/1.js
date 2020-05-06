function Person(name,age){
  this.name=name
  this.age=age
}
Person.prototype.getAge=function(){
  console.log(this.age)
}
Person.prototype.getName=function(){
  console.log(this.name)
}
//es6中class 里面的方法是挂在哪里的？
