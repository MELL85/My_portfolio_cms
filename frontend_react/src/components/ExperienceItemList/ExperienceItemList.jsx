import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';

import { client } from '../../client';

import './ExperienceItemList.scss';

const ExperienceItemList = () => {

    const [experience, setExperience] = useState([]);

    useEffect(() => {
        const query = '*[_type == "experiences"]';

        client.fetch(query)
            .then((data) => setExperience(data))
    }, [])

    return (
        <div className="experience__wrapper">
            <div className="experience__line"></div>
            <div className="experience__list-block">
                <h5 className="experience__title">WORK <span>EXPERIENCE</span></h5>
                <ul className="experience__list">
                    <motion.div>
                        {experience.map((experience) => (
                            <motion.div
                                className="experience__item"
                                key={experience.year}
                            >
                                <div className="experience__year">
                                    <p>{experience.year}</p>
                                </div>

                                <motion.div className="experience__works">
                                    {experience.works.map((work) => (
                                        <>
                                            <motion.div
                                                whileInView={{ opacity: [0, 1] }}
                                                transition={{ duration: 0.5 }}
                                                className="experience__list-item-work"
                                                data-tip
                                                data-for={work.name}
                                                key={work.name}
                                            >
                                                <li className="experience__list-item">
                                                    <div className="experience__list-item-block">
                                                        <h5 className="experience__list-item-head-title">{work.name}</h5>
                                                        <p className="experience__list-item-title">{work.company}</p>
                                                    </div>
                                                </li>
                                            </motion.div>

                                            <Tooltip
                                                id={work.name}
                                                effect="solid"
                                                arrowColor="#fff"
                                                className="experience-tooltip"
                                            >
                                                {work.desc}
                                            </Tooltip>
                                        </>
                                    ))}
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>
                </ul>
            </div>
        </div>
    )
}

export default ExperienceItemList;
