import React from 'react'
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import Instagram from "../../Images/instagram (2).png";
import Linkedin from "../../Images/linkedin (1).png";

import "./Footer.css"
const Footer = () => {
  return (
    <div className='footer'>
      <div>
        <Typography variants="h5">About Me</Typography>
        <Typography>
            Hey , My name is Aayush Raj. I am full stack developer and a filmaker and video editor on youtube called <b>Complex Aayush</b>
        </Typography>
        <Link to="/contact" className='footerContactBtn'>
            <Typography>Contact us</Typography>
        </Link>
      </div>
      <div>
        <Typography variants="h6">Social Media</Typography></div>
        
      
        <div className='links4'>
        <a href='https://www.linkedin.com/in/aayush-raj-089784250/' target='black'>
            <img src={Linkedin}alt='BsLinkedin'/>
        </a>
      </div>
      <div className='links3'>
        <a href="https://www.instagram.com/complex_aayush/" target='black'>
            <img src={Instagram} alt='BsInstagram'/>
        </a>
        </div>
    </div>
  )
}

export default Footer
