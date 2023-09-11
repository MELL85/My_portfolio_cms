import React, { useState } from 'react';

import { AiOutlineGlobal } from 'react-icons/ai';
import { MenuOpen, NavTranslate } from '../../components';
import my_logo_icon_2 from '../../assets/logo/my_logo_icon_2.png';

import './Navbar.scss';


const Navbar = () => {

  const [active, setActive] = useState(false);
  const [toggleTr, setToggleTr] = useState(false);

  const menuBtn = () => {
    setActive(active => !active);
  }

  const toggle = () => {
    setToggleTr(toggleTr => !toggleTr);
  }

  const classActive = active ? 'active' : null;
  const classActiveTr = toggleTr ? 'toggleTr' : null;

  return (
    <div className="container">
      <nav className="nav__menu">
        <button type="button"
          className={`nav__btn-menu ${classActive}`}
          id="burger-menu" 
          onClick={menuBtn}>
          <span className="nav__btn-menu-line"></span>
        </button>

        <div className="nav__logo-block">
          <a href="#" className="nav__logo-link">
            <img src={my_logo_icon_2} alt="my-logo" className="nav__logo" />
          </a>
        </div>

        <div className="nav__setting">
          <button type="button" 
          className={`nav__setting-btn ${classActiveTr}`}
          onClick={toggle}
          >
            <AiOutlineGlobal />
          </button>
        </div>
      </nav>

      <MenuOpen active={active} />

      <NavTranslate active={toggleTr}/>
    </div>
  )
}

export default Navbar;
