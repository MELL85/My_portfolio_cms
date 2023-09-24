import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../providers/ThemeProvider';
import { NavDetail } from '../../components';

import './MenuOpen.scss';


// window.onscroll = () => {
//     const menu = document.querySelector('#navbar');
//     const menu2 = document.querySelector('#navbar-desctop');
//     const active = window.scrollY;

//     if (active > 300) {
//         menu.classList.add('navbar_scrolled');
//         menu2.classList.add('navbar_scrolled');
//     } else if (active < 100) {
//         menu.classList.remove('navbar_scrolled');
//         menu2.classList.remove('navbar_scrolled');
//     }
// }


const MenuOpen = (props) => {
    const { t } = useTranslation();
    const classActive = props.active ? 'active' : null;
    const [theme] = useContext(ThemeContext);

    return (
        <section className={`nav ${classActive} ${theme === 'dark' ? 'dark' : 'light'}`}>
            <div className="container" >
                <div className="nav__head-block">
                    <div className="nav__list-head-block">
                        <div className="nav__text-media-block">
                            <p className="nav__text-media">explore</p>
                        </div>
                        <ul className="nav__list">
                            {[t('menuOpen.about'), t('menuOpen.services'), t('menuOpen.work'), t('menuOpen.testimonials'), t('menuOpen.contact')].map((item) => (
                                <li key={`link-${item}`} className="nav__list-item">
                                    <a href={`#${item}`} className={`nav__list-item-link ${theme === 'dark' ? 'dark' : 'light'}`} >{item}</a>
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