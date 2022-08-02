import React from 'react'
import CTA from './CTA'
import './header.css'
import ME from '../../assets/laptop.png'
import HeaderSocials from './headersocials'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Ebenezer Clottey</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA/>
        <HeaderSocials/>

        <div className="me">
          <img src={ME} alt="me"/>
        </div>

        <a href="#contacts" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header