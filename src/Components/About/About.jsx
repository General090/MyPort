import React from 'react'
import './About.css'
import Photo2 from '../../assets/Photo2.jpg'
import { FaAward } from "react-icons/fa"
import { FiUsers } from "react-icons/fi"
import { VscFolderActive } from "react-icons/vsc";



const About = () => {
  return (
    <section id="about">
      <h5>Get to Know </h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={Photo2} alt="" />
          </div> 
        </div>

        <div className='about__content'>
          <div className="about__cards">
            <article className="about__card">
            <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>3+ Years Learning</small>
            </article>

            <article className="about__card">
            <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>1+ Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderActive className='about__icon' />
              <h5>Projects</h5>
              <small>5+  Completed</small>
            </article>
          </div>

          <p>
            Hey! I'm Gospel Onuoha, a Front-End Developer who loves turning ideas into functional, beautiful websites. I specialize in building clean, user-friendly experiences using HTML, CSS, JavaScript, React, and Next.js, with a little help from tools like Tailwind CSS.
            I'm always learning and experimenting with new technology, so I'm passionate about everything the web can do. Whether I'm adjusting a design, solving a complex coding problem, or optimizing performance, I'm all in.
            If you like what you see or just want to chat about web development, feel free to reach out!
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About