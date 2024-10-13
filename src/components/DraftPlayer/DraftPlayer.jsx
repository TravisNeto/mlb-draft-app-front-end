import React, { useState, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../../services/authContext.js';
const BACKEND_URL = import.meta.env.VITE_API_URL;

const DraftPlayer = () => {
  const [playerId, setPlayerId] = useState('');
  //const { auth } = useContext(AuthContext);

  const handleDraft = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token')
      const teamId = localStorage.getItem('teamId') // added line
      await axios.post(
        BACKEND_URL + '/teams/draft',
        { playerId },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert('Player drafted!');
    } catch (error) {
      console.error('Error drafting player:', error);
    }
  };

  return (
    <div>
      <h2>Draft A Player</h2>
      <form onSubmit={handleDraft}>
        <input
          type="text"
          placeholder="Player ID"
          value={playerId}
          onChange={(e) => setPlayerId(e.target.value)}
        />
        <button type="submit">Draft</button>
      </form>
    </div>
  );
};

export default DraftPlayer;

