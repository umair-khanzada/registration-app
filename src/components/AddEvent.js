import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LocalForm, Control } from 'react-redux-form';

class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
        <LocalForm>

        <label htmlFor="name">Name:</label>
        <Control.text model=".name" />

        <br />
        <label htmlFor="description">Description:</label>
        <Control.text model=".description" />
      </LocalForm>
    );
  }
}

export default connect((state) => {
  return state;
})(App);
