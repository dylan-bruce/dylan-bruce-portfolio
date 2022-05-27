import React from 'react'

import CurrentDate from '../../utils/CurrentDate'

import {DiHtml5, DiCss3Full, DiReact} from "react-icons/di";
import {IoLogoJavascript} from 'react-icons/io'
import {SiVercel, SiHeroku} from 'react-icons/si';

const Footer = () => {

  const date = new Date();

  return (
    <>
      <div className='signature'>
        <p>Dylan Bruce - Portfolio</p>
      </div>
      <div className='icons'>
        <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript' target="_blank" rel="noopener noreferrer"><IoLogoJavascript /></a>
        <a href='https://developer.mozilla.org/en-US/docs/Web/HTML' target="_blank" rel="noopener noreferrer"><DiHtml5 /></a>
        <a href='https://developer.mozilla.org/en-US/docs/Web/CSS' target="_blank" rel="noopener noreferrer"><DiCss3Full /></a>
        <a href='https://reactjs.org/' target="_blank" rel="noopener noreferrer"><DiReact /></a>
        <a href='https://vercel.com/dashboard' target="_blank" rel="noopener noreferrer"><SiVercel/></a>
        <a href='https://www.heroku.com/' target="_blank" rel="noopener noreferrer"><SiHeroku/></a>
      </div>
      <div className='date'>
        <CurrentDate/>
      </div>
    </>
  )
}

export default Footer