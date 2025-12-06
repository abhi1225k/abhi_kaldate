import React from 'react';
import './CSharpPage.css'
import cargo from '../../assets/cargo.png'

const CSharpPage = () => {
  return (
    <div className='skil'>
      {/*<h3>Natural Sugar pvt.Ltd</h3>
       Overview:<br/>
Natural Sugar is a complete ERP-style sugarcane factory management system designed to digitalize the entire workflow of a sugar mill. The system manages farmers, sugarcane supply, crushing operations, production data, employee activities, and financial reporting.
<br/>
It eliminates manual record keeping and improves transparency between the factory and farmers.
<br/>
Detailed Features:
<br/>
✅ Farmer & Supplier Management
<br/>
Add/update farmer profiles
<br/>
Maintain sugarcane field details
<br/>
Track daily cane supply
<br/>

✅ Weighment Management
<br/>
Vehicle weighing (tare/gross/net weight)
<br/>
Auto calculation of supplied cane
<br/>
Daily cane log reports
<br/>

✅ Production & Inventory Control
<br/>
Track juice extraction & crystallization
<br/>
Record sugar output per batch
<br/>
Manage sugar stock & storage units

<hr className='divider'/>

<h3>Hotel_Booking</h3>
Overview:<br/>
A fully functional hotel booking platform where users can browse rooms, check availability, make reservations, and receive confirmations. The admin manages rooms, pricing, amenities, and customer bookings.
<br/>
This project demonstrates your ability to build real-world booking logic, CRUD operations, authentication, and dynamic data handling.
<br/>
Detailed Features:
<br/>
✅ User Panel
<br/>
View available rooms with images
<br/>
Filter by price, type (AC/Non-AC), and capacity
<br/>
Real-time availability check
<br/>
Book room with personal details
<br/>
Automated booking confirmation
<br/>
View booking history
<br/>

✅ Admin Panel
<br/>
Add/edit/delete rooms
<br/>
Upload room photos
<br/>
Manage room pricing
<br/>
Approve/reject bookings
<br/>
View total revenue
<br/>
Dashboard with booking statistics
<br/>

✅ Authentication
<br/>
Secure login for admin
<br/>
Password encryption
<br/>
Protected pages
<br/>

✅ Additional Modules
<br/>
Receipt / invoice generation
<br/>
Customer database
<br/>
Room occupancy charts

<br/>
✅ Technologies Used:

ASP.NET Core / MVC, C#, SQL Server, HTML, CSS, JavaScript

<hr className='divider'/>

<h2>Surya_Dakshin_Breakfast_Store</h2>
Overview:<br/>
Surya Dakshin is a modern, responsive food ordering website offering breakfast items like Idli, Dosa, Medu Vada, Upma, and more. Built with a clean UI and fast-loading pages, it provides a smooth ordering experience for users.
<br/>
This project shows your frontend skills + cart management logic.
<br/>
Detailed Features:
<br/>
✅ User Features
<br/>
Interactive food menu
<br/>
Item details with description & price
<br/>
Add to cart / remove from cart
<br/>
Quantity update
<br/>
Order summary page
<br/>
Final billing calculation
<br/>

✅ Store/Brand Section
<br/>
About restaurant
<br/>
Food speciality & hygiene info
<br/>
Testimonials (optional)
<br/>

✅ Technical Functions
<br/>
React components for each section
<br/>
Context API for cart state management
<br/>
Responsive design for all devices
<br/>
Loader animations
<br/>
Smooth scrolling UX
<br/>

✅ Admin Backend (If available or optional to add)
<br/>
Add new breakfast items
<br/>
 Update price and image
<br/>
Manage orders
<br/>

✅ Technologies Used:
<br/>
React.js, JavaScript, CSS  */}


<hr className='divider'/>
<h3>Visit My Website ..</h3>
<h1><a href='https://carloo-bice.vercel.app/'>Carloo</a></h1>
<div className="overview-container">
  
  <div className="overview-left">
    <img src={cargo} alt="Car" />
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