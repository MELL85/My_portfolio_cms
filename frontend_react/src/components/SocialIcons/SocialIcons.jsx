import React from 'react';
import { IoMdMail } from 'react-icons/io';
import { FaTelegramPlane, FaLinkedin, FaWhatsapp, FaInstagram } from 'react-icons/fa';

import './SocailIcons.scss';

const SocialIcons = () => {
    return (
        <div className="socialIcons__block">
            <a href="https://telegram.me/Phoenix8188"
                target="_blank"
                className="socialIcons__icon socialIcons__telegram">
                <FaTelegramPlane />
            </a>
            <a href="https://wa.me/380674038188"
                target="_blank"
                className="socialIcons__icon socialIcons__whatsapp">
                <FaWhatsapp />
            </a>
            <a href="https://www.linkedin.com/in/%D0%B5%D0%B2%D0%B3%D0%B5%D0%BD%D0%B8%D0%B9-%D0%BC%D0%B5%D0%BB%D1%8C%D0%BD%D0%B8%D0%BA-885a2a14a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                className="socialIcons__icon socialIcons__linkedin">
                <FaLinkedin />
            </a>
            <a href="https://instagram.com/melnyk_evgen?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr"
                target="_blank"
                className="socialIcons__icon socialIcons__instagarm">
                <FaInstagram />
            </a>
            <a href="mailto:melnyk_evgenij@icloud.com"
                className="socialIcons__icon socialIcons__mail">
                <IoMdMail />
            </a>
        </div>
    )
}

export default SocialIcons;