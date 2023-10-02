import React, { useContext } from 'react';
import { ThemeContext } from '../../providers/ThemeProvider';
import ExperienceCounter from '../ExperienceCounter/ExperienceCounter';

import './ExperienceCounterList.scss';

const ExperienceCounterList = ({ dataCounter }) => {

    const elements = dataCounter.map(item => {

        const { id, ...itemProps } = item;

        return (
            <ExperienceCounter key={id} {...itemProps} />
        )

    })

    const [ theme ] = useContext(ThemeContext);

    return (
        <div className="counter">
            <div className={`counter__item-block ${theme === 'dark' ? 'dark' : 'light'}`}>
                {elements}
            </div>
        </div>
    )
}

export default ExperienceCounterList;