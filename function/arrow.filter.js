const products = [
    {id: 1,name: 'marker',price: 15},
    {id:2,name: 'scale', price: 10},
    {id:3,name: 'board',price: 100}
]

const result = products.filter(function(product){
    return product.id >= 1
})

console.log(result)

const result2 = products.filter((ele) =>{
    return ele.id>=1
})
console.log('filter method')
console.log(result2)

const result3 = products.filter(ele => ele.price>50)
console.log('filter method')
console.log(result3)