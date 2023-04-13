import React from 'react'

import '../CSS/Experience.css';
import { BsBoxArrowUpRight } from 'react-icons/bs';

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
        <div className="port-items">
          <div className="port-item" id='portItem1' onMouseEnter={() => setPort1(true)} onMouseLeave={() => setPort1(false)}>
            <div className="port-gif-box">
              <div className="port-gif-wrapper">
                <img className='port-gif' src={Add Fakeify Gif} alt="Fakeify Gif" style={port1 ? {opacity: "1"} : {opacity: "0"}}/>
                <img className='port-gif port-gif-logo' src={Add Fakeify Logo} alt="Fakeify Logo" style={port1 ? {opacity: "0"} : {opacity: "1"}}/>
              </div>
              <a href='Add render hosted link' target="_blank" rel="noreferrer">
                <div className="portGifPopup">
                  <p>Go to site</p>
                  <BsBoxArrowUpRight id='goToSitePort'/>
                </div>
              </a>
            </div>
            <div className="port-text-box">
              <h1 className="port-title">Fakeify<span>&trade;</span></h1>
              <a className="port-title-site" href='render website for fakeify' target="_blank" rel="noreferrer">www.Fakeify.com</a>
              <p className="port-headline">A spotify clone website that allows users to save songs to their linked Spotify account!</p>
              <div className="port-btn-box">
                <div className='port-btn-more' onClick={() => handleOpenModal(1)}>
                  <span id='port-more-text'>More Details</span>
                  <BsArrowRight id='port-more-arrow'/>
                </div>
              </div>
            </div>
          </div>
          <div className="port-item" id='portItem2' onMouseEnter={() => setPort2(true)} onMouseLeave={() => setPort2(false)}>
            <div className="port-gif-box">
              <div className="port-gif-wrapper">
                <img className='port-gif' src={Your-Vet} alt="Your-Vet Gif" style={port2 ? {opacity: "1"} : {opacity: "0"}}/>
                <img className='port-gif port-gif-logo' src={Your-VetLogo} alt="Your-VetLogo" style={port2 ? {opacity: "0"} : {opacity: "1"}}/>
              </div>
              <a href='Your-vet hosted link' target="_blank" rel="noreferrer">
                <div className="portGifPopup">
                  <p>Go to site</p>
                  <BsBoxArrowUpRight id='goToSitePort'/>
                </div>
              </a>
            </div>
            <div className="port-text-box">
              <h1 className="port-title">Your-Vet<span>&trade;</span></h1>
              <a className="port-title-site" href='your-vet hosted link' target="_blank" rel="noreferrer">www.Your-Vet.com</a>
              <p className="port-headline">Sign in as a pet or a vet to create and check appointments.</p>
              <div className="port-btn-box">
                <div className='port-btn-more' onClick={() => handleOpenModal(2)}>
                  <span id='port-more-text'>More Details</span>
                  <BsArrowRight id='port-more-arrow'/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Experience;