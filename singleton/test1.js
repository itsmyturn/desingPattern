// import CreateSingle from './test.js'
let CreateSingle=require('./test.js')

let w1=new CreateSingle('hello world1')
// let w2=new CreateSingle()
// console.log(w1===w2)//true
// w1.getName()//hello world1
// w2.getName()//hello world1 //只能new一次
module.exports=w1
