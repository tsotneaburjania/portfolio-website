import React, { useEffect } from 'react';
import ExpCard from '../components/ExpCard';
import '../styles/experience.scss'

function ExperiencePage() {
  document.title = 'პორტფოლიო | გამოცდილება'

  
  return (
    <div className='pageHolder experiencePageHolder'>
      <ExpCard 
        img='/images/tbc.svg'
        compName='TBC'
        timeline='2021+'
        pos='Test Automation Engineer'
       />
       <ExpCard 
        img='/images/onesoul.png'
        compName='OneSoul'
        timeline='2020'
        pos='React Developer'
       />
       <ExpCard 
        img='/images/actwave.png'
        compName='Actwave'
        timeline='2019'
        pos='Front-end Developer'
       />
    </div>
  );
}

export default ExperiencePage;
