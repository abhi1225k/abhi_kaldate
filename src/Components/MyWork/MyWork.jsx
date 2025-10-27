import React from 'react';
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
//import mywork_data from '../../assets/mywork_data'

const MyWork = () => {
  return (
    <div id='work' className="MyWork">
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      
    <div className="mywork-container">
        <p>E-commerce Application Project Description in C#
            This project involves building a robust E-commerce Application using C# and ASP.NET Core. The application is designed to provide a seamless shopping experience for users while offering efficient management tools for administrators.</p>
        </div>
        <div className="mywork-showmore">
        <p>See My All Projects Here</p><br/>
          <a href='https://natural-sugar-jgoylp4zc-abhishek-kaldates-projects.vercel.app/'>1.Natural_Sugar</a>
          <br/>
          <a href='https://hotel-booking-omega-tan.vercel.app/'>2.Hotel_Booking</a>
          <br/>
          <a href='http://surya-dakshin.vercel.app'>3.Surya_Dakshin_Breakfast_Store</a>
        </div>
    </div>
  );
};

export default MyWork;