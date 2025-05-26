import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import MobileApp from './MobileApp';
import { CameraProvider } from './animations/CameraProvider';
import './index.css';
import reportWebVitals from './reportWebVitals';

const isMobile = /Mobi|Android/i.test(navigator.userAgent);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <CameraProvider>
      {isMobile ? <MobileApp /> : <App />}
    </CameraProvider>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
