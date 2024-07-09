//Check the first and the last charachter for two strings and return boolean result


// function checkChar(str1,str2){
//     let str1Letters=str1[0]+str1[str1.length-1]
//     let str2Letters=str2[0]+str2[str2.length-1]

//     if(str1Letters===str2Letters){
//         return true
//     }else{
//         return false
//     }
// }

function checkChar(str1,str2){
   return str1[0]===str2[0]&&str1[str1.length-1]===str2[str2.length-1]
}

console.log(checkChar("ali","ahhgi"))