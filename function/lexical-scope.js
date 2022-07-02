/*
A lexical scope in javascript means that a variable defined outside a function can be accessible inside another function. 
*/

const str1 = 'outside function'

function greet(){
    const str2 = 'inside function'
    console.log('str2',str2)
    console.log('str1',str1)

    function hello(){
        console.log('hello',str1)
        console.log('hello',str2)
    }
    hello()
}
greet()