import Mainpage from './pages/main';
import LoginPage from './pages/loginpage';
import './main.css';
import React, { createContext, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import liff from '@line/liff/dist/lib';
export const Lineobject = createContext();

function App() {

  const [lineobj, setlineobj] = useState({});
  const linevalue = { lineobj, setlineobj };
  /*******EVENT****** */

  useEffect(() => {
      liff.ready.then(() => {
    if (liff.isLoggedIn()) {
      console.log(liff.isLoggedIn())
    }})
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