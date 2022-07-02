let a = [10]
//let c = a.slice[0]//Deep Copying method1

//let c = [].concat(a)

let c = [...a]

console.log('a',a)//[10]
console.log('c',c)//[10]

a.push(20)

console.log('a',a)//[10,20]
console.log('c',c)//[10]

c.push(30)

console.log('a',a)//[10,20]
console.log('c',c)//[10,30]

//By default shallow copy is happen.