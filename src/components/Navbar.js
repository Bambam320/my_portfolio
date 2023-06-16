import React, { useEffect, useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { BsMedium, BsLinkedin, BsGithub } from 'react-icons/bs';
import emblem from '../Media/Images/Emblem.jpg';
import "../CSS/Navbar.css";
import testing from '.testing.js'

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

  function handleTest () {
    let N = 8
// A utility function to check if i,j are
// valid indexes for N*N chessboard 
function isSafe(x, y, sol) {
  return(x >= 0 && x < N && y >= 0 && y < N && sol[x][y] == -1);
} 
// This function solves the Knight Tour problem
// using Backtracking.  This  function mainly
// uses solveKTUtil() to solve the problem. It
// returns false if no complete tour is possible,
// otherwise return true and prints the tour.
// Please note that there may be more than one
// solutions, this function prints one of the
// feasible solutions.  
function solveKT() {
  let sol = new Array(N);
  for(var i = 0; i < sol.length; i++) {
    sol[i] = new Array(2);
  }
  console.log(sol)
  
  // Initialization of solution matrix 
  for(let x = 0; x < N; x++) {
    for(let y = 0; y < N; y++) {
      sol[x][y] = -1;
    }
  }
  
  // xMove[] and yMove[] define next move of Knight.
  // xMove[] is for next value of x coordinate
  // yMove[] is for next value of y coordinate 
  let xMove = [ 2, 1, -1, -2, -2, -1, 1, 2 ];
  let yMove = [ 1, 2, 2, 1, -1, -2, -2, -1 ];

  // Since the Knight is initially at the first block
  sol[0][0] = 0;

  // Start from 0,0 and explore all tours using
  // solveKTUtil() 
  if (!solveKTUtil(0, 0, 1, sol, xMove, yMove)) {
      console.log("Solution does not exist");
      return false;
  } else {
    console.log(sol);
  }
  return true;
}
  
// A recursive utility function to solve Knight
// Tour problem 
function solveKTUtil(x, y, movei, sol, xMove, yMove) {
  let k, next_x, next_y;
  if (movei == N * N) {
    return true; 
  }
  // Try all next moves from the 
  // current coordinate x, y 
  for(k = 0; k < 8; k++) {
    next_x = x + xMove[k];
    next_y = y + yMove[k]; 
    if (isSafe(next_x, next_y, sol)) {
      sol[next_x][next_y] = movei;
      if (solveKTUtil(next_x, next_y, movei + 1, sol, xMove, yMove)) {
        return true;
      } else {
        sol[next_x][next_y] = -1; // backtracking
      };
    };
  };
  return false;
};
  
// Function Call
solveKT();


// console.log(knights_tour([ 0, 0 ], 6))


// function knights_tour(start, size) {
// // board size
// const board = size * size
// // helper for validator
// const posCheck = (e) => e >= 0 && e < size;
// // validator for x, y indexes for N*N chessboard
// const validPos = (x, y, path) =>  posCheck(x) && posCheck(y) && path[x][y] == -1;
// // creates initial path of starting coordinate argument start and unchecked coordinates
// let path = Array.from({length: board}, (_, i) => i < 1 ? start : [-1, -1]);
// // hard coded movement options for knight
// let options = [[2, 1], [1, 2], [-1, 2], [-2, 1], [-2, -1], [-1, -2], [1, -2], [2, -1]];

// // backtracks the next move recursively to validate the next step
// const pathTracker = (x, y, nextMove, path, options) => {
//   let nextX = 0,
//       nextY = 0;
//   if (nextMove == board) return true;
//   for( let i = 0; i < size; i++ ) {
//     nextX = x + options[i][0];
//     nextY = y + options[i][1];
//     if ( validPos(nextX, nextY, path) ) {
//       path[nextX][nextY] = nextMove;
//       if (pathTracker(nextX, nextY, nextMove + 1, path, options)) return true;
//       else path[nextX][nextY] = -1; // backtracking
//     };
//   };
//   return false;
// };
// 	return pathTracker(start[0], start[1], 1, path, options) ? path : [];
// };
  }

  return (
    <>
      <p className="navbar-toggle" onClick={() => setNavActive(!navActive)}>
        <span className={navActive ? "navbar-line navActive" : "navbar-line"}></span>
        <span className={navActive ? "navbar-line navActive" : "navbar-line"}></span>
        <span className={navActive ? "navbar-line navActive" : "navbar-line"}></span>
        <span className={navActive ? "navbar-line navActive" : "navbar-line"}></span>
      </p>
      <div className={navActive ? "navbar-container navActive" : "navbar-container"}>
        <div className="navbar-left">
          <img src={emblem} alt="IM" onClick={handleLogoClick} />
          {/* <h2> Igor Mestechkin </h2>
          <p> Full Stack Developer </p> */}
          <button onClick={handleTest}>test</button>
        </div>
        <ul className="nav-links">
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