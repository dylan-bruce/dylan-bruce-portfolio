import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <nav className='header-container'>
      <div className='title'>
        <h1>Dylan Bruce</h1>
        <h2>Software Developer</h2>
      </div>
      <div className='quickLink'>
        <Link className='link' to='/home'>Home</Link>
        <Link className='link' to='/resume'>Resume</Link>
        <Link className='link' to='/projects'>Projects</Link>
        <Link className='link' to='/contact'>Contact</Link>
      </div>
      <div className='icons'>

      </div>
    </nav>
  )
}

export default Header