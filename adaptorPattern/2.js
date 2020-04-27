function ajax(options){
  let defaultOptions={
    method:'GET',
    dataType:'json'
  }
  for(let attr in options){
    defaultOptions[attr]=options[attr]||defaultOptions[attr]
  }
  console.log(defaultOptions)
}
ajax({
  url:'www.baidu.com',
  method:'POST'
})