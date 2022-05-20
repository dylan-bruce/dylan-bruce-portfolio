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
        <IoLogoJavascript />
        <DiHtml5 />
        <DiCss3Full />
        <DiReact />
        <SiVercel/>
        <SiHeroku/>
      </div>
      <div className='date'>
        <p>Today's Date: </p><CurrentDate/>
      </div>
    </>
    
  )
}

export default Footer