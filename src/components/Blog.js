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
        <span>g</span>&nbsp
        <span>P</span>
        <span>o</span>
        <span>s</span>
        <span>t</span>
        <span>s</span>
      </h1>
    </div>
  )
}

export default Blog