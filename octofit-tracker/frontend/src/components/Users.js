import React, { useState, useEffect } from 'react';

function Users() {
  const [users, setUsers] = useState([]);

  // Added fetch logic to retrieve users data from the codespace API
  useEffect(() => {
    fetch('https://zany-invention-5r64g6w669rc7v4-8000.app.github.dev/api/users/')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div className="card">
      <div className="card-body">
        <h1 className="card-title">Users</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;