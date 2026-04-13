// console.log('Hello world')
// let a=10
// console.log(40*10)
// let b=11
// console.log(a===b)
// b="abhay"
// const myfun = function() {
//     console.log("Hello world")
// }
    

// myfun()
// let ab='abn';

// console.log(`Hello my name is abhay ${ab}  hhhhh ${ab}`)
// console.log(ab.charAt(1))
// console.log(ab.toUpperCase(1))
// console.log(ab.substring(0,2))
// let mydate=new Date()
// console.log(mydate)
// console.log(mydate.toString())
// console.log(mydate.toDateString())
// console.log(mydate.toLocaleString())
// console.log(mydate.getDate())

//Array

// let arr=[2,4,2,8,2,5]
// console.log(arr.includes(2))
// console.log(arr.indexOf(8))
// let newarr=arr.join()
// console.log(newarr)
// console.log(typeof newarr)
// console.log(`before ${arr}`)
// //slice ,splice
// console.log("A",arr.slice(1,3));
// console.log("A",arr.splice(1,3));
// console.log(`before ${arr}`)

//concate---new array create and store  , push in same array add  , spread
const marvel=['sp','iron','hulku','antii','doctor']
const dc=['bat','super']
// marvel.push(dc)
// console.log(marvel)
const newarr=marvel.concat(dc) // ---->end me add karta he 
// console.log(newarr)
// const newarr=[...marvel,...dc] ///spread  kisi bhi positon me add kr skta he [0,...marvel,...dc]
// console.log(newarr)

// console.log(newarr.indexOf("sp"))
// console.log(newarr.length)


//object
//object.create--------constructor

//object literals
// const JsUser={} //empty object


const Mysym=Symbol("key1")
const JsUser={
    name:"Abhay",
    "full name":"Abhay Katre",
    [Mysym]:"mykey1", //symbol is refering 
    age:20,
    email:"abhay@gmail.com",
    isLoggedIn:false
}
console.log(JsUser.name) // dot operator 
//console.log(JsUser[email]) // it will show error because email key  is string 
console.log(JsUser['email'])
console.log(JsUser['full name'])
console.log(JsUser[Mysym])

console.log(JsUser['email'])
JsUser['email']="abc@gmail.com"
console.log(JsUser['email'])
// Object.freeze(JsUser)
JsUser['email']="afsfsdf@gmail.com" // it will not chnage do to freeze
console.log(JsUser['email'])
console.log(JsUser)

JsUser.greeting=function(){
    console.log("Hello JS users")
}
JsUser.greetingTwo=function greet(){
    let a = 5;
    let b = 10;
    let total = a + b; 
    console.log(`Hello ${this.name}`)
}
//console.log(JsUser['greeting']()) // it will show Hello JS users ,undefined
JsUser.greeting()
JsUser["greetingTwo"]()
console.log(JsUser.greetingTwo) // it will show function greet(){...} because we are not calling it
console.log(JsUser)
console.log(JsUser.greetingTwo);