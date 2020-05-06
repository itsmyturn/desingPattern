const http=require('http')
let server=http.createServer(function(req,res){
  res.end('9001')
})
server.listen(9001,()=>console.log('9000'))