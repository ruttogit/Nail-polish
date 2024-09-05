import React from 'react'
import './Card.css'

function Card(props) {
  return (
    <div className='card'>
        <img src={props.image} alt="" />
        <h4>{props.name}</h4>
        <h3>{props.featureTitle}</h3>
        <p>{props.description}</p>
        <p>{props.price}</p>
    </div>
  )
}

export default Card