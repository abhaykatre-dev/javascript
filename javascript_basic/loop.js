// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

//forof iterates over the values 
// let arr=[2,3,4,2,4]
// for (const element of arr) { //arryy object strings use krskte hai
//     console.log(element)
// }
// let user="Abhay katre"
// for (const element of user) {
//     console.log(element)
// }

// //maps  is a object which holds key-value pairs and remember the original insertion order of the keys it is moslty know for uniqe values
// const map=new Map()
// map.set('In','India')
// map.set('USA','United state of america')
// map.set('Fr','France')
// console.log(map)

// for (const key of map) {
//     console.log(key)
// }
// for (const [key,value] of map) {
//     console.log(key,':-',value)   
// }

// const myobj={
//     game1:"NFS",
//     game2:"Spiderman"
// }

// // for (const element of myobj) {
// //     console.log(element)   //object not iterableble so error show
// // }

// //forin iterates over key 
// for (const key in myobj) {
   
//     console.log(myobj[key])
// }

// //forin for arrary 
// const programming=[3,2,4,2,4]
// for (const key in programming) {
//    console.log(key,':',programming[key])
//      // array ki key dega jaise 0,1,2,3,...
// }

//forEach() it is array method that execute a provided  callback  function once for each element in the array
const coding=['js','ruby','python','java']
coding.forEach(function (val){
    console.log(val)
})

// now using arrow function
// coding.forEach((val)=>{
//     console.log(val)
// })
// coding.forEach((val)=>(
//     console.log(val)
// ))

// function printme(item){
//     console.log(item)
// }
// //funtion given to for echa which is already created
// coding.forEach(printme)

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr)
})

const newcoding=[
    {
        mylanguage:"python"
    },
    {
        mylanguage:"java"
    },
    {
        mylanguage:"js"
    }
]
newcoding.forEach((item)=>{
    console.log(item.mylanguage)
})  

