
//Check the trues

function checkIf(arr){
    let counter=0
    arr.map(m=>{
        if(m===true) counter++
    })
    return counter
}


console.log(checkIf([true,true ,false,true,false]))
console.log(checkIf([false,false ,false]))
console.log(checkIf([true,true ,true,true,true,true]))
