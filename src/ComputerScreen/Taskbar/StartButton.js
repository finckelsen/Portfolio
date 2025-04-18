import React, { useState } from 'react';

function StartButton() {
  const [isPressed, setIsPressed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const getImageSrc = () => {
    if (isPressed) return '/start-clicked.png';
    if (isHovered) return '/start-hover.png';
    return '/start-button.png';
  };

  return (
    <button

      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsPressed(false);
      }}
      style={{margin:'0px', padding:'0', background:'none', border:'none'}}
    >
      <img src={getImageSrc()} alt="Start" style={{ height: '60px',}} />

    </button>
  );
}

export default StartButton;