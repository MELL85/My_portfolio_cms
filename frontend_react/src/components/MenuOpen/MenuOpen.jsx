import React from 'react'

import {NavDetail} from '../../components';

import './MenuOpen.scss';


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
                            {['about', 'services', 'my work', 'testimonials', 'contact'].map((item) => (
                                <li key={`link-${item}`} className="nav__list-item">
                                    <a href={`#${item}`} className="nav__list-item-link">{item}</a>
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