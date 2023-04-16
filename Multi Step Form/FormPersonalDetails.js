import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';



export class FormPersonalDetails extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
      };

      back = e => {
        e.preventDefault();
        this.props.prevStep();
      };


  render() {
    const { values, handleChange } = this.props //fetching the details from the User form props
    return (
        <MuiThemeProvider>
        <>
        <AppBar title="Enter Personal Details" /> 
        <TextField
            hintText= "Enter Your Occupation"
            floatingLabelText = "Occupation"
            onChange={handleChange('occupation')}
            defaultValue = {values.occupation} //to keep our entered value intact
            />
            <br/>
            <TextField
            hintText= "Enter Your City"
            floatingLabelText = "City"
            onChange={handleChange('city')}
            defaultValue = {values.city} //to keep our entered value intact
            />
            <br/>
            <TextField
            hintText= "Enter Your Bio"
            floatingLabelText = "Bio"
            onChange={handleChange('bio')}
            defaultValue = {values.bio} //to keep our entered value intact
            />
            <br/>
            
             <button onClick={this.continue}>Continue</button>
        <button onClick={this.back}
        style={{backgroundColor:'transparent'}}
        >Back</button>
        </>
        </MuiThemeProvider>
    );
  }
}


export default FormPersonalDetails;

