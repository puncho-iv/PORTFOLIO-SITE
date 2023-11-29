import React from 'react'
import './footer.css'
import {BsLinkedin, BsBehance, BsInstagram} from 'react-icons/bs'
import udl from '../../assets/udll.svg'

const Footer = () => {
  return (
    <footer>
      {/* <div className='footer_logo'>
      <img src={udl} alt="udl"/>
      </div> */}
    <ul className='permalinks'>
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#contacts">Contact</a></li>
    </ul>

    <div className='footer_socials'>
      <a href="https://www.instagram.com/unicusdesigns_/"><BsInstagram/></a>
      <a href="https://www.behance.net/UNICUSDESIGNS"><BsBehance/></a>
      <a href="https://www.linkedin.com/in/ebenezer-omani-clottey/"><BsLinkedin/></a>
    </div>

    <div className="footer_copyright">
      <small>&copy; Puncho-iv. All rights reserved.</small>
    </div>
    </footer>
  )
}

export default Footer