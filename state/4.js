let StateMachine=require('javascript-state-machine')
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
    // onBeforeMelt:function(callback){
    //   console.log('发生在melted之前',this)

    //   return callback()
    // },
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
// console.log(fsm.allStates())//查看所有状态
// console.log(fsm.is('solid'))//如果gas是当前状态则返回true，否则返回false
// console.log(fsm.can('melt'))//当前状态是否可以通过这个行为转换，如果可以，则返回true，如果不可以则返回false
// console.log(fsm.cannot('melt'))
// console.log(fsm.transitions())//当前状态允许的转换的返回列表
// console.log(fsm.allTransitions())//所有可能转换的返回列表
// fsm.onBeforeMelt(function(s){ //可以在状态发生改变之前做一些事情
//   console.log(123)
// })
fsm.melt()