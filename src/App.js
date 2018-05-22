import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Route, Link} from 'react-router-dom';

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
        <div>
          <Link to="/child1">child1</Link><br />
          <Link to="/child2">child2</Link><br />
          <Link to="/child3">child3</Link><br />
          <Link to="/child4">child4</Link>
        </div>
        <Route path="/child1" render={() => <h1>child1</h1>} />
        <Route path="/child2" render={() => <h1>child2</h1>} />
        <Route path="/child3" render={() => <h1>child3</h1>} />
        <Route path="/child4" render={() => <h1>child4</h1>} />
      </div>
    );
  }
}

export default connect((state) => {
  return state;
})(App);
