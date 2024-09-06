import React, { useState } from 'react'
import arrowLeft from "../../icons/arrow-circle-left.svg"
import arrowRight from "../../icons/arrow-circle-right.svg"
// import Profile from "../../images/testim1.jpg"
import "./Testimonials.css"


import { Testimonial } from '../../data'


function Testimonials() {
  const [index, setIndex] = useState(0);
  const {name, image, message, ratings} = Testimonial[index];


  const prevTestimonialHandler = () => {

    if (index <= 0){
      setIndex(Testimonial.length - 1)
    }else{
      setIndex(prev => prev - 1)
    }
  }

  const nextTestimonialHandler = () => {
    if (index >= Testimonial.length -1){
      setIndex(0)
    }
    setIndex(prev => prev + 1)
  }


  return (
    <div className='testimonial-cont'>
        <img className='arrow' src={arrowLeft} alt="" onClick={prevTestimonialHandler}/>
        <div className="testimonial-card">
            <img className='test-prof' src={image} alt="" />
            <h4 className='special'>{name}</h4>
            <p>{message}</p>
            <div className="rating">
              {ratings.map((item) =>{
                return <img src={item} alt="" />
              })}
            </div>
        </div>
        <img className='arrow' src={arrowRight} alt="" onClick={nextTestimonialHandler} />
    </div>
  )
}

export default Testimonials