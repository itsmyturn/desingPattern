class JQuery{
  constructor(selector){
    this.selector=selector
    let elements=document.querySelectorAll(selector)
    this.length=elements.length
    for(let i=0;i<this.length;i++){
      this[i]=elements[i]
    }
  }
  html(){
    return this[0].innerHTML
  }
  addClass(cls){
    for(let i=0;i<this.length;i++){
      this[i].className=cls
    }
  }
}
let $=function(selector){
  return new JQuery(selector)
}
let html=$('li').html()
let length=$('li').length
console.log(html,length)
$('li').addClass('red')