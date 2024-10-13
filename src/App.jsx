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
  const [user, setUser] = useState({})
  return (
    <div>
      <h1>Welcome to the MLB Draft App!</h1>
      <Routes>
        <Route path="/" element={<Dashboard user={user} setUser={setUser}/>} />
        <Route path="/team" element={<Team user={user} setUser={setUser} />} />
        <Route path="/draft" element={<DraftPlayer user={user}/>} />
        <Route path="/signin" element={<SignInForm user={user} setUser={setUser}/>} />
        <Route path="/signup" element={<SignUpForm user={user} setUser={setUser}/>} />
      </Routes>
    </div>
  );
};


export default App;

