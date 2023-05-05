import React, { useState } from 'react'

import '../CSS/Blog.css';

function Blog() {
  const [blog1, setBlog1] = useState(true)
  const [blog2, setBlog2] = useState(false)
  const [blog3, setBlog3] = useState(false)
  const [blog4, setBlog4] = useState(false)
  const [blog5, setBlog5] = useState(false)
  const [blog6, setBlog6] = useState(false)

  const setBlogsToFalse = (blogId) => {
    // add state in an array format to hit true for the blog being set
    setBlog1(false)
    setBlog2(false)
    setBlog3(false)
    setBlog4(false)
    setBlog5(false)
    setBlog6(false)

  }

  return (
    <div className="blogs-container">
      <h1 className="blog-header" >
        <span>B</span>
        <span>l</span>
        <span>o</span>
        <span>g</span>
        <span>s</span>&nbsp
        <span>P</span>
        <span>o</span>
        <span>s</span>
        <span>t</span>
        <span>s</span>
      </h1>
      <p className="blog-description">Blogs I've written about interesting topics.</p>
      <div className="blog-wrapper">
        <input type="radio" name="slider" id="blog-item-1" defaultChecked/>
        <input type="radio" name="slider" id="blog-item-2"/>
        <input type="radio" name="slider" id="blog-item-3"/>
        <div className="blog-cards">
          <label style={blog1 ? {cursor: 'inherit'} : {cursor: "pointer"}} className="blog-card" htmlFor="blog-item-1" id="blog-slide-1" onClick={() => handleBlog1()}>
            <div className="blog-content">
              <img className='blog-image' src={ReactBanner} alt="React Banner" />
              <div className="blog-text-content">
                <h1 className='blog-title'><a style={blog1 ? null : {pointerEvents: "none"}} href='url of blog' target="_blank" rel="noreferrer">Name of blog</a></h1>
                <div className="blog-start-wrap">
                  <p className='blog-start'> Start blog summary<span id='blogStartResponsive'> End blog summary</span>...&nbsp; <a style={blog1 ? null : {pointerEvents: "none"}} href='URL of blog' target="_blank" rel="noreferrer">Read More</a></p>
                </div>
              </div>
              <div className="blog-facts">
                <h4 className="blog-date">Date</h4>
                <h2 className="blog-read">Length of reading time</h2>
                <div className="blog-likes">
                  <img src={MediumClap} alt="Claps" />
                  <p>Add like count here</p>
                </div>
              </div>
            </div>
          </label>
          <label style={blog2 ? {cursor: 'inherit'} : {cursor: "pointer"}} className="blog-card" htmlFor="blog-item-2" id="blog-slide-2" onClick={() => handleBlog2()}>
            <div className="blog-content">
              <img className='blog-image' src={image here} alt="Image Here" />
              <div className="blog-text-content">
                <h1 className='blog-title'><a style={blog2 ? null : {pointerEvents: "none"}} href='url of blog' target="_blank" rel="noreferrer">Name of blog</a></h1>
                <div className="blog-start-wrap">
                  <p className='blog-start'> Start blog summary<span id='blogStartResponsive'> End blog summary</span>...&nbsp; <a style={blog2 ? null : {pointerEvents: "none"}} href='URL of blog' target="_blank" rel="noreferrer">Read More</a></p>
                </div>
              </div>
              <div className="blog-facts">
                <h4 className="blog-date">Date</h4>
                <h2 className="blog-read">Length of reading time</h2>
                <div className="blog-likes">
                  <img src={MediumClap} alt="Claps" />
                  <p>Add like count here</p>
                </div>
              </div>
            </div>
          </label>
          <label style={blog3 ? {cursor: 'inherit'} : {cursor: "pointer"}} className="blog-card" htmlFor="blog-item-3" id="blog-slide-3" onClick={() => handleBlog3()}>
            <div className="blog-content">
              <img className='blog-image' src={image here} alt="Image Here" />
              <div className="blog-text-content">
                <h1 className='blog-title'><a style={blog3 ? null : {pointerEvents: "none"}} href='url of blog' target="_blank" rel="noreferrer">Name of blog</a></h1>
                <div className="blog-start-wrap">
                  <p className='blog-start'> Start blog summary<span id='blogStartResponsive'> End blog summary</span>...&nbsp; <a style={blog3 ? null : {pointerEvents: "none"}} href='URL of blog' target="_blank" rel="noreferrer">Read More</a></p>
                </div>
              </div>
              <div className="blog-facts">
                <h4 className="blog-date">Date</h4>
                <h2 className="blog-read">Length of reading time</h2>
                <div className="blog-likes">
                  <img src={MediumClap} alt="Claps" />
                  <p>Add like count here</p>
                </div>
              </div>
            </div>
          </label>
          <label style={blog4 ? {cursor: 'inherit'} : {cursor: "pointer"}} className="blog-card" htmlFor="blog-item-4" id="blog-slide-4" onClick={() => handleBlog4()}>
            <div className="blog-content">
              <img className='blog-image' src={image here} alt="Image Here" />
              <div className="blog-text-content">
                <h1 className='blog-title'><a style={blog4 ? null : {pointerEvents: "none"}} href='url of blog' target="_blank" rel="noreferrer">Name of blog</a></h1>
                <div className="blog-start-wrap">
                  <p className='blog-start'> Start blog summary<span id='blogStartResponsive'> End blog summary</span>...&nbsp; <a style={blog4 ? null : {pointerEvents: "none"}} href='URL of blog' target="_blank" rel="noreferrer">Read More</a></p>
                </div>
              </div>
              <div className="blog-facts">
                <h4 className="blog-date">Date</h4>
                <h2 className="blog-read">Length of reading time</h2>
                <div className="blog-likes">
                  <img src={MediumClap} alt="Claps" />
                  <p>Add like count here</p>
                </div>
              </div>
            </div>
          </label>
          <label style={blog5 ? {cursor: 'inherit'} : {cursor: "pointer"}} className="blog-card" htmlFor="blog-item-5" id="blog-slide-5" onClick={() => handleBlog5()}>
            <div className="blog-content">
              <img className='blog-image' src={image here} alt="Image Here" />
              <div className="blog-text-content">
                <h1 className='blog-title'><a style={blog5 ? null : {pointerEvents: "none"}} href='url of blog' target="_blank" rel="noreferrer">Name of blog</a></h1>
                <div className="blog-start-wrap">
                  <p className='blog-start'> Start blog summary<span id='blogStartResponsive'> End blog summary</span>...&nbsp; <a style={blog5 ? null : {pointerEvents: "none"}} href='URL of blog' target="_blank" rel="noreferrer">Read More</a></p>
                </div>
              </div>
              <div className="blog-facts">
                <h4 className="blog-date">Date</h4>
                <h2 className="blog-read">Length of reading time</h2>
                <div className="blog-likes">
                  <img src={MediumClap} alt="Claps" />
                  <p>Add like count here</p>
                </div>
              </div>
            </div>
          </label>
          <label style={blog6 ? {cursor: 'inherit'} : {cursor: "pointer"}} className="blog-card" htmlFor="blog-item-6" id="blog-slide-6" onClick={() => handleBlog6()}>
            <div className="blog-content">
              <img className='blog-image' src={image here} alt="Image Here" />
              <div className="blog-text-content">
                <h1 className='blog-title'><a style={blog6 ? null : {pointerEvents: "none"}} href='url of blog' target="_blank" rel="noreferrer">Name of blog</a></h1>
                <div className="blog-start-wrap">
                  <p className='blog-start'> Start blog summary<span id='blogStartResponsive'> End blog summary</span>...&nbsp; <a style={blog6 ? null : {pointerEvents: "none"}} href='URL of blog' target="_blank" rel="noreferrer">Read More</a></p>
                </div>
              </div>
              <div className="blog-facts">
                <h4 className="blog-date">Date</h4>
                <h2 className="blog-read">Length of reading time</h2>
                <div className="blog-likes">
                  <img src={MediumClap} alt="Claps" />
                  <p>Add like count here</p>
                </div>
              </div>
            </div>
          </label>
        </div>
      </div>
    </div>
  )
}

export default Blog