import React from 'react';
import { BsInstagram, BsLinkedin, BsTelegram } from 'react-icons/bs';

const SocialMedia = () => {
    return (
        <div className="app__social">
            <div>
                <BsTelegram />
            </div>
            <div>
                <BsLinkedin />
            </div>
            <div>
                <BsInstagram />
            </div>
        </div>
    )
}

export default SocialMedia;