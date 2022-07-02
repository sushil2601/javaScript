// are ordered,integer index,collection of values

//const fruits = [] // new array()
// const fruits = ['mango','apple','water melon'] // new array('mango','apple','water melon')
// console.log(fruits)

// console.log(fruits[0])//'mango'
// console.log(fruits[10])//'undefined'
// console.log(typeof fruits)//'object'

// //methods
// //fruits.push('kiwi')
// console.log(fruits.push('kiwi'))
// console.log(fruits)

// //fruits.pop()
// console.log(fruits.pop())
// console.log(fruits)

// //fruits.unshift('banana')
// console.log(fruits.unshift('banana'))
// console.log(fruits)

// //fruits.shift()
// console.log(fruits.shift())
// console.log(fruits)

// const numbers = [10,20]
// numbers.push(30,40,50)
// console.log(numbers)

// numbers.unshift(1,2,3)
// console.log(numbers)

// console.log(numbers.reverse())
// console.log(numbers)

// console.log(fruits.sort())
// console.log(fruits)

// console.log(numbers.sort())
// console.log(numbers)

// push add element at the end of the array while unshift add element at the beginning of the array.
// pop delete element from the end of the array while shift delete element from the beginning of the array.

// const players = ['sachin','virat','shehwag']
// console.log(players)
// console.log(players.indexOf('virat'))//1
// console.log(players.indexOf('yuraj'))//-1
// console.log(players.lastIndexOf('virat'))//1

// console.log(players.includes('sachin'))
// console.log(players.includes('sourabh'))

// //arr to string

// console.log(players.join(''))//bydefault comma seperated

// const set1 = [10,20],set2 = [310,320]
// console.log(set1 + set2)//'10,20310,320'

// const result = set1.concat(set2)

// console.log(result)

//splices

// const fruits = ['apple','mango','kiwi','banana']
// console.log(fruits)
// fruits.splice(2,1)
// console.log(fruits)
// fruits.splice(1,2)
// console.log(fruits)
// console.log(fruits.splice(1,2))//splice method returns array of remove element.If we remove one element it still return an array.
// console.log(fruits)

//Add element at specific index

// const product = ['marker','scale','board','rack']
// console.log(product)
// product.splice(2,0,'pencil')
// console.log(product)

// const fruits = ['apple','mango','banana','kiwi','water melon','musk melon']
// console.log(fruits)

// for(let i = 0;i<fruits.length;i++)
// {
//     console.log(fruits[i])
// }

//Mixed value in array

// const numbers = [10,20,30,40]
// const mixed = [10,20,'dct','true',[10],{name:'sushil'},undefined]
// console.log(mixed)
// console.log(mixed.length)

//Destructuring

var number = [10,20,30,40]
// var v1 = number[0]
// var v2 = number[1]
var v1 = number[2]
console.log(v1)

//arr destructuring -- es6 feature

const users = ['sushil','suman','surya','pandey','taaj','manish']
console.log(users)

// const [u1,u2] = users
// console.log(u1,u2)
const [u2] = users
console.log(u2)
const [,,,u1] = users
console.log(u1)

const u3 = users[4]
console.log(u3)
