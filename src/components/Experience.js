import React from 'react'

import '../CSS/Experience.css';


function Experience() {

  const otherData = [
    {id: 1, title: 'Calculator', image: WeatherLogo, github: "github address", link: "link to github io page", largeTitle: false},
  ]

  return (
    <div className='work-container'>
      <Modal open={openModal} setOpenModal={setOpenModal} modalID={modalID}/>
      <div className="port-wrapper">
        <h1 className="port-header">
          <span>M</span>
          <span>y</span>&nbsp;
          <span>P</span>
          <span>o</span>
          <span>r</span>
          <span>t</span>
          <span>f</span>
          <span>o</span>
          <span>l</span>
          <span>i</span>
          <span>o</span>
        </h1>
        <p className="port-description">
          <span>The&nbsp;</span>
          <span>largest&nbsp;</span>
          <span>projects&nbsp;</span>
          <span>I've&nbsp;</span>
          <span>created&nbsp;</span>
          <span>most&nbsp;</span>
          <span>recently.&nbsp;</span>
          <span>Feel&nbsp;</span>
          <span>free&nbsp;</span>
          <span>to&nbsp;</span>
          <span onClick={() => navigate('/contact')}>reach</span>
          <span>&nbsp;out&nbsp;</span>
          <span>for&nbsp;</span>
          <span>a&nbsp;</span>
          <span>code&nbsp;</span>
          <span>walkthrough.&nbsp;</span>
        </p>
      </div>
    </div>
  )

}

export default Experience;