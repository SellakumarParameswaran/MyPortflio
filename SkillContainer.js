import React from 'react';
import { Element } from 'react-scroll';
import skillimg from '../../pic/skill.jpg';
import './SkillContainer.css';
import { LinearProgress } from '@material-ui/core';


const SkillContainer = () => {
  return (
<Element className='skillcontainer' id='skills'>
<div className='skillContainer__image'>
<img src={skillimg} alt=''/>
</div>
<div className='skillcontainer__text'>
<h2>SKILLSET</h2>

<div className='skillcontainer__skillset'>
<h5>HTML,CSS</h5>
<div className='skillcontainer__slider skillcontainer__slider1'>
<LinearProgress variant="determinate" value={90} />
</div>
</div>


<div className='skillcontainer__skillset'>
<h5>REACT js</h5>
<div className='skillcontainer__slider skillcontainer__slider2'>
<LinearProgress variant="determinate" value={81} />
</div>
</div>


<div className='skillcontainer__skillset'>
<h5>JAVA</h5>
<div className='skillcontainer__slider skillcontainer__slider3'>
<LinearProgress variant="determinate" value={70} />
</div>
</div>


<div className='skillcontainer__skillset'>
<h5>SpringBoot</h5>
<div className='skillcontainer__slider skillcontainer__slider4'>
<LinearProgress variant="determinate" value={70} />
</div>
</div>

<div className='skillcontainer__skillset'>
<h5>Oracle , MySQl</h5>
<div className='skillcontainer__slider skillcontainer__slider5'>
<LinearProgress variant="determinate" value={72} />
</div>
</div>

<div className='skillcontainer__skillset'>
<h5>python</h5>
<div className='skillcontainer__slider skillcontainer__slider6'>
<LinearProgress variant="determinate" value={60} />
</div>
</div>











</div>
</Element>


  )
}

export default SkillContainer
