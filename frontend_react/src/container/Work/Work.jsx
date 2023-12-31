import React, { useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../providers/ThemeProvider';
import { AppWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import './Work.scss';

const Work = () => {
  const { t, i18n } = useTranslation();
  const locale = i18n.language;
  const [theme] = useContext(ThemeContext);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query)
      .then((data) => {
        setWorks(data);
        setFilterWork(data);
      })
  }, [])


  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500)
  }

  return (
    <div className="container">
      <div className="work__wrapper">
        <div className="work__head-title-block">
          <h4 className="work__head-title">{t('works.headTitle')} <strong>{t('works.headTitleStrong')}</strong></h4>
        </div>

        <div className="work__filter">
          {['Vanilla JS', 'Web App', 'React JS', 'All'].map((item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`work__filter-item app__flex ${activeFilter === item ? 'item-active' : ''} ${theme === 'dark' ? 'dark' : 'light'}`}
            >
              {item}
            </div>
          ))}
        </div>

        <motion.div
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="work__portfolio"
        >
          {filterWork.map((work, index) => (
            <div className={`work__item app__flex ${theme === 'dark' ? 'dark' : 'light'}`} key={index} >
              <div className="work__img app__flex">
                <img src={urlFor(work.imgUrl)} alt={work.name} />

                <motion.div
                  transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                  className={`work__hover-block app__flex ${theme === 'dark' ? 'dark' : 'light'}`}
                >
                  <a href={work.projectLink} target="_blank" rel="norefern" >
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex work__link"
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>

                  <a href={work.codeLink} target="_blank" rel="norefern" >
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex work__git"
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>
                </motion.div>
              </div>

              <div className="work__content app_flex">
                <h4 className="work__content-title">{locale === 'en' ? work.title : work.titleUA}</h4>
                <p className="work__content-text" style={{ marginTop: 10 }}>{locale === 'en' ? work.description : work.descriptionUA}</p>

                <div className={`work__tag app_flex ${theme === 'dark' ? 'dark' : 'light'}`}>
                  <p className="work__tag-item">{work.tags[0]}</p>
                </div>
              </div>

            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default AppWrap(Work, 'work');