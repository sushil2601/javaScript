/*
The map() method returns a new array with the results of calling a provided function on every element on the array.
*/

const tech = ['javascript','react','node','angular']

const result = tech.map(function(ele){
    return ele.toUpperCase()

})

console.log(result)
console.log(tech)

const result2 = tech.map(function(ele){
    return ele.length
})

console.log(result2)