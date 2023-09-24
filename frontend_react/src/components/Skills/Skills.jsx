import React, { useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../providers/ThemeProvider';
// import { AppWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Skills.scss';

const Skills = () => {
    const { t } = useTranslation();
    const [skills, setSkills] = useState([]);
    const [ theme ] = useContext(ThemeContext);

    useEffect(() => {
        const query = '*[_type == "skills"]';

        client.fetch(query)
            .then((data) => {
                setSkills(data);
            })
    }, [])

    return (
        <div className="progress__wrapper">
            <div className="progress__line"></div>
            <div className="progress">
                <h5 className="progress__head-title">{t('skills.skills')}</h5>
                <div className="progress__skills-container">
                    <motion.div className="progress__skills-list">
                        {skills.map((skill) => (
                            <motion.div
                                whileInView={{ opacity: [0, 1] }}
                                transition={{ duration: 0.5 }}
                                className={`progress__skills-item app__flex ${theme === 'dark' ? 'dark' : 'light'}`}
                                key={skill.name}
                            >
                                <div className="app__flex" style={{ backgroundColor: skill.bgColor }}>
                                    <img src={urlFor(skill.icon)} alt={skill.name} />
                                </div>
                                <p className="progress__skills-item-text">{skill.name}</p>
                            </motion.div>
                        ))} 
                    </motion.div>
                </div>
            </div>
        </div>

    )
}

export default Skills;