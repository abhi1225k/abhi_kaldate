import React, { useRef, useState } from 'react';
import './Navbar.css'
import frog from '../../assets/frog.svg'
import underline from '../../assets/nav_underline.svg'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'


const Navbar = () => {

  const [menu,setMenu] = useState ("home");
  const menuRef = useRef();

  const openMenu = () =>{
    menuRef.current.style.right="0";
  }
   const closeMenu = () =>{
    menuRef.current.style.right="-300px";
  }

  return (
    
    <div className="navbar">
      <img src={frog} alt="" />
      <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open'/>
      <ul ref={menuRef} className='nav-menu'>
        <img src={menu_close} onClick={closeMenu} alt="" className='nav-mob-close' />
        <li><a className='ab' href='#home'><p onClick={()=>setMenu("home")}>Home</p></a>{menu==="home"?<img src={underline} alt='' />:<></>}</li>
        <li><a className='ab' href='#about'><p onClick={()=>setMenu("about")}>About Me</p></a>{menu==="about"?<img src={underline} alt='' />:<></>}</li>
        <li><a className='ab' href='#services'><p onClick={()=>setMenu("services")}>Service</p></a>{menu==="services"?<img src={underline} alt='' />:<></>}</li>
        <li><a className='ab' href='#work'><p onClick={()=>setMenu("work")}>Portfolio</p></a>{menu==="work"?<img src={underline} alt='' />:<></>}</li>
        <li><a className='ab' href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></a>{menu==="contact"?<img src={underline} alt='' />:<></>}</li>
      </ul>
      <div className="nav-connect">Connect with me</div>
    </div>
  );
};

export default Navbar;