import React, { useState, useEffect } from 'react';

function Teams() {
  const [teams, setTeams] = useState([]);

  // Added fetch logic to retrieve teams data from the codespace API
  useEffect(() => {
    fetch('https://zany-invention-5r64g6w669rc7v4-8000.app.github.dev/api/teams/')
      .then(response => response.json())
      .then(data => setTeams(data))
      .catch(error => console.error('Error fetching teams:', error));
  }, []);

  return (
    <div className="card">
      <div className="card-body">
        <h1 className="card-title">Teams</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Team Name</th>
              <th>Members</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team, index) => (
              <tr key={index}>
                <td>{team.name}</td>
                <td>{team.members}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Teams;