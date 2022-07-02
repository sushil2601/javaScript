const users = [
    {id: 1,name: 'john'},
    {id: 2,name: 'steve'}
]

//forEach
users.forEach(function(user){
    console.log(`${user.id} - ${user.name}`)
})

//forEach(callback) in to an arrow function.
users.forEach((user) =>{
    console.log(`${user.name}`)
})

users.forEach(user => console.log(`${user.id} - ${user.name}`))
