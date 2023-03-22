import React from 'react'
import { NavLink } from 'react-router-dom';


import "../CSS/Navbar.css";

function Navbar() {

  return (
    <>
      <ul className="nav-menu">
        <li className="nav-item">
          <NavLink 
            to="/" 
            className="nav-link" 
            activeClassName="active"
          >
            <h1 id="first-Nav-link">
              Home
            </h1>
          </NavLink>
        </li> 
      </ul>
    </>
  )
}

export default Navbar;