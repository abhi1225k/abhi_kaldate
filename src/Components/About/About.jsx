import React from 'react';
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import abhi3 from '../../assets/abhi3.png'
//import { Link } from 'react-router-dom';



const About = () => {
  return (
    <div id='about' className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
            <img src={abhi3} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>i am a short experienced on full stack web developer with over a organization to their success for projects</p>
                <p>I am a highly analytical back-end developer with C# and SQL expertise. I develop efficient and secure systems that meet client needs. With a deep understanding of back-end development best practices, I am an innovative developer experienced in Django and Flask. I deliver high-quality products that meet client needs</p>
            </div>
            <div className="about-skills">
               <div className="about-skill"><p>c#<hr style={{width:"50%"}}/></p></div>
              <div className="about-skill"><p>MSSQL<hr style={{width:"70%"}}/></p></div>
                <div className="about-skill"><p>Angular<hr style={{width:"60%"}}/></p></div>
                <div className="about-skill"><p>JavaScript<hr style={{width:"50%"}}/></p></div>
                <div className="about-skill"><p>JQuery<hr style={{width:"50%"}}/></p></div>
                <div className="about-skill"><p>Bootstrap<hr style={{width:"50%"}}/></p></div>
                <div className="about-skill"><p>MVC/Core MVC<hr style={{width:"50%"}}/></p></div>
                <div className="about-skill"><p>Design Pattern<hr style={{width:"50%"}}/></p></div>
                <div className="about-skill"><p>Web API/Core 8<hr style={{width:"50%"}}/></p></div>
                <div className="about-skill"><p>.Net core<hr style={{width:"50%"}}/></p></div>
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