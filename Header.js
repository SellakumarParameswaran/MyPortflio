import React from 'react';
import "./Header.css";
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <div className="header">
    <div className="header__left">
    <h1><span>I'M</span>  HuMan</h1>

    </div>
        
           
        
      <div className="header__right">
       
      <Link to='about' smooth={true} duration={500}>
      <h4>
            About Me
          </h4>
</Link>
        <Link to ='skills' smooth={true} duration={500}>
        <h4>
Skills
</h4>
          </Link>    

<Link to='Project' smooth={true} duration={500}>
<h4>
 Project
</h4>
</Link>
<Link to='exp' smooth={true} duration={500}>
<h4>
  Experience
</h4>
</Link>
<Link to='contact' smooth={true} duration={500}>
<h4>
  Contact
</h4>
</Link>

<h4 className='header__button'>jion with me</h4>
      </div>









    </div>
  )
}

export default Header

