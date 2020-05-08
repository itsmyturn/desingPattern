let express=require('express')
let path=require('path')
let app=express()
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname,'2.html'))
})
app.get('/user/:id',function(req,res){
  let id=req.params.id
  res.json({
    id,
    name:`hello${id}`
  })
})
app.listen(3000)