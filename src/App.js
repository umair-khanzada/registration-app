import React, { Component } from 'react';
import { connect } from "react-redux";
import { BrowserRouter as Router } from 'react-router-dom';

import { addEvent, getEvent } from './actions/events';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    console.log("in app.js",this.props)
    return (
       <Router>
        <div className="App">
          <nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand" href="#">WebSiteName</a>
              </div>
              <ul className="nav navbar-nav">
                <li className="active"><a href="#">Home</a></li>
                <li><a href="#">Page 1</a></li>
              </ul>
            </div>
          </nav>
          <div className="container bodyContainer">
              <button type="button" onClick={() => this.props.dispatch(getEvent())}>click me</button>
          </div>
        </div>
       </Router>
    );
  }
}

export default connect((state) => {
  return state;
})(App);
