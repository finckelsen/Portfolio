import './RenderPage.css';
import Typewriter from 'typewriter-effect';
import "@fontsource/poppins"; // Defaults to weight 400
import {React, useRef} from 'react';

function RenderPage({ togglePage }) {
  let currentTime = 0;
  

  
  window.addEventListener('scroll', handleScroll);
  
  function handleScroll() {  

    const val = window.scrollY * 0.01;
    
    const video = document.querySelector('#video');
    console.log(video);
    if (val > 0){
      currentTime = val + currentTime;
      video.currentTime = currentTime;
    }

    if (currentTime > 3.0){
      window.removeEventListener('scroll', handleScroll);
      togglePage();
    }
    
  };

  return (
    <div className='container'>

      <video id="video" className='video-container'>
          <source src="../videos/video.avi" type="video/avi" />
      </video>

    </div>
    
  );

}

export default RenderPage;
