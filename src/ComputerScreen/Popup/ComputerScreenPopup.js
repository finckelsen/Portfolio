import React, {useState} from 'react';
import './ComputerScreenPopup.css'
import Experience from './PopupContent/Experience';
import Projects from './PopupContent/Projects';
import RickRoll from './PopupContent/RickRoll';

function getContentByTitle(title) {
  switch (title) {
    case 'My experience':
      return <Experience/>;
    case 'My projects':
      return <Projects/>;
    case 'Rick Roll':
      return <RickRoll/>;
    default:
      return <p>Standardinnehåll</p>;
  }
}


function ComputerScreenPopup({setOpen, popupTitle}) {
  return (
    <div className="popup-container">
      <div className='popup-bar'>
        <h2>{popupTitle}</h2>
        <div className='close-button' onClick={() => setOpen(false)}>
          x
        </div>
      </div>
      <div className='popup-content'>
        {getContentByTitle(popupTitle)}
      </div>
    </div>
  )
}

export default ComputerScreenPopup;
