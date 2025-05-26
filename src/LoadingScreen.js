import logo from './animations/load.gif'
import React, { useState, useEffect } from 'react';
import transition from './transition';
import './LoadingScreen.css';

function LoadingScreen() {
  const [dots, setDots] = useState('.');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => (prev.length >= 3 ? '.' : prev + '.'));
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='container-renderpage'>
      <div style={{ display: 'flex', marginLeft: 'auto', marginRight: 'auto', flexDirection: 'column', marginTop: '10vw', alignItems: 'center' }}>
        <h2>
          Loading portfolio
          <span style={{ color: '#F95738' }}>{dots}</span>
        </h2>
        <img src={logo} className='animation' alt="loading..." />
      </div>
    </div>
  );
}

export default LoadingScreen;
