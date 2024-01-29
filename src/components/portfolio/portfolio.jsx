import React from 'react'
import './portfolio.css'

import IMG2 from '../../assets/16.jpg'
import moviedb from '../../assets/movie-db.png'
import pnd from '../../assets/pnd.png'

const data=[
  {
    id: 1,
    image: pnd,
    title: 'Pay n Drive (MTN-aYo)',
    github: 'https://github.com/puncho-iv',
    demo: 'https://payd.rerd.net/'
  },

  {
    id: 2,
    image: moviedb,
    title: 'Movie Database',
    github: 'https://github.com/puncho-iv/movieDatabase-corrections-',
    demo: 'https://movie-db-git-homepage-puncho-iv.vercel.app/'
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