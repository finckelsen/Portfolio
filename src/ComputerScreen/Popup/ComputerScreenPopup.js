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

function ComputerScreenPopup({setOpen, popupTitle, setPopupTitle}) {
  return (
    <div className="popup-container">
      <div className='popup-bar'>
        <h2>{popupTitle}</h2>
        <div className='close-button' onClick={() => setOpen(false)}>
          x
        </div>
      </div>
      <>
        {getContentByTitle(popupTitle, setPopupTitle)}
      </>
    </div>
  )
}

export default ComputerScreenPopup;
