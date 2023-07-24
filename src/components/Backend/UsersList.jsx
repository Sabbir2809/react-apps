import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => setUsers(res.data))
      .catch((error) => {
        setError(error.message);
      });
  }, []);
  return (
    <div>
      <h1 className='text-center text-primary mt-2'>Users List</h1>
      {error ? (
        <p className='text-danger'>{error}</p>
      ) : (
        <ol>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default UsersList;
