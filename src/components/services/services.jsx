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
                <p>3D Design</p>
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
              <li>
                <BiCheck className='service_list_icon'/>
                <p>Social Media Design</p>
              </li>
            </ul>
          
        </article>
        {/*END OF UX/UI DESIGN*/}

        <article className="services">
          <div className="services_head">
            <h3>Web Development</h3>
            </div>

            <ul className='service_list'>
              <li>
                <BiCheck className='service_list_icon'/>
                <p>Professional & Responsive Website Design</p>
              </li>
              <li>
                <BiCheck className='service_list_icon'/>
                <p>SEO Optimization</p>
              </li>
              <li>
                <BiCheck className='service_list_icon'/>
                <p>Social Media Pages Integration</p>
              </li>
              <li>
                <BiCheck className='service_list_icon'/>
                <p>Free Hosting</p>
              </li>
              <li>
                <BiCheck className='service_list_icon'/>
                <p>Free SSL</p>
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
                <p>UI / UX Strategies</p>
              </li>
              <li>
                <BiCheck className='service_list_icon'/>
                <p>User Testing</p>
              </li>
              <li>
                <BiCheck className='service_list_icon'/>
                <p>Consultation</p>
              </li>
              <li>
                <BiCheck className='service_list_icon'/>
                <p>UX Audits</p>
              </li>
              <li>
                <BiCheck className='service_list_icon'/>
                <p>Reasearch and Discovery</p>
              </li>
              <li>
                <BiCheck className='service_list_icon'/>
                <p>Site architecture</p>
              </li>
            </ul>
         
        </article>
      </div>
    </div>
  )
}

export default Services