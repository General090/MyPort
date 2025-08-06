import React from 'react'
import './portfolio.css'
import ShopCart from '../../assets/ShopCart.jpg'
import Net from '../../assets/Net.png'
import Auth from '../../assets/auth.png'
import OJP from "../../assets/ojp.png"


const data = [
  {
    id: 1,
    image: OJP,
    title: "OJP Technologies Ltd.",
    github: "https://github.com/General090/OJP-technologies",
    demo: "https://ojp-technologies.vercel.app/"
  },
  {
    id: 2,
    image: ShopCart,
    title: "Shoping cart for ordering",
    github: "https://github.com/General090/product",
    demo: "https://shop-2lz4mcgfu-gospel-onuohas-projects.vercel.app/"
  },
  {
    id: 3,
    image: Net,
    title: "Netflix Clone Site",
    github: "https://github.com/General090/Neflix",
    demo: "https://neflix-eta.vercel.app/"
  },
  {
    id: 4,
    image: Auth,
    title: "AuthApp",
    github: "https://github.com/General090/auth-front",
    demo: "https://auth-front-uk6z.onrender.com/"
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

