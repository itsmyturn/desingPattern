function Foo(){

}
console.log(Object.prototype)//{}
let a={name:'jack'}
let b=[1,2,3]
console.log(Object.prototype.toString.call(b))//[object Array]
console.log(b.toString())//1,2,3
console.log(Object.prototype.toString===Array.prototype.toString)//false