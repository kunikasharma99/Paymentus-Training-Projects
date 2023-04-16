// function singHappyBirthday(){
//     console.log("happy birthday to you ......");
// }

// function sumThreeNumbers(number1, number2, number3){
//     return number1 + number2 + number3;
// }



// isEven
// input : 1 number 
// output : true , false 

// function isEven(number){
//     return number % 2 === 0;
// }

// console.log(isEven(4));

// function 
// input : string 
// output: firstCharacter 

// function firstChar(anyString){
//     return anyString[0];
// }

// console.log(firstChar("zbc"));

// function 
// input : array, target (number)
// output: index of target if target present in array 

// function findTarget(array, target){
//     for(let i = 0; i<array.length; i++){
//         if(array[i]===target){
//             return i;
//         }
//     }
//     return -1;
// }
// const myArray = [1,3,8,90]
// const ans = findTarget(myArray, 4);
// console.log(ans);


//self practice
//Function to add 2 numbers

// function Add( num1 ,  num2){
//     console.log(num1 + num2);

// }

// Add(2,4);


//Take user input 3 numbers and return the sum
// function Sum(num1,num2,num3)
// {
//     return num1+num2+num3;
// }


// let num1 = +prompt("Enter number 1");
// let num2 = +prompt("Enter number 2");
// let num3 = +prompt("Enter number 3");
// console.log(Sum(num1, num2, num3));


//Function to see if user input is even or odd

// function isEven(num1)
// {
//     // if(num1%2===0)
//     // {
//     //     return true;
//     // }
//     // else
//     // {
//     //     return false;
//     // }

//     //OR


//     return num1%2===0 ? true :false;
// }
// const num1 = +prompt("Enter any number");
// console.log(isEven(num1));

//Function returning the first character of the string by user input

// function First_Character (str)
// {
//     return str[0];
// }
// let str = prompt("Enter any string");
// console.log(First_Character(str));

//Function to return target number index from array

function Target_Index(arr, target)
{
    for(let i in arr)
    {
        if(arr[i]===target)
        {
            return i;
        }
        return -1;
    }
}
const arr = [2,3,5,6,7,1,4,8];
let target = +prompt("Enter the target number");
console.log(Target_Index(arr,target));