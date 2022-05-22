import React from 'react';
import me from './photo/me.png'

const Home = () => {
  return (
    <div className='about-me'>
      <img className='me' src={me} alt="Dylan Bruce in front of a green backdrop"></img>
      <hr/>
      <h3 className='about-me-title'>About Me</h3>
      <hr/>
      <p className='about-me-text'>
        My name is Dylan, and I am a software engineer.  
        I started out working as an industrial technician while going to college where I graduated with an Associates Degree in Industrial Electrical Technology. 
        After finishing my degree, I knew that I wanted more out of my career, so I started to look at what my interests were.  
        I have always loved working with computers, and I have always been interested in the way that things work.
      </p> 
      <p className='about-me-text'>
        When attending college, I took an intro to C++ course where I found my passion for programming.  
        I finished out my degree and I started to self teach C# because I was stuck on the idea of creating my own video game using Unity.  After following some tutorials and
        one of Unity's guided lessons on making a small functional game, I decided that I wanted to pursue this idea more directly.
        This is when I enrolled in Thinkful's full-stack software engineering boot camp that I have finished on 5/9/2022.  
      </p>
      <p>
        In this boot camp, I learned about web requests, front-end development, back-end development, and data structures and algorithms. 
        Utilizing these skills that I had learned, I created front-end, back-end, and full-stack CRUD projects during the boot camp.  
      </p>
      <hr/>
    </div>
  )
}

export default Home