import React from 'react'
import './Contact.css'
import { MdOutlineMailOutline } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_arerm8s', 
        'template_08r3kef' , 
        form.current,  
        '2IrIAZI80talMp3l2'
      )
      
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMailOutline className='contact__option-icon' />
            <h4>Email</h4>
            <h5>gospelonuoha22@gmail.com</h5>
            <a href="mailto:gospelonuoha22@gmail.com" target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <FaXTwitter className='contact__option-icon'/>
            <h4>Twitter</h4>
            <h5>gospel_kalu</h5>
            <a href="https://x.com/gospel_kal" target='_blank'>Send a message</a>
          </article>

          <article className="contact__option">
            <FaWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+2349068397527</h5>
            <a href="https://api.whatsapp.com/send?phone=+2349068397527" target='_blank'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' value='send' className='btn btn-primary'>Send Meessage</button>
        </form>
      </div>
    </section>
  )
}

export default Contact