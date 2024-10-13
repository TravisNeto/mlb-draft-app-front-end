import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as teamService from '../../services/teamService.js';

const AddTeamForm = (props) => {
  const navigate = useNavigate();
  const [message, setMessage] = useState(['']);
  const [formData, setFormData] = useState({
    name: '',
  });

  const updateMessage = (msg) => {
    setMessage(msg);
  };

  const handleChange = (e) => {
    updateMessage('');
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('here')
    try {
      const team = await teamService.createTeam(formData);

      console.log('navigate to draft')
      navigate('/draft');
    } catch (err) {
      updateMessage(err.message);
    }
  };

  return (
    <main>
      <h1>Create Team</h1>
      <p>{message}</p>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Team Name:</label>
          <input
            type="text"
            autoComplete="off"
            id="name"
            value={formData.name}
            name="name"
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit" className="button-primary">Create Team</button>
        </div>
      </form>
    </main>
  );
};

export default AddTeamForm;