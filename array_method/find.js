/*
The find() method returns the value of the first element in the array that satisfies the provided condition. Otherwise undefined is returned.
*/

// const prices = [10,20,40,50,100]

// //Pridicate function - The function return true or false.

// const result = prices.find(function(ele){
//     //return ele>25
//     if(ele>25){
//         return true
//     }
// })
// //console.log(`${result} will be result`)
// console.log(result)

/*
find first even number greater than 20.
*/

// const number = [10,20,21,24,40,54]

// const result = number.find(function(ele){
//     return (ele>20 && ele%2 === 0)
// })
// console.log(result)

// #2. check if an element is present n an array.

const number = [10,20,30,40,50,60]
console.log(number.indexOf(30)>= 0)
console.log(number.includes(30))

// #3. find element based on property.
const users = [{id : 1,name : 'sushil'},{id : 2,name : 'suman'}]

const result = users.find(function(ele){
    return ele.id === 2
    //return ele.id === 20
})
console.log(result)



