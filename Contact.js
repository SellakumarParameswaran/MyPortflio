import React from 'react'
import { Element } from 'react-scroll';
import {IconButton} from '@material-ui/core';
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import InstagramIcon from '@mui/icons-material/Instagram';
import './Contact.css';


const Contact = () => {
  return (
    <Element className='Contact' id='contact'>
<h1>Contact</h1>
        <div className='contact__container'>
            <p>
                Email : <span>psellakumar2017@gmail.com</span>
            </p>
            <p>Instagram :<span>ig_praveen_sk</span></p>
 <div className="contact__icon">
<a href='google.com'>
  <IconButton>
< InstagramIcon/>
  </IconButton>
</a>
<a href='google.com'>
  <IconButton>
< FacebookSharpIcon/>
  </IconButton>
</a>


</div> 
        </div>

    </Element>
  )
}

export default Contact
