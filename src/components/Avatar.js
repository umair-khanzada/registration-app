import React from 'react';
import PropTypes from 'prop-types';

const Avatar = ({title, image, size}) => {
  return(
    <a href="javascript:" title={title} className="avatar">
      {
        image ?
          <img src={image} className={size} alt="#"/> :
          <span className={size}>{title.substr(0, 2)}</span>
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