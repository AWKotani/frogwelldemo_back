import { useState } from 'react';
import 'antd/dist/reset.css';
import liff from '@line/liff/dist/lib';
import jsforce from 'jsforce';

export const Mainpage = (() => {
  const [Userprofile , setUserprofile] = useState('');
  const Getuser = (async()=>{
    let user = await liff.getProfile();
    console.log(user);
    setUserprofile(user);
  });
  const recs = '';
  (async () => {
    const conn = new jsforce.Connection({
      oauth2 : {
        loginUrl: 'https://test.salesforce.com',
        clinentId: '3MVG9aWdXtdHRrI33PiDvXP2NYIQhsXP0XFxoKwRvQZaCA8YO.AmL2bY9h6xMnzcKCbANo3tbvpX.4lMMwu63',
        clientSecret: 'A523BAFA65382BC2AD83D766DBA032053D0CEC077C8223DD92F945A029D6FF3C',
        redirectUri: 'https://frogwell--techskill.sandbox.my.salesforce.com/oauth2/callback&response_type=code'
      }
    });
    await conn.login('api.user@frogwell.co.jp.techskill', 'frogwell20236h9WlVSOU9UDbhl5lt0CcBv3', function(err, userInfo) {
      if (err) { return console.error(err); }
    });
    recs = await conn.sobject('LINE_User__c').find({
      LineUserId__c: 'U75bcd602fbd7da18d3974ac788bc7f00'
    });
  });

  return (
    <div>
      <button type="primary" onClick={Getuser}>Show User info.</button>
      <p>userId:{Userprofile.userId}</p>
      <p>displayName:{Userprofile.displayName}</p>
      <p>SalesforceId:{recs.Id}</p>
    </div>
  );
});