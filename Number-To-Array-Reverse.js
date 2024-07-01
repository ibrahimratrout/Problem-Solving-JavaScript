//Any number given return it with reverse array


function digitRev(num){
    let newNum=String(num).split("").map(m=>Number(m)).reverse()
    console.log(newNum)
}
digitRev(123456789)
digitRev(987654321)