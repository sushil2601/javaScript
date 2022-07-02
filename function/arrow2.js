/*
Create an arrow function called as square, which takes 1 parameter, it returns the square of the number
*/

// const square = (a) =>{
//     return a*a
// }

// console.log(square(2))

//If only one parameter,() are optional.

const square = n =>{
    return n * n
}

console.log(square(19))

// only 1 parameter, () are optional , if only one statement, then {} optional, return optional,statement has to be on the same line as =>.
const square3 = n => n*n
console.log(square3(17))