import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Team from './components/Team/Team.jsx'; 
import Dashboard from './components/Dashboard/Dashboard.jsx';
import DraftPlayer from './components/DraftPlayer/DraftPlayer.jsx';
import SignInForm from './components/SignInForm/SignInForm';
import SignUpForm from './components/SignUpForm/SignUpForm';
import './App.css'

const App = () => {
  const [teams, setTeams] = useState([]);

  return (
    <div>
      <h1>Welcome to the MLB Draft App!</h1>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/team" element={<Team />} />
        <Route path="/draft" element={<DraftPlayer />} />
        <Route path="/signin" element={<SignInForm />} />
        <Route path="/signup" element={<SignUpForm />} />
      </Routes>
    </div>
  );
};

export default App;

