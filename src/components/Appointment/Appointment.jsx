import React from 'react'
import './Appointment.css'

const Appointment = () => {
  return (
    <div className='appointment' id='appointment'>
        <h2 className='heading'>Appointment</h2>
        <div className="appointment-cont">
            <form action="">
                <div className="names">
                    <input type="text" placeholder='First Name' name='first-name'/>
                    <input type="text" placeholder='Last Name' name='last-name'/>
                </div>
                <input type="email" placeholder='Email Address' name='email'/>
                <div className="names">
                    <input type="text" placeholder='Service e.g Classic...etc'/>
                    {/* <div class="dropdown-menu">
                        <label htmlFor="classic">Classic</label>
                        <input type="checkbox" />
                        <label htmlFor="gel"> Gel Polish</label>
                        <input type="checkbox" />
                        <label htmlFor="Art">Nail Art</label>
                        <input type="checkbox" />
                    </div> */}
                    <input type="datetime-local" placeholder='Date & Time' name='date'/>
                </div>

                <button className='btn book-btn'>Book Now</button>
            </form>
        </div>
    </div>
  )
}

export default Appointment