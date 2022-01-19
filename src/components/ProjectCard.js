import React from 'react';
import { Link } from 'react-router-dom';

function ProjectCard(props) {
  return (
    <a href={props.link}>
        <div className='projectCard'>
            <img src={props.img} />
            <p>{props.projName}</p>
        </div>
    </a>
        
  );
}

export default ProjectCard;
