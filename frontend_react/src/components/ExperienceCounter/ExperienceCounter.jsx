import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../providers/ThemeProvider';
import './ExperienceCounter.scss';

const ExperienceCounter = (props) => {
    const { i18n } = useTranslation();
    const locale = i18n.language;

    const [ theme ] = useContext(ThemeContext);

    const { iconC, titleC, textC, textCUA } = props;

    return (
        <div className="counter__item">
            <div className="counter__item-icon-block">
                <div className={`counter__item-icon ${theme === 'dark' ? 'dark' : 'light'}`}>{iconC}</div>
                <h4 className={`counter__item-title ${theme === 'dark' ? 'dark' : 'light'}`}>{titleC}</h4>
            </div>
            <h6 className="counter__item-title-down">{locale === 'en' ? textC : textCUA}</h6> 
        </div>
    );


}

export default ExperienceCounter;