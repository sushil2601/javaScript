// const person = {
//     name : 'Sushil',
//     city : 'Bangalore',
//     profession: 'system engineerr',
//     greet : function(){
//         return 'Hi there'
//     },
//     code: function(){
//        // return person.name +' is currently coding'
//     //    return this
//           //return this.name
//           //return this.city
//           return this.name + ' is currently coding'
// }
// }


// console.log(person.name)
// console.log(person.city)
// console.log(person.profession)
// console.log(person.greet)//[function:greet]
// console.log(person.greet())
// console.log(person.code())

// Exercise

const person = {
    name : 'sushil',
    city : 'Bangalore',
    profession : 'sr system engineer',

    details : function(){
        return `${this.name} is working as a ${this.profession} in ${this.city}.`
    }
}

console.log(person.details())
