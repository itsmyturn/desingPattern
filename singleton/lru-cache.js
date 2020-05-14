/** 
 * 用一个数组来存储数据，给每一个数据项标记一个访问时间戳
 * 每次插入新数据项的时候，先把数组中存在的数据项时间戳自增，并将新数据项的时间戳置为0
 * 每次访问数组中数据项的时候，将被访问的数据项的时间戳置为0
 * 当数组空间已满时，将时间戳最大的项淘汰 
*/
class LRUCache{
  constructor(capacity){
    this.capacity=capacity
    this.members=[]
  }
  put(key,value){
    let oldestAge=-1
    let oldestIndex=-1
    let found=false
    for(let i=0;i<this.members.length;i++){
      let member=this.members[i]
      if(member.age>oldestAge){
        oldestAge=member.age
        oldestIndex=i
      }
      if(member.key===key){
        found=true
        this.members[i]={key,value,age:0}
      }else{
        member.age++
      }
      
    }
    if(!found){
      // console.log('没找到',this.members.length)
      this.members.push({key,value,age:0})
      if(this.members.length>this.capacity){
        console.log('走进来了')
        this.members.splice(oldestIndex,1)
      }
      
    }
    
  }
  get(key){
    for(let i=0;i<this.members.length;i++){
      let member=this.members[i]//{key,value,age}
      if(member.key===key){
        member.age=0
        return member.value
      }
    }
    return -1
  }
}
let cache=new LRUCache(3)
cache.put(1,1)
console.log(cache)
cache.put(2,2)
console.log(cache)
cache.put(3,3)
console.log(cache)
cache.put(4,4)
console.log(cache)
console.log(cache.get(3))