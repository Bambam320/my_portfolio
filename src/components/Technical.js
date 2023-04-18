import React from 'react'

import '../CSS/Technical.css';

function Technical() {
  return (
    <>
      <div>Technical</div>
      <div id='algoJavascriptRuby' className="algo-item algo-item3">
        <div className="algo-title-box">
            <p>Javascript <span>&</span> <span>Ruby</span></p>
            <p>2 Min</p>
        </div>
        <div className="algo-iframe-wrapper">
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/uy5zOUKYgyo"
            title="Palindrome"
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture"
            allowFullScreen="allowfullscreen"
            ></iframe>
        </div>
      </div>
    </>
  )
}

export default Technical