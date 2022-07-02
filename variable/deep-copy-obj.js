const person = {
    name : 'steve',
    city : 'Bangalore'
}

const student = Object.assign({},person)

console.log('person',person)
console.log('student',student)

person.name = 'jonson'
console.log('person',person)
console.log('student',student)

student.name = 'jack'
student.city = 'Mysore'
console.log('person',person)
console.log('student',student)