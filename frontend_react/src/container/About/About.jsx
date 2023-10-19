import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { client } from '../../client';

import { SocialIcons } from '../../components';
import myFoto from '../../assets/img/myFoto.jpg';
import './About.scss';

const About = () => {
  const { i18n } = useTranslation();
  const locale = i18n.language;
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query)
      .then((data) => setAbouts(data))
  }, [])


  useEffect(() => {
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    function handleScroll() {
      const frame = document.querySelector('.frame');
      if (isInViewport(frame)) {
        frame.classList.add('active');
        window.removeEventListener('scroll', handleScroll);
      } else {
        frame.classList.remove('active');
      }
    }

    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="container">
      <div className="about-me__head-block">
        <div className="about-me__card">
          <figure>
            <img src={myFoto} alt="" className="about-me__img" />
            <div className="about-me__frame">
              <span className="frame"></span>
            </div>
          </figure>
        </div>
        <div className="about-me__title-block">
          {abouts.map((about, index) => (
            <motion.div
              whileInView={{ scale: [0, 1], opacity: [0, 1] }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              key={about.description + index} >
              <h5 className="about-me__title">{locale === 'en' ? about.description : about.descriptionUA}</h5>
            </motion.div>
          ))}

          <SocialIcons />
        </div>
        <div className="about-me__desctop-line-block"></div>
      </div>
    </div>
  )
}

export default About;