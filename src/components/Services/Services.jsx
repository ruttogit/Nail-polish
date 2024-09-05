import React from 'react'
import "./Services.css"
// import Card from '../../UI/Card'

const Services = () => {
  return (
    <div className='services' id='services'>
        <h2 className='heading'>Our Services</h2>
        <div className="services-container">
            <div className="services-card">
                <h3 className='special'>Classic Nail Polish</h3>
                <h4 className='special'>Description</h4>
                <p>In tempus eu felis sit amet porta. Vestibulum tristique turpis eros, eget auctor neque hendrerit at.</p>
                <h4 className='special'>Duration</h4>
                <p>30 Minutes</p>
                <h4 className='special'>Price</h4>
                <p>20$</p>
                <button className='btn'>Book Now</button>
            </div>
            <div className="services-card">
                <h3 className='special'>Gel Polish</h3>
                <h4 className='special'>Description</h4>
                <p>In tempus eu felis sit amet porta. Vestibulum tue turpis eros, eget auctor neque hendrerit at.</p>
                <h4 className='special'>Duration</h4>
                <p>40 Minutes</p>
                <h4 className='special'>Price</h4>
                <p>35$</p>
                <button className='btn'>Book Now</button>
            </div>
            <div className="services-card">
                <h3 className='special'>Nail Art & Design</h3>
                <h4 className='special'>Description</h4>
                <p>In tempus eu felis sit amet porta. Vestibulum tristique turpis eros, eget auctor nequererit at.</p>
                <h4 className='special'>Duration</h4>
                <p>30 Minutes</p>
                <h4 className='special'>Price</h4>
                <p>20$</p>
                <button className='btn'>Book Now</button>
            </div>
            
        </div>
    </div>
  )
}

export default Services