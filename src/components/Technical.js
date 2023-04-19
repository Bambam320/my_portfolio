import React from 'react'

import '../CSS/Technical.css';

function Technical() {
  return (
    <>
      <div>Technical</div>
      <div id='techJavascriptRuby' className="tech-item tech-item3">
        <div className="tech-title-box">
            <p>Javascript <span>&</span> <span>Ruby</span></p>
            <p>add time length</p>
        </div>
        <div className="tech-iframe-wrapper">
          <iframe 
            width="560" 
            height="315" 
            src="youtube for calc problem"
            title="calculator"
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture" // research these allowances
            allowFullScreen="allowfullscreen"
            ></iframe>
        </div>
      </div>
      <div id='techJavascript' className="tech-item tech-item3">
        <div className="tech-title-box">
            <p>Javascript </p>
            <p>add timelength</p>
        </div>
        <div className="tech-iframe-wrapper">
          <iframe 
            width="560" 
            height="315" 
            src="youtube for recursion problem problem"
            title="calculator"
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture" // research these allowances
            allowFullScreen="allowfullscreen"
            ></iframe>
        </div>
      </div>
    </>
  )
}

export default Technical;