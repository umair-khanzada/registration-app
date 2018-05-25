import React, { Component } from 'react';
import { connect } from 'react-redux';

//custom component.
import Card from './Card'
import NotFound from './NotFound'

class AddEvent extends Component {
  constructor(props){
    super(props);
  }

  render() {
      const { events, loaded } = this.props.events;

    return (
        <div>
        {
            events.map((event, i) => <Card event={event} key={i} />)
        }
        {
            loaded && !events.length ? <NotFound /> : null
        }
        </div>
    );
  }
}

export default connect((state) => {
  return state;
})(AddEvent);
