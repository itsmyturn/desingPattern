Array[Symbol.iterator]=function(){
  let index=0;
  let _this=this
  console.log('aaa')
  return{
    next(){
      return index<_this.length?{value:_this[index++],done:false}:{value:undefined,done:true}
    }
  }
}
let arr=['a','b','c']
let it2=arr[Symbol.iterator]()
console.log(it2.next())
console.log(it2.next())
console.log(it2.next())
console.log(it2.next())
let str='def'
let it3=str[Symbol.iterator]()
console.log(it3.next())
console.log(it3.next())
console.log(it3.next())
console.log(it3.next())