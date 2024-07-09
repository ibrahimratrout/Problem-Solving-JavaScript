//Handle mistake of character and number 1mayi  smay5 omay0


function handleChar(str){
    return str.replace(/0/g,"o").replace(/1/g,"i").replace(/5/,"s")
}

console.log(handleChar("hell1jzk50"))


