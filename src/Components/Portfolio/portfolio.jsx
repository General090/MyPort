import React from 'react'
import './portfolio.css'
import ShopCart from '../../assets/ShopCart.jpg'
import Form from '../../assets/Form.png'
import IMG3 from '../../assets/portfolio3.jpg'


const data = [
  {
    id: 1,
    image: ShopCart,
    title: "Shoping cart for ordering",
    github: "https://github.com/General090/product",
    demo: "https://shop-2lz4mcgfu-gospel-onuohas-projects.vercel.app/"
  },
  {
    id: 2,
    image: Form,
    title: "Functional JavaScript contact form",
    github: "https://github.com",
    demo: "https://dribble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualiztion"
  },
  {
    id: 3,
    image: IMG3,
    title: "The Bright Furture of Web 3.0",
    github: "https://github.com/General090/news",
    demo: "https://news-alpha-eight.vercel.app/"
  },
  
]

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
         {
          data.map(({id, image, title, github, demo}) => {
            return(
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
         }
      </div>
    </section>
  )
}

export default portfolio  

