import React from 'react';

import { images } from '../../constants';
import my_logo_icon_2 from '../../assets/logo/my_logo_icon_2.png';

import './Navbar.scss';




const Navbar = () => {
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={my_logo_icon_2} alt="logo" />
      </div>
      <ul className='app__navbar-links-block'>
        {['about', 'services', 'work', 'skills', 'testimonials', 'contact'].map((item) => (
          <li className='app__flex app__navbar-links' key={`link-${item}`} >
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

    </nav>
  )
}

export default Navbar;