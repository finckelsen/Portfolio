import './Navbar.css';
import ComputerText from './ComputerText';
import CvText from './CvText';
import { ChromePicker } from 'react-color'
import { useState, useEffect, useRef } from 'react';

function Navbar({ setShowComputer, controlsRef, setShowCv, setIsDay, setColor, color }) {
  const [showPicker, setShowPicker] = useState(false)
  const pickerRef = useRef()

  // Klick utanför dropdown => stäng
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (pickerRef.current && !pickerRef.current.contains(e.target)) {
        setShowPicker(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <nav>
      <div className='nav-content'>
        <div className='nav-content-cell'>
          <ComputerText setShowComputer={setShowComputer} controlsRef={controlsRef}/>
        </div>
        <div className='nav-content-cell'>
          <CvText setShowCv={setShowCv} controlsRef={controlsRef}/>
        </div>
        <div className='nav-content-cell' style={{ position: 'relative' }} ref={pickerRef}>

        <div
          onClick={() => setShowPicker(!showPicker)}
          style={{
            width: '30px',
            height: '30px',
            backgroundColor: color,
            border: '1px solid #ccc',
            cursor: 'pointer',
            borderRadius: '4px'
          }}
        />

        {/* Dropdown */}
        {showPicker && (
          <div style={{
            position: 'absolute',
            top: '40px',
            zIndex: 1000,
          }}>
            <ChromePicker
              color={color}
              onChange={(updated) => setColor(updated.hex)}
            />
          </div>
        )}
      </div>
      </div>
    </nav>
  );
}

export default Navbar;
