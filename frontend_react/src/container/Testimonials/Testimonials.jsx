import React, { useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../providers/ThemeProvider';
import { AppWrap } from '../../wrapper';
import { urlFor, client } from '../../client';

import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import images from '../../constants/images';
import './Testimonials.scss';

const Testimonials = () => {
  const {t, i18n } = useTranslation();
  const locale = i18n.language;
  const [ theme ] = useContext(ThemeContext);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index);
  }

  useEffect(() => {
    const query = '*[_type == "testimonials"]';

    client.fetch(query)
      .then((data) => {
        setTestimonials(data);
      })
  }, [])

  const test = testimonials[currentIndex];

  return (
    <div className="container">
      <div className={`testimonials__head-block ${theme === 'dark' ? 'dark' : 'light'}`}>
        <div className="testimonials__head-title-block">
          <h4 className={`testimonials__head-title ${theme === 'dark' ? 'dark' : 'light'}`}>{t('testimonials.headTitle')}</h4>
        </div>

        <div className="testimonials__main-block">
 
          <div className="testimonials__map-block">
            <img src={images.worldMap} alt="worldMap" className="testimonials__map-img" />

            <div className="testimonials__map-block-list">
              <div className="testimonials__map-block-list-item item__1">
                <img src={images.people_1}
                  alt="testimonials-img"
                  data-tooltip-id={1}
                />
                <Tooltip
                  id={1}
                  effect="solid"
                  arrowColor="#fff"
                  className="experience-tooltip"
                >
                  <p className="testimonials__list-item-feedback">{t('testimonials.item1.feedback')}</p>
                  <h4 className="testimonials__list-item-name">{t('testimonials.item1.name')}</h4>
                </Tooltip>
              </div>

              <div className="testimonials__map-block-list-item item__2">
                <img src={images.people_2}
                  alt="testimonials-img"
                  data-tooltip-id={2}
                />
                <Tooltip
                  id={2}
                  effect="solid"
                  arrowColor="#fff"
                  className="experience-tooltip"
                >
                  <p className="testimonials__list-item-feedback">{t('testimonials.item2.feedback')}</p>
                  <h4 className="testimonials__list-item-name">{t('testimonials.item2.name')}</h4>
                </Tooltip>
              </div>

              <div className="testimonials__map-block-list-item item__3">
                <img src={images.people_3}
                  alt="testimonials-img"
                  data-tooltip-id={3}
                />
                <Tooltip
                  id={3}
                  effect="solid"
                  arrowColor="#fff"
                  className="experience-tooltip"
                >
                  <p className="testimonials__list-item-feedback">{t('testimonials.item3.feedback')}</p>
                  <h4 className="testimonials__list-item-name">{t('testimonials.item3.name')}</h4>
                </Tooltip>
              </div>

              <div className="testimonials__map-block-list-item item__4">
                <img src={images.people_4}
                  alt="testimonials-img"
                  data-tooltip-id={4}
                />
                <Tooltip
                  id={4}
                  effect="solid"
                  arrowColor="#fff"
                  className="experience-tooltip"
                >
                  <p className="testimonials__list-item-feedback">{t('testimonials.item4.feedback')}</p>
                  <h4 className="testimonials__list-item-name">{t('testimonials.item4.name')}</h4>
                </Tooltip>
              </div>

              <div className="testimonials__map-block-list-item item__5">
                <img src={images.people_5}
                  alt="testimonials-img"
                  data-tooltip-id={5}
                />
                <Tooltip
                  id={5}
                  effect="solid"
                  arrowColor="#fff"
                  className="experience-tooltip"
                >
                  <p className="testimonials__list-item-feedback">{t('testimonials.item5.feedback')}</p>
                  <h4 className="testimonials__list-item-name">{t('testimonials.item5.name')}</h4>
                </Tooltip>
              </div>

              <div className="testimonials__map-block-list-item item__6">
                <img src={images.people_6}
                  alt="testimonials-img"
                  data-tooltip-id={6}
                />
                <Tooltip
                  id={6}
                  effect="solid"
                  arrowColor="#fff"
                  className="experience-tooltip"
                >
                  <p className="testimonials__list-item-feedback">{t('testimonials.item6.feedback')}</p>
                  <h4 className="testimonials__list-item-name">{t('testimonials.item6.name')}</h4>
                </Tooltip>
              </div>

              <div className="testimonials__map-block-list-item item__7">
                <img src={images.people_7}
                  alt="testimonials-img"
                  data-tooltip-id={7}
                />
                <Tooltip
                  id={7}
                  effect="solid"
                  arrowColor="#fff"
                  className="experience-tooltip"
                >
                  <p className="testimonials__list-item-feedback">{t('testimonials.item7.feedback')}</p>
                  <h4 className="testimonials__list-item-name">{t('testimonials.item7.name')}</h4>
                </Tooltip>
              </div>

              <div className="testimonials__map-block-list-item item__8">
                <img src={images.people_8}
                  alt="testimonials-img"
                  data-tooltip-id={8}
                />
                <Tooltip
                  id={8}
                  effect="solid"
                  arrowColor="#fff"
                  className="experience-tooltip"
                >
                  <p className="testimonials__list-item-feedback">{t('testimonials.item8.feedback')}</p>
                  <h4 className="testimonials__list-item-name">{t('testimonials.item8.name')}</h4>
                </Tooltip>
              </div>
            </div>

          </div>

          <div className="testimonials__carousel-block">
            {testimonials.length && (
              <>
                <div className={`testimonial__carousel-item app__flex ${theme === 'dark' ? 'dark' : 'light'}`}>
                  <img src={urlFor(test.imageurl)} alt="testimonial" />
                  <div className="testimonial__carousel-content">
                    <p className={`testimonials__carousel-text ${theme === 'dark' ? 'dark' : 'light'}`}>{locale === 'en' ? test.feedbackEn : test.feedbackUa}</p>
                    <div>
                      <h4 className={`testimonials__carousel-title ${theme === 'dark' ? 'dark' : 'light'}`}>{locale === 'en' ? test.name : test.nameUa}</h4>
                      <h5 className={`testimonials__carousel-title ${theme === 'dark' ? 'dark' : 'light'}`}>{test.company}</h5>
                    </div>
                  </div>
                </div>
 
                <div className="testimonials__btns app__flex">
                  <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
                    <HiChevronLeft />
                  </div>

                  <div className="app__flex" onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
                    <HiChevronRight />
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="appeal">
            <motion.div
              whileInView={{ x: [-100, 0], opacity: [0, 1] }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="appeal__title">{t('testimonials.appealTitle')}</h3>
            </motion.div>

            <motion.div
              whileInView={{ scale: [0, 1], opacity: [0, 1] }}
              transition={{ duration: 1, ease: 'easeInOut' }}
            >
              <p className={`appeal__text ${theme === 'dark' ? 'dark' : 'light'}`}>{t('testimonials.appealText')}</p>
            </motion.div>

            <div className="contact-me__btn-block">
              <a href="#contact" className={`contact-me__btn ${theme === 'dark' ? 'dark' : 'light'}`}>{t('testimonials.appealBtn')}</a>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default AppWrap(Testimonials, 'testimonials');