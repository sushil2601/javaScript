// const firstName = 'sushil'

// const msg1 = 'Hello',msg2 = 'World'
// console.log(msg1+' '+msg2)// string concatenation

// console.log(firstName[0])
// console.log(firstName.charAt(0))
// console.log(firstName[10])//undefined
// console.log(firstName.charAt(10))//return empty space

// const source = 'Bangalore',destination = 'Mysore',distance = 140,duration = '3 hours 30 mins'
// //es5
// console.log('the distance between ' + source + ' and ' + destination + ' is ' + distance + ' kms and time taken to travel is ' + duration + '.')
// //es6-template literal
// console.log(`the distance between ${source} and ${destination} is ${distance} kms and time taken to travel is ${duration}.`)

const password = 'secret123'

//property - value
// console.log(password.length)
// console.log(password.length>8 && password.length<128)

const user = 'sushil'
//method - behaviour
// console.log(user.toUpperCase())
// console.log(user)
// console.log(user.toLowerCase())

// console.log(user.toLocaleUpperCase())
// console.log(user.toLocaleLowerCase())

// console.log('SUMAN'.toLowerCase())

const word = 'javascript'
// console.log(word.indexOf('a'))
// console.log(word.indexOf('z'))
// console.log(word.lastIndexOf('a'))
// console.log(word.indexOf('script'))

// console.log(word.includes('a'))
// console.log(word.includes('z'))

// console.log(word.slice(2,5))
// console.log(word.slice(5))

// console.log(word.substr(2,5))

// str to array

const str = 'js , react , node , express , mongodb'
// console.log(str.split(', '))
// console.log(str.split(', ').length)
// console.log(str.split(''))//split will return an array

// const map = 'Bangalore - Mysore - Cochin'
// console.log(map.split(' - '))

const speed = 90,temp = 28.7

// console.log(typeof speed)//number
// console.log(typeof temp)//numer

// console.log(Math.round(12.3))
// console.log(Math.round(19.8))
// console.log(Math.round(temp))
// console.log(temp)

//Primitive data type are immutable

// console.log(Math.ceil(14.3))//15
// console.log(Math.ceil(12.8))//13
// console.log(Math.floor(23.6))//23
// console.log(Math.floor(20.3))//20
// console.log(Math.abs(-125))//125
// console.log(Math.pow(2,4))//16
// console.log(Math.sqrt(64))//8
// console.log(Math.min(12,15,43,2,13))//min
// console.log(Math.max(23,32,12,4,5,65))//max

console.log('Hello '+'World')
console.log(12+32)//44
console.log('10'+5)//105
console.log(10+'12')//1012
console.log(10+5+'1')//151
console.log('2'+10+5)//2105
console.log('2'+(10+5))


