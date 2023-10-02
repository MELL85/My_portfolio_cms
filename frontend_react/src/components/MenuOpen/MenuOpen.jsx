import React, { useContext, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../providers/ThemeProvider';
import { NavDetail } from '../../components';
import { useOutsideClick } from '../../hooks/useOutsideClick';

import './MenuOpen.scss';

const MenuOpen = (props) => {
    const { t } = useTranslation();
    const { active, setActive, burgerBtnRef } = props;
    const classActive = active ? 'active' : null;
    const [theme] = useContext(ThemeContext);

   

    const handleClickOutside = () => {

        console.log('outside');

        setActive(false);
    }

    // const ref = useOutsideClick(handleClickOutside);
    const ref = useRef();
    useOutsideClick(ref, () => setActive(false));
    // useOutsideClick(ref, handleClickOutside);

    return (
        <section className={`nav ${classActive} ${theme === 'dark' ? 'dark' : 'light'} `}
            ref={ref}
            onClick={(e) => e.stopPropagation()}
        >
            <div className="container" >
                <div className="nav__head-block">
                    <div className="nav__list-head-block">
                        <div className="nav__text-media-block">
                            <p className="nav__text-media">explore</p>
                        </div>
                        <ul className="nav__list">
                            {[t('menuOpen.about'),
                            t('menuOpen.services'),
                            t('menuOpen.work'),
                            t('menuOpen.testimonials'),
                            t('menuOpen.contact')].map((item) => (
                                <li key={`link-${item}`} className="nav__list-item">
                                    <a href={`#${item}`}
                                        className={`nav__list-item-link ${theme === 'dark' ? 'dark' : 'light'}`}
                                        onClick={() => setActive(false)}
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="nav__list-head-block">
                        <div className="nav__text-media-block">
                            <p className="nav__text-media">contact</p>
                        </div>
                        <NavDetail />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MenuOpen;