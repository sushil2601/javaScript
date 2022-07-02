let a = [10]
let b = ['Apple']
console.log('a',a)//[10]
console.log('b',b)//['Apple]

//copying reference of a into c

let c = a
console.log('a',a)//[10]
console.log('c',c)//['Apple]

a.push(20)
console.log('a',a)//[10,20]
console.log('c',c)//[10,20]

console.log()
c.push(30)
console.log('a',a)//[10,20,30]
console.log('c',c)//[10,20,30]
