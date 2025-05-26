import React from 'react';
import './StartWindow.css';

function StartWindow({setOpen, setPopupTitle, setShowComputer}) {
  
  return (
    <div className='startWindow'>
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
                    <h4>Internet Explorer</h4>
                  </div>
              </div>
              <div className='startWindowMidGridRow' >
                <a
                  href="mailto:casper@finckelsen.com?subject=Send%20Mail&body=Hello%20there"
                  style={{textDecoration:'none', color:'black'}}
                >
                  <div className='startWindowMidGridRowContent'>
                    <img src='mail.png'/>
                    <h4>E-mail</h4>
                  </div>
                </a>
              </div>
              <div className='startWindowMidGridRow' >
                <a
                  href="https://www.linkedin.com/in/casper-finckelsen" target='_blank'
                  style={{textDecoration:'none', color:'black'}}
                >
                  <div className='startWindowMidGridRowContent'>
                    <img src='linkedin.png'/>
                    <h4>LinkedIn</h4>
                  </div>
                </a>
              </div>
              <div className='startWindowMidGridRow' >
                <a
                  href="https://github.com/finckelsen/" target='_blank'
                  style={{textDecoration:'none', color:'black'}}
                >
                  <div className='startWindowMidGridRowContent'>
                    <img src='github.png'/>
                    <h4>Github</h4>
                  </div>
                </a>
              </div>
            </div>
            <div className='startWindowMidGridContainer' style={{backgroundColor:'rgb(213,227,248)'}}>
              <div className='startWindowMidGridRow' onClick={() => {setOpen(true); setPopupTitle('Folders')}}>
                <div className='startWindowMidGridRowContent'>
                  <img src='folder.png'/>
                  <h4>All folders</h4>
                </div>
              </div>
              <div className='startWindowMidGridRow' onClick={() => {setOpen(true); setPopupTitle('Notes')}}>
                <div className='startWindowMidGridRowContent'>
                  <img src='notes.png'/>
                  <h4>Notes</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='startWindowBottom'>
          <div>
            <img src='shutdown.png' style={{height:'40px', bottom:'50px',position:'absolute', right:'20px'}} onClick={() => setShowComputer(false)}/> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartWindow;