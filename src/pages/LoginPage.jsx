import React, { useState } from 'react';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('http://localhost:3000/api/v1/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
    if (response.ok) {
      // login successful, redirect to dashboard
      window.location.href = '/DataAtlit';
    } else {
      // login failed, display error message
      setErrorMessage('Invalid username or password');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {errorMessage && <div>{errorMessage}</div>}
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" value={username} onChange={(event) => setUsername(event.target.value)} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginPage;