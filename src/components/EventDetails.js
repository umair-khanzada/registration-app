import React, { Component } from 'react';
import { connect } from 'react-redux';

//custom component.
import Card from './Card';
import NotFound from './NotFound';

class EventDetails extends Component {
  render() {
    const { events, match: {params: {id}} } = this.props;
    const event = events.find(e => e._id.$oid == id);
    return (
      <div>
        {/*TODO: temporary condition, also check if not exists in redux store get event from DB.*/}
        {events.length && <Card event={event} className="col-sm-9" isDetail/>}
        {/*<NotFound name="Events" visible={true}/>*/}
      </div>
    );
  }
}

export default connect((state) => {
  return state.events;
})(EventDetails);
