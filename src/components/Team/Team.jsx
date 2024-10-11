import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../../services/authContext.js';

const Team = () => {
  const { auth } = useContext(AuthContext);
  const [team, setTeam] = useState(null);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const response = await axios.get('/team', {
          headers: { Authorization: `Bearer ${auth.token}` },
        });
        setTeam(response.data);
      } catch (error) {
        console.error('Error finding team:', error);
      }
    };

    if (auth.token) {
      fetchTeam();
    }
  }, [auth]);

  if (!team) return <p>Loading team...</p>;

  return (
    <div>
      <h2>{team.name}</h2>
      <ul>
        {team.players.map((player) => (
          <li key={player._id}>{player.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Team;

