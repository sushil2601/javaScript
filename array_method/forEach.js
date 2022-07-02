/*
The forEach() method executes a provided function once for each element in array .
*/

const product = ['Apple','Mango','Kiwi']

// product.forEach(function(ele){
//     //console.log(ele)
//     // console.log(ele.toUpperCase())
//     console.log(`${ele} has ${ele.length} character`)
// })

product.forEach(function(ele,i,arr){
    // console.log(ele,i,arr)
    console.log(`${ele} is present at ${i} index`)
})