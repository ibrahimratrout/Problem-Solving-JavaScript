//make array of number between two parameter


function betweenFun(a,b){
    return Array(b-a).fill(a).map((n,i)=>n+i)
}

console.log(betweenFun(2,6))

  






