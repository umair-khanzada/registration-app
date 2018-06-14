import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

// custom components.
import AvatarGroup from './AvatarGroup';

const {email, _id: {$oid: userId}} = JSON.parse(localStorage.getItem('user'));

//TODO: Enhancement, use same component for event details.
const Card = (props) => {
  const {event, isDetail} = props;
  console.log("event", event)

  const isAttend = () => {
    if(
        event.attendees.includes(userId) || event.trainers.includes(userId) ||
        event.organizers.includes(userId) || event.invites.includes(email)
      ){
        return 's';
      } else {
        return 'r';
      }
  }

  return (
    <div className={props.className}>
      <div className="card">
        <div className="card-header">
          <small className="pull-left">
            <i className="far fa-calendar-alt" />
            {moment(event.startDate).format("DD MMM YYYY")}
          </small>
          <small className="pull-right">
            <i className={`fa${isAttend()} fa-heart`} />
            <span className="m-r-5"> | </span>
            <i className="fas fa-users" />
            {event.attendees.length + event.invites.length}
          </small>
        </div>
        <img src="http://cs.pes.edu/wp-content/uploads/2016/06/default-2.jpg" alt="Avatar" style={{width:'100%'}} />
        <div className="card-info">
          <h6>
            <i className="fas fa-map-marker" />
            <b>{event.venue}</b>
          </h6>
          <h4>{event.name}</h4>
          {
            isDetail &&
              <div>
                <div className="description">{event.description}</div>
                <hr/>
                <div className="row m-b-5">
                  <div className="col-sm-6 col-md-9 tag-list">
                    {/*TODO: made tag-list separate component if need to use anywhere else*/}
                    {event.tags.map((tag, i) => <span key={i}><span className="react-tagsinput-tag">{tag}</span></span>)}
                  </div>
                  <div className="col-sm-6 col-md-3">
                    {/*<AvatarGroup />*/}
                  </div>
                </div>
              </div>
          }
        </div>
      </div>
    </div>
  )
};

Card.propTypes = {
  event: PropTypes.object.isRequired,
  className: PropTypes.string
};

Card.defaultProps = {
  className: 'col-sm-4 col-md-3'
};

export default Card;
