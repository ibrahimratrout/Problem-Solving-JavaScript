// Make given string into array then split it every char in number of indexes


function givenStr(str){
    let arr=str.split("")
    let newArr=[]

    for(let i=1;i<arr.length+1;i++){
        let a=arr.slice(0,i).join(".")
        newArr.push(a)
    }

    return newArr
}


console.log(givenStr("abcdef"))


