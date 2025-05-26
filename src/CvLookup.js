import React, {useState} from 'react';
import './CvLookup.css'
import { useCamera } from './animations/CameraProvider';

function CvLookup({setShowCv}) {
  const { resetCamera } = useCamera()
  const [open, setOpen] = useState(false)
  const imageUrl = "/cv.png" // Ändra till din bildväg

  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = imageUrl
    link.download = imageUrl.split("/").pop() || "image"
    link.click()
  }

  const handleClose = () => {
    resetCamera()
    setShowCv(false)
  }

  return (
    <div className="image-container"   onClick={(e) => {
      if (e.target === e.currentTarget) {
            handleClose()
      }
    }}>

      <div className="controller-bar">
        <img src="/BackIcon.png" className="icon-button-3d" onClick={handleClose}/>
        <img src="DownloadIcon.png" className="icon-button-3d" onClick={handleDownload}/>
      </div>

      <div className='controller-container'>
        <img className='cvImage' src={imageUrl} alt="CV" />
      </div>
    </div>
  )
}

export default CvLookup;
