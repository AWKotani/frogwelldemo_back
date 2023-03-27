import React, { useState } from 'react';
import { Button } from 'antd'
import 'antd/dist/reset.css';
import liff from '@line/liff/dist/lib';

export const Mainpage = (() => {
  const [Userprofile , setUserprofile] = useState('');
  const Getuser = (async()=>{
    let user = await liff.getProfile()
    console.log(user)
    setUserprofile(user)
  })

  return (
    <div>
      <button type="primary" onClick={Getuser}>Show User info.</button>
      <p>userId:{Userprofile.userId}</p>
      <p>displayName:{Userprofile.displayName}</p>
    </div>
  );
});