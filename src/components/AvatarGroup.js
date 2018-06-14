import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

//custom components.
import Avatar from './Avatar';

//constants.
import { GET_DETAIL } from '../constants/global';

const AvatarGroup = ({users, members, size}) => {
  console.log("users in  ag", users)
  return (
    <div className="avatar-group">
      {members.map(({name, image}, i) => <Avatar key={i} title={name} image={image} size={size}/>)}
    </div>
  )
};

AvatarGroup.propTypes = {
  members: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string
    })
  ).isRequired,
  size: PropTypes.oneOf(['sm', 'md'])
};


AvatarGroup.defaultProps = {
  size: 'sm'
};

export default connect((state) => {
  return state.users;
})(AvatarGroup);