import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useUsers } from '../context/UserContext';

const UserForm = () => {
  const { addUser, updateUser, users } = useUsers(); // Access the users context
  const navigate = useNavigate();
  const { userId } = useParams();
  
  const [user, setUser] = useState({
    userID: '',
    firstName: '',
    lastName: '',
    status: 'ACTIVE'
  });

  // Load existing user data if editing
  useEffect(() => {
    if (userId) {
      const existingUser = users.find((user) => user.userID === userId);
      if (existingUser) {
        setUser(existingUser);
      }
    }
  }, [userId, users]); // Add 'users' to the dependency array

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userId) {
      addUser(user);
    } else {
      updateUser(user);
    }
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email ID (User ID)</label>
        <input type="email" name="userID" value={user.userID} onChange={handleChange} required disabled={!!userId} />
      </div>
      <div>
        <label>First Name</label>
        <input type="text" name="firstName" value={user.firstName} onChange={handleChange} required />
      </div>
      <div>
        <label>Last Name</label>
        <input type="text" name="lastName" value={user.lastName} onChange={handleChange} required />
      </div>
      <div>
        <button type="submit">Save</button>
        <button type="button" onClick={() => navigate('/')}>Cancel</button>
      </div>
    </form>
  );
};

export default UserForm;
