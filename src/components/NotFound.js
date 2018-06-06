import React from 'react';

const NotFound = ({name, visible}) => {
  return visible && (
    <div className="text-center not-found">
      <h2>Ooops!</h2>
      <h2>404</h2>
      <div>{name} Not Found.</div>
    </div>
  )
};
export default NotFound;