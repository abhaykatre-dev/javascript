// const user={
//     name:"Abhay",
//     myfunction:function(){
//         console.log(`${this.name} is current user`)   // this refer current context 
//     }
// }
// user.myfunction()
// user.name="sam"
// user.myfunction()


// function thisinfunction(){
//     let username="Abhay"
//     //console.log(this) // which gives various values like global and more 
//     console.log(this.username) // undefined this is in object 
// }
// thisinfunction()

// const chai=()=>{
//     user:"Abhay"
//     console.log(this)
// }
// chai()

// const addTwo=(num1,num2)=>{
//     return num1+num2   //Explicit Return
// }
// const addTwo=(num1,num2)=>(num1+num2) //Implicit Return
// console.log(addTwo(4,5))
// const adduser=()=>({user:"Abhay"})
// console.log(adduser())

(function sing(){
    //named IIFE
    console.log("I am singing")
})(); //yaha directly semicolen nhi laga isliye lagana pad nhi to error milte hai // immediately Invoked Function Expression (IIFE) pronounced "iffy
// preventing gloabl pollution
(()=>{
    //unnamed IIFE
    console.log("immediately involed function")
})();
((name)=>{
    console.log(`${name}`)
})("Abhay");

//we have gloabl execution context 
//and functional execution context 
//one more Eval execution context
 

//falsy values :
// false ,0,-0,BigInt 0n,"",null, undefined,NaN,fuction(){}

//nullish coalescing operator (??):null undefined  
// let val1;
// val1=5??10
// console.log(val1) //first value is used and if it is not like if it is null or undeffined it use seccond value
// let val1;
// val1=null??10 
//val1=undefined??5??10 after undefined first value assign
// console.log(val1) //first value is used and if it is not like if it is null or undeffined it use seccond value

// terniary operator
// condition?true :false
// const price=100
// price>=80?console.log("true"):console.log("False")

// let num=12
// switch (num){
//     case 1:
//         console.log("Mon")
//         break
//     case 2:
//         console.log("tue")
//         break
//     default:
//         console.log("Default")
// }