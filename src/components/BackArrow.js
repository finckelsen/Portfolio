import { useCamera } from "../animations/CameraProvider"

export function BackArrow({ setContactOpen }) {
  
    const { resetCamera } = useCamera()

    const handleClose = () => {
      resetCamera()
      setContactOpen(false)
    }

  return (
    <div style={{position:'absolute', left:'100px', top:'10vh', zIndex:'10'}} onClick={() => handleClose()}>
        <img src="/BackIcon.png" className="icon-button-3d" onClick={handleClose}/>
    </div>
  )
}
