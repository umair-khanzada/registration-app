import React, { Component } from 'react';
import { connect } from 'react-redux';

//custom component.
import Card from './Card';
import NotFound from './NotFound';

class EventDetails extends Component {
  render() {
    const { events } = this.props;
    return (
      <div>
        {/*TODO: temporary condition, also check if not exists in redux store get event from DB.*/}
        {events.length && <Card event={events[0]} className="col-sm-9" isDetail/>}
        {/*<NotFound name="Events" visible={true}/>*/}
      </div>
    );
  }
}

export default connect((state) => {
  return state.events;
})(EventDetails);
