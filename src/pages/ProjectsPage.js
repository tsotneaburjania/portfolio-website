import React, { useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import '../styles/projectsPage.scss'

function ProjectsPage() {
  useEffect(() => {
    document.title = 'პორტფოლიო | პროექტები'
  });

  return (
    <div className='pageHolder projectsPageHolder'>
        <ProjectCard 
            link='https://tsaburjania-movie-app.netlify.app/'
            img='/images/tmdb.jpg'
            projName='M-Films (TheMovieDb)'
        />
        <ProjectCard 
            link='https://tsaburjania-pokemon-cards.netlify.app/'
            img='/images/pokemon.svg'
            projName='Pokemon Cards (PokéAPI)'
        />
        <ProjectCard 
            link='https://darkroomlab.net/'
            img='/images/dlogo.png'
            projName='Darkroom'
        />
        <ProjectCard 
            link='https://projectmonolith.netlify.app/'
            img='/images/monolith.png'
            projName='Project Monolith'
        />
        <ProjectCard 
            link='https://darkwire.netlify.app/'
            img='/images/darkwire.png'
            projName='Darkwire'
        />
    </div>
  );
}

export default ProjectsPage;
