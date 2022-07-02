console.log(this)

function f1(){
    console.log(this)
}
//f1()

function f2(){
    console.log(this)
}
//f2()

const af = () =>{
    console.log(this)
}
af()

const person = {
    name: 'john',
    details : function(){
        console.log(this.name)
    }
}
//person.details()

function f3(){
    const person = {
        name: 'john',
        details : () => {
            console.log(this)
        }
    }
    person.details()
}
// f3()

function f3(){
    const person = {
        name: 'john',
        details : function(){
            console.log(this)
        }
    }
    person.details()
}
f3()