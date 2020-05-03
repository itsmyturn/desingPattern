class Star{
  constructor(name){
    this.name=name
    this.state=''
    this.observers=[]//粉丝
  }
  getState(){
    return this.state
  }
  setState(state){
    this.state=state
    this.notifyAllObsevers()
  }
  attach(observer){//添加粉丝,增加一个新的观察者
    this.observers.push(observer)
  }
  notifyAllObsevers(){//通知粉丝我有更新
    if(this.observers.length>0){
      this.observers.forEach(observer=>observer.update())
    }
  }
}
class Fan{
  constructor(name,star){
    this.name=name
    this.star=star
    //将自己注入到被观察者里面，方便被观察者更新时调用
    this.star.attach(this)
  }
  update(){
    console.log(`我的明星喜欢${this.star.getState()}，我也喜欢`)
  }
}
let star=new Star('Angular Baby')
let f1=new Fan('张三',star)
star.setState('绿色')