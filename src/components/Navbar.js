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
            <h1>
              Home
            </h1>
          </NavLink>
        </li> 
        <li className="nav-item">
          <NavLink
            to="/aboutme"
            className="nav-link"
            activeClassName="active"
          >
            <h1>
              About Me
            </h1>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="skill"
            className="nav-link"
            activeClassName="active"
          >
            <hi>
              Skills
            </hi>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/experience"
            className="nav-link"
            activeClassName="active"
          >
            <h1>
              Experience
            </h1>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/technical"
            className="nav-link"
            activeClassName="active"
          >
            <h1>
              Technical
            </h1>
          </NavLink>
        </li>
        
      </ul>
    </>
  )
}

export default Navbar;