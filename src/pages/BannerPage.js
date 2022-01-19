import React, { useEffect } from 'react';
import '../styles/bannerPage.scss'

function BannerPage() {
  useEffect(() => {
    document.title = 'პორტფოლიო | ბანერი'
  });

  return (
    <div className='pageHolder bannerPageHolder'>
        <div className='absCoverImage'>
            <img src="/images/dc_wmed.png" alt="dc_wmed" />
        </div>
        <div className='welcomeTextLeft'>
            <h2>სადემონსტრაციო პორტფოლიო</h2>
            <h3>შედგენილია ცოტნე აბურჯანიას მიერ</h3>
        </div>
        <div className='welcomeTextRight'>
            <h2>დარკრუმის წევრის საკუთრება [002]</h2>
            <h3>MonolithOfficial აგლომერაციის ქვეშ</h3>
        </div>
    </div>
  );
}

export default BannerPage;
