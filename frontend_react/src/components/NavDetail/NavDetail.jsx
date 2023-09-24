import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../providers/ThemeProvider';
import { IoMdMail } from 'react-icons/io';
import { FaTelegramPlane, FaLinkedin, FaWhatsapp, FaInstagram } from 'react-icons/fa';

import './NavDetail.scss';

const NavDetail = () => {
    const { t } = useTranslation();
    const [theme] = useContext(ThemeContext);

    return (
        <div className="nav__detail">
            <div className="nav__name-block">
                <h3 className={`nav__logo-name ${theme === 'dark' ? 'dark' : 'light'}`}>M<span>elnyk</span> Y<span>evhen</span></h3>
                <h4 className={`nav__logo-descr ${theme === 'dark' ? 'dark' : 'light'}`}>Front End Developer</h4>
                <a href="#" className={`nav__cv-link ${theme === 'dark' ? 'dark' : 'light'}`}>{t('navDetail.btn')}</a>
            </div>

            <div className="nav__social">

                <a href="#" target="_blank"
                    className={`nav__icon nav__telegram ${theme === 'dark' ? 'dark' : 'light'}`}>
                    <FaTelegramPlane />
                </a>
                <a href="#" target="_blank"
                    className={`nav__icon nav__whatsapp ${theme === 'dark' ? 'dark' : 'light'}`}>
                    <FaWhatsapp />
                </a>
                <a href="#" target="_blank"
                    className={`nav__icon nav__linkedin ${theme === 'dark' ? 'dark' : 'light'}`}>
                    <FaLinkedin />
                </a>
                <a href="#" target="_blank"
                    className={`nav__icon nav__instagram ${theme === 'dark' ? 'dark' : 'light'}`}>
                    <FaInstagram />
                </a>
                <a href="mailto:melnyk_evgenij@icloud.com"
                    target="_blank"
                    className={`nav__icon nav__mail ${theme === 'dark' ? 'dark' : 'light'}`}>
                    <IoMdMail />
                </a>
            </div>

            <div className="nav__contact">
                <p className={`nav__contact-item ${theme === 'dark' ? 'dark' : 'light'}`}>{t('navDetail.contact')}</p>
                <a href="tel:+380674038188" className={`nav__contact-item ${theme === 'dark' ? 'dark' : 'light'}`}>+38 067 403 81 88</a>
            </div>
        </div>
    )
}

export default NavDetail;