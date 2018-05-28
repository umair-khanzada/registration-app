import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
//custom component.
import Avatar from './Avatar';

const user = JSON.parse(localStorage.getItem('user'));

class Navbar extends Component {
  render(){
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
                <li>
                  <NavLink to="/" exact>Home</NavLink>
                </li>
                <li>
                  <NavLink to="/add-event">Add Event</NavLink>
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
  }
};

export default Navbar;