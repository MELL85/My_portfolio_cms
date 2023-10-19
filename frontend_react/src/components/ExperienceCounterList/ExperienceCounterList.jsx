import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../../providers/ThemeProvider';
import { useTranslation } from 'react-i18next';
import { client } from '../../client';

import { PiBriefcaseLight } from 'react-icons/pi';
import { IoTimeOutline } from 'react-icons/io5';
import { AiOutlineLike } from 'react-icons/ai';

import './ExperienceCounterList.scss';

const ExperienceCounterList = () => {

    const { t } = useTranslation();
    const [theme] = useContext(ThemeContext);
    const [counter, setCounter] = useState([]);

    useEffect(() => {
        const query = '*[_type == "counter"]';

        client.fetch(query)
            .then((data) => setCounter(data))
    }, [])

    return (
        <div className="counter">
            <div className={`counter__item-block ${theme === 'dark' ? 'dark' : 'light'}`}>
                {counter.map((count, index) => (
                    <React.Fragment key={index} >
                        <div className="counter__item" key={`projects-${index}`}>
                            <div className="counter__item-icon-block">
                                <div className={`counter__item-icon ${theme === 'dark' ? 'dark' : 'light'}`}><PiBriefcaseLight /></div>
                                <h4 className={`counter__item-title ${theme === 'dark' ? 'dark' : 'light'}`}>{count.projects}</h4>
                            </div>
                            <h6 className="counter__item-title-down">{t('counter.item1.text')}</h6>
                        </div>

                        <div className="counter__item" key={`hours-${index}`}>
                            <div className="counter__item-icon-block">
                                <div className={`counter__item-icon ${theme === 'dark' ? 'dark' : 'light'}`}><IoTimeOutline /></div>
                                <h4 className={`counter__item-title ${theme === 'dark' ? 'dark' : 'light'}`} >{count.hours}</h4>
                            </div>
                            <h6 className="counter__item-title-down">{t('counter.item2.text')}</h6>
                        </div>

                        <div className="counter__item" key={`clients-${index}`}>
                            <div className="counter__item-icon-block">
                                <div className={`counter__item-icon ${theme === 'dark' ? 'dark' : 'light'}`}><AiOutlineLike /></div>
                                <h4 className={`counter__item-title ${theme === 'dark' ? 'dark' : 'light'}`} >{count.clients}</h4>
                            </div>
                            <h6 className="counter__item-title-down">{t('counter.item3.text')}</h6>
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}

export default ExperienceCounterList;