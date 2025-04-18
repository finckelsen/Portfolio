import React, {useState} from 'react';
import './CvLookup.css'

function CvLookup({setShowCv}) {
  const [open, setOpen] = useState(false)
  const imageUrl = "/cv.png" // Ändra till din bildväg

  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = imageUrl
    link.download = imageUrl.split("/").pop() || "image"
    link.click()
  }

  return (
    <div className="image-container">
      <div className="controller-bar">
        <button className="icon-button" onClick={() => setShowCv(false)}>✕</button>
        <button className="icon-button" onClick={handleDownload}>⬇</button>
      </div>

      <div className='controller-container'>
        <img className='cvImage' src={imageUrl} alt="CV" />
      </div>
    </div>
  )
}

export default CvLookup;
