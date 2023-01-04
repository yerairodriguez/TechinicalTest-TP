import React from 'react';
import UserInfo from '../UserInfo';
import { getUserData } from '../UserInfo/data/dataSample';


function App() {
  return (
    <div>
      <UserInfo userData={getUserData()}/>
    </div>
  )
}

export default App;
