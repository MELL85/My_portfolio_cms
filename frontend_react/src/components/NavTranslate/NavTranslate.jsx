import React, { useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../providers/ThemeProvider';

import { useLocalStorage } from '../../hooks/useLocalStorage';

import './NavTranslate.scss';
import images from '../../constants/images';

const locales = {
    en: { title: <img src={images.usaR} alt="en" /> },
    ua: { title: <img src={images.uaR} alt="ua" /> }
}

const NavTranslate = (props) => {

    const [theme, setTheme] = useContext(ThemeContext);

    const [savedTheme, setSavedTheme] = useLocalStorage('theme', 'dark');

    useEffect(() => {
        console.log('Saved Theme:', savedTheme);
    }, [savedTheme]);

    useEffect(() => {
        if (!savedTheme) {
            setSavedTheme(theme);
        } else {
            setTheme(savedTheme);
        }
    }, []);

    const changeTheme = () => {
        // setTheme(theme === 'dark' ? 'light' : 'dark');

        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        setSavedTheme(newTheme);
    }

    const classActive = props.active ? 'active' : null;

    const { t, i18n } = useTranslation();

    return (
        <div className={`translate ${classActive} ${theme === 'dark' ? 'dark' : 'light'}`}>
            <div className="container">
                <div className="translate__head-block app__flex">
                    <div className="translate__main-block">
                        {Object.keys(locales).map((locale) => (
                            <li key={locale}>
                                <button
                                    type='submit'
                                    onClick={() => i18n.changeLanguage(locale)}
                                >
                                    {locales[locale].title}
                                </button>
                            </li>
                        ))}
                    </div>

                    <div className="light__block app__flex">
                        <p>{t('navTranslate.dark')}</p>
                        <input id="checkboxInput" type="checkbox" onClick={changeTheme} />
                        <label className="toggleSwitch" for="checkboxInput" >
                        </label>
                        <p>{t('navTranslate.light')}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavTranslate