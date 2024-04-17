import React from 'react';
import { Element } from 'react-scroll';
import './ProjectContainer.css';




const ProjectContainer =() => {

     const Project = [
{
     img:"https://th.bing.com/th/id/OIP.8QdqC3-hdoHCG5ug1qVHxQHaE8?rs=1&pid=ImgDetMain",
     title:"peace",
    desc:"Chhatrapati Sambhajinagar: Citizens await the annual event when sunrays fall directly on the face of Lord Buddha’s sculpture inside Cave number 10 at Ellora Caves",
     Link:"www.google.com",
 },


 {
     img:"https://th.bing.com/th/id/OIP.8QdqC3-hdoHCG5ug1qVHxQHaE8?rs=1&pid=ImgDetMain",
     title:"peace",
     desc:"Chhatrapati Sambhajinagar: Citizens await the annual event when sunrays fall directly on the face of Lord Buddha’s sculpture inside Cave number 10 at Ellora Caves",
     Link:"www.google.com",
 },


 {
     img:"https://th.bing.com/th?id=OIP.RyQLytdYeTmexJNQQlvxewHaNK&w=187&h=333&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
     title:"peace",
     desc:"Chhatrapati Sambhajinagar: Citizens await the annual event when sunrays fall directly on the face of Lord Buddha’s sculpture inside Cave number 10 at Ellora Caves",
   Link:"www.google.com",
 },

    ];

  return (
    <Element className='projectContainer' id='Project'>
      
     <h1> Projects</h1>
     <p>
          here are some projects which i done for making lives of people easy
     </p>

 <div className='ProjectContainer__projects'>

 {Project.map((Project,index) => {
 return(
     <Project 
     key={index}
     img={Project.img} 
      title={Project.title} 
      desc={Project.desc} 
      lLink={Project.Link} 
      />
 )
  })}
    </div> 
 </Element>
  );
};

export default ProjectContainer
