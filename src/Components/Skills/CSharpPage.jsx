import React from 'react';
import './CSharpPage.css'
import cargo from '../../assets/cargo.png'
import sugarf from '../../assets/sugarf.png'
import reale from '../../assets/reale.png'
import suryad from '../../assets/suryad.png'

const CSharpPage = () => {
  return (
    <div>




    
  <center><h3>Click the below link...👇</h3>
<h1><a href='https://natural-sugar-qrl4.vercel.app/'>Sugar Factory</a></h1></center>
<div className="overview-container">
  
  <div className="overview-left">
    <img src={sugarf} alt="Car" height='200px' width='190px'/>
  </div>

  <div className="overview-right">
    <h2>Sugar Factory Website</h2>
    <p>
      A sugar factory processes sugarcane or sugar beets to
       extract, purify, and produce crystal sugar. It uses 
       modern machinery to ensure efficient production and
        generates useful by-products like molasses and bagasse.
    </p>
  </div>

</div>


<hr className='divider'/>
<center><h3>Click the below link...👇</h3>
<h1><a href='https://real-estate1-omega.vercel.app/'>Real Estate</a></h1></center>
<div className="overview-container">
  
  <div className="overview-left">
    <img src={suryad} alt="Car" height='200px' width='190px'/>
  </div>

  <div className="overview-right">
    <h2>Real Estate Website</h2>
    <p>
      Real estate involves the development, buying,
      selling, and renting of land and buildings for
      living, business, or investment purposes.
      It helps create organized, modern, and sustainable communities.
    </p>
  </div>

</div>

<hr className='divider'/>
<center><h3>Click the below link...👇</h3>
<h1><a href='https://surya-dakshin.vercel.app/'>Surya Dakshin Breakfast</a></h1></center>
<div className="overview-container">
  
  <div className="overview-left">
    <img src={reale} alt="Car" height='200px' width='190px'/>
  </div>

  <div className="overview-right">
    <h2>Surya Dakshin Website</h2>
    <p>
      Designed with authentic architectural elements and
      a peaceful ambiance, the hotel provides clean rooms,
      quality service, and a homely atmosphere. It is the
      ideal place for guests looking to enjoy flavorful
      South Indian cuisine and a relaxed stay.
    </p>
  </div>

</div>
<hr className='divider'/>
<center><h3>Click the below link...👇</h3>
<h1><a href='https://carloo-bice.vercel.app/'>Carloo</a></h1></center>
<div className="overview-container">
  
  <div className="overview-left">
    <img src={cargo} alt="Car" height='200px' width='190px'/>
  </div>

  <div className="overview-right">
    <h2>Car Rental Website</h2>
    <p>
      Carloo is a fast and simple car rental service offering a variety of 
      well-maintained cars at affordable prices. Users can browse, compare,
      and book vehicles instantly with transparent pricing and flexible pickup options.
    </p>
  </div>

</div>

  </div>
  );
};

export default CSharpPage;