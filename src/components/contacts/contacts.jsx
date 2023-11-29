import React from 'react'
import './contacts.css'
import {MdOutlineMarkEmailUnread} from 'react-icons/md';
import {FaWhatsapp, FaInstagram} from 'react-icons/fa';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contacts = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_xv6h93s', 'template_ruk8h7q', form.current, 'J1pfg6qx4w4pyOJVJ')

      e.target.reset()
    };

  return (
    <section id='contacts'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineMarkEmailUnread className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>unicusdnl@gmail.com</h5>
            <a href="mailto=unicusdnl@gmail.com" target="_blank">Send message</a>
          </article>
          <article className="contact_option">
            <FaWhatsapp className='contact_option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+233 (0) 246 414 019</h5>
            <a href="https://api.whatsapp.com/send?phone+233246414019" target="_blank">Send message</a>
          </article>
          <article className="contact_option">
            <FaInstagram className='contact_option-icon'/>
            <h4>Instagram</h4>
            <h5>unicusdesigns_</h5>
            <a href="https://www.instagram.com/direct/inbox" target="_blank">Send message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Fullname' required/>
            <input type="email" name='email' placeholder='Your Email' required/>
            <textarea name="message" rows="16" placeholder='Your Message'></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contacts