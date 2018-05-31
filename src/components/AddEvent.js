import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LocalForm, Control } from 'react-redux-form';

import Tags from './Tags';

//actions.
import { createEvent } from '../actions/events';

class AddEvent extends Component {
  constructor(props){
    super(props);
    this.state = {
      formSubmit: false
    };

    this.initialEvent = {
      startDate: new Date(),
      endDate: new Date(),
      tags: [],
      organizers: []
    }
  }

  createEvent(data) {
    console.log("data", data);
    this.setState({ formSubmit: true })
    // this.props.dispatch(createEvent(data))
  }

  render() {
    const {users} = this.props;
    return (
      <div className="col-sm-offset-3 col-sm-6">
        <LocalForm initialState={this.initialEvent} onSubmit={(values) => this.createEvent(values)}>
          <div className="form-group">
            <label>Name</label>
            <Control.text model=".name" className="form-control" placeholder="Name of the event" />
          </div>
          <div className="form-group">
            <label>Description</label>
            <Control.textarea model=".description" className="form-control" placeholder="Describe your event" />
          </div>
          <div className="form-group">
            <label>Tags</label>
            {/*mapProps for passing additional props on component*/}
            <Control model=".tags" className="form-control" placeholder="Tags" mapProps={{label: 'name', data: [{name: 'umair', _id: '1'}]}} component={Tags} />
          </div>
          <div className="form-group">
            <label>Venue</label>
            <Control.text model=".venue" className="form-control" placeholder="Place of the event" />
          </div>
          <div className="form-group">
            <label>Start date</label>
            <Control type="date" model=".startDate" className="form-control" />
          </div>
          <div className="form-group">
            <label>End date</label>
            <Control type="date" model=".endDate" className="form-control" />
          </div>
          <div className="form-group">
            <label>Organizers</label>
            {/*TODO: change text input into auto-complete*/}
            <Control model=".organizers" className="form-control" placeholder="Organizers" mapProps={{label: 'email', data: users}} component={Tags} />
          </div>
          <div className="form-group">
            <label>Trainers</label>
            {/*TODO: change text input into auto-complete*/}
            <Control.text model=".trainers" className="form-control" placeholder="Trainers" />
          </div>
          <div className="form-group">
            <label>Invites</label>
            <Control.text model=".invites" className="form-control" placeholder="invite friends"/>
          </div>
          <div>
            <button type="submit" className="btn btn-default pull-right" disabled={this.state.formSubmit}>Submit</button>
          </div>
        </LocalForm>
      </div>
    );
  }
}

export default connect((state) => {
  const {users} = state.users;
  return {users};
})(AddEvent);
