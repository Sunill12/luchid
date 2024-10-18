import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers((prev) => [...prev, user]);
  };

  const updateUser = (updatedUser) => {
    setUsers((prev) =>
      prev.map((user) => (user.userID === updatedUser.userID ? updatedUser : user))
    );
  };

  const deactivateUser = (userID) => {
    setUsers((prev) =>
      prev.map((user) => (user.userID === userID ? { ...user, status: 'INACTIVE' } : user))
    );
  };

  return (
    <UserContext.Provider value={{ users, addUser, updateUser, deactivateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUsers = () => useContext(UserContext);
