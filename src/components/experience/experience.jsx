import React from 'react'
import './experience.css'
import {HiBadgeCheck} from 'react-icons/hi'

const Experience = () => {
  return (
    <div id='experience'>
      <div className='header'>
      <h5 className='text-light'>The Skills I Have</h5>
      <h2 className='text-light'>My Experience</h2>
      </div>
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend & Backend Development</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <HiBadgeCheck className='experience_details-icon'/>
             <div>
                <h4>HTML</h4>
                <small className='text-light'>Intermediate</small>
             </div>
            </article>
            <article className='experience_details'>
              <HiBadgeCheck className='experience_details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <HiBadgeCheck className='experience_details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Proeficient</small>
              </div>
            </article>
            <article className='experience_details'>
              <HiBadgeCheck className='experience_details-icon'/>
              <div>
                <h4>Tailwind CSS</h4>
                <small className='text-light'>Proeficient</small>
              </div>
            </article>
            <article className='experience_details'>
              <HiBadgeCheck className='experience_details-icon'/>
              <div>
                <h4>React.js</h4>
                <small className='text-light'>Proeficient</small>
              </div>
            </article>
            <article className='experience_details'>
              <HiBadgeCheck className='experience_details-icon'/>
              <div>
                <h4>Next.js</h4>
                <small className='text-light'>Proeficient</small>
              </div>
            </article>
            <article className='experience_details'>
              <HiBadgeCheck className='experience_details-icon'/>
              <div>
                <h4>React-Native</h4>
                <small className='text-light'>Proeficient</small>
              </div>
            </article>
            <article className='experience_details'>
              <HiBadgeCheck className='experience_details-icon'/>
              <div>
                <h4>Express.js</h4>
                <small className='text-light'>Proeficient</small>
              </div>
            </article>
            <article className='experience_details'>
              <HiBadgeCheck className='experience_details-icon'/>
              <div>
                <h4>Redux</h4>
                <small className='text-light'>Proeficient</small>
              </div>
            </article>
  
          </div>
        </div>
          {/* END OF FRONTEND*/}

          <div className="experience_backend">
          <h3>Graphic & UI Design</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <HiBadgeCheck className='experience_details-icon'/>
              <div>
                <h4>Illustrator</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <HiBadgeCheck className='experience_details-icon'/>
              <div>
                 <h4>Photoshop</h4>
                  <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <HiBadgeCheck className='experience_details-icon'/>
              <div>
                <h4>After Effects</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className='experience_details'>
              <HiBadgeCheck className='experience_details-icon'/>
              <div>
                <h4>Priemiere Pro</h4>
                <small className='text-light'>Beginner</small> 
              </div> 
            </article>
            <article className='experience_details'>
              <HiBadgeCheck className='experience_details-icon'/>
              <div>
                <h4>Figma</h4>
                <small className='text-light'>Proeficient</small>
              </div>
            </article>
         </div>
        </div>
          </div>   
    </div>
  )
}

export default Experience