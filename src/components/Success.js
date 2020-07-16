import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";

export class Success extends Component {
  //continue function brings in nextStep function as prop

  continue = e => {
    e.preventDefault();
    //TODO: PROCESS DATA HERE
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Confirm User Data" />
          <h1>Thank You For Your Submission</h1>
          <p>We'll get back you shortly</p>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Success;
