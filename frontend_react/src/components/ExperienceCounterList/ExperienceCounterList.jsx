import React from 'react'

import ExperienceCounter from '../ExperienceCounter/ExperienceCounter';

import './ExperienceCounterList.scss';

const ExperienceCounterList = ({ dataCounter }) => {

    const elements = dataCounter.map(item => {

        const { id, ...itemProps } = item;

        return (
            <ExperienceCounter key={id} {...itemProps} />
        )

    })

    return (
        <div className="counter">
            <div className="counter__item-block">
                {elements}
            </div>
        </div>
    )
}

export default ExperienceCounterList;