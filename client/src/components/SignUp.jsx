import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userSignUp } from '../redux/actions';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  const handleSignUp = (e) => {
    e.preventDefault();

    // Create a newUser object with the username and password
    const newUser = {
      username,
      password,
    };

    // Dispatch the userSignUp action with the newUser object
    dispatch(userSignUp(newUser));
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <div>Error: {error}</div>}
        <button type="submit" disabled={loading}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
