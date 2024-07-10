//Make function the input number of size string and the string just 1 or 0 


function stringy(size){
    let str=""
    for(let i=1;i<=size;i++){
        if(i%2===0){
            str+="0"
        }else{
            str+="1"
        }
    }
    return str
}



console.log(stringy(12))
console.log(stringy(5))