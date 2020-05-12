//redux整个应用只有一个仓库，整个仓库只有一个状态state
function createStore(reducer){
  let state
  let listeners=[]
  function subscribe(listener){
    listeners.push(listener)
  }
  function getState(){
    return state
  }
  function dispatch(action){
    state=reducer(state,action)
  }
  return{
    getState,
    dispatch,
    subscribe
  }
}
let reducer=function(){

}
let store=createStore(reducer)