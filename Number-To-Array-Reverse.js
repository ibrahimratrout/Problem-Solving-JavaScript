//Any number given return it with array then reverse it


function digitRev(num){
    let newNum=String(num).split("").map(m=>Number(m)).reverse()
    console.log(newNum)
}

//some scenarios 

digitRev(123456789)
digitRev(987654321)