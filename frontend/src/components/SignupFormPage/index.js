import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css';
import signupImage from '../../assets/signup_illustration.png';

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [email, setEmail] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const demoLogin = (e) => {
    e.preventDefault();
    return dispatch(sessionActions.login({ email: 'caffeine@addict.com', password: 'password' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, fname, lname, zipcode, password}))
        .catch(async (res) => {
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
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
    <div className="signup-container">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label className="form-label">
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <div className="form-group">
          <label className="form-label">
          <div className="form-input-group">
            <input
              className="form-input"
              type="text"
              placeholder="First Name"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
            />
            <input
              className="form-input"
              type="text"
              placeholder="Last Name"
              value={lname}
              onChange={(e) => setLname(e.target.value)}
            />
          </div>
        </label>
          </div>
          <label className="form-label">
            <input
              className="form-input"
              type="text"
              value={zipcode}
              placeholder="Zipcode"
              onChange={(e) => setZipcode(e.target.value)}
            />
          </label>
          <label>
            <input
              className="form-input"
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <label>
            <input
              className="form-input"
              type="password"
              value={confirmPassword}
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </label>
          {errors.length > 0 && (
            <ul className="error-list">
              {errors.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          )}
          <br />
          <button type="submit" className="signup-button">Sign Up</button>
          <button onClick={demoLogin} className="signup-button">Demo Login</button>
          <div className="login-link">
            Already have an account?{' '}
            <Link to="/login" className="login-link-text">
              Log In
            </Link>
          </div>
        </form>
      </div>
      <img src={signupImage} alt="Signup" className="signup-image" />
    </div>
  );
}

export default SignupFormPage;
