import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <header id="header">
        <ul id="headerButtons">
          <li className="navButton">
            <Link to="#home">Home</Link>
          </li>
        </ul>
      </header>
    )
  }
}
export default NavBar;
