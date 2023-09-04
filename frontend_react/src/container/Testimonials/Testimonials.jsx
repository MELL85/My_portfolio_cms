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

  useEffect(() => {
    const query = '*[_type == "testimonials"]';

    client.fetch(query)
      .then((data) => {
        setTestimonials(data);
      })
  }, [])

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

            {/* <>
              {testimonials.length && (
                <>
                  <div className="testimonial__carousel-item app__flex">
                    <img src={urlFor(Testimonials[currentIndex].imgUrl)} alt={testimonials} />
                  </div>
                </>
              )}
            </> */}

            {/* <div className="carousel">
              <div className="testimonials__card-block">
                <div className="testimonials__card-item-block">
                  <p className="testimonials__card-item-text">Excellent after-sales service, responds quickly to doubts, helps in solving problems and the source code is very good. Congratulations !!!</p>
                  <div className="testimonials__card-img-block">
                    <img src="https://randomuser.me/api/portraits/women/0.jpg" className="testimonials__card-img" alt="" />
                    <p className="testimonials__card-img-text">John Doe</p>
                  </div>
                </div>

                <div className="testimonials__card-item-block"></div>
                <div className="testimonials__card-item-block"></div>
                <div className="testimonials__card-item-block"></div>

              </div>
            </div> */}

            {/* <div className="testimonials__open-btn-block">
              <button type="button">More</button>
            </div> */}
          </div>

          <div className="appeal">
            <h3 className="appeal__title">Let’s work together</h3>
            <p className="appeal__text">The key to building long term relationships is trust. I take the responsbility of being your development partner seriously. My design agreement gives you peace of mind that your intellectual property is safe guarded.</p>

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