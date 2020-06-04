function isBalanced(string){
  let array = string.split('')
  let hash = makeHash(array)
  let answer = true
  for(let index in hash){
    buildTree(hash, index)
  }
  for (let ind in hash){
    if (hash[ind].direction === "open"){
      if (hash[ind].left > hash[ind].right){
        if(hash[ind].left < hash[hash[ind].right].left){
          answer = false
        }
      }
      else if(hash[ind].left === undefined){
        answer = false
      }
    }
  }
  return answer
}

function makeHash(array){
  let hash = {}
  let open = ["{","[","("]
  let par = ["(",")"]
  let curl = ["{","}"]
  for (let index in array){
    let direct
    let type
    open.includes(array[index])? direct ="open":direct="close";
    if (par.includes(array[index])){
      type = "par"
    }
    else if (curl.includes(array[index])){
      type = "curl"
    }
    else{
      type = "brack"
    }

    hash[index] = {obj: array[index], left:null, right:null, direction: direct, type: type}
  }
  return hash
}

function buildTree(hash, index){
  let currentNode = hash[index]
  let keys = Object.keys(hash)
  keys = keys.slice(index, keys.length)
  keys.shift()


  let closeNode = keys.find(ind => hash[ind].direction === "close" && hash[ind].type === hash[index].type )
  let openNode = keys.find(ind => hash[ind].direction === "open")
  currentNode.left = closeNode
  currentNode.right= openNode
}
