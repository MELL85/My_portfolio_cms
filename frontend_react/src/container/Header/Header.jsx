import React from 'react';
import { motion } from 'framer-motion';


import { NavbarLeft, SocialIcons } from '../../components';
import './Header.scss';

const Header = () => {
  return (
    <div className="container">
      <div className="header__wrapper">
        <div className="menu">
          <aside className="menu__head-block">
            <NavbarLeft/>
            {/* <a href="#" className="nav__logo-link">
                    <img src={logo} alt="my-logo" className="nav__logo" />
                </a> */}
            {/* <nav className="menu__block">
                    <ul className="menu__list">
                        <li className="menu__item">
                            <span className="menu__item-line"></span>
                            <a className="menu__item-link">
                                <IoPersonCircleOutline />
                            </a>
                            <span className="menu__item-text">About</span>
                        </li>
                        <li className="menu__item">
                            <span className="menu__item-line"></span>
                            <a className="menu__item-link">
                                <IoIosConstruct />
                            </a>
                            <span className="menu__item-text">Services</span>
                        </li>
                        <li className="menu__item">
                            <span className="menu__item-line"></span>
                            <a className="menu__item-link">
                                <BsFillGrid3X3GapFill />
                            </a>
                            <span className="menu__item-text">My Work</span>
                        </li>
                        <li className="menu__item">
                            <span className="menu__item-line"></span>
                            <a className="menu__item-link">
                                <RiMessage2Fill />
                            </a>
                            <span className="menu__item-text">Testimonials</span>
                        </li>
                        <li className="menu__item">
                            <span className="menu__item-line"></span>
                            <a className="menu__item-link">
                                <IoIosMail />
                            </a>
                            <span className="menu__item-text">Contact</span>
                        </li>
                    </ul>
                </nav> */}
          </aside>
        </div>
        <div className="header__banner">
          <div className="header__text-block">
            <h4 className="header__text-title">Hello</h4>
            <h1 className="header__text-head-title">I am Yevhen, Front End Developer</h1>
            <div className="header__desctop-block">
              <h5 className="header__desctop-head-text">I create an efficient UI mobile or web design also UX
                research to make sure that I get what people needs and strategy for interaction design.</h5>

              <div className="header__desctop-icon-cv-block">
                <a href="#" className="nav__cv-link">Download CV</a>
                <SocialIcons />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Header;