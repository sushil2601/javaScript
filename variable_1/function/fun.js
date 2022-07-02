// function greet(name) {
//     const message = `Hi,${name}`
//     return message
// }

//If you don't use return in the function thrn function return default value is undefined.

//Hoisting
// console.log(greet('sushil'))
// function greet(name) {
//     const message = `Hi,${name}`
//     return message
// }


// function greet(name) {
//     const message = `Hi,${name}`
//     message
// }
// console.log(greet('sushil')) //'undefined

// function greet(name) {
//     const message = `Hi,${name}`
//      return message
// }
// console.log(greet())

//Default (es5)

// function greet(name) {
//     name = typeof name === 'undefined' ? 'anonyous' :name
//     const message = `Hi,${name}`
//     return message
// }
// console.log(greet())
// console.log(greet('sushil'))

//Default (es6)

// function sayHello(name = 'Default') {
//     const message = `Hello,${name}`
//     return message
    
// }
// console.log(sayHello())
// console.log(sayHello('suman'))

//Expression

// const greet = function(name = 'Anonymous') {

//     const message = `Hi,${name}`
//     return message
    
// }
// console.log(greet())
// console.log(greet('Suman'))

//Arguments

function add(n,p,m) {
    console.log(arguments)
    console.log(arguments.length)
    
}
add(10,20,30)