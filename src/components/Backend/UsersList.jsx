import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    // get -> promise ->  resole(response) / reject(error)
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const deleteUser = (user) => {
    const originalUser = [...users];
    setUsers(users.filter((u) => u.id !== user.id));

    axios.delete('https://jsonplaceholder.typicode.com/users/' + user.id).catch((error) => {
      setError(error.message);
      setUsers(originalUser);
    });
  };

  const addUser = () => {
    const originalUsers = [...users];
    const newUser = {
      id: 0,
      name: 'Sabbir',
    };
    setUsers([newUser, ...users]);

    axios
      .post('https://jsonplaceholder.typicode.com/users', newUser)
      .then(({ data: savedUser }) => setUsers([savedUser, ...users]))
      .catch((error) => {
        setError(error.message);
        setUsers(originalUsers);
      });
  };

  const updateUser = (user) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + '✅' };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

    axios.patch('https://jsonplaceholder.typicode.com/users/' + user.id, updatedUser).catch((error) => {
      setError(error.message);
      setUsers(originalUsers);
    });
  };

  return (
    <div>
      <h1 className='text-center text-primary mt-2'>Users List</h1>
      {isLoading && <div className='spinner-border'></div>}
      <button onClick={addUser} className='btn btn-primary mb-3'>
        Add
      </button>
      {error ? (
        <p className='text-danger'>{error}</p>
      ) : (
        <ul className='list-group'>
          {users.map((user) => (
            <li key={user.id} className='list-group-item d-flex justify-content-between'>
              {user.name}
              <div>
                <button onClick={() => updateUser(user)} className='btn btn-outline-secondary mx-1'>
                  Update
                </button>
                <button onClick={() => deleteUser(user)} className='btn btn-outline-danger'>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UsersList;
