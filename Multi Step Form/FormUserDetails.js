import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';

export class FormUserDetails extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
      };


  render() {
    const { values, handleChange } = this.props //fetching the details from the User form props
    return (
        <MuiThemeProvider>
        <>

        <AppBar title="Enter User Details" /> 
        <TextField
            hintText= "Enter Your First Name"
            floatingLabelText = "First Name"
            onChange={handleChange('firstName')}
            defaultValue = {values.firstName} //to keep our entered value intact
            />
            <br/>
            <TextField
            hintText= "Enter Your Last Name"
            floatingLabelText = "Last Name"
            onChange={handleChange('lastName')}
            defaultValue = {values.lastName} //to keep our entered value intact
            />
            <br/>
            <TextField
            hintText= "Enter Your Email"
            floatingLabelText = "Email"
            onChange={handleChange('email')}
            defaultValue = {values.email} //to keep our entered value intact
            />
            <br/>
            <button onClick={this.continue} variant="contained">Continue</button>
        </>
        </MuiThemeProvider>
    );
  }
}


export default FormUserDetails;


