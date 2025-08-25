import React from 'react';
import './Hero.css'
import abhi2 from '../../assets/abhi2.svg'

const Hero = () => {
  return (
    <div className="hero">
      <img src={abhi2} alt="" />
      <h1><span>I'm Abhishek Kaldate,</span> Full Stack Web Developer</h1>
      <p>Software developers are responsible for designing, developing and maintaining software systems, applications and programs.</p>
      <div className="hero-action">
        <div className="hero-connect">Connect With Me</div>
        <a 
  href="/resume.pdf" 
  target="_blank" 
  rel="noopener noreferrer"
  className="btn"
>
  My Resume
</a>
      </div>
    </div>
  );
};

export default Hero;