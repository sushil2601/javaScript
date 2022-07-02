const str1 = 'outside function' //global

function greet(){
    const str2 = 'inside function'
    console.log('str2',str2)
    console.log('str1',str1)//outside function
}

greet()
console.log('str1',str1)
// console.log('str2',str2)//Reference error


//Varaibles declared with let and const is block scoped. 