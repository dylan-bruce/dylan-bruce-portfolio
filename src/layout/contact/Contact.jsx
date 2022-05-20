import React from 'react'

import {AiOutlineMail, AiOutlinePhone, AiOutlineLinkedin, AiOutlineGithub} from 'react-icons/ai'
import {ImPointRight} from 'react-icons/im';

const Contact = () => {
  return (
    <div className='contact'>
      <h3 className='contact-title'>Contact Me</h3>
      <hr/>
      <div className='contact-methods'>
        <p id="email">
          <ImPointRight/> Email <AiOutlineMail/>: <a href="mailto:dylanb1127@gmail.com" target="_blank" rel="noopener noreferrer">dylanb1127@gmail.com</a> 
        </p>
        <p id="phone">
          <ImPointRight/> Phone <AiOutlinePhone/>: (219) 707-1725
        </p>
        <p id="linkedIn">
          <ImPointRight/> <a href="https://www.linkedin.com/in/dylan-bruce27/" target="_blank" rel="noopener noreferrer">LinkedIn <AiOutlineLinkedin/></a>
        </p>
        <p id="github">
          <ImPointRight/> <a href="https://www.github.com/dylan-bruce" target="_blank" rel="noopener noreferrer">GitHub <AiOutlineGithub/></a>
        </p>
      </div>
      <hr/>
    </div>
  )
}

export default Contact