//let $=require('jquery')//之前全局用的jq，现在要改成fetch
//此代码会报错 window is not defined
window.$={
  ajax(options){
    return fetch(options.url,{
      method:options.type||'GET',
      body:JSON.stringify(options.data||{})
    })
  }
}

$.ajax({
  url:'www.baidu.com',
  type:'POST',
  dataType:'json',
  data:{id:1}
}).then(function(data){
  console.log(data)
})