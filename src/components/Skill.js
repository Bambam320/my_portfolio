import React, { useState, useEffect } from 'react'

import { useInView } from 'react-intersection-observer';

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
            <div id="SQLSkill" className="skillSeparator responsiveSkillsItem2"></div>
            <div id="VSCodeSkill" className="skills-item responsiveSkillsItem3">
              <img src={VSCodeImg} alt="VSCode" />
              <h2>VSCode</h2>
              <p>VSCode description</p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="education-separator"
        ref={edSepRef}
        id={edSepInView ? "education-separator-active" : undefined}
      ></div>
      <div className="education-wrapper">
        <h1
          className="education-header"
          ref={edTitleRef}
          id={edTitle - active ? "certTitle-active" : undefined}
        >   <div className="education-separator" ref={edSepRef} id={edSepInView ? "education-separator-active" : undefined}></div>
            <div className="education-wrapper">
              <h1 className="education-header" ref={edTitleRef} id={edTitleInView ? "certTitle-active" : undefined}>
                <span>E</span>
                <span>d</span>
                <span>u</span>
                <span>c</span>
                <span>a</span>
                <span>t</span>
                <span>i</span>
                <span>o</span>
                <span>n</span>&nbsp;
                <span>a</span>
                <span>n</span>
                <span>d</span>&nbsp;
                <span>C</span>
                <span>e</span>
                <span>r</span>
                <span>t</span>
                <span>i</span>
                <span>f</span>
                <span>i</span>
                <span>c</span>
                <span>a</span>
                <span>t</span>
                <span>i</span>
                <span>o</span>
                <span>n</span>
                <span>s</span>
              </h1>
              <div className="cert-items">
                <div className="flatiron-item" ref={ed1Ref} id={ed1InView ? "cert1-active" : undefined} onMouseEnter={() => setMouse1(true)} onMouseLeave={() => setMouse1(false)}>
                  <div className="flatiron-img-wrapper" onMouseEnter={() => setMouse1(false)} onMouseLeave={() => setMouse1(true)} onClick={() => setCert(!cert)}>
                    <div className="flatiron-images">
                      <img className="flatiron-img" src={FlatironImg} alt="Flatiron" style={cert ? { opacity: "0" } : { opacity: "1" }} />
                      <img className="flatiron-img" src={FlatironCert} alt="Flatiron" style={cert ? { opacity: "1" } : { opacity: "0" }} />
                    </div>
                    <GiClick id={mouse1 ? "flatiron-pointer" : "flatiron-pointer-gone"} />
                    <div className="flatiron-img-hover-box">
                      <h1 style={cert ? { opacity: "1" } : { opacity: "0" }}>Click to hide certificate</h1>
                      <h1 style={cert ? { opacity: "0" } : { opacity: "1" }}>Click to view certificate</h1>
                    </div>
                  </div>
                  <div className="flatiron-text-box">
                    <h3>NYC, New York</h3>
                    <h1>Software Engineering</h1>
                    <h4>FLATIRON SCHOOL</h4>
                    <p>A highly acknowledged Software Engineering trade school and proven leader in tech education.</p>
                    <div className="flatiron-description-box">
                      <p>Some things I did as a student:</p>
                      <ul>
                        <li>Studied coding best practices</li>
                        <li>Collaborated on projects as a team</li>
                        <li>Engaged in pair programming with my peers</li>
                        <li>Learned proper ways to tackle complex problems</li>
                      </ul>
                    </div>
                    <p>Interactice and immersive course in both the Front end and Back end technologies needed to create powerful full stack applications.</p>
                  </div>
                </div>

              </div>
            </div>
            )
}
export default Skill;