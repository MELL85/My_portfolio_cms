import React from 'react';

import { useTranslation } from 'react-i18next';

import './NavTranslate.scss';
import images from '../../constants/images';

const locales = {
    en: { title: <img src={images.usaR} alt="en" /> },
    ua: { title: <img src={images.uaR} alt="ua" /> }
}

const NavTranslate = (props) => {

    const classActive = props.active ? 'active' : null;

    const { i18n } = useTranslation();

    return (
        <div className={`translate ${classActive}`}>
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
                        <p>dark</p>
                        <input id="checkboxInput" type="checkbox" />
                        <label class="toggleSwitch" for="checkboxInput">
                        </label>
                        <p>light</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavTranslate