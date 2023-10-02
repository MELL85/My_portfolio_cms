import React, { useState, useContext } from 'react';
import { ThemeContext } from '../../providers/ThemeProvider';
import { MenuOpen, NavTranslate } from '../../components';
import { AiOutlineGlobal } from 'react-icons/ai';
import my_logo_icon_2 from '../../assets/logo/my_logo_icon_2.png';

import './Navbar.scss';

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [toggleTr, setToggleTr] = useState(false);
  const [theme] = useContext(ThemeContext);
  const classActive = active ? 'active' : null;
  const classActiveTr = toggleTr ? 'toggleTr' : null;

  return (
    <div className={`App-navbar ${theme === 'dark' ? 'dark' : 'light'}`}>
      <div className="container">
        <nav className="nav__menu">
          <button type="button"
            className={`nav__btn-menu ${classActive} ${theme === 'dark' ? 'dark' : 'light'}`}
            id="burger-menu"
            onClick={() => setActive(!active)}
          >
            <span className={`nav__btn-menu-line ${theme === 'dark' ? 'dark' : 'light'}`}></span>
          </button>

          <div className="nav__logo-block">
            <a href="#home" className="nav__logo-link">
              <img src={my_logo_icon_2} alt="my-logo" className="nav__logo" />
            </a>
          </div>

          <div className="nav__setting">
            <button type="button"
              className={`nav__setting-btn ${classActiveTr} ${theme === 'dark' ? 'dark' : 'light'}`}
              onClick={() => setToggleTr(!toggleTr)}
            >
              <AiOutlineGlobal />
            </button>
          </div>
        </nav>

        <MenuOpen
          active={active}
          setActive={setActive}
        />
        <NavTranslate
          toggleTr={toggleTr}
          setToggleTr={setToggleTr}
        />

      </div>
    </div>
  )
}

export default Navbar;
