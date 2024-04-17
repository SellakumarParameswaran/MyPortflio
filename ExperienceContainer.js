import React from 'react';
import { Element } from 'react-scroll';
import ExperienceBox from '../ExperienceBox/ExperienceBox';
import './ExperienceContainer.css';

const ExperienceContainer = () => {
  return (
    <Element className="experienceContainer" id="exp">
<h1>Experience</h1>
<div className='experienceContainer___info'>
    <ExperienceBox number="+2" title='clients' />
    <ExperienceBox number="6" title='Projects'  style={{backgroundColor: '#00FF00'}}/>
    <ExperienceBox number="1" title='Years Teaching' />
    <ExperienceBox number="30+" title='Students got tranined' />
</div>
    </Element>
    
  )
}

export default ExperienceContainer
