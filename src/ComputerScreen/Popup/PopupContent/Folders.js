import React, {useState} from 'react';
import './PopupContent.css'


function Folders({setPopupTitle}) {
  return (
    <div className="popup-content">
        <div className='folderContainer' style={{left:'30%', top:'30%'}} onClick={() => { setPopupTitle('My projects')}}>
        <img className='folderImage' src='/folder.png'/>
        <h2 style={{color:'black', textShadow:'none'}}>Projects</h2>
      </div>
      <div className='folderContainer' style={{left:'10%', top:'30%'}} onClick={() => {setPopupTitle('My experience')}}>
        <img className='folderImage' src='/folder.png'/>
        <h2 style={{color:'black', textShadow:'none'}}>My experience</h2>
      </div>
    </div>
    

    
  )
}

export default Folders;
