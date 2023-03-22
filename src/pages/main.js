import React, { useState } from 'react';
import liff from '@line/liff/dist/lib';

export const Mainpage = (() => {

  const [Userprofile , setUserprofile] = useState("");


  const Getuser = (async()=>{
    let user = await liff.getProfile()
    console.log(user)
    setUserprofile(user)

  })

  return (
    <div>
      ログインしました
      <button onClick={Getuser}>button</button>
      <p>userId:{Userprofile.userId}</p>
      <p>displayName:{Userprofile.displayName}</p>
      
    </div>
  );
});

//<p>{Userprofile.userId}</p>