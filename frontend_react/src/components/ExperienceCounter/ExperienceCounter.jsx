import React from 'react';

import './ExperienceCounter.scss';

const ExperienceCounter = (props) => {

    const { iconC, titleC, textC } = props;


    return (
        <div className="counter__item">
            <div className="counter__item-icon-block">
                <div className="counter__item-icon">{iconC}</div>
                <h4 className="counter__item-title">{titleC}</h4>
            </div>
            <h6 className="counter__item-title-down">{textC}</h6>
        </div>
    );


}

export default ExperienceCounter;