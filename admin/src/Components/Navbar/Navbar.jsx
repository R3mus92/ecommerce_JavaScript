import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/nav_logo.svg'
import navProfile from '../../assets/nav-profile.svg'


const Navbar = () => {
   return (
   <div className='navbar'>
      <img src={navlogo} alt="" className="nav-logo" />
      <img src={navProfile} alt="" className="navProfile" />
   </div>
   )
}

export default Navbar
