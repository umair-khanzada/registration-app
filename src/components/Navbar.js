import React from 'react';

//custom component.
import Avatar from './Avatar';

const user = JSON.parse(localStorage.getItem('user'));

const Navbar = () => {
  return (
    <nav className="navbar navbar-default">
      <div className="container">
        <div className="row">
          <div className="navbar-header">
            <button type="button" data-target="#navbarCollapse" data-toggle="collapse" className="navbar-toggle">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
          </div>
          <div id="navbarCollapse" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li className="active">
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Profile</a>
              </li>
              <li>
                <a href="#">Messages</a>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Avatar title={user.name} image={user.image} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
};

export default Navbar;