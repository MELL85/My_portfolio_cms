import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { urlFor, client } from '../../client';
import { AppWrap } from '../../wrapper';


import './ServSection.scss';

const ServSection = () => {

  const [services, setServices] = useState([]);

  useEffect(() => {
    const query = '*[_type == "services"]';

    client.fetch(query)
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="container" >
      <div className="services__head-title-block">
        <h4 className="services__head-title">Services</h4>
        <p className="services__title-text">Working with mutual respect and trust</p>
      </div>

      <div className="services__block">
        {services.map((service, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="services__item-head-block"
            key={service.title + index}
          >
            <div className="services__item-block">
              <div className="services__hover-block">
                <div className="services__img-block">
                  <img src={urlFor(service.imgUrl)} alt={service.title} />
                </div>
                <div className="services__info-block">
                  <h6 className="services__title" >{service.title}</h6>
                  <p className="services__text" >{service.description}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  )
}

export default AppWrap(ServSection, 'services');