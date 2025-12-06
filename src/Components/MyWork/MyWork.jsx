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
        </div>
        <div className="mywork-showmore">
        <h1>See My All Projects Here</h1><br/>
          {/* <a href='https://natural-sugar-jgoylp4zc-abhishek-kaldates-projects.vercel.app/'><h2>1.Natural_Sugar</h2></a>
          <hr className='divider'/>
          <a href='https://hotel-booking-omega-tan.vercel.app/'><h2>2.Hotel_Booking</h2></a>
          <hr className='divider'/>
          <a href='http://surya-dakshin.vercel.app'><h2>3.Surya_Dakshin_Breakfast_Store</h2></a> */}


          
        </div>
    </div>
  );
};

export default MyWork;