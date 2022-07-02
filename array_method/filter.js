/*
The filter() method returns a new array with all elements that pass the condition implemented by the provided condition.Otherwise empty array is returned.
*/

const numbers = [10,15,20,25,30]
// const num = [5,15,25,27,29]

// const result = numbers.filter(function(ele){
//     return ele%2 === 0
// })
// console.log(result)

// const res = num.filter(function(ele){
//     return ele % 2 === 0
// })
// console.log(res)

const result = numbers.filter(function(ele){
    if(ele % 2 === 0){
        return true
    }
})
console.log(result)
