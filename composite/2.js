class Folder{
  constructor(name){
    this.name=name
    this.children=[]
    this.parent=null
    this.level=0
  }
  add(child){
    child.level=this.level+1
    child.parent=this
    this.children.push(child)
  }
  show(){
    console.log(' '.repeat(this.level)+'文件夹'+this.name)
    for(let i=0;i<this.children.length;i++){
      this.children[i].show()
    }
  }
  remove(){
    if(!this.parent)return 
    for(let i=0;i<this.parent.children.length;i++){
      let current=this.parent.children[i]
      if(current===this){
        return this.parent.children.splice(i,1)
      }
    }
  }
  
}
class File{
  constructor(name){
    this.name=name
  }
  add(){
    console.log('文件下面不能再添加文件夹了')
  }
  show(){
    console.log('文件'+this.name)
  }
}

let video=new Folder('video')
let vue=new Folder('vue')
let react=new Folder('react')
let vuejs=new File('vuejs')
let reactjs=new File('reactjs')

vue.add(vuejs)
react.add(reactjs)
video.add(vue)
video.add(react)
video.show()
react.remove()
video.show()