import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => {
  console.log("props: ", props);
  return (
    <div className={props.className}>
      <div className="card">
        <div className="card-header">
          <small className="pull-left">
            <i className="far fa-calendar-alt" />
            24 Jul 2018
          </small>
          <small className="pull-right">
            <i className="fas fa-heart" />
            {/*<i className="far fa-heart" />*/}
            <span className="m-r-5"> | </span>
            <i className="fas fa-users" />
            10
          </small>
        </div>
        <img src="http://cs.pes.edu/wp-content/uploads/2016/06/default-2.jpg" alt="Avatar" style={{width:'100%'}} />
        <div className="card-info">
          <h6>
            <i className="fas fa-user" />
            <b>John Doe</b>
          </h6>
          <h4>{props.event.name}</h4>
        </div>
      </div>
    </div>
  )
};

Card.propTypes = {
  className: PropTypes.string,
};


Card.defaultProps = {
  className: 'col-sm-4 col-md-3'
};

export default Card;