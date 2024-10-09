import React from 'react'
import PopularBlog from './PopularBlog'

function Blog() {
  return (
    <div>
      <div className="div-mainImg">
        <div className="overlay">
          <h1 className="mainFontSize fw-bold text-light">Contact us</h1>
          <h5 className="params">Home / Pages / <span className="text-light">Blog</span> </h5>
        </div>
      </div>
      <PopularBlog/>
    </div>
  )
}

export default Blog
