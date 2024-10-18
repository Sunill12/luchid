import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import UserView from './components/UserView';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <UserProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/add" element={<UserForm />} />
          <Route path="/edit/:userId" element={<UserForm />} />
          <Route path="/view/:userId" element={<UserView />} />
        </Routes>
      </div>
    </UserProvider>
  );
}

export default App;
