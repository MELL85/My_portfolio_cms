import React from 'react';

import { IoIosMail, IoIosConstruct } from 'react-icons/io';
import { RiMessage2Fill } from 'react-icons/ri';
import { BsFillGrid3X3GapFill } from 'react-icons/bs';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { GiSkills } from 'react-icons/gi';

import my_logo_icon_2 from '../../assets/logo/my_logo_icon_2.png';

import './NavbarLeft.scss';




const Navbar = () => {
    return (
        <nav className="app__navbarLeft">
            <div className="app__navbarLeft-logo">
                <img src={my_logo_icon_2} alt="logo" />
            </div>
            <ul className='app__navbarLeft-links-block'>
                {[
                    [<IoPersonCircleOutline />, 'about'],
                    [<IoIosConstruct />, 'services'],
                    [<BsFillGrid3X3GapFill />, 'work'],
                    [<GiSkills />, 'skills'],
                    [<RiMessage2Fill />, 'testimonials'],
                    [<IoIosMail />, 'contact']
                ].map((item) => (
 
                    <li className='app__flex app__navbarLeft-links' key={`link-${item}`} >
                        <div className="app__navbarLeft-dot" />
                        <a href={`#${item[1]}`} className="app__navbarLeft-link" >
                            {item[0]}
                            <p className="app__navbarLeft-link-text">{item[1]}</p>
                        </a>
                    </li>

                ))}
            </ul>

        </nav>
    )
}

export default Navbar;