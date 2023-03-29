import { useState } from 'react';
import 'antd/dist/reset.css';
import liff from '@line/liff/dist/lib';
//import DeviceInfo from 'react-native-device-info';
import { ReservationForm } from './ReservationForm';
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
      <p>Device Model:</p>
      <p>Device Name: </p>
      <p>Device Unique ID:</p>
      <p>System Name: </p>
      <p>System Version: </p>
    {ReservationForm()}
    </div>
  );
});