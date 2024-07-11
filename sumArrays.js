///Sum the given arrays until it is empty the value 0


function sumArr(arr){
    if(arr.length===0){
        return 0
    }

    return arr.reduce((result,current)=>result+current,0)
}

console.log(sumArr([1,2,-3]))

