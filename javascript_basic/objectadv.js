//const tinderuser=new Object() //sigleton object
// tinderuser={} //non singleton
// console.log(tinderuser);
// const regularuser={
//     email:"abc@gmail.com",
//     name:"abc",
//     userfullname:{
//         fullname:"abc bhai"
//     }
// }
// console.log(regularuser.userfullname.fullname)

const obj1={1:"a",2:"b"}
// const obj2={3:"a",4:"b"}
// //const obj3={obj1,obj2}
// // const obj3=Object.assign({},obj1,obj2)//{}ye dena accha tarifkka hota he 
// const obj3={...obj1,...obj2}
// console.log(obj3)

console.log(Object.keys(obj1))//array me values milti he 
// console.log(Object.values(obj1))
// console.log(obj1.hasOwnProperty('abcs'))// checcks have propery or not 

const course={
    courseinstructor:"Abhay Katre",
    price:999
}
const {courseinstructor:instructor}=course // short name de skte he object destructuring
console.log(instructor)