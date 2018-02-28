import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton'; 


class App extends Component {
  render() {
    return (

      <MuiThemeProvider>

      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Client-server</h2>
          <RaisedButton label="See Explanation" href="https://github.com/KrakenMare/client-server" />

        </div>




      </div>

      </MuiThemeProvider>

    );
  }
}


export default App;
