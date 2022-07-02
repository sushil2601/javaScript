const numbers = [10,15,20,25]
//1. add 2 to every element in the array
//OUTPUT: [12,17,22,27]

const result = numbers.map(function(ele){
    return ele+2
})

console.log(result)

//2. Add 2 to an even number and 3 to odd numbers.
//OUTPUT: [12,18,22,28]

const result2 = numbers.map(function(ele){
    if(ele % 2 === 0){
        return ele+2
    }else{
        return ele+3
    }
})
console.log(result2)

//3. Add 5 only if the number is even.
//OUTPUT: [15,15,25,25]

const result3 = numbers.map(function(ele){
    if(ele % 2 === 0){
        return ele+5
    }else{
        return ele
    }
})
console.log(result3)

const fruits = ['apple','mango','kiwi']

//4. return an array of objects, where each object will contain key to be the name of the fruit and it's value the lenth.
//OUTPUT: [{apple: 5},{mango: 5},{kiwi: 4}]

const result4 = fruits.map(function(ele){
    return {
        [ele]: ele.length
    }
})
console.log(result4)