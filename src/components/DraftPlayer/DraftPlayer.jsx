import React, { useState, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../../services/authContext.js';

const DraftPlayer = () => {
  const [playerId, setPlayerId] = useState('');
  const { auth } = useContext(AuthContext);

  const handleDraft = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        '/team/draft',
        { playerId },
        { headers: { Authorization: `Bearer ${auth.token}` } }
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
