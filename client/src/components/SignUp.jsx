import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userSignUp } from '../redux/reduxAuth/actions';
import { Link, Navigate } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState(''); 

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
const {user}=useSelector(state=>state.userReducer)


  const handleSignUp = (e) => {
    e.preventDefault();

    const newUser = {
      email,
      fullName,
      password,
    };
    

    dispatch(userSignUp(newUser));
  };

  return (
    <div className="signup-container">
      {user?<Navigate to='/SignIns'/>:
      <>

        <h2 className="signup-title">Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="userName">UserName:</label>
          <input
            type="text"
            id="userName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
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
        {error && <div className="signup-error">Error: {error}</div>}
        
        <button type="submit" disabled={loading} className="signup-button">
          Sign Up
        </button>
      </form>
      <br />
      <br />
      <h3 className="already">already have an account?</h3>
      <Link to="/SignIns" className="link-sign-up">
        Go to Sign in
      </Link>
  </>
  }
    </div>
  );
};

export default SignUp;
