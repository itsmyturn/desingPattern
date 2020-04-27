Function.prototype.before=function(beforeFn){
  let _this=this
  return function(){
    beforeFn.apply(this,arguments)
    _this.apply(this,arguments)
  }
}
Function.prototype.after=function(afterFn){
  let _this=this
  return function(){
    _this.apply(this,arguments)
    afterFn.apply(this,arguments)
  }
}
function buy(money,goods){
  console.log(`花${money}元买${goods}`)
}
buy=buy.before(function(){
  console.log('向媳妇申请1块钱')
})
buy=buy.after(function(){
  console.log('向媳妇还2毛钱')
})
buy(0.8,'盐')