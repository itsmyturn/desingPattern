let xiaohua={
  name:'xiaohua',
  age:30,
  height:160
}
let xiaohuaMama=new Proxy(xiaohua,{
  get(target,key){
    if(key==='age'){
      return target.age-5
    }else if(key==='height'){
      return target.height+5
    }
    return target[key]
  },
  set(target,key,val){
    if(key==='boyfriend'){
      let boyfriend=val
      if(boyfriend.age>40){
        throw new Error('太老')
      }else if(boyfriend.salary<20000){
        throw new Error('太穷')
      }else{
        target[key]=val
        return true
      }
    }
  }
})
console.log(xiaohuaMama.age)
console.log(xiaohuaMama.height)
xiaohuaMama.boyfriend={
  age:30,
  salary:50000
}
console.log(xiaohuaMama.boyfriend.age)