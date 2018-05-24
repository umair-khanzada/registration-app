import React from 'react';

const Login = () => {
  return (
    <div className="login-container">
      {/*TODO: Temporary sign in*/}
      {/*onSignIn function define in index.html*/}
      <div className="g-signin2" data-onsuccess="onSignIn" data-theme="dark"/>
    </div>
  )
};

export default Login;