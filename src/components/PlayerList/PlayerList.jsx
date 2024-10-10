import React, { useState } from 'react';

const PlayerForm = ({ teams, handleAddPlayer }) => {
  const [playerName, setPlayerName] = useState('');
  const [teamId, setTeamId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddPlayer({ name: playerName, teamId });
    setPlayerName('')
  };

  return (
    <div>
      <h2>Draft a Player</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Player Name"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
        />
        <select
          value={teamId}
          onChange={(e) => setTeamId(e.target.value)}
        >
          <option value="">Select a Team</option>
          {teams.map((team, index) => (
            <option key={index} value={index}>
              {team.name}
            </option>
          ))}
        </select>
        <button type="submit">Draft Player</button>
      </form>
    </div>
  );
};

export default PlayerForm;