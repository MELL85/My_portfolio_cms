import React from 'react';

import './NavTranslate.scss';

const NavTranslate = (props) => {

    const classActive = props.active ? 'active' : null;

    return (
        <div className={`translate ${classActive}`}>
            <div className="container">
                <div className="translate__head-block app__flex">
                    <div className="translate__main-block">
                        <button>en</button>
                        <span>|</span>
                        <button>ua</button>
                    </div>
                    <div className="light__block app__flex">
                        <p>dark</p>
                        <input id="checkboxInput" type="checkbox" />
                        <label class="toggleSwitch" for="checkboxInput">
                        </label>
                        <p>light</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavTranslate