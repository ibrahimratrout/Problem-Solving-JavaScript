//Remove duplicates from given array

// function removeDup(arr){
//     let finalArr=[]
//     for(let i=0;i<arr.length;i++){
//         if(!finalArr.includes(arr[i])){
//             finalArr.push(arr[i])
//         }
//     }
//     return finalArr
// }

function removeDup(arr){
    const set=new Set(arr)
    return set
}


console.log(removeDup([1,1,2,4,5,6,6,6,6,2]))