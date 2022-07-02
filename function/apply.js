const person = {'firstName': 'Steve','lastName': 'john'}

function greet(msg,sign){
    console.log(this)
    console.log(`${msg}, ${sign} ${this.firstName}`)
}

// greet('Hi')

greet.apply(person,['Hi','Mr.'])