import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate, useLocation, Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const VITE_AUTH_URL = import.meta.env.VITE_AUTH_URL;

const Signup = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { user, login } = useContext(AuthContext);

  if (user) return <Navigate to="/" replace />;

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${VITE_AUTH_URL}/signup`, form);
      login(res.data.token);

      const from = location.state?.from?.pathname || '/';
      navigate(from, { replace: true });
    } catch (err) {
      setError(err.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-sm p-4" style={{ maxWidth: 400, width: '100%' }}>
        <h3 className="mb-4 text-center fw-bold text-success">Create an Account</h3>
        <form onSubmit={handleSignup} noValidate>
          {error && (
            <div className="alert alert-danger py-2" role="alert">
              {error}
            </div>
          )}
          <div className="mb-3">
            <label htmlFor="username" className="form-label fw-semibold">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="form-control form-control-lg"
              placeholder="Choose a username"
              value={form.username}
              onChange={handleChange}
              required
              autoComplete="username"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="form-label fw-semibold">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control form-control-lg"
              placeholder="Create a password"
              value={form.password}
              onChange={handleChange}
              required
              autoComplete="new-password"
            />
          </div>
          <button
            className="btn btn-success btn-lg w-100 fw-semibold"
            type="submit"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center text-muted">
          Already have an account?{' '}
          <Link to="/login" className="text-decoration-none fw-semibold text-success">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
