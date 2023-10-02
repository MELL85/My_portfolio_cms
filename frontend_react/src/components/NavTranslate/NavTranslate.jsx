import React, { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../providers/ThemeProvider';
import { useLocalStorage } from '../../hooks/useLocalStorage';

import { BsSunFill, BsMoonFill } from 'react-icons/bs';

import './NavTranslate.scss';
import images from '../../constants/images';

const locales = {
    en: { title: <img src={images.usaR} alt="en" /> },
    ua: { title: <img src={images.uaR} alt="ua" /> }
}

const NavTranslate = (props) => {
    const { toggleTr, setToggleTr } = props;
    const [theme, setTheme] = useContext(ThemeContext);
    const [savedTheme, setSavedTheme] = useLocalStorage('theme', 'dark');
    const [savedLng, setSavedLng] = useLocalStorage('language', 'en');
    const { t, i18n } = useTranslation();
    const classActive = toggleTr ? 'active' : null;
    const [isChecked, setIsChecked] = useState(theme === 'light');

    useEffect(() => {
        if (!savedTheme) {
            setSavedTheme(theme);
        } else {
            setTheme(savedTheme);
        }
    }, []);

    useEffect(() => {
        if (!savedLng) {
            setSavedLng(i18n.language);
        } else {
            i18n.changeLanguage(savedLng);
        }
    }, []);

    const changeTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        setSavedTheme(newTheme);
        setIsChecked(newTheme === 'light');
    }

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        setSavedLng(lang);
    }

    return (
        <div className={`translate ${classActive} ${theme === 'dark' ? 'dark' : 'light'}`}
            onClick={() => setToggleTr(!toggleTr)}
        >
            <div className="container">
                <div className="translate__head-block app__flex"
                    onClick={e => e.stopPropagation()}
                >
                    <div className="translate__main-block">
                        {Object.keys(locales).map((locale) => (
                            <li key={locale}>
                                <button
                                    className={`${i18n.language === locale ? 'active' : ''}`}
                                    type='submit'
                                    onClick={() => changeLanguage(locale)}
                                >
                                    {locales[locale].title}
                                </button>
                            </li>
                        ))}
                    </div>

                    <div className="light__block app__flex">
                        <BsMoonFill className="iconMoon" />
                        {/* <p>{t('navTranslate.dark')}</p> */}
                        <input
                            id="checkboxInput"
                            type="checkbox"
                            checked={isChecked}
                            onClick={() => changeTheme()}
                        />
                        <label className="toggleSwitch" for="checkboxInput" >
                        </label>
                        {/* <p>{t('navTranslate.light')}</p> */}
                        <BsSunFill className="iconSun" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavTranslate