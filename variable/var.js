let a = 10
let b = 20

console.log('a',a)//10
console.log('b',b)//20

//copy value of a into c

let c = a
console.log('a',a)//10
console.log('c',c)//10

a = 125
console.log('a',a)//125
console.log('c',c)//10

c = 500
console.log('a',a)
console.log('c',c)
