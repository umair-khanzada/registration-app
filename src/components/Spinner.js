import React from 'react';
import PropTypes from "prop-types";

const Spinner = (props) => {
  const { size: fontSize, color, visible } = props;
  return(
    visible ?
    <div className={`text-${props.align}`}>
      <i className="fas fa-spinner fa-spin" style={{fontSize, color}}/>
    </div> : null
  )
};

Spinner.propTypes = {
  align: PropTypes.oneOf(['left', 'center', 'right']),
  size: PropTypes.number,
  color: PropTypes.string,
  visible: PropTypes.bool.isRequired
};

Spinner.defaultProps = {
  align: 'center',
  size: 18,
  color: '#72d6ba'
};

export default Spinner;