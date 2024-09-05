import React from 'react'
import image1 from '../../images/G1.png'
import image2 from '../../images/g2.png'
import image3 from '../../images/g3.png'
import image4 from '../../images/g4.png'
import image5 from '../../images/g5.png'
import image6 from '../../images/g6.jpg'
import image7 from '../../images/g7.jpg'
import image8 from '../../images/g8.png'
import './Galary.css'


const Galary = () => {
  return (
    <div className='galary' id='galary'>
        <h2 className='heading'>Galary</h2>
        <div className="galary-container">
            <img src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image3} alt="" />
            <img src={image4} alt="" />
            <img src={image5} alt="" />
            <img src={image6} alt="" />
            <img src={image7} alt="" />
            <img src={image8} alt="" />
        </div>
    </div>
  )
}

export default Galary