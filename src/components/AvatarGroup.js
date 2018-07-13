import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

//custom components.
import Avatar from './Avatar';

//constants.
//import { GET_DETAIL } from '../constants/global';

const AvatarGroup = ({users, members, size}) => {
  const avatarUsers = users.filter(user => members.includes(user._id.$oid));
  return (
    <div className="avatar-group">
      {
        avatarUsers.map(({name, image}, i) => (
          <span key={i} style={{position: 'absolute', left: (i*18)+'px'}}>
            <Avatar title={name} image={image} size={size}/>
          </span>
          )
        )
      }
    </div>
  )
};

AvatarGroup.propTypes = {
  members: PropTypes.arrayOf(PropTypes.string).isRequired,
  size: PropTypes.oneOf(['sm', 'md'])
};


AvatarGroup.defaultProps = {
  size: 'sm'
};

export default connect((state) => {
  return state.users;
})(AvatarGroup);