function User(firstName,lastName){
    // console.log(this)

    this.firstName = firstName
    this.lastName = lastName
    this.isAdmin = false

    // this.firstName = 'a'

    this.fullName =function(){
        return `${this.firstName} ${this.lastName}`
    }

    this.details = function(){
        return `${this.firstName} - admin ${this.isAdmin}`
    }

}

const user1 = new User('Steve','S')
console.log(user1)
console.log(user1.fullName())
console.log(user1.details())
// console.log(user1.firstName)
// user1.firstName = 'Steven'
// console.log(user1.firstName)

const user2 = new User('Sam','D')
console.log(user2)
console.log(user2.fullName())
console.log(user2.details())
// console.log(user2.firstName)

// const user1 = new User()
// console.log(user1)

// const user2 = new User()
// console.log(user2)