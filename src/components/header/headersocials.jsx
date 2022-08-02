import React from 'react'
import {BsLinkedin, BsBehance, BsGithub, BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="Header_Socials">
    <a href= "https://www.linkedin.com/in/ebenezer-omani-clottey-0b0bb8205/" ><BsLinkedin/></a>
    <a href= "https://behance.com/UnicusDesigns" ><BsBehance/></a>
    <a href= "https://github.com/" ><BsGithub/></a>
    <a href= "https://instagram.com/UnicusDesigns" ><BsInstagram/></a>   
    </div>
  )
}

export default HeaderSocials