import './Navbar.css';
import ComputerText from './ComputerText';
import CvText from './CvText';

function Navbar({ setShowComputer, controlsRef, setShowCv, setIsDay, isDay }) {
  return (
    <nav>
      <div className='nav-content'>
        <div className='nav-content-cell'>
          <ComputerText setShowComputer={setShowComputer} controlsRef={controlsRef}/>
        </div>
        <div className='nav-content-cell'>
          <CvText setShowCv={setShowCv} controlsRef={controlsRef}/>
        </div>
        <div className='nav-content-cell'>
          <label className="switch">
          <label class="switch">
            <input type="checkbox" onChange={() => setIsDay(!isDay)}/>
            <span class="slider"></span>
          </label>
          </label> 
          </div>
      </div>
    </nav>
  );
}

export default Navbar;
