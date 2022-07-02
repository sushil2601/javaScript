function greet(){
    const str1 = 'inside function'
    if(true){

        const str2 = 'inside block'
        console.log(str2)//inside block
        console.log(str1)//inside function

    }
    console.log(str1)//inside function
    // console.log(str2)//ReferenceError
}
greet()
// console.log(str1)//ReferenceError