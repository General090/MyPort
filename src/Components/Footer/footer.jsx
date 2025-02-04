import React from 'react'
import './footer.css'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function footer() {
  return (
    <footer>
      <a href='#' className='footer__logo'>Gospel Onuoha</a>

      <ul className="permalinks">
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
      <a href='https://facebook.com'><FaFacebookF /></a>
      <a href='https://instagram.com'><FaInstagramSquare /></a>
      <a href='https://x.com'><FaXTwitter /></a>
      </div>
    </footer>
  )
}

export default footer