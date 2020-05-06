class Star{//es6语法，用继承代替ts的接口
  answerPhone(){}
}
class Angelababy extends Star{
  constructor(){
    super()
    this.available=false
  }
  answerPhone(){
    console.log('你好，我是baby')
  }
}
class AngelababyAgent extends Star{
  constructor(){
    super()
    this.angelababy=new Angelababy()
  }
  answerPhone(){
    console.log('你好，我是baby的经纪人')
    if(this.angelababy.available){
      this.angelababy.answerPhone()
    }else{
      console.log('很抱歉，baby没有空')
    }
  }
}
let angelababyAgent=new AngelababyAgent()
angelababyAgent.answerPhone()