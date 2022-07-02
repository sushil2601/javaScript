const menuItem = [
    {id : 1,name : 'chicken kebab',price: 290,isVeg: false},
    {id: 2,name: 'paneer chilly',price: 210,isVeg: true},
    {id: 3,name: 'chicken biryani',price: 350,isVeg: false},
    {id: 4,name: 'veg biryani',price: 300,isVeg: true}
    
]

//find all the item which is veg.

// const result = menuItem.filter(function(ele){
//     return ele.isVeg === true
// })
// console.log('veg items',result)
//find all the items whose price is between 200 - 300.
// const result2 = menuItem.filter(function(ele){
//     if(ele.price>=200 && ele.price<=300){
//         return true
//     }
// })
// console.log(result2)
//find the item whose id is 3.
const result3 = menuItem.filter(function(ele){
    return ele.id === 3
})
console.log('Item with id 3',result3)
//find all the menu items which has term biryani in it.
const result4 = menuItem.filter(function(ele){
    return ele.name.includes('biryani')
})
console.log('All Biryani',result4)

//find all item which has term mashroom in it.
const result5 = menuItem.filter(function(ele){
    return ele.name.includes('mashroom')
})
console.log('All mashroom',result5)

