const person = {'firstName': 'Steve','lastName': 'john'}

function greet(msg,sign){
    console.log(this)
    console.log(`${msg}, ${sign} ${this.firstName}`)
}

// greet('Hi')

const newGreet = greet.bind(person,'Hi','Mr.')
newGreet()