//Sum the numbers of array even if the element in given array is string


function sumArr(arr){
    return arr.map(m=>Number(m)).reduce((result,current)=>result+current,0)
}

console.log(sumArr(["1","2",3,4,"5",6]))