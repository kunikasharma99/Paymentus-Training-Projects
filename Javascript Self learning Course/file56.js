//Number*2 using forEach

// const num =[2,4,5,7,8,3];
// num.forEach(function(number)
// {
//     console.log(`${number} *2 = ${number *2}`);
// });


//Real world application : Array of objects

const userss = [
    {Name:"Kunika", age: 22, Gender:"Female"},
    {Name:"Kritika", age:12, Gender:"Female"},
    {Name:"Mohit", age: 32, Gender:"Male"},
    {Name:"Lalit", age:92, Gender:"Male"},

]

// users.forEach(function({Name, age})
// {
//     console.log(Name, age);
// });

//Arrow function

userss.forEach(user =>
    {
        console.log(user.Name);

    });


// important array methods 

 const numbers = [4,2,5,8];

// function myFunc(number, index){
//     console.log(`index is ${index} number is ${number}`);
// }

// numbers.forEach(function(number,index){
//     console.log(`index is ${index} number is ${number}`);
// });

// numbers.forEach(function(number, index){
//     console.log(number*3, index);
// })

const users = [
    {firstName: "harshit", age: 23},
    {firstName: "mohit", age: 21},
    {firstName: "nitish", age: 22},
    {firstName: "garima", age: 20},
]

// users.forEach(function(user){
//     console.log(user.firstName);
// });

// users.forEach((user, index)=>{
//     console.log(user.firstName, index);
// })

// for(let user of users){
//     console.log(user.firstName);
// }
