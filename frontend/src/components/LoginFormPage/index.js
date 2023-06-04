import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import './LoginForm.css';
import loginImage from '../../assets/signup_illustration.png';

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const demoLogin = (e) => {
    e.preventDefault();
    return dispatch(
      sessionActions.login({ email: 'caffeine@addict.com', password: 'password' })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ email, password })).catch(
      async (res) => {
        let data;
        try {
          // .clone() essentially allows you to read the response body twice
          data = await res.clone().json();
        } catch {
          data = await res.text(); // Will hit this case if the server is down
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
      }
    );
  };

  return (
    <div className="login-container">
     <div className="form-wrapper">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <ul>
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
          <label className="form-label">
            <input
              className="form-input"
              type="text"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <br />
          <label className="form-label">
            <input
              className="form-input"
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <button className="form-button" type="submit">
            Log In
          </button>
          <div className="button-group">
            <button className="form-button demo-button" onClick={demoLogin}>
              Demo User
            </button>
          </div>
          <div className="signup-text">
            New to Slurp?{' '}
            <Link to="/signup" className="signup-link">
              Sign Up
            </Link>
          </div>
        </form>
        </div>
      </div>
      <img src={loginImage} alt="Login" className="login-image" />
    </div>
  );
}

export default LoginFormPage;
