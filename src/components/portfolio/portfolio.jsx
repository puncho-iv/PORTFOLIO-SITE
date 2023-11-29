import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/elite.jpg'
import IMG2 from '../../assets/16.jpg'
import IMG3 from '../../assets/ux.jpg'

const data=[
  {
    id: 1,
    image: IMG2,
    title: 'Pay n Drive- Admin Page (MTN-aYo)',
    github: 'https://github.com/puncho-iv',
    demo: 'https://king-prawn-app-s27ur.ondigitalocean.app/'
  },

  {
    id: 2,
    image: IMG2,
    title: '',
    github: 'https://github.com/',
    demo: 'https://www.behance.net/UNICUSDESIGNS'
  },
  {
    id: 3,
    image: IMG2,
    title: 'Graphic Design & UI / UX',
    github: 'https://github.com/puncho-iv',
    demo: 'https://www.behance.net/UNICUSDESIGNS'
  },

]

const Portfolio = () => {
  return (
    <div id='portfolio'>
      <div className='portfolio_header'>
      <h5 className='text-light'>My Recent Work</h5>
      <h2 className='text-light'>Portfolio</h2>
      </div>
      <div className="container portfolio_container">
        {
          data.map(({id,image,title,github,demo}) => {
          return(
            <article key={id} className='portfolio_item'>
              <div className="portfolio_item-image">
              <img src={image} alt= {title}/>
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </article>
          )
        })
        }  
      </div>       
    </div>
  )
}

export default Portfolio