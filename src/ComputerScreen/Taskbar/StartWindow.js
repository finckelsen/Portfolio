import React, { useState } from 'react';
import './StartWindow.css'

function StartWindow({setOpen, setPopupTitle, setShowComputer}) {
  const [showShutdown, setShutdown] = useState(false)


  return (

    <div className='startWindow'>
          {showShutdown && (
          <div className="crt-overlay" onAnimationEnd={() => setShowComputer(false)}>
            <div className="crt-flash-line"></div>
          </div>    
        )}
      <div className='startWindowGrid'>
        <div className='startWindowTop'>
          <img src="/avatar.png" className='avatar' />
            <h2>
              Casper
            </h2>
        </div>
        <div className='startWindowMid'>
          <div className='startWindowMidGrid'>
            <div className='startWindowMidGridContainer'>
              <div className='startWindowMidGridRow' onClick={() => {setOpen(true); setPopupTitle('Rick Roll')}}>
                  <div className='startWindowMidGridRowContent'>
                    <img src='internetexplorer.png'/>
                    <h3>Internet Explorer</h3>
                  </div>
              </div>
              <div className='startWindowMidGridRow' >
                <a
                  href="mailto:casper@finckelsen.com?subject=Send%20Mail&body=Hello%20there"
                  style={{textDecoration:'none', color:'black'}}
                >
                  <div className='startWindowMidGridRowContent'>
                    <img src='mail.png'/>
                    <h3>E-mail</h3>
                  </div>
                </a>
              </div>

            </div>
            <div className='startWindowMidGridContainer' style={{backgroundColor:'rgb(213,227,248)'}}>
              <div className='startWindowMidGridRow' onClick={() => {setOpen(true); setPopupTitle('Folders')}}>
                <div className='startWindowMidGridRowContent'>
                  <img src='folder.png'/>
                  <h3>All folders</h3>
                </div>
              </div>
              <div className='startWindowMidGridRow' onClick={() => {setOpen(true); setPopupTitle('Notes')}}>
                <div className='startWindowMidGridRowContent'>
                  <img src='notes.png'/>
                  <h3>Notes</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='startWindowBottom'>
          <div>
            <img src='shutdown.png' style={{height:'50px', position:'absolute', right:'20px', bottom:'70px'}} onClick={() => setShutdown(true)}/> 

          </div>
        </div>
      </div>
    </div>
  );
}

export default StartWindow;