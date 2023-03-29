import { useState } from 'react';
import 'antd/dist/reset.css';
import liff from '@line/liff/dist/lib';
//import { sfObjectId } from './salesforce.js';

export const Mainpage = (() => {
  const [Userprofile , setUserprofile] = useState('');
  const Getuser = (async()=>{
    let user = await liff.getProfile();
    console.log(user);
    setUserprofile(user);
  });
  return (
    <div>
      <button onClick={Getuser}>Show User info.</button>
      <p>userId:{Userprofile.userId}</p>
      <p>displayName:{Userprofile.displayName}</p>
    </div>
  );
});