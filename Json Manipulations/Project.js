//1. Validate that the JSON is in a valid format
//2. Validate row count = number of records in CustomerEnrollmentDetail array
//3. Validate that the CustomerEnrollmentDetail.Country field can only be US or CA if file name has the term "DOM"
//4. Validate that the process date is today's date
//5. Validate that the length of CustomerEnrollmentDetail.AccountNumber and CustomerEnrollmentDetail.PlanNumber = 10

import jsonData from "./DOM_data.json"  assert{type:'json'};
console.log(jsonData);
const {CustomerEnrollmentHeader, CustomerEnrollmentDetail} = jsonData;
const[{FileName}] = CustomerEnrollmentHeader;
//1.
// const Validate_file = () =>{
//     const pattern = ("^(?=.*[a-z])(?=.*[A-Z])");
// if(jsonData.CustomerEnrollmentHeader[0].FileName.match(pattern))
// {
//     return true;
// }
// else{
//     return false;
// }
// }

const Validate_file = ()=>
{
    const pattern = ("^(?=.*[a-z])(?=.*[A-Z])");
    if(Array.isArray(CustomerEnrollmentHeader))
    {
        if(FileName.match(pattern))
        {
            return true;
        }
      return false;
    }
}
// const res =Validate_file();
// console.log(res);

// //2.
// const Validate_Rows = () =>{

//     if(jsonData.CustomerEnrollmentHeader[0].TotRowCount === jsonData.CustomerEnrollmentDetail.length)
//     {
       
//         return true;
// }
//     else
//     {
//      return false;  
//     }
// }
// //console.log(Validate_Rows());

const Validate_Rows =() =>
{
    const[{TotRowCount}] = CustomerEnrollmentHeader;
    if(Array.isArray(CustomerEnrollmentHeader))
    {
        if(Array.isArray(CustomerEnrollmentDetail))
        {
            if(TotRowCount !== CustomerEnrollmentDetail.length)
            {
                return false;
                
            }
            return true;
        }
    }

}
// const res = Validate_Rows();
// console.log(res);

// //3.
// const Validate_Country =() =>{
// for(let i in jsonData.CustomerEnrollmentDetail)
//    {
//     if((jsonData.CustomerEnrollmentDetail[i]["Country"]==="US" || jsonData.CustomerEnrollmentDetail[i]["Country"]==="CA") && jsonData.CustomerEnrollmentHeader[0].FileName.includes("DOM") )
//     {
//         return true;
//     }
//     else{
//         return false;
//     }
//    } 
// }

// //console.log(Validate_Country());

const Validate_Country = () =>
{
    if(FileName.includes("DOM")){
        if(Array.isArray(CustomerEnrollmentDetail)) {
        for(let records of CustomerEnrollmentDetail){
            if(records.Country !== "US" && records.Country !== "CA")
        {
            return false;
        }
      }
      
      
}
    }
    return true;
}
// const res = Validate_Country();
// console.log(res); 


// //4.
// const date = new Date();
// let day = date.getDate();
// let month = date.getMonth() + 1;
// let year = date.getFullYear();
// let currentDate = `${day}-${month}-${year}`;

// const Validate_date = () =>{
//     if(currentDate === jsonData.CustomerEnrollmentHeader[0].ProcessDate )
//     {
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// //console.log(Validate_date());
// // console.log(jsonData.CustomerEnrollmentHeader[0].ProcessDate)
// // console.log(currentDate);

const Validate_date =()=>
{
    if(Array.isArray(CustomerEnrollmentHeader))
    {
        const[{ProcessDate}] = CustomerEnrollmentHeader;
        const DateObj = new Date(Date.parse(ProcessDate));

        const day = DateObj.getUTCDate();
        const month = DateObj.getUTCMonth() + 1; // Add 1 because month is zero-indexed
        const year = DateObj.getUTCFullYear();
        const jsonDate = (`${day}-${month}-${year}`); 

        const now = new Date();

        const Now_day = now.getUTCDate();
        const Now_month = now.getUTCMonth() + 1; // Add 1 because month is zero-indexed
        const Now_year = now.getUTCFullYear();

        const currDate = (`${Now_day}-${Now_month}-${Now_year}`); 

        if(jsonDate === currDate)
        {
            return true;
        }
        return false;
    }
    
}
// const res = Validate_date();
// console.log(res);


// //5.
// const Validate_Account_OR_Plan = () =>{
//     for(let i in jsonData.CustomerEnrollmentDetail){
//     if(jsonData.CustomerEnrollmentDetail[i]["AccountNumber"].length || jsonData.CustomerEnrollmentDetail[i]["PlanNumber"].length === 10)
//     {
//       return true;
//     }
//     else
//     {
//        return false;
//     }
// }
// }
// //console.log(Validate_Account_OR_Plan());

const Validate_Account_OR_Plan = () =>
{
    for(let detail of CustomerEnrollmentDetail)
    {
        const[{AccountNumber}] = detail.CustomerEnrollmentDetail;
        const[{PlanNumber}] = detail.CustomerEnrollmentDetail;
        if(AccountNumber)
        {
            if(PlanNumber)
            {
                if(AccountNumber.length !== 10 || PlanNumber.length !== 10) return false;
            }
            else 
            {
                if(AccountNumber.length !== 10) return false;
            }
        }
        else{
            if(PlanNumber){
                if(PlanNumber.length !== 10) return false;
            } else {
                return false;
            }
    }
}
return true;
}
// const res = Validate_Account_OR_Plan();
// console.log(res);

const Prom = new Promise((resolve, reject) =>
{
    if(Validate_file() && Validate_Rows() && Validate_date() && Validate_Country() && Validate_Account_OR_Plan())
    {
        resolve("The file is accepted!");
    }
    else
    {
        reject("Sorry! The file is rejected.")
    }
})

Prom.then(
    (result)=>{
        console.log(result);
    })
    .catch(
        (error)=> {
            console.log(error);
        }
    
)


