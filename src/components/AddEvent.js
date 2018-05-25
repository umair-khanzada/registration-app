import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LocalForm, Control } from 'react-redux-form';


//actions.
import { createEvent } from './actions/events';

class AddEvent extends Component {
  constructor(props){
    super(props);
  }

  createEvent() {
    // this.props.dispatch(createEvent(data))
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
})(AddEvent);
