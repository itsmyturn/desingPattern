//抽象元素：材料
interface Material{
  accept(visitor:Company):void
}
class Paper implements Material{
  public accept(visitor:Company){
    console.log('纸')
    return visitor.createByPaper(this)
  }
}
class Cuprum implements Material{
  public accept(visitor:Company){
    console.log('铜')
    return visitor.createByCuprum(this)
  }
}
//访问者：公司
interface Company{
 createByPaper(paper:Paper):void
 createByCuprum(cuprum:Cuprum):void
}
//具体访问者：艺术公司
class ArtCompany implements Company{
  public createByPaper(paper:Paper):String{
    console.log(`${paper}照片`)
    return `${paper}照片`
  }
  public createByCuprum(cuprum:Cuprum):String{
    console.log(`${cuprum}铜像`)
    return `${cuprum}铜像`
  }
}
//具体访问者：造币公司
class MintCompany implements Company{
  public createByPaper(paper:Paper):String{
    console.log(`${paper}纸钱`)
    return `${paper}纸钱`
  }
  public createByCuprum(cuprum:Cuprum):String{
    console.log(`${cuprum}铜币`)
    return `${cuprum}铜币`
  }
}

class MeterialList{
  public setList:any
  constructor(){
    this.setList=new Set()
  }
  public add(obj:Material){
    console.log(`添加了${JSON.stringify(obj)}`)
    if(this.setList.has(obj)){
      return console.log('该元素已存在')
    }
    this.setList.add(obj)
  }
  public remove(obj:Material){
    console.log('移除纸')
    this.setList.delete(obj)
  }
  public each(company:Company){
    for(const item of this.setList){
      item.accept(company)
    }
  }
}
let paper=new Paper()
let cuprum=new Cuprum()
let list=new MeterialList()
list.add(paper)
list.add(cuprum)
let artCompany=new ArtCompany()
let mintCompany=new MintCompany()
list.each(artCompany)
list.each(mintCompany)
list.remove(paper)
list.each(artCompany)