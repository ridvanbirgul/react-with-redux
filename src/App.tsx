import React from 'react';
import './App.css';
import DetailInformation from './detail-info';
import UpdateDetailInfoView from './update-detal-info';
import UserView from './user';
import UserInfo from './user-info';
import { UserContextDataProvider } from './features/user-context/userContext';
import { UserDetailContextProvider } from './features/user-context/userDetailContext';

function App() {
  return (
    <div className="App">
      <UserContextDataProvider>
        <UserDetailContextProvider>
          <UserView />
          <br />
          <UserInfo />
          <br />
          <UpdateDetailInfoView />
          <br />
          <DetailInformation />
        </UserDetailContextProvider>
      </UserContextDataProvider>
    </div>
  );
}

export default App;
