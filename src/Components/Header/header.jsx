import React from 'react'
import './header.css'
import CTA from './CTA'
import Photo1 from '../../assets/Photo1.jpg'
import HeaderSocials from './HeaderSocials'

function header() {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Onuoha Gospel</h1>
        <h5 className='text-light'>Front-End Developer</h5>
        <CTA />
        <HeaderSocials />

        
          <img src={Photo1} alt="me" className='me' />

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default header