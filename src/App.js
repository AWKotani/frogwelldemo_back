import { Mainpage } from './pages/main';
import React, { createContext } from "react"
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import liff from '@line/liff/dist/lib';
import './main.css';
import LoginPage from './pages/loginpage';
export const Lineobject = createContext();

function App() {

  const [lineobj, setlineobj] = useState({});
  const linevalue = { lineobj, setlineobj };
  /*******EVENT****** */

  useEffect(() => {
    if (liff.isLoggedIn()) {
      console.log(liff.isLoggedIn())
    }
  }, [])

  if (liff.isLoggedIn()){
    return (
      <Lineobject.Provider value={linevalue}>
        <Router>
          <div>
            {
                <Routes>
                  <Route path="/" element={<Mainpage />} />
                </Routes>
            }
          </div>
          </Router>
      </Lineobject.Provider>
    );
  }
  else{
    return(<LoginPage/>)
  }
}
export default App;