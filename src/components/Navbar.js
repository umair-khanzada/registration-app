import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

//custom component.
import Avatar from './Avatar';

const user = JSON.parse(localStorage.getItem('user'));

//define globally for ignore esLint warning.
/* global gapi */

class Navbar extends Component {
  constructor(props){
    super(props);

    this.signOut = this.signOut.bind(this);
  }

  componentDidMount(){
    //timeout due to gapi loaded after did mount,
    //will be remove ones move auth on server side.
    setTimeout(() => {
      gapi.load('auth2', function() {
        gapi.auth2.init();
      });
    }, 5000);
  }

  signOut(){
    // TODO: temporary, will update when move auth on server.
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut()
      .then(() => {
        console.log('User signed out.');
        localStorage.removeItem('user');
        window.location.href = 'http://localhost:3000';
      });
  }

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
                <li>
                  <a href="javascript:" onClick={this.signOut}>Sign out</a>
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