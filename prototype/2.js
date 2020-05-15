//函数是一种对象
function Person(){}
console.log(Person instanceof Object) //true

//对象是通过函数创建的
let p1=new Person()
let obj1={name:'hello'}
let obj1=new Object()
obj1.name='hello'