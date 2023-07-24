import React, { useEffect, useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { BsMedium, BsLinkedin, BsGithub } from 'react-icons/bs';
import emblem from '../Media/Images/Emblem.png';
import "../CSS/Navbar.css";

function Navbar() {
  const navigate = useNavigate()
  const [navActive, setNavActive] = useState(false)

  // set different default font for links

  useEffect(() => {
    let style = document.body.style
    navActive ?
      style.overflow = 'hidden'
      :
      style.overflow = 'unset'
  }, [navActive])

  const handleLogoClick = () => {
    console.log("logo clicked")
    navigate('/contact')
    deactivateNav()
  }

  const deactivateNav = () => setNavActive(false)

 

  return (
    <>
      <p className="navbar-toggle" onClick={() => setNavActive(!navActive)}>
        <span className={navActive ? "navbar-line navActive" : "navbar-line"}></span>
        <span className={navActive ? "navbar-line navActive" : "navbar-line"}></span>
        <span className={navActive ? "navbar-line navActive" : "navbar-line"}></span>
        <span className={navActive ? "navbar-line navActive" : "navbar-line"}></span>
      </p>
      {/* <div className={navActive ? "navbar-container navActive" : "navbar-container"}>
        <div className="navbar-left">
          <img src={emblem} alt="IM" onClick={handleLogoClick} />
          <h2> Full Stack Developer</h2> */}
        </div>
        <ul className="nav-links">
          <li className="nav-item" id="first-nav-item">
            <NavLink
              to="/"
              className="nav-link"
              activeClassName="active"
            >
              <h1>
                About
              </h1>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="skill"
              className="nav-link"
              activeClassName="active"
            >
              <h1>
                Skills
              </h1>
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
        <div className="navbar-right">
          <a href="https://www.linkedin.com/in/igor-mestechkin-519a97109/" target="_blank" rel="noopener noreferrer" >
            <BsLinkedin className='nav-icon' />
          </a>
          <a href="https://github.com/Bambam320" target="_blank" rel="noopener noreferrer" >
            <BsGithub className='nav-icon' />
          </a>
          <a href="https://medium.com/@igor.mestechkin" target="_blank" rel="noopener noreferrer">
            <BsMedium className='nav-icon' />
          </a>
        </div>
      </div>
    </>
  )
}

export default Navbar;