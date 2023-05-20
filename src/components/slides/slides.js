import React from 'react'
import './slides.css'

const Slides = (props) => {
  return (
    <div id='mainSlide'>
        <img src="image/AssessmentCV.png" />
        <h1 className='sans'>{props.BoxTitle}</h1>
        <p className='sans'>{props.Desc}</p>
        <a className='sans'>مشاهده متخصصین</a>
    </div>
  )
}

export default Slides