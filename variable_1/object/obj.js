//key||property||label
const person = {
    firstName : 'sushil',
    lastName :'suman',
    age : 24,
    email : 'sushilsuman2355@gmail.com'
}
// console.log(person)
// console.log(person.firstName)//'sushil'
// console.log(person['firstName'])//'sushil'
// console.log(person.city)//undefined

// console.log(typeof person)//object

// const price = [10,20,30]
// console.log(typeof price)//object

// console.log(Array.isArray(price))//true
// console.log(Array.isArray(person))//false

// //create or add
// person.city = 'Bangalore'
// console.log(person)
// person['country'] = 'INDIA'
// console.log(person)

// //Update
// person.age = 25
// person['firstName'] = 'Laddu'
// console.log(person)

// //delete
// delete person.lastName
// console.log(person)

// console.log(Object.keys(person))
// console.log(Object.values(person))

// console.log(Object.keys(person).includes('firstName'))
// console.log(Object.keys(person).includes('occupation'))

// console.log(Object.values(person).includes('sushil'))
// console.log(Object.values(person).includes(25))

//freeze

// const product = {
//     id: 1,
//     price : 10,
//     name : 'marker'
// }

// //const item = {id : 2}
// const item = {seller : 'dev international'}
// console.log(item)
// Object.assign(item,product)
// console.log(item)


// console.log(product)
// Object.seal(product)
// product.price = 15
// product.rating = 12
// console.log(product)

// console.log(product)
// Object.freeze(product)
// product.price = 15
// product.rating = 4.3
// console.log(product)
// console.log(Object.isFrozen(product))

// For used loop in object we used for in.
// console.log(person)

// for(const key in person)
// {
//     console.log(key,person[key])
// }

//console.log(person)

// var firstName = person.firstName
// var lastName = person.lastName
// var age = person.age
// var roll = person.roll
// console.log(firstName,lastName,age,roll)

//Destructure

const {firstName,lastName,age,roll} = person
console.log(firstName,lastName,age,roll)
