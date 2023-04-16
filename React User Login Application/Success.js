import React from 'react'
import './Success.css'


function Success({setOpenModal}) {
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
        <h3>Connected to your bank</h3>
    <p>Sync Complete!</p>
        </div>
        
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Close
          </button>

            
                  
        </div>
      </div>
    </div>
      
   
  )
}

export default Success
