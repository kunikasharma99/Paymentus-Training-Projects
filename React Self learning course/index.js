import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import FunctionalComponent from './FunctionalComponent';
// import ClassComponent from './ClassComponent';
// import JSX from './JSX';
// import ClickEventAndFunctions from './ClickEventAndFunctions';
// import StateWithClassComponent from './StateWithClassComponent';
// import PropswithClassComponent from './PropswithClassComponent';


import reportWebVitals from './reportWebVitals';
// import StateWithFunctionalComponent from './StateWithFunctionalComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <FunctionalComponent /> */}
    {/* <ClassComponent /> */}
    {/* <App /> */}
    {/* <JSX /> */}
    {/* <ClickEventAndFunctions /> */}
    {/* <StateWithFunctionalComponent/> */}
    {/* <StateWithClassComponent /> */}
    {/* <PropswithClassComponent name="Kunika" work = "Paxcom"/> */}
    <App />
  
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
 