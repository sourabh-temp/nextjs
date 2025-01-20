"use client";
import React, { useState } from 'react';
import '@/styles/admin/AdLogin.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const validUsername = 'admin';
  const validPassword = 'password';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (username === validUsername && password === validPassword) {
      setMessage('You have successfully logged in!');
    } else {
      setMessage('Invalid username or password.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        {message && <p className="message">{message}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
