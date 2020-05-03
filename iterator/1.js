function createIterator(array){
  let index=0
  return{
    next(){
      return index<array.length?{value:array[index++],done:false}:{value:undefined,done:true}
    }
  }
}
let arr=[1,2,3]
let it=createIterator(arr)
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())