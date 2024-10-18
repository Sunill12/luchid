import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useUsers } from '../context/UserContext';
import UserSearch from './UserSearch';
import usePagination from '../hooks/usePagination';

const UserList = () => {
  const { users, deactivateUser } = useUsers();
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  
  const filteredUsers = users.filter((user) => {
    const isActive = filter === 'active' ? user.status === 'ACTIVE' : filter === 'inactive' ? user.status === 'INACTIVE' : true;
    return user.firstName.toLowerCase().includes(search.toLowerCase()) || user.lastName.toLowerCase().includes(search.toLowerCase()) && isActive;
  });

  const { currentPage, nextPage, prevPage, totalPages } = usePagination(filteredUsers, 10);

  return (
    <div>
      <h1>User Management</h1>
      <UserSearch setSearch={setSearch} setFilter={setFilter} />
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentPage.map((user) => (
            <tr key={user.userID}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.status}</td>
              <td>
                <Link to={`/view/${user.userID}`}>View</Link>
                <Link to={`/edit/${user.userID}`}>Edit</Link>
                <button onClick={() => {
                  if (window.confirm("Are you sure you want to deactivate this user?")) {
                    deactivateUser(user.userID);
                  }
                }}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button onClick={prevPage} disabled={currentPage.length === 0}>Previous</button>
        <button onClick={nextPage} disabled={currentPage.length === 0}>Next</button>
      </div>
      <p>Page {currentPage.length > 0 ? `${currentPage[0].pageNum} of ${totalPages}` : '0'}</p>
      <Link to="/add">Add User</Link>
    </div>
  );
};

export default UserList;
