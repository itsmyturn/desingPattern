class Agent{
  constructor(){
    this._events={}
  }
  subscribe(type,listener){
    let listeners=this._events[type]
    if(listeners){
      listeners.push(listener)
    }else{
      this._events[type]=[listener]
    }
  }
  publish(type){
    let listeners=this._events[type]
    console.log(arguments)
    let args=Array.prototype.slice.call(arguments,1)
    console.log(args)
    if(listeners){
      listeners.forEach(listener=>listener(...args))
    }
  }
}
//房东
class LandLord{
  constructor(name){
    this.name=name
  }
  lend(agent,area,money){
    agent.publish('house',area,money)
  }
}
//租客
class Tenant{
  constructor(name){
    this.name=name
  }
  rent(agent){
    agent.subscribe('house',(area,money)=>{
      console.log(`我看到中介的新房源了${area}平方，房子${money}元`)
    })
  }
}
let agent=new Agent()
let t1=new Tenant('张三')
let t2=new Tenant('李四')
t1.rent(agent)
t2.rent(agent)
let landLord=new LandLord()
landLord.lend(agent,60,4000)