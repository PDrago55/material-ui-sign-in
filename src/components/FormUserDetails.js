import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export class FormUserDetails extends Component {
  //continue function brings in nextStep function as prop

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    //bring in my values as props
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter Details Here" />
          <TextField
            hintText="First Name Here"
            floatingLabelText="First Name"
            onChange={handleChange("firstName")}
            defaultValue={values.firstName}
          />
          <div></div>
          <TextField
            hintText="Last Name Here"
            floatingLabelText="Last Name"
            onChange={handleChange("lastName")}
            defaultValue={values.lastName}
          />
          <div></div>
          <TextField
            hintText="Email Here"
            floatingLabelText="Email Address"
            onChange={handleChange("email")}
            defaultValue={values.email}
          />
          <div></div>
          <RaisedButton
            label="Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};
export default FormUserDetails;
