import React, { Component } from 'react';
import { connect } from 'react-redux';

//custom component.
import Card from './Card';
import Spinner from './Spinner';
import NotFound from './NotFound';

class Events extends Component {
  render() {
    const { events, loading } = this.props;
    return (
      <div>
        <Spinner visible={loading} size={30}/>
        { events.map((event, i) => <Card event={event} key={i} />) }
        <NotFound name="Events" visible={!events.length && !loading}/>
      </div>
    );
  }
}

export default connect((state) => {
  return state.events;
})(Events);
