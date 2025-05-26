import React, { useState, useEffect } from 'react';

function InfoButton() {
  
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedTime = time.toLocaleTimeString('sv-SE', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  return (
    <div
      style={{
        height: '50px',
        width: '200px',
        background: 'linear-gradient(to top, #2a6db9, #529ae7)',
        position: 'absolute',
        right: '0',
        borderLeft: '4px rgb(255, 255, 255, 0.3) solid',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '20px',
        fontFamily: 'sans-serif'
      }}
    >
      {formattedTime}
    </div>
  );
}

export default InfoButton;
