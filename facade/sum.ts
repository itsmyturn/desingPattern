function sum(a:string,b:string):void
function sum(a:number,b:number):void
function sum(a:string|number,b:string|number){
  // return a+b
  //"运算符“+”不能应用于类型“string | number”和“string | number”。
}
sum(100,200)
