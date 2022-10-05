import React, { useState } from 'react';
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdOutlineRestaurantMenu} from 'react-icons/md'
import images from '../../constants/images'
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
  <nav className='app__navbar' >
    <div className='app__navbar-logo'>
      <img src={images.gericht} alt="app logo"/>
    </div>
    <ul className='app__navbar-links'>
      <li className='p__opensans'><a href='#home'>Home</a></li>
      <li className='p__opensans'><a href='#about'>About</a></li>
      <li className='p__opensans'><a href='#menu'>Menu</a></li>
      <li className='p__opensans'><a href='#awards'>Premi</a></li>
      <li className='p__opensans'><a href='#contact'>Contatti</a></li>
    </ul>
    <div className='app__navbar-login'>
      <a href="#login" className='p__opensans'>Log In / Registrati</a>
      <div/>
        <a href="/" className='p__opensans'>Prenota un Tavolo</a>
    </div>
    <div className='app__navbar-smallscreen'>
      <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)}/>

      {toggleMenu && (
      <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
        <MdOutlineRestaurantMenu fontSize={27} className='overlay_close' onClick={() => setToggleMenu(false)}/>
        <ul className='app__navbar-smallscreen_links' onClick={() => setToggleMenu(false)}>
          <h3 className='headtext__cormorant' style={{ fontSize:'32px', display: 'flex', justifyContent:'center'}}>Gericht Restaurant</h3>
          <li className='p__opensans'><a href='#home'>Home</a></li>
          <li className='p__opensans'><a href='#about'>About</a></li>
          <li className='p__opensans'><a href='#menu'>Menu</a></li>
          <li className='p__opensans'><a href='#awards'>Premi</a></li>
          <li className='p__opensans'><a href='#contact'>Contatti</a></li>
          <li className='p__opensans'><a href='#login'>Log In / Registrati</a></li>
          <li className='p__opensans'><a href='/'>Prenota un Tavolo</a></li>
        </ul> 
      </div>        
      )}
    </div>
  </nav>    
  )
}

export default Navbar;
