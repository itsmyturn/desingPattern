let express=require('express')
let app=express()
let bodyParser=require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(__dirname))
let users=[]
app.post('/register',function(req,res){
  let body=req.body
  let target=body.target
  let callback=body.callback
  let username=body.username
  let password=body.password
  let user={username,password}
  let id=users.length===0?1:users[users.length-1].id+1
  user.id=id
  users.push(user)
  res.status(302)
  res.header('Location',`${target}?callback=${callback}&args=${id}`)
  res.end()
})
app.listen(4000)