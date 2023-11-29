import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <div id='services'>
      <div className='header'>
      <h5 className='text-light'>What I Offer</h5>
      <h2 className='text-light'>Services</h2>
      </div>

      <div className="container services_container">
        <article className="services">
          <div className="services_head">
            <h3>Graphic Design</h3>
            </div>
            
            <ul className='service_list'>
              <li>
                <BiCheck className='service_list_icon'/>
                <p>Package Design</p>
              </li>
              <li>
                <BiCheck className='service_list_icon'/>
                <p>2D Design</p>
              </li>
              <li>
                <BiCheck className='service_list_icon'/>
                <p>Logo Design</p>
              </li>
              <li>
                <BiCheck className='service_list_icon'/>
                <p>Flyer Design</p>
              </li>

            </ul>
          
        </article>
        {/*END OF UX/UI DESIGN*/}

        <article className="services">
          <div className="services_head">
            <h3>Web & Mobile Development</h3>
            </div>

            <ul className='service_list'>
              <li>
                <BiCheck className='service_list_icon'/>
                <p>User Interface Development</p>
              </li>
              <li>
                <BiCheck className='service_list_icon'/>
                <p>Responsive Designs</p>
              </li>
              <li>
                <BiCheck className='service_list_icon'/>
                <p>Cross-Browser Compatibility</p>
              </li>
              <li>
                <BiCheck className='service_list_icon'/>
                <p>Web Performance Optimization</p>
              </li>
              <li>
                <BiCheck className='service_list_icon'/>
                <p>Frontend Frameworks and Libraries</p>
              </li>
              <li>
                <BiCheck className='service_list_icon'/>
                <p>Testing and Debugging</p>
              </li>
            </ul>
         
        </article>
        {/* END OF WEB DEVELOPMENT*/}

        <article className="services">
          <div className="services_head">
            <h3>UI / UX </h3>
            </div>

            <ul className='service_list'>
              <li>
                <BiCheck className='service_list_icon'/>
                <p>UI Design</p>
              </li>
              <li>
                <BiCheck className='service_list_icon'/>
                <p>Wireframing and Prototyping</p>
              </li>
              <li>
                <BiCheck className='service_list_icon'/>
                <p>Responsive Design</p>
              </li>
              <li>
                <BiCheck className='service_list_icon'/>
                <p>UI Testing</p>
              </li>
              <li>
                <BiCheck className='service_list_icon'/>
                <p>Collaboration with Development Teams</p>
              </li>
            </ul>
         
        </article>
      </div>
    </div>
  )
}

export default Services