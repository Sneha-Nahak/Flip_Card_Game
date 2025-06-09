import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { FaUserCircle } from 'react-icons/fa';

const NavBar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <NavLink className="navbar-brand" to="/">
        🧠 Tile Match
      </NavLink>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {user && (
            <>
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/leaderboard">
                  Leaderboard
                </NavLink>
              </li>
            </>
          )}
        </ul>

        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          {user ? (
            <>
              <li className="nav-item">
                <span
                  className="nav-link py-2 d-flex align-items-center"
                  style={{ cursor: 'pointer' }}
                >
                  <FaUserCircle
                    className="me-2"
                    style={{ color: 'white', fontSize: '1.2rem' }}
                  />
                  {user.name || user.username}
                </span>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/history">
                  My History
                </NavLink>
              </li>

              <li className="nav-item">
                <button
                  className="btn btn-outline-light btn-sm w-100 mt-2 mt-lg-0"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/signup">
                  Signup
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
