import React, { Component } from 'react';
import { connect } from 'react-redux';

//custom component.
import Card from './Card'

class AddEvent extends Component {
  constructor(props){
    super(props);
  }

  render() {
      let events = this.props.events.events;

    return (
        <div>
        {
            events.map((event, i) => <Card event={event} key={i} />)
        }
        </div>
    );
  }
}

export default connect((state) => {
  return state;
})(AddEvent);
