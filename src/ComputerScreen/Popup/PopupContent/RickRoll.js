import React, {useState} from 'react';
import './PopupContent.css'

function RickRoll() {
  return (
    <div className="popup-content">
        <img src='Youtube.png' style={{width:'300px'}}/>
        <h1>You just got Rick Rolled</h1>
        <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" allow="autoplay; encrypted-media" title="Rick Roll" allowFullScreen/>;
    </div>
  )
}

export default RickRoll;
