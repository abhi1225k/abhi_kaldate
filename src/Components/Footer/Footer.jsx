import React from 'react';
import './Footer.css'
import frog from '../../assets/frog.svg'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className="Footer">
      <div className="footer-top">
        <div className="footer-top-left">
            <img src={frog} alt="" />
            <p>i am full stack web developer using .net, india</p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={user_icon} alt="" />
                <input type="email" placeholder='Enter your email'/>
            </div>
            <div className="footer-sub">Subscribe</div>
        </div>
      </div>
      <hr/>
      <div className="footer-bottom">
        <p className='footer-bottom-left'>@ 2025-26 Abhishek Kaldate. All rights resrved.</p>
        <div className="footer-bottom-right">
            <p>Term of services</p>
            <p>Privacy policy</p>
            <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
