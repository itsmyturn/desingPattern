let fs=require('fs')
let path=require('path')
let rs=fs.createReadStream(path.join(__dirname,'1.txt'))
rs.on('data',function(data){
  console.log('data',data)
})
// rs.emit('data',data)
rs.on('end',function(){
  console.log('end')
})
//rs.emit('end')