import React, { createContext, useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import liff from '@line/liff/dist/lib';
import { Mainpage } from './pages/main';
import Login from './pages/login';

export const Lineobject = createContext();

function App() {

  const [lineobj, setlineobj] = useState({});
  const linevalue = { lineobj, setlineobj };

  useEffect(() => {
    liff.ready.then(() => {
      if (liff.isLoggedIn()) {
        console.log(liff.isLoggedIn())
      }
    })
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
    return(<Login/>)
  }
}
export default App;