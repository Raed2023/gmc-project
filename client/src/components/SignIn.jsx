import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../redux/actions';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { loading, error } = useSelector(state => state.reducer);

  const dispatch = useDispatch();
  // const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    const newUser = { email, password };
    dispatch(userLogin(newUser ));
  };

  return (
    <div>
      <form>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <h1 className="title-sign-in">Sign In</h1>

            <div className="inputContainer">
              <label htmlFor="email" className="label">
                Email
              </label>
              <br />
              <input
                type="email"
                id="email"
                className="input"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="inputContainer">
              <label htmlFor="password" className="label">
                Password
              </label>
              <br />
              <input
                type="password"
                id="password"
                className="input"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
            </div>

            {error && <p className="error">{error}</p>}

            <button className="Btn-sign-in" onClick={handleSubmit}>
              Sign In
            </button>
          </>
        )}
      </form>

      <Link to="/">Back to Sign in</Link>
    </div>
  );
};

export default SignIn;