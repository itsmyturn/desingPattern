let zlib=require('zlib')
let fs=require('fs')
let path=require('path')
function open(input){
  let ext=path.extname(input)
  switch(ext){
    case '.gz':
      return unZip(input)
    case '.rar':
      return unRar(input)
    case  '.7z':
      return un7z(input)
    default:
      break
  }
}
function unZip(src){
  let gunzip=zlib.createGunzip()
  let inputStream=fs.createReadStream(src)
  let outputStream=fs.createWriteStream(src.slice(0,3))
  console.log('outputStream')
  inputStream.pipe(gunzip).pipe(outputStream)
}
function unRar(src){
  console.log('RAR解压后',src)
}
function un7z(src){
  console.log('un7z解压后',src)
}
open('./source.txt.gz')
function zip(src){
  let gzip=zlib.createGzip()
  let inputStream=fs.createReadStream(src)
  let outputStream=fs.createWriteStream(src+'.gz')
  inputStream.pipe(gzip).pipe(outputStream)
}
// zip(path.resolve(__dirname,'source.txt'))