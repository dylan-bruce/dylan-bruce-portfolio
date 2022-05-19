import React from 'react'

import { DiHtml5, DiCss3Full, DiReact } from "react-icons/di";
import { IoLogoJavascript } from 'react-icons/io'

const Footer = () => {
  return (
    <div className='icons'>
      <IoLogoJavascript />
      <DiHtml5 />
      <DiCss3Full />
      <DiReact />
    </div>
  )
}

export default Footer