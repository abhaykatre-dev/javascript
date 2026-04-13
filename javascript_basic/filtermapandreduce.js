// const coding=['js','ruby','python','java']
// const value=coding.forEach((item)=>{
//     console.log(item)  
// })
// console.log(value) //foreach not returing anyvalues that why in last undefined is showing after printing all item

//foreach not return any value

//filter is also use callback function
const mynum=[1,2,3,4,5,6,7,8,9,10]
// let newnums=mynum.filter((num)=>num>5)
// let newnums=mynum.filter((num)=>{
//     return num>5
// })
// console.log(newnums)  //[ 6, 7, 8, 9, 10 ]

//using for each
// let newnum=[]
// mynum.forEach((num)=>{
//     if(num>4){
//         newnum.push(num)
//     }
// })
// console.log(newnum)

// const nummm=[1,2,3,4,5,6,7,8,9,10]
// // using map
// let newnum=nummm.map((num)=>num>5)
// console.log(newnum)

// //using foreach
// let newnum=[]
// nummm.forEach((num)=>
//      newnum.push(num+10)
    
// )
// console.log(newnum)

// chaining
const values=[1,2,3,4,5,6,7,8,9,10]
let newvalues=values
            .map((num)=>num+10)
            .map((num)=>num+1)
            .filter((num)=>num>15)
console.log(newvalues)