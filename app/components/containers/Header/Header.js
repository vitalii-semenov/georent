import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import Button from "../../elements/Button";

class Header extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="header">
        <div className="nav-bar">
          <Link className="router-link" to="/">
            Home
          </Link>
          <Link className="router-link" to="/signup">
            Sign Up
          </Link>
          <button className="btn-violet">Signup</button>
          <button className="btn-transparent">Signup</button>
          <button className="btn-search" />


        </div>
      </div>
    );
  }
}

export default Header;
