let $={}
$.define=function(namespace,fn){
  let namespaces=namespace.split('.')
  let fnName=namespaces.pop()
  let current=$
  for(let i=0;i<namespaces.length;i++){
    let namespace=namespaces[i]
    if(!current[namespaces]){
      current[namespace]={}
    }
    current=current[namespace]
  }
  current[fnName]=fn
}
$.define('dom.class.addClass',function(){
  console.log('dom.addClass')
})
$.define('dom.attr',function(){
  console.log('dom.attr')
})
$.define('string.trim',function(){
  console.log('string.trim')
})
$.define('event.preventDefault',function(){
  console.log('event.preventDefault')
})
console.log($.dom.class.addClass('title'))
console.log($.dom.attr('src'))
console.log($.string.trim('abc'))
console.log($.event.preventDefault())