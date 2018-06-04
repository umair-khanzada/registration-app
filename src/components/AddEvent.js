import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LocalForm, Control, Errors } from 'react-redux-form';
import Tags from './Tags';

// constants.
import { REQUIRED, MIN_LENGTH, ARRAY_LENGTH, REQUIRED_MESSAGE, MIN_LENGTH_MESSAGE, TOUCH_AND_NOT_FOCUS } from '../constants/global';
//actions.
import { createEvent } from '../actions/events';

const OptionList = ({data, label, value, nested}) => {
  return data.map((obj, i) => (
    <option key={i} value={nested ? obj[value].$oid : obj[value]}>
      {obj[label]}
    </option>
  ))
};

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
      organizers: [],
      trainers: [],
      invites: [],
      attendees: []
    }
  }

  createEvent(data) {
    console.log("data", data);
    this.setState({ formSubmit: true });
    this.props.dispatch(createEvent(data));
  }

  render() {
    const {users} = this.props;
    return (
      <div className="col-sm-offset-3 col-sm-6">
        <LocalForm initialState={this.initialEvent} onSubmit={(values) => this.createEvent(values)}>
          <div className="form-group">
            <label>Name</label>
            <Control.text model=".name" className="form-control" validators={{ REQUIRED }} placeholder="Name of the event" />
            <Errors
              model=".name"
              show={TOUCH_AND_NOT_FOCUS}
              messages={REQUIRED_MESSAGE}
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <Control.textarea model=".description" className="form-control" validators={{ REQUIRED, MIN_LENGTH }} placeholder="Describe your event" />
            <Errors
              model=".description"
              show={TOUCH_AND_NOT_FOCUS}
              messages={{...REQUIRED_MESSAGE, ...MIN_LENGTH_MESSAGE}}
            />
          </div>
          <div className="form-group">
            <label>Tags</label>
            {/*mapProps for passing additional props on component*/}
            <Control model=".tags" className="form-control" placeholder="Tags" validators={{ REQUIRED: ARRAY_LENGTH }}
              mapProps={{type: 'string', data: ['html', 'css', 'scss', 'bootstrap']}} component={Tags} />
            <Errors
              model=".tags"
              show={TOUCH_AND_NOT_FOCUS}
              messages={REQUIRED_MESSAGE}
            />
          </div>
          <div className="form-group">
            <label>Venue</label>
            <Control.text model=".venue" className="form-control" validators={{ REQUIRED }} placeholder="Place of the event" />
            <Errors
              model=".venue"
              show={TOUCH_AND_NOT_FOCUS}
              messages={REQUIRED_MESSAGE}
            />
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
            {/*TODO: use Tags for better user experience*/}
            <Control.select model=".organizers" className="form-control" validators={{ REQUIRED: ARRAY_LENGTH }} multiple>
              <OptionList data={users} value="_id" label="name" nested/>
            </Control.select>
            <Errors
              model=".organizers"
              show={TOUCH_AND_NOT_FOCUS}
              messages={REQUIRED_MESSAGE}
            />
          </div>
          <div className="form-group">
            <label>Trainers</label>
            {/*TODO: use Tags for better user experience*/} 
            <Control.select model=".trainers" className="form-control" validators={{ REQUIRED: ARRAY_LENGTH }} multiple>
              <OptionList data={users} value="_id" label="name" nested/>
            </Control.select>
            <Errors
              model=".trainers"
              show={TOUCH_AND_NOT_FOCUS}
              messages={REQUIRED_MESSAGE}
            />
          </div>
          <div className="form-group">
            <label>Invites</label>
            {/*TODO: use Tags for better user experience*/} 
            <Control.select model=".invites" className="form-control" validators={{ REQUIRED: ARRAY_LENGTH }} multiple>
              <OptionList data={users} value="email" label="email"/>
            </Control.select>
            <Errors
              model=".invites"
              show={TOUCH_AND_NOT_FOCUS}
              messages={REQUIRED_MESSAGE}
            />
          </div>        
          <div>
            <button type="submit" className="btn btn-default pull-right" >Submit</button>
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
