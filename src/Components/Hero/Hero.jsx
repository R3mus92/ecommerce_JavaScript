import React from 'react'
import './Hero.css';
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'
import shirt_icon from '../Assets/shirt_icon.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
         <div>
         <h2>New Arrivals</h2>
            <div className="hero-car-icon">
               <img src={shirt_icon} alt="" />
            </div>
            <p>New clothing</p>
            <p>for every taste</p>
         </div>
         <div className="hero-latest-btn">
            <div>Latest Collection</div>
            <img src={arrow_icon} alt="" />
         </div>
      </div>
      <div className="hero-right">
         <img src={hero_image} alt="" />
      </div>
    </div>
  )
}

export default Hero
