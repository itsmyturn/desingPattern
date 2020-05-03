Array.prototype.forEach2=function(callback){
  for(var i=0;i<this.length;i++){
    callback.call(this,this[i],i,this)
  }
}
let arr=['a','b','c']
arr.forEach2((item,index,arr)=>{
  console.log(item,index,arr)
})