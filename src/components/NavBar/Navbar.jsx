import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/teams">Teams</Link>
      <Link to="/new-team">Create Team</Link>
      <Link to="/new-player">Draft Player</Link>
    </nav>
  );
};

export default NavBar;