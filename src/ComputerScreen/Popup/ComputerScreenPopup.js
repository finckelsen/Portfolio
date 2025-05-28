import React from 'react';
import './ComputerScreenPopup.css';
import Experience from './PopupContent/Experience';
import Folders from './PopupContent/Folders';
import Notes from './PopupContent/Notes';
import Projects from './PopupContent/Projects';
import RickRoll from './PopupContent/RickRoll';

function getContentByTitle(title, setPopupTitle) {
  switch (title) {
    case 'My Experience':
      return <Experience/>;
    case 'Projects':
      return <Projects/>;
    case 'Rick Roll':
      return <RickRoll/>;
    case 'Notes':
        return <Notes/>;
    case 'Folders':
      return <Folders setPopupTitle={setPopupTitle}/>;
    default:
      return <p>Standardinnehåll</p>;
  }
}

function ComputerScreenPopup({setOpen, popupTitle, setPopupTitle, fullScreen, setFullScreen}) {
  return (
    <div className={`popup-container ${fullScreen ? 'full' : ''}`}>
      <div className='popup-bar'>
        <h3>{popupTitle}</h3>
        <img style={{right:'50px'}}src={'/fullscreen.jpg'}className='popup-button' onClick={() => setFullScreen(!fullScreen)}/>
        <img src={'/close.jpg'}className='popup-button' onClick={() => setOpen(false)}/>
      </div>
      <>
        {getContentByTitle(popupTitle, setPopupTitle)}
      </>
    </div>
  )
}

export default ComputerScreenPopup;
