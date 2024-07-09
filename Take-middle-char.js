//Take the middle charachter for the given string

function middleFun(str){
    let length =str.length
    let mid=Math.floor(length/2)
    if(length%2==0){
        console.log(str[mid -1]+str[mid])
    }else{
        console.log(str[mid])
    }
}

middleFun("ibrahi")




