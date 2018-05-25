import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LocalForm, Control } from 'react-redux-form';


//actions.
import { createEvent } from '../actions/events';

class AddEvent extends Component {
  constructor(props){
    super(props);
  }

  createEvent() {
    // this.props.dispatch(createEvent(data))
  }

  render() {
    return (
      <div className="col-sm-offset-3 col-sm-6">
        <LocalForm onSubmit={(values) => console.log("values", values)}>
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
            <Control.text model=".tags" className="form-control" placeholder="Tags" />
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
            <Control.text model=".organizers" className="form-control" placeholder="Organizers" />
          </div>
          <div className="form-group">
            <label>Trainers</label>
            {/*TODO: change text input into auto-complete*/}
            <Control.text model=".trainers" className="form-control"  placeholder="Trainers" />
          </div>
          <div className="form-group">
            <label>Invites</label>
            <Control.text model=".invites" className="form-control" placeholder="invite friends"/>
          </div>
          <div>
            <button type="submit" className="btn btn-default pull-right">Submit</button>
          </div>
        </LocalForm>
      </div>
    );
  }
}

export default connect((state) => {
  return state;
})(AddEvent);
