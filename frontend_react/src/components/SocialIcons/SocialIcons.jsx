import React from 'react';
import { IoMdMail, IoLogoInstagram } from 'react-icons/io';
import { FaTelegramPlane, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

import './SocailIcons.scss';

const SocialIcons = () => {
    return (
        <div className="socialIcons__block">
            <a href="#" target="_blank" className="socialIcons__icon socialIcons__telegram"><FaTelegramPlane /></a>
            <a href="#" target="_blank" className="socialIcons__icon socialIcons__whatsapp"><FaWhatsapp /></a>
            <a href="#" target="_blank" className="socialIcons__icon socialIcons__linkedin"><FaLinkedin /></a>
            <a href="#" target="_blank" className="socialIcons__icon socialIcons__instagarm"><IoLogoInstagram /></a>
            <a href="#" className="socialIcons__icon socialIcons__mail"><IoMdMail /></a>
        </div>
    )
}

export default SocialIcons;