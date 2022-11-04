import React from 'react'
import { Link } from 'react-router-dom'
import resume from '../resume/01-Dylan-Bruce-Resume.pdf';


const Header = () => {
  return (
    <nav className='header-container'>
      <div className='title'>
        <h1>Dylan Bruce</h1>
        <h2>Software Developer</h2>
      </div>
      <div className='quickLink'>
        <Link className='link' to='/home'>Home</Link>
        <Link className='link' to={resume} target="_blank">Resume</Link>
        <Link className='link' to='/projects'>Projects</Link>
        <Link className='link' to='/contact'>Contact</Link>
      </div>
    </nav>
  )
}

export default Header