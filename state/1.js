class SuccessState{
  show(){
    console.log('绿色')
  }
}
class WarningState{
  show(){
    console.log('黄色')
  }
}
class ErrorState{
  show(){
    console.log('红色')
  }
}
class Battery{
  constructor(){
    this.amount='high'
    this.state=new SuccessState()
  }
  show(){
    this.state.show()//把显示逻辑委托给状态对象
    //内部还要维护状态的变化
    if(this.amount==='high'){//如果都写在条件里面，代码复杂臃肿，不易维护，状态切换不明显
      this.amount='middle'
      this.state=new WarningState()
    }else if(this.amount==='middle'){
      this.amount='low'
      this.state=new ErrorState() 
    }
  }
}
let battery=new Battery()
battery.show()
battery.show()
battery.show()
battery.show()