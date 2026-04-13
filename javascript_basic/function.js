// function addnum(num1,num2){
//     return num1+num2
// }
// result=addnum(5,3)
// console.log(result)

// function userlog(username="sam"){   // sam is default value is it is not provided
//     if(username=='') return `please enter some value`
//     return `${username} is logged in`
// }
// console.log(userlog("Abhay"))/// abhay is log in
// console.log(userlog())// sam is logged in
// console.log(userlog("")) //please enter some value

// function addcartPrice(val1,val2,...num1){   // here ... is rest opreator is also spread opreator it depends on usecase
//                                  // also and in that if we write like that (val1,val2,...num1)--->yape phle ke parameter vo vo asign ho jayege val1or val2 ko and other jo baki he vo num1 array me chale jayega 
    
//     return num1
// }

// console.log(addcartPrice(200,400,300,100))
function handleuser(anyobject){
    console.log(`Username is ${anyobject.user} and price is ${anyobject.price}`)
}
// //object is passing to function
handleuser({
    user:"Abhay",
    price:900
})

const adduser=function(){
    return "Expression function in this we have declare function with variable"
}
console.log(typeof(adduser))
console.log(adduser())
