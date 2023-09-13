import React, {useState} from 'react';
import './App.css';
import StartPage from './StartPage.js';
import RenderPage from './RenderPage.js'


function App() {

  const [state, setState] = useState(false);

  const togglePage = () => {
    setState(!state);
  };

  return (
    <div className="App">
      {state ? (
        <StartPage/>
      ) : (
        <RenderPage togglePage={togglePage}/>
      )}
    </div>
  );
}

export default App;
