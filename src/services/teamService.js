const BACKEND_URL = import.meta.env.VITE_API_URL;

const createTeam = async (formData) => {
    try {
        const token = localStorage.getItem('token')
      const res = await fetch(`${BACKEND_URL}/teams/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify(formData),
      });
      const json = await res.json();
      if (json.err) {
        throw new Error(json.err);
      }
      return json;
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  export {createTeam};