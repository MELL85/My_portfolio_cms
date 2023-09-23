import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { client } from '../../client';

import { NavbarLeft, SocialIcons } from '../../components';
import './Header.scss';

const Header = () => {
  const { t, i18n } = useTranslation();
  const locale = i18n.language;
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query)
      .then((data) => setAbouts(data))
  }, [])

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
              {abouts.map((about, index) => (
                <motion.div
                  whileInView={{ scale: [0, 1], opacity: [0, 1] }}
                  transition={{ duration: 1, ease: 'easeInOut' }}
                  key={about.description + index} >
                  <h5 className="header__desctop-head-text">{locale === 'en' ? about.description : about.descriptionUA}</h5>
                </motion.div>
              ))}

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