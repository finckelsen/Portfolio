import React, { useState } from 'react';

function StartButton({ setWindowOpen }) {
  
  const [isPressed, setIsPressed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const getImageSrc = () => {
    if (isPressed) return '/start-clicked.png';
    if (isHovered) return '/start-hover.png';
    return '/start-button.png';
  };

  const handleClick = () => {
    setIsPressed(prev => !prev);
    setWindowOpen(prev => !prev);
  };

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ margin: '0px', padding: '0', background: 'none', border: 'none' }}
    >
      <img src={getImageSrc()} alt="Start" style={{ height: '50px' }} />
    </button>
  );
}



export default StartButton;