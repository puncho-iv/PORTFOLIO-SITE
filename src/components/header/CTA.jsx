import React from 'react'
import CV3 from '../../assets/CV3.pdf'
import './header.css'

const CTA = () => {
  return (
    <div className='cta'>
        <a href= {CV3} download className='btn'>Download CV</a>
        <a href="#contacts" className='btn btn-primary'>Design Now</a>        
    </div>
  )
}

export default CTA