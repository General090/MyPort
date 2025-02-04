import React from 'react'
import './nav.css'
import { IoHomeOutline } from "react-icons/io5"
import { CiUser } from "react-icons/ci"
import { LuBookMinus } from "react-icons/lu"
import { RiServiceLine } from "react-icons/ri"
import { BiMessageSquare } from "react-icons/bi"
import { useState } from 'react'

const Nav = () => {
  const {activeNav, setActiveNav} = useState('#')
  return (
    <nav>
      <a href='#' className={activeNav === '#' ? 'active' : ''}><IoHomeOutline /></a>
      <a href='#about' className={activeNav === '#about' ? 'active' : ''} ><CiUser /></a>
      <a href='#experience' className={activeNav === '#experience' ? 'active' : ''}><LuBookMinus /></a>
      <a href='#contact' className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquare />
      </a>
    </nav>
  )
}

export default Nav 