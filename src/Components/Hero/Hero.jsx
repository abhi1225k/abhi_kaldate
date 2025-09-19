import React from 'react';
import './Hero.css'
import abhi3 from '../../assets/abhi3.png'

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={abhi3} alt="" />
      <h1><span>I'm Abhishek Kaldate,</span>.Net Full Stack Web Developer</h1>
      <p>Software developers are responsible for designing, developing and maintaining software systems, applications and programs.</p>
      <div className="hero-action">
        <a href="/abhik.pdf" target="_blank" rel="noopener noreferrer" className="btn"><div className="hero-connect">Connect With Me</div></a>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn">My Resume</a>
      </div>
    </div>
  );
};

export default Hero;