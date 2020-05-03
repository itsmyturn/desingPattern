//伪代码演示
let http=require('http')
let server=http.createServer()
//当这个http服务器接收到request请求后，执行对应的监听函数
server.on('request',function(req,res){
  req.on('data',function(data){
    console.log(data)
  })
  req.on('end',function(){
    res.end('ok')
  })
})