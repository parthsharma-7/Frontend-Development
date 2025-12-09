// Q6 - User Registration With Duplicate Check (Axios + GET + POST)
// Run JSON Server for this question only:
//   json-server --watch db.json --port 3006

const API_BASE_Q6 = 'http://localhost:3006';

window.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('regForm');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const messageDiv = document.getElementById('message');

  function setMessage(text, type) {
    messageDiv.textContent = text;
    messageDiv.className = type === 'error' ? 'error' : 'success';
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!name || !email || !password) {
      setMessage('All fields are required.', 'error');
      return;
    }

    try {
      const res = await axios.get(`${API_BASE_Q6}/users`, { params: { email } });
      if (Array.isArray(res.data) && res.data.length > 0) {
        setMessage('Email already registered.', 'error');
        return;
      }

      await axios.post(`${API_BASE_Q6}/users`, { name, email, password });
      setMessage('Registration successful!', 'success');
      form.reset();
    } catch (err) {
      setMessage('Error during registration. Please try again.', 'error');
    }
  });
});
