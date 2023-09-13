import './StartPage.css';
import Typewriter from 'typewriter-effect';
import "@fontsource/poppins"; // Defaults to weight 400

function StartPage() {
  return (
    <div className='container'>
      <div className='textWriter'>
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString("I'm the best at")
              .pauseFor(2500)
              .deleteAll()
            typewriter.typeString("I'm trying to be the best at")
              .pauseFor(2500)
              .deleteAll()   
            typewriter.typeString("I'm okey at")
              .pauseFor(50)
              .deleteAll()
            typewriter.typeString("I'm")     
            .start();
          }}
        />
        <div className='staticText'>
          creating technical solutions
        </div>
      </div>
    </div>
    
  );
}

export default StartPage;
