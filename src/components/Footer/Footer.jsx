import React from 'react'
import facebook from "../../icons/facebook-f.svg";
import Instagram from "../../icons/Vector.svg";
import Twiter from "../../icons/Vector-1.svg";
import Youtube from "../../icons/Vector-2.svg";
import "./Footer.css"
function Footer() {
  return (
    <div className='footer'>
        <div className="footer-top">
            <h1>Logo</h1>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#about">Why Us</a></li>
                <li><a href="#security">Security</a></li>
                <li><a href="#privacy">Privacy Policy</a></li>
                <li><a href="#help">Help</a></li>
            </ul>
        </div>
        <div className="footer-bottom">
            <div className="footer-left">
                <img src={facebook} alt="" />
                <img src={Twiter} alt="" />
                <img src={Instagram} alt="" />
                <img src={Youtube} alt="" />
            </div>
            <div className="footer-center">
                <input type="text" placeholder='Enter Your Email'/>            </div>
            <div className="footer-right">
                <button className='btn'>Join Us</button>
            </div>
        </div>
    </div>
  )
}

export default Footer