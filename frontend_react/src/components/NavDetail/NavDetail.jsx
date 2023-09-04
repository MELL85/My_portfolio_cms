import React from 'react'
import { IoMdMail, IoLogoInstagram } from 'react-icons/io';
import { FaTelegramPlane, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

import './NavDetail.scss';

const NavDetail = () => {

    return (
        <div className="nav__detail">
            <div className="nav__name-block">
                <h3 className="nav__logo-name">M<span>elnyk</span> Y<span>evhen</span></h3>
                <h4 className="nav__logo-descr">Front End Developer</h4>
                <a href="#" className="nav__cv-link">Download CV</a>
            </div>

            <div className="nav__social">

                <a href="#" target="_blank" className="nav__icon nav__telegram">
                    <FaTelegramPlane />
                </a>
                <a href="#" target="_blank" className="nav__icon nav__whatsapp">
                    <FaWhatsapp />
                </a>
                <a href="#" target="_blank" className="nav__icon nav__linkedin">
                    <FaLinkedin />
                </a>
                <a href="#" target="_blank" className="nav__icon nav__instagram">
                    <IoLogoInstagram />
                </a>
                <a href="mailto:melnyk_evgenij@icloud.com" target="_blank" className="nav__icon nav__mail">
                    <IoMdMail />
                </a>
            </div>

            <div className="nav__contact">
                <p className="nav__contact-item">My personal contact</p>
                <a href="tel:+380674038188" className="nav__contact-item">+38 067 403 81 88</a>
            </div>
        </div>
    )

}

export default NavDetail;