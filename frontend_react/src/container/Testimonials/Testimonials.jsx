import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';

import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { AppWrap } from '../../wrapper';
import { urlFor, client } from '../../client';

import images from '../../constants/images';
import './Testimonials.scss';

const Testimonials = () => {

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
      <div className="testimonials__head-block">
        <div className="testimonials__head-title-block">
          <h4 className="testimonials__head-title">My Clients</h4>
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
                  <p className="testimonials__list-item-feedback">Excellent after-sales service, responds quickly to doubts, helps in solving problems and the source code is very good. Congratulations !!!</p>
                  <h4 className="testimonials__list-item-name"> John Doe</h4>
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
                  <p className="testimonials__list-item-feedback">He fixed the security problems . Thank you very much!</p>
                  <h4 className="testimonials__list-item-name">Jim Doe </h4>
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
                  <p className="testimonials__list-item-feedback">The services are high quality, excellent code, and easy to use. Thanks!</p>
                  <h4 className="testimonials__list-item-name">Keyt S.</h4>
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
                  <p className="testimonials__list-item-feedback">Very good for the purpose, just wish i could have more options but still a good service.</p>
                  <h4 className="testimonials__list-item-name">Jack Rork</h4>
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
                  <p className="testimonials__list-item-feedback">Your customer service support response is swift and friendly. I appreciate your timely response.</p>
                  <h4 className="testimonials__list-item-name">Jerry B.</h4>
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
                  <p className="testimonials__list-item-feedback">The design it's very awesome and simple, im totally new on react but it is easy to understand.</p>
                  <h4 className="testimonials__list-item-name">Denzel F.</h4>
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
                  <p className="testimonials__list-item-feedback">This is the best react js development for admin dashbaord</p>
                  <h4 className="testimonials__list-item-name">Rita S.</h4>
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
                  <p className="testimonials__list-item-feedback">Very well coded, took me a while to understand it but now this is my go to template for every project.</p>
                  <h4 className="testimonials__list-item-name">Jacqueline Dow</h4>
                </Tooltip>
              </div>
            </div>

          </div>

          <div className="testimonials__carousel-block">
            {testimonials.length && (
              <>
                <div className="testimonial__carousel-item app__flex">
                  <img src={urlFor(test.imageurl)} alt="testimonial" />
                  <div className="testimonial__carousel-content">
                    <p>{test.feedbackEn}</p>
                    <div>
                      <h4 className="testimonials__carousel-title">{test.name}</h4>
                      <h5 className="testimonials__carousel-title">{test.company}</h5>
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
              <h3 className="appeal__title">Let’s work together</h3>
            </motion.div>

            <motion.div
              whileInView={{ scale: [0, 1], opacity: [0, 1] }}
              transition={{ duration: 1, ease: 'easeInOut' }}
            >
              <p className="appeal__text">The key to building long term relationships is trust. I take the responsbility of being your development partner seriously. My design agreement gives you peace of mind that your intellectual property is safe guarded.</p>
            </motion.div>

            <div className="contact-me__btn-block">
              <a href="#contact" className="contact-me__btn">Hire Me</a>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default AppWrap(Testimonials, 'testimonials');