import React from 'react'

import '../CSS/Blog.css';

function Blog() {
  const [blog1, setBlog1] = useState(true)
  const [blog2, setBlog2] = useState(false)
  const [blog3, setBlog3] = useState(false)
  const [blog4, setBlog4] = useState(false)
  const [blog5, setBlog5] = useState(false)
  const [blog6, setBlog6] = useState(false)


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