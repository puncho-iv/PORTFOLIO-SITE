import React from 'react'
import CV2 from '../../assets/CV2.pdf'
import './header.css'

const CTA = () => {
  return (
    <div className='cta'>
        <a href= {CV2} download className='btn'>Download CV</a>
        <a href="#contacts" className='btn btn-primary'>Design Now</a>        
    </div>
  )
}

export default CTA