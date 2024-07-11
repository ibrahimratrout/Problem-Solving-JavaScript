//First Problem (sum integer number for given array)


function sumInteger(arr){
    let intValue=0
    for(let index=0;index<arr.length;index++){
        if(arr[index]>0){
            intValue+=arr[index]
        }
    }
    return intValue
}

console.log(sumInteger([1,3,4,5,6,-5]))

