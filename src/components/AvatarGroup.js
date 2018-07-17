import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

//custom components.
import Avatar from './Avatar';

//constants.
//import { GET_DETAIL } from '../constants/global';

const AvatarGroup = ({users, members, size, max}) => {
  let avatarUsers = users.filter(user => members.includes(user._id.$oid));
  if(avatarUsers.length > max) avatarUsers = [...avatarUsers.slice(0, max), {name: `${avatarUsers.length - max}+`}];
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
  size: PropTypes.oneOf(['sm', 'md']),
  max: PropTypes.number
};


AvatarGroup.defaultProps = {
  size: 'sm',
  max: 9
};

export default connect((state) => {
  return state.users;
})(AvatarGroup);