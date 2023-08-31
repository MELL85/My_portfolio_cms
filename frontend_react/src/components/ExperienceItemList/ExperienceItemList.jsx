import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { client } from '../../client';

import './ExperienceItemList.scss';

const ExperienceItemList = () => {

    const [workExperiences, setWorkExperiences] = useState([]);

    useEffect(() => {
        const query = '*[_type == "workExperience"]';

        client.fetch(query)
            .then((data) => setWorkExperiences(data))
    }, [])

    return (
        <div className="experience__list-block">
            <h5 className="experience__title">WORK EXPERIENCE</h5>
            <ul className="experience__list">
                {workExperiences.map((workExperience, index) => (
                    <motion.div
                        whileInView={{ x: [-200, 0], opacity: [0, 1] }}
                        transition={{ duration: 1, ease: 'easeInOut' }}
                        key={workExperience.title + index} >
                        <li className="experience__list-item">
                            <div className="experience__list-item-block">
                                <h5 className="experience__list-item-head-title">{workExperience.name}</h5>
                                <p className="experience__list-item-title">{workExperience.company} <span>{workExperience.desc}</span></p>
                            </div>
                        </li>
                    </motion.div>
                ))}
            </ul>
        </div>
    )
}

export default ExperienceItemList