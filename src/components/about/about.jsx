import React from 'react'
import './about.css'
import ME from '../../assets/face.jpg'
import {BsAward} from 'react-icons/bs'
import {AiOutlineUsergroupAdd,AiFillFolderOpen} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know Me</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image"/>
          </div>
        </div>       
        
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <BsAward className='about_icon'/>
              <h5>Experience</h5>
              <small>1 Year Experience</small>
            </article>
        
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <AiFillFolderOpen className='about_icon'/>
              <h5>Projects</h5>
              <small>20+ Projects</small>
            </article>
           
          <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <AiOutlineUsergroupAdd className='about_icon'/>
              <h5>Clients</h5>
              <small>50+ Worldwide</small>
            </article>
          </div>
          </div>
        </div> 
        </div>
        </div>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Vitae nobis minima 
            porro at adipisci non consequuntur soluta quidem ullam 
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>   
           
          </div>
          </div>
    
    </section>
  )
}

export default About