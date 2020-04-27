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
//返回值适配
function transform(str){
  return JSON.parse(str)
}
ajax({
  url:'www.baidu.com',
  method:'POST',
  success(str){
    //服务器返回的是一个纯json的字符串
    let result=transform(str)
    console.log(result)
  }
})