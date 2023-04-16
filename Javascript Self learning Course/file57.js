// map method 
 const numbers = [3,4,6,1,8];


// Function definition

// // const square = function(number){
// //     return number*number;
// // }
// const squarenumber = numbers.map(square);
// console.log(squarenumber);


// Function Expression

// const squareNumber = numbers.map(function(number)
// {
//     return number*number;
// });
// console.log(squareNumber);

// Arrow Functions

const squareNumber = numbers.map((number, index)=>{
    return index;
});
console.log(squareNumber);



const users = [
    {firstName: "harshit", age: 23},
    {firstName: "mohit", age: 21},
    {firstName: "nitish", age: 22},
    {firstName: "garima", age: 20},
]

const userNames = users.map((user)=>{
    return user.firstName;
});

console.log(userNames);