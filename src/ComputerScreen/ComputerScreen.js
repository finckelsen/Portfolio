import React, { useEffect, useState } from 'react';
import './ComputerScreen.css';
import ComputerScreenPopup from './Popup/ComputerScreenPopup';
import StartWindow from './Taskbar/StartWindow';
import WindowsTaskbar from './Taskbar/WindowsTaskbar';

function ComputerScreen({setShowComputer, popup}) {
  const [open, setOpen] = useState(false)
  const [popupTitle, setPopupTitle] = useState(popup)
  const imageUrl = "/windows.jpeg" 
  const [windowOpen, setWindowOpen] = useState(false);

  useEffect((popupTitle) => {
    if(popup !== ''){
      setOpen(true)
    }
  }, [popup]);

  return (
    <div className="computer-background-container">
      {windowOpen && <StartWindow setOpen={setOpen} setPopupTitle={setPopupTitle} setShowComputer={setShowComputer}/>}
      <div className="controller-bar">
        <img className="icon-button" src='/BackIcon.png' onClick={() => setShowComputer(false)}/>
      </div>
      {open && <ComputerScreenPopup setOpen={setOpen} popupTitle={popupTitle} setPopupTitle={setPopupTitle}/>}
      <img className='windows-background' src={imageUrl}/>
      <div className='folderContainer' style={{left:'20%'}} onClick={() => {setOpen(true); setPopupTitle('My Experience')}}>
        <img className='folderImage' src='/folder.png'/>
        <h2>My experience</h2>
      </div>

      <div className='folderContainer' style={{left:'40%'}} onClick={() => {setOpen(true); setPopupTitle('Projects')}}>
        <img className='folderImage' src='/folder.png'/>
        <h2>Projects</h2>
      </div>

      <div className='folderContainer' style={{left:'40%', top:'20%'}}>
        <a
            href="mailto:casper@finckelsen.com?subject=Send%20Mail&body=Hello%20there"
            style={{
              textDecoration: "none",
            }}
          >
          <img className='folderImage' src='/mail.png'/>
          <h2>Send mail</h2>
          </a>
      </div>

      <div className='folderContainer' style={{left:'80%', top:'20%'}}>
        <a
            href="https://www.linkedin.com/in/casper-finckelsen/"
            target="_blank"
            style={{
              textDecoration: "none",
            }}
          >
          <img className='folderImage' src='/linkedin.png'/>
          <h2>LinkedIn</h2>
          </a>
      </div>

      <div className='folderContainer' style={{left:' 40%', top:'80%'}}>
        <a
            href="https://github.com/finckelsen/"
            target="_blank"
            style={{
              textDecoration: "none",
            }}
          >
          <img className='folderImage' src='/github.png'/>
          <h2>Github</h2>
          </a>
      </div>

      <div className='folderContainer' style={{left:'60%'}} onClick={() => {setOpen(true); setPopupTitle('Rick Roll')}}>
        <img className='folderImage' src='/internetexplorer.png'/>
        <h2>Secrets..</h2>
      </div>
      <WindowsTaskbar open={open} popupTitle={popupTitle} setWindowOpen={setWindowOpen}/>
    </div>
  )
}

export default ComputerScreen;
