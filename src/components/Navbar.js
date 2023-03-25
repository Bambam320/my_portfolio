import React from 'react'
import { NavLink } from 'react-router-dom';


import "../CSS/Navbar.css";

function Navbar() {

  return (
    <>
      <div className={navActive ? "navbar-container navActive" : "navbar-container"}>
      <div className="navbar-top">
        <img src={emblem} alt="IM" onClick={() => handleLogoClick} />
        <h2> Igor Mestechkin </h2>
        <p> Full Stack Developer </p>
      </div>
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
        <li className="nav-item">
          <NavLink
            to="/blog"
            className="nav-link"
            activeClassName="active"
          >
            <h1>
              Blog
            </h1>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/contact"
            className="nav-link"
            activeClassName="active"
            >
            <h1>
              Contact
            </h1>
          </NavLink>
        </li>
      </ul>
      <div className="navbar-bottom">
        <a href="" target="_blank" rel="noopener noreferrer">
          
        </a>
      </div>
            </div>
    </>
  )
}

export default Navbar;