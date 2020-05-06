const http=require('http')
const httpProxy=require('http-proxy')
//创建一个代理服务
const proxy=httpProxy.createProxyServer()
let server=http.createServer(function(req,res){
  proxy.web(req,res,{
    target:'http://127.0.0.1:9001'
  })
  proxy.on('error',function(err){
    console.log(err)
  })
})
server.listen(8000,()=>console.log('0.0.0.0'))
//反向代理 访问8000的时候跳转到9000