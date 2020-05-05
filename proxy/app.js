let express=require('express')
let path=require('path')
let app=express()
//图片预加载
app.get('/image/:name',function(req,res){
  setTimeout(function(){
    res.sendFile(path.join(__dirname,req.path))
  },2000)
  
})
//图片预加载
app.get('/loading.gif',function(req,res){
  res.sendFile(path.resolve('loading.gif'))
})
//防抖
let todos=[
  {id:1,text:'吃饭',completed:false},
  {id:2,text:'睡觉',completed:false},
  {id:3,text:'打豆豆',completed:false}
]

app.get('/todos',function(req,res){
  res.json(todos)
})
app.get('/toggle',function(req,res){
  let ids=req.query.ids //传过来是字符串
  ids=ids.split(',').map(item=>parseInt(item))
  todos=todos.map(function(item){
    if(ids.includes(item.id)){
      item.completed=!item.completed
    }
    return item
  })
  res.json({code:0})
})
app.use(express.static(__dirname))
app.listen(3000)