function Foo(){
  this.a=10
}
Foo.prototype.b=20
let f1=new Foo()
console.log(f1.a)
console.log(f1.b)
console.log(f1.hasOwnProperty('a'))//true
console.log(f1.hasOwnProperty('b'))//false