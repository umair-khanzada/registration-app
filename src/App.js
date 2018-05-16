import React, { Component } from 'react';
import { connect } from "react-redux";

import { addEvent, removeEvent } from './actions/events';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        <button type="button" onClick={() => this.props.dispatch(addEvent({text:"aded"}))}>click me</button>
        </p>
      </div>
    );
  }
}

export default connect()(App);
