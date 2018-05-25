import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Route, withRouter} from 'react-router-dom';

//custom component.
import Card from './components/Card'
import Navbar from './components/Navbar'
import AddEvent from './components/AddEvent'

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
            <Route exact path="/" component={Card}/>
            <Route path="/add-event" component={AddEvent}/>
          </div>
        </div>
      </div>
    );
  }
}


export default withRouter(connect((state) => {
  return state;
})(App));
