import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { useTranslation } from 'react-i18next';

import { SocialIcons } from '../../components';
import './About.scss';
import { client } from '../../client';

import myFoto from '../../assets/img/myFoto.jpg';

const About = () => {

  const { i18n } = useTranslation();
  const locale = i18n.language;

  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query)
      .then((data) => setAbouts(data))
  }, [])

  return (
    <div className="container">
      <div className="about-me__head-block">
        <div className="about-me__card">
          <figure>
            <img src={myFoto} alt="" className="about-me__img" />
            <span className="about-me__frame"></span>
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