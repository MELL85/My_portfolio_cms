import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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
            <img src={images.worldMap} alt="worldMap" />
          </div>

          <div className="testimonials__carousel-block">
            {testimonials.length && (
              <>
                <div className="testimonial__carousel-item app__flex">
                  <img src={urlFor(test.imageurl)} alt="testimonial" />
                  <div className="testimonial__carousel-content">
                    <p>{test.feedback}</p>
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
              <button type="button" className="contact-me__btn">Hire Me</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppWrap(Testimonials, 'testimonials');