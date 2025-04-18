import styles from './RenderPage.css';
import Typewriter from 'typewriter-effect';
import "@fontsource/poppins"; // Defaults to weight 400
import logo from './animations/load.gif'
import {React, useRef} from 'react';
import transition from './transition';

function RenderPage({ togglePage }) {
  setTimeout(() => { togglePage(); }, 300);
  return (
    <div className='container-renderpage'>
    <img src={logo} className='animation' alt="loading..." />
    </div>
  );

}

export default RenderPage;
