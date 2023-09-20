import React from 'react';
import { motion } from 'framer-motion';

import { useTranslation } from 'react-i18next';

import { NavbarLeft, SocialIcons } from '../../components';
import './Header.scss';


const Header = () => {

  const { t, i18n } = useTranslation();

  return (
    <div className="container">
      <div className="header__wrapper">
        <div className="menu">
          <aside className="menu__head-block">
            <NavbarLeft />
          </aside>
        </div>
        <div className="header__banner">
          <div className="header__text-block">
            <motion.div
              whileInView={{ x: [200, 0], opacity: [0, 1] }}
              transition={{ duration: 0.7 }}
            > 
              <h4 className="header__text-title">{t('header.hello')}</h4>
            </motion.div>

            <motion.div
              whileInView={{ x: [-200, 0], opacity: [0, 1] }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="header__text-head-title">{t('header.name')}</h1>
            </motion.div>

            <div className="header__desctop-block">
              <h5 className="header__desctop-head-text">{t('header.description')}</h5>

              <div className="header__desctop-icon-cv-block">
                <a href="#" className="nav__cv-link">{t('header.download')}</a>
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