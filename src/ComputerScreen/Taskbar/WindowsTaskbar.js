import React from 'react';
import InfoButton from './InfoButton';
import StartButton from './StartButton';
import './WindowsTaskbar.css';

function getPopupContent(title) {
  switch (title) {
    case 'Rick Roll':
      return {
        image: 'internetexplorer.png',
        text: 'Youtube | Rick Roll',
      };
    case 'About':
      return {
        image: 'info.png',
        text: 'This is a Windows XP-inspired interface!',
      };
    case 'Notes':
      return {
        image: 'notes.png',
        text: 'My notes',
      };
    
    default:
      return {
        image: 'folder.png',
        text: title, // fallback to just showing the title
      };
  }
}

function WindowsTaskbar({open, popupTitle, setWindowOpen, setOpen, setPopupTitle}) {

  const { image, text } = getPopupContent(popupTitle);
  return (
    <div className='windowsTaskbarContainer'>
      <StartButton setWindowOpen={setWindowOpen}/>
        {open && <div style={{width:'300px', height:'55px',  backgroundColor: 'rgb(45, 82, 180)', marginLeft:'20px', marginTop:'2px', borderRadius:'10px', border: '2px solid blue', display:'flex', flexDirection:'row'}}>
          <img src={image} style={{height:'40px', display:'flex', marginTop:'10px', marginLeft:'10px'}}></img>
          <p style={{color:'white', fontSize:'20px', marginLeft:'20px'}}>{text}</p>
        </div>}
      <InfoButton/> 
    </div>
  );
}

export default WindowsTaskbar;