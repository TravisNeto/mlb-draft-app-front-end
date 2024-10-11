import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Let's Get Started</h1>
      <p>Please sign in or sign up to start drafting players.</p>
      <div className="auth-buttons">
        <Link to="/signin">
          <button className="btn-primary">Sign In</button>
        </Link>
        <Link to="/signup">
          <button className="btn-secondary">Sign Up</button>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
