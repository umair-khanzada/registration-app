import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Route, Link} from 'react-router-dom';

//custom component.
import Card from './components/Card'
import Navbar from './components/Navbar'

//actions.
import { getEvents, createEvent } from './actions/events';

//styles.
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(getEvents())
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container bodyContainer">
          <div className="row">
            {/*<button type="button" onClick={() => this.props.dispatch(getEvent())}>click me</button>*/}
            {
              [1,2,3,4,5,6,7,8,9,9,9,9]
                .map(() => <Card className="col-sm-4 col-md-3"/>)
            }
          </div>
        </div>
      </div>
    );
  }
}

export default connect((state) => {
  return state;
})(App);
