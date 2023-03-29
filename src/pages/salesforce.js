import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SalesforceData = () => {
  const [accountData, setAccountData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://frogwell--techskill.sandbox.my.salesforce.com/services/data/v57.0/query/?q=SELECT+Name+FROM+LINE_User__c';
      const token = 'Bearer 6Cel800D0p0000008gBV8880p0000005qUvwuw4gZ3ZNoEcAh6z0jSLXpyr8N3kO4TnvqLeKtt5ySbk5Yr54ocxWmwck638303FdpRKt0Rp';
      const headers = {
        'Authorization': token,
        'Content-Type': 'application/json'
      };
      try {
        const response = await axios.get(url, { headers: headers });
        setAccountData(response.data.records);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      {accountData.map((account) => (
        <div key={account.Id}>
          <p>{account.Name}</p>
        </div>
      ))}
    </div>
  )
}

export default SalesforceData;
