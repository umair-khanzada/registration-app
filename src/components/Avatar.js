import React from 'react';
import PropTypes from 'prop-types';

const Avatar = (props) => {
  return(
    <a href="javascript:" title={props.title} className="avatar">
      {
        props.image ?
          <img src={props.image} className={props.size} alt="#"/> :
          <span className={props.size}>{props.title[0]}</span>
      }
    </a>
  )
};

Avatar.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md'])
};


Avatar.defaultProps = {
  size: 'md'
};

export default Avatar;