import React from 'react'
import arrowLeft from "../../icons/arrow-circle-left.svg"
import arrowRight from "../../icons/arrow-circle-right.svg"
import Profile from "../../images/testim.jpg"
import starfull from "../../icons/star.svg"
import starHalf from "../../icons/star-half-alt.svg"
import "./Testimonials.css"

function Testimonials() {
  return (
    <div className='testimonial-cont'>
        <img className='arrow' src={arrowLeft} alt="" />
        <div className="testimonial-card">
            <img className='test-prof' src={Profile} alt="" />
            <h4 className='special'>Ann J.</h4>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque </p>
            <div className="rating">
                <img src={starfull} alt="" />
                <img src={starfull} alt="" />
                <img src={starfull} alt="" />
                <img src={starfull} alt="" />
                <img src={starHalf} alt="" />
            </div>
        </div>
        <img className='arrow' src={arrowRight} alt="" />
    </div>
  )
}

export default Testimonials