//Find the position for given char in position in alphapit


function findChar(char){
    const al="abcdefghijklmnopqrstuvwxyz"
    for(let i=0;i<al.length;i++){
        if(char===al[i]){
            return i+1
        }

    }
}
// function findChar(char){
//     const al="abcdefghijklmnopqrstuvwxyz"
//     return al.indexOf(char)+1
// }


console.log(findChar("w"))
