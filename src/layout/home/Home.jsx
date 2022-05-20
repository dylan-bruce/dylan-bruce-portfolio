import React from 'react';
import me from './photo/me.png'

const Home = () => {
  return (
    <div className='about-me'>
      <img className='me' src={me}></img>
      <h3 className='about-me-title'>About Me</h3>
      <p className='about-me-text'>
        My name is Dylan, and I am a software engineer.  
        I started out working as an industrial technician where I had to complete tasks in a timely manner to guarantee there was no work stoppage 
        and followed the plant’s schedules.  I knew that I wanted more out of my career, so I started to look at what my interests were.  
        I have always loved working with computers, and I have always been interested in the way that things work.
      </p> 
      <p className='about-me-text'>
        When attending college, I took an intro to C++ course where I found my passion for programming.  
        I finished out my degree and I have since enrolled in a full-stack software engineering boot camp that I am currently a week away from completing.  
        In this boot camp, I have learned the common practices of front-end and back-end programming, and I can make full-stack CRUD programs.
      </p>
    </div>
  )
}

export default Home