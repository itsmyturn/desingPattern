function Person(name){
  this.name=name
}
Person.prototype.getName=function(){
  console.log(this.name)
}
let p1=new Person('张三')
let p2=new Person('李四')
console.log(p1.getName===p2.getName)
//true