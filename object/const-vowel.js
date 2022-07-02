function vowelOccurance(str){
    const result = {a : 0,e : 0,i : 0,o : 0,u : 0}
    str = str.toLowerCase()
    for(const char of str){
        if(result.hasOwnProperty(char)){
            result[char] = result[char]+1
        }
    }
    return result
}
// console.log(vowelOccurance('javascript'))
console.log(vowelOccurance('Sushil Kr Suman'))