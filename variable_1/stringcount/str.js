function strCount(str,char) {
    let count = 0
    for(let i = 0;i<str.length;i++){
        if(str[i]===char){
            count+=1
        }
    }
    return count
    
}
console.log(strCount('hello','l'))
console.log(strCount('hello','o'))
console.log(strCount('','z'))
