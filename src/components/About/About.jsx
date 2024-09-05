import React from 'react'
import "./About.css"
import Card from '../../UI/Card'
import { ourTeam } from '../../data'



const About = () => {
  return (
    <div className="about" id='about'>
        <h2 className='heading'>About Us</h2>
        <div className='about-container'>
            <div className="about-left">
                <div className="content">
                    <h3 className='special'>Our Story</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultricies iaculis arcu, in luctus nisi pulvinar sit amet. Fusce pretium luctus justo vitae finibus.</p>
                </div>
                <div className="content">
                    <h3 className='special'>Why Choose Us</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultricies iaculis arcu, in luctus nisi pulvinar sit amet. Fusce pretium luctus justo vitae finibus.</p>
                </div>
            </div>
            <div className="about-main">
                <h3 className='heading'>Meet Ou Team</h3>
                <div className="about-right">
                        {ourTeam.map((item, index) =>{
                            return(
                            <Card key={item.index} name={item.name} image={item.image}/>
                            )
                        })}
                    </div>
                </div>
        </div>
    </div>
    
  )
}

export default About