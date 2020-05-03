class Tree{
  constructor(left,value,right){
    this.left=left
    this.right=right
    this.value=value
  }
}
function make(array){
  if(array.length===1)return new Tree(null,array[0],null)
  return new Tree(make(array[0]),array[1],make(array[2]))
}
let tree=make([[['D'],'B',['E']],'A',[['F'],'C',['G']]])
// console.log(tree)
//前序
// function* leftOrder(tree){
//   if(tree){
//     yield tree.value
//     yield* leftOrder(tree.left)
//     yield* leftOrder(tree.right)
//   }
// }
//中序
// function* inOrder(tree){
//   if(tree){
//     yield* inOrder(tree.left)
//     yield tree.value
//     yield* inOrder(tree.right)
//   }
// }
//后序
function* rightOrder(tree){
  if(tree){
    yield* rightOrder(tree.left)
    yield* rightOrder(tree.right)
    yield tree.value
    
  }
}
let result=[]
for(let node of rightOrder(tree)){
  result.push(node)
}
console.log(result)