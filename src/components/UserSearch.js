import React from 'react';

const UserSearch = ({ setSearch, setFilter }) => {
  return (
    <div>
      <input type="text" placeholder="Search by name" onChange={(e) => setSearch(e.target.value)} />
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
    </div>
  );
};

export default UserSearch;
