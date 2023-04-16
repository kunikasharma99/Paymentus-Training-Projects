import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export class Success extends Component {
  render() {
    return (
        <MuiThemeProvider>
        <>

        <AppBar title="Success" /> 
        <h1>Successfully Submitted!</h1>
        <h2>Thank You.</h2>
        <p>Further instructions would be intimated via the submitted email.</p>
        
        </>
        </MuiThemeProvider>
    );
  }
}


export default Success;


