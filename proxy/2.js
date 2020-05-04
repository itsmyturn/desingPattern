let sum=(function(){
  let cache={}
  function multi(n){
    if(n<=1){
      return 1
    }else{
      return n*(cache[n-1]||multi(n-1))
    }
  }
  return function(n){
    let res=0
    for(let i=0;i<=n;i++){
      let ret=multi(i)
      cache[i]=ret
      res+=ret
    }
    return res
  }
})()
console.time('cost')
console.log(sum(50))
console.timeEnd('cost')//cost: 2.522ms
