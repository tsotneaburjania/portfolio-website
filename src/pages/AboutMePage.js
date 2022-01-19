import React, { useEffect } from 'react';
import '../styles/aboutMe.scss'

function AboutMePage() {
  useEffect(() => {
    document.title = 'პორტფოლიო | შესახებ'
  });

  return (
    <div className='pageHodler aboutMePageMeHolder'>
        <img src='/images/me.jpg' />
        <div className='quickFacts'>
          <p>დ.დ: 29/04/2000</p>
          <p>ეროვნება: ქართველი</p>
          <p>პროფესია: პროგრამისტი, მუსიკოსი</p>
          <p>ზედმეტსახელი: მონოლითი</p>
          <p>P.S.: გამოიწერეთ <a href='https://www.youtube.com/channel/UC4IrptxENHzpZiOlIGSgPLQ'>მონოლითი</a></p>
        </div>
    </div>
  );
}

export default AboutMePage;
