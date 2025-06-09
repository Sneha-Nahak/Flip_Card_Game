import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate, useLocation, Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const VITE_AUTH_URL = import.meta.env.VITE_AUTH_URL;

const Login = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { user, login } = useContext(AuthContext);

  if (user) return <Navigate to="/" replace />;

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${VITE_AUTH_URL}/login`, form);
      login(res.data.token);

      const from = location.state?.from?.pathname || '/';
      navigate(from, { replace: true });
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-sm p-4" style={{ maxWidth: 400, width: '100%' }}>
        <h3 className="mb-4 text-center fw-bold text-primary">Welcome Back</h3>
        <form onSubmit={handleLogin} noValidate>
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
              placeholder="Enter your username"
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
              placeholder="Enter your password"
              value={form.password}
              onChange={handleChange}
              required
              autoComplete="current-password"
            />
          </div>
          <button
            className="btn btn-primary btn-lg w-100 fw-semibold"
            type="submit"
          >
            Log In
          </button>
        </form>
        <p className="mt-4 text-center text-muted">
          Don't have an account?{' '}
          <Link to="/signup" className="text-decoration-none fw-semibold text-primary">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
