import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './salesforce';
import liff from '@line/liff';
//import reportWebVitals from './reportWebVitals';
//import { Amplify } from 'aws-amplify'; //Load Amplify Framework
//import config from './aws-exports'; //Load backend setting
//Amplify.configure(config); //Register backend setting to Amplify Framework 

const root = ReactDOM.createRoot(document.getElementById('root'));

liff
  .init({liffId: process.env.REACT_APP_VITE_APP_LIFF_ID || ''})
  .then(() => {
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  })
.catch((e) => {
  alert(`LIFF error: ${e.message}`);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
