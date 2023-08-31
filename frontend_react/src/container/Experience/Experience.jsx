import React from 'react';

import { dataProgress, dataCounter } from '../../constants/dataList';
import { AppWrap } from '../../wrapper';
// import ExperienceProgressList from '../../components/experienceProgressList/ExperienceProgressList';
import { ExperienceItemList, ExperienceCounterList } from '../../components';

import './Experience.scss';

const Experience = () => {
  return (
    <div className="container">
      <div className="experience__block">
        <div className="experience__block-up">
          <div className="experience__empty-block">
            <h3 className="experience__empty-text">M<span>elnyk</span>Y<span>evhen</span></h3>
          </div>
          <div className="experience__block-item-list"><ExperienceItemList /></div>
          {/* <div className="experience__block-progress-list"><ExperienceProgressList dataProgress={dataProgress} /></div> */}
        </div>
        <div className="experience__block-counter-list"> <ExperienceCounterList dataCounter={dataCounter} /></div>
      </div>

    </div>
  )
}

export default AppWrap(Experience, 'experience');