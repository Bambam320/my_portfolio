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
        <div className='skills-box'>
          <h1 className='skills-title'>Frontend</h1>
          <div className='skills-content'>
            <div id="ReactSkill" className='skills-item'>
              <img src={ReactImg} alt="React" />
              <h2>React JS</h2>
              <p>My preferred framework</p>
            </div>
            <div id="ReactSkill" className="skill-separator"></div>
            <div id="ReduxSkill" className="skills-item">
              <img src={ReduxImg} alt="Redux" />
              <h2>Redux</h2>
              <p>Redux Description</p>
            </div>
            <div id="ReduxSkill" className="skillSeparator"></div>
            <div id="JavascriptSkill" className="skills-item">
              <img src={JavascriptImg} alt="Javascript" />
              <h2>Javascript</h2>
              <p>JS Description</p>
            </div>
            <div id="JavascriptSkill" className="skillSeparator hiddenSkillSeparator"></div>
            <div id="CSSSkill" className="skills-item responsiveSkillsItem1">
              <img src={CSSImg} alt="CSS" />
              <h2>CSS</h2>
              <p>CSS description</p>
            </div>
            <div id="CSSSkill" className="skillSeparator responsiveSkillsItem2"></div>
            <div id="HTMLSkill" className="skills-item responsiveSkillsItem3">
              <img src={HTMLImg} alt="HTML" />
              <h2>HTML</h2>
              <p>HTML description</p>
            </div>
          </div>
        </div>
        <div className="skills-box">
          <h1 className="skills-title">Backend</h1>
          <div className="skills-content">
              <div id="RubySkill" className="skills-item">
                <img src={RubyImg} alt="Ruby" />
                <h2>Ruby</h2>
                <p>Ruby description</p>
              </div>
              <div id="RubySkill" className="skillSeparator"></div>
              <div id="RailsSkill" className="skills-item">
                <img src={RailsImg} alt="Rails" />
                <h2>Rails</h2>
                <p>Rails description</p>
              </div>
              <div id="RailsSkill" className="skillSeparator"></div>
              <div id="PostgreSQLSkill" className="skills-item">
                <img src={PostgreSQLImg} alt="PostgreSQL" />
                <h2>PostgreSQL</h2>
                <p>PostgreSQL description</p>
              </div>
              <div id="PostgreSQLSkill" className="skillSeparator hiddenSkillSeparator"></div>
              <div id="SQLSkill" className="skills-item responsiveSkillsItem1">
                <img src={SQLImg} alt="SQL" />
                <h2>SQL</h2>
                <p>SQL description</p>
              </div>
              <div id="VSCodeSkill" className="skillSeparator responsiveSkillsItem2"></div>
              <div id="VSCodeSkill" className="skills-item responsiveSkillsItem3">
                <img src={VSCodeImg} alt="VSCode" />
                <h2>VSCode</h2>
                <p>VSCode description</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Skill;