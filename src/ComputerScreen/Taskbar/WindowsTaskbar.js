import React from 'react';
import './WindowsTaskbar.css'
import StartButton from './StartButton';

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
    case 'Games':
      return {
        image: 'games.png',
        text: 'Launching Solitaire... 🃏',
      };
    default:
      return {
        image: 'folder.png',
        text: title, // fallback to just showing the title
      };
  }
}

function WindowsTaskbar({open, popupTitle}) {
  console.log(popupTitle)
  const { image, text } = getPopupContent(popupTitle);
  return (
      <div className='windowsTaskbarContainer'>
        <StartButton/>
        {open && <div style={{width:'300px', height:'55px',  backgroundColor: 'rgb(45, 82, 180)', marginLeft:'20px', marginTop:'2px', borderRadius:'10px', border: '2px solid blue', display:'flex', flexDirection:'row'}}>
          <img src={image} style={{height:'40px', display:'flex', marginTop:'10px', marginLeft:'10px'}}></img>
          <p style={{color:'white', fontSize:'20px', marginLeft:'20px'}}>{text}</p>
        </div>}
      </div>

  );
}

export default WindowsTaskbar;