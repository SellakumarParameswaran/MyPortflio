import React from 'react'
import { Link } from 'react-scroll';
import './TopContent.css';

const TopContent = () => {
  return (
    <div className='topContent'>
        <div className='topcontent__container'>
            
            <p> A professional web and App developer</p>
            <p> professional guitarist</p>
                        <a href='www.google.com'>
                <button className='topcontent__downloadButton'>Downlode CV</button>
            </a>

</div>
<div className='topcontent__container01'>
<h1>Mr. SellaKumar Parameswaran</h1>

<Link to='project' smooth={true} duration={500}>
    <button className='topcontent__workButton'>My Work</button>
</Link>
</div>
    </div>
  )
}

export default TopContent
