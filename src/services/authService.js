const BACKEND_URL = import.meta.env.VITE_API_URL;

const signup = async (formData) => {
  try {
    const res = await fetch(`${BACKEND_URL}/users/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    const json = await res.json();
    if (json.err) {
      throw new Error(json.err);
    }
    localStorage.setItem('token', json.token)
    return json;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const signin = async (user) => {
    try {
      const res = await fetch(`${BACKEND_URL}/users/signin`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      });
      const json = await res.json();
  
      if (json.error) {
        throw new Error(json.error);
      }
  
      if (json.token) {
        const user = JSON.parse(atob(json.token.split('.')[1]));
        localStorage.setItem('token', json.token)
        return user;
      }
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
  
  export { signup, signin };