//串行读取三个文件的内容
const fs=require('fs')
// function promisify(readFile){
//   return function(filename,encoding){
//     return new Promise(function(resolve,reject){
//       readFile(filename,encoding,function(err,data){
//         if(err){
//           reject(err)
//         }else{
//           resolve(data)
//         }
//       })
//     })
//   }
// }
//对promisify优化
function promisify(fn){
  return function(...args){
    return new Promise(function(resolve,reject){
      fn(...args,function(err,data){
        if(err){
          reject(err)
        }else{
          resolve(data)
        }
      })
    })
  }
}
let readFile=promisify(fs.readFile);
(async function read(){
  let one=await readFile('adaptorPattern/1.txt','utf8')
  let two=await readFile('adaptorPattern/2.txt','utf8')
  let three=await readFile('adaptorPattern/3.txt','utf8')
  console.log(one,two,three)
})();
