import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function HeaderSocials() {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/gospel-onuoha/" target='_blank'><FaLinkedin /></a>
        <a href="https://github.com/General090" target='_blank'><FaGithub /></a>
        <a href="https://x.com/gospel_kal" target='_blank'><FaXTwitter /></a>
    </div>
  )
}

export default HeaderSocials