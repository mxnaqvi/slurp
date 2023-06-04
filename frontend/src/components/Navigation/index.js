import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import homeIcon from '../../assets/logo.png'
import Carousel from '../SplashPage/Carousel';

function Navigation() {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
        <NavLink className="login" to="/login">
          Log In
        </NavLink>
        <NavLink className="signup" to="/signup">
          Sign Up
        </NavLink>
      </>
    );
  }

  return (
    <>
    <nav className="navbar">
      <ul className="nav-links">
        <li>
        <NavLink to="/">
            <img className="home-icon" src={homeIcon} alt="Home" />
          </NavLink>
        </li>
      </ul>
      <div className="search-bar">
        <input type="text" placeholder="Search" />
      </div>
      <ul className="nav-links">
        <li className="github-link">
          <a href="https://github.com/mxnaqvi" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </li>
        <li className="linkedin-link">
          <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </li>
        <li className="nav-right">{sessionLinks}</li>
      </ul>
    </nav>
    <Carousel />
    </>
  );
}

export default Navigation;
