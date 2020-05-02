// let StateMachine=require('javascript-state-machine')
class StateMachine{
  constructor(options){
    let {init='',transitions=[],methods={}}=options
    this.state=init;
    transitions.forEach(transition=>{
      
      let {from,to,name}=transition
      this[name]= function(){
        if(this.state===from){
          this.state=to
          let onMethod='on'+name.slice(0,1).toUpperCase()+name.slice(1)
          methods[onMethod]&&methods[onMethod]()
        }
      }
    })
  }
}
let fsm=new StateMachine({
  init:'solid',//初始状态
  transitions:[
    {
      from:'solid',
      to:'liquid',
      name:'melt'
    },
    {
      from:'liquid',
      to:'solid',
      name:'freeze'
    },
    {
      from:'liquid',
      to:'gas',
      name:'vaporize'
    },
    {
      form:'gas',
      to:'liquid',
      name:'condense'
    }
  ],
  methods:{
    onMelt:function(){
      console.log('I melted')
    },
    onFreeze:function(){
      console.log('I froze')
    },
    onVaporize:function(){
      console.log('I varporized')
    },
    onCondense:function(){
      console.log('I condensed')
    }
  }
})
fsm.melt()
