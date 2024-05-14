import React from 'react'
import CV from '../../assets/CV.pdf'
import './header.css'

const CTA = () => {
  return (
    <div className='cta'>
        <a href= {CV} download className='btn'>Download CV</a>
        <a href="#contacts" className='btn btn-primary'>Design Now</a>        
    </div>
  )
}

export default CTA