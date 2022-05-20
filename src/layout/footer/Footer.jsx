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
        <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript'><IoLogoJavascript /></a>
        <a href='https://developer.mozilla.org/en-US/docs/Web/HTML'><DiHtml5 /></a>
        <a href='https://developer.mozilla.org/en-US/docs/Web/CSS'><DiCss3Full /></a>
        <a href='https://reactjs.org/'><DiReact /></a>
        <a href='https://vercel.com/dashboard'><SiVercel/></a>
        <a href='https://www.heroku.com/'><SiHeroku/></a>
      </div>
      <div className='date'>
        <p>Today's Date: </p><CurrentDate/>
      </div>
    </>
  )
}

export default Footer