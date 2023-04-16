// const jwt = require('jsonwebtoken');
// const secret = 'kunikasharma';

// async function createJwt(payload) {
//   try {
//     const token = await jwt.sign(payload, secret);
//     return token;
//   } catch (error) {
//     console.error('Error creating JWT:', error);
//     throw error;
//   }
// }


// const payload = { userId: '1234567890', username: 'johndoe' };
// createJwt(payload)
//   .then(token => console.log('Created JWT:', token))
//   .catch(error => console.error('Failed to create JWT:', error));


const secret = "ABC";
import { sign, verify } from 'jsonwebtoken';


//Define the API endpoint and payload
const endpoint = 'https://jsonplaceholder.typicode.com/posts/1/comments';
const now = new Date();
const secondsSinceEpoch = Math.round(now.getTime() / 1000);

const payload = {
  id: '1',
  email: 'Jayne_Kuhic@sydney.com',
  iat : secondsSinceEpoch,
  date : now
  
};

// Fetch the API and retrieve the response data
// fetch(endpoint, {
//   method: 'POST',
//   body: JSON.stringify(payload),
//   headers: { 'Content-Type': 'application/json' }
// })
//   .then(response => response.json())
//   .then(data => {
//     // Create a JWT using the response data
//     const token = jwt.sign(payload , secret,{expiresIn:"5m"}, function(err,token){
//       if(err){
//         console.log("Error",err);
//       }else{
//         console.log("Token :", token)
//       }
//     });
    
//   })
  // .catch(error => console.error(error));

//__________________________________________________________using async await_______________________________

const fetch_data = async() => {
  try{
    const data1 = await fetch(endpoint, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json' }
    })
    
    data1 = sign(payload , secret,{expiresIn:"5m", algorithm:"HS256"}, function(err,token){
          if(err){
            console.log("Error",err);
          }else{
            console.log("Token :", token)
            const decoded = verify(token, secret);
            console.log(decoded);
          }
        })
      }

      catch(error){
        console.log(error);
      }
    }

//       ________________________________________________________using promises_______________________________________
//       .then(response => response.json())
//       .then(data => {
//         // Create a JWT using the response data
//         const token = jwt.sign(payload , secret,{expiresIn:"5m", algorithm:"HS256"}, function(err,token){
//           if(err){
//             console.log("Error",err);
//           }else{
//             console.log("Token :", token)
//           }
//         });
//       })
// }
//   catch(error){
//     console.log(error);
//   }
// }

fetch_data();

// const token1 = token;
// try {
//   const decoded = jwt.verify(token1, secret);
//   console.log(decoded);
// } catch (err) {
//   console.log(err);
// }
