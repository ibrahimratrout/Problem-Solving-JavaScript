//Repeat given strings 

function repeatStr(num,str){
    let newStr=""
    for(i=0;i<num;i++){
        newStr+=str
    }
    return newStr    
}

console.log(repeatStr(5,"Hello world! "))


//or by this solution:


// function repeatStr(num,str){
//     return str.repeat(num) 
// }
// console.log(repeatStr(4,"Hello World! "))

