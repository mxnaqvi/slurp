import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import homeIcon from '../../assets/homeicon.png';
import githubIcon from '../../assets/github-mark.png';
import linkedinIcon from '../../assets/LI-In-Bug.png';
import wellfoundIcon from '../../assets/wellfound-symbol-black.png';
import Carousel from '../SplashPage/Carousel';

function Navigation() {
  const sessionUser = useSelector(state => state.session.user);
  const location = useLocation();

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
        {(location.pathname !== '/login' && location.pathname !== '/signup') && (
          <NavLink className="login" to="/login">
            Log In
          </NavLink>
        )}
        {(location.pathname !== '/login' && location.pathname !== '/signup') && (
          <NavLink className="signup" to="/signup">
            Sign Up
          </NavLink>
        )}
      </>
    );
  }

  const shouldDisplayCarousel = location.pathname === '/';
  const shouldDisplaySearchBar = (location.pathname !== '/login' && location.pathname !== '/signup');
  const shouldDisplayGithubLink = (location.pathname !== '/login' && location.pathname !== '/signup');
  const shouldDisplayLinkedInLink = (location.pathname !== '/login' && location.pathname !== '/signup');
  const shouldDisplayCafeButton = (location.pathname === '/');

  return (
    <div className="navigation-container">
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <NavLink to="/">
              <img className="home-icon" src={homeIcon} alt="Home" />
            </NavLink>
          </li>
        </ul>
        {shouldDisplaySearchBar && (
          <div className="search-bar">
            <input type="text" placeholder="Search" />
          </div>
        )}
        <ul className="nav-links">
          {shouldDisplayGithubLink && (
            <li className="github-link">
              <a
                href="https://github.com/mxnaqvi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={githubIcon} alt="GitHub" />
              </a>
            </li>
          )}
          {shouldDisplayLinkedInLink && (
            <li className="linkedin-link">
              <a
                href="https://www.linkedin.com/in/mohammadalinaqvi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedinIcon} alt="LinkedIn" />
              </a>
            </li>
          )}
          {shouldDisplayLinkedInLink && (
            <li className="wellfound-link">
              <a
                href="https://wellfound.com/u/mohammad-naqvi-6"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={wellfoundIcon} alt="LinkedIn" />
              </a>
            </li>
          )}
          <li className="nav-right">{sessionLinks}</li>
        </ul>
      </nav>
      {shouldDisplayCafeButton && (<div className="button-text-container">
        <p className="button-text">Start Slurpin'</p>
        <NavLink className="cafes" to="/businesses">
          Find Cafes
        </NavLink>
      </div>
    )}
      {shouldDisplayCarousel && (
        <div className="carousel-container">
          <Carousel />
        </div>
      )}
    </div>
  );
}

export default Navigation;
