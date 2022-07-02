// function buildObj(arr){
//     const result = {}
//     for(let i = 0;i<arr.length;i++){
//         result[arr[i]] = arr[i].length
//     }
//     return result

// }

// console.log(buildObj(['apple','mango','kiwi']))

// Using foreach method

function buildObj(arr){
    const result = {}
    arr.forEach(function(ele){
        result[ele] = ele.length
    })

    return result
}


console.log(buildObj(['apple','mango','kiwi','banana']))


