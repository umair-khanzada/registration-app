import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LocalForm, Control, Errors } from 'react-redux-form';
import TimePicker from 'react-times';
import moment from 'moment';
import Tags from './Tags';

import 'react-times/css/material/default.css';
import 'react-times/css/classic/default.css';

// constants.
import { 
  REQUIRED,
  MIN_LENGTH,
  ARRAY_LENGTH,
  REQUIRED_MESSAGE,
  MIN_LENGTH_MESSAGE,
  TOUCH_AND_NOT_FOCUS
} from '../constants/global';

//actions.
import { createEvent } from '../actions/events';

const OptionList = ({data, label, value, nested}) => {
  return data.map((obj, i) => (
    <option key={i} value={nested ? obj[value].$oid : obj[value]}>
      {obj[label[0]]} {label[1] && ` (${obj[label[1]]})`}
    </option>
  ))
};

class AddEvent extends Component {
  constructor(props){
    super(props);

    let time = `${moment().hours()}:${moment().minutes()}`;
    this.initialEvent = {
      timings: [{date: new Date(), start: time, end: time}],
      // endDate: new Date(),
      tags: [],
      organizers: [],
      trainers: [],
      invites: [],
      attendees: [],
      externalInvites: []
    };

    this.state = {
      start: {time, meridiem: 'AM', focused: false},
      end: {time, meridiem: 'AM', focused: false}
    };
  }

  onTimeChange({hour, minute, meridiem, name}) {
    this.setState({[name]: {time: `${hour}:${minute}`, meridiem, focused: true}})
  }

  onFocusChange({status, name}){
    this.setState({[name]: {...this.state[name], focused: status}})
  }

  createEvent(data) {
    /* TODO: convert date into array of date and time object, eg: [{date: '27/07/2018', time: '10:10 am'}]*/
    const {start, end} = this.state,
      time = {startTime: `${start.time} ${start.meridiem}`, endTime: `${end.time} ${end.meridiem}`},
      payload = Object.assign({}, data, time);

    console.log("payload", payload)
    this.props.dispatch(createEvent(payload));
  }

  render() {
    const {users} = this.props,
      {time: startTime, meridiem: startMeridiem, focused: startFocused } = this.state.start,
      {time: endTime, meridiem: endMeridiem, focused: endFocused } = this.state.end;

    // TODO: add status: enum ['open', 'closed', 'pending'], and type: enum ['public', 'private'].
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
          {/*
            TODO: Add button for repeat date and time block,
            TODO: Fix picker open issue,
            TODO: Apply error handling on time eg: (end time must be grater)
          */}
          <div className="form-group">
            <label>Date</label>
            <Control type="date" model=".startDate" className="form-control" />
          </div>
          <div className="form-group inline-element m-r-10">
            <label>Start time</label>
            <TimePicker timeMode="12" key="start" onFocusChange={(status) => {this.onFocusChange({status, name: 'start'})}}
              time={startTime} focused={startFocused} meridiem={startMeridiem}
              onTimeChange={(time) => this.onTimeChange({...time, name: 'start'})} />
            {/*<Control model=".startTime" className="form-control"
              mapProps={{timeMode: '12', onFocusChange: (status) => {this.onFocusChange({status, name: 'start'})}, time: startTime, focused: startFocused, meridiem: startMeridiem, onTimeChange: (time) => this.onTimeChange({...time, name: 'start'})}} component={TimePicker} />*/}
          </div>
          <div className="form-group inline-element m-l-10">
            <label>End time</label>
            <TimePicker timeMode="12" key="end" onFocusChange={(status) => {this.onFocusChange({status, name: 'end'})}}
              time={endTime} focused={endFocused} meridiem={endMeridiem}
              onTimeChange={(time) => this.onTimeChange({...time, name: 'end'})} />
          </div>
          <div className="form-group">
            <label>Organizers</label>
            {/*TODO: use Tags for better user experience*/}
            <Control.select model=".organizers" className="form-control" validators={{ REQUIRED: ARRAY_LENGTH }} multiple>
              <OptionList data={users} value="_id" label={['name']} nested/>
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
              <OptionList data={users} value="_id" label={['name']} nested/>
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
              <OptionList data={users} value="email" label={['name', 'email']}/>
            </Control.select>
            <Errors
              model=".invites"
              show={TOUCH_AND_NOT_FOCUS}
              messages={REQUIRED_MESSAGE}
            />
          </div>
          <div className="form-group">
            <label>External invite email</label>
            {/*TODO: verify email address and show error if not a valid email*/}
            <Control model=".externalInvites" className="form-control" placeholder="External Invites"
              mapProps={{type: 'string', data: ['someone@gmail.com']}} component={Tags} />
            {/*<Errors*/}
              {/*model=".tags"*/}
              {/*show={TOUCH_AND_NOT_FOCUS}*/}
              {/*messages={REQUIRED_MESSAGE}*/}
            {/*/>*/}
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
