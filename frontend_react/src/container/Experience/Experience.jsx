import React, { useContext } from 'react';
import { ThemeContext } from '../../providers/ThemeProvider';
import { AppWrap } from '../../wrapper';
import { ExperienceItemList, ExperienceCounterList, Skills } from '../../components';

import './Experience.scss';

const Experience = () => {
  const [theme] = useContext(ThemeContext);

  return (
    <div className="container">
      <div className="experience__block">
        <div className="experience__block-up">

          <div className="experience__empty-wrapper">
            <div className="experience__empty-block">
              <h3 className={`experience__empty-text ${theme === 'dark' ? 'dark' : 'light'}`}>M<span>elnyk</span>Y<span>evhen</span></h3>
            </div>
          </div>

            <div className="experience__block-item-list"><ExperienceItemList /></div>
            <div className="experience__block-progress-list"><Skills /></div>


        </div>
        <div className="experience__block-counter-list"> <ExperienceCounterList /></div>
      </div>

    </div>
  )
}

export default AppWrap(Experience, 'experience');
// export default AppWrap(
//   MotionWrap(Experience, 'App-experience'), 
//   'experience',
//   "app__whitebg"
//   );