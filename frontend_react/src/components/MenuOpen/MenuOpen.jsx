import React from 'react'

import {NavDetail} from '../../components';

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

    const classActive = props.active ? 'active' : null;

    return (
        <section className={`nav ${classActive}`}>
            <div className="container" >
                <div className="nav__head-block">
                    <div className="nav__list-head-block">
                        <div className="nav__text-media-block">
                            <p className="nav__text-media">explore</p>
                        </div>
                        <ul className="nav__list">
                            {['about', 'services', 'work', 'testimonials', 'contact'].map((item) => (
                                <li key={`link-${item}`} className="nav__list-item">
                                    <a href={`#${item}`} className="nav__list-item-link" >{item}</a>
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