import React from 'react';
import './Navbar.css'
import frog from '../../assets/frog.svg'

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={frog} alt="" />
      <ul className='nav-menu'>
        <li>Home</li>
        <li>About Me</li>
        <li>Service</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
      <div className="nav-connect">Connect with me</div>
    </div>
  );
};

export default Navbar;