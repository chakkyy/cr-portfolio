import React from "react"
import { Link } from "react-router-dom"

import "./Footer.scss"
import { PAGES } from "utils/constants"
import SocialLinks from "components/common/SocialLinks"

const Footer = () => (
  <div id='Footer'>
    <div className='container'>
      <div className='localisation'>
        <p>Carlos Ramirez - ReactJs Front-end Developer</p>
        <p>Located in Buenos Aires, Argentina</p>
        <p>cmramirez1996@gmail.com</p>
      </div>
      <SocialLinks color='white' />
      <div className='links'>
        {PAGES.map((page) => {
          if (page.name === "Home") {
            return null
          }
          return (
            <Link key={page.name} to={page.url}>
              {page.name}
            </Link>
          )
        })}
      </div>
    </div>
    <div className='terms'> - Copyright Carlos Ramirez © 2022</div>
    <img src='anchor-small.png' className='anchor' alt='anchor' />
    <img
      className='small-stripes'
      src='white_stripes.svg'
      alt='stripe'
      aria-hidden='true'
    />
    <img
      className='medium-stripes'
      src='white_stripes.svg'
      alt='stripe'
      aria-hidden='true'
    />
  </div>
)

export default Footer
