import { useRef, useState, useEffect, Suspense } from 'react'
import './App.css'
import CanvasComponent from './CanvasComponent'
import ComputerScreen from './ComputerScreen/ComputerScreen'
import CvLookup from './CvLookup'
import Navbar from './Navbar'
import { BackArrow } from './components/BackArrow'
import LoadingScreen from './LoadingScreen'
import { useCamera } from './animations/CameraProvider'

function App() {
  const controlsRef = useRef()
  const [showCv, setShowCv] = useState(false) 
  const [showComputer, setShowComputer] = useState(false) 
  const [popup, setPopup] = useState('') 
  const [color, setColor] = useState("#F95738")
  const [contactOpen, setContactOpen] = useState(false)
  const [canvasLoaded, setCanvasLoaded] = useState(false);
  const [showShutdown, setshowShutdown] = useState(false);
  const { resetCamera } = useCamera()
  console.log(popup)
  const handleCloseComputer = () => {
    setShowComputer(false);
    setshowShutdown(true)
    
    setTimeout(() => {
      setshowShutdown(false)
    }, 2000); // justera tiden till din CSS-animation (i ms)
  };

  return (
    <>
      <Suspense fallback={<LoadingScreen />}>
        {(!showComputer && !showCv && !showShutdown) && (
          <div className="navbar-fade-in">
            <Navbar setShowComputer={setShowComputer} controlsRef={controlsRef} setShowCv={setShowCv} setPopup={setPopup} setColor={setColor} color={color} setContactOpen={setContactOpen}/>
          </div> )}
        {!showComputer &&<CanvasComponent contactOpen={contactOpen} color={color} setShowCv={setShowCv} setShowComputer={setShowComputer} setContactOpen={setContactOpen} canvasLoaded={canvasLoaded}/>}
      </Suspense>
      {showCv && <CvLookup setShowCv={setShowCv}/>}
      {showComputer && <ComputerScreen setShowComputer={handleCloseComputer} popup={popup}/>}
      {contactOpen && <BackArrow setContactOpen={setContactOpen}/>}
      {showShutdown && (
        <div className="crt-overlay">
          <div className="crt-flash-line"></div>
        </div>    
      )}
    </>
  )
}

export default App