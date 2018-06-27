import React, { Component } from 'react';
import { connect } from 'react-redux';
import history from '../history';

//custom component.
import Card from './Card';
import Spinner from './Spinner';
import NotFound from './NotFound';

class Events extends Component {

  handleCardClick(id){
    history.push(`/event/${id}`);
  }

  render() {
    const { events, loading } = this.props;
    return (
      <div>
        <Spinner visible={loading} size={30}/>
        { events.map((event, i) => <Card event={event} key={i} handleClick={this.handleCardClick}/>) }
        <NotFound name="Events" visible={!events.length && !loading}/>
      </div>
    );
  }
  
}

export default connect((state) => {
  return state.events;
})(Events);
