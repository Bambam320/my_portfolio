import React, { useState, useEffect } from 'react'

import '../CSS/Skill.css';

function Skill() {
  return (
    <div className='skills-container'>
      <div className='skills-wrapper'>
        <h1 className='skills-header'>
          <span>K</span>
          <span>n</span>
          <span>o</span>
          <span>w</span>
          <span>l</span>
          <span>e</span>
          <span>d</span>
          <span>g</span>
          <span>e</span>&nbsp
          <span>&</span>&nbsp
          <span>C</span>
          <span>a</span>
          <span>p</span>
          <span>a</span>
          <span>b</span>
          <span>i</span>
          <span>l</span>
          <span>i</span>
          <span>t</span>
          <span>i</span>
          <span>e</span>
          <span>s</span>
        </h1>
        <p className='skills-description'>
          <TypeWriterEffect 
            startDelay={1000} 
            cursorColor="white" 
            typeSpeed={35}
            hideCursorAfterText={true}
            text="I'm a lifelong learner whose chosen the perfect career!" 
          /> &nbsp;&nbsp;
          <span id="skills-mobile-second">
            <TypeWriterEffect 
              startDelay={4000} 
              cursorColor="white"
              typeSpeed={35}
              hideCursorAfterText={true}
              text="Proficient and constantly improving in the following technologies."
            />
          </span>
        </p>
      </div>
    </div>
  )
}

export default Skill;