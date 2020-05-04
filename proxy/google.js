class Google{
  get(url){
    return 'google'
  }
}
class Proxy{
  constructor(){
    this.google=new Google()
  }
  get(url){
    return this.google.get(url)
  }
}
let proxy=new Proxy()
let result=proxy.get('http://www.google.com')
console.log(result)