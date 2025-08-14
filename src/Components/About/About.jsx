import React from 'react';
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import abhi2 from '../../assets/abhi2.svg' 

const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
            <img src={abhi2} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>i am a short experienced on full stack web developer with over a organization to their success for projects</p>
                <p>This is how I see myself, and hope you will give me a chance to prove my words in the job, or at least in this interview. Two kids, four computers, and a passion for back-end web development.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>c#<hr style={{width:"50%"}}/></p></div>
                <div className="about-skill"><p>ASP.Net<hr style={{width:"70%"}}/></p></div>
                <div className="about-skill"><p>React<hr style={{width:"60%"}}/></p></div>
                <div className="about-skill"><p>JavaScript<hr style={{width:"50%"}}/></p></div>
            </div>
        </div>
      </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>2+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>4+</h1>
                <p>PROJECTS COMPLETED</p>
             </div>
             <hr/>
             <div className="about-achievement">
                <h1>10+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
    </div>
  );
};

export default About;