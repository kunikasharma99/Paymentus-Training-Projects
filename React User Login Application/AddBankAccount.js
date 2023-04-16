import React, {useState} from 'react'
import './AddBankAccount.css'
import SearchBar from './SearchBar';
import Credentials from './Credentials';

function AddBankAccount({setOpenModal}) {

  const [modalOpen, setModalOpen] = useState(false);
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
          <h2>Search Bank Name</h2>
          <h5>Select your institution</h5 >
        </div>
        <div className="body">
          <SearchBar />
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button 
          className="openModalBtn"
          onClick={() => {
            setModalOpen(true);
          }}>Proceed</button>  
            {modalOpen && <Credentials setOpenModal={setModalOpen} />}

      
        </div>
      </div>
    </div>
  )
}

export default AddBankAccount;
