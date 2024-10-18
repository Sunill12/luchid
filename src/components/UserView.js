import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useUsers } from '../context/UserContext';

const UserView = () => {
  const { userId } = useParams();
  const { users } = useUsers();
  const navigate = useNavigate();
  
  const user = users.find((user) => user.userID === userId);

  return (
    <div>
      <h2>User Details</h2>
      {user ? (
        <>
          <p>User ID: {user.userID}</p>
          <p>First Name: {user.firstName}</p>
          <p>Last Name: {user.lastName}</p>
          <p>Status: {user.status}</p>
          <button onClick={() => navigate('/')}>Back</button>
        </>
      ) : (
        <p>User not found</p>
      )}
    </div>
  );
};

export default UserView;
