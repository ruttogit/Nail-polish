import React, { useState } from 'react'
import './Navbar.css'

import menuBar from '../../icons/bars.svg'
import close from '../../icons/multiply.svg'




function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavBar = () =>{
        setIsOpen(!isOpen);
    }

  return (
    <div className="navbar">
        <div className="left-nav">
            <h1>Logo</h1>
        </div>
        <nav className= {isOpen ? 'active main-menu': 'main-menu' } >
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#galary">Galary</a></li>
                <li><a href="#appointment">Appointment</a></li>
            </ul>
            <div className="right-nav">
               <a href="#appointment"><button className='btn'>Book Now</button></a>
            </div>
        </nav>
        <div className="menu-btns" onClick={toggleNavBar}>
            {isOpen ? <img src={close} alt="" /> : <img src={menuBar} alt="" />}
        </div>
    </div>
  )
}

export default Navbar