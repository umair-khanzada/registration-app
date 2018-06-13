import React from 'react';
import PropTypes from 'prop-types';

const NotFound = ({name, visible}) => {
  return visible && (
    <div className="text-center not-found">
      <h2>Ooops!</h2>
      <h2>404</h2>
      <div>{name} Not Found.</div>
    </div>
  )
};

NotFound.propTypes = {
  name: PropTypes.string,
  visible: PropTypes.bool.isRequired
};

NotFound.defaultProps = {
  name: ''
};

export default NotFound;