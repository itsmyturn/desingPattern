/**
 * 单例模式的应用场景
 * 1数据库的连接池
 * 2 缓存是为了提高性能
*/
let express=require('express')
let bodyParser=require('body-parser')
let fs=require('fs')
let app=express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
//返回某个用户的详情
let cache={}
app.get('/user/:id',function(req,res){
  let id=req.params.id
  let user=cache[id]
  if(user){
    res.json(user)
  }else{
    fs.readFile(`./${id}.json`,'utf8',function(err,data){
      console.log(data,'data')
      let user=JSON.parse(data)
      cache[id]=user
      res.json(user)
    })
  }
  // fs.readFile(`./${id}.json`,'utf8',function(err,data){
  //   let user=JSON.parse(data)

  //   res.json(user)
  // })
})
// 写入某个用户的详情
app.post('/user',function(req,res){
  let user=req.body //{id:1,name:'jack',age:9}
  fs.writeFile(`./${user.id}.json`,JSON.stringify(user),function(err){
    res.json(err)
  })
})
app.listen(3001)