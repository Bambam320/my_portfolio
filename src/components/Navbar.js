import React, { useEffect, useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { BsMedium, BsLinkedin, BsGithub } from 'react-icons/bs';
import emblem from '../Media/Images/Emblem.jpg';
import "../CSS/Navbar.css";

function Navbar() {
  const navigate = useNavigate()
  const [navActive, setNavActive] = useState(false)
  
  useEffect(() => {
    let style = document.body.style
    navActive ? 
      style.overflow = 'hidden'
    :
      style.overflow = 'unset'
  }, [navActive])

  const handleLogoClick = () => {
    navigate('/contact')
    deactivateNav()
  }

  const deactivateNav = () => setNavActive(false)

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