import React from 'react'
import Heroimg from '../../images/HeroImg.png'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero' id='home'>
        <div className="hero-left">
            <h1 className='special'>Elegance at Your Fingertips</h1>
            <p>Indulge in luxury nail care and experience the art of perfection. Book your appointment today!</p>
            <a href="#appointment"><button className='btn'>Book Now</button></a>
        </div>
        <div className="hero-right">
            <img src={Heroimg} alt="" />
        </div>
    </div>
  )
}

export default Hero