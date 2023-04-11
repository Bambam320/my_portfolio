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
      </div>
    </div>
  )

}

export default Experience;