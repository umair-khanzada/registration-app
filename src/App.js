import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Route, withRouter} from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from './config';
import { DB_KEY } from './credentials';

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
  componentDidMount() {
    this.updateOrInsertUser();
  }

  updateOrInsertUser(){
    const user = JSON.parse(localStorage.getItem('user'));
    axios.put(`${BASE_URL}users?q={"email":"${user.email}"}&u=true&apiKey=${DB_KEY}`, user)
      .then((response) => {
        this.props.dispatch(getEvents());
        this.props.dispatch(getUsers());
      })
      .catch((error) => console.log("error in user", error));
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


export default withRouter(connect(() => ({}))(App));
