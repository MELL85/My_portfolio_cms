import React from 'react';

import './NavTranslate.scss';

const NavTranslate = (props) => {

    const classActive = props.active ? 'active' : null;

    return (
        <div className={`translate ${classActive}`}>
            <div className="container">
                <div className="translate__head-block app__flex">
                    <div className="translate__main-block">
                        <a href="#">en</a>
                        <span>|</span>
                        <a href="#">ua</a>
                    </div>
                    <div className="light__block app__flex">
                        <p>theme</p>
                        <label class="light__block-switch">
                            <input type="checkbox" />
                            <span class="light__block-slider round"></span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavTranslate