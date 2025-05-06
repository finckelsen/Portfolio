import React, {useState} from 'react';
import './ComputerScreen.css'
import ComputerScreenPopup from './Popup/ComputerScreenPopup';
import WindowsTaskbar from './Taskbar/WindowsTaskbar';
import StartWindow from './Taskbar/StartWindow';

function ComputerScreen({setShowComputer}) {
  const [open, setOpen] = useState(false)
  const [popupTitle, setPopupTitle] = useState('')
  const imageUrl = "/windows.jpeg" // Ändra till din bildväg
  const [windowOpen, setWindowOpen] = useState(false);

  return (
    <div className="computer-background-container">

      
      {windowOpen && <StartWindow setOpen={setOpen} setPopupTitle={setPopupTitle} setShowComputer={setShowComputer}/>}
      <div className="controller-bar">
        <img className="icon-button" src='/back.png' onClick={() => setShowComputer(false)}/>
      </div>
      {open && <ComputerScreenPopup setOpen={setOpen} popupTitle={popupTitle} setPopupTitle={setPopupTitle}/>}
      <img className='windows-background' src={imageUrl}/>
      <div className='folderContainer' style={{left:'20%'}} onClick={() => {setOpen(true); setPopupTitle('My experience')}}>
        <img className='folderImage' src='/folder.png'/>
        <h2>My experience</h2>
      </div>

      <div className='folderContainer' style={{left:'40%'}} onClick={() => {setOpen(true); setPopupTitle('My projects')}}>
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
          <h2>Linkedin</h2>

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
