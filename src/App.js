import React, { Component } from 'react';
import {Route} from 'react-router-dom';

//custom component.
import Card from './components/Card'
import Navbar from './components/Navbar'
import AddEvent from './components/AddEvent'

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

export default App;
