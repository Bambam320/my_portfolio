import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import pdfIcon from '../Media/Images/pdfIcon.jpg';
import googleDocIcon from '../Media/Images/googleDocsIcon.png';

import '../CSS/AboutMe.css';

function AboutMe() {
  return (
    <div className="about-container">
      <div className="about-left-box">
        {/* change animation to rotate 360 on y and then backflip */}
        <h1 className="about-left-title">
          <span id="about-W">W</span>
          <span id="about-E">E</span>
          <span id="about-L">L</span>
          <span id="about-C">C</span>
          <span id="about-O">O</span>
          <span id="about-M">M</span>
          <span id="about-Ex2">E</span>
          <span id="about-exclamation">!</span>&nbsp;
          <span id="about-I">I</span>
          <span id="about-apostrophe">'</span>
          <span id="about-Mx2">M</span>&nbsp;
          <span id="about-Ix2">I</span>
          <span id="about-G">G</span>
          <span id="about-Ox2">O</span>
          <span id="about-R">R</span>
          <span id="about-period">.</span>
          <br />
          <span id="about-F">F</span>
          <span id="about-U">U</span>
          <span id="about-Lx2">L</span>
          <span id="about-Lx3">L</span>&nbsp;
          <span id="about-S">S</span>
          <span id="about-T">T</span>
          <span id="about-A">A</span>
          <span id="about-Cx2">C</span>
          <span id="about-K">K</span>&nbsp;
          <span id="about-D">D</span>
          <span id="about-Ex3">E</span>
          <span id="about-V">V</span>
          <span id="about-Ex4">E</span>
          <span id="about-Lx4">L</span>
          <span id="about-Ox3">O</span>
          <span id="about-P">P</span>
          <span id="about-Ex5">E</span>
          <span id="about-Rx2">R</span>
          <br />
          <span id="about-Ax2">A</span>
          <span id="about-N">N</span>
          <span id="about-Dx2">D</span>&nbsp;
          <span id="about-Lx5">L</span>
          <span id="about-Ix2">I</span>
          <span id="about-Fx2">F</span>
          <span id="about-Ex6">E</span>
          <span id="about-Lx6">L</span>
          <span id="about-Ox4">O</span>
          <span id="about-Nx2">N</span>
          <span id="about-Gx2">G</span>&nbsp;
          <span id="about-Lx7">L</span>
          <span id="about-Ex7">E</span>
          <span id="about-Ax3">A</span>
          <span id="about-Rx3">R</span>
          <span id="about-Nx3">N</span>
          <span id="about-Ex8">E</span>
          <span id="about-Rx4">R</span>
          <span id="about-period2">.</span>
        </h1>
        {/* Add true true and console log description with typing animation */}
        <p className='about-left-description'>
          Full Stack Developer && Language Enthusiast
        </p>
        <div className='about-left-button-box'>
          <button 
            onClick={() => navigate('/contact')} 
            className='about-contact-button'
          >
            Contact me!
          </button>
          <div className='about-resume-box'>
            <h2 className='about-resume-title'>My Resume:</h2>
            <div className="about-resume-buttons-wrapper">
              <a
                href="Igor-M-Resume-3-25-22.pdf"
                download
                >
                  <img 
                    className='about-resume-pdf'
                    src={PDF_Icon}
                    alt="Resume_PDF"
                  />
              </a>
              <a
                href=""
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className='about-resume-googleDocs'
                  src={GoogleDocs-Icon}
                  alt="Resume_GoogleDocs"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='about-right-box'>
        <div className='about-right-title'> About Me </div>
        <p className='about-right-description'>
          About me from Linkedin
        </p>
      </div>
    </div>
  )
}

export default AboutMe;