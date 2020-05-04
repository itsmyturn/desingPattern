let m=function(n){
  if(n<=1){
    return 1
  }else{
    return n*m(n-1)
  }
}
function sum(n){
  let res=0
  for(let i=0;i<=n;i++){
    res+=m(i)
  }
  return res
}
console.time('cost')
console.log(sum(50))
console.timeEnd('cost')
//输出结果cost: 3.272ms
