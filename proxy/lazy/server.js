let express=require('express')
const path=require('path')
let app=express()
app.get('/lazy',function(req,res){
  res.sendFile(path.join(__dirname,'index.html'))
})
app.get('/img/:name',function(req,res){
  setTimeout(function(){
    res.sendFile(path.join(__dirname,req.path))
  },2000)
  
})
app.listen(3001)
