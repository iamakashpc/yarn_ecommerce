import React from 'react'
import "./NewsLetter.css"
const NewsLetter = () => {
  return (
    <div className='news-letter'>
        <h1>Gets Exclusive Offer In Your Email</h1>
        <p>Subscribe Our NewsLetter & Stay Updated</p>
        <div>
            <input type="email" placeholder='Enter Your Email Here'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter