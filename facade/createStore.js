export default function createStore(reducer,preloadedState,enhancer){
  if(typeof preloadedState==='function'&& typeof enhancer==='undefined'){
    enhancer=preloadedState
    preloadedState=undefined
  }
}