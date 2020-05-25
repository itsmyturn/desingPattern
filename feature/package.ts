export{}
/**
 * 封装 可以把类的内部属性隐藏起来，不让外部直接访问
 * 1，可以提供类易用性
 * 2，可以保护类的隐私
*/
 class Animal{
   // 公有属性 可以在本类，子类或其他类中使用
   public name:string
   // 受保护属性 可以在本类和子类中被访问，其他类不让
   protected age:number
   // 私有属性： 被保护在类的内部使用，子类和其他类都无法访问
   private weight:number
   constructor(name:string,age:number,weight:number){

   }
 }

 class Person extends Animal{
   private balance:number
   constructor(name:string,age:number,weight:number,balance:number){
     super(name,age,weight)
     this.balance=balance
   }
   getName(){
     return this.name
   }
   getAge(){
     return this.age
   }
   getWeight(){
     //属性“weight”为私有属性，只能在类“Animal”中访问。
    //  return this.weight
   }
 }

 let p1=new Person('jack',10,100,1000)