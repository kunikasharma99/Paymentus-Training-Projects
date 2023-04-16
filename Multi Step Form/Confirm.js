import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {List, ListItem} from 'material-ui/List';

export class Confirm extends Component {

    continue = e => {
        e.preventDefault();
        //Process form i.e send data to API or backend Like express, PHP,etc.
        this.props.nextStep();
      };

      back = e => {
        e.preventDefault();
        this.props.prevStep();
      };


  render() {
    const { values: {firstName, lastName, email, occupation, city, bio} } = this.props //fetching the details from the User form props
    return (
        <MuiThemeProvider>
        <>

        <AppBar title="Confirm User Details" /> 
        <List>
            <ListItem
                primaryText="First Name"
                secondaryText={ firstName}
             />
        </List>

        <List>
            <ListItem
                primaryText="Last Name"
                secondaryText={ lastName}
             />
        </List>

        <List>
            <ListItem
                primaryText="Email ID"
                secondaryText={ email}
             />
        </List>

        <List>
            <ListItem
                primaryText="Occupation"
                secondaryText={ occupation}
             />
        </List>

        <List>
            <ListItem
                primaryText="City"
                secondaryText={ city}
             />
        </List>

        <List>
            <ListItem
                primaryText="Bio"
                secondaryText={ bio}
             />
        </List>

            <br/>
            <button onClick={this.continue} variant="contained">Confirm & Continue</button>
            <button onClick={this.back}
        style={{backgroundColor:'transparent'}}
        >Back</button>
        </>
        </MuiThemeProvider>
    );
  }
}


export default Confirm;


