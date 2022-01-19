import React, { useEffect } from 'react';
import '../styles/contactPage.scss'

function ContactPage() {
    useEffect(() => {
        document.title = 'პორტფოლიო | კონტაქტი'
    });

  return (
      <div className='pageHolder contactPageHolder'>
        <div className='contactForm'>
        <textarea id="w3review" name="w3review" rows="4" cols="50"  placeholder='წერილი'>

        </textarea>
        <button className='msgBtn'>მომწერე რამე</button>
        </div>
      </div>
  );
}

export default ContactPage;
