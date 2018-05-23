import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Route, Link} from 'react-router-dom';

//custom component.
import Card from './components/Card'

//actions.
import { getEvent } from './actions/events';

//styles.
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="App">
        <div className="container bodyContainer">
          <button type="button" onClick={() => this.props.dispatch(getEvent())}>click me</button>
        </div>
        {
          [1,2,3,4,5,6,7,8,9,9,9,9].map(() => <Card className="col-sm-4 col-md-3"/>)
        }
      </div>
    );
  }
}

export default connect((state) => {
  return state;
})(App);
