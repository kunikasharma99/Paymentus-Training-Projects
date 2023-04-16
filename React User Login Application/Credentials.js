// import React, { useState } from 'react';

// function Credentials() {
//   const [credentials, setCredentials] = useState({ username: '', password: '' });

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setCredentials((prevCredentials) => ({
//       ...prevCredentials,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Validate the login credentials and authenticate the user
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Username:
//         <input type="text" name="username" value={credentials.username} onChange={handleChange} />
//       </label>
//       <label>
//         Password:
//         <input type="password" name="password" value={credentials.password} onChange={handleChange} />
//       </label>
//       <button type="submit">Login</button>
//     </form>
//   );
// }

// export default Credentials;

import React,{useState} from 'react'
import './Credentials.css'
import Success from './Success';


function Credentials({setOpenModal}) {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [modalOpen, setModalOpen] = useState(false);

    const handleChange = (event) => {
      const { name, value } = event.target;
      setCredentials((prevCredentials) => ({
        ...prevCredentials,
        [name]: value,
      }));
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
    };
  
  return (
    
      <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
         id="cancelBtn" >
            X
          </button>
        </div>
        <div className="title">
        <h3>Enter your credentials</h3>
        <form onSubmit={handleSubmit}>
     <label>
         Username:
         <input type="text" name="username" placeholder = "Enter your username" value={credentials.username} onChange={handleChange} />
       </label>
       <label>
         Password:
         <input type="password" name="password" placeholder = "Enter your password" value={credentials.password} onChange={handleChange} />
       </label>
     </form>
        </div>
        
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Back
          </button>
          <button 
          className="openModalBtn"
          onClick={() => {
            setModalOpen(true);
          }}>Submit</button>  
            {modalOpen && <Success setOpenModal={setModalOpen} />}
                  
        </div>
      </div>
    </div>
      
    
  )
}

export default Credentials

