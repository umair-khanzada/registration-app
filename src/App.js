import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Route, withRouter} from 'react-router-dom';

//custom component.
import Events from './components/Events'
import Navbar from './components/Navbar'
import AddEvent from './components/AddEvent'

//actions.
import { getEvents } from './actions/events';
import { getUsers } from './actions/users';

//styles.
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(getEvents());
    this.props.dispatch(getUsers());
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container bodyContainer">
          <div className="row">
            <Route exact path="/" component={Events}/>
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
