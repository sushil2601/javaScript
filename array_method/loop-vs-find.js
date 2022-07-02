// Find all the even numbers in arr.

const numbers = [10,15,20,25,35]

console.log('----- using loop and condition')
const result = []

for(let i = 0;i<numbers.length;i++){
    if(numbers[i] % 2 === 0){
        result.push(numbers[i])
    }
}
console.log(result)

console.log('----- using filter method')

const result2 = numbers.filter(function(ele){
    return ele % 2 === 0
})
console.log(result2)