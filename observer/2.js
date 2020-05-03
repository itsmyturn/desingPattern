class Promise{
  constructor(fn){
    this.callbacks=[]
    let resolve=()=>{
      this.callbacks.forEach(callback=>callback())
    }
    fn(resolve)
  }
  then(callback){
    this.callbacks.push(callback)
  }
}
let promise=new Promise(function(resolve,reject){
  setTimeout(function(){
    resolve(100)
  },1000)
})