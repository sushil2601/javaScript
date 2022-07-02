const numbers = [10,15,20,25,30]

// numbers.forEach(function(ele){
//     console.log(ele)
// })

//myForEach

function myForEach(arr,callback){ //HOF
    // console.log(arr,callback)
    for(let i = 0;i<arr.length;i++){
        callback(arr[i])
    }

}

myForEach(numbers,function(n){ //callback
    console.log(n)
        // return n
})



//myFilter

function myFilter(arr,callback){
    const result = []
    for(let i = 0;i<arr.length;i++){
        const bool = callback(arr[i])
        if(bool){
            result.push(arr[i])
        }
    }
    return result
}

const result = myFilter(numbers,function(n){
    return n%2 == 0
})
console.log('even = ',result)
