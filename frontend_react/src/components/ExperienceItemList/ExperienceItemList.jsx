import React, { useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';
import { useTranslation } from 'react-i18next';
import { client } from '../../client';
import { ThemeContext } from '../../providers/ThemeProvider';

import './ExperienceItemList.scss';

const ExperienceItemList = () => {
    const { t, i18n } = useTranslation();
    const locale = i18n.language;
    const [theme] = useContext(ThemeContext);
    const [experience, setExperience] = useState([]);

    useEffect(() => {
        const query = '*[_type == "experiences"]';

        client.fetch(query)
            .then((data) => setExperience(data))
    }, [])

    return (
        <div className="experience__wrapper">
            <div className="experience__line"></div>

            <motion.div
                whileInView={{ height: ['0%', '102%'], borderLeft: '2px solid', borderColor: ['transparent', '#f5cf02'] }}
                transition={{ duration: 0.8 }}
                className="experience__list-block">

                <h5 className="experience__title">{t('worksExp.title')}<span>{t('worksExp.titleSpan')}</span></h5>
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
                                                data-tooltip-id={work.name}
                                                key={work.name}
                                            >
                                                <li className="experience__list-item">
                                                    <div className="experience__list-item-block">
                                                        <h5 className="experience__list-item-head-title">{locale === 'en' ? work.name : work.nameUA}</h5>
                                                        <p className="experience__list-item-title">{work.company}</p>
                                                    </div>
                                                </li>
                                            </motion.div>

                                            <Tooltip
                                                id={work.name}
                                                effect="solid"
                                                arrowColor="#fff"
                                                className={`experience-tooltip ${theme === 'dark' ? 'dark' : 'light'}`}
                                            >
                                                {locale === 'en' ? work.desc : work.descUA}
                                            </Tooltip>
                                        </>
                                    ))}
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>
                </ul>

            </motion.div>

        </div>
    )
}

export default ExperienceItemList;
