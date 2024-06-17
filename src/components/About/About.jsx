import React from 'react'
import "./About.css"
import { Typography } from '@mui/material'
import aayush from "../../Images/aayush.jpg"
const About = () => {
  return (
    <div className='about'>

    <div className='aboutContainer'>
      <Typography>ABOUT ME.....</Typography>
    </div>
    <div className='aboutContainer2'>
      <div>
        <img src={aayush} 
        alt='Abhi'
        className='aboutAvatar'
        />
        <Typography variant='h4'
        style={{ margin: "1vmax 0", color:"black"}}
        >Aayush Raj</Typography>
        <Typography
        >full stack developer</Typography>
        <Typography
        style={{margin:"1vmax 0"}}
        >I am filmaker and videoeditor</Typography>
      </div>
      <div>
        <Typography style={{
          wordSpacing: "5px",
          lineHeight: "20px",
          letterSpacing: "5px",
          textAlign: "right",
        }}>
Goal-oriented Web Developer and problem solver brings strong commitment to collaboration and solutions-oriented problem-solving. Use various web design packages to develop custom-crafted, customer-focused websites and designs. Committed to high standards of user experience, usability . Lends detailed knowledge of SEO to increase visibility.
        </Typography>
      </div>
    </div>

    </div>
  )
}

export default About
